
import React from 'react';
import { Shield } from "lucide-react";

const MedicaidStrategies = () => {
  return (
    <section className="bg-white/5 p-8 rounded-lg">
      <div className="flex items-center mb-6">
        <Shield className="h-8 w-8 text-woodlands-gold mr-4" />
        <h2 className="text-3xl font-serif text-woodlands-gold">
          Medicaid Planning Strategies
        </h2>
      </div>
      <div className="space-y-4 text-woodlands-cream font-body">
        <p>
          Our attorneys employ effective strategies to help clients qualify for Medicaid 
          while preserving assets for spouses and heirs:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
            <h3 className="text-xl text-woodlands-gold mb-3">Asset Protection Trusts</h3>
            <p>Specialized irrevocable trusts designed to protect assets while qualifying for Medicaid benefits.</p>
          </div>
          
          <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
            <h3 className="text-xl text-woodlands-gold mb-3">Income Planning</h3>
            <p>Strategies to manage income levels and maintain Medicaid eligibility while maximizing resources.</p>
          </div>
          
          <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
            <h3 className="text-xl text-woodlands-gold mb-3">Spousal Protection</h3>
            <p>Legal approaches to protect the community spouse from impoverishment when a partner needs care.</p>
          </div>
          
          <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
            <h3 className="text-xl text-woodlands-gold mb-3">Crisis Planning</h3>
            <p>Emergency strategies for those who need immediate care without advance planning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicaidStrategies;
