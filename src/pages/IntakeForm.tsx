
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import MainLayout from "@/components/layout/MainLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import PersonalInformationSection from "@/components/shared/PersonalInformationSection";
import SpouseInformationSection from "@/components/shared/SpouseInformationSection";
import ChildrenSection from "@/components/shared/ChildrenSection";
import PowerOfAttorneySection from "@/components/shared/PowerOfAttorneySection";
import ExecutorSection from "@/components/shared/ExecutorSection";
import TrusteeSection from "@/components/shared/TrusteeSection";
import AssetsCategorySection from "@/components/shared/AssetsCategorySection";

const IntakeForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    maritalStatus: "",
    spouseFullName: "",
  });

  // Spouse Information
  const [spouseInfo, setSpouseInfo] = useState({
    spouseFirstName: "",
    spouseMiddleName: "",
    spouseLastName: "",
    spouseEmail: "",
    spousePhone: "",
  });

  // Children Information
  const [childrenInfo, setChildrenInfo] = useState({
    hasChildren: false,
    children: [] as Array<{
      firstName: string;
      middleName: string;
      lastName: string;
      dateOfBirth: string; // Changed from age to dateOfBirth
      isMinor: boolean;
      livesWithClient: boolean;
      address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
      };
      relationship: "currentMarriage" | "previousMarriage" | "adopted";
      otherParentName: string;
    }>,
  });

  // Power of Attorney Information
  const [poaInfo, setPoaInfo] = useState({
    useSpouseAsPrimaryPOA: false,
    primaryPOA: {
      fullName: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: ""
      },
      phone: "",
      email: "",
      isMedicalPOA: false,
    },
    alternatePOA: {
      fullName: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: ""
      },
      phone: "",
      email: "",
      isMedicalPOA: false,
    },
    additionalAlternatePOAs: [] as Array<{
      fullName: string;
      address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
      };
      phone: string;
      email: string;
      isMedicalPOA: boolean;
    }>,
    hasAdditionalAlternatePOAs: false,
  });

  // Executor Information
  const [executorInfo, setExecutorInfo] = useState({
    useSpouseAsExecutor: false,
    primaryExecutor: {
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
    },
    alternateExecutor: {
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
    },
    additionalAlternateExecutors: [] as Array<{
      name: string;
      relationship: string;
      address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
      };
      phone: string;
      email: string;
    }>,
  });

  // Trustee Information
  const [trusteeInfo, setTrusteeInfo] = useState({
    useSameAsExecutor: false,
    primaryTrustee: {
      name: "",
      relationship: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: ""
      },
      phone: "",
      email: ""
    },
    alternateTrustee: {
      name: "",
      relationship: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: ""
      },
      phone: "",
      email: ""
    },
    additionalAlternateTrustees: [] as Array<{
      name: string;
      relationship: string;
      address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
      };
      phone: string;
      email: string;
    }>
  });

  // Assets Information
  const [assetsInfo, setAssetsInfo] = useState({
    realEstate: "",
    bankAccounts: "",
    investments: "",
    retirementAccounts: "",
    businessInterests: "",
    lifeInsurance: "",
    personalProperty: "",
    otherAssets: "",
    selectedCategories: {
      realEstate: false,
      bankAccounts: false,
      investments: false,
      retirementAccounts: false,
      businessInterests: false,
      lifeInsurance: false,
      personalProperty: false,
      otherAssets: false
    }
  });

  // Special Bequests
  const [specialBequestsInfo, setSpecialBequestsInfo] = useState({
    hasSpecialBequests: false,
    specialBequests: [
      {
        item: "",
        recipient: "",
        relationship: "",
      },
    ],
  });

  // Additional Notes
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSpouseInfoChange = (e) => {
    const { name, value } = e.target;
    setSpouseInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (field, checked) => {
    switch (field) {
      case "hasChildren":
        setChildrenInfo((prev) => ({ ...prev, hasChildren: checked }));
        break;
      case "useSpouseAsExecutor":
        setExecutorInfo((prev) => ({ ...prev, useSpouseAsExecutor: checked }));
        break;
      case "useSameAsExecutor":
        setTrusteeInfo((prev) => ({ ...prev, useSameAsExecutor: checked }));
        break;
      case "hasSpecialBequests":
        setSpecialBequestsInfo((prev) => ({ ...prev, hasSpecialBequests: checked }));
        break;
      default:
        break;
    }
  };

  const handleChildChange = (index, field, value) => {
    const updatedChildren = [...childrenInfo.children];
    updatedChildren[index] = { ...updatedChildren[index], [field]: value };
    setChildrenInfo((prev) => ({ ...prev, children: updatedChildren }));
  };

  const handleChildCheckboxChange = (index, field, checked) => {
    const updatedChildren = [...childrenInfo.children];
    updatedChildren[index] = { ...updatedChildren[index], [field]: checked };
    setChildrenInfo((prev) => ({ ...prev, children: updatedChildren }));
  };

  const handleChildRadioChange = (index, field, value) => {
    const updatedChildren = [...childrenInfo.children];
    updatedChildren[index] = { ...updatedChildren[index], [field]: value };
    setChildrenInfo((prev) => ({ ...prev, children: updatedChildren }));
  };

  const handleChildAddressChange = (index, field, value) => {
    const updatedChildren = [...childrenInfo.children];
    updatedChildren[index] = { 
      ...updatedChildren[index], 
      address: {
        ...updatedChildren[index].address,
        [field]: value
      }
    };
    setChildrenInfo((prev) => ({ ...prev, children: updatedChildren }));
  };

  const addChild = () => {
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

  const removeChild = (index) => {
    const updatedChildren = [...childrenInfo.children];
    updatedChildren.splice(index, 1);
    setChildrenInfo((prev) => ({ ...prev, children: updatedChildren }));
  };

  const handleExecutorChange = (executorType, field, value) => {
    setExecutorInfo((prev) => ({
      ...prev,
      [executorType]: {
        ...prev[executorType],
        [field]: value
      }
    }));
  };

  const handleExecutorAddressChange = (executorType, field, value) => {
    setExecutorInfo((prev) => ({
      ...prev,
      [executorType]: {
        ...prev[executorType],
        address: {
          ...prev[executorType].address,
          [field]: value
        }
      }
    }));
  };

  const handleAdditionalExecutorChange = (index, field, value) => {
    const updatedExecutors = [...executorInfo.additionalAlternateExecutors];
    updatedExecutors[index] = { 
      ...updatedExecutors[index], 
      [field]: value 
    };
    setExecutorInfo((prev) => ({
      ...prev,
      additionalAlternateExecutors: updatedExecutors
    }));
  };

  const handleAdditionalExecutorAddressChange = (index, field, value) => {
    const updatedExecutors = [...executorInfo.additionalAlternateExecutors];
    updatedExecutors[index] = { 
      ...updatedExecutors[index], 
      address: {
        ...updatedExecutors[index].address,
        [field]: value
      }
    };
    setExecutorInfo((prev) => ({
      ...prev,
      additionalAlternateExecutors: updatedExecutors
    }));
  };

  const addAlternateExecutor = () => {
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

  const removeAlternateExecutor = (index) => {
    const updatedExecutors = [...executorInfo.additionalAlternateExecutors];
    updatedExecutors.splice(index, 1);
    setExecutorInfo((prev) => ({
      ...prev,
      additionalAlternateExecutors: updatedExecutors
    }));
  };

  const handleTrusteeChange = (trusteeType, field, value) => {
    setTrusteeInfo((prev) => ({
      ...prev,
      [trusteeType]: {
        ...prev[trusteeType],
        [field]: value
      }
    }));
  };

  const handleTrusteeAddressChange = (trusteeType, field, value) => {
    setTrusteeInfo((prev) => ({
      ...prev,
      [trusteeType]: {
        ...prev[trusteeType],
        address: {
          ...prev[trusteeType].address,
          [field]: value
        }
      }
    }));
  };

  const handleTrusteeStateChange = (trusteeType, value) => {
    setTrusteeInfo((prev) => ({
      ...prev,
      [trusteeType]: {
        ...prev[trusteeType],
        address: {
          ...prev[trusteeType].address,
          state: value
        }
      }
    }));
  };

  const handleAdditionalTrusteeChange = (index, field, value) => {
    const updatedTrustees = [...trusteeInfo.additionalAlternateTrustees];
    updatedTrustees[index] = { 
      ...updatedTrustees[index], 
      [field]: value 
    };
    setTrusteeInfo((prev) => ({
      ...prev,
      additionalAlternateTrustees: updatedTrustees
    }));
  };

  const handleAdditionalTrusteeAddressChange = (index, field, value) => {
    const updatedTrustees = [...trusteeInfo.additionalAlternateTrustees];
    updatedTrustees[index] = { 
      ...updatedTrustees[index], 
      address: {
        ...updatedTrustees[index].address,
        [field]: value
      }
    };
    setTrusteeInfo((prev) => ({
      ...prev,
      additionalAlternateTrustees: updatedTrustees
    }));
  };

  const handleAdditionalTrusteeStateChange = (index, value) => {
    const updatedTrustees = [...trusteeInfo.additionalAlternateTrustees];
    updatedTrustees[index] = { 
      ...updatedTrustees[index], 
      address: {
        ...updatedTrustees[index].address,
        state: value
      }
    };
    setTrusteeInfo((prev) => ({
      ...prev,
      additionalAlternateTrustees: updatedTrustees
    }));
  };

  const addAlternateTrustee = () => {
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

  const removeAlternateTrustee = (index) => {
    const updatedTrustees = [...trusteeInfo.additionalAlternateTrustees];
    updatedTrustees.splice(index, 1);
    setTrusteeInfo((prev) => ({
      ...prev,
      additionalAlternateTrustees: updatedTrustees
    }));
  };

  const handleAssetsChange = (e) => {
    const { name, value } = e.target;
    setAssetsInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryToggle = (category, isSelected) => {
    setAssetsInfo((prev) => ({
      ...prev,
      selectedCategories: {
        ...prev.selectedCategories,
        [category]: isSelected
      }
    }));
  };

  const handleSpecialBequestChange = (index, field, value) => {
    const updatedBequests = [...specialBequestsInfo.specialBequests];
    updatedBequests[index] = { ...updatedBequests[index], [field]: value };
    setSpecialBequestsInfo((prev) => ({
      ...prev,
      specialBequests: updatedBequests,
    }));
  };

  const addSpecialBequest = () => {
    setSpecialBequestsInfo((prev) => ({
      ...prev,
      specialBequests: [
        ...prev.specialBequests,
        { item: "", recipient: "", relationship: "" },
      ],
    }));
  };

  const removeSpecialBequest = (index) => {
    const updatedBequests = [...specialBequestsInfo.specialBequests];
    updatedBequests.splice(index, 1);
    setSpecialBequestsInfo((prev) => ({
      ...prev,
      specialBequests: updatedBequests,
    }));
  };

  const handleAdditionalNotesChange = (e) => {
    setAdditionalNotes(e.target.value);
  };

  const handlePoaChange = (updatedData) => {
    setPoaInfo(updatedData);
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Combine all form data
    const formData = {
      personal: personalInfo,
      spouse: spouseInfo,
      children: childrenInfo,
      powerOfAttorney: poaInfo,
      executor: executorInfo,
      trustee: trusteeInfo,
      assets: assetsInfo,
      specialBequests: specialBequestsInfo,
      additionalNotes,
    };

    try {
      const response = await fetch("https://n8n.twlf.dev/webhook-test/estate-intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast({
        title: "Form Submitted Successfully",
        description: "We'll review your information and contact you soon.",
      });

      setStep(1);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render steps
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <PersonalInformationSection
              formData={personalInfo}
              onChange={handlePersonalInfoChange}
              onSelectChange={handleSelectChange}
            />

            {personalInfo.maritalStatus === "married" && (
              <SpouseInformationSection
                formData={spouseInfo}
                onChange={handleSpouseInfoChange}
                showSpouseSection={true}
              />
            )}

            <div className="flex justify-end mt-8">
              <Button type="button" onClick={nextStep} className="bg-woodlands-gold text-woodlands-purple">
                Next Step
              </Button>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <ChildrenSection
              formData={childrenInfo}
              onChange={() => {}}
              onCheckboxChange={handleCheckboxChange}
              onChildChange={handleChildChange}
              onChildCheckboxChange={handleChildCheckboxChange}
              onChildRadioChange={handleChildRadioChange}
              onChildAddressChange={handleChildAddressChange}
              addChild={addChild}
              removeChild={removeChild}
            />
            
            <PowerOfAttorneySection
              formData={poaInfo}
              onChange={handlePoaChange}
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
              <Button onClick={nextStep} className="bg-woodlands-gold text-woodlands-purple" type="button">
                Next Step
              </Button>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <ExecutorSection
              formData={executorInfo}
              onChange={() => {}}
              onCheckboxChange={handleCheckboxChange}
              onAddressChange={handleExecutorAddressChange}
              onExecutorChange={handleExecutorChange}
              onAdditionalExecutorChange={handleAdditionalExecutorChange}
              onAdditionalExecutorAddressChange={handleAdditionalExecutorAddressChange}
              addAlternateExecutor={addAlternateExecutor}
              removeAlternateExecutor={removeAlternateExecutor}
            />

            <TrusteeSection
              formData={trusteeInfo}
              onCheckboxChange={handleCheckboxChange}
              onTrusteeChange={handleTrusteeChange}
              onTrusteeAddressChange={handleTrusteeAddressChange}
              onTrusteeStateChange={handleTrusteeStateChange}
              onAdditionalTrusteeChange={handleAdditionalTrusteeChange}
              onAdditionalTrusteeAddressChange={handleAdditionalTrusteeAddressChange}
              onAdditionalTrusteeStateChange={handleAdditionalTrusteeStateChange}
              addAlternateTrustee={addAlternateTrustee}
              removeAlternateTrustee={removeAlternateTrustee}
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
              <Button onClick={nextStep} className="bg-woodlands-gold text-woodlands-purple" type="button">
                Next Step
              </Button>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <AssetsCategorySection
              formData={assetsInfo}
              onAssetsChange={handleAssetsChange}
              onCategoryToggle={handleCategoryToggle}
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
              <Button onClick={nextStep} className="bg-woodlands-gold text-woodlands-purple" type="button">
                Next Step
              </Button>
            </div>
          </>
        );

      case 5:
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
                  onCheckedChange={(checked) => handleCheckboxChange("hasSpecialBequests", !!checked)}
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
                            onClick={() => removeSpecialBequest(index)}
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
                              handleSpecialBequestChange(index, "item", e.target.value)
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
                              handleSpecialBequestChange(index, "recipient", e.target.value)
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
                                e.target.value
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
                    onClick={addSpecialBequest}
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
                  onChange={handleAdditionalNotesChange}
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
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-woodlands-gold text-woodlands-purple"
                type="button"
              >
                {isSubmitting ? "Submitting..." : "Submit Form"}
              </Button>
            </div>
          </>
        );

      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <MainLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-woodlands-gold mb-4">
            Estate Planning Intake Form
          </h1>
          <p className="text-woodlands-cream opacity-80">
            Please provide the following information to help us prepare your estate planning documents.
          </p>
        </div>

        <div className="bg-woodlands-purple-dark p-6 md:p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-woodlands-gold">
                Step {step} of 5
              </h2>
              <div className="text-sm text-woodlands-cream">
                {step === 1
                  ? "Personal Information"
                  : step === 2
                  ? "Family Information"
                  : step === 3
                  ? "Fiduciaries"
                  : step === 4
                  ? "Assets"
                  : "Final Details"}
              </div>
            </div>
            <div className="w-full bg-woodlands-purple-light rounded-full h-2.5">
              <div
                className="bg-woodlands-gold h-2.5 rounded-full"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-6">{renderStep()}</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IntakeForm;
