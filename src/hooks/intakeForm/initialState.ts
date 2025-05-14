
import { IntakeFormState } from "@/types/intakeFormTypes";

export const initialIntakeFormState: IntakeFormState = {
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
