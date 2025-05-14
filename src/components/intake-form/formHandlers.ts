import React from "react";
import { 
  PersonalInfo, 
  SpouseInfo, 
  ChildrenInfo, 
  ExecutorInfo, 
  TrusteeInfo, 
  AssetsInfo, 
  SpecialBequestsInfo, 
  PowerOfAttorneyInfo 
} from "@/hooks/useIntakeFormState";
import { toast } from "@/components/ui/use-toast";

export const handlePersonalInfoChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>
) => {
  const { name, value } = e.target;
  setPersonalInfo((prev) => ({ ...prev, [name]: value }));
};

export const handleSelectChange = (
  field: string,
  value: string,
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>
) => {
  setPersonalInfo((prev) => ({ ...prev, [field]: value }));
};

export const handleDateChange = (
  field: string,
  value: Date | undefined,
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>
) => {
  setPersonalInfo((prev) => ({ ...prev, [field]: value }));
};

export const handleSpouseInfoChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setSpouseInfo: React.Dispatch<React.SetStateAction<SpouseInfo>>
) => {
  const { name, value } = e.target;
  setSpouseInfo((prev) => ({ ...prev, [name]: value }));
};

export const handleSpouseDateChange = (
  field: string,
  value: Date | undefined,
  setSpouseInfo: React.Dispatch<React.SetStateAction<SpouseInfo>>
) => {
  setSpouseInfo((prev) => ({ ...prev, [field]: value }));
};

export const handleCheckboxChange = (
  field: string,
  checked: boolean,
  setChildrenInfo: React.Dispatch<React.SetStateAction<ChildrenInfo>>,
  setExecutorInfo: React.Dispatch<React.SetStateAction<ExecutorInfo>>,
  setTrusteeInfo: React.Dispatch<React.SetStateAction<TrusteeInfo>>,
  setSpecialBequestsInfo: React.Dispatch<React.SetStateAction<SpecialBequestsInfo>>
) => {
  switch (field) {
    case "hasChildren":
      setChildrenInfo((prev) => ({ ...prev, hasChildren: checked }));
      break;
    case "useSpouseAsExecutor":
      setExecutorInfo((prev) => ({ ...prev, useSpouseAsExecutor: checked }));
      break;
    case "useSameAsExecutor":
      setTrusteeInfo((prev) => ({ ...prev, useSameAsExecutor: checked }));
      break;
    case "hasSpecialBequests":
      setSpecialBequestsInfo((prev) => ({ ...prev, hasSpecialBequests: checked }));
      break;
    default:
      break;
  }
};

export const handleChildChange = (
  index: number,
  field: string,
  value: string,
  setChildrenInfo: React.Dispatch<React.SetStateAction<ChildrenInfo>>
) => {
  setChildrenInfo((prev) => {
    const updatedChildren = [...prev.children];
    updatedChildren[index] = { ...updatedChildren[index], [field]: value };
    return { ...prev, children: updatedChildren };
  });
};

export const handleChildCheckboxChange = (
  index: number,
  field: string,
  checked: boolean,
  setChildrenInfo: React.Dispatch<React.SetStateAction<ChildrenInfo>>
) => {
  setChildrenInfo((prev) => {
    const updatedChildren = [...prev.children];
    updatedChildren[index] = { ...updatedChildren[index], [field]: checked };
    return { ...prev, children: updatedChildren };
  });
};

export const handleChildRadioChange = (
  index: number,
  field: string,
  value: string,
  setChildrenInfo: React.Dispatch<React.SetStateAction<ChildrenInfo>>
) => {
  setChildrenInfo((prev) => {
    const updatedChildren = [...prev.children];
    updatedChildren[index] = { ...updatedChildren[index], [field]: value };
    return { ...prev, children: updatedChildren };
  });
};

export const handleChildAddressChange = (
  index: number,
  field: string,
  value: string,
  setChildrenInfo: React.Dispatch<React.SetStateAction<ChildrenInfo>>
) => {
  setChildrenInfo((prev) => {
    const updatedChildren = [...prev.children];
    updatedChildren[index] = { 
      ...updatedChildren[index], 
      address: {
        ...updatedChildren[index].address,
        [field]: value
      }
    };
    return { ...prev, children: updatedChildren };
  });
};

export const addChild = (
  setChildrenInfo: React.Dispatch<React.SetStateAction<ChildrenInfo>>
) => {
  setChildrenInfo((prev) => ({
    ...prev,
    children: [
      ...prev.children, 
      { 
        firstName: "", 
        middleName: "", 
        lastName: "", 
        dateOfBirth: "", 
        isMinor: false, 
        livesWithClient: true, 
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        relationship: "currentMarriage",
        otherParentName: ""
      }
    ],
  }));
};

