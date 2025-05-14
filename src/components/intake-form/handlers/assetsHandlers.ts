
import React from "react";
import { AssetsInfo } from "@/hooks/useIntakeFormState";

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
