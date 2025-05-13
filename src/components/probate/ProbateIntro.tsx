
import React from 'react';

const ProbateIntro = () => {
  return (
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
  );
};

export default ProbateIntro;
