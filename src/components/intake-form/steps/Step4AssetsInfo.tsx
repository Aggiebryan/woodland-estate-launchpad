
import React from "react";
import { Button } from "@/components/ui/button";
import { AssetsInfo } from "@/hooks/useIntakeFormState";
import AssetsCategorySection from "@/components/shared/AssetsCategorySection";
import { handleAssetsChange, handleCategoryToggle } from "../formHandlers";

interface Step4Props {
  assetsInfo: AssetsInfo;
  setAssetsInfo: React.Dispatch<React.SetStateAction<AssetsInfo>>;
  nextStep: () => void;
  prevStep: () => void;
}

const Step4AssetsInfo: React.FC<Step4Props> = ({
  assetsInfo,
  setAssetsInfo,
  nextStep,
  prevStep,
}) => {
  return (
    <>
      <AssetsCategorySection
        formData={assetsInfo}
        onAssetsChange={(e) => handleAssetsChange(e, setAssetsInfo)}
        onCategoryToggle={(category, isSelected) => 
          handleCategoryToggle(category, isSelected, setAssetsInfo)
        }
      />

      <div className="flex justify-between mt-8">
        <Button
          onClick={prevStep}
          variant="outline"
          className="border-woodlands-gold text-woodlands-gold"
          type="button"
        >
          Previous Step
        </Button>
        <Button 
          onClick={nextStep} 
          className="bg-woodlands-gold text-woodlands-purple" 
          type="button"
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default Step4AssetsInfo;
