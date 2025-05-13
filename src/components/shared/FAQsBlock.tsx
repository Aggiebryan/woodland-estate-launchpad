
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQsBlockProps {
  faqs: FAQ[];
  title?: string;
}

const FAQsBlock: React.FC<FAQsBlockProps> = ({ faqs, title = "Frequently Asked Questions" }) => {
  // Generate structured data for FAQPage
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  return (
    <div className="py-10">
      <h2 className="text-3xl font-serif font-bold text-woodlands-gold text-center mb-8">
        {title}
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 mb-4 rounded-lg border border-woodlands-gold/20">
              <AccordionTrigger className="px-6 text-woodlands-gold hover:text-woodlands-lightgold font-semibold text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-woodlands-cream">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      {/* Structured Data injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
    </div>
  );
};

export default FAQsBlock;
