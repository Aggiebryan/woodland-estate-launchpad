
import React from "react";

interface FormProgressProps {
  step: number;
  totalSteps: number;
}

const FormProgress: React.FC<FormProgressProps> = ({ step, totalSteps }) => {
  const getStepName = (currentStep: number): string => {
    switch (currentStep) {
      case 1:
        return "Personal Information";
      case 2:
        return "Family Information";
      case 3:
        return "Fiduciaries";
      case 4:
        return "Assets";
      case 5:
        return "Final Details";
      default:
        return "";
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-woodlands-gold">
          Step {step} of {totalSteps}
        </h2>
        <div className="text-sm text-woodlands-cream">
          {getStepName(step)}
        </div>
      </div>
      <div className="w-full bg-woodlands-purple-light rounded-full h-2.5">
        <div
          className="bg-woodlands-gold h-2.5 rounded-full"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FormProgress;
