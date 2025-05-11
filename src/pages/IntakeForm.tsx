import React, { useState } from "react";
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Listbox } from '@headlessui/react'
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PowerOfAttorneySection from "@/components/shared/PowerOfAttorneySection";

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().min(5, {
    message: "Please enter a valid address.",
  }),
  dateOfBirth: z.date({
    required_error: "Please select a date.",
  }),
  children: z.string().min(1, {
    message: "Please enter the names of your children.",
  }),
  executor: z.string().min(2, {
    message: "Please enter the name of your executor.",
  }),
  assets: z.string().min(1, {
    message: "Please enter your assets.",
  }),
  debts: z.string().min(1, {
    message: "Please enter your debts.",
  }),
  funeralArrangements: z.string().min(1, {
    message: "Please enter your funeral arrangements.",
  }),
  additionalNotes: z.string().optional(),
});

const states = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
]

interface State {
  value: string
  label: string
}

const IntakeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selected, setSelected] = React.useState<State>(states[5]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: new Date(),
    children: "",
    executor: "",
    assets: "",
    debts: "",
    funeralArrangements: "",
    additionalNotes: "",
    
    // Add Power of Attorney Fields
    poa_use_spouse: false,
    poa_primary_name: "",
    poa_primary_address: "",
    poa_primary_phone: "",
    poa_primary_email: "",
    poa_primary_medical: false,
    
    poa_alternate_name: "",
    poa_alternate_address: "",
    poa_alternate_phone: "",
    poa_alternate_email: "",
    poa_alternate_medical: false,
    
    has_additional_poa: false,
    poa_additional_name: "",
    poa_additional_address: "",
    poa_additional_phone: "",
    poa_additional_email: "",
    poa_additional_medical: false,
  });
  const router = useRouter();
  const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      dateOfBirth: new Date(),
      children: "",
      executor: "",
      assets: "",
      debts: "",
      funeralArrangements: "",
      additionalNotes: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n.twlf.dev/webhook-test/send-intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: "Intake Form Request Received",
        description: "We'll contact you within 1 business day to confirm your submission.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        dateOfBirth: new Date(),
        children: "",
        executor: "",
        assets: "",
        debts: "",
        funeralArrangements: "",
        additionalNotes: "",
        
        // Reset Power of Attorney Fields
        poa_use_spouse: false,
        poa_primary_name: "",
        poa_primary_address: "",
        poa_primary_phone: "",
        poa_primary_email: "",
        poa_primary_medical: false,
        
        poa_alternate_name: "",
        poa_alternate_address: "",
        poa_alternate_phone: "",
        poa_alternate_email: "",
        poa_alternate_medical: false,
        
        has_additional_poa: false,
        poa_additional_name: "",
        poa_additional_address: "",
        poa_additional_phone: "",
        poa_additional_email: "",
        poa_additional_medical: false,
      });
      router.push('/');
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-woodlands-gold mb-4">Intake Form</h1>
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="First Name"
                    {...form.register("firstName")}
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
            <div>
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Last Name"
                    {...form.register("lastName")}
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...form.register("email")}
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
            <div>
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Phone Number"
                    {...form.register("phone")}
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
          </div>

          <div>
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Address"
                  {...form.register("address")}
                  value={formData.address}
                  onChange={handleChange}
                  className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>

          <div>
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !formData.dateOfBirth && "text-muted-foreground"
                      )}
                    >
                      {formData.dateOfBirth ? (
                        format(formData.dateOfBirth, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.dateOfBirth}
                    onSelect={(date) => setFormData({ ...formData, dateOfBirth: date || new Date() })}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          </div>

          {/* Children Section */}
          <div>
            <FormItem>
              <FormLabel>Children (Full Legal Names)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Children (Full Legal Names)"
                  {...form.register("children")}
                  value={formData.children}
                  onChange={handleChange}
                  className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>

          {/* Power of Attorney Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-woodlands-gold mb-4">Power of Attorney Information</h2>
            <PowerOfAttorneySection 
              formData={formData}
              handleChange={handleChange}
              handleCheckboxChange={handleCheckboxChange}
              className="bg-woodlands-darkpurple"
            />
          </div>

          {/* Executor Section */}
          <div>
            <FormItem>
              <FormLabel>Executor (Full Legal Name)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Executor (Full Legal Name)"
                  {...form.register("executor")}
                  value={formData.executor}
                  onChange={handleChange}
                  className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>

          {/* Assets Section */}
          <div>
            <FormItem>
              <FormLabel>Assets</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Assets"
                  {...form.register("assets")}
                  value={formData.assets}
                  onChange={handleChange}
                  className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>

          {/* Debts Section */}
          <div>
            <FormItem>
              <FormLabel>Debts</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Debts"
                  {...form.register("debts")}
                  value={formData.debts}
                  onChange={handleChange}
                  className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>

          {/* Funeral Arrangements Section */}
          <div>
            <FormItem>
              <FormLabel>Funeral Arrangements</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Funeral Arrangements"
                  {...form.register("funeralArrangements")}
                  value={formData.funeralArrangements}
                  onChange={handleChange}
                  className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>

          {/* Additional Notes Section */}
          <div>
            <FormItem>
              <FormLabel>Additional Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Additional Notes"
                  {...form.register("additionalNotes")}
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default IntakeForm;
