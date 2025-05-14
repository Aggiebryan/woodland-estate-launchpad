import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
interface ChildAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}
interface Child {
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  isMinor: boolean;
  livesWithClient: boolean;
  address: ChildAddress;
  relationship: "currentMarriage" | "previousMarriage" | "adopted";
  otherParentName: string;
}
interface ChildrenSectionProps {
  formData: {
    hasChildren: boolean;
    children: Child[];
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (field: string, checked: boolean) => void;
  onChildChange: (index: number, field: string, value: string) => void;
  onChildCheckboxChange: (index: number, field: string, checked: boolean) => void;
  onChildRadioChange: (index: number, field: string, value: string) => void;
  onChildAddressChange: (index: number, field: string, value: string) => void;
  addChild: () => void;
  removeChild: (index: number) => void;
}
const ChildrenSection: React.FC<ChildrenSectionProps> = ({
  formData,
  onChange,
  onCheckboxChange,
  onChildChange,
  onChildCheckboxChange,
  onChildRadioChange,
  onChildAddressChange,
  addChild,
  removeChild
}) => {
  return <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-woodlands-gold mb-4">Children Information</h3>
      <div className="flex items-center space-x-2">
        <Checkbox id="hasChildren" checked={formData.hasChildren} onCheckedChange={checked => onCheckboxChange("hasChildren", !!checked)} />
        <Label htmlFor="hasChildren" className="text-sm font-medium text-woodlands-cream">
          Do you have children?
        </Label>
      </div>

      {formData.hasChildren && <div className="space-y-4 mt-4">
          {formData.children.map((child, index) => <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium text-woodlands-gold">Child #{index + 1}</h4>
                  <Button variant="destructive" size="sm" onClick={() => removeChild(index)}>
                    Remove
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <Label htmlFor={`child-${index}-firstName`} className="text-woodlands-gold">First Name</Label>
                    <Input id={`child-${index}-firstName`} value={child.firstName} onChange={e => onChildChange(index, "firstName", e.target.value)} className="text-white" />
                  </div>
                  <div>
                    <Label htmlFor={`child-${index}-middleName`} className="text-woodlands-gold">Middle Name</Label>
                    <Input id={`child-${index}-middleName`} value={child.middleName} onChange={e => onChildChange(index, "middleName", e.target.value)} className="text-white" />
                  </div>
                  <div>
                    <Label htmlFor={`child-${index}-lastName`} className="text-woodlands-gold">Last Name</Label>
                    <Input id={`child-${index}-lastName`} value={child.lastName} onChange={e => onChildChange(index, "lastName", e.target.value)} className="text-white" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor={`child-${index}-age`} className="text-woodlands-gold">Age</Label>
                    <Input id={`child-${index}-age`} value={child.age} onChange={e => onChildChange(index, "age", e.target.value)} className="text-white" />
                  </div>
                </div>

                <div className="mb-4">
                  <Label className="text-woodlands-gold block mb-2">Relationship</Label>
                  <RadioGroup value={child.relationship} onValueChange={value => onChildRadioChange(index, "relationship", value)} className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="currentMarriage" id={`child-${index}-currentMarriage`} />
                      <Label htmlFor={`child-${index}-currentMarriage`} className="text-woodlands-cream">
                        Current Marriage
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="previousMarriage" id={`child-${index}-previousMarriage`} />
                      <Label htmlFor={`child-${index}-previousMarriage`} className="text-woodlands-cream">
                        Previous Marriage
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="adopted" id={`child-${index}-adopted`} />
                      <Label htmlFor={`child-${index}-adopted`} className="text-woodlands-cream">
                        Adopted
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {child.relationship === "previousMarriage" && <div className="mb-4">
                    <Label htmlFor={`child-${index}-otherParent`} className="text-woodlands-gold">Other Parent's Name</Label>
                    <Input id={`child-${index}-otherParent`} value={child.otherParentName} onChange={e => onChildChange(index, "otherParentName", e.target.value)} className="text-white" />
                  </div>}
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={`child-${index}-livesWithClient`} checked={child.livesWithClient} onCheckedChange={checked => onChildCheckboxChange(index, "livesWithClient", !!checked)} />
                    <Label htmlFor={`child-${index}-livesWithClient`} className="text-sm font-medium text-woodlands-cream">
                      Child lives with you
                    </Label>
                  </div>
                </div>
                
                {!child.livesWithClient && <div className="space-y-4 border-t border-woodlands-gold/20 pt-4 mt-4">
                    <Label className="text-woodlands-gold">Child's Address</Label>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label htmlFor={`child-${index}-street`} className="text-woodlands-gold">Street Address</Label>
                        <Input id={`child-${index}-street`} value={child.address.street} onChange={e => onChildAddressChange(index, "street", e.target.value)} className="text-white" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor={`child-${index}-city`} className="text-woodlands-gold">City</Label>
                        <Input id={`child-${index}-city`} value={child.address.city} onChange={e => onChildAddressChange(index, "city", e.target.value)} className="text-white" />
                      </div>
                      <div>
                        <Label htmlFor={`child-${index}-state`} className="text-woodlands-gold">State</Label>
                        <Input id={`child-${index}-state`} value={child.address.state} onChange={e => onChildAddressChange(index, "state", e.target.value)} className="text-white" />
                      </div>
                      <div>
                        <Label htmlFor={`child-${index}-zipCode`} className="text-woodlands-gold">Zip Code</Label>
                        <Input id={`child-${index}-zipCode`} value={child.address.zipCode} onChange={e => onChildAddressChange(index, "zipCode", e.target.value)} className="text-white" />
                      </div>
                    </div>
                  </div>}
                
                <div className="mt-4 flex items-center space-x-2">
                  <Checkbox id={`child-${index}-isMinor`} checked={child.isMinor} onCheckedChange={checked => onChildCheckboxChange(index, "isMinor", !!checked)} />
                  <Label htmlFor={`child-${index}-isMinor`} className="text-sm font-medium text-woodlands-cream">
                    Is this child a minor (under 18)?
                  </Label>
                </div>
              </CardContent>
            </Card>)}
          <Button type="button" variant="secondary" onClick={addChild} className="mt-2">
            Add Another Child
          </Button>
        </div>}
    </div>;
};
export default ChildrenSection;