
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface GlossaryTerm {
  term: string;
  definition: string;
}

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const glossaryTerms: GlossaryTerm[] = [
    {
      term: "Abatement",
      definition: "When the estate's assets are not enough to satisfy all gifts, the law reduces gifts in a set order—first from property you did not specifically name, then from specific gifts. Tex. Est. Code Ann. § 355.151 (West 2023)."
    },
    {
      term: "Ademption",
      definition: "If you leave someone a specific asset in your will but you no longer own it at death, that gift fails (\"adeems\") and the beneficiary receives nothing in its place. Id. § 255.401."
    },
    {
      term: "Administrator",
      definition: "A court‑appointed person who settles an estate when no executor was named or the named executor cannot serve. Id. § 22.004."
    },
    {
      term: "Ancillary Probate",
      definition: "A secondary probate in another state to transfer real estate located outside Texas. Used when the main probate (the \"domiciliary\" probate) is opened here."
    },
    {
      term: "Beneficiary",
      definition: "Anyone who has the right to receive property under a will, trust, life‑insurance policy, or retirement account."
    },
    {
      term: "Bequest / Devise",
      definition: "A gift of personal property (bequest) or real property (devise) made in a will. Id. § 22.024."
    },
    {
      term: "Codicil",
      definition: "A short document that changes or adds to an existing will without replacing the whole instrument. Id. § 251.051."
    },
    {
      term: "Community Property",
      definition: "All property either spouse acquires during marriage (other than gifts or inheritances). Each spouse owns an undivided one‑half interest. Id. § 22.015; Tex. Fam. Code Ann. § 3.002."
    },
    {
      term: "Corpus",
      definition: "The principal—also called the \"trust estate\"—held in trust, as distinguished from income the corpus produces."
    },
    {
      term: "Durable Power of Attorney",
      definition: "A written authorization that lets someone (your \"agent\") handle financial or legal tasks for you. It stays effective even if you become incapacitated. Tex. Est. Code Ann. § 751.002(4)."
    },
    {
      term: "Elective Share (Spousal Election)",
      definition: "Texas does not use the traditional \"elective share.\" Instead, a surviving spouse keeps his or her half of community property and may claim certain constitutional allowances in the homestead and exempt property. Tex. Const. art. XVI, § 52; Tex. Est. Code Ann. §§ 353.051–.153."
    },
    {
      term: "Fiduciary",
      definition: "A person who must act in another's best interest—executors, trustees, guardians, and agents under a power of attorney all owe fiduciary duties."
    },
    {
      term: "Generation‑Skipping Transfer (GST) Tax",
      definition: "A federal tax on large gifts or bequests that skip a generation, such as from grandparent directly to grandchild. 26 U.S.C. §§ 2601–2664 (2022)."
    },
    {
      term: "Grantor / Settlor / Trustor",
      definition: "The person who creates and funds a trust. Texas statutes use \"settlor.\" Tex. Prop. Code Ann. § 111.004(15)."
    },
    {
      term: "Guardianship of the Estate / Person",
      definition: "Court‑supervised arrangement where a guardian manages finances (estate) or personal care (person) for a minor or incapacitated adult. Tex. Est. Code Ann. §§ 1002.012, .013."
    },
    {
      term: "Heirship Proceeding",
      definition: "A court action that declares who the legal heirs are when someone dies without a will. Id. §§ 202.001–.203."
    },
    {
      term: "Homestead",
      definition: "Your primary residence, protected from most creditors and subject to special survival rights for a spouse and minor children. Tex. Const. art. XVI, §§ 50–52."
    },
    {
      term: "Independent Administration",
      definition: "The Texas‑favored form of probate that allows an executor to act with minimal court oversight after the will (or heirs) request it. Tex. Est. Code Ann. § 401.003."
    },
    {
      term: "Inter Vivos Gift",
      definition: "A gift made during life, in contrast to a testamentary gift that takes effect at death."
    },
    {
      term: "Irrevocable Trust",
      definition: "A trust you cannot change or cancel once created, often used to remove assets from your taxable estate or shield them from creditors."
    },
    {
      term: "Letters Testamentary / Letters of Administration",
      definition: "Official documents issued by the probate clerk giving an executor (or administrator) legal authority to act on behalf of the estate. Tex. Est. Code Ann. §§ 306.001–.002."
    },
    {
      term: "Living Will (Advance Directive)",
      definition: "A written statement of the medical care you want or refuse if you become terminally ill or permanently unconscious. Tex. Health & Safety Code Ann. § 166.033."
    },
    {
      term: "Muniment of Title",
      definition: "A probate shortcut in Texas that transfers real estate under a will without appointing an executor, when there are no unpaid debts except secured liens. Tex. Est. Code Ann. § 257.001."
    },
    {
      term: "Per Capita / Per Stirpes",
      definition: "Two ways to divide an inheritance among descendants. Per capita gives each living branch an equal share; per stirpes passes a deceased child's share down to that child's own children. Id. § 201.101."
    },
    {
      term: "Pour‑Over Will",
      definition: "A will that directs any property still in your name at death to \"pour over\" into a revocable trust you created during life, ensuring all assets follow one set of distribution rules."
    },
    {
      term: "Precatory Language",
      definition: "Words of wish or desire (\"I hope,\" \"I request\") that do not impose a legal duty. Lawyers avoid precatory language when a binding command is intended."
    },
    {
      term: "Probate",
      definition: "The court process that proves a will, appoints an executor, pays debts, and transfers assets to beneficiaries. Id. § 22.029."
    },
    {
      term: "Residue / Residuary Estate",
      definition: "All property left after specific gifts are distributed and debts are paid."
    },
    {
      term: "Self‑Proving Affidavit",
      definition: "A sworn statement attached to a will in which the witnesses confirm its execution, allowing the will to be admitted to probate without live testimony. Id. § 251.104."
    },
    {
      term: "Separate Property",
      definition: "Assets a spouse owned before marriage, or acquired during marriage by gift, devise, or inheritance; remains solely that spouse's. Tex. Fam. Code Ann. § 3.001."
    },
    {
      term: "Spendthrift Clause",
      definition: "A trust provision preventing beneficiaries from pledging or assigning their interest and blocking most creditors from reaching trust assets. Tex. Prop. Code Ann. § 112.035."
    },
    {
      term: "Step‑Up in Basis",
      definition: "Federal income‑tax rule giving heirs a new tax basis equal to the asset's fair market value at death, which can erase capital gain on a later sale. 26 U.S.C. § 1014 (2022)."
    },
    {
      term: "Testator / Testatrix",
      definition: "Person who signs a will (testator—male or gender‑neutral; testatrix—female). Tex. Est. Code Ann. § 22.031."
    },
    {
      term: "Trustee",
      definition: "Individual or institution that manages trust assets for the beneficiaries, owing them fiduciary duties. Tex. Prop. Code Ann. § 111.004(7)."
    },
    {
      term: "Will Contest",
      definition: "A lawsuit challenging a will's validity—often alleging lack of capacity, undue influence, or improper execution. Tex. Est. Code Ann. § 256.204."
    }
  ];
  
  // Filter terms based on search input
  const filteredTerms = glossaryTerms.filter(term => 
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group terms alphabetically
  const groupedTerms: { [key: string]: GlossaryTerm[] } = {};
  
  filteredTerms.forEach(term => {
    const firstLetter = term.term[0].toUpperCase();
    if (!groupedTerms[firstLetter]) {
      groupedTerms[firstLetter] = [];
    }
    groupedTerms[firstLetter].push(term);
  });

  // Get unique first letters for alphabet navigation
  const alphabet = Object.keys(groupedTerms).sort();

  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-8">
              Estate Planning Glossary
            </h1>
            <p className="text-woodlands-cream text-center mb-12 max-w-2xl mx-auto">
              Plain-language explanations of legal terms you are unlikely to hear in everyday conversation. 
              Citations are to Texas law unless otherwise noted.
            </p>

            {/* Search bar */}
            <div className="relative max-w-xl mx-auto mb-12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-woodlands-gold" />
              <Input 
                className="pl-10 bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/60 focus-visible:ring-woodlands-gold"
                placeholder="Search glossary terms..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Alphabet navigation */}
            {alphabet.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {alphabet.map((letter) => (
                  <a 
                    key={letter}
                    href={`#letter-${letter}`}
                    className="w-8 h-8 flex items-center justify-center bg-woodlands-gold text-woodlands-purple rounded-full hover:bg-woodlands-lightgold transition-colors"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            )}

            {/* Glossary terms */}
            <div className="bg-white/5 rounded-lg p-6 md:p-8">
              {alphabet.length === 0 ? (
                <p className="text-woodlands-cream text-center py-8">No terms found matching your search.</p>
              ) : (
                Object.keys(groupedTerms).sort().map((letter) => (
                  <div key={letter} id={`letter-${letter}`} className="mb-12">
                    <h2 className="text-3xl font-serif text-woodlands-gold border-b border-woodlands-gold/30 pb-2 mb-6">
                      {letter}
                    </h2>
                    <div className="space-y-6">
                      {groupedTerms[letter].map((term, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-6">
                          <h3 className="text-xl font-serif text-woodlands-gold mb-2">{term.term}</h3>
                          <p className="text-woodlands-cream/90">{term.definition}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-12 text-woodlands-cream/70 text-center text-sm">
              <p>
                This glossary is for general educational purposes and does not constitute legal advice. 
                For guidance on your specific situation, consult a qualified Texas estate‑planning attorney.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Glossary;
