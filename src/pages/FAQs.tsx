
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FAQ {
  question: string;
  answer: string;
  citation?: string;
}

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const faqItems: FAQ[] = [
    {
      question: "Do I really need a will if I am married and own everything jointly?",
      answer: "Yes. In Texas, community‑property rules protect a surviving spouse's one‑half interest, but the deceased spouse's half passes under a will—or by intestacy if there is no will. Intestacy can divert assets to children from a prior marriage and require probate court oversight. A simple will keeps control in your hands and lets you name an independent executor.",
      citation: "TEX. EST. CODE ANN. §§ 201.001–.003 (West 2023)."
    },
    {
      question: "What makes a will legally valid in Texas?",
      answer: "A will must be (1) in writing, (2) signed by the testator (or by someone at the testator's direction and in the testator's presence), and (3) witnessed by two competent adults who sign in the testator's presence. A holographic (hand‑written) will is valid without witnesses if entirely in the testator's handwriting and signed. Using a self‑proving affidavit avoids later witness testimony.",
      citation: "Id. §§ 251.051, 251.0515, 251.104."
    },
    {
      question: "Can I disinherit my spouse or children?",
      answer: "You may disinherit adult children. You cannot disinherit a minor child's right to support. A spouse cannot be stripped of their one‑half community share, homestead occupancy, or statutory allowances, but you may dispose of your separate property and your one‑half of community property as you wish.",
      citation: "Id. §§ 353.051–.153; TEX. CONST. art. XVI, § 52."
    },
    {
      question: "What is \"independent administration,\" and why do Texans prefer it?",
      answer: "Texas allows an executor to act with minimal court supervision if the will names an independent executor or the heirs agree. The executor may sell property, settle debts, and distribute assets without detailed court orders, reducing cost and delay.",
      citation: "TEX. EST. CODE ANN. § 401.003."
    },
    {
      question: "How does a \"Lady Bird\" or transfer‑on‑death deed fit into my plan?",
      answer: "A Lady Bird (enhanced life‑estate) deed or TOD deed lets you keep full control of real estate during life while naming beneficiaries to receive it at death without probate. It also preserves Medicaid eligibility because the property remains part of your estate until death.",
      citation: "TEX. EST. CODE ANN. §§ 114.001–.152 (TOD deeds); 1 TEX. ADMIN. CODE § 358.435."
    },
    {
      question: "When should I use a revocable living trust?",
      answer: "A revocable trust avoids probate for the assets you retitle into it, provides privacy, and enables seamless management during incapacity. It is especially valuable for blended families, out‑of‑state property, and incapacity planning. It does not shelter assets from creditors or estate tax while you remain the trustee.",
      citation: "TEX. PROP. CODE ANN. §§ 112.001–.051."
    },
    {
      question: "Are irrevocable trusts useful in Texas if there is no state estate tax?",
      answer: "Yes. Irrevocable trusts can remove assets from your federal taxable estate, protect wealth from creditors, and set conditions on distributions. They are common for life‑insurance policies, high‑growth investments, and special‑needs planning.",
      citation: "26 U.S.C. §§ 2031–2046; TEX. PROP. CODE ANN. § 112.035."
    },
    {
      question: "What happens to my homestead at death?",
      answer: "A surviving spouse (or minor child) may occupy the homestead for life, regardless of who inherits title. The home is also exempt from most creditors' claims. Plan distributions accordingly if you wish heirs other than your spouse to receive the house.",
      citation: "TEX. CONST. art. XVI, §§ 50–52; TEX. PROP. CODE ANN. § 41.002."
    },
    {
      question: "How are retirement accounts handled in an estate plan?",
      answer: "Retirement plans pass by beneficiary designation outside probate. Review designations after life events; they override wills and trusts. Spouses generally must consent to naming another primary beneficiary on a 401(k). Consider tax timing under the federal SECURE Act 10‑year payout rule for most non‑spouse beneficiaries.",
      citation: "26 U.S.C. § 401(a); Setting Every Community Up for Retirement Enhancement Act of 2019, Pub. L. No. 116‑94, 133 Stat. 2534."
    },
    {
      question: "Can a trust shield assets from nursing‑home costs or Medicaid recovery?",
      answer: "Only specific irrevocable trusts—funded more than five years before applying for Medicaid—can protect assets from the \"estate recovery\" program. Revocable trusts offer no such protection. Consider a Medicaid asset‑protection trust if long‑term‑care coverage is a concern.",
      citation: "42 U.S.C. § 1396p(d); 1 TEX. ADMIN. CODE § 373.101."
    },
    {
      question: "What is a \"muniment of title\" probate?",
      answer: "If the decedent left a valid will, had no unsecured debts, and no need for administration, the court may admit the will as a muniment of title only. This probate shortcut transfers real estate without appointing an executor.",
      citation: "TEX. EST. CODE ANN. § 257.001."
    },
    {
      question: "How often should I update my will or trust?",
      answer: "Review documents at least every three years and after major life changes—marriage, divorce, birth, substantial asset change, or relocation. Statutory updates (e.g., federal estate‑tax sunsets in 2026) also call for a review.",
      citation: "Best practice; see TEX. LAWYER'S CREED § III."
    }
  ];
  
  // Filter FAQs based on search
  const filteredFAQs = faqItems.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-8">
              Frequently Asked Questions — Wills & Trusts in Texas
            </h1>
            <p className="text-woodlands-cream text-center mb-12 max-w-2xl mx-auto">
              Concise answers with Texas‑specific authority; citations follow Bluebook format. 
              This material is informational only and not legal advice.
            </p>

            {/* Search bar */}
            <div className="relative max-w-xl mx-auto mb-12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-woodlands-gold" />
              <Input 
                className="pl-10 bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/60 focus-visible:ring-woodlands-gold"
                placeholder="Search questions..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* FAQ Accordion */}
            <div className="bg-white/5 rounded-lg p-6 md:p-8">
              {filteredFAQs.length === 0 ? (
                <p className="text-woodlands-cream text-center py-8">No questions found matching your search.</p>
              ) : (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="border border-woodlands-gold/30 rounded-lg overflow-hidden bg-white/5"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left text-woodlands-gold font-serif text-lg hover:text-woodlands-lightgold">
                        {index + 1}. {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 text-woodlands-cream/90">
                        <p className="mb-2">{faq.answer}</p>
                        {faq.citation && (
                          <p className="text-sm text-woodlands-cream/70 italic">{faq.citation}</p>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
            
            <div className="mt-12 text-woodlands-cream/70 text-center text-sm">
              <p>
                Prepared for educational outreach by a Texas attorney. 
                For personalized advice, consult counsel licensed in Texas.
              </p>
              <div className="mt-8">
                <a 
                  href="https://woodlandslaw.cliogrow.com/book" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-woodlands-gold text-woodlands-purple px-6 py-3 rounded-md font-medium hover:bg-woodlands-lightgold transition-colors"
                >
                  Schedule a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQs;
