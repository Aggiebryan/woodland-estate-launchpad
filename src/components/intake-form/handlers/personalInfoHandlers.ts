
import React from "react";
import { PersonalInfo, SpouseInfo } from "@/hooks/useIntakeFormState";

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
