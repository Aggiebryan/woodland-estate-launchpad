
import React from 'react';
import ProbateIntro from './ProbateIntro';
import QandABlock from '@/components/shared/QandABlock';
import FAQsBlock, { FAQ } from '@/components/shared/FAQsBlock';
import AfterDeathServices from './AfterDeathServices';
import PlanningAhead from './PlanningAhead';
import ProbateTypes from './ProbateTypes';
import WhyChooseUs from './WhyChooseUs';
import ConsultationCTA from '@/components/shared/ConsultationCTA';

interface ProbateContentProps {
  faqs: FAQ[];
  qaContent: { question: string; answer: string }[];
}

const ProbateContent: React.FC<ProbateContentProps> = ({ faqs, qaContent }) => {
  return (
    <div className="bg-woodlands-purple py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <ProbateIntro />

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

          <AfterDeathServices />
          <PlanningAhead />
          <ProbateTypes />
          <WhyChooseUs />
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
  );
};

export default ProbateContent;
