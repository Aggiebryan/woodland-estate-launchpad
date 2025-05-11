
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PersonalInformationSectionProps {
  formData: {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    maritalStatus: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (field: string, value: string) => void;
}

const PersonalInformationSection: React.FC<PersonalInformationSectionProps> = ({
  formData,
  onChange,
  onSelectChange,
}) => {
  return (
    <div className="space-y-6 mb-8">
      <h3 className="text-xl font-semibold text-woodlands-purple mb-4">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="firstName" className="text-woodlands-gold">
            First Name *
          </Label>
          <Input
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={onChange}
          />
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
          />
        </div>
        <div>
          <Label htmlFor="lastName" className="text-woodlands-gold">
            Last Name *
          </Label>
          <Input
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="text-woodlands-gold">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={onChange}
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-woodlands-gold">
            Phone Number *
          </Label>
          <Input
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="address" className="text-woodlands-gold">
          Address *
        </Label>
        <Input
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={onChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="city" className="text-woodlands-gold">
            City *
          </Label>
          <Input
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={onChange}
          />
        </div>
        <div>
          <Label htmlFor="state" className="text-woodlands-gold">
            State *
          </Label>
          <Select
            value={formData.state}
            onValueChange={(value) => onSelectChange("state", value)}
          >
            <SelectTrigger>
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
        </div>
        <div>
          <Label htmlFor="zipCode" className="text-woodlands-gold">
            Zip Code *
          </Label>
          <Input
            id="zipCode"
            name="zipCode"
            required
            value={formData.zipCode}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="maritalStatus" className="text-woodlands-gold">
          Marital Status *
        </Label>
        <Select
          value={formData.maritalStatus}
          onValueChange={(value) => onSelectChange("maritalStatus", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your marital status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="single">Single</SelectItem>
            <SelectItem value="married">Married</SelectItem>
            <SelectItem value="divorced">Divorced</SelectItem>
            <SelectItem value="widowed">Widowed</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PersonalInformationSection;
