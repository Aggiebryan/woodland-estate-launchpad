
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

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

      {/* Date of Birth Field */}
      <div>
        <Label htmlFor="spouseDateOfBirth" className={cn("text-woodlands-gold", errors.spouseDateOfBirth && "text-red-400")}>
          Date of Birth *
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full pl-3 text-left font-normal text-white",
                !formData.spouseDateOfBirth && "text-muted-foreground",
                errors.spouseDateOfBirth && "border-red-400"
              )}
            >
              {formData.spouseDateOfBirth ? (
                format(formData.spouseDateOfBirth, "PPP")
              ) : (
                <span>Select spouse's date of birth</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={formData.spouseDateOfBirth}
              onSelect={(date) => onDateChange("spouseDateOfBirth", date)}
              disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
              initialFocus
            />
          </PopoverContent>
        </Popover>
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
