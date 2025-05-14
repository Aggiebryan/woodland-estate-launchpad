
import { FormErrors, IntakeFormState } from "@/types/intakeFormTypes";

export function useFormValidation(formState: IntakeFormState, setFormState: (state: IntakeFormState) => void) {
  const validatePersonalInfo = () => {
    const errors: Record<string, string> = {};
    const { personalInfo } = formState;
    
    if (!personalInfo.firstName.trim()) errors.firstName = "First name is required";
    if (!personalInfo.lastName.trim()) errors.lastName = "Last name is required";
    if (!personalInfo.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
    if (!personalInfo.email.trim()) {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(personalInfo.email)) {
        errors.email = "Please enter a valid email address";
      }
    }
    
    if (!personalInfo.phone.trim()) {
      errors.phone = "Phone number is required";
    } else {
      // Check for (XXX) XXX-XXXX format
      const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
      if (!phoneRegex.test(personalInfo.phone)) {
        errors.phone = "Phone number must be in (XXX) XXX-XXXX format";
      }
    }
    
    if (!personalInfo.address.trim()) errors.address = "Address is required";
    if (!personalInfo.city.trim()) errors.city = "City is required";
    if (!personalInfo.state.trim()) errors.state = "State is required";
    
    if (!personalInfo.zipCode.trim()) {
      errors.zipCode = "ZIP code is required";
    } else {
      const zipRegex = /^\d{5}(-\d{4})?$/;
      if (!zipRegex.test(personalInfo.zipCode)) {
        errors.zipCode = "ZIP code must be in XXXXX or XXXXX-XXXX format";
      }
    }
    
    if (!personalInfo.maritalStatus) errors.maritalStatus = "Marital status is required";
    
    // Check if spouse's name is required based on marital status
    if (["separated", "divorced", "widowed"].includes(personalInfo.maritalStatus) && 
        !personalInfo.spouseFullName.trim()) {
      errors.spouseFullName = "Spouse's full name is required";
    }
    
    setFormState({
      ...formState, 
      formErrors: { ...formState.formErrors, personalInfo: errors }
    });
    
    return Object.keys(errors).length === 0;
  };

  const validateSpouseInfo = () => {
    const { personalInfo, spouseInfo } = formState;
    // Only validate if married
    if (personalInfo.maritalStatus !== "married") return true;

    const errors: Record<string, string> = {};
    
    if (!spouseInfo.spouseFirstName.trim()) errors.spouseFirstName = "Spouse's first name is required";
    if (!spouseInfo.spouseLastName.trim()) errors.spouseLastName = "Spouse's last name is required";
    if (!spouseInfo.spouseDateOfBirth) errors.spouseDateOfBirth = "Spouse's date of birth is required";
    
    if (spouseInfo.spouseEmail.trim()) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(spouseInfo.spouseEmail)) {
        errors.spouseEmail = "Please enter a valid email address";
      }
    }
    
    if (spouseInfo.spousePhone.trim()) {
      const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
      if (!phoneRegex.test(spouseInfo.spousePhone)) {
        errors.spousePhone = "Phone number must be in (XXX) XXX-XXXX format";
      }
    }
    
    setFormState({
      ...formState, 
      formErrors: { ...formState.formErrors, spouseInfo: errors }
    });
    
    return Object.keys(errors).length === 0;
  };

  return {
    validatePersonalInfo,
    validateSpouseInfo
  };
}
