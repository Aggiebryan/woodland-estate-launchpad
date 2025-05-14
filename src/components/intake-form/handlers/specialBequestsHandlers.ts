
import React from "react";
import { SpecialBequestsInfo } from "@/hooks/useIntakeFormState";

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
