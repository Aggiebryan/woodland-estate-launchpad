
import React from "react";
import { Button } from "@/components/ui/button";
import { SpecialBequestsInfo } from "@/hooks/useIntakeFormState";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  handleCheckboxChange,
  handleSpecialBequestChange,
  addSpecialBequest,
  removeSpecialBequest,
  handleAdditionalNotesChange
} from "../handlers";
import { handleFormSubmission } from "../formSubmissionHandler";

interface Step5Props {
  specialBequestsInfo: SpecialBequestsInfo;
  setSpecialBequestsInfo: React.Dispatch<React.SetStateAction<SpecialBequestsInfo>>;
  additionalNotes: string;
  setAdditionalNotes: React.Dispatch<React.SetStateAction<string>>;
  prevStep: () => void;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: {
    personal: any;
    spouse: any;
    children: any;
    powerOfAttorney: any;
    executor: any;
    trustee: any;
    assets: any;
    specialBequests: any;
    additionalNotes: string;
  };
  setChildrenInfo: any;
  setExecutorInfo: any;
  setTrusteeInfo: any;
}

const Step5FinalDetails: React.FC<Step5Props> = ({
  specialBequestsInfo,
  setSpecialBequestsInfo,
  additionalNotes,
  setAdditionalNotes,
  prevStep,
  isSubmitting,
  setIsSubmitting,
  setStep,
  formData,
  setChildrenInfo,
  setExecutorInfo,
  setTrusteeInfo
}) => {
  return (
    <>
      <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-woodlands-gold mb-4">
          Special Bequests
        </h3>
        <p className="text-sm text-woodlands-cream opacity-80 mb-4">
          If you wish to leave specific items to certain individuals, please indicate them below.
        </p>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="hasSpecialBequests"
            checked={specialBequestsInfo.hasSpecialBequests}
            onCheckedChange={(checked) => 
              handleCheckboxChange("hasSpecialBequests", !!checked, setChildrenInfo, setExecutorInfo, setTrusteeInfo, setSpecialBequestsInfo)
            }
          />
          <Label htmlFor="hasSpecialBequests" className="text-sm font-medium text-woodlands-cream">
            I would like to include special bequests in my will
          </Label>
        </div>

        {specialBequestsInfo.hasSpecialBequests && (
          <div className="space-y-6 mt-4">
            {specialBequestsInfo.specialBequests.map((bequest, index) => (
              <div key={index} className="border border-woodlands-gold/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium text-woodlands-gold">Special Bequest #{index + 1}</h4>
                  {index > 0 && (
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeSpecialBequest(index, setSpecialBequestsInfo)}
                      type="button"
                    >
                      Remove
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`item-${index}`} className="text-woodlands-gold">
                      Item Description
                    </Label>
                    <Input
                      id={`item-${index}`}
                      value={bequest.item}
                      onChange={(e) =>
                        handleSpecialBequestChange(index, "item", e.target.value, setSpecialBequestsInfo)
                      }
                      className="text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`recipient-${index}`} className="text-woodlands-gold">
                      Recipient's Name
                    </Label>
                    <Input
                      id={`recipient-${index}`}
                      value={bequest.recipient}
                      onChange={(e) =>
                        handleSpecialBequestChange(index, "recipient", e.target.value, setSpecialBequestsInfo)
                      }
                      className="text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`relationship-${index}`} className="text-woodlands-gold">
                      Relationship to You
                    </Label>
                    <Input
                      id={`relationship-${index}`}
                      value={bequest.relationship}
                      onChange={(e) =>
                        handleSpecialBequestChange(
                          index,
                          "relationship",
                          e.target.value,
                          setSpecialBequestsInfo
                        )
                      }
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="secondary"
              onClick={() => addSpecialBequest(setSpecialBequestsInfo)}
              className="mt-4"
            >
              Add Another Bequest
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-woodlands-gold mb-4">
          Additional Notes
        </h3>
        <p className="text-sm text-woodlands-cream opacity-80 mb-4">
          Please provide any additional information that may be relevant to your estate plan.
        </p>
        <div className="mt-2">
          <Label htmlFor="additionalNotes" className="sr-only text-woodlands-gold">
            Additional Notes
          </Label>
          <Textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={6}
            value={additionalNotes}
            onChange={(e) => handleAdditionalNotesChange(e, setAdditionalNotes)}
            className="h-32 text-white"
            placeholder="Enter any additional information, concerns, or questions here..."
          />
        </div>
      </div>

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
          onClick={(e) => handleFormSubmission(e, formData, setIsSubmitting, setStep)}
          disabled={isSubmitting}
          className="bg-woodlands-gold text-woodlands-purple"
          type="button"
        >
          {isSubmitting ? "Submitting..." : "Submit Form"}
        </Button>
      </div>
    </>
  );
};

export default Step5FinalDetails;
