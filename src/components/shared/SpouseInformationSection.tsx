
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SpouseInformationSectionProps {
  formData: {
    spouseFirstName: string;
    spouseMiddleName: string;
    spouseLastName: string;
    spouseEmail: string;
    spousePhone: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showSpouseSection: boolean;
}

const SpouseInformationSection: React.FC<SpouseInformationSectionProps> = ({
  formData,
  onChange,
  showSpouseSection,
}) => {
  if (!showSpouseSection) return null;

  return (
    <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-woodlands-gold mb-4">Spouse Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="spouseFirstName" className="text-woodlands-gold">
            First Name *
          </Label>
          <Input
            id="spouseFirstName"
            name="spouseFirstName"
            required
            value={formData.spouseFirstName}
            onChange={onChange}
            className="text-white"
          />
        </div>
        <div>
          <Label htmlFor="spouseMiddleName" className="text-woodlands-gold">
            Middle Name
          </Label>
          <Input
            id="spouseMiddleName"
            name="spouseMiddleName"
            value={formData.spouseMiddleName}
            onChange={onChange}
            className="text-white"
          />
        </div>
        <div>
          <Label htmlFor="spouseLastName" className="text-woodlands-gold">
            Last Name *
          </Label>
          <Input
            id="spouseLastName"
            name="spouseLastName"
            required
            value={formData.spouseLastName}
            onChange={onChange}
            className="text-white"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="spouseEmail" className="text-woodlands-gold">
            Email
          </Label>
          <Input
            id="spouseEmail"
            name="spouseEmail"
            type="email"
            value={formData.spouseEmail}
            onChange={onChange}
            className="text-white"
          />
        </div>
        <div>
          <Label htmlFor="spousePhone" className="text-woodlands-gold">
            Phone Number
          </Label>
          <Input
            id="spousePhone"
            name="spousePhone"
            value={formData.spousePhone}
            onChange={onChange}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default SpouseInformationSection;
