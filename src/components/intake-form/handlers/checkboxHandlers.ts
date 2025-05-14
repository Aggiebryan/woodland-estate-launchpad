
import React from "react";
import { 
  ChildrenInfo, 
  ExecutorInfo, 
  TrusteeInfo, 
  SpecialBequestsInfo 
} from "@/hooks/useIntakeFormState";

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
