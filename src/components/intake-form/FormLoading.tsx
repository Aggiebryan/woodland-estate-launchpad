
import React from "react";
import { Loader2 } from "lucide-react";

const FormLoading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <Loader2 className="h-12 w-12 text-woodlands-gold animate-spin mb-4" />
      <div className="text-woodlands-gold text-xl">Loading your form data...</div>
      <p className="text-woodlands-gold/80 mt-2 text-center max-w-md">
        This may take a few moments. If you continue to see this screen, please refresh the page or try logging in again.
      </p>
    </div>
  );
};

export default FormLoading;
