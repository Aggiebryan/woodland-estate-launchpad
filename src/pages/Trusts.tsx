
import { Shield, Lock, CheckCircle, FileText, ArrowRight, HelpCircle, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Trusts = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    toast({
      title: "Form submitted",
      description: "Thank you for contacting us. We'll be in touch shortly.",
    });
    
    // Reset the form after submission
    form.reset();
  }

  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen">
        {/* Hero Section */}
        <div className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Lock className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-4">
              Texas Trusts Attorneys
            </h1>
            <h2 className="text-2xl font-serif text-woodlands-lightgold text-center mb-6">
              Preserve Wealth • Avoid Probate • Keep Family Matters Private
            </h2>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Picture a Saturday morning in The Woodlands. You and your spouse enjoy coffee on the patio, 
              confident that—no matter what tomorrow brings—your property, your business, and your 
              children's futures are secure. That serenity comes from one document: a Texas trust 
              carefully drafted to your wishes.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white/5 p-8 rounded-lg">
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  At The Woodlands Law Firm, we craft revocable and irrevocable trusts for Texans across 
                  Houston, Conroe, Spring, and every corner of the state. Seniors who wish to simplify 
                  affairs, parents who want guardianship instructions, high‑net‑worth families with tax 
                  concerns, and entrepreneurs planning succession all rely on our attorneys for clear, 
                  legally sound guidance. Our managing attorney, Gwendolyn Simpson, is Board Certified in 
                  Civil Appellate Law; our estate team brings the same precision to each trust we draft.
                </p>
                
                <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20 my-6">
                  <p className="italic">
                    "A trust is a box that holds assets." — <span className="text-woodlands-gold">Riddle & Butts, LLP</span>
                  </p>
                </div>
                
                <p>
                  Unlike a will—public and probate‑bound—a trust continues privately under your hand today 
                  and under a chosen successor's hand tomorrow. Texas law sets simple requirements: intent, 
                  property, trustee, beneficiaries, and a signed instrument. <a href="https://statutes.capitol.texas.gov" target="_blank" rel="noopener noreferrer" className="text-woodlands-lightgold hover:text-woodlands-gold">
                    Tex. Prop. Code Ann. §§ 112.001–.008 (West 2025)
                  </a>. We handle every detail from drafting to funding so you spend time with family, not forms.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href="tel:+18326260116" className="flex-1">
                    <Button className="w-full bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold">
                      <Phone className="mr-2 h-4 w-4" />
                      Call (832) 626-0116
                    </Button>
                  </a>
                  <a 
                    href="https://woodlandslaw.cliogrow.com/book" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-woodlands-darkpurple text-woodlands-gold border border-woodlands-gold hover:bg-woodlands-gold/10">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Online
                    </Button>
                  </a>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif text-woodlands-gold">
                  Why Texans Choose a Trust
                </h2>
              </div>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  Texas courts make probate efficient, yet even a smooth probate is public and time‑consuming. 
                  A properly funded trust sidesteps those delays, letting heirs receive assets quickly and discreetly. 
                  Stephenson Fournier lists probate avoidance, privacy, and flexibility as core living‑trust advantages. 
                  Riddle & Butts adds that trusts shine when families own out‑of‑state property or face potential will contests.
                </p>
                
                <h3 className="text-2xl font-serif text-woodlands-gold mt-8 mb-4">Key Benefits</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-3 mt-1 flex-shrink-0" />
                      <p><span className="text-woodlands-gold">Immediate control if you become incapacitated.</span> Your successor trustee steps in without court intervention.</p>
                    </div>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-3 mt-1 flex-shrink-0" />
                      <p><span className="text-woodlands-gold">Privacy of sensitive information.</span> Trusts stay out of the public record, shielding financial and personal details.</p>
                    </div>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-3 mt-1 flex-shrink-0" />
                      <p><span className="text-woodlands-gold">Multi‑state convenience.</span> Real estate in other states transfers inside the trust—no ancillary probate.</p>
                    </div>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-3 mt-1 flex-shrink-0" />
                      <p><span className="text-woodlands-gold">Tax and creditor strategies.</span> Irrevocable trusts can remove growth assets from taxable estate values and place a barrier between creditors and family wealth.</p>
                    </div>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20 md:col-span-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-3 mt-1 flex-shrink-0" />
                      <p><span className="text-woodlands-gold">Protection for special situations.</span> Spendthrift terms, special‑needs provisions, and incentive clauses keep inheritances safe and purpose‑driven.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif text-woodlands-gold">
                  Common Trust Structures We Draft
                </h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-woodlands-cream">
                  <thead>
                    <tr className="border-b border-woodlands-gold/30">
                      <th className="py-3 px-4 text-left text-woodlands-gold font-serif">Trust</th>
                      <th className="py-3 px-4 text-left text-woodlands-gold font-serif">Ideal For</th>
                      <th className="py-3 px-4 text-left text-woodlands-gold font-serif">Highlights</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-woodlands-gold/10">
                      <td className="py-4 px-4 font-medium">Revocable Living Trust</td>
                      <td className="py-4 px-4">Homeowners, blended families</td>
                      <td className="py-4 px-4">You act as trustee; you retain full control; assets avoid probate.</td>
                    </tr>
                    <tr className="border-b border-woodlands-gold/10">
                      <td className="py-4 px-4 font-medium">Irrevocable Life Insurance Trust (ILIT)</td>
                      <td className="py-4 px-4">High‑net‑worth families</td>
                      <td className="py-4 px-4">Keeps insurance proceeds out of estate tax base; names trustee to manage funds for heirs.</td>
                    </tr>
                    <tr className="border-b border-woodlands-gold/10">
                      <td className="py-4 px-4 font-medium">Asset‑Protection Trust</td>
                      <td className="py-4 px-4">Professionals, business owners</td>
                      <td className="py-4 px-4">Insulates designated assets from future lawsuits or creditors.</td>
                    </tr>
                    <tr className="border-b border-woodlands-gold/10">
                      <td className="py-4 px-4 font-medium">Special‑Needs Trust</td>
                      <td className="py-4 px-4">Families with disabled loved ones</td>
                      <td className="py-4 px-4">Provides extras without disrupting government benefits.</td>
                    </tr>
                    <tr className="border-b border-woodlands-gold/10">
                      <td className="py-4 px-4 font-medium">Charitable Remainder Trust</td>
                      <td className="py-4 px-4">Philanthropic clients</td>
                      <td className="py-4 px-4">Creates lifetime income; remainder benefits charity with income‑tax deduction.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Testamentary "Pour‑Over" Trust</td>
                      <td className="py-4 px-4">Everyone with a trust</td>
                      <td className="py-4 px-4">Captures assets left outside your living trust and funnels them in at death.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-4 text-woodlands-cream font-body">
                We explain each option in plain English and outline costs before drafting begins—no surprises, no jargon.
              </p>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Is a Trust Right for You?
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>A trust fits if you:</p>
                
                <ul className="space-y-3 mt-4">
                  {[
                    "Own real property (especially in more than one state).",
                    "Run a closely held business that must keep operating if you cannot.",
                    "Value privacy or expect blended‑family tension.",
                    "Plan to leave sizeable life‑insurance proceeds.",
                    "Have a loved one with special needs or spendthrift tendencies.",
                    "Want to lower estate taxes for future generations."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-woodlands-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="mt-4">
                  Still undecided? Start with a complimentary strategy session. We will review your current will, 
                  asset profile, family goals, and explain whether a trust—or another tool—meets your objectives best.
                </p>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Our Three‑Step Trust Planning Process
              </h2>
              <div className="space-y-6 text-woodlands-cream font-body">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-woodlands-gold flex items-center justify-center text-woodlands-purple font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-woodlands-gold mb-2">Discovery & Design</h3>
                    <p>
                      In a free consultation we learn your goals, outline trustee choices, and map property to trust strategy.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-woodlands-gold flex items-center justify-center text-woodlands-purple font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-woodlands-gold mb-2">Drafting & Funding</h3>
                    <p>
                      We prepare the trust instrument, deeds, and beneficiary forms; then we fund the trust—retitling 
                      real estate, brokerage accounts, and business interests—to ensure the plan works at once.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-woodlands-gold flex items-center justify-center text-woodlands-purple font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-woodlands-gold mb-2">Lifetime Support</h3>
                    <p>
                      Life changes; we amend, restate, or dissolve the trust as needed. When the time comes, we guide 
                      your trustee through administration, accounting, and any tax filings.
                    </p>
                  </div>
                </div>
                
                <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20 mt-4">
                  <p className="italic">
                    <a href="https://texastrustlaw.com" target="_blank" rel="noopener noreferrer" className="text-woodlands-lightgold hover:text-woodlands-gold">Texas Trust Law</a> emphasizes ongoing relationships for "peace of mind." 
                    We do too. You will always meet with an attorney—not a paralegal—when updates arise.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <HelpCircle className="h-8 w-8 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif text-woodlands-gold">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-6 text-woodlands-cream font-body">
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-3">Do revocable trusts protect assets from creditors?</h3>
                  <p>
                    No. Revocable trusts remain your "alter‑ego" for creditor and tax purposes. Asset‑protection 
                    trusts or limited partnerships are better shields.
                  </p>
                </div>
                
                <div className="h-px bg-woodlands-gold/20 my-6"></div>
                
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-3">Will I still need a will?</h3>
                  <p>
                    Yes. We draft a pour‑over will to capture assets inadvertently left outside your trust and to 
                    name guardians for minor children.
                  </p>
                </div>
                
                <div className="h-px bg-woodlands-gold/20 my-6"></div>
                
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-3">What does a trust cost?</h3>
                  <p>
                    Flat‑fee packages start at $2,500 for a basic revocable living trust and rise with complexity. 
                    Costs are discussed—and locked in—before work begins.†
                  </p>
                </div>
                
                <div className="h-px bg-woodlands-gold/20 my-6"></div>
                
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-3">How long does the process take?</h3>
                  <p>
                    Most clients sign their trust within three weeks of engagement; urgent matters can move faster.
                  </p>
                </div>
                
                <p className="text-sm text-woodlands-cream/70 mt-6">
                  † Fees vary by complexity and are subject to change without notice.
                </p>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Client Snapshot: The Johnson Family
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  When Mark, an oil‑and‑gas engineer, and Dana, a teacher, welcomed their second child, 
                  they worried about who would manage their Fayette County ranch and college savings if 
                  tragedy struck. We created a revocable living trust naming Dana's sister as successor 
                  trustee and outlining ranch‑care instructions.
                </p>
                <p>
                  The trust owns the ranch, investments, and a term‑life policy. If Mark and Dana die or become 
                  incapacitated, the trustee can sell cattle, pay taxes, and direct income into 529 plans—all 
                  without court delay.
                </p>
                <p className="italic">
                  "We sleep easier knowing everything is handled," Dana says.
                </p>
              </div>
            </section>
            
            {/* Contact Section */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold text-center mb-6">
                Begin Your Trust Today
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl text-woodlands-gold mb-3">Speak with an attorney now:</h3>
                    <a href="tel:8326260116" className="text-woodlands-lightgold hover:text-woodlands-gold text-lg">
                      (832) 626‑0116
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-woodlands-gold mb-3">Book online 24/7:</h3>
                    <a 
                      href="https://woodlandslaw.cliogrow.com/book"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-woodlands-lightgold hover:text-woodlands-gold text-lg"
                    >
                      woodlandslaw.cliogrow.com/book
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-woodlands-gold mb-3">Prefer email?</h3>
                    <a 
                      href="mailto:admin@woodlands.law" 
                      className="text-woodlands-lightgold hover:text-woodlands-gold text-lg"
                    >
                      admin@woodlands.law
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-4">Quick Contact Form</h3>
                  <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Name:</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                className="bg-woodlands-darkpurple/50 border-woodlands-gold/30 text-woodlands-cream" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Email:</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your email" 
                                className="bg-woodlands-darkpurple/50 border-woodlands-gold/30 text-woodlands-cream" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Phone:</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your phone number (optional)" 
                                className="bg-woodlands-darkpurple/50 border-woodlands-gold/30 text-woodlands-cream" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Tell us what you need:</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Your message (optional)" 
                                className="bg-woodlands-darkpurple/50 border-woodlands-gold/30 text-woodlands-cream"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold w-full"
                      >
                        Request Free Consultation
                      </Button>
                    </div>
                  </Form>
                  <p className="text-sm text-woodlands-cream/70 mt-3">
                    Submissions route securely to our attorneys and receive a reply within one business day.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <ConsultationCTA 
              title="Ready to Safeguard Your Legacy with a Trust?"
              subtitle="Schedule a free consultation with our experienced estate planning attorneys."
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Trusts;
