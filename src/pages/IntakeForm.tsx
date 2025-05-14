
import React from "react";
import { toast } from "@/components/ui/use-toast";
import MainLayout from "@/components/layout/MainLayout";
import { useIntakeFormState } from "@/hooks/useIntakeFormState";
import FormProgress from "@/components/intake-form/FormProgress";
import Step1PersonalInfo from "@/components/intake-form/steps/Step1PersonalInfo";
import Step2FamilyInfo from "@/components/intake-form/steps/Step2FamilyInfo";
import Step3FiduciariesInfo from "@/components/intake-form/steps/Step3FiduciariesInfo";
import Step4AssetsInfo from "@/components/intake-form/steps/Step4AssetsInfo";
import Step5FinalDetails from "@/components/intake-form/steps/Step5FinalDetails";

const IntakeForm = () => {
  const {
    step,
    setStep,
    isSubmitting,
    setIsSubmitting,
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
    prevStep
  } = useIntakeFormState();

  // Combined form data for submission
  const formData = {
    personal: personalInfo,
    spouse: spouseInfo,
    children: childrenInfo,
    powerOfAttorney: poaInfo,
    executor: executorInfo,
    trustee: trusteeInfo,
    assets: assetsInfo,
    specialBequests: specialBequestsInfo,
    additionalNotes,
  };

  // Render steps
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1PersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            spouseInfo={spouseInfo}
            setSpouseInfo={setSpouseInfo}
            nextStep={nextStep}
          />
        );

      case 2:
        return (
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
          />
        );

      case 3:
        return (
          <Step3FiduciariesInfo
            executorInfo={executorInfo}
            setExecutorInfo={setExecutorInfo}
            trusteeInfo={trusteeInfo}
            setTrusteeInfo={setTrusteeInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            setChildrenInfo={setChildrenInfo}
            setSpecialBequestsInfo={setSpecialBequestsInfo}
          />
        );

      case 4:
        return (
          <Step4AssetsInfo
            assetsInfo={assetsInfo}
            setAssetsInfo={setAssetsInfo}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      case 5:
        return (
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
        );

      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <MainLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-woodlands-gold mb-4">
            Estate Planning Intake Form
          </h1>
          <p className="text-woodlands-cream opacity-80">
            Please provide the following information to help us prepare your estate planning documents.
          </p>
        </div>

        <div className="bg-woodlands-purple-dark p-6 md:p-8 rounded-lg shadow-lg">
          <FormProgress step={step} totalSteps={5} />
          <div className="space-y-6">{renderStep()}</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IntakeForm;
