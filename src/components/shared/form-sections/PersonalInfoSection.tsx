
import React from "react";
import { Input } from "@/components/ui/input";

interface PersonalInfoSectionProps {
  formData: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PersonalInfoSection = ({ formData, handleChange }: PersonalInfoSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="first_name" className="block text-sm font-medium text-woodlands-gold mb-1">
            First Name *
          </label>
          <Input
            id="first_name"
            name="first_name"
            placeholder="John"
            required
            value={formData.first_name}
            onChange={handleChange}
            className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
          />
        </div>
        <div>
          <label htmlFor="last_name" className="block text-sm font-medium text-woodlands-gold mb-1">
            Last Name *
          </label>
          <Input
            id="last_name"
            name="last_name"
            placeholder="Doe"
            required
            value={formData.last_name}
            onChange={handleChange}
            className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-woodlands-gold mb-1">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-woodlands-gold mb-1">
            Phone Number *
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="(555) 123-4567"
            required
            value={formData.phone}
            onChange={handleChange}
            className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
