import { useState } from "react";

export interface PersonalInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: Date | undefined;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  maritalStatus: string;
  spouseFullName: string;
}

export interface SpouseInfo {
  spouseFirstName: string;
  spouseMiddleName: string;
  spouseLastName: string;
  spouseDateOfBirth: Date | undefined;
  spouseEmail: string;
  spousePhone: string;
}

export interface ChildInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  isMinor: boolean;
  livesWithClient: boolean;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  relationship: "currentMarriage" | "previousMarriage" | "adopted";
  otherParentName: string;
}

export interface ChildrenInfo {
  hasChildren: boolean;
  children: ChildInfo[];
}

export interface PowerOfAttorneyInfo {
  useSpouseAsPrimaryPOA: boolean;
  primaryPOA: {
    fullName: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    phone: string;
    email: string;
    isMedicalPOA: boolean;
  };
  alternatePOA: {
    fullName: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    phone: string;
    email: string;
    isMedicalPOA: boolean;
  };
  additionalAlternatePOAs: Array<{
    fullName: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    phone: string;
    email: string;
    isMedicalPOA: boolean;
  }>;
  hasAdditionalAlternatePOAs: boolean;
}

export interface ExecutorInfo {
  useSpouseAsExecutor: boolean;
  primaryExecutor: {
    name: string;
    relationship: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    phone: string;
    email: string;
  };
  alternateExecutor: {
    name: string;
    relationship: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    phone: string;
    email: string;
  };
  additionalAlternateExecutors: Array<{
    name: string;
    relationship: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    phone: string;
    email: string;
  }>;
}

export interface TrusteeInfo {
  useSameAsExecutor: boolean;
  primaryTrustee: {
    name: string;
    relationship: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    phone: string;
    email: string;
  };
  alternateTrustee: {
    name: string;
    relationship: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    phone: string;
    email: string;
  };
  additionalAlternateTrustees: Array<{
    name: string;
    relationship: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
    phone: string;
    email: string;
  }>;
}

export interface AssetsInfo {
  realEstate: string;
  bankAccounts: string;
  investments: string;
  retirementAccounts: string;
  businessInterests: string;
  lifeInsurance: string;
  personalProperty: string;
  otherAssets: string;
  selectedCategories: {
    realEstate: boolean;
    bankAccounts: boolean;
    investments: boolean;
    retirementAccounts: boolean;
    businessInterests: boolean;
    lifeInsurance: boolean;
    personalProperty: boolean;
    otherAssets: boolean;
  };
}

export interface SpecialBequestsInfo {
  hasSpecialBequests: boolean;
  specialBequests: Array<{
    item: string;
    recipient: string;
    relationship: string;
  }>;
}

export function useIntakeFormState() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, Record<string, string>>>({
    personalInfo: {},
    spouseInfo: {},
    childrenInfo: {},
    poaInfo: {},
    executorInfo: {},
    trusteeInfo: {},
    assetsInfo: {},
    specialBequestsInfo: {}
  });

  // Personal Information
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
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
  });

  // Spouse Information
  const [spouseInfo, setSpouseInfo] = useState<SpouseInfo>({
    spouseFirstName: "",
    spouseMiddleName: "",
    spouseLastName: "",
    spouseDateOfBirth: undefined,
    spouseEmail: "",
    spousePhone: "",
  });

  // Children Information
  const [childrenInfo, setChildrenInfo] = useState<ChildrenInfo>({
    hasChildren: false,
    children: [],
  });

  // Power of Attorney Information
  const [poaInfo, setPoaInfo] = useState<PowerOfAttorneyInfo>({
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
  });

  // Executor Information
  const [executorInfo, setExecutorInfo] = useState<ExecutorInfo>({
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
  });

  // Trustee Information
  const [trusteeInfo, setTrusteeInfo] = useState<TrusteeInfo>({
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
  });

  // Assets Information
  const [assetsInfo, setAssetsInfo] = useState<AssetsInfo>({
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
  });

  // Special Bequests
  const [specialBequestsInfo, setSpecialBequestsInfo] = useState<SpecialBequestsInfo>({
    hasSpecialBequests: false,
    specialBequests: [
      {
        item: "",
        recipient: "",
        relationship: "",
      },
    ],
  });

  // Additional Notes
  const [additionalNotes, setAdditionalNotes] = useState("");

  const validatePersonalInfo = () => {
    const errors: Record<string, string> = {};
    
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
    
    setFormErrors(prev => ({ ...prev, personalInfo: errors }));
    return Object.keys(errors).length === 0;
  };

  const validateSpouseInfo = () => {
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
    
    setFormErrors(prev => ({ ...prev, spouseInfo: errors }));
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    // Validate current step before proceeding
    let isValid = true;
    
    if (step === 1) {
      isValid = validatePersonalInfo() && validateSpouseInfo();
    }
    
    if (isValid) {
      setStep((prevStep) => prevStep + 1);
      window.scrollTo(0, 0);
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
    setStep((prevStep) => prevStep - 1);
    window.scrollTo(0, 0);
  };

  return {
    step,
    setStep,
    isSubmitting,
    setIsSubmitting,
    formErrors,
    setFormErrors,
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
  };
}
