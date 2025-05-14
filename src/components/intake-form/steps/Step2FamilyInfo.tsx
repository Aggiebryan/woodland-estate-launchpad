import React from "react";
import { Button } from "@/components/ui/button";
import { ChildrenInfo, PowerOfAttorneyInfo } from "@/hooks/useIntakeFormState";
import ChildrenSection from "@/components/shared/ChildrenSection";
import PowerOfAttorneySection from "@/components/shared/PowerOfAttorneySection";
import { 
  handleCheckboxChange, 
  handleChildChange, 
  handleChildCheckboxChange,
  handleChildRadioChange,
  handleChildAddressChange,
  addChild,
  removeChild,
  handlePoaChange
} from "../handlers";

interface Step2Props {
  childrenInfo: ChildrenInfo;
  setChildrenInfo: React.Dispatch<React.SetStateAction<ChildrenInfo>>;
  poaInfo: PowerOfAttorneyInfo;
  setPoaInfo: React.Dispatch<React.SetStateAction<PowerOfAttorneyInfo>>;
  nextStep: () => void;
  prevStep: () => void;
  setExecutorInfo: any;
  setTrusteeInfo: any;
  setSpecialBequestsInfo: any;
  personalInfo: any;
  spouseInfo: any;
}

const Step2FamilyInfo: React.FC<Step2Props> = ({
  childrenInfo,
  setChildrenInfo,
  poaInfo,
  setPoaInfo,
  nextStep,
  prevStep,
  setExecutorInfo,
  setTrusteeInfo,
  setSpecialBequestsInfo,
  personalInfo,
  spouseInfo
}) => {
  // Create address object from personal information
  const clientAddress = {
    street: personalInfo.address || "",
    city: personalInfo.city || "",
    state: personalInfo.state || "",
    zipCode: personalInfo.zipCode || ""
  };

  // Combine spouse's name
  const spouseFullName = personalInfo.maritalStatus === "married" 
    ? `${spouseInfo.spouseFirstName} ${spouseInfo.spouseMiddleName ? spouseInfo.spouseMiddleName + ' ' : ''}${spouseInfo.spouseLastName}`.trim()
    : "";

  return (
    <>
      <ChildrenSection
        formData={childrenInfo}
        onChange={() => {}}
        onCheckboxChange={(field, checked) => 
          handleCheckboxChange(field, checked, setChildrenInfo, setExecutorInfo, setTrusteeInfo, setSpecialBequestsInfo)
        }
        onChildChange={(index, field, value) => 
          handleChildChange(index, field, value, setChildrenInfo)
        }
        onChildCheckboxChange={(index, field, checked) => 
          handleChildCheckboxChange(index, field, checked, setChildrenInfo)
        }
        onChildRadioChange={(index, field, value) => 
          handleChildRadioChange(index, field, value, setChildrenInfo)
        }
        onChildAddressChange={(index, field, value) => 
          handleChildAddressChange(index, field, value, setChildrenInfo)
        }
        addChild={() => addChild(setChildrenInfo)}
        removeChild={(index) => removeChild(index, setChildrenInfo)}
      />
      
      <PowerOfAttorneySection
        formData={poaInfo}
        onChange={(updatedData) => handlePoaChange(updatedData, setPoaInfo)}
        spouseFullName={spouseFullName}
        spousePhone={spouseInfo.spousePhone}
        spouseEmail={spouseInfo.spouseEmail}
        clientAddress={clientAddress}
      />

      <div className="flex justify-between mt-8">
        <Button
          onClick={prevStep}
          variant="outline"
          className="border-woodlands-gold text-woodlands-gold"
          type="button"
        >
          Previous Step
        </Button>
        <Button 
          onClick={nextStep} 
          className="bg-woodlands-gold text-woodlands-purple" 
          type="button"
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default Step2FamilyInfo;
