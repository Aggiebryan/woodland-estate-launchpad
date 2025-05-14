import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}
interface ExecutorInfo {
  name: string;
  relationship: string;
  address: Address;
  phone: string;
  email: string;
}
interface ExecutorSectionProps {
  formData: {
    useSpouseAsExecutor: boolean;
    primaryExecutor: ExecutorInfo;
    alternateExecutor: ExecutorInfo;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (field: string, checked: boolean) => void;
  onAddressChange: (executorType: "primaryExecutor" | "alternateExecutor", field: string, value: string) => void;
  onExecutorChange: (executorType: "primaryExecutor" | "alternateExecutor", field: string, value: string) => void;
}
const ExecutorSection: React.FC<ExecutorSectionProps> = ({
  formData,
  onChange,
  onCheckboxChange,
  onAddressChange,
  onExecutorChange
}) => {
  const renderAddressFields = (executorType: "primaryExecutor" | "alternateExecutor", executor: ExecutorInfo, labelPrefix: string) => {
    return <div className="space-y-4 mt-4">
        <div>
          <Label htmlFor={`${labelPrefix}-address-street`} className="text-woodlands-gold">
            Street Address *
          </Label>
          <Input id={`${labelPrefix}-address-street`} required value={executor.address.street} onChange={e => onAddressChange(executorType, "street", e.target.value)} className="text-white" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor={`${labelPrefix}-address-city`} className="text-woodlands-gold">
              City *
            </Label>
            <Input id={`${labelPrefix}-address-city`} required value={executor.address.city} onChange={e => onAddressChange(executorType, "city", e.target.value)} className="text-white" />
          </div>
          <div>
            <Label htmlFor={`${labelPrefix}-address-state`} className="text-woodlands-gold">
              State *
            </Label>
            <Input id={`${labelPrefix}-address-state`} required value={executor.address.state} onChange={e => onAddressChange(executorType, "state", e.target.value)} className="text-white" />
          </div>
          <div>
            <Label htmlFor={`${labelPrefix}-address-zipCode`} className="text-woodlands-gold">
              Zip Code *
            </Label>
            <Input id={`${labelPrefix}-address-zipCode`} required value={executor.address.zipCode} onChange={e => onAddressChange(executorType, "zipCode", e.target.value)} className="text-white" />
          </div>
        </div>
      </div>;
  };
  return <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-woodlands-gold mb-4">
        Executor Information
      </h3>
      <p className="text-sm text-woodlands-cream opacity-80 mb-4">
        An executor is responsible for administering your estate after your death.
      </p>
      
      <div className="flex items-center space-x-2 mb-4">
        <Checkbox id="useSpouseAsExecutor" checked={formData.useSpouseAsExecutor} onCheckedChange={checked => onCheckboxChange("useSpouseAsExecutor", !!checked)} />
        <Label htmlFor="useSpouseAsExecutor" className="text-sm font-medium text-woodlands-cream">
          Would you like to name your spouse as your executor?
        </Label>
      </div>

      {!formData.useSpouseAsExecutor && <div className="bg-woodlands-darkpurple p-4 rounded-lg">
          <h4 className="text-lg font-medium text-woodlands-gold mb-4">Primary Executor</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="primaryExecutor-name" className="text-woodlands-gold">
                Full Name *
              </Label>
              <Input id="primaryExecutor-name" required value={formData.primaryExecutor.name} onChange={e => onExecutorChange("primaryExecutor", "name", e.target.value)} className="text-white" />
            </div>
            <div>
              <Label htmlFor="primaryExecutor-relationship" className="text-woodlands-gold">
                Relationship to You *
              </Label>
              <Input id="primaryExecutor-relationship" required value={formData.primaryExecutor.relationship} onChange={e => onExecutorChange("primaryExecutor", "relationship", e.target.value)} className="text-white" />
            </div>
          </div>
          
          {renderAddressFields("primaryExecutor", formData.primaryExecutor, "primaryExecutor")}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="primaryExecutor-phone" className="text-woodlands-gold">
                Phone Number *
              </Label>
              <Input id="primaryExecutor-phone" required value={formData.primaryExecutor.phone} onChange={e => onExecutorChange("primaryExecutor", "phone", e.target.value)} className="text-white" />
            </div>
            <div>
              <Label htmlFor="primaryExecutor-email" className="text-woodlands-gold">
                Email *
              </Label>
              <Input id="primaryExecutor-email" type="email" required value={formData.primaryExecutor.email} onChange={e => onExecutorChange("primaryExecutor", "email", e.target.value)} className="text-white" />
            </div>
          </div>
        </div>}

      <div className="bg-woodlands-darkpurple p-4 rounded-lg">
        <h4 className="text-lg font-medium text-woodlands-gold mb-4">Alternate Executor</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="alternateExecutor-name" className="text-woodlands-gold">
              Full Name *
            </Label>
            <Input id="alternateExecutor-name" required value={formData.alternateExecutor.name} onChange={e => onExecutorChange("alternateExecutor", "name", e.target.value)} className="text-white" />
          </div>
          <div>
            <Label htmlFor="alternateExecutor-relationship" className="text-woodlands-gold">
              Relationship to You *
            </Label>
            <Input id="alternateExecutor-relationship" required value={formData.alternateExecutor.relationship} onChange={e => onExecutorChange("alternateExecutor", "relationship", e.target.value)} className="text-white" />
          </div>
        </div>
        
        {renderAddressFields("alternateExecutor", formData.alternateExecutor, "alternateExecutor")}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="alternateExecutor-phone" className="text-woodlands-gold">
              Phone Number *
            </Label>
            <Input id="alternateExecutor-phone" required value={formData.alternateExecutor.phone} onChange={e => onExecutorChange("alternateExecutor", "phone", e.target.value)} className="text-white" />
          </div>
          <div>
            <Label htmlFor="alternateExecutor-email" className="text-woodlands-gold">
              Email *
            </Label>
            <Input id="alternateExecutor-email" type="email" required value={formData.alternateExecutor.email} onChange={e => onExecutorChange("alternateExecutor", "email", e.target.value)} className="text-white" />
          </div>
        </div>
      </div>
    </div>;
};
export default ExecutorSection;