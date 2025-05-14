
import React from "react";
import { ExecutorInfo } from "@/hooks/useIntakeFormState";

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
