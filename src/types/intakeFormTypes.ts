
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

export interface FormErrors {
  personalInfo: Record<string, string>;
  spouseInfo: Record<string, string>;
  childrenInfo: Record<string, string>;
  poaInfo: Record<string, string>;
  executorInfo: Record<string, string>;
  trusteeInfo: Record<string, string>;
  assetsInfo: Record<string, string>;
  specialBequestsInfo: Record<string, string>;
  [key: string]: Record<string, string>; // Add index signature to allow any string key
}

export interface IntakeFormState {
  step: number;
  isSubmitting: boolean;
  formErrors: FormErrors;
  personalInfo: PersonalInfo;
  spouseInfo: SpouseInfo;
  childrenInfo: ChildrenInfo;
  poaInfo: PowerOfAttorneyInfo;
  executorInfo: ExecutorInfo;
  trusteeInfo: TrusteeInfo;
  assetsInfo: AssetsInfo;
  specialBequestsInfo: SpecialBequestsInfo;
  additionalNotes: string;
}
