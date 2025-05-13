
import React from 'react';
import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const ElderLawHero = () => {
  return (
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
  );
};

export default ElderLawHero;
