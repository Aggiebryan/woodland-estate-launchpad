
import { toast } from "@/components/ui/use-toast";

interface FormState {
  step: number;
  formErrors: Record<string, Record<string, string>>;
  [key: string]: any;
}

interface ValidationFunctions {
  validatePersonalInfo: () => boolean;
  validateSpouseInfo: () => boolean;
}

export function useFormStepNavigation(
  formState: FormState,
  setFormState: (state: FormState) => void,
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
    const { step } = formState;
    
    if (step === 1) {
      isValid = validatePersonalInfo() && validateSpouseInfo();
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
