
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TrusteeInfo {
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
}

interface TrusteeSectionProps {
  formData: {
    useSameAsExecutor: boolean;
    primaryTrustee: TrusteeInfo;
    alternateTrustee: TrusteeInfo;
    additionalAlternateTrustees: TrusteeInfo[];
  };
  onCheckboxChange: (field: string, checked: boolean) => void;
  onTrusteeChange: (trusteeType: string, field: string, value: string) => void;
  onTrusteeAddressChange: (trusteeType: string, field: string, value: string) => void;
  onTrusteeStateChange: (trusteeType: string, value: string) => void;
  onAdditionalTrusteeChange?: (index: number, field: string, value: string) => void;
  onAdditionalTrusteeAddressChange?: (index: number, field: string, value: string) => void;
  onAdditionalTrusteeStateChange?: (index: number, value: string) => void;
  addAlternateTrustee?: () => void;
  removeAlternateTrustee?: (index: number) => void;
}

const TrusteeSection: React.FC<TrusteeSectionProps> = ({
  formData,
  onCheckboxChange,
  onTrusteeChange,
  onTrusteeAddressChange,
  onTrusteeStateChange,
  onAdditionalTrusteeChange,
  onAdditionalTrusteeAddressChange,
  onAdditionalTrusteeStateChange,
  addAlternateTrustee,
  removeAlternateTrustee
}) => {
  const [hasAdditionalTrustees, setHasAdditionalTrustees] = useState(
    formData.additionalAlternateTrustees && formData.additionalAlternateTrustees.length > 0
  );

  const handleAddTrusteeChange = (checked: boolean) => {
    setHasAdditionalTrustees(checked);
    if (checked && addAlternateTrustee && formData.additionalAlternateTrustees.length === 0) {
      addAlternateTrustee();
    }
  };

  return (
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
          checked={formData.useSameAsExecutor}
          onCheckedChange={(checked) => onCheckboxChange("useSameAsExecutor", !!checked)}
        />
        <Label htmlFor="useSameAsExecutor" className="text-sm font-medium text-woodlands-cream">
          Would you like to use the same person(s) as your executor?
        </Label>
      </div>

      {!formData.useSameAsExecutor && (
        <>
          <div className="space-y-6 mt-4">
            <h4 className="text-lg font-medium text-woodlands-gold">Primary Trustee</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="primaryTrusteeName" className="text-woodlands-gold">
                  Full Name *
                </Label>
                <Input
                  id="primaryTrusteeName"
                  required
                  value={formData.primaryTrustee.name}
                  onChange={(e) => onTrusteeChange("primaryTrustee", "name", e.target.value)}
                  className="text-white"
                />
              </div>
              <div>
                <Label htmlFor="primaryTrusteeRelationship" className="text-woodlands-gold">
                  Relationship to You *
                </Label>
                <Input
                  id="primaryTrusteeRelationship"
                  required
                  value={formData.primaryTrustee.relationship}
                  onChange={(e) => onTrusteeChange("primaryTrustee", "relationship", e.target.value)}
                  className="text-white"
                />
              </div>
              <div>
                <Label htmlFor="primaryTrusteeStreet" className="text-woodlands-gold">
                  Street Address *
                </Label>
                <Input
                  id="primaryTrusteeStreet"
                  required
                  value={formData.primaryTrustee.address.street}
                  onChange={(e) => onTrusteeAddressChange("primaryTrustee", "street", e.target.value)}
                  className="text-white"
                />
              </div>
              <div>
                <Label htmlFor="primaryTrusteeCity" className="text-woodlands-gold">
                  City *
                </Label>
                <Input
                  id="primaryTrusteeCity"
                  required
                  value={formData.primaryTrustee.address.city}
                  onChange={(e) => onTrusteeAddressChange("primaryTrustee", "city", e.target.value)}
                  className="text-white"
                />
              </div>
              <div>
                <Label htmlFor="primaryTrusteeState" className="text-woodlands-gold">
                  State *
                </Label>
                <Select
                  value={formData.primaryTrustee.address.state}
                  onValueChange={(value) => onTrusteeStateChange("primaryTrustee", value)}
                >
                  <SelectTrigger className="text-white">
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AL">Alabama</SelectItem>
                    <SelectItem value="AK">Alaska</SelectItem>
                    <SelectItem value="AZ">Arizona</SelectItem>
                    <SelectItem value="AR">Arkansas</SelectItem>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="CO">Colorado</SelectItem>
                    <SelectItem value="CT">Connecticut</SelectItem>
                    <SelectItem value="DE">Delaware</SelectItem>
                    <SelectItem value="FL">Florida</SelectItem>
                    <SelectItem value="GA">Georgia</SelectItem>
                    <SelectItem value="HI">Hawaii</SelectItem>
                    <SelectItem value="ID">Idaho</SelectItem>
                    <SelectItem value="IL">Illinois</SelectItem>
                    <SelectItem value="IN">Indiana</SelectItem>
                    <SelectItem value="IA">Iowa</SelectItem>
                    <SelectItem value="KS">Kansas</SelectItem>
                    <SelectItem value="KY">Kentucky</SelectItem>
                    <SelectItem value="LA">Louisiana</SelectItem>
                    <SelectItem value="ME">Maine</SelectItem>
                    <SelectItem value="MD">Maryland</SelectItem>
                    <SelectItem value="MA">Massachusetts</SelectItem>
                    <SelectItem value="MI">Michigan</SelectItem>
                    <SelectItem value="MN">Minnesota</SelectItem>
                    <SelectItem value="MS">Mississippi</SelectItem>
                    <SelectItem value="MO">Missouri</SelectItem>
                    <SelectItem value="MT">Montana</SelectItem>
                    <SelectItem value="NE">Nebraska</SelectItem>
                    <SelectItem value="NV">Nevada</SelectItem>
                    <SelectItem value="NH">New Hampshire</SelectItem>
                    <SelectItem value="NJ">New Jersey</SelectItem>
                    <SelectItem value="NM">New Mexico</SelectItem>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="NC">North Carolina</SelectItem>
                    <SelectItem value="ND">North Dakota</SelectItem>
                    <SelectItem value="OH">Ohio</SelectItem>
                    <SelectItem value="OK">Oklahoma</SelectItem>
                    <SelectItem value="OR">Oregon</SelectItem>
                    <SelectItem value="PA">Pennsylvania</SelectItem>
                    <SelectItem value="RI">Rhode Island</SelectItem>
                    <SelectItem value="SC">South Carolina</SelectItem>
                    <SelectItem value="SD">South Dakota</SelectItem>
                    <SelectItem value="TN">Tennessee</SelectItem>
                    <SelectItem value="TX">Texas</SelectItem>
                    <SelectItem value="UT">Utah</SelectItem>
                    <SelectItem value="VT">Vermont</SelectItem>
                    <SelectItem value="VA">Virginia</SelectItem>
                    <SelectItem value="WA">Washington</SelectItem>
                    <SelectItem value="WV">West Virginia</SelectItem>
                    <SelectItem value="WI">Wisconsin</SelectItem>
                    <SelectItem value="WY">Wyoming</SelectItem>
                    <SelectItem value="DC">District of Columbia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="primaryTrusteeZip" className="text-woodlands-gold">
                  Zip Code *
                </Label>
                <Input
                  id="primaryTrusteeZip"
                  required
                  value={formData.primaryTrustee.address.zipCode}
                  onChange={(e) => onTrusteeAddressChange("primaryTrustee", "zipCode", e.target.value)}
                  className="text-white"
                />
              </div>
              <div>
                <Label htmlFor="primaryTrusteePhone" className="text-woodlands-gold">
                  Phone Number *
                </Label>
                <Input
                  id="primaryTrusteePhone"
                  required
                  value={formData.primaryTrustee.phone}
                  onChange={(e) => onTrusteeChange("primaryTrustee", "phone", e.target.value)}
                  className="text-white"
                />
              </div>
              <div>
                <Label htmlFor="primaryTrusteeEmail" className="text-woodlands-gold">
                  Email *
                </Label>
                <Input
                  id="primaryTrusteeEmail"
                  type="email"
                  required
                  value={formData.primaryTrustee.email}
                  onChange={(e) => onTrusteeChange("primaryTrustee", "email", e.target.value)}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 mt-6">
            <h4 className="text-lg font-medium text-woodlands-gold">Alternate Trustee</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="alternateTrusteeName" className="text-woodlands-gold">
                  Full Name *
                </Label>
                <Input
                  id="alternateTrusteeName"
                  required
                  value={formData.alternateTrustee.name}
                  onChange={(e) => onTrusteeChange("alternateTrustee", "name", e.target.value)}
                  className="text-white"
                />
              </div>
              <div>
                <Label htmlFor="alternateTrusteeRelationship" className="text-woodlands-gold">
                  Relationship to You *
                </Label>
                <Input
                  id="alternateTrusteeRelationship"
                  required
                  value={formData.alternateTrustee.relationship}
                  onChange={(e) => onTrusteeChange("alternateTrustee", "relationship", e.target.value)}
                  className="text-white"
                />
              </div>
              <div>
                <Label htmlFor="alternateTrusteeStreet" className="text-woodlands-gold">
                  Street Address *
                </Label>
                <Input
                  id="alternateTrusteeStreet"
                  required
                  value={formData.alternateTrustee.address.street}
                  onChange={(e) => onTrusteeAddressChange("alternateTrustee", "street", e.target.value)}
                  className="text-white"
                />
              </div>
              <div>
                <Label htmlFor="alternateTrusteeCity" className="text-woodlands-gold">
                  City *
                </Label>
                <Input
                  id="alternateTrusteeCity"
                  required
                  value={formData.alternateTrustee.address.city}
                  onChange={(e) => onTrusteeAddressChange("alternateTrustee", "city", e.target.value)}
                  className="text-white"
                />
              </div>
              <div>
                <Label htmlFor="alternateTrusteeState" className="text-woodlands-gold">
                  State *
                </Label>
                <Select
                  value={formData.alternateTrustee.address.state}
                  onValueChange={(value) => onTrusteeStateChange("alternateTrustee", value)}
                >
                  <SelectTrigger className="text-white">
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AL">Alabama</SelectItem>
                    <SelectItem value="AK">Alaska</SelectItem>
                    <SelectItem value="AZ">Arizona</SelectItem>
                    <SelectItem value="AR">Arkansas</SelectItem>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="CO">Colorado</SelectItem>
                    <SelectItem value="CT">Connecticut</SelectItem>
                    <SelectItem value="DE">Delaware</SelectItem>
                    <SelectItem value="FL">Florida</SelectItem>
                    <SelectItem value="GA">Georgia</SelectItem>
                    <SelectItem value="HI">Hawaii</SelectItem>
                    <SelectItem value="ID">Idaho</SelectItem>
                    <SelectItem value="IL">Illinois</SelectItem>
                    <SelectItem value="IN">Indiana</SelectItem>
                    <SelectItem value="IA">Iowa</SelectItem>
                    <SelectItem value="KS">Kansas</SelectItem>
                    <SelectItem value="KY">Kentucky</SelectItem>
                    <SelectItem value="LA">Louisiana</SelectItem>
                    <SelectItem value="ME">Maine</SelectItem>
                    <SelectItem value="MD">Maryland</SelectItem>
                    <SelectItem value="MA">Massachusetts</SelectItem>
                    <SelectItem value="MI">Michigan</SelectItem>
                    <SelectItem value="MN">Minnesota</SelectItem>
                    <SelectItem value="MS">Mississippi</SelectItem>
                    <SelectItem value="MO">Missouri</SelectItem>
                    <SelectItem value="MT">Montana</SelectItem>
                    <SelectItem value="NE">Nebraska</SelectItem>
                    <SelectItem value="NV">Nevada</SelectItem>
                    <SelectItem value="NH">New Hampshire</SelectItem>
                    <SelectItem value="NJ">New Jersey</SelectItem>
                    <SelectItem value="NM">New Mexico</SelectItem>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="NC">North Carolina</SelectItem>
                    <SelectItem value="ND">North Dakota</SelectItem>
                    <SelectItem value="OH">Ohio</SelectItem>
                    <SelectItem value="OK">Oklahoma</SelectItem>
                    <SelectItem value="OR">Oregon</SelectItem>
                    <SelectItem value="PA">Pennsylvania</SelectItem>
                    <SelectItem value="RI">Rhode Island</SelectItem>
                    <SelectItem value="SC">South Carolina</SelectItem>
                    <SelectItem value="SD">South Dakota</SelectItem>
                    <SelectItem value="TN">Tennessee</SelectItem>
                    <SelectItem value="TX">Texas</SelectItem>
                    <SelectItem value="UT">Utah</SelectItem>
                    <SelectItem value="VT">Vermont</SelectItem>
                    <SelectItem value="VA">Virginia</SelectItem>
                    <SelectItem value="WA">Washington</SelectItem>
                    <SelectItem value="WV">West Virginia</SelectItem>
                    <SelectItem value="WI">Wisconsin</SelectItem>
                    <SelectItem value="WY">Wyoming</SelectItem>
                    <SelectItem value="DC">District of Columbia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="alternateTrusteeZip" className="text-woodlands-gold">
                  Zip Code *
                </Label>
                <Input
                  id="alternateTrusteeZip"
                  required
                  value={formData.alternateTrustee.address.zipCode}
                  onChange={(e) => onTrusteeAddressChange("alternateTrustee", "zipCode", e.target.value)}
                  className="text-white"
                />
              </div>
              <div>
                <Label htmlFor="alternateTrusteePhone" className="text-woodlands-gold">
                  Phone Number *
                </Label>
                <Input
                  id="alternateTrusteePhone"
                  required
                  value={formData.alternateTrustee.phone}
                  onChange={(e) => onTrusteeChange("alternateTrustee", "phone", e.target.value)}
                  className="text-white"
                />
              </div>
              <div>
                <Label htmlFor="alternateTrusteeEmail" className="text-woodlands-gold">
                  Email *
                </Label>
                <Input
                  id="alternateTrusteeEmail"
                  type="email"
                  required
                  value={formData.alternateTrustee.email}
                  onChange={(e) => onTrusteeChange("alternateTrustee", "email", e.target.value)}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="hasAdditionalTrustees"
                checked={hasAdditionalTrustees}
                onCheckedChange={(checked) => handleAddTrusteeChange(!!checked)}
              />
              <Label htmlFor="hasAdditionalTrustees" className="text-sm font-medium text-woodlands-cream">
                I would like to name additional alternate trustees
              </Label>
            </div>
          </div>

          {hasAdditionalTrustees && formData.additionalAlternateTrustees && formData.additionalAlternateTrustees.length > 0 && (
            <div className="space-y-6 mt-6">
              {formData.additionalAlternateTrustees.map((trustee, index) => (
                <div key={index} className="border border-woodlands-gold/10 rounded-lg p-4 mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-medium text-woodlands-gold">Additional Alternate Trustee #{index + 1}</h4>
                    {index > 0 && (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeAlternateTrustee && removeAlternateTrustee(index)}
                        type="button"
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`additionalTrusteeName-${index}`} className="text-woodlands-gold">
                        Full Name *
                      </Label>
                      <Input
                        id={`additionalTrusteeName-${index}`}
                        required
                        value={trustee.name}
                        onChange={(e) => onAdditionalTrusteeChange && onAdditionalTrusteeChange(index, "name", e.target.value)}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`additionalTrusteeRelationship-${index}`} className="text-woodlands-gold">
                        Relationship to You *
                      </Label>
                      <Input
                        id={`additionalTrusteeRelationship-${index}`}
                        required
                        value={trustee.relationship}
                        onChange={(e) => onAdditionalTrusteeChange && onAdditionalTrusteeChange(index, "relationship", e.target.value)}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`additionalTrusteeStreet-${index}`} className="text-woodlands-gold">
                        Street Address *
                      </Label>
                      <Input
                        id={`additionalTrusteeStreet-${index}`}
                        required
                        value={trustee.address.street}
                        onChange={(e) => onAdditionalTrusteeAddressChange && onAdditionalTrusteeAddressChange(index, "street", e.target.value)}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`additionalTrusteeCity-${index}`} className="text-woodlands-gold">
                        City *
                      </Label>
                      <Input
                        id={`additionalTrusteeCity-${index}`}
                        required
                        value={trustee.address.city}
                        onChange={(e) => onAdditionalTrusteeAddressChange && onAdditionalTrusteeAddressChange(index, "city", e.target.value)}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`additionalTrusteeState-${index}`} className="text-woodlands-gold">
                        State *
                      </Label>
                      <Select
                        value={trustee.address.state}
                        onValueChange={(value) => onAdditionalTrusteeStateChange && onAdditionalTrusteeStateChange(index, value)}
                      >
                        <SelectTrigger className="text-white">
                          <SelectValue placeholder="Select a state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="AL">Alabama</SelectItem>
                          <SelectItem value="AK">Alaska</SelectItem>
                          <SelectItem value="AZ">Arizona</SelectItem>
                          <SelectItem value="AR">Arkansas</SelectItem>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="CO">Colorado</SelectItem>
                          <SelectItem value="CT">Connecticut</SelectItem>
                          <SelectItem value="DE">Delaware</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                          <SelectItem value="GA">Georgia</SelectItem>
                          <SelectItem value="HI">Hawaii</SelectItem>
                          <SelectItem value="ID">Idaho</SelectItem>
                          <SelectItem value="IL">Illinois</SelectItem>
                          <SelectItem value="IN">Indiana</SelectItem>
                          <SelectItem value="IA">Iowa</SelectItem>
                          <SelectItem value="KS">Kansas</SelectItem>
                          <SelectItem value="KY">Kentucky</SelectItem>
                          <SelectItem value="LA">Louisiana</SelectItem>
                          <SelectItem value="ME">Maine</SelectItem>
                          <SelectItem value="MD">Maryland</SelectItem>
                          <SelectItem value="MA">Massachusetts</SelectItem>
                          <SelectItem value="MI">Michigan</SelectItem>
                          <SelectItem value="MN">Minnesota</SelectItem>
                          <SelectItem value="MS">Mississippi</SelectItem>
                          <SelectItem value="MO">Missouri</SelectItem>
                          <SelectItem value="MT">Montana</SelectItem>
                          <SelectItem value="NE">Nebraska</SelectItem>
                          <SelectItem value="NV">Nevada</SelectItem>
                          <SelectItem value="NH">New Hampshire</SelectItem>
                          <SelectItem value="NJ">New Jersey</SelectItem>
                          <SelectItem value="NM">New Mexico</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="NC">North Carolina</SelectItem>
                          <SelectItem value="ND">North Dakota</SelectItem>
                          <SelectItem value="OH">Ohio</SelectItem>
                          <SelectItem value="OK">Oklahoma</SelectItem>
                          <SelectItem value="OR">Oregon</SelectItem>
                          <SelectItem value="PA">Pennsylvania</SelectItem>
                          <SelectItem value="RI">Rhode Island</SelectItem>
                          <SelectItem value="SC">South Carolina</SelectItem>
                          <SelectItem value="SD">South Dakota</SelectItem>
                          <SelectItem value="TN">Tennessee</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="UT">Utah</SelectItem>
                          <SelectItem value="VT">Vermont</SelectItem>
                          <SelectItem value="VA">Virginia</SelectItem>
                          <SelectItem value="WA">Washington</SelectItem>
                          <SelectItem value="WV">West Virginia</SelectItem>
                          <SelectItem value="WI">Wisconsin</SelectItem>
                          <SelectItem value="WY">Wyoming</SelectItem>
                          <SelectItem value="DC">District of Columbia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor={`additionalTrusteeZip-${index}`} className="text-woodlands-gold">
                        Zip Code *
                      </Label>
                      <Input
                        id={`additionalTrusteeZip-${index}`}
                        required
                        value={trustee.address.zipCode}
                        onChange={(e) => onAdditionalTrusteeAddressChange && onAdditionalTrusteeAddressChange(index, "zipCode", e.target.value)}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`additionalTrusteePhone-${index}`} className="text-woodlands-gold">
                        Phone Number *
                      </Label>
                      <Input
                        id={`additionalTrusteePhone-${index}`}
                        required
                        value={trustee.phone}
                        onChange={(e) => onAdditionalTrusteeChange && onAdditionalTrusteeChange(index, "phone", e.target.value)}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`additionalTrusteeEmail-${index}`} className="text-woodlands-gold">
                        Email *
                      </Label>
                      <Input
                        id={`additionalTrusteeEmail-${index}`}
                        type="email"
                        required
                        value={trustee.email}
                        onChange={(e) => onAdditionalTrusteeChange && onAdditionalTrusteeChange(index, "email", e.target.value)}
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <Button
                type="button"
                variant="secondary"
                onClick={addAlternateTrustee}
              >
                Add Another Alternate Trustee
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TrusteeSection;
