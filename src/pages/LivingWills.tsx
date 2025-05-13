
import React from 'react';
import { FileHeart, CheckCircle, HelpCircle, FileText } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from "@/components/shared/SEOHead";
import FAQsBlock, { FAQ } from "@/components/shared/FAQsBlock";
import QandABlock from "@/components/shared/QandABlock";

const LivingWills = () => {
  // FAQ Data for the page
  const faqs: FAQ[] = [
    {
      question: "What is a living will?",
      answer: "A living will is a legal document that outlines your preferences for medical care if you become unable to communicate your wishes. It typically addresses end-of-life care, including life-sustaining treatments, pain management, and organ donation wishes."
    },
    {
      question: "Is a living will the same as a medical power of attorney?",
      answer: "No. A living will specifies your medical treatment preferences, while a medical power of attorney designates someone to make healthcare decisions for you when you cannot. They serve complementary purposes, and having both documents is recommended for comprehensive advance care planning."
    },
    {
      question: "When does a living will take effect?",
      answer: "A living will takes effect when you are unable to communicate your healthcare wishes and have a terminal illness, irreversible condition, or are permanently unconscious, as certified by physicians according to Texas law."
    },
    {
      question: "Can I change my living will after it's signed?",
      answer: "Yes, you can modify or revoke your living will at any time as long as you are mentally competent. It's advisable to review your advance directives periodically, especially after major life events or changes in health status."
    },
    {
      question: "Do I need a lawyer to create a living will?",
      answer: "While Texas law allows for DIY living wills, working with an attorney ensures your document meets all legal requirements, clearly expresses your wishes, and coordinates with your overall estate plan to avoid conflicts or ambiguities."
    }
  ];

  // Q&A Data for the 500-word block
  const qaContent = [
    {
      question: "Why is a living will important for healthcare planning?",
      answer: "A living will serves as your voice when you cannot speak for yourself during medical crises. It provides clear guidance to healthcare providers about your treatment preferences, reducing guesswork and potential family conflicts over difficult decisions. Having this document gives you control over your medical care even when incapacitated and relieves loved ones from making agonizing choices without knowing your wishes. In Texas, living wills are legally binding on healthcare facilities when properly executed, ensuring your autonomy is respected even in vulnerable situations."
    },
    {
      question: "What specific medical decisions does a living will address?",
      answer: "A comprehensive living will covers several critical healthcare decisions. It specifies your preferences regarding life-sustaining treatments like mechanical ventilation, CPR, artificial nutrition, and dialysis when recovery is unlikely. The document addresses pain management preferences, balancing comfort with consciousness. It can include guidance on antibiotic use and hospital transfer decisions. Many living wills also address organ donation intentions and religious or cultural considerations relevant to end-of-life care. Our attorneys help you think through these complex scenarios and document your choices clearly."
    },
    {
      question: "How do we create an effective living will for you?",
      answer: "Our process begins with an in-depth consultation to understand your values, religious beliefs, and healthcare priorities. We explain medical scenarios in clear language to help you make informed decisions about various treatments. We draft a customized document that precisely reflects your wishes using legally sound language recognized by Texas healthcare providers. We ensure proper execution with required witnesses or notarization according to Texas law. We also provide guidance on discussing your decisions with family members and physicians to prevent future disputes. Finally, we advise on proper storage and distribution of your advance directives to ensure accessibility when needed."
    },
    {
      question: "What common mistakes do people make with living wills?",
      answer: "Many DIY living wills use vague language that creates ambiguity about specific treatments in particular situations. Some people fail to update their documents after significant health changes or medical advances that might affect their choices. Another common issue is not properly executing the document according to Texas legal requirements, potentially rendering it invalid. Many individuals create living wills but don't share them with their doctors or family members, making them ineffective in emergencies. Others neglect to coordinate their living will with other advance directives, creating potential conflicts. Our legal guidance helps you avoid these pitfalls."
    },
    {
      question: "When should you update your living will?",
      answer: "You should review and potentially update your living will after significant health diagnoses that might alter your treatment preferences. Major life events like marriage, divorce, or death of your healthcare agent necessitate a review. If you relocate to Texas from another state, your documents should be updated to comply with Texas law. Medical advances might make previous decisions obsolete, requiring reconsideration. Changes in religious beliefs or personal values often warrant updates to ensure your document still reflects your wishes. We recommend reviewing your living will every 3-5 years even without major changes to confirm it still represents your current thinking."
    }
  ];

  // Structured data for the page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Living Wills & Advance Directives | The Woodlands Estate Law",
    "description": "Create legally binding advance healthcare directives with The Woodlands Estate Law. Our attorneys help you document your medical wishes and ensure they're respected.",
    "url": "https://woodlands.law/living-wills",
    "specialty": "Estate Planning",
    "audience": {
      "@type": "Audience",
      "audienceType": "Adults Preparing for Healthcare Decisions"
    },
    "provider": {
      "@type": "Attorney",
      "name": "The Woodlands Estate Law",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2219 Sawdust Rd., Suite 803",
        "addressLocality": "The Woodlands",
        "addressRegion": "TX",
        "postalCode": "77380",
        "addressCountry": "US"
      },
      "telephone": "+18326260116"
    }
  };

  return (
    <HelmetProvider>
      <MainLayout>
        <SEOHead 
          title="Living Wills & Advance Directives | The Woodlands Estate Law"
          description="Create legally binding advance healthcare directives with The Woodlands Estate Law. Our attorneys help you document your medical wishes and ensure they're respected."
          canonicalUrl="/living-wills"
          structuredData={structuredData}
        />
        
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
            <div className="flex justify-center mt-8">
              <a
                href="https://woodlandslaw.cliogrow.com/book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold">
                  Schedule a Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-woodlands-purple py-16">
          <div className="container mx-auto px-4">
            {/* Main sections */}
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

              {/* Q&A Section - 500 word block */}
              <section className="mb-16">
                <div className="max-w-4xl mx-auto">
                  <QandABlock 
                    questions={qaContent} 
                    title="Common Questions About Living Wills"
                  />
                </div>
              </section>

              {/* FAQ Section with Schema markup */}
              <section className="mb-16">
                <div className="max-w-4xl mx-auto">
                  <FAQsBlock faqs={faqs} />
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
    </HelmetProvider>
  );
};

export default LivingWills;
