
import { IntakeFormState } from "@/types/intakeFormTypes";

export function useFormDataPreparation(formState: IntakeFormState) {
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

  return {
    formData
  };
}
