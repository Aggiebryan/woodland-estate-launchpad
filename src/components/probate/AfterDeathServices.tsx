
import React from 'react';
import { FileText } from "lucide-react";

const AfterDeathServices = () => {
  return (
    <section className="bg-white/5 p-8 rounded-lg">
      <div className="flex items-center gap-4 mb-6">
        <FileText className="h-8 w-8 text-woodlands-gold" />
        <h2 className="text-3xl font-serif text-woodlands-gold">
          Helping Families Navigate Probate After a Death
        </h2>
      </div>
      <div className="space-y-4 text-woodlands-cream font-body">
        <p>
          Losing a loved one is hard enough without the added burden of court procedures. 
          Our probate attorneys in The Woodlands help executors and families navigate the 
          Texas probate process with care and efficiency.
        </p>
        
        <h3 className="text-xl text-woodlands-gold mt-6">We handle all aspects of estate administration after death, including:</h3>
        
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>
            <span className="font-medium text-woodlands-gold">Validating the Will:</span> Filing with the court for probate, 
            ensuring the will is proven valid, and an executor is officially appointed.
          </li>
          <li>
            <span className="font-medium text-woodlands-gold">Estate Administration:</span> Helping executors/administrators 
            collect assets, notify beneficiaries and creditors, pay debts or taxes, and distribute assets.
          </li>
          <li>
            <span className="font-medium text-woodlands-gold">Court Filings & Deadlines:</span> Keeping track of all Texas 
            probate requirements, preparing petitions, and representing you at court hearings.
          </li>
          <li>
            <span className="font-medium text-woodlands-gold">Resolving Issues:</span> Addressing challenges like will 
            contests, unclear provisions, or difficulty locating assets.
          </li>
          <li>
            <span className="font-medium text-woodlands-gold">Independent Administration:</span> Helping you qualify for 
            streamlined probate with minimal court supervision whenever possible.
          </li>
        </ul>
        
        <h3 className="text-xl text-woodlands-gold mt-6">What to Expect:</h3>
        <p>
          In an uncontested Texas probate with a valid will, the process is usually straightforward. 
          After filing an application, there will be a short court hearing to admit the will to probate 
          and appoint the executor. The executor will then have authority through Letters Testamentary 
          to manage the estate. From start to finish, an independent administration for a simple estate 
          can often be completed in a matter of months.
        </p>
      </div>
    </section>
  );
};

export default AfterDeathServices;
