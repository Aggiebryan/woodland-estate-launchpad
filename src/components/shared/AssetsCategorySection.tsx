import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface AssetsSectionProps {
  formData: {
    realEstate: string;
    bankAccounts: string;
    investments: string;
    retirementAccounts: string;
    businessInterests: string;
    lifeInsurance: string;
    personalProperty: string;
    otherAssets: string;
    selectedCategories: {
      realEstate: boolean;
      bankAccounts: boolean;
      investments: boolean;
      retirementAccounts: boolean;
      businessInterests: boolean;
      lifeInsurance: boolean;
      personalProperty: boolean;
      otherAssets: boolean;
    };
  };
  onAssetsChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onCategoryToggle: (category: string, isSelected: boolean) => void;
}

const AssetsCategorySection: React.FC<AssetsSectionProps> = ({
  formData,
  onAssetsChange,
  onCategoryToggle
}) => {
  return (
    <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-woodlands-gold mb-4">Assets Summary</h3>
      <p className="text-sm text-woodlands-cream opacity-80 mb-4">
        Please select the categories of assets you own and provide details about each selected category.
      </p>

      <div className="grid grid-cols-1 gap-8">
        {/* Real Estate */}
        <div className="border-b border-woodlands-gold/10 pb-6">
          <div className="flex items-start space-x-3">
            <RadioGroup
              value={formData.selectedCategories.realEstate ? "yes" : "no"}
              onValueChange={(value) => onCategoryToggle("realEstate", value === "yes")}
              className="space-y-2"
            >
              <Label className="text-lg font-medium text-woodlands-gold">
                Real Estate
              </Label>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="realEstate-yes" />
                <Label htmlFor="realEstate-yes" className="text-woodlands-cream">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="realEstate-no" />
                <Label htmlFor="realEstate-no" className="text-woodlands-cream">No</Label>
              </div>
            </RadioGroup>
          </div>
          
          {formData.selectedCategories.realEstate && (
            <div className="mt-4">
              <Label htmlFor="realEstate" className="text-woodlands-gold">
                Description and approximate value of properties
              </Label>
              <Textarea
                id="realEstate"
                name="realEstate"
                value={formData.realEstate}
                onChange={onAssetsChange}
                className="h-24 text-white mt-2"
              />
            </div>
          )}
        </div>

        {/* Bank Accounts */}
        <div className="border-b border-woodlands-gold/10 pb-6">
          <div className="flex items-start space-x-3">
            <RadioGroup
              value={formData.selectedCategories.bankAccounts ? "yes" : "no"}
              onValueChange={(value) => onCategoryToggle("bankAccounts", value === "yes")}
              className="space-y-2"
            >
              <Label className="text-lg font-medium text-woodlands-gold">
                Bank Accounts
              </Label>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="bankAccounts-yes" />
                <Label htmlFor="bankAccounts-yes" className="text-woodlands-cream">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="bankAccounts-no" />
                <Label htmlFor="bankAccounts-no" className="text-woodlands-cream">No</Label>
              </div>
            </RadioGroup>
          </div>
          
          {formData.selectedCategories.bankAccounts && (
            <div className="mt-4">
              <Label htmlFor="bankAccounts" className="text-woodlands-gold">
                Types of accounts and approximate total value
              </Label>
              <Textarea
                id="bankAccounts"
                name="bankAccounts"
                value={formData.bankAccounts}
                onChange={onAssetsChange}
                className="h-24 text-white mt-2"
              />
            </div>
          )}
        </div>

        {/* Investments */}
        <div className="border-b border-woodlands-gold/10 pb-6">
          <div className="flex items-start space-x-3">
            <RadioGroup
              value={formData.selectedCategories.investments ? "yes" : "no"}
              onValueChange={(value) => onCategoryToggle("investments", value === "yes")}
              className="space-y-2"
            >
              <Label className="text-lg font-medium text-woodlands-gold">
                Investments
              </Label>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="investments-yes" />
                <Label htmlFor="investments-yes" className="text-woodlands-cream">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="investments-no" />
                <Label htmlFor="investments-no" className="text-woodlands-cream">No</Label>
              </div>
            </RadioGroup>
          </div>
          
          {formData.selectedCategories.investments && (
            <div className="mt-4">
              <Label htmlFor="investments" className="text-woodlands-gold">
                Types of investments and approximate total value
              </Label>
              <Textarea
                id="investments"
                name="investments"
                value={formData.investments}
                onChange={onAssetsChange}
                className="h-24 text-white mt-2"
              />
            </div>
          )}
        </div>

        {/* Retirement Accounts */}
        <div className="border-b border-woodlands-gold/10 pb-6">
          <div className="flex items-start space-x-3">
            <RadioGroup
              value={formData.selectedCategories.retirementAccounts ? "yes" : "no"}
              onValueChange={(value) => onCategoryToggle("retirementAccounts", value === "yes")}
              className="space-y-2"
            >
              <Label className="text-lg font-medium text-woodlands-gold">
                Retirement Accounts
              </Label>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="retirementAccounts-yes" />
                <Label htmlFor="retirementAccounts-yes" className="text-woodlands-cream">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="retirementAccounts-no" />
                <Label htmlFor="retirementAccounts-no" className="text-woodlands-cream">No</Label>
              </div>
            </RadioGroup>
          </div>
          
          {formData.selectedCategories.retirementAccounts && (
            <div className="mt-4">
              <Label htmlFor="retirementAccounts" className="text-woodlands-gold">
                Types of retirement accounts and approximate total value
              </Label>
              <Textarea
                id="retirementAccounts"
                name="retirementAccounts"
                value={formData.retirementAccounts}
                onChange={onAssetsChange}
                className="h-24 text-white mt-2"
              />
            </div>
          )}
        </div>

        {/* Business Interests */}
        <div className="border-b border-woodlands-gold/10 pb-6">
          <div className="flex items-start space-x-3">
            <RadioGroup
              value={formData.selectedCategories.businessInterests ? "yes" : "no"}
              onValueChange={(value) => onCategoryToggle("businessInterests", value === "yes")}
              className="space-y-2"
            >
              <Label className="text-lg font-medium text-woodlands-gold">
                Business Interests
              </Label>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="businessInterests-yes" />
                <Label htmlFor="businessInterests-yes" className="text-woodlands-cream">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="businessInterests-no" />
                <Label htmlFor="businessInterests-no" className="text-woodlands-cream">No</Label>
              </div>
            </RadioGroup>
          </div>
          
          {formData.selectedCategories.businessInterests && (
            <div className="mt-4">
              <Label htmlFor="businessInterests" className="text-woodlands-gold">
                Description of any business ownership and approximate value
              </Label>
              <Textarea
                id="businessInterests"
                name="businessInterests"
                value={formData.businessInterests}
                onChange={onAssetsChange}
                className="h-24 text-white mt-2"
              />
            </div>
          )}
        </div>

        {/* Life Insurance */}
        <div className="border-b border-woodlands-gold/10 pb-6">
          <div className="flex items-start space-x-3">
            <RadioGroup
              value={formData.selectedCategories.lifeInsurance ? "yes" : "no"}
              onValueChange={(value) => onCategoryToggle("lifeInsurance", value === "yes")}
              className="space-y-2"
            >
              <Label className="text-lg font-medium text-woodlands-gold">
                Life Insurance Policies
              </Label>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="lifeInsurance-yes" />
                <Label htmlFor="lifeInsurance-yes" className="text-woodlands-cream">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="lifeInsurance-no" />
                <Label htmlFor="lifeInsurance-no" className="text-woodlands-cream">No</Label>
              </div>
            </RadioGroup>
          </div>
          
          {formData.selectedCategories.lifeInsurance && (
            <div className="mt-4">
              <Label htmlFor="lifeInsurance" className="text-woodlands-gold">
                Description of policies and death benefits
              </Label>
              <Textarea
                id="lifeInsurance"
                name="lifeInsurance"
                value={formData.lifeInsurance}
                onChange={onAssetsChange}
                className="h-24 text-white mt-2"
              />
            </div>
          )}
        </div>

        {/* Personal Property */}
        <div className="border-b border-woodlands-gold/10 pb-6">
          <div className="flex items-start space-x-3">
            <RadioGroup
              value={formData.selectedCategories.personalProperty ? "yes" : "no"}
              onValueChange={(value) => onCategoryToggle("personalProperty", value === "yes")}
              className="space-y-2"
            >
              <Label className="text-lg font-medium text-woodlands-gold">
                Personal Property
              </Label>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="personalProperty-yes" />
                <Label htmlFor="personalProperty-yes" className="text-woodlands-cream">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="personalProperty-no" />
                <Label htmlFor="personalProperty-no" className="text-woodlands-cream">No</Label>
              </div>
            </RadioGroup>
          </div>
          
          {formData.selectedCategories.personalProperty && (
            <div className="mt-4">
              <Label htmlFor="personalProperty" className="text-woodlands-gold">
                Significant personal property (vehicles, jewelry, art, etc.)
              </Label>
              <Textarea
                id="personalProperty"
                name="personalProperty"
                value={formData.personalProperty}
                onChange={onAssetsChange}
                className="h-24 text-white mt-2"
              />
            </div>
          )}
        </div>

        {/* Other Assets */}
        <div className="pb-6">
          <div className="flex items-start space-x-3">
            <RadioGroup
              value={formData.selectedCategories.otherAssets ? "yes" : "no"}
              onValueChange={(value) => onCategoryToggle("otherAssets", value === "yes")}
              className="space-y-2"
            >
              <Label className="text-lg font-medium text-woodlands-gold">
                Other Assets
              </Label>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="otherAssets-yes" />
                <Label htmlFor="otherAssets-yes" className="text-woodlands-cream">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="otherAssets-no" />
                <Label htmlFor="otherAssets-no" className="text-woodlands-cream">No</Label>
              </div>
            </RadioGroup>
          </div>
          
          {formData.selectedCategories.otherAssets && (
            <div className="mt-4">
              <Label htmlFor="otherAssets" className="text-woodlands-gold">
                Any other significant assets not covered above
              </Label>
              <Textarea
                id="otherAssets"
                name="otherAssets"
                value={formData.otherAssets}
                onChange={onAssetsChange}
                className="h-24 text-white mt-2"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssetsCategorySection;
