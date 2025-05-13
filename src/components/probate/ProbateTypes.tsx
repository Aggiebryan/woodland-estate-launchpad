
import React from 'react';
import { FileText } from "lucide-react";

const ProbateTypes = () => {
  return (
    <section className="bg-white/5 p-8 rounded-lg">
      <div className="flex items-center gap-4 mb-6">
        <FileText className="h-8 w-8 text-woodlands-gold" />
        <h2 className="text-3xl font-serif text-woodlands-gold">
          Understanding Types of Probate in Texas
        </h2>
      </div>
      <div className="space-y-6 text-woodlands-cream font-body">
        <p>
          Not all probate cases are the same. Texas probate law offers several ways to administer an estate, 
          depending on the circumstances. Our firm will assess your situation and pursue the appropriate option.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl text-woodlands-gold mb-3">Independent Administration</h3>
            <p>
              The preferred method with minimal court oversight. After the initial hearing, most actions 
              can be done without seeking court permission at every step, keeping costs down and allowing 
              efficient settlement.
            </p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl text-woodlands-gold mb-3">Dependent Administration</h3>
            <p>
              Requires court approval for nearly every transaction. More time-consuming and costly due to close 
              court supervision. Usually necessary when there is no will, the will did not grant independent authority, 
              or there are disputes.
            </p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl text-woodlands-gold mb-3">Muniment of Title</h3>
            <p>
              A simplified proceeding unique to Texas used when a person dies with a valid will and no outstanding debts. 
              The will itself serves as the legal document transferring assets to beneficiaries, without appointing an 
              executor or requiring further administration.
            </p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl text-woodlands-gold mb-3">Small Estate Affidavit</h3>
            <p>
              When someone dies without a will and leaves behind only a small estate (below $75,000), heirs may skip formal 
              probate using a Small Estate Affidavit, if all heirs agree on the distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProbateTypes;
