
import React from 'react';
import { HeartHandshake, Shield, Award, FileText } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from "@/components/shared/SEOHead";
import FAQsBlock, { FAQ } from "@/components/shared/FAQsBlock";
import QandABlock from "@/components/shared/QandABlock";

const ElderLaw = () => {
  // FAQ Data for the page
  const faqs: FAQ[] = [
    {
      question: "What is elder law?",
      answer: "Elder law is a specialized legal practice focused on the needs of older adults and their families. It encompasses Medicaid planning, long-term care strategies, guardianships, estate planning, and protection against elder abuse, all tailored to the unique needs of seniors."
    },
    {
      question: "When should I start planning for Medicaid?",
      answer: "Ideally, Medicaid planning should begin at least five years before you anticipate needing long-term care, due to Medicaid's five-year lookback period. However, even if you or a loved one needs care now, there are still legitimate crisis planning strategies available."
    },
    {
      question: "Can I protect my assets and still qualify for Medicaid?",
      answer: "Yes, there are legal strategies to protect assets while qualifying for Medicaid. These may include irrevocable trusts, exempt asset transfers to certain family members, specialized annuities, and spend-down strategies that benefit the family rather than depleting resources on care costs."
    },
    {
      question: "Will Medicare cover long-term nursing home care?",
      answer: "Medicare provides very limited coverage for nursing home care, typically only for up to 100 days of skilled nursing care following a qualifying hospital stay. It does not cover custodial care (help with daily activities) or long-term care, which is why Medicaid planning is crucial."
    },
    {
      question: "What is a Lady Bird Deed and how does it help in Texas?",
      answer: "A Lady Bird Deed (Enhanced Life Estate Deed) allows Texas property owners to transfer real estate upon death while retaining complete control during their lifetime. This avoids probate for the property and helps protect it from Medicaid estate recovery after death, making it a valuable tool in elder law planning."
    }
  ];

  // Q&A Data for the 500-word block
  const qaContent = [
    {
      question: "Why is Medicaid planning important for seniors?",
      answer: "Medicaid planning is essential because long-term care costs can quickly deplete a lifetime of savings. In Texas, nursing home care averages over $6,000 per month, potentially consuming hundreds of thousands of dollars over time. Without proper planning, many middle-class families must spend down their assets until they reach poverty level before qualifying for assistance. Strategic Medicaid planning helps preserve assets for spouses and heirs while legally qualifying for benefits that cover care costs. This planning must account for Medicaid's complex eligibility rules, including income limits, asset restrictions, and the five-year lookback period for asset transfers. Our attorneys develop customized plans that protect what you've worked for while ensuring access to quality care."
    },
    {
      question: "What asset protection strategies work best for Texas seniors?",
      answer: "We employ several effective strategies tailored to Texas laws and our clients' unique situations. Irrevocable Medicaid Asset Protection Trusts can shield assets while providing income benefits if established outside the five-year lookback period. For married couples, we implement spousal asset transfers and income conversion strategies to maximize community spouse resource allowances. We utilize exempt transfers to certain family members, particularly those with disabilities or who provided care that delayed institutionalization. Texas-specific tools like Lady Bird Deeds protect homes from estate recovery. For crisis situations, we employ careful spend-down strategies, specialized annuities, and qualified income trusts when necessary. Each plan is customized to the client's family dynamics, assets, and long-term goals."
    },
    {
      question: "How do we help veterans access benefits for long-term care?",
      answer: "Many veterans and their surviving spouses are unaware they may qualify for Aid and Attendance benefits to help pay for long-term care. We assess eligibility based on military service requirements, medical needs, and financial constraints. Unlike Medicaid, VA benefits have no lookback period for most asset transfers, creating additional planning opportunities. We help complete the complex application process, gathering necessary documentation about service history, medical conditions, and financial resources. For clients who might qualify for both VA and Medicaid benefits, we create coordinated strategies that maximize coverage while navigating the different eligibility rules. Our attorneys stay current on changing VA regulations to ensure applications have the highest chance of approval."
    },
    {
      question: "What special planning considerations exist for individuals with disabilities?",
      answer: "Planning for individuals with disabilities requires specialized knowledge to maintain essential benefits while enhancing quality of life. We create Special Needs Trusts that supplement government benefits without disqualifying the individual from SSI, Medicaid, housing assistance, or food benefits. For parents of children with disabilities, we establish provisions in wills and trusts that protect inheritances through properly structured special needs trusts. We help families understand guardianship alternatives that maximize independence while providing appropriate support, like supported decision-making agreements. We also assist with ABLE accounts that provide tax-advantaged savings options without affecting benefits. Our comprehensive approach addresses immediate needs while creating sustainable lifetime support systems."
    },
    {
      question: "When is guardianship necessary, and what alternatives exist?",
      answer: "Guardianship becomes necessary when an individual can no longer make responsible decisions about health or finances and has no advance directives in place. However, guardianship removes fundamental rights and should be considered only after exploring less restrictive alternatives. We help families evaluate options like financial powers of attorney, medical powers of attorney, and supported decision-making agreements that preserve autonomy while providing assistance. For those with diminishing capacity, we can create revocable trusts with co-trustees or successor trustees who gradually assume management responsibilities. When guardianship is unavoidable, we guide families through the court process while advocating for limited guardianships that preserve as much independence as possible. Our goal is always to protect vulnerable individuals with the least restrictive arrangement necessary."
    }
  ];

  // Structured data for the page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "The Woodlands Estate Law - Elder Law Services",
    "description": "Comprehensive elder law services in The Woodlands, TX, including Medicaid planning, asset protection, and long-term care strategies for seniors.",
    "url": "https://woodlands.law/elder-law",
    "areaServed": "The Woodlands, TX",
    "serviceType": "Elder Law",
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
          title="Elder Law & Medicaid Planning | The Woodlands Estate Law"
          description="Expert Medicaid planning and asset protection services for seniors in The Woodlands, Texas. Protect your assets while qualifying for benefits."
          canonicalUrl="/elder-law"
          structuredData={structuredData}
        />
        
        {/* Hero Section */}
        <div className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <HeartHandshake className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
              Elder Law & Medicaid Planning
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Comprehensive legal services for seniors and their families, including Medicaid planning and asset protection.
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
            <div className="max-w-4xl mx-auto space-y-12">
              <section className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                  Our Elder Law Services
                </h2>
                <div className="space-y-4 text-woodlands-cream font-body">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-xl text-woodlands-gold">Medicaid Planning</h3>
                      <p>Strategic planning to qualify for benefits while protecting assets.</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl text-woodlands-gold">Long-term Care Planning</h3>
                      <p>Prepare for future healthcare and living assistance needs.</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl text-woodlands-gold">Asset Protection</h3>
                      <p>Preserve wealth while qualifying for benefits.</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl text-woodlands-gold">Veterans Benefits</h3>
                      <p>Assistance with VA benefits and planning.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Q&A Section - 500 word block */}
              <section className="mb-16">
                <div className="max-w-4xl mx-auto">
                  <QandABlock 
                    questions={qaContent} 
                    title="Common Questions About Elder Law"
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
                  <Shield className="h-8 w-8 text-woodlands-gold mr-4" />
                  <h2 className="text-3xl font-serif text-woodlands-gold">
                    Medicaid Planning Strategies
                  </h2>
                </div>
                <div className="space-y-4 text-woodlands-cream font-body">
                  <p>
                    Our attorneys employ effective strategies to help clients qualify for Medicaid 
                    while preserving assets for spouses and heirs:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                      <h3 className="text-xl text-woodlands-gold mb-3">Asset Protection Trusts</h3>
                      <p>Specialized irrevocable trusts designed to protect assets while qualifying for Medicaid benefits.</p>
                    </div>
                    
                    <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                      <h3 className="text-xl text-woodlands-gold mb-3">Income Planning</h3>
                      <p>Strategies to manage income levels and maintain Medicaid eligibility while maximizing resources.</p>
                    </div>
                    
                    <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                      <h3 className="text-xl text-woodlands-gold mb-3">Spousal Protection</h3>
                      <p>Legal approaches to protect the community spouse from impoverishment when a partner needs care.</p>
                    </div>
                    
                    <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                      <h3 className="text-xl text-woodlands-gold mb-3">Crisis Planning</h3>
                      <p>Emergency strategies for those who need immediate care without advance planning.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white/5 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-woodlands-gold mr-4" />
                  <h2 className="text-3xl font-serif text-woodlands-gold">
                    Why Choose Our Elder Law Services
                  </h2>
                </div>
                <div className="space-y-4 text-woodlands-cream font-body">
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li>Specialized knowledge of Texas Medicaid regulations and eligibility requirements</li>
                    <li>Compassionate approach that considers both legal and emotional aspects of planning</li>
                    <li>Customized strategies tailored to each family's unique situation and goals</li>
                    <li>Coordination with healthcare providers and financial advisors for comprehensive planning</li>
                    <li>Clear communication that helps families understand complex legal and financial concepts</li>
                  </ul>
                  <div className="mt-8 flex justify-center">
                    <Link to="/contact">
                      <Button className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold">
                        Contact Our Elder Law Attorneys
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            {/* Call to Action */}
            <div className="mt-16">
              <ConsultationCTA 
                title="Secure Your Future Care"
                subtitle="Get expert guidance on elder law and Medicaid planning."
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </HelmetProvider>
  );
};

export default ElderLaw;
