
import { IntakeFormState } from "@/types/intakeFormTypes";

export function useFormStateUpdaters(
  formState: IntakeFormState, 
  setFormState: (state: IntakeFormState) => void
) {
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

  return {
    setIsSubmitting,
    setPersonalInfo,
    setSpouseInfo,
    setChildrenInfo,
    setPoaInfo,
    setExecutorInfo,
    setTrusteeInfo,
    setAssetsInfo,
    setSpecialBequestsInfo,
    setAdditionalNotes
  };
}
