
import { FileHeart, CheckCircle, HelpCircle, FileText } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LivingWills = () => {
  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen">
        {/* Hero Section */}
        <div className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <FileHeart className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
              Living Wills & Advance Directives
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Make your healthcare wishes known and ensure they're respected with comprehensive advance care planning.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Understanding Living Wills
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  A living will, also known as an advance directive, is a legal document that specifies your preferences for end-of-life medical care. It provides clear guidance to your healthcare providers and loved ones about your wishes.
                </p>
                <p>
                  Unlike a traditional will that distributes property after death, a living will speaks for you while you're still alive but unable to communicate. It ensures your healthcare decisions are respected even if you become incapacitated.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Medical Preferences</h3>
                    <p>Specify your wishes for life-sustaining treatments and end-of-life care.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Healthcare Decisions</h3>
                    <p>Make informed choices about your medical treatment in advance.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif text-woodlands-gold">
                  Key Components
                </h2>
              </div>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  A comprehensive living will typically addresses the following important elements:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                    <h3 className="text-xl text-woodlands-gold mb-3">Treatment Preferences</h3>
                    <p>Specify your wishes for life-sustaining treatments, including resuscitation, ventilation, dialysis, and artificial nutrition.</p>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                    <h3 className="text-xl text-woodlands-gold mb-3">Pain Management</h3>
                    <p>Express your preferences for pain management and comfort care, even if they might hasten your passing.</p>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                    <h3 className="text-xl text-woodlands-gold mb-3">Organ Donation</h3>
                    <p>Indicate your wishes regarding organ and tissue donation for transplantation or medical research.</p>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                    <h3 className="text-xl text-woodlands-gold mb-3">Personal Values</h3>
                    <p>Include statements about your religious or personal beliefs that should be considered in healthcare decisions.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <HelpCircle className="h-8 w-8 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif text-woodlands-gold">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-6 text-woodlands-cream font-body">
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-3">What's the difference between a living will and a medical power of attorney?</h3>
                  <p>A living will specifically outlines your preferences for medical treatment, while a medical power of attorney designates someone to make healthcare decisions on your behalf if you're unable to do so. For comprehensive protection, we recommend having both documents.</p>
                </div>
                
                <div className="h-px bg-woodlands-gold/20 my-6"></div>
                
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-3">Do I need a living will if I already have a regular will?</h3>
                  <p>Yes. A traditional will only takes effect after death and governs property distribution. A living will addresses medical decisions while you're still alive but unable to communicate. They serve completely different purposes in your estate plan.</p>
                </div>
                
                <div className="h-px bg-woodlands-gold/20 my-6"></div>
                
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-3">How do I ensure medical providers follow my living will?</h3>
                  <p>Share copies with your doctors, hospital, and loved ones. In Texas, healthcare providers are legally obligated to follow valid advance directives or transfer you to a provider who will. Our attorneys can help ensure your document meets all legal requirements.</p>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif text-woodlands-gold">
                  Our Advance Directive Services
                </h2>
              </div>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  At The Woodlands Law Firm, we provide comprehensive advance directive services to ensure your healthcare wishes are clearly documented and legally binding:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4 mt-4">
                  <li>Personalized consultation to understand your values and healthcare preferences</li>
                  <li>Drafting legally sound living wills that meet all Texas requirements</li>
                  <li>Creation of medical powers of attorney to complement your living will</li>
                  <li>Guidance on discussing your wishes with family members and physicians</li>
                  <li>Regular review and updates to ensure your documents reflect your current wishes</li>
                </ul>
                <div className="mt-8 flex justify-center">
                  <Link to="/contact">
                    <Button className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold">
                      Schedule a Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <ConsultationCTA 
              title="Plan for Your Healthcare Future"
              subtitle="Get expert guidance on living wills and advance directives."
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LivingWills;
