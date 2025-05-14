import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { parse, isValid } from "date-fns";
import { cn, applyDateMask } from "@/lib/utils";

interface PersonalInformationSectionProps {
  formData: {
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date | undefined;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    maritalStatus: string;
    spouseFullName?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (field: string, value: string) => void;
  onDateChange: (field: string, value: Date | undefined) => void;
  errors: Record<string, string>;
}

const PersonalInformationSection: React.FC<PersonalInformationSectionProps> = ({
  formData,
  onChange,
  onSelectChange,
  onDateChange,
  errors,
}) => {
  // State to track the masked date input value
  const [dateInputValue, setDateInputValue] = useState("");

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

  // ZIP code validation
  const handleZipBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const zip = e.target.value.trim();
    const zipRegex = /^\d{5}(-\d{4})?$/;
    
    if (zip && !zipRegex.test(zip)) {
      toast({
        title: "Invalid ZIP Code",
        description: "Please use a valid 5-digit ZIP code or ZIP+4 format",
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
        onDateChange("dateOfBirth", parsedDate);
      }
    } else if (value === "") {
      // If the input is cleared, set date to undefined
      onDateChange("dateOfBirth", undefined);
    }
  };

  return (
    <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-woodlands-gold mb-4">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="firstName" className={cn("text-woodlands-gold", errors.firstName && "text-red-400")}>
            First Name *
          </Label>
          <Input
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={onChange}
            className={cn("text-white", errors.firstName && "border-red-400")}
          />
          {errors.firstName && <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>}
        </div>
        <div>
          <Label htmlFor="middleName" className="text-woodlands-gold">
            Middle Name
          </Label>
          <Input
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={onChange}
            className="text-white"
          />
        </div>
        <div>
          <Label htmlFor="lastName" className={cn("text-woodlands-gold", errors.lastName && "text-red-400")}>
            Last Name *
          </Label>
          <Input
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={onChange}
            className={cn("text-white", errors.lastName && "border-red-400")}
          />
          {errors.lastName && <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>}
        </div>
      </div>

      {/* Date of Birth Field with manual masked input */}
      <div>
        <Label htmlFor="dateOfBirth" className={cn("text-woodlands-gold", errors.dateOfBirth && "text-red-400")}>
          Date of Birth *
        </Label>
        <Input
          id="dateOfBirthInput"
          placeholder="MM/DD/YYYY"
          value={dateInputValue}
          onChange={handleDateInputChange}
          className={cn("text-white", errors.dateOfBirth && "border-red-400")}
          maxLength={10}
        />
        {errors.dateOfBirth && <p className="mt-1 text-sm text-red-400">{errors.dateOfBirth}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className={cn("text-woodlands-gold", errors.email && "text-red-400")}>
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={onChange}
            onBlur={handleEmailBlur}
            className={cn("text-white", errors.email && "border-red-400")}
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="phone" className={cn("text-woodlands-gold", errors.phone && "text-red-400")}>
            Phone Number *
          </Label>
          <Input
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="(XXX) XXX-XXXX"
            maxLength={14}
            className={cn("text-white", errors.phone && "border-red-400")}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="address" className={cn("text-woodlands-gold", errors.address && "text-red-400")}>
          Address *
        </Label>
        <Input
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={onChange}
          className={cn("text-white", errors.address && "border-red-400")}
        />
        {errors.address && <p className="mt-1 text-sm text-red-400">{errors.address}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="city" className={cn("text-woodlands-gold", errors.city && "text-red-400")}>
            City *
          </Label>
          <Input
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={onChange}
            className={cn("text-white", errors.city && "border-red-400")}
          />
          {errors.city && <p className="mt-1 text-sm text-red-400">{errors.city}</p>}
        </div>
        <div>
          <Label htmlFor="state" className={cn("text-woodlands-gold", errors.state && "text-red-400")}>
            State *
          </Label>
          <Select
            value={formData.state}
            onValueChange={(value) => onSelectChange("state", value)}
          >
            <SelectTrigger className={cn("text-white", errors.state && "border-red-400")}>
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="AL">Alabama</SelectItem>
              <SelectItem value="AK">Alaska</SelectItem>
              <SelectItem value="AZ">Arizona</SelectItem>
              <SelectItem value="AR">Arkansas</SelectItem>
              <SelectItem value="CA">California</SelectItem>
              <SelectItem value="CO">Colorado</SelectItem>
              <SelectItem value="CT">Connecticut</SelectItem>
              <SelectItem value="DE">Delaware</SelectItem>
              <SelectItem value="FL">Florida</SelectItem>
              <SelectItem value="GA">Georgia</SelectItem>
              <SelectItem value="HI">Hawaii</SelectItem>
              <SelectItem value="ID">Idaho</SelectItem>
              <SelectItem value="IL">Illinois</SelectItem>
              <SelectItem value="IN">Indiana</SelectItem>
              <SelectItem value="IA">Iowa</SelectItem>
              <SelectItem value="KS">Kansas</SelectItem>
              <SelectItem value="KY">Kentucky</SelectItem>
              <SelectItem value="LA">Louisiana</SelectItem>
              <SelectItem value="ME">Maine</SelectItem>
              <SelectItem value="MD">Maryland</SelectItem>
              <SelectItem value="MA">Massachusetts</SelectItem>
              <SelectItem value="MI">Michigan</SelectItem>
              <SelectItem value="MN">Minnesota</SelectItem>
              <SelectItem value="MS">Mississippi</SelectItem>
              <SelectItem value="MO">Missouri</SelectItem>
              <SelectItem value="MT">Montana</SelectItem>
              <SelectItem value="NE">Nebraska</SelectItem>
              <SelectItem value="NV">Nevada</SelectItem>
              <SelectItem value="NH">New Hampshire</SelectItem>
              <SelectItem value="NJ">New Jersey</SelectItem>
              <SelectItem value="NM">New Mexico</SelectItem>
              <SelectItem value="NY">New York</SelectItem>
              <SelectItem value="NC">North Carolina</SelectItem>
              <SelectItem value="ND">North Dakota</SelectItem>
              <SelectItem value="OH">Ohio</SelectItem>
              <SelectItem value="OK">Oklahoma</SelectItem>
              <SelectItem value="OR">Oregon</SelectItem>
              <SelectItem value="PA">Pennsylvania</SelectItem>
              <SelectItem value="RI">Rhode Island</SelectItem>
              <SelectItem value="SC">South Carolina</SelectItem>
              <SelectItem value="SD">South Dakota</SelectItem>
              <SelectItem value="TN">Tennessee</SelectItem>
              <SelectItem value="TX">Texas</SelectItem>
              <SelectItem value="UT">Utah</SelectItem>
              <SelectItem value="VT">Vermont</SelectItem>
              <SelectItem value="VA">Virginia</SelectItem>
              <SelectItem value="WA">Washington</SelectItem>
              <SelectItem value="WV">West Virginia</SelectItem>
              <SelectItem value="WI">Wisconsin</SelectItem>
              <SelectItem value="WY">Wyoming</SelectItem>
              <SelectItem value="DC">District of Columbia</SelectItem>
            </SelectContent>
          </Select>
          {errors.state && <p className="mt-1 text-sm text-red-400">{errors.state}</p>}
        </div>
        <div>
          <Label htmlFor="zipCode" className={cn("text-woodlands-gold", errors.zipCode && "text-red-400")}>
            Zip Code *
          </Label>
          <Input
            id="zipCode"
            name="zipCode"
            required
            value={formData.zipCode}
            onChange={onChange}
            onBlur={handleZipBlur}
            className={cn("text-white", errors.zipCode && "border-red-400")}
          />
          {errors.zipCode && <p className="mt-1 text-sm text-red-400">{errors.zipCode}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="maritalStatus" className={cn("text-woodlands-gold", errors.maritalStatus && "text-red-400")}>
          Marital Status *
        </Label>
        <Select
          value={formData.maritalStatus}
          onValueChange={(value) => onSelectChange("maritalStatus", value)}
        >
          <SelectTrigger className={cn("text-white", errors.maritalStatus && "border-red-400")}>
            <SelectValue placeholder="Select your marital status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="single">Single</SelectItem>
            <SelectItem value="married">Married</SelectItem>
            <SelectItem value="separated">Separated</SelectItem>
            <SelectItem value="divorced">Divorced</SelectItem>
            <SelectItem value="widowed">Widowed</SelectItem>
          </SelectContent>
        </Select>
        {errors.maritalStatus && <p className="mt-1 text-sm text-red-400">{errors.maritalStatus}</p>}
      </div>
      
      {/* Additional fields based on marital status */}
      {formData.maritalStatus === "separated" && (
        <div>
          <Label htmlFor="spouseFullName" className={cn("text-woodlands-gold", errors.spouseFullName && "text-red-400")}>
            Spouse's Full Name *
          </Label>
          <Input
            id="spouseFullName"
            name="spouseFullName"
            required
            value={formData.spouseFullName || ""}
            onChange={onChange}
            className={cn("text-white", errors.spouseFullName && "border-red-400")}
          />
          {errors.spouseFullName && <p className="mt-1 text-sm text-red-400">{errors.spouseFullName}</p>}
        </div>
      )}
      
      {formData.maritalStatus === "divorced" && (
        <div>
          <Label htmlFor="spouseFullName" className={cn("text-woodlands-gold", errors.spouseFullName && "text-red-400")}>
            Former Spouse's Full Name *
          </Label>
          <Input
            id="spouseFullName"
            name="spouseFullName"
            required
            value={formData.spouseFullName || ""}
            onChange={onChange}
            className={cn("text-white", errors.spouseFullName && "border-red-400")}
          />
          {errors.spouseFullName && <p className="mt-1 text-sm text-red-400">{errors.spouseFullName}</p>}
        </div>
      )}
      
      {formData.maritalStatus === "widowed" && (
        <div>
          <Label htmlFor="spouseFullName" className={cn("text-woodlands-gold", errors.spouseFullName && "text-red-400")}>
            Late Spouse's Full Name *
          </Label>
          <Input
            id="spouseFullName"
            name="spouseFullName"
            required
            value={formData.spouseFullName || ""}
            onChange={onChange}
            className={cn("text-white", errors.spouseFullName && "border-red-400")}
          />
          {errors.spouseFullName && <p className="mt-1 text-sm text-red-400">{errors.spouseFullName}</p>}
        </div>
      )}
    </div>
  );
};

export default PersonalInformationSection;
