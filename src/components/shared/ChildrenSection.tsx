
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ChildrenSectionProps {
  formData: {
    hasChildren: boolean;
    children: Array<{
      firstName: string;
      middleName: string;
      lastName: string;
      dateOfBirth: string; // Changed from age to dateOfBirth
      isMinor: boolean;
      livesWithClient: boolean;
      address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
      };
      relationship: "currentMarriage" | "previousMarriage" | "adopted";
      otherParentName: string;
    }>;
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
  onCheckboxChange,
  onChildChange,
  onChildCheckboxChange,
  onChildRadioChange,
  onChildAddressChange,
  addChild,
  removeChild,
}) => {
  return (
    <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-woodlands-gold mb-4">Children Information</h3>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="hasChildren"
          checked={formData.hasChildren}
          onCheckedChange={(checked) => onCheckboxChange("hasChildren", !!checked)}
        />
        <Label htmlFor="hasChildren" className="text-sm font-medium text-woodlands-cream">
          I have children
        </Label>
      </div>

      {formData.hasChildren && (
        <div className="space-y-6 mt-4">
          {formData.children.map((child, index) => (
            <div
              key={index}
              className="border border-woodlands-gold/10 rounded-lg p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-medium text-woodlands-gold">Child #{index + 1}</h4>
                {index > 0 && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeChild(index)}
                    type="button"
                  >
                    Remove
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor={`firstName-${index}`} className="text-woodlands-gold">
                    First Name *
                  </Label>
                  <Input
                    id={`firstName-${index}`}
                    required
                    value={child.firstName}
                    onChange={(e) =>
                      onChildChange(index, "firstName", e.target.value)
                    }
                    className="text-white"
                  />
                </div>
                <div>
                  <Label htmlFor={`middleName-${index}`} className="text-woodlands-gold">
                    Middle Name
                  </Label>
                  <Input
                    id={`middleName-${index}`}
                    value={child.middleName}
                    onChange={(e) =>
                      onChildChange(index, "middleName", e.target.value)
                    }
                    className="text-white"
                  />
                </div>
                <div>
                  <Label htmlFor={`lastName-${index}`} className="text-woodlands-gold">
                    Last Name *
                  </Label>
                  <Input
                    id={`lastName-${index}`}
                    required
                    value={child.lastName}
                    onChange={(e) =>
                      onChildChange(index, "lastName", e.target.value)
                    }
                    className="text-white"
                  />
                </div>
                <div>
                  <Label htmlFor={`dateOfBirth-${index}`} className="text-woodlands-gold">
                    Date of Birth *
                  </Label>
                  <Input
                    id={`dateOfBirth-${index}`}
                    type="date"
                    required
                    value={child.dateOfBirth}
                    onChange={(e) =>
                      onChildChange(index, "dateOfBirth", e.target.value)
                    }
                    className="text-white"
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox
                    id={`isMinor-${index}`}
                    checked={child.isMinor}
                    onCheckedChange={(checked) =>
                      onChildCheckboxChange(index, "isMinor", !!checked)
                    }
                  />
                  <Label htmlFor={`isMinor-${index}`} className="text-sm font-medium text-woodlands-cream">
                    This child is a minor
                  </Label>
                </div>
              </div>

              <div className="mt-4">
                <Label className="text-woodlands-gold mb-2 block">
                  What is the relationship?
                </Label>
                <RadioGroup
                  value={child.relationship}
                  onValueChange={(value) =>
                    onChildRadioChange(index, "relationship", value)
                  }
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="currentMarriage" id={`currentMarriage-${index}`} />
                    <Label htmlFor={`currentMarriage-${index}`} className="text-woodlands-cream">
                      Child of current marriage
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="previousMarriage" id={`previousMarriage-${index}`} />
                    <Label htmlFor={`previousMarriage-${index}`} className="text-woodlands-cream">
                      Child of previous marriage
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="adopted" id={`adopted-${index}`} />
                    <Label htmlFor={`adopted-${index}`} className="text-woodlands-cream">
                      Adopted
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-4">
                <Label htmlFor={`otherParent-${index}`} className="text-woodlands-gold">
                  Other Parent's Full Name
                </Label>
                <Input
                  id={`otherParent-${index}`}
                  value={child.otherParentName}
                  onChange={(e) =>
                    onChildChange(index, "otherParentName", e.target.value)
                  }
                  className="text-white"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox
                    id={`livesWithClient-${index}`}
                    checked={child.livesWithClient}
                    onCheckedChange={(checked) =>
                      onChildCheckboxChange(index, "livesWithClient", !!checked)
                    }
                  />
                  <Label htmlFor={`livesWithClient-${index}`} className="text-sm font-medium text-woodlands-cream">
                    This child lives with me
                  </Label>
                </div>
              </div>

              {!child.livesWithClient && (
                <div className="mt-4 border-t border-woodlands-gold/10 pt-4">
                  <h5 className="text-md font-medium text-woodlands-gold mb-3">Child's Address</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`street-${index}`} className="text-woodlands-gold">
                        Street Address *
                      </Label>
                      <Input
                        id={`street-${index}`}
                        required
                        value={child.address.street}
                        onChange={(e) =>
                          onChildAddressChange(index, "street", e.target.value)
                        }
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`city-${index}`} className="text-woodlands-gold">
                        City *
                      </Label>
                      <Input
                        id={`city-${index}`}
                        required
                        value={child.address.city}
                        onChange={(e) =>
                          onChildAddressChange(index, "city", e.target.value)
                        }
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`state-${index}`} className="text-woodlands-gold">
                        State *
                      </Label>
                      <Input
                        id={`state-${index}`}
                        required
                        value={child.address.state}
                        onChange={(e) =>
                          onChildAddressChange(index, "state", e.target.value)
                        }
                        className="text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`zipCode-${index}`} className="text-woodlands-gold">
                        Zip Code *
                      </Label>
                      <Input
                        id={`zipCode-${index}`}
                        required
                        value={child.address.zipCode}
                        onChange={(e) =>
                          onChildAddressChange(index, "zipCode", e.target.value)
                        }
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <Button
            type="button"
            variant="secondary"
            onClick={addChild}
          >
            Add Another Child
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChildrenSection;
