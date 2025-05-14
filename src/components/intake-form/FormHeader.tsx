
import React from "react";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { format } from "date-fns";

interface FormHeaderProps {
  saveForm: () => void;
  lastSaved: Date | null;
}

const FormHeader: React.FC<FormHeaderProps> = ({ saveForm, lastSaved }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-woodlands-gold">
          Estate Planning Intake Form
        </h1>
        <Button 
          onClick={saveForm}
          variant="outline" 
          className="border-woodlands-gold text-woodlands-gold hover:bg-woodlands-gold/20"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Progress
        </Button>
      </div>
      <p className="text-woodlands-cream opacity-80 mt-4">
        Please provide the following information to help us prepare your estate planning documents.
        {lastSaved && (
          <span className="block text-sm mt-1">
            Last saved: {format(lastSaved, 'MMM d, yyyy h:mm a')}
          </span>
        )}
      </p>
    </div>
  );
};

export default FormHeader;
