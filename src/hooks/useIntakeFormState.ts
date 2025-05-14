
import { useState } from "react";

export interface PersonalInfo {
  firstName: string;
  middleName: string;
  lastName: string;
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

  // Personal Information
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "",
    middleName: "",
    lastName: "",
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

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
    window.scrollTo(0, 0);
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
