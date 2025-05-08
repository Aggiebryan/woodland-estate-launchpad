
import React, { useRef } from 'react';
import { Printer } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import MainLayout from "../components/layout/MainLayout";

const EstateChecklist = () => {
  const checklistRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const content = checklistRef.current;
    if (!content) return;
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert("Please allow popups to print this checklist");
      return;
    }
    
    const printContent = `
      <html>
        <head>
          <title>Estate Planning Checklist - The Woodlands Law Firm</title>
          <style>
            body {
              font-family: 'Georgia', serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 20px auto;
              padding: 20px;
            }
            h1, h2, h3, h4 {
              color: #5D4E93;
              margin-top: 1.5em;
            }
            h1 {
              text-align: center;
              color: #B89B54;
              border-bottom: 2px solid #B89B54;
              padding-bottom: 10px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            td {
              padding: 8px;
              vertical-align: top;
            }
            .section-header {
              background-color: #F3F0F9;
              font-weight: bold;
              padding: 8px;
            }
            .checkbox {
              width: 20px;
              height: 20px;
              border: 1px solid #B89B54;
              display: inline-block;
              margin-right: 10px;
              vertical-align: middle;
            }
            .explanation {
              font-style: italic;
              color: #666;
              margin-top: 5px;
            }
            .section {
              margin-bottom: 30px;
            }
            .item-title {
              font-weight: bold;
            }
            .logo {
              text-align: center;
              margin-bottom: 20px;
            }
            .logo img {
              max-width: 200px;
            }
            .footer {
              margin-top: 30px;
              border-top: 1px solid #ccc;
              padding-top: 15px;
              text-align: center;
              font-size: 0.9em;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="logo">
            <img src="/lovable-uploads/eec20be5-5337-4ef4-bf2e-108bd0116fda.png" alt="Estate Planning Logo">
          </div>
          <h1>Texas Estate Planning Checklist</h1>
          ${content.innerHTML}
          <div class="footer">
            <p>© ${new Date().getFullYear()} The Woodlands Law Firm. All rights reserved.</p>
            <p>2219 Sawdust Rd. Suite 803, The Woodlands, TX 77380</p>
            <p>(832) 626-0116 | admin@woodlands.law</p>
          </div>
        </body>
      </html>
    `;
    
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
    
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-woodlands-darkpurple via-woodlands-purple to-woodlands-lightpurple">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-10 rounded-lg border border-woodlands-gold/20 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-woodlands-gold">Estate Planning Checklist</h1>
              <Button 
                onClick={handlePrint} 
                className="bg-woodlands-gold hover:bg-woodlands-lightgold text-woodlands-purple flex items-center space-x-2"
              >
                <Printer className="h-4 w-4" />
                <span>Print Checklist</span>
              </Button>
            </div>

            <p className="text-woodlands-cream mb-8">
              Use this checklist to track your estate planning progress. Mark each item you have already completed and 
              bring this to your consultation to help us tailor a comprehensive estate plan for your specific needs.
            </p>

            <div ref={checklistRef} className="space-y-12">
              {/* Instructions */}
              <div className="bg-woodlands-darkpurple/30 p-6 rounded-lg border border-woodlands-gold/20">
                <h3 className="text-xl font-serif text-woodlands-gold mb-4">Instructions for the Client</h3>
                <p className="text-woodlands-cream">
                  Use the checkboxes to mark each item you have already completed. Read the brief note beneath each line—this tells 
                  you <em>why</em> the step matters and prompts honest reflection on your own circumstances.
                </p>
              </div>

              {/* Core Legal Documents */}
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-woodlands-gold border-b border-woodlands-gold/30 pb-2">
                  Core Legal Documents
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="will" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="will" className="text-lg font-medium text-woodlands-gold">Last Will and Testament</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Names heirs, picks an executor, and prevents Texas intestacy rules from controlling who receives your property. 
                        Ask: <em>If I died tonight, would my current will still match my wishes?</em>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="trust" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="trust" className="text-lg font-medium text-woodlands-gold">Revocable Living Trust (if appropriate)</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Keeps assets out of probate, adds privacy, and lets a successor trustee manage property during incapacity. 
                        Ask: <em>Do I want my family to avoid court supervision?</em>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="guardian" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="guardian" className="text-lg font-medium text-woodlands-gold">Guardianship Nomination for Minor or Special-Needs Children</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Gives the court clear guidance and prevents disputes over who will raise your child. 
                        Ask: <em>Have I chosen both a first and a backup guardian?</em>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="poa" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="poa" className="text-lg font-medium text-woodlands-gold">Durable Financial Power of Attorney</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Lets a trusted agent manage finances if you become incapacitated. 
                        Ask: <em>Who understands my finances well enough to step in without court approval?</em>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="medical" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="medical" className="text-lg font-medium text-woodlands-gold">Medical Power of Attorney</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Appoints a health-care decision-maker. 
                        Ask: <em>Who knows my medical wishes and can act under pressure?</em>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="directive" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="directive" className="text-lg font-medium text-woodlands-gold">Advance Directive (Living Will)</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        States end-of-life treatment wishes—ventilators, tube feeding, pain control. 
                        Ask: <em>Do my loved ones know my preferences, or will they be forced to guess?</em>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="hipaa" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="hipaa" className="text-lg font-medium text-woodlands-gold">HIPAA Authorization</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Gives your agents legal access to medical records the moment they need them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Asset & Beneficiary Review */}
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-woodlands-gold border-b border-woodlands-gold/30 pb-2">
                  Asset & Beneficiary Review
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="beneficiary" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="beneficiary" className="text-lg font-medium text-woodlands-gold">Update Beneficiary Designations</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        401(k), IRA, life insurance, POD/TOD accounts pass <strong>outside</strong> the will. Confirm each form matches your current plan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="titles" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="titles" className="text-lg font-medium text-woodlands-gold">Check Property Titles</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Verify joint accounts, deeds, and vehicle titles. In Texas, community-property titling affects what you may leave by will.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="digital" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="digital" className="text-lg font-medium text-woodlands-gold">Inventory Digital Assets</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        List online accounts, passwords, and crypto keys. Decide who may access or shut them down.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust & Tax Strategies */}
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-woodlands-gold border-b border-woodlands-gold/30 pb-2">
                  Trust & Tax Strategies (High-Net-Worth or Business Owners)
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="irrevocable" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="irrevocable" className="text-lg font-medium text-woodlands-gold">Irrevocable Trusts for Tax Reduction or Asset Protection</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Life-insurance trusts, SLATs, GRATs, or special-needs trusts can shift assets out of your taxable estate and shield them from creditors.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="partnership" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="partnership" className="text-lg font-medium text-woodlands-gold">Family Limited Partnership / LLC</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Consolidates investments or real estate and can apply valuation discounts for wealth transfer.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="gifting" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="gifting" className="text-lg font-medium text-woodlands-gold">Annual and Lifetime Gifting Plan</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Uses federal gift-tax exemptions to lower future estate taxes before 2026 exemption sunset.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="succession" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="succession" className="text-lg font-medium text-woodlands-gold">Business Succession Plan</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Buy–sell agreement, successor training, and key-person insurance keep your business operating if you exit or die.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Texas-Specific Considerations */}
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-woodlands-gold border-b border-woodlands-gold/30 pb-2">
                  Texas-Specific Considerations
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="community" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="community" className="text-lg font-medium text-woodlands-gold">Community vs. Separate Property Audit</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Identify which assets are community; you can only leave your half by will. Crucial for blended families.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="homestead" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="homestead" className="text-lg font-medium text-woodlands-gold">Homestead Rights & Exemptions</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Confirm your surviving spouse or minor children may occupy the homestead—and that your plan does not unintentionally force a sale.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="ladybird" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="ladybird" className="text-lg font-medium text-woodlands-gold">Lady Bird or Transfer-on-Death Deeds</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Evaluate whether to pass real estate outside probate while retaining full control during life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Family Conversations & Final Steps */}
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-woodlands-gold border-b border-woodlands-gold/30 pb-2">
                  Family Conversations & Final Steps
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="discuss" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="discuss" className="text-lg font-medium text-woodlands-gold">Discuss Plans with Fiduciaries and Heirs</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Transparency prevents surprises and litigation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="organize" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="organize" className="text-lg font-medium text-woodlands-gold">Organize Documents in One Accessible Place</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Store originals in a fire-safe box; give copies to your executor and agents.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-5 items-center mt-1">
                      <Checkbox id="review" className="border-woodlands-gold data-[state=checked]:bg-woodlands-gold" />
                    </div>
                    <div className="ml-3 space-y-1">
                      <label htmlFor="review" className="text-lg font-medium text-woodlands-gold">Review Every 3 Years or After Major Life Events</label>
                      <p className="text-woodlands-cream/90 text-sm">
                        Marriage, divorce, birth, retirement, or large asset changes all trigger a full review.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Self-Reflection Prompts */}
              <div className="bg-woodlands-darkpurple/30 p-6 rounded-lg border border-woodlands-gold/20 space-y-4">
                <h2 className="text-2xl font-serif font-bold text-woodlands-gold">Self-Reflection Prompts</h2>
                
                <ul className="list-disc pl-5 text-woodlands-cream space-y-3">
                  <li>What legacy—financial or personal—do I want to leave my children or community?</li>
                  <li>Who depends on my income today, and how long would they need support if I were gone tomorrow?</li>
                  <li>If I own a business, could it run for 90 days without me?</li>
                  <li>Have I protected a child or parent with special needs from losing vital benefits?</li>
                  <li>Am I comfortable that my spouse, heirs, and charitable goals are treated fairly under community-property rules?</li>
                </ul>
              </div>

              {/* Next Action */}
              <div className="bg-woodlands-gold/10 p-6 rounded-lg border border-woodlands-gold/30 text-center">
                <h3 className="text-xl font-serif text-woodlands-gold mb-4">Next Action</h3>
                <p className="text-woodlands-cream">
                  Bring this completed checklist to your initial consultation. Together we can turn the boxes you left blank into a secure, 
                  legally effective plan—so you control your legacy, not the courts.
                </p>
                <div className="mt-6">
                  <a 
                    href="https://woodlandslaw.cliogrow.com/book"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold">
                      Schedule Your Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EstateChecklist;
