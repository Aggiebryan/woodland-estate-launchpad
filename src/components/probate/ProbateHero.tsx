
import React from 'react';
import { Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProbateHero = () => {
  return (
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
  );
};

export default ProbateHero;
