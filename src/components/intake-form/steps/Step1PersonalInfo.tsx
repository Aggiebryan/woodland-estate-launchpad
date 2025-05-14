
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PersonalInfo, SpouseInfo } from "@/hooks/useIntakeFormState";
import PersonalInformationSection from "@/components/shared/PersonalInformationSection";
import SpouseInformationSection from "@/components/shared/SpouseInformationSection";
import {
  handlePersonalInfoChange,
  handleSelectChange,
  handleDateChange,
  handleSpouseInfoChange,
  handleSpouseDateChange
} from "../formHandlers";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";

interface Step1Props {
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  spouseInfo: SpouseInfo;
  setSpouseInfo: React.Dispatch<React.SetStateAction<SpouseInfo>>;
  nextStep: () => void;
  validatePersonalInfo: () => boolean;
  validateSpouseInfo: () => boolean;
  formErrors: Record<string, Record<string, string>>;
}

const Step1PersonalInfo: React.FC<Step1Props> = ({
  personalInfo,
  setPersonalInfo,
  spouseInfo,
  setSpouseInfo,
  nextStep,
  validatePersonalInfo,
  validateSpouseInfo,
  formErrors,
}) => {
  const handleNext = () => {
    const personalValid = validatePersonalInfo();
    const spouseValid = validateSpouseInfo();
    
    if (personalValid && spouseValid) {
      nextStep();
    } else {
      toast({
        title: "Please fix the errors",
        description: "There are validation errors in the form",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <PersonalInformationSection
        formData={personalInfo}
        onChange={(e) => handlePersonalInfoChange(e, setPersonalInfo)}
        onSelectChange={(field, value) => handleSelectChange(field, value, setPersonalInfo)}
        onDateChange={(field, value) => handleDateChange(field, value, setPersonalInfo)}
        errors={formErrors.personalInfo || {}}
      />

      {personalInfo.maritalStatus === "married" && (
        <SpouseInformationSection
          formData={spouseInfo}
          onChange={(e) => handleSpouseInfoChange(e, setSpouseInfo)}
          onDateChange={(field, value) => handleSpouseDateChange(field, value, setSpouseInfo)}
          showSpouseSection={true}
          errors={formErrors.spouseInfo || {}}
        />
      )}

      <div className="flex justify-end mt-8">
        <Button 
          type="button" 
          onClick={handleNext} 
          className="bg-woodlands-gold text-woodlands-purple"
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default Step1PersonalInfo;
