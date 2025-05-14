
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import FormProgress from "@/components/intake-form/FormProgress";
import AuthWrapper from "@/components/auth/AuthWrapper";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import FormHeader from "@/components/intake-form/FormHeader";
import FormStepRenderer from "@/components/intake-form/FormStepRenderer";
import FormLoading from "@/components/intake-form/FormLoading";
import { useIntakeFormPageLogic } from "@/hooks/useIntakeFormPageLogic";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "@/components/ui/use-toast";

const IntakeForm = () => {
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  const {
    formState,
    formData,
    isLoading,
    lastSaved,
    saveForm,
    formParts
  } = useIntakeFormPageLogic();

  // Added console log for debugging
  console.log("Rendering IntakeForm component", {
    isAuthenticated,
    authLoading,
    isLoading,
    formState,
    formParts
  });

  // If not authenticated and not loading, redirect to login
  if (!authLoading && !isAuthenticated) {
    console.log("User not authenticated, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  // Show loading state while checking authentication or loading form data
  if (authLoading || isLoading) {
    return (
      <MainLayout>
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <FormLoading />
        </div>
      </MainLayout>
    );
  }

  // Make sure formState has been properly initialized
  if (!formState || !formParts || !formParts.personalInfo) {
    console.error("Form state not properly initialized:", { formState, formParts });
    
    return (
      <MainLayout>
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="bg-woodlands-purple-dark p-6 md:p-8 rounded-lg shadow-lg">
            <div className="text-red-500 text-center p-4">
              <h2 className="text-xl font-bold mb-2">Error Initializing Form</h2>
              <p>There was a problem loading your form data. Please try refreshing the page or contact support.</p>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <AuthWrapper>
      <MainLayout>
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <FormHeader saveForm={saveForm} lastSaved={lastSaved} />

          <div className="bg-woodlands-purple-dark p-6 md:p-8 rounded-lg shadow-lg">
            <ErrorBoundary>
              <FormProgress step={formParts.step} totalSteps={5} />
              <div className="space-y-6">
                <FormStepRenderer 
                  step={formParts.step} 
                  formProps={formParts}
                  formData={formData}
                />
              </div>
            </ErrorBoundary>
          </div>
        </div>
      </MainLayout>
    </AuthWrapper>
  );
};

export default IntakeForm;