export const removeChild = (
  index: number,
  setChildrenInfo: React.Dispatch<React.SetStateAction<ChildrenInfo>>
) => {
  setChildrenInfo((prev) => {
    const updatedChildren = [...prev.children];
    updatedChildren.splice(index, 1);
    return { ...prev, children: updatedChildren };
  });
};

export const handleExecutorChange = (
  executorType: string,
  field: string,
  value: string,
  setExecutorInfo: React.Dispatch<React.SetStateAction<ExecutorInfo>>
) => {
  setExecutorInfo((prev) => ({
    ...prev,
    [executorType]: {
      ...prev[executorType as keyof ExecutorInfo] as any,
      [field]: value
    }
  }));
};

export const handleExecutorAddressChange = (
  executorType: string,
  field: string,
  value: string,
  setExecutorInfo: React.Dispatch<React.SetStateAction<ExecutorInfo>>
) => {
  setExecutorInfo((prev) => ({
    ...prev,
    [executorType]: {
      ...prev[executorType as keyof ExecutorInfo] as any,
      address: {
        ...((prev[executorType as keyof ExecutorInfo] as any).address),
        [field]: value
      }
    }
  }));
};

export const handleAdditionalExecutorChange = (
  index: number,
  field: string,
  value: string,
  setExecutorInfo: React.Dispatch<React.SetStateAction<ExecutorInfo>>
) => {
  setExecutorInfo((prev) => {
    const updatedExecutors = [...prev.additionalAlternateExecutors];
    updatedExecutors[index] = { 
      ...updatedExecutors[index], 
      [field]: value 
    };
    return {
      ...prev,
      additionalAlternateExecutors: updatedExecutors
    };
  });
};

export const handleAdditionalExecutorAddressChange = (
  index: number,
  field: string,
  value: string,
  setExecutorInfo: React.Dispatch<React.SetStateAction<ExecutorInfo>>
) => {
  setExecutorInfo((prev) => {
    const updatedExecutors = [...prev.additionalAlternateExecutors];
    updatedExecutors[index] = { 
      ...updatedExecutors[index], 
      address: {
        ...updatedExecutors[index].address,
        [field]: value
      }
    };
    return {
      ...prev,
      additionalAlternateExecutors: updatedExecutors
    };
  });
};

export const addAlternateExecutor = (
  setExecutorInfo: React.Dispatch<React.SetStateAction<ExecutorInfo>>
) => {
  setExecutorInfo((prev) => ({
    ...prev,
    additionalAlternateExecutors: [
      ...prev.additionalAlternateExecutors,
      {
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
      }
    ]
  }));
};

export const removeAlternateExecutor = (
  index: number,
  setExecutorInfo: React.Dispatch<React.SetStateAction<ExecutorInfo>>
) => {
  setExecutorInfo((prev) => {
    const updatedExecutors = [...prev.additionalAlternateExecutors];
    updatedExecutors.splice(index, 1);
    return {
      ...prev,
      additionalAlternateExecutors: updatedExecutors
    };
  });
};

export const handleTrusteeChange = (
  trusteeType: string,
  field: string,
  value: string,
  setTrusteeInfo: React.Dispatch<React.SetStateAction<TrusteeInfo>>
) => {
  setTrusteeInfo((prev) => ({
    ...prev,
    [trusteeType]: {
      ...prev[trusteeType as keyof TrusteeInfo] as any,
      [field]: value
    }
  }));
};

export const handleTrusteeAddressChange = (
  trusteeType: string,
  field: string,
  value: string,
  setTrusteeInfo: React.Dispatch<React.SetStateAction<TrusteeInfo>>
) => {
  setTrusteeInfo((prev) => ({
    ...prev,
    [trusteeType]: {
      ...prev[trusteeType as keyof TrusteeInfo] as any,
      address: {
        ...((prev[trusteeType as keyof TrusteeInfo] as any).address),
        [field]: value
      }
    }
  }));
};

export const handleTrusteeStateChange = (
  trusteeType: string,
  value: string,
  setTrusteeInfo: React.Dispatch<React.SetStateAction<TrusteeInfo>>
) => {
  setTrusteeInfo((prev) => ({
    ...prev,
    [trusteeType]: {
      ...prev[trusteeType as keyof TrusteeInfo] as any,
      address: {
        ...((prev[trusteeType as keyof TrusteeInfo] as any).address),
        state: value
      }
    }
  }));
};

