
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface Child {
  name: string;
  age: string;
  isMinor: boolean;
}

interface ChildrenSectionProps {
  formData: {
    hasChildren: boolean;
    children: Child[];
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (field: string, checked: boolean) => void;
  onChildChange: (index: number, field: string, value: string) => void;
  onChildCheckboxChange: (index: number, checked: boolean) => void;
  addChild: () => void;
  removeChild: (index: number) => void;
}

const ChildrenSection: React.FC<ChildrenSectionProps> = ({
  formData,
  onChange,
  onCheckboxChange,
  onChildChange,
  onChildCheckboxChange,
  addChild,
  removeChild,
}) => {
  return (
    <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-woodlands-purple mb-4">Children Information</h3>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="hasChildren"
          checked={formData.hasChildren}
          onCheckedChange={(checked) => onCheckboxChange("hasChildren", !!checked)}
        />
        <Label htmlFor="hasChildren" className="text-sm font-medium">
          Do you have children?
        </Label>
      </div>

      {formData.hasChildren && (
        <div className="space-y-4 mt-4">
          {formData.children.map((child, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium">Child #{index + 1}</h4>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => removeChild(index)}
                  >
                    Remove
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`child-${index}-name`}>Full Name</Label>
                    <Input
                      id={`child-${index}-name`}
                      value={child.name}
                      onChange={(e) => onChildChange(index, "name", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`child-${index}-age`}>Age</Label>
                    <Input
                      id={`child-${index}-age`}
                      value={child.age}
                      onChange={(e) => onChildChange(index, "age", e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <Checkbox
                    id={`child-${index}-isMinor`}
                    checked={child.isMinor}
                    onCheckedChange={(checked) => onChildCheckboxChange(index, !!checked)}
                  />
                  <Label htmlFor={`child-${index}-isMinor`} className="text-sm font-medium">
                    Is this child a minor (under 18)?
                  </Label>
                </div>
              </CardContent>
            </Card>
          ))}
          <Button 
            type="button" 
            variant="secondary"
            onClick={addChild}
            className="mt-2"
          >
            Add Another Child
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChildrenSection;
