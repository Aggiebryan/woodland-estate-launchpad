
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

interface ExecutorSectionProps {
  formData: {
    useSpouseAsExecutor: boolean;
    executorName: string;
    executorRelationship: string;
    executorAddress: string;
    executorPhone: string;
    executorEmail: string;
    alternateExecutorName: string;
    alternateExecutorRelationship: string;
    alternateExecutorAddress: string;
    alternateExecutorPhone: string;
    alternateExecutorEmail: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (field: string, checked: boolean) => void;
}

const ExecutorSection: React.FC<ExecutorSectionProps> = ({
  formData,
  onChange,
  onCheckboxChange,
}) => {
  return (
    <div className="space-y-6 mb-8 border border-woodlands-gold/20 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-woodlands-purple mb-4">
        Executor Information
      </h3>
      <p className="text-sm text-woodlands-cream opacity-80 mb-4">
        An executor is responsible for administering your estate after your death.
      </p>
      
      <div className="flex items-center space-x-2 mb-4">
        <Checkbox
          id="useSpouseAsExecutor"
          checked={formData.useSpouseAsExecutor}
          onCheckedChange={(checked) => onCheckboxChange("useSpouseAsExecutor", !!checked)}
        />
        <Label htmlFor="useSpouseAsExecutor" className="text-sm font-medium">
          Would you like to name your spouse as your executor?
        </Label>
      </div>

      {!formData.useSpouseAsExecutor && (
        <Card>
          <CardContent className="pt-6">
            <h4 className="text-lg font-medium mb-4">Primary Executor</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="executorName" className="text-woodlands-gold">
                  Full Name *
                </Label>
                <Input
                  id="executorName"
                  name="executorName"
                  required
                  value={formData.executorName}
                  onChange={onChange}
                />
              </div>
              <div>
                <Label htmlFor="executorRelationship" className="text-woodlands-gold">
                  Relationship to You *
                </Label>
                <Input
                  id="executorRelationship"
                  name="executorRelationship"
                  required
                  value={formData.executorRelationship}
                  onChange={onChange}
                />
              </div>
              <div>
                <Label htmlFor="executorAddress" className="text-woodlands-gold">
                  Address *
                </Label>
                <Input
                  id="executorAddress"
                  name="executorAddress"
                  required
                  value={formData.executorAddress}
                  onChange={onChange}
                />
              </div>
              <div>
                <Label htmlFor="executorPhone" className="text-woodlands-gold">
                  Phone Number *
                </Label>
                <Input
                  id="executorPhone"
                  name="executorPhone"
                  required
                  value={formData.executorPhone}
                  onChange={onChange}
                />
              </div>
              <div>
                <Label htmlFor="executorEmail" className="text-woodlands-gold">
                  Email *
                </Label>
                <Input
                  id="executorEmail"
                  name="executorEmail"
                  type="email"
                  required
                  value={formData.executorEmail}
                  onChange={onChange}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="pt-6">
          <h4 className="text-lg font-medium mb-4">Alternate Executor</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="alternateExecutorName" className="text-woodlands-gold">
                Full Name *
              </Label>
              <Input
                id="alternateExecutorName"
                name="alternateExecutorName"
                required
                value={formData.alternateExecutorName}
                onChange={onChange}
              />
            </div>
            <div>
              <Label htmlFor="alternateExecutorRelationship" className="text-woodlands-gold">
                Relationship to You *
              </Label>
              <Input
                id="alternateExecutorRelationship"
                name="alternateExecutorRelationship"
                required
                value={formData.alternateExecutorRelationship}
                onChange={onChange}
              />
            </div>
            <div>
              <Label htmlFor="alternateExecutorAddress" className="text-woodlands-gold">
                Address *
              </Label>
              <Input
                id="alternateExecutorAddress"
                name="alternateExecutorAddress"
                required
                value={formData.alternateExecutorAddress}
                onChange={onChange}
              />
            </div>
            <div>
              <Label htmlFor="alternateExecutorPhone" className="text-woodlands-gold">
                Phone Number *
              </Label>
              <Input
                id="alternateExecutorPhone"
                name="alternateExecutorPhone"
                required
                value={formData.alternateExecutorPhone}
                onChange={onChange}
              />
            </div>
            <div>
              <Label htmlFor="alternateExecutorEmail" className="text-woodlands-gold">
                Email *
              </Label>
              <Input
                id="alternateExecutorEmail"
                name="alternateExecutorEmail"
                type="email"
                required
                value={formData.alternateExecutorEmail}
                onChange={onChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExecutorSection;
