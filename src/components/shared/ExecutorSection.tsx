
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface ExecutorInfo {
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

interface ExecutorSectionProps {
  formData: {
    useSpouseAsExecutor: boolean;
    primaryExecutor: ExecutorInfo;
    alternateExecutor: ExecutorInfo;
    additionalAlternateExecutors: ExecutorInfo[];
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (field: string, checked: boolean) => void;
  onExecutorChange: (executorType: string, field: string, value: string) => void;
  onAddressChange: (executorType: string, field: string, value: string) => void;
  onAdditionalExecutorChange?: (index: number, field: string, value: string) => void;
  onAdditionalExecutorAddressChange?: (index: number, field: string, value: string) => void;
  addAlternateExecutor?: () => void;
  removeAlternateExecutor?: (index: number) => void;
}

const ExecutorSection: React.FC<ExecutorSectionProps> = ({
  formData,
  onCheckboxChange,
  onExecutorChange,
  onAddressChange,
  onAdditionalExecutorChange,
  onAdditionalExecutorAddressChange,
  addAlternateExecutor,
  removeAlternateExecutor
}) => {
  const [hasAdditionalExecutors, setHasAdditionalExecutors] = useState(
    formData.additionalAlternateExecutors && formData.additionalAlternateExecutors.length > 0
  );

  const handleAddExecutorChange = (checked: boolean) => {
    setHasAdditionalExecutors(checked);
    if (checked && addAlternateExecutor && formData.additionalAlternateExecutors.length === 0) {
      addAlternateExecutor();
    }
  };

  return (
    <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-woodlands-gold mb-4">
        Executor Information
      </h3>
      <p className="text-sm text-woodlands-cream opacity-80 mb-4">
        An executor is the person responsible for administering your estate after your death.
      </p>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="useSpouseAsExecutor"
          checked={formData.useSpouseAsExecutor}
          onCheckedChange={(checked) => onCheckboxChange("useSpouseAsExecutor", !!checked)}
        />
        <Label htmlFor="useSpouseAsExecutor" className="text-sm font-medium text-woodlands-cream">
          Would you like to name your spouse as executor?
        </Label>
      </div>

      {!formData.useSpouseAsExecutor && (
        <div className="space-y-6 mt-4">
          <h4 className="text-lg font-medium text-woodlands-gold">Primary Executor</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="primaryExecutorName" className="text-woodlands-gold">
                Full Name *
              </Label>
              <Input
                id="primaryExecutorName"
                required
                value={formData.primaryExecutor.name}
                onChange={(e) => onExecutorChange("primaryExecutor", "name", e.target.value)}
                className="text-white"
              />
            </div>
            <div>
              <Label htmlFor="primaryExecutorRelationship" className="text-woodlands-gold">
                Relationship to You *
              </Label>
              <Input
                id="primaryExecutorRelationship"
                required
                value={formData.primaryExecutor.relationship}
                onChange={(e) => onExecutorChange("primaryExecutor", "relationship", e.target.value)}
                className="text-white"
              />
            </div>
            <div>
              <Label htmlFor="primaryExecutorStreet" className="text-woodlands-gold">
                Street Address *
              </Label>
              <Input
                id="primaryExecutorStreet"
                required
                value={formData.primaryExecutor.address.street}
                onChange={(e) => onAddressChange("primaryExecutor", "street", e.target.value)}
                className="text-white"
              />
            </div>
            <div>
              <Label htmlFor="primaryExecutorCity" className="text-woodlands-gold">
                City *
              </Label>
              <Input
                id="primaryExecutorCity"
                required
                value={formData.primaryExecutor.address.city}
                onChange={(e) => onAddressChange("primaryExecutor", "city", e.target.value)}
                className="text-white"
              />
            </div>
            <div>
              <Label htmlFor="primaryExecutorState" className="text-woodlands-gold">
                State *
              </Label>
              <Input
                id="primaryExecutorState"
                required
                value={formData.primaryExecutor.address.state}
                onChange={(e) => onAddressChange("primaryExecutor", "state", e.target.value)}
                className="text-white"
              />
            </div>
            <div>
              <Label htmlFor="primaryExecutorZip" className="text-woodlands-gold">
                Zip Code *
              </Label>
              <Input
                id="primaryExecutorZip"
                required
                value={formData.primaryExecutor.address.zipCode}
                onChange={(e) => onAddressChange("primaryExecutor", "zipCode", e.target.value)}
                className="text-white"
              />
            </div>
            <div>
              <Label htmlFor="primaryExecutorPhone" className="text-woodlands-gold">
                Phone Number *
              </Label>
              <Input
                id="primaryExecutorPhone"
                required
                value={formData.primaryExecutor.phone}
                onChange={(e) => onExecutorChange("primaryExecutor", "phone", e.target.value)}
                className="text-white"
              />
            </div>
            <div>
              <Label htmlFor="primaryExecutorEmail" className="text-woodlands-gold">
                Email *
              </Label>
              <Input
                id="primaryExecutorEmail"
                type="email"
                required
                value={formData.primaryExecutor.email}
                onChange={(e) => onExecutorChange("primaryExecutor", "email", e.target.value)}
                className="text-white"
              />
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6 mt-6">
        <h4 className="text-lg font-medium text-woodlands-gold">Alternate Executor</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="alternateExecutorName" className="text-woodlands-gold">
              Full Name *
            </Label>
            <Input
              id="alternateExecutorName"
              required
              value={formData.alternateExecutor.name}
              onChange={(e) => onExecutorChange("alternateExecutor", "name", e.target.value)}
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor="alternateExecutorRelationship" className="text-woodlands-gold">
              Relationship to You *
            </Label>
            <Input
              id="alternateExecutorRelationship"
              required
              value={formData.alternateExecutor.relationship}
              onChange={(e) => onExecutorChange("alternateExecutor", "relationship", e.target.value)}
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor="alternateExecutorStreet" className="text-woodlands-gold">
              Street Address *
            </Label>
            <Input
              id="alternateExecutorStreet"
              required
              value={formData.alternateExecutor.address.street}
              onChange={(e) => onAddressChange("alternateExecutor", "street", e.target.value)}
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor="alternateExecutorCity" className="text-woodlands-gold">
              City *
            </Label>
            <Input
              id="alternateExecutorCity"
              required
              value={formData.alternateExecutor.address.city}
              onChange={(e) => onAddressChange("alternateExecutor", "city", e.target.value)}
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor="alternateExecutorState" className="text-woodlands-gold">
              State *
            </Label>
            <Input
              id="alternateExecutorState"
              required
              value={formData.alternateExecutor.address.state}
              onChange={(e) => onAddressChange("alternateExecutor", "state", e.target.value)}
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor="alternateExecutorZip" className="text-woodlands-gold">
              Zip Code *
            </Label>
            <Input
              id="alternateExecutorZip"
              required
              value={formData.alternateExecutor.address.zipCode}
              onChange={(e) => onAddressChange("alternateExecutor", "zipCode", e.target.value)}
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor="alternateExecutorPhone" className="text-woodlands-gold">
              Phone Number *
            </Label>
            <Input
              id="alternateExecutorPhone"
              required
              value={formData.alternateExecutor.phone}
              onChange={(e) => onExecutorChange("alternateExecutor", "phone", e.target.value)}
              className="text-white"
            />
          </div>
          <div>
            <Label htmlFor="alternateExecutorEmail" className="text-woodlands-gold">
              Email *
            </Label>
            <Input
              id="alternateExecutorEmail"
              type="email"
              required
              value={formData.alternateExecutor.email}
              onChange={(e) => onExecutorChange("alternateExecutor", "email", e.target.value)}
              className="text-white"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="hasAdditionalExecutors"
            checked={hasAdditionalExecutors}
            onCheckedChange={(checked) => handleAddExecutorChange(!!checked)}
          />
          <Label htmlFor="hasAdditionalExecutors" className="text-sm font-medium text-woodlands-cream">
            I would like to name additional alternate executors
          </Label>
        </div>
      </div>

      {hasAdditionalExecutors && formData.additionalAlternateExecutors && formData.additionalAlternateExecutors.length > 0 && (
        <div className="space-y-6 mt-6">
          {formData.additionalAlternateExecutors.map((executor, index) => (
            <div key={index} className="border border-woodlands-gold/10 rounded-lg p-4 mt-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-medium text-woodlands-gold">Additional Alternate Executor #{index + 1}</h4>
                {index > 0 && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeAlternateExecutor && removeAlternateExecutor(index)}
                    type="button"
                  >
                    Remove
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`additionalExecutorName-${index}`} className="text-woodlands-gold">
                    Full Name *
                  </Label>
                  <Input
                    id={`additionalExecutorName-${index}`}
                    required
                    value={executor.name}
                    onChange={(e) => onAdditionalExecutorChange && onAdditionalExecutorChange(index, "name", e.target.value)}
                    className="text-white"
                  />
                </div>
                <div>
                  <Label htmlFor={`additionalExecutorRelationship-${index}`} className="text-woodlands-gold">
                    Relationship to You *
                  </Label>
                  <Input
                    id={`additionalExecutorRelationship-${index}`}
                    required
                    value={executor.relationship}
                    onChange={(e) => onAdditionalExecutorChange && onAdditionalExecutorChange(index, "relationship", e.target.value)}
                    className="text-white"
                  />
                </div>
                <div>
                  <Label htmlFor={`additionalExecutorStreet-${index}`} className="text-woodlands-gold">
                    Street Address *
                  </Label>
                  <Input
                    id={`additionalExecutorStreet-${index}`}
                    required
                    value={executor.address.street}
                    onChange={(e) => onAdditionalExecutorAddressChange && onAdditionalExecutorAddressChange(index, "street", e.target.value)}
                    className="text-white"
                  />
                </div>
                <div>
                  <Label htmlFor={`additionalExecutorCity-${index}`} className="text-woodlands-gold">
                    City *
                  </Label>
                  <Input
                    id={`additionalExecutorCity-${index}`}
                    required
                    value={executor.address.city}
                    onChange={(e) => onAdditionalExecutorAddressChange && onAdditionalExecutorAddressChange(index, "city", e.target.value)}
                    className="text-white"
                  />
                </div>
                <div>
                  <Label htmlFor={`additionalExecutorState-${index}`} className="text-woodlands-gold">
                    State *
                  </Label>
                  <Input
                    id={`additionalExecutorState-${index}`}
                    required
                    value={executor.address.state}
                    onChange={(e) => onAdditionalExecutorAddressChange && onAdditionalExecutorAddressChange(index, "state", e.target.value)}
                    className="text-white"
                  />
                </div>
                <div>
                  <Label htmlFor={`additionalExecutorZip-${index}`} className="text-woodlands-gold">
                    Zip Code *
                  </Label>
                  <Input
                    id={`additionalExecutorZip-${index}`}
                    required
                    value={executor.address.zipCode}
                    onChange={(e) => onAdditionalExecutorAddressChange && onAdditionalExecutorAddressChange(index, "zipCode", e.target.value)}
                    className="text-white"
                  />
                </div>
                <div>
                  <Label htmlFor={`additionalExecutorPhone-${index}`} className="text-woodlands-gold">
                    Phone Number *
                  </Label>
                  <Input
                    id={`additionalExecutorPhone-${index}`}
                    required
                    value={executor.phone}
                    onChange={(e) => onAdditionalExecutorChange && onAdditionalExecutorChange(index, "phone", e.target.value)}
                    className="text-white"
                  />
                </div>
                <div>
                  <Label htmlFor={`additionalExecutorEmail-${index}`} className="text-woodlands-gold">
                    Email *
                  </Label>
                  <Input
                    id={`additionalExecutorEmail-${index}`}
                    type="email"
                    required
                    value={executor.email}
                    onChange={(e) => onAdditionalExecutorChange && onAdditionalExecutorChange(index, "email", e.target.value)}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="secondary"
            onClick={addAlternateExecutor}
          >
            Add Another Alternate Executor
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExecutorSection;
