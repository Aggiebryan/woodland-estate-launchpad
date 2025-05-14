import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { parse, isValid, format } from "date-fns";
import { cn, applyDateMask } from "@/lib/utils";

interface SpouseInformationSectionProps {
  formData: {
    spouseFirstName: string;
    spouseMiddleName: string;
    spouseLastName: string;
    spouseDateOfBirth: Date | undefined;
    spouseEmail: string;
    spousePhone: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (field: string, value: Date | undefined) => void;
  showSpouseSection: boolean;
  errors: Record<string, string>;
}

const SpouseInformationSection: React.FC<SpouseInformationSectionProps> = ({
  formData,
  onChange,
  onDateChange,
  showSpouseSection,
  errors,
}) => {
  if (!showSpouseSection) return null;

  // State to track the masked date input value
  const [dateInputValue, setDateInputValue] = useState("");
  
  // Initialize date input value from formData
  useEffect(() => {
    if (formData.spouseDateOfBirth) {
      setDateInputValue(format(formData.spouseDateOfBirth, "MM/dd/yyyy"));
    }
  }, [formData.spouseDateOfBirth]);

  // Function to format phone number as (XXX) XXX-XXXX
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const digits = value.replace(/\D/g, '');
    
    // Format into (XXX) XXX-XXXX pattern
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    
    // Create a synthetic event with the formatted value
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        name: e.target.name,
        value: formattedNumber,
      },
    };
    
    onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
  };

  // Email validation
  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value.trim();
    if (email && !validateEmail(email)) {
      toast({
        title: "Invalid Email Format",
        description: "Please use a valid email format (name@domain.com)",
        variant: "destructive",
      });
    }
  };

  // Handle date input with masking
  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Apply the mask and update the input value
    const maskedValue = applyDateMask(value);
    setDateInputValue(maskedValue);
    
    // Try to parse the date if it's in the right format (MM/DD/YYYY)
    if (maskedValue.length === 10) {
      const parsedDate = parse(maskedValue, "MM/dd/yyyy", new Date());
      
      // Update the form data if the date is valid
      if (isValid(parsedDate)) {
        onDateChange("spouseDateOfBirth", parsedDate);
      }
    } else if (value === "") {
      // If the input is cleared, set date to undefined
      onDateChange("spouseDateOfBirth", undefined);
    }
  };

  return (
    <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-woodlands-gold mb-4">Spouse Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="spouseFirstName" className={cn("text-woodlands-gold", errors.spouseFirstName && "text-red-400")}>
            First Name *
          </Label>
          <Input
            id="spouseFirstName"
            name="spouseFirstName"
            required
            value={formData.spouseFirstName}
            onChange={onChange}
            className={cn("text-white", errors.spouseFirstName && "border-red-400")}
          />
          {errors.spouseFirstName && <p className="mt-1 text-sm text-red-400">{errors.spouseFirstName}</p>}
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
          <Label htmlFor="spouseLastName" className={cn("text-woodlands-gold", errors.spouseLastName && "text-red-400")}>
            Last Name *
          </Label>
          <Input
            id="spouseLastName"
            name="spouseLastName"
            required
            value={formData.spouseLastName}
            onChange={onChange}
            className={cn("text-white", errors.spouseLastName && "border-red-400")}
          />
          {errors.spouseLastName && <p className="mt-1 text-sm text-red-400">{errors.spouseLastName}</p>}
        </div>
      </div>

      {/* Date of Birth Field with manual masked input */}
      <div>
        <Label htmlFor="spouseDateOfBirth" className={cn("text-woodlands-gold", errors.spouseDateOfBirth && "text-red-400")}>
          Date of Birth *
        </Label>
        <Input
          id="spouseDateOfBirthInput"
          placeholder="MM/DD/YYYY"
          value={dateInputValue}
          onChange={handleDateInputChange}
          className={cn("text-white", errors.spouseDateOfBirth && "border-red-400")}
          maxLength={10}
        />
        {errors.spouseDateOfBirth && <p className="mt-1 text-sm text-red-400">{errors.spouseDateOfBirth}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="spouseEmail" className={cn("text-woodlands-gold", errors.spouseEmail && "text-red-400")}>
            Email
          </Label>
          <Input
            id="spouseEmail"
            name="spouseEmail"
            type="email"
            value={formData.spouseEmail}
            onChange={onChange}
            onBlur={handleEmailBlur}
            className={cn("text-white", errors.spouseEmail && "border-red-400")}
          />
          {errors.spouseEmail && <p className="mt-1 text-sm text-red-400">{errors.spouseEmail}</p>}
        </div>
        <div>
          <Label htmlFor="spousePhone" className={cn("text-woodlands-gold", errors.spousePhone && "text-red-400")}>
            Phone Number
          </Label>
          <Input
            id="spousePhone"
            name="spousePhone"
            value={formData.spousePhone}
            onChange={handlePhoneChange}
            placeholder="(XXX) XXX-XXXX"
            maxLength={14}
            className={cn("text-white", errors.spousePhone && "border-red-400")}
          />
          {errors.spousePhone && <p className="mt-1 text-sm text-red-400">{errors.spousePhone}</p>}
        </div>
      </div>
    </div>
  );
};

export default SpouseInformationSection;
