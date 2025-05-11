
import React from "react";
import { Button } from "@/components/ui/button";

interface ConsultationFormFooterProps {
  isSubmitting: boolean;
}

const ConsultationFormFooter = ({ isSubmitting }: ConsultationFormFooterProps) => {
  return (
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
  );
};

export default ConsultationFormFooter;
