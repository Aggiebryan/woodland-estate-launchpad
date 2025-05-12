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
      age: string;
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
  });

  // Trustee Information
  const [trusteeInfo, setTrusteeInfo] = useState({
    useSameAsExecutor: false,
    trusteeName: "",
    trusteeRelationship: "",
    trusteeAddress: "",
    trusteePhone: "",
    trusteeEmail: "",
    alternateTrusteeName: "",
    alternateTrusteeRelationship: "",
    alternateTrusteeAddress: "",
    alternateTrusteePhone: "",
    alternateTrusteeEmail: "",
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
          age: "", 
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

  const handleTrusteeChange = (e) => {
    const { name, value } = e.target;
    setTrusteeInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAssetsChange = (e) => {
    const { name, value } = e.target;
    setAssetsInfo((prev) => ({ ...prev, [name]: value }));
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
      // API endpoint can be updated later
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

      // Reset form or navigate to a thank you page
      // For now, just navigate back to step 1
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
            />

            <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-woodlands-gold mb-4">
                Trustee Information
              </h3>
              <p className="text-sm text-woodlands-cream opacity-80 mb-4">
                A trustee is responsible for managing assets held in trust.
              </p>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="useSameAsExecutor"
                  checked={trusteeInfo.useSameAsExecutor}
                  onCheckedChange={(checked) => handleCheckboxChange("useSameAsExecutor", !!checked)}
                />
                <Label htmlFor="useSameAsExecutor" className="text-sm font-medium text-woodlands-cream">
                  Would you like to use the same person(s) as your executor?
                </Label>
              </div>

              {!trusteeInfo.useSameAsExecutor && (
                <div className="space-y-6 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="trusteeName" className="text-woodlands-gold">
                        Trustee Full Name *
                      </Label>
                      <Input
                        id="trusteeName"
                        name="trusteeName"
                        required
                        value={trusteeInfo.trusteeName}
                        onChange={handleTrusteeChange}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="trusteeRelationship" className="text-woodlands-gold">
                        Relationship to You *
                      </Label>
                      <Input
                        id="trusteeRelationship"
                        name="trusteeRelationship"
                        required
                        value={trusteeInfo.trusteeRelationship}
                        onChange={handleTrusteeChange}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="trusteeAddress" className="text-woodlands-gold">
                        Address *
                      </Label>
                      <Input
                        id="trusteeAddress"
                        name="trusteeAddress"
                        required
                        value={trusteeInfo.trusteeAddress}
                        onChange={handleTrusteeChange}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="trusteePhone" className="text-woodlands-gold">
                        Phone Number *
                      </Label>
                      <Input
                        id="trusteePhone"
                        name="trusteePhone"
                        required
                        value={trusteeInfo.trusteePhone}
                        onChange={handleTrusteeChange}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="trusteeEmail" className="text-woodlands-gold">
                        Email *
                      </Label>
                      <Input
                        id="trusteeEmail"
                        name="trusteeEmail"
                        type="email"
                        required
                        value={trusteeInfo.trusteeEmail}
                        onChange={handleTrusteeChange}
                        className="text-white"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-woodlands-gold mb-4">Alternate Trustee</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="alternateTrusteeName" className="text-woodlands-gold">
                          Full Name *
                        </Label>
                        <Input
                          id="alternateTrusteeName"
                          name="alternateTrusteeName"
                          required
                          value={trusteeInfo.alternateTrusteeName}
                          onChange={handleTrusteeChange}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="alternateTrusteeRelationship" className="text-woodlands-gold">
                          Relationship to You *
                        </Label>
                        <Input
                          id="alternateTrusteeRelationship"
                          name="alternateTrusteeRelationship"
                          required
                          value={trusteeInfo.alternateTrusteeRelationship}
                          onChange={handleTrusteeChange}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="alternateTrusteeAddress" className="text-woodlands-gold">
                          Address *
                        </Label>
                        <Input
                          id="alternateTrusteeAddress"
                          name="alternateTrusteeAddress"
                          required
                          value={trusteeInfo.alternateTrusteeAddress}
                          onChange={handleTrusteeChange}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="alternateTrusteePhone" className="text-woodlands-gold">
                          Phone Number *
                        </Label>
                        <Input
                          id="alternateTrusteePhone"
                          name="alternateTrusteePhone"
                          required
                          value={trusteeInfo.alternateTrusteePhone}
                          onChange={handleTrusteeChange}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="alternateTrusteeEmail" className="text-woodlands-gold">
                          Email *
                        </Label>
                        <Input
                          id="alternateTrusteeEmail"
                          name="alternateTrusteeEmail"
                          type="email"
                          required
                          value={trusteeInfo.alternateTrusteeEmail}
                          onChange={handleTrusteeChange}
                          className="text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
              <Button onClick={nextStep} className="bg-woodlands-gold text-woodlands-purple" type="button">
                Next Step
              </Button>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-woodlands-gold mb-4">Assets Summary</h3>
              <p className="text-sm text-woodlands-cream opacity-80 mb-4">
                Please provide a general overview of your assets. This helps us better understand your estate planning needs.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="realEstate" className="text-woodlands-gold">
                    Real Estate
                  </Label>
                  <Textarea
                    id="realEstate"
                    name="realEstate"
                    placeholder="Description and approximate value of properties"
                    value={assetsInfo.realEstate}
                    onChange={handleAssetsChange}
                    className="h-24 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="bankAccounts" className="text-woodlands-gold">
                    Bank Accounts
                  </Label>
                  <Textarea
                    id="bankAccounts"
                    name="bankAccounts"
                    placeholder="Types of accounts and approximate total value"
                    value={assetsInfo.bankAccounts}
                    onChange={handleAssetsChange}
                    className="h-24 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="investments" className="text-woodlands-gold">
                    Investments
                  </Label>
                  <Textarea
                    id="investments"
                    name="investments"
                    placeholder="Types of investments and approximate total value"
                    value={assetsInfo.investments}
                    onChange={handleAssetsChange}
                    className="h-24 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="retirementAccounts" className="text-woodlands-gold">
                    Retirement Accounts
                  </Label>
                  <Textarea
                    id="retirementAccounts"
                    name="retirementAccounts"
                    placeholder="Types of retirement accounts and approximate total value"
                    value={assetsInfo.retirementAccounts}
                    onChange={handleAssetsChange}
                    className="h-24 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="businessInterests" className="text-woodlands-gold">
                    Business Interests
                  </Label>
                  <Textarea
                    id="businessInterests"
                    name="businessInterests"
                    placeholder="Description of any business ownership and approximate value"
                    value={assetsInfo.businessInterests}
                    onChange={handleAssetsChange}
                    className="h-24 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="lifeInsurance" className="text-woodlands-gold">
                    Life Insurance Policies
                  </Label>
                  <Textarea
                    id="lifeInsurance"
                    name="lifeInsurance"
                    placeholder="Description of policies and death benefits"
                    value={assetsInfo.lifeInsurance}
                    onChange={handleAssetsChange}
                    className="h-24 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="personalProperty" className="text-woodlands-gold">
                    Personal Property
                  </Label>
                  <Textarea
                    id="personalProperty"
                    name="personalProperty"
                    placeholder="Significant personal property (vehicles, jewelry, art, etc.)"
                    value={assetsInfo.personalProperty}
                    onChange={handleAssetsChange}
                    className="h-24 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="otherAssets" className="text-woodlands-gold">
                    Other Assets
                  </Label>
                  <Textarea
                    id="otherAssets"
                    name="otherAssets"
                    placeholder="Any other significant assets not covered above"
                    value={assetsInfo.otherAssets}
                    onChange={handleAssetsChange}
                    className="h-24 text-white"
                  />
                </div>
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
