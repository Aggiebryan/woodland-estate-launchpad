
import React, { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import MainLayout from "@/components/layout/MainLayout";
import FormProgress from "@/components/intake-form/FormProgress";
import Step1PersonalInfo from "@/components/intake-form/steps/Step1PersonalInfo";
import Step2FamilyInfo from "@/components/intake-form/steps/Step2FamilyInfo";
import Step3FiduciariesInfo from "@/components/intake-form/steps/Step3FiduciariesInfo";
import Step4AssetsInfo from "@/components/intake-form/steps/Step4AssetsInfo";
import Step5FinalDetails from "@/components/intake-form/steps/Step5FinalDetails";
import AuthWrapper from "@/components/auth/AuthWrapper";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useFormPersistence } from "@/hooks/useFormPersistence";
import { useAuth } from "@/hooks/use-auth";
import { format } from "date-fns";

const IntakeForm = () => {
  const { user } = useAuth();
  
  // Get the initial state structure from useIntakeFormState
  const initialFormState = {
    step: 1,
    isSubmitting: false,
    formErrors: {
      personalInfo: {},
      spouseInfo: {},
      childrenInfo: {},
      poaInfo: {},
      executorInfo: {},
      trusteeInfo: {},
      assetsInfo: {},
      specialBequestsInfo: {}
    },
    personalInfo: {
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: undefined,
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      maritalStatus: "",
      spouseFullName: "",
    },
    spouseInfo: {
      spouseFirstName: "",
      spouseMiddleName: "",
      spouseLastName: "",
      spouseDateOfBirth: undefined,
      spouseEmail: "",
      spousePhone: "",
    },
    childrenInfo: {
      hasChildren: false,
      children: [],
    },
    poaInfo: {
      useSpouseAsPrimaryPOA: false,
      primaryPOA: {
        fullName: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        phone: "",
        email: "",
        isMedicalPOA: false,
      },
      alternatePOA: {
        fullName: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        phone: "",
        email: "",
        isMedicalPOA: false,
      },
      additionalAlternatePOAs: [],
      hasAdditionalAlternatePOAs: false,
    },
    executorInfo: {
      useSpouseAsExecutor: false,
      primaryExecutor: {
        name: "",
        relationship: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        phone: "",
        email: "",
      },
      alternateExecutor: {
        name: "",
        relationship: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        phone: "",
        email: "",
      },
      additionalAlternateExecutors: [],
    },
    trusteeInfo: {
      useSameAsExecutor: false,
      primaryTrustee: {
        name: "",
        relationship: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        phone: "",
        email: ""
      },
      alternateTrustee: {
        name: "",
        relationship: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: ""
        },
        phone: "",
        email: ""
      },
      additionalAlternateTrustees: []
    },
    assetsInfo: {
      realEstate: "",
      bankAccounts: "",
      investments: "",
      retirementAccounts: "",
      businessInterests: "",
      lifeInsurance: "",
      personalProperty: "",
      otherAssets: "",
      selectedCategories: {
        realEstate: false,
        bankAccounts: false,
        investments: false,
        retirementAccounts: false,
        businessInterests: false,
        lifeInsurance: false,
        personalProperty: false,
        otherAssets: false
      }
    },
    specialBequestsInfo: {
      hasSpecialBequests: false,
      specialBequests: [
        {
          item: "",
          recipient: "",
          relationship: "",
        },
      ],
    },
    additionalNotes: ""
  };

  // Use our form persistence hook
  const {
    data: formState,
    updateData: setFormState,
    persistData: saveForm,
    lastSaved,
    isLoading
  } = useFormPersistence('intake_form', initialFormState);

  // Derived state from the form state
  const { 
    step,
    personalInfo,
    spouseInfo,
    childrenInfo,
    poaInfo,
    executorInfo,
    trusteeInfo,
    assetsInfo,
    specialBequestsInfo,
    additionalNotes,
    isSubmitting,
    formErrors 
  } = formState;

  // Update handlers
  const setStep = (newStep: number) => {
    setFormState({...formState, step: newStep});
  };

  const setIsSubmitting = (value: boolean) => {
    setFormState({...formState, isSubmitting: value});
  };

  const setPersonalInfo = (value: typeof personalInfo) => {
    setFormState({...formState, personalInfo: value});
  };

  const setSpouseInfo = (value: typeof spouseInfo) => {
    setFormState({...formState, spouseInfo: value});
  };

  const setChildrenInfo = (value: typeof childrenInfo) => {
    setFormState({...formState, childrenInfo: value});
  };

  const setPoaInfo = (value: typeof poaInfo) => {
    setFormState({...formState, poaInfo: value});
  };

  const setExecutorInfo = (value: typeof executorInfo) => {
    setFormState({...formState, executorInfo: value});
  };

  const setTrusteeInfo = (value: typeof trusteeInfo) => {
    setFormState({...formState, trusteeInfo: value});
  };

  const setAssetsInfo = (value: typeof assetsInfo) => {
    setFormState({...formState, assetsInfo: value});
  };

  const setSpecialBequestsInfo = (value: typeof specialBequestsInfo) => {
    setFormState({...formState, specialBequestsInfo: value});
  };

  const setAdditionalNotes = (value: string) => {
    setFormState({...formState, additionalNotes: value});
  };

  const validatePersonalInfo = () => {
    const errors: Record<string, string> = {};
    
    if (!personalInfo.firstName.trim()) errors.firstName = "First name is required";
    if (!personalInfo.lastName.trim()) errors.lastName = "Last name is required";
    if (!personalInfo.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
    if (!personalInfo.email.trim()) {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(personalInfo.email)) {
        errors.email = "Please enter a valid email address";
      }
    }
    
    if (!personalInfo.phone.trim()) {
      errors.phone = "Phone number is required";
    } else {
      // Check for (XXX) XXX-XXXX format
      const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
      if (!phoneRegex.test(personalInfo.phone)) {
        errors.phone = "Phone number must be in (XXX) XXX-XXXX format";
      }
    }
    
    if (!personalInfo.address.trim()) errors.address = "Address is required";
    if (!personalInfo.city.trim()) errors.city = "City is required";
    if (!personalInfo.state.trim()) errors.state = "State is required";
    
    if (!personalInfo.zipCode.trim()) {
      errors.zipCode = "ZIP code is required";
    } else {
      const zipRegex = /^\d{5}(-\d{4})?$/;
      if (!zipRegex.test(personalInfo.zipCode)) {
        errors.zipCode = "ZIP code must be in XXXXX or XXXXX-XXXX format";
      }
    }
    
    if (!personalInfo.maritalStatus) errors.maritalStatus = "Marital status is required";
    
    // Check if spouse's name is required based on marital status
    if (["separated", "divorced", "widowed"].includes(personalInfo.maritalStatus) && 
        !personalInfo.spouseFullName.trim()) {
      errors.spouseFullName = "Spouse's full name is required";
    }
    
    setFormState({
      ...formState, 
      formErrors: { ...formState.formErrors, personalInfo: errors }
    });
    
    return Object.keys(errors).length === 0;
  };

  const validateSpouseInfo = () => {
    // Only validate if married
    if (personalInfo.maritalStatus !== "married") return true;

    const errors: Record<string, string> = {};
    
    if (!spouseInfo.spouseFirstName.trim()) errors.spouseFirstName = "Spouse's first name is required";
    if (!spouseInfo.spouseLastName.trim()) errors.spouseLastName = "Spouse's last name is required";
    if (!spouseInfo.spouseDateOfBirth) errors.spouseDateOfBirth = "Spouse's date of birth is required";
    
    if (spouseInfo.spouseEmail.trim()) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(spouseInfo.spouseEmail)) {
        errors.spouseEmail = "Please enter a valid email address";
      }
    }
    
    if (spouseInfo.spousePhone.trim()) {
      const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
      if (!phoneRegex.test(spouseInfo.spousePhone)) {
        errors.spousePhone = "Phone number must be in (XXX) XXX-XXXX format";
      }
    }
    
    setFormState({
      ...formState, 
      formErrors: { ...formState.formErrors, spouseInfo: errors }
    });
    
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    // Validate current step before proceeding
    let isValid = true;
    
    if (step === 1) {
      isValid = validatePersonalInfo() && validateSpouseInfo();
    }
    
    if (isValid) {
      setFormState({...formState, step: step + 1});
      window.scrollTo(0, 0);
      // Auto-save on step progress
      saveForm();
    } else {
      // Show error toast if validation fails
      toast({
        title: "Validation Error",
        description: "Please fix the highlighted errors before continuing",
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    setFormState({...formState, step: step - 1});
    window.scrollTo(0, 0);
    // Auto-save on step navigation
    saveForm();
  };

  // Combined form data for submission
  const formData = {
    personal: personalInfo,
    spouse: spouseInfo,
    children: childrenInfo,
    powerOfAttorney: poaInfo,
    executor: executorInfo,
    trustee: trusteeInfo,
    assets: assetsInfo,
    specialBequests: specialBequestsInfo,
    additionalNotes,
  };

  // Save form progress periodically
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      saveForm();
    }, 120000); // Auto-save every 2 minutes

    return () => clearInterval(autoSaveInterval);
  }, [formState, saveForm]);

  // Render steps
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1PersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            spouseInfo={spouseInfo}
            setSpouseInfo={setSpouseInfo}
            nextStep={nextStep}
            validatePersonalInfo={validatePersonalInfo}
            validateSpouseInfo={validateSpouseInfo}
            formErrors={formErrors}
          />
        );

      case 2:
        return (
          <Step2FamilyInfo
            childrenInfo={childrenInfo}
            setChildrenInfo={setChildrenInfo}
            poaInfo={poaInfo}
            setPoaInfo={setPoaInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            setExecutorInfo={setExecutorInfo}
            setTrusteeInfo={setTrusteeInfo}
            setSpecialBequestsInfo={setSpecialBequestsInfo}
            personalInfo={personalInfo}
            spouseInfo={spouseInfo}
          />
        );

      case 3:
        return (
          <Step3FiduciariesInfo
            executorInfo={executorInfo}
            setExecutorInfo={setExecutorInfo}
            trusteeInfo={trusteeInfo}
            setTrusteeInfo={setTrusteeInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            setChildrenInfo={setChildrenInfo}
            setSpecialBequestsInfo={setSpecialBequestsInfo}
            personalInfo={personalInfo}
            spouseInfo={spouseInfo}
          />
        );

      case 4:
        return (
          <Step4AssetsInfo
            assetsInfo={assetsInfo}
            setAssetsInfo={setAssetsInfo}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      case 5:
        return (
          <Step5FinalDetails
            specialBequestsInfo={specialBequestsInfo}
            setSpecialBequestsInfo={setSpecialBequestsInfo}
            additionalNotes={additionalNotes}
            setAdditionalNotes={setAdditionalNotes}
            prevStep={prevStep}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            setStep={setStep}
            formData={formData}
            setChildrenInfo={setChildrenInfo}
            setExecutorInfo={setExecutorInfo}
            setTrusteeInfo={setTrusteeInfo}
          />
        );

      default:
        return <div>Unknown step</div>;
    }
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center justify-center h-64">
            <div className="text-woodlands-gold text-xl">Loading your form data...</div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <AuthWrapper>
      <MainLayout>
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl md:text-4xl font-bold text-woodlands-gold">
                Estate Planning Intake Form
              </h1>
              <Button 
                onClick={saveForm}
                variant="outline" 
                className="border-woodlands-gold text-woodlands-gold hover:bg-woodlands-gold/20"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Progress
              </Button>
            </div>
            <p className="text-woodlands-cream opacity-80 mt-4">
              Please provide the following information to help us prepare your estate planning documents.
              {lastSaved && (
                <span className="block text-sm mt-1">
                  Last saved: {format(lastSaved, 'MMM d, yyyy h:mm a')}
                </span>
              )}
            </p>
          </div>

          <div className="bg-woodlands-purple-dark p-6 md:p-8 rounded-lg shadow-lg">
            <FormProgress step={step} totalSteps={5} />
            <div className="space-y-6">{renderStep()}</div>
          </div>
        </div>
      </MainLayout>
    </AuthWrapper>
  );
};

export default IntakeForm;
