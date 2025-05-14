
import React from "react";
import { Navigate } from "react-router-dom";
import AuthWrapper from "@/components/auth/AuthWrapper";
import { useAuth } from "@/hooks/use-auth";
import SEOHead from "@/components/shared/SEOHead";

const Login = () => {
  const { isAuthenticated } = useAuth();
  
  // If already authenticated, redirect to intake form
  if (isAuthenticated) {
    return <Navigate to="/intake-form" replace />;
  }

  return (
    <>
      <SEOHead
        title="Login | Estate Planning Portal"
        description="Access your secure estate planning portal. Login to view or update your estate planning documents with The Woodlands Law Firm."
      />
      <AuthWrapper>
        {/* This will not render because AuthWrapper will show the login form when not authenticated */}
        <div></div>
      </AuthWrapper>
    </>
  );
};

export default Login;
