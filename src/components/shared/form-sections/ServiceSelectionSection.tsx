
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ServiceSelectionSectionProps {
  service: string;
  handleSelectChange: (value: string) => void;
}

const ServiceSelectionSection = ({ service, handleSelectChange }: ServiceSelectionSectionProps) => {
  return (
    <div>
      <label htmlFor="service" className="block text-sm font-medium text-woodlands-gold mb-1">
        Service Needed *
      </label>
      <Select 
        name="service" 
        value={service} 
        onValueChange={handleSelectChange} 
        required
      >
        <SelectTrigger className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream focus:border-woodlands-gold">
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="estate-planning">General Estate Planning</SelectItem>
          <SelectItem value="trusts">Trusts</SelectItem>
          <SelectItem value="probate">Probate</SelectItem>
          <SelectItem value="Guardianship">Guardianship</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ServiceSelectionSection;
