
import { toast } from "@/components/ui/use-toast";
import { 
  PersonalInfo, 
  SpouseInfo, 
  ChildrenInfo, 
  PowerOfAttorneyInfo, 
  ExecutorInfo, 
  TrusteeInfo, 
  AssetsInfo, 
  SpecialBequestsInfo 
} from "@/types/intakeFormTypes";

interface FormSubmissionData {
  personal: PersonalInfo;
  spouse: SpouseInfo;
  children: ChildrenInfo;
  powerOfAttorney: PowerOfAttorneyInfo;
  executor: ExecutorInfo;
  trustee: TrusteeInfo;
  assets: AssetsInfo;
  specialBequests: SpecialBequestsInfo;
  additionalNotes: string;
}

export const handleFormSubmission = async (
  e: React.FormEvent,
  formData: FormSubmissionData,
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  setStep: React.Dispatch<React.SetStateAction<number>>
): Promise<void> => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://n8n.twlf.dev/webhook-test/estate-intake", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    toast({
      title: "Form Submitted Successfully",
      description: "We'll review your information and contact you soon.",
    });

    setStep(1);
  } catch (error) {
    console.error("Error submitting form:", error);
    toast({
      title: "Submission Error",
      description: "There was a problem submitting your form. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