export const handleAdditionalTrusteeChange = (
  index: number,
  field: string,
  value: string,
  setTrusteeInfo: React.Dispatch<React.SetStateAction<TrusteeInfo>>
) => {
  setTrusteeInfo((prev) => {
    const updatedTrustees = [...prev.additionalAlternateTrustees];
    updatedTrustees[index] = { 
      ...updatedTrustees[index], 
      [field]: value 
    };
    return {
      ...prev,
      additionalAlternateTrustees: updatedTrustees
    };
  });
};

export const handleAdditionalTrusteeAddressChange = (
  index: number,
  field: string,
  value: string,
  setTrusteeInfo: React.Dispatch<React.SetStateAction<TrusteeInfo>>
) => {
  setTrusteeInfo((prev) => {
    const updatedTrustees = [...prev.additionalAlternateTrustees];
    updatedTrustees[index] = { 
      ...updatedTrustees[index], 
      address: {
        ...updatedTrustees[index].address,
        [field]: value
      }
    };
    return {
      ...prev,
      additionalAlternateTrustees: updatedTrustees
    };
  });
};

export const handleAdditionalTrusteeStateChange = (
  index: number,
  value: string,
  setTrusteeInfo: React.Dispatch<React.SetStateAction<TrusteeInfo>>
) => {
  setTrusteeInfo((prev) => {
    const updatedTrustees = [...prev.additionalAlternateTrustees];
    updatedTrustees[index] = { 
      ...updatedTrustees[index], 
      address: {
        ...updatedTrustees[index].address,
        state: value
      }
    };
    return {
      ...prev,
      additionalAlternateTrustees: updatedTrustees
    };
  });
};

export const addAlternateTrustee = (
  setTrusteeInfo: React.Dispatch<React.SetStateAction<TrusteeInfo>>
) => {
  setTrusteeInfo((prev) => ({
    ...prev,
    additionalAlternateTrustees: [
      ...prev.additionalAlternateTrustees,
      {
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
      }
    ]
  }));
};

export const removeAlternateTrustee = (
  index: number,
  setTrusteeInfo: React.Dispatch<React.SetStateAction<TrusteeInfo>>
) => {
  setTrusteeInfo((prev) => {
    const updatedTrustees = [...prev.additionalAlternateTrustees];
    updatedTrustees.splice(index, 1);
    return {
      ...prev,
      additionalAlternateTrustees: updatedTrustees
    };
  });
};

export const handleAssetsChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setAssetsInfo: React.Dispatch<React.SetStateAction<AssetsInfo>>
) => {
  const { name, value } = e.target;
  setAssetsInfo((prev) => ({ ...prev, [name]: value }));
};

export const handleCategoryToggle = (
  category: string,
  isSelected: boolean,
  setAssetsInfo: React.Dispatch<React.SetStateAction<AssetsInfo>>
) => {
  setAssetsInfo((prev) => ({
    ...prev,
    selectedCategories: {
      ...prev.selectedCategories,
      [category]: isSelected
    }
  }));
};

export const handleSpecialBequestChange = (
  index: number,
  field: string,
  value: string,
  setSpecialBequestsInfo: React.Dispatch<React.SetStateAction<SpecialBequestsInfo>>
) => {
  setSpecialBequestsInfo((prev) => {
    const updatedBequests = [...prev.specialBequests];
    updatedBequests[index] = { ...updatedBequests[index], [field]: value };
    return {
      ...prev,
      specialBequests: updatedBequests,
    };
  });
};

export const addSpecialBequest = (
  setSpecialBequestsInfo: React.Dispatch<React.SetStateAction<SpecialBequestsInfo>>
) => {
  setSpecialBequestsInfo((prev) => ({
    ...prev,
    specialBequests: [
      ...prev.specialBequests,
      { item: "", recipient: "", relationship: "" },
    ],
  }));
};

export const removeSpecialBequest = (
  index: number,
  setSpecialBequestsInfo: React.Dispatch<React.SetStateAction<SpecialBequestsInfo>>
) => {
  setSpecialBequestsInfo((prev) => {
    const updatedBequests = [...prev.specialBequests];
    updatedBequests.splice(index, 1);
    return {
      ...prev,
      specialBequests: updatedBequests,
    };
  });
};

export const handleAdditionalNotesChange = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  setAdditionalNotes: React.Dispatch<React.SetStateAction<string>>
) => {
  setAdditionalNotes(e.target.value);
};

export const handlePoaChange = (
  updatedData: PowerOfAttorneyInfo,
  setPoaInfo: React.Dispatch<React.SetStateAction<PowerOfAttorneyInfo>>
) => {
  setPoaInfo(updatedData);
};
