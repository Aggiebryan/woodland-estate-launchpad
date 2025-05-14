
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

// Define the User and Auth contexts
export interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (email: string, password: string) => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user storage - in production, this would connect to a secure backend
const USERS_STORAGE_KEY = 'woodlands_users';

interface StoredUser {
  id: string;
  email: string;
  password: string;
}

// AuthProvider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const storedSession = localStorage.getItem('woodlands_auth_session');
    if (storedSession) {
      try {
        const userData = JSON.parse(storedSession) as User;
        setUser(userData);
      } catch (e) {
        localStorage.removeItem('woodlands_auth_session');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulate API request delay
    await new Promise(r => setTimeout(r, 800));
    
    try {
      const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
      const users: StoredUser[] = usersJson ? JSON.parse(usersJson) : [];
      
      const userMatch = users.find(u => 
        u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );
      
      if (userMatch) {
        const userData: User = {
          id: userMatch.id,
          email: userMatch.email
        };
        localStorage.setItem('woodlands_auth_session', JSON.stringify(userData));
        setUser(userData);
        return true;
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive"
        });
        return false;
      }
    } catch (error) {
      toast({
        title: "Login Error",
        description: "There was a problem logging in. Please try again.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  
  const register = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulate API request delay
    await new Promise(r => setTimeout(r, 800));
    
    try {
      const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
      const users: StoredUser[] = usersJson ? JSON.parse(usersJson) : [];
      
      // Check if user already exists
      if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        toast({
          title: "Registration Failed",
          description: "An account with this email already exists.",
          variant: "destructive"
        });
        return false;
      }
      
      const newUser: StoredUser = {
        id: crypto.randomUUID(),
        email,
        password
      };
      
      users.push(newUser);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      
      // Auto login after registration
      const userData: User = {
        id: newUser.id,
        email: newUser.email
      };
      localStorage.setItem('woodlands_auth_session', JSON.stringify(userData));
      setUser(userData);
      
      toast({
        title: "Registration Successful",
        description: "Your account has been created.",
      });
      return true;
    } catch (error) {
      toast({
        title: "Registration Error",
        description: "There was a problem creating your account. Please try again.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = () => {
    localStorage.removeItem('woodlands_auth_session');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook for using auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
