
import React from "react";
import { TrusteeInfo } from "@/hooks/useIntakeFormState";

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
