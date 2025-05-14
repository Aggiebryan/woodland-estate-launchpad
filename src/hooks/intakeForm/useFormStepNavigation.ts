
import { toast } from "@/hooks/use-toast";
import { FormErrors, IntakeFormState } from "@/types/intakeFormTypes";

interface ValidationFunctions {
  validatePersonalInfo: () => boolean;
  validateSpouseInfo: () => boolean;
}

export function useFormStepNavigation(
  formState: IntakeFormState,
  setFormState: (state: IntakeFormState) => void,
  saveForm: () => void,
  validationFns: ValidationFunctions
) {
  const { validatePersonalInfo, validateSpouseInfo } = validationFns;
  
  const setStep = (newStep: number) => {
    setFormState({...formState, step: newStep});
  };

  const nextStep = () => {
    // Validate current step before proceeding
    let isValid = true;
    const { step, personalInfo } = formState;
    
    if (step === 1) {
      console.log("Validating step 1");
      isValid = validatePersonalInfo();
      console.log("Personal info validation result:", isValid);
      
      if (isValid && personalInfo?.maritalStatus === "married") {
        isValid = validateSpouseInfo();
        console.log("Spouse info validation result:", isValid);
      }
    }
    
    if (isValid) {
      setFormState({...formState, step: step + 1});
      window.scrollTo(0, 0);
      // Auto-save on step progress
      saveForm();
    } else {
      // Show error toast if validation fails
      toast({
        title: "Validation Error",
        description: "Please fix the highlighted errors before continuing",
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    setFormState({...formState, step: formState.step - 1});
    window.scrollTo(0, 0);
    // Auto-save on step navigation
    saveForm();
  };

  return {
    setStep,
    nextStep,
    prevStep
  };
}
