
import React from "react";
import { PowerOfAttorneyInfo } from "@/hooks/useIntakeFormState";

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
