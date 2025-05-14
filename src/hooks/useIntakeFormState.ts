
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { 
  PersonalInfo, 
  SpouseInfo, 
  ChildrenInfo, 
  PowerOfAttorneyInfo, 
  ExecutorInfo, 
  TrusteeInfo, 
  AssetsInfo, 
  SpecialBequestsInfo,
  FormErrors,
  IntakeFormState
} from "@/types/intakeFormTypes";
import { validatePersonalInfo, validateSpouseInfo } from "@/utils/formValidation";
import { initialIntakeFormState } from "./intakeForm/initialState";

export type {
  PersonalInfo,
  SpouseInfo,
  ChildInfo,
  ChildrenInfo,
  PowerOfAttorneyInfo,
  ExecutorInfo,
  TrusteeInfo,
  AssetsInfo,
  SpecialBequestsInfo,
  FormErrors,
  IntakeFormState
};

export function useIntakeFormState() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialIntakeFormState.formErrors);

  // State for each section of the form
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(initialIntakeFormState.personalInfo);
  const [spouseInfo, setSpouseInfo] = useState<SpouseInfo>(initialIntakeFormState.spouseInfo);
  const [childrenInfo, setChildrenInfo] = useState<ChildrenInfo>(initialIntakeFormState.childrenInfo);
  const [poaInfo, setPoaInfo] = useState<PowerOfAttorneyInfo>(initialIntakeFormState.poaInfo);
  const [executorInfo, setExecutorInfo] = useState<ExecutorInfo>(initialIntakeFormState.executorInfo);
  const [trusteeInfo, setTrusteeInfo] = useState<TrusteeInfo>(initialIntakeFormState.trusteeInfo);
  const [assetsInfo, setAssetsInfo] = useState<AssetsInfo>(initialIntakeFormState.assetsInfo);
  const [specialBequestsInfo, setSpecialBequestsInfo] = useState<SpecialBequestsInfo>(initialIntakeFormState.specialBequestsInfo);
  const [additionalNotes, setAdditionalNotes] = useState<string>(initialIntakeFormState.additionalNotes);

  // Validation methods
  const validatePersonalInfoWrapper = () => {
    return validatePersonalInfo(personalInfo, formErrors, setFormErrors);
  };

  const validateSpouseInfoWrapper = () => {
    return validateSpouseInfo(personalInfo, spouseInfo, formErrors, setFormErrors);
  };

  // Step navigation
  const nextStep = () => {
    // Validate current step before proceeding
    let isValid = true;
    
    if (step === 1) {
      isValid = validatePersonalInfoWrapper() && validateSpouseInfoWrapper();
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
    prevStep,
    validatePersonalInfo: validatePersonalInfoWrapper,
    validateSpouseInfo: validateSpouseInfoWrapper
  };
}
