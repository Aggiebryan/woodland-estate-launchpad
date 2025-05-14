
import { FormErrors, IntakeFormState } from "@/types/intakeFormTypes";
import { validatePersonalInfo as validatePersonalInfoUtil, validateSpouseInfo as validateSpouseInfoUtil } from "@/utils/formValidation";

export function useFormValidation(
  formState: IntakeFormState, 
  setFormState: (state: IntakeFormState) => void
) {
  const validatePersonalInfo = () => {
    const { personalInfo } = formState;
    
    // Create a new errors object to be passed to the validation function
    const tempFormErrors = { ...formState.formErrors };
    
    // Use the utility validation function to validate personal info
    const isValid = validatePersonalInfoUtil(
      personalInfo,
      tempFormErrors,
      (updatedErrors) => {
        // This callback is called by the validation function with updated errors
        setFormState({
          ...formState,
          formErrors: updatedErrors
        });
      }
    );
    
    return isValid;
  };

  const validateSpouseInfo = () => {
    const { personalInfo, spouseInfo } = formState;
    
    // Only validate if married
    if (personalInfo.maritalStatus !== "married") return true;

    // Create a new errors object to be passed to the validation function
    const tempFormErrors = { ...formState.formErrors };
    
    // Use the utility validation function to validate spouse info
    const isValid = validateSpouseInfoUtil(
      personalInfo,
      spouseInfo,
      tempFormErrors,
      (updatedErrors) => {
        // This callback is called by the validation function with updated errors
        setFormState({
          ...formState,
          formErrors: updatedErrors
        });
      }
    );
    
    return isValid;
  };

  return {
    validatePersonalInfo,
    validateSpouseInfo
  };
}
