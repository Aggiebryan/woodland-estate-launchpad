
import React from "react";
import { ChildrenInfo } from "@/hooks/useIntakeFormState";

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
