
import React from "react";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import Step1PersonalInfo from "@/components/intake-form/steps/Step1PersonalInfo";
import Step2FamilyInfo from "@/components/intake-form/steps/Step2FamilyInfo";
import Step3FiduciariesInfo from "@/components/intake-form/steps/Step3FiduciariesInfo";
import Step4AssetsInfo from "@/components/intake-form/steps/Step4AssetsInfo";
import Step5FinalDetails from "@/components/intake-form/steps/Step5FinalDetails";

interface FormStepRendererProps {
  step: number;
  formState: any;
  formProps: {
    personalInfo: any;
    setPersonalInfo: any;
    spouseInfo: any;
    setSpouseInfo: any;
    childrenInfo: any;
    setChildrenInfo: any;
    poaInfo: any;
    setPoaInfo: any;
    executorInfo: any;
    setExecutorInfo: any;
    trusteeInfo: any;
    setTrusteeInfo: any;
    assetsInfo: any;
    setAssetsInfo: any;
    specialBequestsInfo: any;
    setSpecialBequestsInfo: any;
    additionalNotes: string;
    setAdditionalNotes: (value: string) => void;
    nextStep: () => void;
    prevStep: () => void;
    validatePersonalInfo: () => boolean;
    validateSpouseInfo: () => boolean;
    isSubmitting: boolean;
    setIsSubmitting: (value: boolean) => void;
    setStep: (step: number) => void;
    formErrors: Record<string, Record<string, string>>;
  };
  formData: any;
}

const FormStepRenderer: React.FC<FormStepRendererProps> = ({ 
  step, 
  formProps,
  formData
}) => {
  const {
    personalInfo,
    setPersonalInfo,
    spouseInfo,
    setSpouseInfo,
    childrenInfo,
    setChildrenInfo,
    poaInfo,
    setPoaInfo,
    executorInfo,
    setExecutorInfo,
    trusteeInfo,
    setTrusteeInfo,
    assetsInfo,
    setAssetsInfo,
    specialBequestsInfo,
    setSpecialBequestsInfo,
    additionalNotes,
    setAdditionalNotes,
    nextStep,
    prevStep,
    validatePersonalInfo,
    validateSpouseInfo,
    isSubmitting,
    setIsSubmitting,
    setStep,
    formErrors
  } = formProps;

  switch (step) {
    case 1:
      return (
        <ErrorBoundary>
          <Step1PersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            spouseInfo={spouseInfo}
            setSpouseInfo={setSpouseInfo}
            nextStep={nextStep}
            validatePersonalInfo={validatePersonalInfo}
            validateSpouseInfo={validateSpouseInfo}
            formErrors={formErrors}
          />
        </ErrorBoundary>
      );

    case 2:
      return (
        <ErrorBoundary>
          <Step2FamilyInfo
            childrenInfo={childrenInfo}
            setChildrenInfo={setChildrenInfo}
            poaInfo={poaInfo}
            setPoaInfo={setPoaInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            setExecutorInfo={setExecutorInfo}
            setTrusteeInfo={setTrusteeInfo}
            setSpecialBequestsInfo={setSpecialBequestsInfo}
            personalInfo={personalInfo}
            spouseInfo={spouseInfo}
          />
        </ErrorBoundary>
      );

    case 3:
      return (
        <ErrorBoundary>
          <Step3FiduciariesInfo
            executorInfo={executorInfo}
            setExecutorInfo={setExecutorInfo}
            trusteeInfo={trusteeInfo}
            setTrusteeInfo={setTrusteeInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            setChildrenInfo={setChildrenInfo}
            setSpecialBequestsInfo={setSpecialBequestsInfo}
            personalInfo={personalInfo}
            spouseInfo={spouseInfo}
          />
        </ErrorBoundary>
      );

    case 4:
      return (
        <ErrorBoundary>
          <Step4AssetsInfo
            assetsInfo={assetsInfo}
            setAssetsInfo={setAssetsInfo}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </ErrorBoundary>
      );

    case 5:
      return (
        <ErrorBoundary>
          <Step5FinalDetails
            specialBequestsInfo={specialBequestsInfo}
            setSpecialBequestsInfo={setSpecialBequestsInfo}
            additionalNotes={additionalNotes}
            setAdditionalNotes={setAdditionalNotes}
            prevStep={prevStep}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            setStep={setStep}
            formData={formData}
            setChildrenInfo={setChildrenInfo}
            setExecutorInfo={setExecutorInfo}
            setTrusteeInfo={setTrusteeInfo}
          />
        </ErrorBoundary>
      );

    default:
      return <div>Unknown step</div>;
  }
};

export default FormStepRenderer;
