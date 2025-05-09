
import MainLayout from "@/components/layout/MainLayout";
import ConsultationForm from "@/components/shared/ConsultationForm";
import { CalendarClock } from "lucide-react";

const Schedule = () => {
  return (
    <MainLayout>
      <div className="bg-woodlands-purple py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <CalendarClock className="h-16 w-16 text-woodlands-gold"/>
            </div>
            <h1 className="text-4xl font-serif text-woodlands-gold mb-4">
              Schedule Your Consultation
            </h1>
            <p className="text-woodlands-cream text-xl max-w-3xl mx-auto">
              Take the first step toward securing your legacy and protecting your loved ones.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-woodlands-darkpurple/50 p-8 rounded-lg border border-woodlands-gold/20">
              <h2 className="text-2xl font-serif font-semibold text-woodlands-gold mb-6">
                What To Expect
              </h2>
              
              <div className="space-y-6 text-woodlands-cream">
                <p>
                  Thank you for considering The Woodlands Law Firm for your estate planning needs. 
                  Our consultation process is designed to be straightforward and informative.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-woodlands-lightgold mb-2">After Submitting Your Request</h3>
                    <p>
                      Once we receive your consultation request, a member of our team will contact you 
                      within one business day to confirm your appointment with one of our experienced attorneys.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-woodlands-lightgold mb-2">During Your Consultation</h3>
                    <p>
                      Your initial consultation will last approximately 30 minutes, during which our attorney will:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Discuss your specific estate planning needs and goals</li>
                      <li>Answer your questions about the legal process</li>
                      <li>Outline potential strategies tailored to your situation</li>
                      <li>Provide transparent information about our services and fees</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-woodlands-lightgold mb-2">Our Commitment</h3>
                    <p>
                      We are committed to providing exceptional service from the moment you reach out to us. 
                      There is no obligation to proceed with our services after the consultation, 
                      but we hope to earn your trust and become your partner in planning for the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-woodlands-lightpurple p-8 rounded-lg border border-woodlands-gold/20 shadow-lg">
              <h2 className="text-2xl font-serif font-semibold text-woodlands-gold mb-6">
                Free Consultation Request
              </h2>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Schedule;
