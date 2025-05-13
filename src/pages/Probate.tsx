
import React from 'react';
import { FileText, Gavel, Scale, Users } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from "@/components/shared/SEOHead";
import FAQsBlock, { FAQ } from "@/components/shared/FAQsBlock";
import QandABlock from "@/components/shared/QandABlock";

const Probate = () => {
  // FAQ Data for the page
  const faqs: FAQ[] = [
    {
      question: "What is probate?",
      answer: "Probate is the court-supervised legal process that validates a will and oversees the distribution of a deceased person's assets. The process includes authenticating the will, appointing an executor, identifying assets, paying debts and taxes, and distributing remaining property to heirs according to the will or state law."
    },
    {
      question: "How long does probate take in Texas?",
      answer: "In Texas, an uncomplicated independent administration typically takes 6-12 months to complete. Factors that can extend this timeline include contested wills, complicated assets, outstanding debts, estate tax issues, or dependent administrations requiring court supervision for each action."
    },
    {
      question: "What is independent administration in Texas?",
      answer: "Independent administration is a streamlined probate process unique to Texas that allows executors to manage most estate matters without court supervision after the initial appointment. This reduces court costs, attorney fees, and time compared to dependent administration where court approval is needed for nearly every action."
    },
    {
      question: "What happens if someone dies without a will in Texas?",
      answer: "When someone dies without a will (intestate) in Texas, state law determines who inherits their property following strict rules of descent and distribution. The court appoints an administrator, usually requiring a dependent administration with court oversight. This process is typically more complex, expensive, and time-consuming than probating a valid will."
    },
    {
      question: "Can probate be avoided?",
      answer: "Yes, probate can be avoided through estate planning strategies such as creating a revocable living trust, designating beneficiaries on financial accounts and retirement plans, using transfer-on-death deeds for real estate, establishing joint ownership with rights of survivorship, and making lifetime gifts."
    }
  ];

  // Q&A Data for the 500-word block
  const qaContent = [
    {
      question: "Why is proper probate administration important?",
      answer: "Proper probate administration ensures an orderly distribution of assets while protecting the rights of heirs and creditors. Without professional guidance, executors risk personal liability for mistakes like paying creditors in the wrong order, distributing assets prematurely, or filing incorrect tax returns. The Texas probate process includes specific deadlines and notice requirements that must be followed precisely. Our attorneys ensure all legal obligations are met while guiding executors through complex decisions. We also help minimize family conflicts by facilitating clear communication about the process and expectations. Professional administration typically results in faster distribution to beneficiaries because we know how to navigate potential complications efficiently."
    },
    {
      question: "What are the types of probate proceedings in Texas?",
      answer: "Texas offers several probate options tailored to different situations. Independent administration allows executors to handle most matters without court supervision after appointment, saving time and money. Dependent administration requires court approval for each action and is necessary when there's no will, beneficiaries disagree, or there are complex creditor issues. Muniment of Title is a simplified process for estates with no debts except those secured by real property, allowing the will itself to transfer title without appointing an executor. Small estate affidavits can be used when someone dies without a will leaving less than $75,000 in non-exempt assets. Our attorneys assess your specific situation to determine which probate path is most efficient and appropriate."
    },
    {
      question: "What responsibilities do executors have during probate?",
      answer: "Executors bear significant legal responsibilities throughout the probate process. They must locate and file the original will with the court within the statutory timeframe, usually four years from death. After appointment, executors publish notices to creditors and inform beneficiaries about the probate proceedings. They create an accurate inventory of all estate assets and file it with the court within 90 days. Executors must prudently manage estate assets during administration, including maintaining properties and investing funds appropriately. They pay valid debts, file final income tax returns, and handle any estate tax matters. Once creditors and taxes are addressed, executors distribute remaining assets according to the will. Our firm guides executors through each responsibility to ensure proper compliance."
    },
    {
      question: "How can disputes during probate be prevented or resolved?",
      answer: "Probate disputes often arise from unclear wills, perceived inequities in distributions, or suspicion about executor actions. Clear communication is essential to preventing conflicts. We help executors maintain transparency with beneficiaries about the process timeline, asset values, and decision-making. When family tensions exist, we may suggest regular updates or formal status conferences. If beneficiaries question executor decisions, we document the reasoning and compliance with fiduciary duties. For serious disputes, mediation often resolves issues more efficiently than litigation. When necessary, we represent clients in will contests, seeking removal of fiduciaries, or other probate litigation. Our goal is always to resolve conflicts efficiently while preserving family relationships whenever possible."
    },
    {
      question: "What estate planning strategies help minimize probate complexity?",
      answer: "Strategic estate planning can significantly simplify the eventual probate process or avoid it entirely for many assets. Revocable living trusts allow assets to transfer outside probate while maintaining lifetime control. Pay-on-death designations for financial accounts and transfer-on-death deeds for real property create automatic transfers at death. Properly structured joint ownership with rights of survivorship allows property to pass directly to the surviving owner. For assets that will go through probate, a clearly written will with an independent administration clause streamlines the court process. Regular updates to beneficiary designations and estate planning documents prevent complications from outdated information. Our comprehensive approach addresses both probate avoidance and probate simplification strategies tailored to each client's assets and goals."
    }
  ];

  // Structured data for the page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "The Woodlands Estate Law - Probate Services",
    "description": "Expert probate and estate administration services in The Woodlands, TX. Our attorneys guide executors and families through the Texas probate process.",
    "url": "https://woodlands.law/probate",
    "areaServed": "The Woodlands, TX",
    "serviceType": "Probate Administration",
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
          title="Probate & Estate Administration | The Woodlands Estate Law"
          description="Expert probate services in The Woodlands, TX. Our attorneys guide executors and families through the Texas probate process with care and efficiency."
          canonicalUrl="/probate"
          structuredData={structuredData}
        />
        
        {/* Hero Section */}
        <div className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Gavel className="w-16 h-16 text-woodlands-gold" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
                Probate & Estate Administration
              </h1>
              <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
                Guiding Texas Families Through Probate and Planning in The Woodlands, Texas.
              </p>
            </div>
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
              {/* Introduction */}
              <section className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                  The Woodlands Probate and Estate Administration Attorneys
                </h2>
                <div className="space-y-4 text-woodlands-cream font-body">
                  <p>
                    At The Woodlands Law Firm, we provide comprehensive Probate and Estate Administration 
                    services tailored to Texas residents. Based in The Woodlands – a suburb just north of 
                    Houston – our firm has over a decade of experience helping clients settle loved ones' 
                    estates and plan their own legacies.
                  </p>
                  <p>
                    We understand that every family's situation is unique. Whether you are handling probate 
                    after a loved one's passing or planning ahead to simplify or avoid probate in the future, 
                    our dedicated attorneys are here to support you with experience, integrity, and results.
                  </p>
                  <div className="mt-6">
                    <a 
                      href="https://woodlandslaw.cliogrow.com/book"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-woodlands-gold text-woodlands-purple px-6 py-3 rounded-md font-medium hover:bg-woodlands-lightgold transition-colors mr-4 mb-4"
                    >
                      Schedule a Free Consultation
                    </a>
                    <a 
                      href="tel:8326260116"
                      className="inline-block bg-white/10 text-woodlands-cream px-6 py-3 rounded-md font-medium hover:bg-white/20 transition-colors mb-4"
                    >
                      Call (832) 626-0116
                    </a>
                  </div>
                </div>
              </section>

              {/* Q&A Section - 500 word block */}
              <section className="mb-16">
                <div className="max-w-4xl mx-auto">
                  <QandABlock 
                    questions={qaContent} 
                    title="Common Questions About Probate"
                  />
                </div>
              </section>

              {/* FAQ Section with Schema markup */}
              <section className="mb-16">
                <div className="max-w-4xl mx-auto">
                  <FAQsBlock faqs={faqs} />
                </div>
              </section>

              {/* After Death Services */}
              <section className="bg-white/5 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="h-8 w-8 text-woodlands-gold" />
                  <h2 className="text-3xl font-serif text-woodlands-gold">
                    Helping Families Navigate Probate After a Death
                  </h2>
                </div>
                <div className="space-y-4 text-woodlands-cream font-body">
                  <p>
                    Losing a loved one is hard enough without the added burden of court procedures. 
                    Our probate attorneys in The Woodlands help executors and families navigate the 
                    Texas probate process with care and efficiency.
                  </p>
                  
                  <h3 className="text-xl text-woodlands-gold mt-6">We handle all aspects of estate administration after death, including:</h3>
                  
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li>
                      <span className="font-medium text-woodlands-gold">Validating the Will:</span> Filing with the court for probate, 
                      ensuring the will is proven valid, and an executor is officially appointed.
                    </li>
                    <li>
                      <span className="font-medium text-woodlands-gold">Estate Administration:</span> Helping executors/administrators 
                      collect assets, notify beneficiaries and creditors, pay debts or taxes, and distribute assets.
                    </li>
                    <li>
                      <span className="font-medium text-woodlands-gold">Court Filings & Deadlines:</span> Keeping track of all Texas 
                      probate requirements, preparing petitions, and representing you at court hearings.
                    </li>
                    <li>
                      <span className="font-medium text-woodlands-gold">Resolving Issues:</span> Addressing challenges like will 
                      contests, unclear provisions, or difficulty locating assets.
                    </li>
                    <li>
                      <span className="font-medium text-woodlands-gold">Independent Administration:</span> Helping you qualify for 
                      streamlined probate with minimal court supervision whenever possible.
                    </li>
                  </ul>
                  
                  <h3 className="text-xl text-woodlands-gold mt-6">What to Expect:</h3>
                  <p>
                    In an uncontested Texas probate with a valid will, the process is usually straightforward. 
                    After filing an application, there will be a short court hearing to admit the will to probate 
                    and appoint the executor. The executor will then have authority through Letters Testamentary 
                    to manage the estate. From start to finish, an independent administration for a simple estate 
                    can often be completed in a matter of months.
                  </p>
                </div>
              </section>

              {/* Planning Ahead */}
              <section className="bg-white/5 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Scale className="h-8 w-8 text-woodlands-gold" />
                  <h2 className="text-3xl font-serif text-woodlands-gold">
                    Planning Your Estate to Simplify or Avoid Probate
                  </h2>
                </div>
                <div className="space-y-4 text-woodlands-cream font-body">
                  <p>
                    Probate can be time-consuming and public, but proper estate planning can make it smoother – 
                    or even unnecessary – for your heirs. Our firm doesn't just help after someone passes; we also 
                    work with individuals and families to plan ahead and minimize the burdens of probate.
                  </p>
                  
                  <h3 className="text-xl text-woodlands-gold mt-6">We assist with:</h3>
                  
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li>
                      <span className="font-medium text-woodlands-gold">Last Wills and Testaments:</span> Well-drafted 
                      wills that specify independent administration and clearly outline your wishes.
                    </li>
                    <li>
                      <span className="font-medium text-woodlands-gold">Living Trusts:</span> Trust structures that allow 
                      assets to bypass probate entirely and pass directly to beneficiaries.
                    </li>
                    <li>
                      <span className="font-medium text-woodlands-gold">Beneficiary Designations:</span> Tools like Transfer 
                      on Death Deeds and pay-on-death accounts to bypass probate for specific assets.
                    </li>
                    <li>
                      <span className="font-medium text-woodlands-gold">Custom Plans for Families:</span> Tailored solutions 
                      for seniors, parents with minor children, blended families, and business owners.
                    </li>
                  </ul>
                  
                  <h3 className="text-xl text-woodlands-gold mt-6">Risks of Not Planning Ahead:</h3>
                  <p>
                    Without an estate plan, you lose control over what happens to your property and loved ones. 
                    If you die without a will in Texas (intestate), state law will determine your heirs, and the court 
                    will likely require a dependent administration with heavy supervision. This can lead to higher costs, 
                    longer timelines, and added stress for your family.
                  </p>
                  
                  <div className="mt-6">
                    <Link to="/wills" className="inline-block bg-white/10 text-woodlands-cream border border-woodlands-cream/30 px-6 py-3 rounded-md font-medium hover:bg-white/20 transition-colors mr-4 mb-4">
                      Learn About Wills
                    </Link>
                    <Link to="/trusts" className="inline-block bg-white/10 text-woodlands-cream border border-woodlands-cream/30 px-6 py-3 rounded-md font-medium hover:bg-white/20 transition-colors mb-4">
                      Learn About Trusts
                    </Link>
                  </div>
                </div>
              </section>

              {/* Types of Probate */}
              <section className="bg-white/5 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="h-8 w-8 text-woodlands-gold" />
                  <h2 className="text-3xl font-serif text-woodlands-gold">
                    Understanding Types of Probate in Texas
                  </h2>
                </div>
                <div className="space-y-6 text-woodlands-cream font-body">
                  <p>
                    Not all probate cases are the same. Texas probate law offers several ways to administer an estate, 
                    depending on the circumstances. Our firm will assess your situation and pursue the appropriate option.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-6 rounded-lg">
                      <h3 className="text-xl text-woodlands-gold mb-3">Independent Administration</h3>
                      <p>
                        The preferred method with minimal court oversight. After the initial hearing, most actions 
                        can be done without seeking court permission at every step, keeping costs down and allowing 
                        efficient settlement.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 p-6 rounded-lg">
                      <h3 className="text-xl text-woodlands-gold mb-3">Dependent Administration</h3>
                      <p>
                        Requires court approval for nearly every transaction. More time-consuming and costly due to close 
                        court supervision. Usually necessary when there is no will, the will did not grant independent authority, 
                        or there are disputes.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 p-6 rounded-lg">
                      <h3 className="text-xl text-woodlands-gold mb-3">Muniment of Title</h3>
                      <p>
                        A simplified proceeding unique to Texas used when a person dies with a valid will and no outstanding debts. 
                        The will itself serves as the legal document transferring assets to beneficiaries, without appointing an 
                        executor or requiring further administration.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 p-6 rounded-lg">
                      <h3 className="text-xl text-woodlands-gold mb-3">Small Estate Affidavit</h3>
                      <p>
                        When someone dies without a will and leaves behind only a small estate (below $75,000), heirs may skip formal 
                        probate using a Small Estate Affidavit, if all heirs agree on the distribution.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Us */}
              <section className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                  Why Choose The Woodlands Law Firm?
                </h2>
                <div className="space-y-4 text-woodlands-cream font-body">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-xl text-woodlands-gold">Experience and Local Knowledge</h3>
                      <p>Our attorneys have deep roots in the Houston area and are familiar with Montgomery County and Harris County probate courts, local rules, and judges.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl text-woodlands-gold">Personalized Attention</h3>
                      <p>Estate matters are personal and sometimes emotional. We take the time to listen to your story and understand your goals.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl text-woodlands-gold">Comprehensive Services</h3>
                      <p>We handle both probate administration and estate planning, giving us insight into the complete picture of your needs.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl text-woodlands-gold">Compassion and Integrity</h3>
                      <p>Our firm was founded on principles of integrity and doing what's right for each client. You can expect honesty and transparency.</p>
                    </div>
                  </div>
                  
                  <Separator className="my-6 bg-woodlands-gold/20" />
                  
                  <div className="flex items-center flex-wrap gap-4 justify-center">
                    <Link to="/our-firm">
                      <Button variant="outline" className="border-woodlands-cream/30 text-woodlands-cream">
                        About Our Firm
                      </Button>
                    </Link>
                    <Link to="/our-attorneys">
                      <Button variant="outline" className="border-woodlands-cream/30 text-woodlands-cream">
                        Meet Our Attorneys
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            {/* Call to Action */}
            <div className="mt-16">
              <ConsultationCTA 
                title="Need Help with Probate?"
                subtitle="Contact us for a free consultation to discuss your probate or estate administration needs."
                buttonText="Schedule a Free Consultation"
                variant="dark"
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </HelmetProvider>
  );
};

export default Probate;
