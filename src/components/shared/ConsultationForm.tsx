
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

const ConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    
    // Power of Attorney Fields
    poa_use_spouse: false,
    poa_primary_name: "",
    poa_primary_address: "",
    poa_primary_phone: "",
    poa_primary_email: "",
    poa_primary_medical: false,
    
    poa_alternate_name: "",
    poa_alternate_address: "",
    poa_alternate_phone: "",
    poa_alternate_email: "",
    poa_alternate_medical: false,
    
    has_additional_poa: false,
    poa_additional_name: "",
    poa_additional_address: "",
    poa_additional_phone: "",
    poa_additional_email: "",
    poa_additional_medical: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n.twlf.dev/webhook-test/send-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: "Consultation Request Received",
        description: "We'll contact you within 1 business day to confirm your appointment.",
      });

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        
        // Reset Power of Attorney Fields
        poa_use_spouse: false,
        poa_primary_name: "",
        poa_primary_address: "",
        poa_primary_phone: "",
        poa_primary_email: "",
        poa_primary_medical: false,
        
        poa_alternate_name: "",
        poa_alternate_address: "",
        poa_alternate_phone: "",
        poa_alternate_email: "",
        poa_alternate_medical: false,
        
        has_additional_poa: false,
        poa_additional_name: "",
        poa_additional_address: "",
        poa_additional_phone: "",
        poa_additional_email: "",
        poa_additional_medical: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-woodlands-gold mb-1">
          Service Needed *
        </label>
        <Select 
          name="service" 
          value={formData.service} 
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
      
      {/* Power of Attorney Section */}
      <div className="space-y-4 border border-woodlands-gold/30 p-4 rounded-md">
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

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-woodlands-gold mb-1">
          Brief Description of Your Needs
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Please provide a brief description of your situation and what you're looking to accomplish."
          value={formData.message}
          onChange={handleChange}
          className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold transition-colors"
        >
          {isSubmitting ? "Submitting..." : "Request Free Consultation"}
        </Button>
        <p className="mt-3 text-xs text-center text-woodlands-cream opacity-70">
          By submitting this form, you agree to our privacy policy and consent to be contacted regarding your request.
        </p>
      </div>
    </form>
  );
};

export default ConsultationForm;
