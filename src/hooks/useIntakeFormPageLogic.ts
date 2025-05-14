
import { useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";
import { useFormPersistence } from "@/hooks/useFormPersistence";
import { useAuth } from "@/hooks/use-auth";
import { useFormStepNavigation } from './intakeForm/useFormStepNavigation';
import { useFormStateUpdaters } from './intakeForm/useFormStateUpdaters';
import { useFormValidation } from './intakeForm/useFormValidation';
import { useFormDataPreparation } from './intakeForm/useFormDataPreparation';
import { initialIntakeFormState } from "./intakeForm/initialState";

export function useIntakeFormPageLogic() {
  const { user } = useAuth();
  
  // Use our form persistence hook
  const {
    data: formState,
    updateData: setFormState,
    persistData: saveForm,
    lastSaved,
    isLoading
  } = useFormPersistence('intake_form', initialIntakeFormState);

  // Form validation hooks
  const { validatePersonalInfo, validateSpouseInfo } = useFormValidation(formState, setFormState);
  
  // Form state update handlers
  const stateUpdaters = useFormStateUpdaters(formState, setFormState);
  
  // Navigation handlers
  const navigation = useFormStepNavigation(
    formState, 
    setFormState, 
    saveForm, 
    { validatePersonalInfo, validateSpouseInfo }
  );
  
  // Prepare form data for submission
  const { formData } = useFormDataPreparation(formState);

  // Save form progress periodically
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      saveForm();
    }, 120000); // Auto-save every 2 minutes

    return () => clearInterval(autoSaveInterval);
  }, [formState, saveForm]);

  // Added console log for debugging
  console.log("Form state in useIntakeFormPageLogic:", formState);
  console.log("Current user:", user);
  console.log("Is loading:", isLoading);

  return {
    formState,
    formData,
    isLoading,
    lastSaved,
    saveForm,
    formParts: {
      step: formState.step,
      personalInfo: formState.personalInfo,
      setPersonalInfo: stateUpdaters.setPersonalInfo,
      spouseInfo: formState.spouseInfo,
      setSpouseInfo: stateUpdaters.setSpouseInfo,
      childrenInfo: formState.childrenInfo,
      setChildrenInfo: stateUpdaters.setChildrenInfo,
      poaInfo: formState.poaInfo,
      setPoaInfo: stateUpdaters.setPoaInfo,
      executorInfo: formState.executorInfo,
      setExecutorInfo: stateUpdaters.setExecutorInfo,
      trusteeInfo: formState.trusteeInfo,
      setTrusteeInfo: stateUpdaters.setTrusteeInfo,
      assetsInfo: formState.assetsInfo,
      setAssetsInfo: stateUpdaters.setAssetsInfo,
      specialBequestsInfo: formState.specialBequestsInfo,
      setSpecialBequestsInfo: stateUpdaters.setSpecialBequestsInfo,
      additionalNotes: formState.additionalNotes,
      setAdditionalNotes: stateUpdaters.setAdditionalNotes,
      isSubmitting: formState.isSubmitting,
      setIsSubmitting: stateUpdaters.setIsSubmitting,
      formErrors: formState.formErrors,
      setStep: navigation.setStep,
      nextStep: navigation.nextStep,
      prevStep: navigation.prevStep,
      validatePersonalInfo,
      validateSpouseInfo
    }
  };
}
