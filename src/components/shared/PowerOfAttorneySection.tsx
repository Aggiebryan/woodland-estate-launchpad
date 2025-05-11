
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

interface PowerOfAttorneySectionProps {
  formData: {
    poa_use_spouse: boolean;
    poa_primary_name: string;
    poa_primary_address: string;
    poa_primary_phone: string;
    poa_primary_email: string;
    poa_primary_medical: boolean;
    poa_alternate_name: string;
    poa_alternate_address: string;
    poa_alternate_phone: string;
    poa_alternate_email: string;
    poa_alternate_medical: boolean;
    has_additional_poa: boolean;
    poa_additional_name: string;
    poa_additional_address: string;
    poa_additional_phone: string;
    poa_additional_email: string;
    poa_additional_medical: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
  className?: string;
}

const PowerOfAttorneySection = ({ 
  formData, 
  handleChange, 
  handleCheckboxChange,
  className = "" 
}: PowerOfAttorneySectionProps) => {
  return (
    <div className={`space-y-4 border border-woodlands-gold/30 p-4 rounded-md ${className}`}>
      <h3 className="text-lg font-medium text-woodlands-gold">Power of Attorney Information</h3>
      
      {/* Spouse as POA Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="poa_use_spouse" 
          checked={formData.poa_use_spouse}
          onCheckedChange={(checked) => handleCheckboxChange('poa_use_spouse', checked === true)} 
        />
        <label
          htmlFor="poa_use_spouse"
          className="text-sm font-medium leading-none text-woodlands-cream"
        >
          Would you like to name your spouse as your primary Power Of Attorney Agent?
        </label>
      </div>
      
      {/* Primary POA Information */}
      <div className="space-y-4">
        <h4 className="text-md font-medium text-woodlands-gold">Primary Power of Attorney</h4>
        
        <div>
          <label htmlFor="poa_primary_name" className="block text-sm font-medium text-woodlands-gold mb-1">
            Full Legal Name
          </label>
          <Input
            id="poa_primary_name"
            name="poa_primary_name"
            value={formData.poa_primary_name}
            onChange={handleChange}
            className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
          />
        </div>
        
        <div>
          <label htmlFor="poa_primary_address" className="block text-sm font-medium text-woodlands-gold mb-1">
            Address
          </label>
          <Input
            id="poa_primary_address"
            name="poa_primary_address"
            value={formData.poa_primary_address}
            onChange={handleChange}
            className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="poa_primary_phone" className="block text-sm font-medium text-woodlands-gold mb-1">
              Phone Number
            </label>
            <Input
              id="poa_primary_phone"
              name="poa_primary_phone"
              value={formData.poa_primary_phone}
              onChange={handleChange}
              className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
            />
          </div>
          
          <div>
            <label htmlFor="poa_primary_email" className="block text-sm font-medium text-woodlands-gold mb-1">
              Email Address
            </label>
            <Input
              id="poa_primary_email"
              name="poa_primary_email"
              type="email"
              value={formData.poa_primary_email}
              onChange={handleChange}
              className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="poa_primary_medical" 
            checked={formData.poa_primary_medical}
            onCheckedChange={(checked) => handleCheckboxChange('poa_primary_medical', checked === true)} 
          />
          <label
            htmlFor="poa_primary_medical"
            className="text-sm font-medium leading-none text-woodlands-cream"
          >
            Should this Power of Attorney also be included as the medical power of attorney?
          </label>
        </div>
      </div>
      
      {/* Alternate POA Information */}
      <div className="space-y-4 mt-6">
        <h4 className="text-md font-medium text-woodlands-gold">Alternate Power of Attorney</h4>
        
        <div>
          <label htmlFor="poa_alternate_name" className="block text-sm font-medium text-woodlands-gold mb-1">
            Full Legal Name
          </label>
          <Input
            id="poa_alternate_name"
            name="poa_alternate_name"
            value={formData.poa_alternate_name}
            onChange={handleChange}
            className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
          />
        </div>
        
        <div>
          <label htmlFor="poa_alternate_address" className="block text-sm font-medium text-woodlands-gold mb-1">
            Address
          </label>
          <Input
            id="poa_alternate_address"
            name="poa_alternate_address"
            value={formData.poa_alternate_address}
            onChange={handleChange}
            className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="poa_alternate_phone" className="block text-sm font-medium text-woodlands-gold mb-1">
              Phone Number
            </label>
            <Input
              id="poa_alternate_phone"
              name="poa_alternate_phone"
              value={formData.poa_alternate_phone}
              onChange={handleChange}
              className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
            />
          </div>
          
          <div>
            <label htmlFor="poa_alternate_email" className="block text-sm font-medium text-woodlands-gold mb-1">
              Email Address
            </label>
            <Input
              id="poa_alternate_email"
              name="poa_alternate_email"
              type="email"
              value={formData.poa_alternate_email}
              onChange={handleChange}
              className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="poa_alternate_medical" 
            checked={formData.poa_alternate_medical}
            onCheckedChange={(checked) => handleCheckboxChange('poa_alternate_medical', checked === true)} 
          />
          <label
            htmlFor="poa_alternate_medical"
            className="text-sm font-medium leading-none text-woodlands-cream"
          >
            Should this Power of Attorney also be included as the medical power of attorney?
          </label>
        </div>
      </div>
      
      {/* Additional POA Agent Question */}
      <div className="flex items-center space-x-2 mt-4">
        <Checkbox 
          id="has_additional_poa" 
          checked={formData.has_additional_poa}
          onCheckedChange={(checked) => handleCheckboxChange('has_additional_poa', checked === true)} 
        />
        <label
          htmlFor="has_additional_poa"
          className="text-sm font-medium leading-none text-woodlands-cream"
        >
          Would you like to include additional alternate Power of Attorney agents?
        </label>
      </div>
      
      {/* Additional POA Information - Only shows if checked */}
      {formData.has_additional_poa && (
        <div className="space-y-4 mt-6 pl-4 border-l-2 border-woodlands-gold/30">
          <h4 className="text-md font-medium text-woodlands-gold">Additional Alternate Power of Attorney</h4>
          
          <div>
            <label htmlFor="poa_additional_name" className="block text-sm font-medium text-woodlands-gold mb-1">
              Full Legal Name
            </label>
            <Input
              id="poa_additional_name"
              name="poa_additional_name"
              value={formData.poa_additional_name}
              onChange={handleChange}
              className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
            />
          </div>
          
          <div>
            <label htmlFor="poa_additional_address" className="block text-sm font-medium text-woodlands-gold mb-1">
              Address
            </label>
            <Input
              id="poa_additional_address"
              name="poa_additional_address"
              value={formData.poa_additional_address}
              onChange={handleChange}
              className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="poa_additional_phone" className="block text-sm font-medium text-woodlands-gold mb-1">
                Phone Number
              </label>
              <Input
                id="poa_additional_phone"
                name="poa_additional_phone"
                value={formData.poa_additional_phone}
                onChange={handleChange}
                className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
              />
            </div>
            
            <div>
              <label htmlFor="poa_additional_email" className="block text-sm font-medium text-woodlands-gold mb-1">
                Email Address
              </label>
              <Input
                id="poa_additional_email"
                name="poa_additional_email"
                type="email"
                value={formData.poa_additional_email}
                onChange={handleChange}
                className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="poa_additional_medical" 
              checked={formData.poa_additional_medical}
              onCheckedChange={(checked) => handleCheckboxChange('poa_additional_medical', checked === true)} 
            />
            <label
              htmlFor="poa_additional_medical"
              className="text-sm font-medium leading-none text-woodlands-cream"
            >
              Should this Power of Attorney also be included as the medical power of attorney?
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default PowerOfAttorneySection;
