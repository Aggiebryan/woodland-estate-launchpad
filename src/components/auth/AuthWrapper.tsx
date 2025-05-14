
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "@/components/shared/ErrorBoundary";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const [showLogin, setShowLogin] = useState(true);
  const { user, logout, isLoading } = useAuth();

  console.log("AuthWrapper rendering, user:", user ? "logged in" : "not logged in");

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-woodlands-purple">
        <div className="text-woodlands-gold text-xl">Loading authentication...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-woodlands-darkpurple via-woodlands-purple to-woodlands-lightpurple">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <img 
                src="/lovable-uploads/eec20be5-5337-4ef4-bf2e-108bd0116fda.png" 
                alt="The Woodlands Law Firm" 
                className="h-16 mx-auto mb-6"
              />
              <h1 className="text-3xl font-bold text-woodlands-gold">
                {showLogin ? "Sign In" : "Create an Account"}
              </h1>
              <p className="mt-2 text-woodlands-cream">
                {showLogin 
                  ? "Access your estate planning intake form" 
                  : "Start your estate planning journey"}
              </p>
            </div>
            
            <div className="bg-woodlands-purple-dark p-6 md:p-8 rounded-lg shadow-lg border border-woodlands-gold/20">
              <ErrorBoundary>
                {showLogin ? (
                  <LoginForm onToggleForm={() => setShowLogin(false)} />
                ) : (
                  <RegisterForm onToggleForm={() => setShowLogin(true)} />
                )}
              </ErrorBoundary>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-woodlands-cream opacity-80">
                Your information is secure and protected by our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  console.log("Rendering authenticated content");
  return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default AuthWrapper;
