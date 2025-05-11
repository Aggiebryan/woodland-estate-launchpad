
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import PersonalInfoSection from "./form-sections/PersonalInfoSection";
import ServiceSelectionSection from "./form-sections/ServiceSelectionSection";
import MessageSection from "./form-sections/MessageSection";
import ConsultationFormFooter from "./form-sections/ConsultationFormFooter";
import PowerOfAttorneySection from "./PowerOfAttorneySection";

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
      <PersonalInfoSection formData={formData} handleChange={handleChange} />
      <ServiceSelectionSection service={formData.service} handleSelectChange={handleSelectChange} />
      
      {/* Power of Attorney Section */}
      <PowerOfAttorneySection 
        formData={formData}
        handleChange={handleChange}
        handleCheckboxChange={handleCheckboxChange}
      />

      <MessageSection message={formData.message} handleChange={handleChange} />
      <ConsultationFormFooter isSubmitting={isSubmitting} />
    </form>
  );
};

export default ConsultationForm;
