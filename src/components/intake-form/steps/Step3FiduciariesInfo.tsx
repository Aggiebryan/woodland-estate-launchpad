import React from "react";
import { Button } from "@/components/ui/button";
import { ExecutorInfo, TrusteeInfo } from "@/hooks/useIntakeFormState";
import ExecutorSection from "@/components/shared/ExecutorSection";
import TrusteeSection from "@/components/shared/TrusteeSection";
import {
  handleCheckboxChange,
  handleExecutorChange,
  handleExecutorAddressChange,
  handleAdditionalExecutorChange,
  handleAdditionalExecutorAddressChange,
  addAlternateExecutor,
  removeAlternateExecutor,
  handleTrusteeChange,
  handleTrusteeAddressChange,
  handleTrusteeStateChange,
  handleAdditionalTrusteeChange,
  handleAdditionalTrusteeAddressChange,
  handleAdditionalTrusteeStateChange,
  addAlternateTrustee,
  removeAlternateTrustee
} from "../handlers";

interface Step3Props {
  executorInfo: ExecutorInfo;
  setExecutorInfo: React.Dispatch<React.SetStateAction<ExecutorInfo>>;
  trusteeInfo: TrusteeInfo;
  setTrusteeInfo: React.Dispatch<React.SetStateAction<TrusteeInfo>>;
  nextStep: () => void;
  prevStep: () => void;
  setChildrenInfo: any;
  setSpecialBequestsInfo: any;
  personalInfo: any;
  spouseInfo: any;
}

const Step3FiduciariesInfo: React.FC<Step3Props> = ({
  executorInfo,
  setExecutorInfo,
  trusteeInfo,
  setTrusteeInfo,
  nextStep,
  prevStep,
  setChildrenInfo,
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
      <ExecutorSection
        formData={executorInfo}
        onChange={() => {}}
        onCheckboxChange={(field, checked) => 
          handleCheckboxChange(field, checked, setChildrenInfo, setExecutorInfo, setTrusteeInfo, setSpecialBequestsInfo)
        }
        onAddressChange={(executorType, field, value) => 
          handleExecutorAddressChange(executorType, field, value, setExecutorInfo)
        }
        onExecutorChange={(executorType, field, value) => 
          handleExecutorChange(executorType, field, value, setExecutorInfo)
        }
        onAdditionalExecutorChange={(index, field, value) => 
          handleAdditionalExecutorChange(index, field, value, setExecutorInfo)
        }
        onAdditionalExecutorAddressChange={(index, field, value) => 
          handleAdditionalExecutorAddressChange(index, field, value, setExecutorInfo)
        }
        addAlternateExecutor={() => addAlternateExecutor(setExecutorInfo)}
        removeAlternateExecutor={(index) => removeAlternateExecutor(index, setExecutorInfo)}
        spouseFullName={spouseFullName}
        spousePhone={spouseInfo.spousePhone}
        spouseEmail={spouseInfo.spouseEmail}
        clientAddress={clientAddress}
      />

      <TrusteeSection
        formData={trusteeInfo}
        onCheckboxChange={(field, checked) => 
          handleCheckboxChange(field, checked, setChildrenInfo, setExecutorInfo, setTrusteeInfo, setSpecialBequestsInfo)
        }
        onTrusteeChange={(trusteeType, field, value) => 
          handleTrusteeChange(trusteeType, field, value, setTrusteeInfo)
        }
        onTrusteeAddressChange={(trusteeType, field, value) => 
          handleTrusteeAddressChange(trusteeType, field, value, setTrusteeInfo)
        }
        onTrusteeStateChange={(trusteeType, value) => 
          handleTrusteeStateChange(trusteeType, value, setTrusteeInfo)
        }
        onAdditionalTrusteeChange={(index, field, value) => 
          handleAdditionalTrusteeChange(index, field, value, setTrusteeInfo)
        }
        onAdditionalTrusteeAddressChange={(index, field, value) => 
          handleAdditionalTrusteeAddressChange(index, field, value, setTrusteeInfo)
        }
        onAdditionalTrusteeStateChange={(index, value) => 
          handleAdditionalTrusteeStateChange(index, value, setTrusteeInfo)
        }
        addAlternateTrustee={() => addAlternateTrustee(setTrusteeInfo)}
        removeAlternateTrustee={(index) => removeAlternateTrustee(index, setTrusteeInfo)}
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

export default Step3FiduciariesInfo;
