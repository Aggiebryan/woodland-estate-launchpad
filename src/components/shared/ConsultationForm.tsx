
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

const ConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Consultation Request Received",
        description: "We'll contact you within 1 business day to confirm your appointment.",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1000);
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
            className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-woodlands-gold mb-1">
          Service Needed *
        </label>
        <Select name="service" required>
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

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-woodlands-gold mb-1">
          Brief Description of Your Needs
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Please provide a brief description of your situation and what you're looking to accomplish."
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
