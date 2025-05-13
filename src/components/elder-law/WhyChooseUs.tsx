
import React from 'react';
import { Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  return (
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
  );
};

export default WhyChooseUs;
