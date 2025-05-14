
import { useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";
import { useFormPersistence } from "@/hooks/useFormPersistence";
import { useAuth } from "@/hooks/use-auth";

export function useIntakeFormPageLogic() {
  const { user } = useAuth();
  
  // Get the initial state structure
  const initialFormState = {
    step: 1,
    isSubmitting: false,
    formErrors: {
      personalInfo: {},
      spouseInfo: {},
      childrenInfo: {},
      poaInfo: {},
      executorInfo: {},
      trusteeInfo: {},
      assetsInfo: {},
      specialBequestsInfo: {}
    },
    personalInfo: {
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: undefined,
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      maritalStatus: "",
      spouseFullName: "",
    },
    spouseInfo: {
      spouseFirstName: "",
      spouseMiddleName: "",
      spouseLastName: "",
      spouseDateOfBirth: undefined,
      spouseEmail: "",
      spousePhone: "",
    },
    childrenInfo: {
      hasChildren: false,
      children: [],
    },
    poaInfo: {
      useSpouseAsPrimaryPOA: false,
      primaryPOA: {
        fullName: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        phone: "",
        email: "",
        isMedicalPOA: false,
      },
      alternatePOA: {
        fullName: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        phone: "",
        email: "",
        isMedicalPOA: false,
      },
      additionalAlternatePOAs: [],
      hasAdditionalAlternatePOAs: false,
    },
    executorInfo: {
      useSpouseAsExecutor: false,
      primaryExecutor: {
        name: "",
        relationship: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        phone: "",
        email: "",
      },
      alternateExecutor: {
        name: "",
        relationship: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        phone: "",
        email: "",
      },
      additionalAlternateExecutors: [],
    },
    trusteeInfo: {
      useSameAsExecutor: false,
      primaryTrustee: {
        name: "",
        relationship: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        phone: "",
        email: ""
      },
      alternateTrustee: {
        name: "",
        relationship: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        phone: "",
        email: ""
      },
      additionalAlternateTrustees: []
    },
    assetsInfo: {
      realEstate: "",
      bankAccounts: "",
      investments: "",
      retirementAccounts: "",
      businessInterests: "",
      lifeInsurance: "",
      personalProperty: "",
      otherAssets: "",
      selectedCategories: {
        realEstate: false,
        bankAccounts: false,
        investments: false,
        retirementAccounts: false,
        businessInterests: false,
        lifeInsurance: false,
        personalProperty: false,
        otherAssets: false
      }
    },
    specialBequestsInfo: {
      hasSpecialBequests: false,
      specialBequests: [
        {
          item: "",
          recipient: "",
          relationship: "",
        },
      ],
    },
    additionalNotes: ""
  };

  // Use our form persistence hook
  const {
    data: formState,
    updateData: setFormState,
    persistData: saveForm,
    lastSaved,
    isLoading
  } = useFormPersistence('intake_form', initialFormState);

  // Update handlers
  const setStep = (newStep: number) => {
    setFormState({...formState, step: newStep});
  };

  const setIsSubmitting = (value: boolean) => {
    setFormState({...formState, isSubmitting: value});
  };

  const setPersonalInfo = (value: any) => {
    setFormState({...formState, personalInfo: value});
  };

  const setSpouseInfo = (value: any) => {
    setFormState({...formState, spouseInfo: value});
  };

  const setChildrenInfo = (value: any) => {
    setFormState({...formState, childrenInfo: value});
  };

  const setPoaInfo = (value: any) => {
    setFormState({...formState, poaInfo: value});
  };

  const setExecutorInfo = (value: any) => {
    setFormState({...formState, executorInfo: value});
  };

  const setTrusteeInfo = (value: any) => {
    setFormState({...formState, trusteeInfo: value});
  };

  const setAssetsInfo = (value: any) => {
    setFormState({...formState, assetsInfo: value});
  };

  const setSpecialBequestsInfo = (value: any) => {
    setFormState({...formState, specialBequestsInfo: value});
  };

  const setAdditionalNotes = (value: string) => {
    setFormState({...formState, additionalNotes: value});
  };

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

  // Combined form data for submission
  const formData = {
    personal: formState.personalInfo,
    spouse: formState.spouseInfo,
    children: formState.childrenInfo,
    powerOfAttorney: formState.poaInfo,
    executor: formState.executorInfo,
    trustee: formState.trusteeInfo,
    assets: formState.assetsInfo,
    specialBequests: formState.specialBequestsInfo,
    additionalNotes: formState.additionalNotes,
  };

  // Save form progress periodically
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      saveForm();
    }, 120000); // Auto-save every 2 minutes

    return () => clearInterval(autoSaveInterval);
  }, [formState, saveForm]);

  // Prepare all the state and handlers for the form
  const { 
    step,
    personalInfo,
    spouseInfo,
    childrenInfo,
    poaInfo,
    executorInfo,
    trusteeInfo,
    assetsInfo,
    specialBequestsInfo,
    additionalNotes,
    isSubmitting,
    formErrors 
  } = formState;

  // Added console log for debugging
  console.log("Form logic state with step:", step);

  return {
    formState,
    formData,
    isLoading,
    lastSaved,
    saveForm,
    formParts: {
      step,
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
      isSubmitting,
      setIsSubmitting,
      formErrors,
      setStep,
      nextStep,
      prevStep,
      validatePersonalInfo,
      validateSpouseInfo
    }
  };
}
