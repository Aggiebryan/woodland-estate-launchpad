
import React from 'react';
import { Scale } from "lucide-react";
import { Link } from "react-router-dom";

const PlanningAhead = () => {
  return (
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
  );
};

export default PlanningAhead;
