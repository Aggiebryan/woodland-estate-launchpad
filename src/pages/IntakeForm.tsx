
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Check } from "lucide-react";

// Define the form schema with validation
const formSchema = z.object({
  // Personal Information
  fullName: z.string().min(1, "Full name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  homePhone: z.string().optional(),
  cellPhone: z.string().min(1, "Cell phone is required"),
  email: z.string().email("Invalid email address"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  ssn: z.string().min(1, "Social Security Number is required"),
  occupation: z.string().min(1, "Occupation is required"),
  employer: z.string().optional(),
  
  // Marital Status
  maritalStatus: z.string().min(1, "Marital status is required"),
  spouseName: z.string().optional(),
  spouseDateOfBirth: z.string().optional(),
  spouseSSN: z.string().optional(),
  spouseOccupation: z.string().optional(),
  spouseEmployer: z.string().optional(),
  
  // Children
  childrenInformation: z.string().optional(),
  
  // Assets
  cashAndBankAccounts: z.string().optional(),
  realEstate: z.string().optional(),
  investments: z.string().optional(),
  businessInterests: z.string().optional(),
  lifeInsurance: z.string().optional(),
  retirementPlans: z.string().optional(),
  otherAssets: z.string().optional(),
  
  // Estate Planning Goals
  estateGoals: z.string().optional(),
  
  // Additional Information
  additionalInfo: z.string().optional(),
});

type IntakeFormValues = z.infer<typeof formSchema>;

const IntakeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<IntakeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      homePhone: "",
      cellPhone: "",
      email: "",
      dateOfBirth: "",
      ssn: "",
      occupation: "",
      employer: "",
      maritalStatus: "",
      spouseName: "",
      spouseDateOfBirth: "",
      spouseSSN: "",
      spouseOccupation: "",
      spouseEmployer: "",
      childrenInformation: "",
      cashAndBankAccounts: "",
      realEstate: "",
      investments: "",
      businessInterests: "",
      lifeInsurance: "",
      retirementPlans: "",
      otherAssets: "",
      estateGoals: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: IntakeFormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to a server or API
      // For now, we're just simulating the submission
      console.log("Form data submitted:", data);
      
      // Show a success toast
      toast({
        title: "Form Submitted Successfully",
        description: "We'll contact you soon regarding your estate planning needs.",
        duration: 5000,
      });
      
      // Reset the form
      form.reset();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "There was a problem submitting your form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 rounded-lg p-8 shadow-lg">
            <h1 className="text-4xl font-serif text-woodlands-gold text-center mb-8">
              Secure Client Intake Form
            </h1>
            <p className="text-woodlands-cream mb-8 text-center">
              Please complete this confidential intake form to help us better understand your estate planning needs.
              All information provided will remain private and secure.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-woodlands-gold border-b border-woodlands-gold/20 pb-2">
                    Personal Information
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">Full Legal Name</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Street Address</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">City</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">State</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">ZIP Code</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="homePhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Home Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="cellPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Cell Phone</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Email Address</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Date of Birth</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="ssn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">Social Security Number</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                        <p className="text-woodlands-cream/70 text-xs mt-1">
                          Your SSN is kept secure and is necessary for preparing your legal documents.
                        </p>
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="occupation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Occupation</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="employer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Employer (Optional)</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {/* Marital Status Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-woodlands-gold border-b border-woodlands-gold/20 pb-2">
                    Marital Status
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="maritalStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">Marital Status</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            placeholder="Single, Married, Divorced, Widowed, etc."
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="spouseName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">Spouse's Full Legal Name (if applicable)</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="spouseDateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Spouse's Date of Birth</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="spouseSSN"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Spouse's Social Security Number</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="spouseOccupation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Spouse's Occupation</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="spouseEmployer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Spouse's Employer</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {/* Children Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-woodlands-gold border-b border-woodlands-gold/20 pb-2">
                    Children
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="childrenInformation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">
                          Children's Information (names, ages, and special circumstances if any)
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="border-woodlands-gold/30 bg-transparent text-woodlands-cream min-h-[120px]" 
                            placeholder="List each child's full name, date of birth, and whether they are from your current marriage, a previous marriage, or adopted."
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Assets Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-woodlands-gold border-b border-woodlands-gold/20 pb-2">
                    Assets
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="cashAndBankAccounts"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">
                          Cash and Bank Accounts
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            placeholder="List checking, savings, CDs, money market accounts, etc."
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="realEstate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">
                          Real Estate
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            placeholder="List properties owned, addresses, estimated value, mortgage information"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="investments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">
                          Investments
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            placeholder="Stocks, bonds, mutual funds, other investments"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="businessInterests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">
                          Business Interests
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            placeholder="Ownership interests in businesses, partnerships, etc."
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lifeInsurance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">
                          Life Insurance
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            placeholder="Policies, coverage amounts, beneficiaries"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="retirementPlans"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">
                          Retirement Plans
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            placeholder="401(k), IRAs, pension plans, etc."
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="otherAssets"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">
                          Other Assets
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            placeholder="Valuable personal property, vehicles, collectibles, etc."
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Estate Planning Goals Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-woodlands-gold border-b border-woodlands-gold/20 pb-2">
                    Estate Planning Goals
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="estateGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">
                          Your Estate Planning Goals and Concerns
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="border-woodlands-gold/30 bg-transparent text-woodlands-cream min-h-[150px]" 
                            placeholder="Please describe what you hope to achieve with your estate plan, any specific concerns you have, or questions you would like addressed during your consultation."
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Additional Information Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-woodlands-gold border-b border-woodlands-gold/20 pb-2">
                    Additional Information
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">
                          Any Other Information
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            placeholder="Please provide any other information you believe would be helpful for us to know."
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="pt-6">
                  <p className="text-woodlands-cream/80 text-sm mb-6">
                    By submitting this form, you acknowledge that the information provided is accurate 
                    to the best of your knowledge and that you are authorizing The Woodlands Law Firm 
                    to review this information for the purpose of providing estate planning services.
                  </p>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Intake Form 
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IntakeForm;
