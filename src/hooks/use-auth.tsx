
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
  isAuthenticated: boolean; // Added isAuthenticated property
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
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add state for isAuthenticated

  useEffect(() => {
    // Check for existing session on mount
    const storedSession = localStorage.getItem('woodlands_auth_session');
    if (storedSession) {
      try {
        const userData = JSON.parse(storedSession) as User;
        setUser(userData);
        setIsAuthenticated(true); // Set to true when user is found
      } catch (e) {
        localStorage.removeItem('woodlands_auth_session');
        setIsAuthenticated(false); // Set to false on error
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulate API request delay
    await new Promise(r => setTimeout(r, 800));
    
    try {
      console.log("Login attempt with:", { email }); // Debug logging
      
      const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
      const users: StoredUser[] = usersJson ? JSON.parse(usersJson) : [];
      
      console.log("Found users in storage:", users.length); // Debug logging
      
      // Case-insensitive email comparison but case-sensitive password
      const userMatch = users.find(u => 
        u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );
      
      console.log("User match found:", userMatch ? "yes" : "no"); // Debug logging
      
      if (userMatch) {
        const userData: User = {
          id: userMatch.id,
          email: userMatch.email
        };
        localStorage.setItem('woodlands_auth_session', JSON.stringify(userData));
        setUser(userData);
        setIsAuthenticated(true); // Set to true on successful login
        
        toast({
          title: "Login Successful",
          description: `Welcome back, ${userMatch.email}!`,
        });
        
        return true;
      } else {
        // Create a test user if no users exist
        if (users.length === 0) {
          console.log("No users found, creating test user");
          const testUser: StoredUser = {
            id: crypto.randomUUID(),
            email: "test@example.com",
            password: "password123"
          };
          
          users.push(testUser);
          localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
          
          toast({
            title: "Test Account Created",
            description: "Email: test@example.com, Password: password123",
          });
        }
        
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive"
        });
        return false;
      }
    } catch (error) {
      console.error("Login error:", error); // Debug logging
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
      
      // Check if user already exists (case insensitive email comparison)
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
      setIsAuthenticated(true); // Set to true after successful registration
      
      toast({
        title: "Registration Successful",
        description: "Your account has been created.",
      });
      return true;
    } catch (error) {
      console.error("Registration error:", error);
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
    setIsAuthenticated(false); // Set to false on logout
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoading, isAuthenticated }}>
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
