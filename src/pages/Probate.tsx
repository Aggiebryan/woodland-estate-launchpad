
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from "@/components/shared/SEOHead";
import ProbateHero from '@/components/probate/ProbateHero';
import ProbateContent from '@/components/probate/ProbateContent';
import { getProbateFAQs, getProbateQAContent, getProbateStructuredData } from '@/components/probate/ProbateSEOData';

const Probate = () => {
  // FAQ Data for the page
  const faqs = getProbateFAQs();

  // Q&A Data for the 500-word block
  const qaContent = getProbateQAContent();

  // Structured data for the page
  const structuredData = getProbateStructuredData();

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
        <ProbateHero />

        {/* Main Content */}
        <ProbateContent faqs={faqs} qaContent={qaContent} />
      </MainLayout>
    </HelmetProvider>
  );
};

export default Probate;
