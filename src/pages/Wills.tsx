
import React from 'react';
import { FileText, Check, ArrowRight } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from "@/components/shared/SEOHead";
import FAQsBlock, { FAQ } from "@/components/shared/FAQsBlock";
import QandABlock from "@/components/shared/QandABlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Wills = () => {
  // FAQ Data for the page
  const faqs: FAQ[] = [
    {
      question: "What is a will?",
      answer: "A will is a legal document that outlines your wishes regarding the distribution of your assets and the care of any minor children after your death. If you die without a will, those wishes may not be followed, and state laws will determine who receives your property."
    },
    {
      question: "Do I need a will if I don't have many assets?",
      answer: "Yes, having a will is important regardless of the size of your estate. A will allows you to designate who receives your possessions, name guardians for minor children, and appoint an executor to manage your estate."
    },
    {
      question: "How often should I update my will?",
      answer: "You should review your will every 3-5 years or after major life events such as marriage, divorce, birth of a child, death of a beneficiary or executor, significant changes in assets, or if you move to a different state."
    },
    {
      question: "What happens if I die without a will in Texas?",
      answer: "If you die without a will in Texas (intestate), state law determines who inherits your property. This may not align with your wishes. The court will also appoint an administrator for your estate and guardians for minor children without your input."
    },
    {
      question: "Can I write my own will?",
      answer: "While you can create a DIY will, these often contain errors or ambiguities that can cause problems later. An attorney-drafted will ensures your document meets all legal requirements and clearly expresses your wishes to avoid future complications."
    }
  ];

  // Q&A Data for the 500-word block
  const qaContent = [
    {
      question: "Why is a professionally drafted will important?",
      answer: "A professionally drafted will ensures your final wishes are legally binding and clearly expressed. Our attorneys create customized wills that address your specific family situation and assets. We help you avoid common mistakes that could invalidate your will or lead to disputes among your heirs. Working with an experienced attorney gives you confidence that your estate plan will work as intended when your family needs it most."
    },
    {
      question: "What does a comprehensive will include?",
      answer: "A comprehensive will includes clear instructions for asset distribution to beneficiaries. It names an executor responsible for managing your estate. The document designates guardians for minor children or dependents with special needs. It may include specific bequests for personal items with sentimental or financial value. Our wills contain provisions to address contingencies such as beneficiaries predeceaseing you. We ensure your will complies with all Texas legal requirements to avoid challenges during probate."
    },
    {
      question: "How do we help you create an effective will?",
      answer: "We begin with a thorough consultation to understand your family dynamics and financial situation. Our attorneys explain relevant estate planning concepts in plain language. We help you make informed decisions about executor selection, guardian designation, and asset distribution. After drafting your will, we review it with you to ensure it accurately reflects your wishes. We provide guidance on proper will execution according to Texas law. We also advise on securely storing your will and when updates might be necessary in the future."
    },
    {
      question: "What problems can arise from an improperly drafted will?",
      answer: "An improperly drafted will may be deemed invalid, resulting in your assets being distributed according to state intestacy laws. Ambiguous language can lead to family disputes and costly litigation. DIY wills often fail to address contingencies like simultaneous deaths or changing circumstances. Without proper planning, your heirs may face unexpected tax consequences. Special situations such as blended families or beneficiaries with special needs require specialized provisions that are often missing from simple wills. Our legal expertise helps you avoid these common pitfalls."
    },
    {
      question: "When should you update your existing will?",
      answer: "You should update your will after major life events such as marriage, divorce, or the birth of a child. Changes in financial circumstances, like receiving an inheritance or purchasing significant assets, may warrant a review. If your named executor or guardian becomes unable or unwilling to serve, your will should be updated. Moving to a new state requires a review since estate laws vary by location. Tax law changes might necessitate adjustments to your estate planning strategy. We recommend reviewing your will every 3-5 years to ensure it remains aligned with your current wishes and circumstances."
    }
  ];

  // Structured data for the page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "The Woodlands Estate Law - Will Services",
    "description": "Professional will drafting services in The Woodlands, TX. Our attorneys help you create a legally binding will that ensures your wishes are honored.",
    "url": "https://woodlands.law/wills",
    "areaServed": "The Woodlands, TX",
    "serviceType": "Will Drafting",
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
          title="Wills & Testament Services | The Woodlands Estate Law"
          description="Create a legally binding will with the help of experienced attorneys in The Woodlands. Ensure your wishes are honored and your loved ones are provided for."
          canonicalUrl="/wills"
          structuredData={structuredData}
        />
        
        {/* Hero Section */}
        <section className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <FileText className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
              Wills & Testament Services
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg">
              Create a legally binding will that ensures your wishes are honored and your loved ones are provided for.
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
        </section>

        {/* Main Content */}
        <div className="bg-woodlands-purple py-16">
          <div className="container mx-auto px-4">
            {/* Services Overview */}
            <section className="mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                  Protect Your Legacy with a Professionally Drafted Will
                </h2>
                
                <p className="text-woodlands-cream mb-6">
                  A will is one of the most important legal documents you can create. It ensures that your property is distributed according to your wishes, allows you to name guardians for minor children, and can help prevent family disputes after your passing.
                </p>
                
                <p className="text-woodlands-cream mb-8">
                  At The Woodlands Estate Law, our experienced attorneys work with you to create a comprehensive will that addresses your unique circumstances and provides clarity for your loved ones.
                </p>
                
                <div className="bg-woodlands-darkpurple/50 p-6 rounded-lg border border-woodlands-gold/20 mb-8">
                  <h3 className="text-xl font-serif text-woodlands-gold mb-4">Our Will Services Include:</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Last Will and Testament drafting",
                      "Executor selection guidance",
                      "Guardian designation for minors",
                      "Asset inventory assistance",
                      "Specific bequest provisions",
                      "Will updates and amendments",
                      "Pour-over wills for trusts",
                      "Will execution and witnessing"
                    ].map((service, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-woodlands-gold mr-2 flex-shrink-0 mt-1" />
                        <span className="text-woodlands-cream">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Q&A Section - 500 word block */}
            <section className="mb-16">
              <div className="max-w-4xl mx-auto">
                <QandABlock 
                  questions={qaContent} 
                  title="Common Questions About Wills"
                />
              </div>
            </section>

            {/* FAQ Section with Schema markup */}
            <section className="mb-16">
              <div className="max-w-4xl mx-auto">
                <FAQsBlock faqs={faqs} />
              </div>
            </section>

            {/* Related Services */}
            <section className="mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                  Related Estate Planning Services
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Trusts",
                      description: "Protect assets, minimize taxes, and avoid probate with a customized trust.",
                      link: "/trusts"
                    },
                    {
                      title: "Powers of Attorney",
                      description: "Designate someone to make financial and healthcare decisions if you're unable to.",
                      link: "/powers-of-attorney"
                    },
                    {
                      title: "Probate Services",
                      description: "Get expert guidance through the Texas probate process.",
                      link: "/probate"
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-woodlands-darkpurple/50 p-6 rounded-lg border border-woodlands-gold/20">
                      <h3 className="text-xl font-serif text-woodlands-gold mb-3">{service.title}</h3>
                      <p className="text-woodlands-cream mb-4">{service.description}</p>
                      <Link to={service.link} className="text-woodlands-lightgold hover:text-woodlands-gold flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section>
              <ConsultationCTA 
                title="Ready to Create Your Will?"
                subtitle="Schedule a free consultation to discuss your estate planning needs."
                variant="dark"
              />
            </section>
          </div>
        </div>
      </MainLayout>
    </HelmetProvider>
  );
};

export default Wills;
