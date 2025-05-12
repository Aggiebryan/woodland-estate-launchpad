import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface PowerOfAttorneyAgent {
  fullName: string;
  address: Address;
  phone: string;
  email: string;
  isMedicalPOA: boolean;
}

interface PowerOfAttorneySectionProps {
  formData: {
    useSpouseAsPrimaryPOA: boolean;
    primaryPOA: PowerOfAttorneyAgent;
    alternatePOA: PowerOfAttorneyAgent;
    additionalAlternatePOAs: PowerOfAttorneyAgent[];
    hasAdditionalAlternatePOAs: boolean;
  };
  onChange: (data: any) => void;
}

const PowerOfAttorneySection: React.FC<PowerOfAttorneySectionProps> = ({
  formData,
  onChange,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    agentType: "primaryPOA" | "alternatePOA" | number
  ) => {
    const { name, value } = e.target;
    
    if (agentType === "primaryPOA" || agentType === "alternatePOA") {
      onChange({
        ...formData,
        [agentType]: {
          ...formData[agentType],
          [name]: value,
        },
      });
    } else {
      // Handle additional alternate POAs
      const updatedAdditionalPOAs = [...formData.additionalAlternatePOAs];
      updatedAdditionalPOAs[agentType] = {
        ...updatedAdditionalPOAs[agentType],
        [name]: value,
      };
      onChange({
        ...formData,
        additionalAlternatePOAs: updatedAdditionalPOAs,
      });
    }
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    addressField: string,
    agentType: "primaryPOA" | "alternatePOA" | number
  ) => {
    const { value } = e.target;
    
    if (agentType === "primaryPOA" || agentType === "alternatePOA") {
      onChange({
        ...formData,
        [agentType]: {
          ...formData[agentType],
          address: {
            ...formData[agentType].address,
            [addressField]: value,
          },
        },
      });
    } else {
      // Handle additional alternate POAs
      const updatedAdditionalPOAs = [...formData.additionalAlternatePOAs];
      updatedAdditionalPOAs[agentType] = {
        ...updatedAdditionalPOAs[agentType],
        address: {
          ...updatedAdditionalPOAs[agentType].address,
          [addressField]: value,
        },
      };
      onChange({
        ...formData,
        additionalAlternatePOAs: updatedAdditionalPOAs,
      });
    }
  };

  const handleCheckboxChange = (
    checked: boolean,
    field: string,
    agentType?: "primaryPOA" | "alternatePOA" | number
  ) => {
    if (field === "useSpouseAsPrimaryPOA") {
      onChange({
        ...formData,
        useSpouseAsPrimaryPOA: checked,
      });
    } else if (field === "hasAdditionalAlternatePOAs") {
      onChange({
        ...formData,
        hasAdditionalAlternatePOAs: checked,
      });
    } else if (agentType === "primaryPOA" || agentType === "alternatePOA") {
      onChange({
        ...formData,
        [agentType]: {
          ...formData[agentType],
          isMedicalPOA: checked,
        },
      });
    } else if (typeof agentType === "number") {
      // Handle additional alternate POAs
      const updatedAdditionalPOAs = [...formData.additionalAlternatePOAs];
      updatedAdditionalPOAs[agentType] = {
        ...updatedAdditionalPOAs[agentType],
        isMedicalPOA: checked,
      };
      onChange({
        ...formData,
        additionalAlternatePOAs: updatedAdditionalPOAs,
      });
    }
  };

  const addAlternatePOA = () => {
    onChange({
      ...formData,
      additionalAlternatePOAs: [
        ...formData.additionalAlternatePOAs,
        { 
          fullName: "", 
          address: { street: "", city: "", state: "", zipCode: "" }, 
          phone: "", 
          email: "", 
          isMedicalPOA: false 
        }
      ]
    });
  };

  const removeAlternatePOA = (index: number) => {
    const updatedAdditionalPOAs = [...formData.additionalAlternatePOAs];
    updatedAdditionalPOAs.splice(index, 1);
    onChange({
      ...formData,
      additionalAlternatePOAs: updatedAdditionalPOAs,
    });
  };

  const renderAddressFields = (agentType: "primaryPOA" | "alternatePOA" | number, agent: PowerOfAttorneyAgent, idPrefix: string) => {
    return (
      <div className="space-y-4 mt-4">
        <div>
          <Label htmlFor={`${idPrefix}-street`} className="text-woodlands-gold">Street Address</Label>
          <Input
            id={`${idPrefix}-street`}
            name="street"
            value={agent.address.street}
            onChange={(e) => handleAddressChange(e, "street", agentType)}
            className="text-white"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor={`${idPrefix}-city`} className="text-woodlands-gold">City</Label>
            <Input
              id={`${idPrefix}-city`}
              name="city"
              value={agent.address.city}
              onChange={(e) => handleAddressChange(e, "city", agentType)}
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor={`${idPrefix}-state`} className="text-woodlands-gold">State</Label>
            <Input
              id={`${idPrefix}-state`}
              name="state"
              value={agent.address.state}
              onChange={(e) => handleAddressChange(e, "state", agentType)}
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor={`${idPrefix}-zipCode`} className="text-woodlands-gold">Zip Code</Label>
            <Input
              id={`${idPrefix}-zipCode`}
              name="zipCode"
              value={agent.address.zipCode}
              onChange={(e) => handleAddressChange(e, "zipCode", agentType)}
              className="text-white"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-woodlands-gold mb-4">
        Power of Attorney Information
      </h3>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="useSpouseAsPrimaryPOA"
          checked={formData.useSpouseAsPrimaryPOA}
          onCheckedChange={(checked) =>
            handleCheckboxChange(!!checked, "useSpouseAsPrimaryPOA")
          }
        />
        <Label htmlFor="useSpouseAsPrimaryPOA" className="text-sm font-medium text-woodlands-cream">
          Would you like to name your spouse as your primary Power Of Attorney Agent?
        </Label>
      </div>

      {!formData.useSpouseAsPrimaryPOA && (
        <div className="bg-woodlands-darkpurple p-4 rounded-lg mt-4">
          <h4 className="text-lg font-medium text-woodlands-gold mb-4">Primary Power of Attorney Agent</h4>
          <div>
            <Label htmlFor="primaryPOA-fullName" className="text-woodlands-gold">Full Legal Name</Label>
            <Input
              id="primaryPOA-fullName"
              name="fullName"
              value={formData.primaryPOA.fullName}
              onChange={(e) => handleChange(e, "fullName", "primaryPOA")}
              className="text-white"
            />
          </div>
          
          {renderAddressFields("primaryPOA", formData.primaryPOA, "primaryPOA")}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="primaryPOA-phone" className="text-woodlands-gold">Phone Number</Label>
              <Input
                id="primaryPOA-phone"
                name="phone"
                value={formData.primaryPOA.phone}
                onChange={(e) => handleChange(e, "phone", "primaryPOA")}
                className="text-white"
              />
            </div>
            <div>
              <Label htmlFor="primaryPOA-email" className="text-woodlands-gold">Email Address</Label>
              <Input
                id="primaryPOA-email"
                name="email"
                type="email"
                value={formData.primaryPOA.email}
                onChange={(e) => handleChange(e, "email", "primaryPOA")}
                className="text-white"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <Checkbox
              id="primaryPOA-isMedicalPOA"
              checked={formData.primaryPOA.isMedicalPOA}
              onCheckedChange={(checked) =>
                handleCheckboxChange(!!checked, "isMedicalPOA", "primaryPOA")
              }
            />
            <Label htmlFor="primaryPOA-isMedicalPOA" className="text-sm font-medium text-woodlands-cream">
              Should this person also be included as a Medical Power of Attorney?
            </Label>
          </div>
        </div>
      )}

      <div className="bg-woodlands-darkpurple p-4 rounded-lg">
        <h4 className="text-lg font-medium text-woodlands-gold mb-4">Alternate Power of Attorney Agent</h4>
        <div>
          <Label htmlFor="alternatePOA-fullName" className="text-woodlands-gold">Full Legal Name</Label>
          <Input
            id="alternatePOA-fullName"
            name="fullName"
            value={formData.alternatePOA.fullName}
            onChange={(e) => handleChange(e, "fullName", "alternatePOA")}
            className="text-white"
          />
        </div>
        
        {renderAddressFields("alternatePOA", formData.alternatePOA, "alternatePOA")}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="alternatePOA-phone" className="text-woodlands-gold">Phone Number</Label>
            <Input
              id="alternatePOA-phone"
              name="phone"
              value={formData.alternatePOA.phone}
              onChange={(e) => handleChange(e, "phone", "alternatePOA")}
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor="alternatePOA-email" className="text-woodlands-gold">Email Address</Label>
            <Input
              id="alternatePOA-email"
              name="email"
              type="email"
              value={formData.alternatePOA.email}
              onChange={(e) => handleChange(e, "email", "alternatePOA")}
              className="text-white"
            />
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <Checkbox
            id="alternatePOA-isMedicalPOA"
            checked={formData.alternatePOA.isMedicalPOA}
            onCheckedChange={(checked) =>
              handleCheckboxChange(!!checked, "isMedicalPOA", "alternatePOA")
            }
          />
          <Label htmlFor="alternatePOA-isMedicalPOA" className="text-sm font-medium text-woodlands-cream">
            Should this person also be included as a Medical Power of Attorney?
          </Label>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="hasAdditionalAlternatePOAs"
            checked={formData.hasAdditionalAlternatePOAs}
            onCheckedChange={(checked) =>
              handleCheckboxChange(!!checked, "hasAdditionalAlternatePOAs")
            }
          />
          <Label htmlFor="hasAdditionalAlternatePOAs" className="text-sm font-medium text-woodlands-cream">
            Would you like to name additional alternate Power of Attorney Agents?
          </Label>
        </div>

        {formData.hasAdditionalAlternatePOAs && (
          <div className="space-y-4 mt-4">
            {formData.additionalAlternatePOAs.map((agent, index) => (
              <div key={index} className="bg-woodlands-darkpurple p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium text-woodlands-gold">
                    Additional Alternate Power of Attorney Agent #{index + 1}
                  </h4>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => removeAlternatePOA(index)}
                  >
                    Remove
                  </Button>
                </div>
                
                <div>
                  <Label htmlFor={`additionalPOA-${index}-fullName`} className="text-woodlands-gold">Full Legal Name</Label>
                  <Input
                    id={`additionalPOA-${index}-fullName`}
                    name="fullName"
                    value={agent.fullName}
                    onChange={(e) => handleChange(e, "fullName", index)}
                    className="text-white"
                  />
                </div>
                
                {renderAddressFields(index, agent, `additionalPOA-${index}`)}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label htmlFor={`additionalPOA-${index}-phone`} className="text-woodlands-gold">Phone Number</Label>
                    <Input
                      id={`additionalPOA-${index}-phone`}
                      name="phone"
                      value={agent.phone}
                      onChange={(e) => handleChange(e, "phone", index)}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`additionalPOA-${index}-email`} className="text-woodlands-gold">Email Address</Label>
                    <Input
                      id={`additionalPOA-${index}-email`}
                      name="email"
                      type="email"
                      value={agent.email}
                      onChange={(e) => handleChange(e, "email", index)}
                      className="text-white"
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <Checkbox
                    id={`additionalPOA-${index}-isMedicalPOA`}
                    checked={agent.isMedicalPOA}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(!!checked, "isMedicalPOA", index)
                    }
                  />
                  <Label htmlFor={`additionalPOA-${index}-isMedicalPOA`} className="text-sm font-medium text-woodlands-cream">
                    Should this person also be included as a Medical Power of Attorney?
                  </Label>
                </div>
              </div>
            ))}
            <Button 
              type="button" 
              variant="secondary"
              onClick={addAlternatePOA}
              className="mt-2"
            >
              Add Another Alternate Agent
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PowerOfAttorneySection;
