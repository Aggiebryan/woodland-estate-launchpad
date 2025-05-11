import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Check, Plus } from "lucide-react";

// Define the child schema
const childSchema = z.object({
  fullName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  sameAddress: z.boolean().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  relationshipType: z.enum(["current", "previous", "adopted"]).optional(),
  otherParentName: z.string().optional(),
});

// Define the address schema for reuse
const addressSchema = z.object({
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
});

// Define the form schema with validation
const formSchema = z.object({
  // Personal Information
  fullName: z.string().min(1, "Full name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  homePhone: z.string().optional(),
  cellPhone: z.string().optional(),
  email: z.string().email("Invalid email address"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  occupation: z.string().min(1, "Occupation is required"),
  employer: z.string().optional(),
  
  // Marital Status
  maritalStatus: z.enum(["single", "married", "separated", "divorced", "widowed"]),
  spouseName: z.string().optional(),
  spouseDateOfBirth: z.string().optional(),
  spousePhone: z.string().optional(),
  spouseEmail: z.string().email("Invalid email address").optional(),
  spouseOccupation: z.string().optional(),
  spouseEmployer: z.string().optional(),
  formerSpouseName: z.string().optional(),
  
  // Children
  hasChildren: z.boolean().default(false),
  child1: childSchema,
  child2: childSchema,
  child3: childSchema,
  child4: childSchema,
  
  // Executor Information
  spouseAsExecutor: z.boolean().default(false),
  executorName: z.string().optional(),
  executorAddress: z.string().optional(),
  executorCity: z.string().optional(),
  executorState: z.string().optional(),
  executorZip: z.string().optional(),
  executorPhone: z.string().optional(),
  executorEmail: z.string().email("Invalid email address").optional(),
  
  // Alternate Executor
  alternateExecutorName: z.string().optional(),
  alternateExecutorAddress: z.string().optional(),
  alternateExecutorCity: z.string().optional(),
  alternateExecutorState: z.string().optional(),
  alternateExecutorZip: z.string().optional(),
  alternateExecutorPhone: z.string().optional(),
  alternateExecutorEmail: z.string().email("Invalid email address").optional(),
  
  // Trustee Information
  spouseAsTrustee: z.boolean().default(false),
  trusteeName: z.string().optional(),
  trusteeAddress: z.string().optional(),
  trusteeCity: z.string().optional(),
  trusteeState: z.string().optional(),
  trusteeZip: z.string().optional(),
  trusteePhone: z.string().optional(),
  trusteeEmail: z.string().email("Invalid email address").optional(),
  
  // Alternate Trustee
  alternateTrusteeName: z.string().optional(),
  alternateTrusteeAddress: z.string().optional(),
  alternateTrusteeCity: z.string().optional(),
  alternateTrusteeState: z.string().optional(),
  alternateTrusteeZip: z.string().optional(),
  alternateTrusteePhone: z.string().optional(),
  alternateTrusteeEmail: z.string().email("Invalid email address").optional(),
  
  // Assets
  hasCashAndBankAccounts: z.boolean().default(false),
  cashAndBankAccounts: z.string().optional(),
  hasRealEstate: z.boolean().default(false),
  realEstate: z.string().optional(),
  hasInvestments: z.boolean().default(false),
  investments: z.string().optional(),
  hasBusinessInterests: z.boolean().default(false),
  businessInterests: z.string().optional(),
  hasLifeInsurance: z.boolean().default(false),
  lifeInsurance: z.string().optional(),
  hasRetirementPlans: z.boolean().default(false),
  retirementPlans: z.string().optional(),
  hasOtherAssets: z.boolean().default(false),
  otherAssets: z.string().optional(),
  
  // Special Bequests
  specialBequests: z.string().optional(),
  
  // Estate Planning Goals
  estateGoals: z.string().optional(),
  
  // Additional Information
  additionalInfo: z.string().optional(),
});

type IntakeFormValues = z.infer<typeof formSchema>;

const IntakeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showChild1, setShowChild1] = useState(false);
  const [showChild2, setShowChild2] = useState(false);
  const [showChild3, setShowChild3] = useState(false);
  const [showChild4, setShowChild4] = useState(false);

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
      occupation: "",
      employer: "",
      maritalStatus: "single",
      spouseName: "",
      spouseDateOfBirth: "",
      spousePhone: "",
      spouseEmail: "",
      spouseOccupation: "",
      spouseEmployer: "",
      formerSpouseName: "",
      hasChildren: false,
      child1: {
        fullName: "",
        dateOfBirth: "",
        sameAddress: false,
        address: "",
        city: "",
        state: "",
        zipCode: "",
        relationshipType: undefined,
        otherParentName: "",
      },
      child2: {
        fullName: "",
        dateOfBirth: "",
        sameAddress: false,
        address: "",
        city: "",
        state: "",
        zipCode: "",
        relationshipType: undefined,
        otherParentName: "",
      },
      child3: {
        fullName: "",
        dateOfBirth: "",
        sameAddress: false,
        address: "",
        city: "",
        state: "",
        zipCode: "",
        relationshipType: undefined,
        otherParentName: "",
      },
      child4: {
        fullName: "",
        dateOfBirth: "",
        sameAddress: false,
        address: "",
        city: "",
        state: "",
        zipCode: "",
        relationshipType: undefined,
        otherParentName: "",
      },
      spouseAsExecutor: false,
      executorName: "",
      executorAddress: "",
      executorCity: "",
      executorState: "",
      executorZip: "",
      executorPhone: "",
      executorEmail: "",
      alternateExecutorName: "",
      alternateExecutorAddress: "",
      alternateExecutorCity: "",
      alternateExecutorState: "",
      alternateExecutorZip: "",
      alternateExecutorPhone: "",
      alternateExecutorEmail: "",
      spouseAsTrustee: false,
      trusteeName: "",
      trusteeAddress: "",
      trusteeCity: "",
      trusteeState: "",
      trusteeZip: "",
      trusteePhone: "",
      trusteeEmail: "",
      alternateTrusteeName: "",
      alternateTrusteeAddress: "",
      alternateTrusteeCity: "",
      alternateTrusteeState: "",
      alternateTrusteeZip: "",
      alternateTrusteePhone: "",
      alternateTrusteeEmail: "",
      hasCashAndBankAccounts: false,
      cashAndBankAccounts: "",
      hasRealEstate: false,
      realEstate: "",
      hasInvestments: false,
      investments: "",
      hasBusinessInterests: false,
      businessInterests: "",
      hasLifeInsurance: false,
      lifeInsurance: "",
      hasRetirementPlans: false,
      retirementPlans: "",
      hasOtherAssets: false,
      otherAssets: "",
      specialBequests: "",
      estateGoals: "",
      additionalInfo: "",
    },
  });

  // Watch for changes to fields
  const hasChildren = form.watch("hasChildren");
  const maritalStatus = form.watch("maritalStatus");
  const spouseAsExecutor = form.watch("spouseAsExecutor");
  const spouseAsTrustee = form.watch("spouseAsTrustee");
  
  // Asset section watches
  const hasCashAndBankAccounts = form.watch("hasCashAndBankAccounts");
  const hasRealEstate = form.watch("hasRealEstate");
  const hasInvestments = form.watch("hasInvestments");
  const hasBusinessInterests = form.watch("hasBusinessInterests");
  const hasLifeInsurance = form.watch("hasLifeInsurance");
  const hasRetirementPlans = form.watch("hasRetirementPlans");
  const hasOtherAssets = form.watch("hasOtherAssets");

  // Function to check if showing the "Other Parent Name" field is needed
  const shouldShowOtherParentName = (childNumber: number) => {
    const childKey = `child${childNumber}` as 'child1' | 'child2' | 'child3' | 'child4';
    return form.watch(`${childKey}.relationshipType`) === 'previous';
  };

  // Function to check if the child's address fields should be shown
  const shouldShowChildAddress = (childNumber: number) => {
    const childKey = `child${childNumber}` as 'child1' | 'child2' | 'child3' | 'child4';
    return form.watch(`${childKey}.sameAddress`) === false;
  };

  const onSubmit = async (data: IntakeFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n.twlf.dev/webhook/estate_plan_intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast({
        title: "Form Submitted Successfully",
        description: "We'll contact you soon regarding your estate planning needs.",
        duration: 5000,
      });

      form.reset();
      setShowChild1(false);
      setShowChild2(false);
      setShowChild3(false);
      setShowChild4(false);
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

  // Create a single child form section
  const renderChildSection = (childNumber: number, show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>>) => {
    const childKey = `child${childNumber}` as 'child1' | 'child2' | 'child3' | 'child4';
    
    return show ? (
      <div className="space-y-4 border border-woodlands-gold/20 rounded-md p-4">
        <h3 className="font-serif text-woodlands-gold text-lg">
          Child {childNumber}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name={`${childKey}.fullName`}
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
          
          <FormField
            control={form.control}
            name={`${childKey}.dateOfBirth`}
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
          name={`${childKey}.sameAddress`}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold data-[state=checked]:text-woodlands-purple"
                />
              </FormControl>
              <FormLabel className="text-woodlands-cream cursor-pointer">Same Address as You?</FormLabel>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        
        {shouldShowChildAddress(childNumber) && (
          <div className="space-y-4 border border-woodlands-gold/10 p-3 rounded">
            <FormField
              control={form.control}
              name={`${childKey}.address`}
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name={`${childKey}.city`}
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
              
              <FormField
                control={form.control}
                name={`${childKey}.state`}
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
                name={`${childKey}.zipCode`}
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
          </div>
        )}
        
        <FormField
          control={form.control}
          name={`${childKey}.relationshipType`}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-woodlands-cream">Is this child from:</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      id={`${childKey}-current`}
                      value="current"
                      className="border-woodlands-gold text-woodlands-gold"
                    />
                    <label 
                      htmlFor={`${childKey}-current`} 
                      className="text-woodlands-cream cursor-pointer text-sm"
                    >
                      Your current marriage
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      id={`${childKey}-previous`}
                      value="previous"
                      className="border-woodlands-gold text-woodlands-gold"
                    />
                    <label 
                      htmlFor={`${childKey}-previous`} 
                      className="text-woodlands-cream cursor-pointer text-sm"
                    >
                      A previous marriage
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      id={`${childKey}-adopted`}
                      value="adopted"
                      className="border-woodlands-gold text-woodlands-gold"
                    />
                    <label 
                      htmlFor={`${childKey}-adopted`} 
                      className="text-woodlands-cream cursor-pointer text-sm"
                    >
                      Adopted
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        
        {shouldShowOtherParentName(childNumber) && (
          <FormField
            control={form.control}
            name={`${childKey}.otherParentName`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-woodlands-cream">Name of Other Parent</FormLabel>
                <FormControl>
                  <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        )}
      </div>
    ) : null;
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
                      <FormItem className="space-y-4">
                        <FormLabel className="text-woodlands-cream">Marital Status</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="single" 
                                id="marital-single"
                                className="border-woodlands-gold text-woodlands-gold" 
                              />
                              <label 
                                htmlFor="marital-single" 
                                className="text-woodlands-cream cursor-pointer"
                              >
                                Single
                              </label>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="married" 
                                id="marital-married"
                                className="border-woodlands-gold text-woodlands-gold" 
                              />
                              <label 
                                htmlFor="marital-married" 
                                className="text-woodlands-cream cursor-pointer"
                              >
                                Married
                              </label>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="separated" 
                                id="marital-separated"
                                className="border-woodlands-gold text-woodlands-gold" 
                              />
                              <label 
                                htmlFor="marital-separated" 
                                className="text-woodlands-cream cursor-pointer"
                              >
                                Separated
                              </label>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="divorced" 
                                id="marital-divorced"
                                className="border-woodlands-gold text-woodlands-gold" 
                              />
                              <label 
                                htmlFor="marital-divorced" 
                                className="text-woodlands-cream cursor-pointer"
                              >
                                Divorced
                              </label>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="widowed" 
                                id="marital-widowed"
                                className="border-woodlands-gold text-woodlands-gold" 
                              />
                              <label 
                                htmlFor="marital-widowed" 
                                className="text-woodlands-cream cursor-pointer"
                              >
                                Widowed
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  {/* Conditional fields based on marital status */}
                  {maritalStatus === "married" && (
                    <div className="space-y-4 border border-woodlands-gold/20 rounded-md p-4">
                      <h3 className="font-serif text-woodlands-gold text-lg">
                        Spouse Information
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="spouseName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Spouse's Full Legal Name</FormLabel>
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
                          name="spousePhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-woodlands-cream">Spouse's Phone Number</FormLabel>
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
                        name="spouseEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Spouse's Email Address</FormLabel>
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
                  )}
                  
                  {(maritalStatus === "separated") && (
                    <FormField
                      control={form.control}
                      name="spouseName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Spouse's Full Legal Name</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  {(maritalStatus === "divorced" || maritalStatus === "widowed") && (
                    <FormField
                      control={form.control}
                      name="formerSpouseName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">
                            {maritalStatus === "divorced" ? "Former Spouse's Full Legal Name" : "Late Spouse's Full Legal Name"}
                          </FormLabel>
                          <FormControl>
                            <Input {...field} className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
                
                {/* Children Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-woodlands-gold border-b border-woodlands-gold/20 pb-2">
                    Children
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="hasChildren"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) => {
                              field.onChange(checked);
                              if (checked) {
                                setShowChild1(true);
                              } else {
                                setShowChild1(false);
                                setShowChild2(false);
                                setShowChild3(false);
                                setShowChild4(false);
                              }
                            }}
                            className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold data-[state=checked]:text-woodlands-purple"
                          />
                        </FormControl>
                        <FormLabel className="text-woodlands-cream cursor-pointer font-medium">Do you have any children?</FormLabel>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  {hasChildren && (
                    <div className="space-y-6">
                      {renderChildSection(1, showChild1, setShowChild1)}
                      
                      {showChild1 && !showChild2 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowChild2(true)}
                          className="mt-4 border-woodlands-gold/50 text-woodlands-gold hover:bg-woodlands-gold/10"
                        >
                          <Plus className="h-4 w-4 mr-1" /> Add Another Child
                        </Button>
                      )}
                      
                      {renderChildSection(2, showChild2, setShowChild2)}
                      
                      {showChild2 && !showChild3 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowChild3(true)}
                          className="mt-4 border-woodlands-gold/50 text-woodlands-gold hover:bg-woodlands-gold/10"
                        >
                          <Plus className="h-4 w-4 mr-1" /> Add Another Child
                        </Button>
                      )}
                      
                      {renderChildSection(3, showChild3, setShowChild3)}
                      
                      {showChild3 && !showChild4 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowChild4(true)}
                          className="mt-4 border-woodlands-gold/50 text-woodlands-gold hover:bg-woodlands-gold/10"
                        >
                          <Plus className="h-4 w-4 mr-1" /> Add Another Child
                        </Button>
                      )}
                      
                      {renderChildSection(4, showChild4, setShowChild4)}
                    </div>
                  )}
                </div>
                
                {/* Executor Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-woodlands-gold border-b border-woodlands-gold/20 pb-2">
                    Executor Information
                  </h2>
                  
                  {maritalStatus === "married" && (
                    <FormField
                      control={form.control}
                      name="spouseAsExecutor"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold data-[state=checked]:text-woodlands-purple"
                            />
                          </FormControl>
                          <FormLabel className="text-woodlands-cream cursor-pointer">
                            Would you like to name your spouse as your first executor?
                          </FormLabel>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  {(!spouseAsExecutor || maritalStatus !== "married") && (
                    <div className="space-y-4 border border-woodlands-gold/20 rounded-md p-4">
                      <h3 className="font-serif text-woodlands-gold text-lg">First Executor</h3>
                      
                      <FormField
                        control={form.control}
                        name="executorName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="executorAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Street Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="executorCity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-woodlands-cream">City</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="executorState"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-woodlands-cream">State</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="executorZip"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-woodlands-cream">ZIP Code</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="executorPhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-woodlands-cream">Phone Number</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="executorEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-woodlands-cream">Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-4 border border-woodlands-gold/20 rounded-md p-4">
                    <h3 className="font-serif text-woodlands-gold text-lg">Alternate Executor</h3>
                    
                    <FormField
                      control={form.control}
                      name="alternateExecutorName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="alternateExecutorAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Street Address</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="alternateExecutorCity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">City</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="alternateExecutorState"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">State</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="alternateExecutorZip"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">ZIP Code</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="alternateExecutorPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="alternateExecutorEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Trustee Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-woodlands-gold border-b border-woodlands-gold/20 pb-2">
                    Trustee Information
                  </h2>
                  
                  {maritalStatus === "married" && (
                    <FormField
                      control={form.control}
                      name="spouseAsTrustee"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold data-[state=checked]:text-woodlands-purple"
                            />
                          </FormControl>
                          <FormLabel className="text-woodlands-cream cursor-pointer">
                            Would you like to name your spouse as your first trustee?
                          </FormLabel>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  {(!spouseAsTrustee || maritalStatus !== "married") && (
                    <div className="space-y-4 border border-woodlands-gold/20 rounded-md p-4">
                      <h3 className="font-serif text-woodlands-gold text-lg">First Trustee</h3>
                      
                      <FormField
                        control={form.control}
                        name="trusteeName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="trusteeAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Street Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="trusteeCity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-woodlands-cream">City</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="trusteeState"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-woodlands-cream">State</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="trusteeZip"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-woodlands-cream">ZIP Code</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="trusteePhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-woodlands-cream">Phone Number</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="trusteeEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-woodlands-cream">Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-4 border border-woodlands-gold/20 rounded-md p-4">
                    <h3 className="font-serif text-woodlands-gold text-lg">Alternate Trustee</h3>
                    
                    <FormField
                      control={form.control}
                      name="alternateTrusteeName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="alternateTrusteeAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Street Address</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="alternateTrusteeCity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">City</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="alternateTrusteeState"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">State</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="alternateTrusteeZip"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">ZIP Code</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="alternateTrusteePhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="alternateTrusteeEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="border-woodlands-gold/30 bg-transparent text-woodlands-cream" 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Assets Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-woodlands-gold border-b border-woodlands-gold/20 pb-2">
                    Assets
                  </h2>
                  
                  {/* Cash and Bank Accounts */}
                  <div className="space-y-3">
                    <FormField
                      control={form.control}
                      name="hasCashAndBankAccounts"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold data-[state=checked]:text-woodlands-purple"
                            />
                          </FormControl>
                          <FormLabel className="text-woodlands-cream cursor-pointer">
                            Cash and Bank Accounts
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    {hasCashAndBankAccounts && (
                      <FormField
                        control={form.control}
                        name="cashAndBankAccounts"
                        render={({ field }) => (
                          <FormItem>
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
                    )}
                  </div>
                  
                  {/* Real Estate */}
                  <div className="space-y-3">
                    <FormField
                      control={form.control}
                      name="hasRealEstate"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold data-[state=checked]:text-woodlands-purple"
                            />
                          </FormControl>
                          <FormLabel className="text-woodlands-cream cursor-pointer">
                            Real Estate
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    {hasRealEstate && (
                      <FormField
                        control={form.control}
                        name="realEstate"
                        render={({ field }) => (
                          <FormItem>
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
                    )}
                  </div>
                  
                  {/* Investments */}
                  <div className="space-y-3">
                    <FormField
                      control={form.control}
                      name="hasInvestments"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold data-[state=checked]:text-woodlands-purple"
                            />
                          </FormControl>
                          <FormLabel className="text-woodlands-cream cursor-pointer">
                            Investments
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    {hasInvestments && (
                      <FormField
                        control={form.control}
                        name="investments"
                        render={({ field }) => (
                          <FormItem>
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
                    )}
                  </div>
                  
                  {/* Business Interests */}
                  <div className="space-y-3">
                    <FormField
                      control={form.control}
                      name="hasBusinessInterests"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold data-[state=checked]:text-woodlands-purple"
                            />
                          </FormControl>
                          <FormLabel className="text-woodlands-cream cursor-pointer">
                            Business Interests
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    {hasBusinessInterests && (
                      <FormField
                        control={form.control}
                        name="businessInterests"
                        render={({ field }) => (
                          <FormItem>
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
                    )}
                  </div>
                  
                  {/* Life Insurance */}
                  <div className="space-y-3">
                    <FormField
                      control={form.control}
                      name="hasLifeInsurance"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold data-[state=checked]:text-woodlands-purple"
                            />
                          </FormControl>
                          <FormLabel className="text-woodlands-cream cursor-pointer">
                            Life Insurance
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    {hasLifeInsurance && (
                      <FormField
                        control={form.control}
                        name="lifeInsurance"
                        render={({ field }) => (
                          <FormItem>
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
                    )}
                  </div>
                  
                  {/* Retirement Plans */}
                  <div className="space-y-3">
                    <FormField
                      control={form.control}
                      name="hasRetirementPlans"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold data-[state=checked]:text-woodlands-purple"
                            />
                          </FormControl>
                          <FormLabel className="text-woodlands-cream cursor-pointer">
                            Retirement Plans
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    {hasRetirementPlans && (
                      <FormField
                        control={form.control}
                        name="retirementPlans"
                        render={({ field }) => (
                          <FormItem>
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
                    )}
                  </div>
                  
                  {/* Other Assets */}
                  <div className="space-y-3">
                    <FormField
                      control={form.control}
                      name="hasOtherAssets"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold data-[state=checked]:text-woodlands-purple"
                            />
                          </FormControl>
                          <FormLabel className="text-woodlands-cream cursor-pointer">
                            Other Assets
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    {hasOtherAssets && (
                      <FormField
                        control={form.control}
                        name="otherAssets"
                        render={({ field }) => (
                          <FormItem>
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
                    )}
                  </div>
                </div>
                
                {/* Special Bequests Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif text-woodlands-gold border-b border-woodlands-gold/20 pb-2">
                    Special Bequests
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="specialBequests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-woodlands-cream">
                          Special Bequests (Cars, Jewelry, Collectibles, etc.)
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="border-woodlands-gold/30 bg-transparent text-woodlands-cream min-h-[150px]" 
                            placeholder="Please describe any specific items you wish to leave to particular individuals (e.g., 'My diamond ring to my daughter Jane', 'My classic car to my nephew Tom')."
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
