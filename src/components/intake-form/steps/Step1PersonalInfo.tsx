
import React from "react";
import { Button } from "@/components/ui/button";
import { PersonalInfo, SpouseInfo } from "@/hooks/useIntakeFormState";
import PersonalInformationSection from "@/components/shared/PersonalInformationSection";
import SpouseInformationSection from "@/components/shared/SpouseInformationSection";
import { handlePersonalInfoChange, handleSelectChange, handleSpouseInfoChange } from "../formHandlers";

interface Step1Props {
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  spouseInfo: SpouseInfo;
  setSpouseInfo: React.Dispatch<React.SetStateAction<SpouseInfo>>;
  nextStep: () => void;
}

const Step1PersonalInfo: React.FC<Step1Props> = ({
  personalInfo,
  setPersonalInfo,
  spouseInfo,
  setSpouseInfo,
  nextStep,
}) => {
  return (
    <>
      <PersonalInformationSection
        formData={personalInfo}
        onChange={(e) => handlePersonalInfoChange(e, setPersonalInfo)}
        onSelectChange={(field, value) => handleSelectChange(field, value, setPersonalInfo)}
      />

      {personalInfo.maritalStatus === "married" && (
        <SpouseInformationSection
          formData={spouseInfo}
          onChange={(e) => handleSpouseInfoChange(e, setSpouseInfo)}
          showSpouseSection={true}
        />
      )}

      <div className="flex justify-end mt-8">
        <Button 
          type="button" 
          onClick={nextStep} 
          className="bg-woodlands-gold text-woodlands-purple"
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default Step1PersonalInfo;
