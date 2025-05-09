
import { FileText, Gavel, Scale, Users } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Probate = () => {
  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen">
        {/* Hero Section */}
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
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                The Woodlands Probate and Estate Administration Attorneys
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  At The Woodlands Law Firm, we provide comprehensive Probate and Estate Administration 
                  services tailored to Texas residents. Based in The Woodlands – a suburb just north of 
                  Houston – our firm has over a decade of experience helping clients settle loved ones' 
                  estates and plan their own legacies.
                </p>
                <p>
                  We understand that every family's situation is unique. Whether you are handling probate 
                  after a loved one's passing or planning ahead to simplify or avoid probate in the future, 
                  our dedicated attorneys are here to support you with experience, integrity, and results.
                </p>
                <div className="mt-6">
                  <a 
                    href="https://woodlandslaw.cliogrow.com/book"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-woodlands-gold text-woodlands-purple px-6 py-3 rounded-md font-medium hover:bg-woodlands-lightgold transition-colors mr-4 mb-4"
                  >
                    Schedule a Free Consultation
                  </a>
                  <a 
                    href="tel:8326260116"
                    className="inline-block bg-white/10 text-woodlands-cream px-6 py-3 rounded-md font-medium hover:bg-white/20 transition-colors mb-4"
                  >
                    Call (832) 626-0116
                  </a>
                </div>
              </div>
            </section>

            {/* After Death Services */}
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

            {/* Planning Ahead */}
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

            {/* Types of Probate */}
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

            {/* Process */}
            <section className="bg-white/5 p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <Users className="h-8 w-8 text-woodlands-gold" />
                <h2 className="text-3xl font-serif text-woodlands-gold">
                  The Texas Probate Process: What to Expect
                </h2>
              </div>
              <div className="space-y-6 text-woodlands-cream font-body">
                <p>
                  If you're facing probate for the first time, it's normal to feel overwhelmed. We make it a priority 
                  to explain each step of the process so you know what to expect.
                </p>
                
                <ol className="space-y-4 ml-4">
                  <li className="flex gap-3">
                    <span className="bg-woodlands-gold text-woodlands-purple font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <h3 className="text-xl text-woodlands-gold">Initial Consultation and Case Assessment</h3>
                      <p>We start with a free consultation to evaluate the estate and determine the proper court and type of probate process needed.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <span className="bg-woodlands-gold text-woodlands-purple font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <h3 className="text-xl text-woodlands-gold">Filing the Application</h3>
                      <p>We prepare and file a probate application with the county court, along with the will if available. There is a mandatory waiting period before the court hearing.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <span className="bg-woodlands-gold text-woodlands-purple font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <h3 className="text-xl text-woodlands-gold">Court Hearing and Appointment</h3>
                      <p>At the probate hearing, the judge formally recognizes the will if one exists, appoints the Executor or Administrator, and issues Letters Testamentary or Letters of Administration.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <span className="bg-woodlands-gold text-woodlands-purple font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <h3 className="text-xl text-woodlands-gold">Notices and Inventory</h3>
                      <p>The executor must publish notice to creditors, notify certain entities, and file an Inventory of assets with the court within 90 days of appointment.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <span className="bg-woodlands-gold text-woodlands-purple font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <h3 className="text-xl text-woodlands-gold">Estate Management</h3>
                      <p>The executor gathers assets, pays valid debts and final bills, files tax returns, and manages assets as needed to enable distribution.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <span className="bg-woodlands-gold text-woodlands-purple font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">6</span>
                    <div>
                      <h3 className="text-xl text-woodlands-gold">Distribution and Closing</h3>
                      <p>Once debts are settled, remaining assets are distributed to heirs according to the will or intestacy law, and the estate is formally closed.</p>
                    </div>
                  </li>
                </ol>
                
                <div className="bg-white/5 p-4 rounded-lg mt-6">
                  <h3 className="text-xl text-woodlands-gold">Timeline:</h3>
                  <p>
                    An uncomplicated independent probate in Texas can often be wrapped up in around 6 to 12 months. 
                    Factors like the size of the estate and complexity may extend this timeline. We work diligently to 
                    meet all deadlines and move things along efficiently.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Why Choose The Woodlands Law Firm?
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Experience and Local Knowledge</h3>
                    <p>Our attorneys have deep roots in the Houston area and are familiar with Montgomery County and Harris County probate courts, local rules, and judges.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Personalized Attention</h3>
                    <p>Estate matters are personal and sometimes emotional. We take the time to listen to your story and understand your goals.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Comprehensive Services</h3>
                    <p>We handle both probate administration and estate planning, giving us insight into the complete picture of your needs.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Compassion and Integrity</h3>
                    <p>Our firm was founded on principles of integrity and doing what's right for each client. You can expect honesty and transparency.</p>
                  </div>
                </div>
                
                <Separator className="my-6 bg-woodlands-gold/20" />
                
                <div className="flex items-center flex-wrap gap-4 justify-center">
                  <Link to="/our-firm">
                    <Button variant="outline" className="border-woodlands-cream/30 text-woodlands-cream">
                      About Our Firm
                    </Button>
                  </Link>
                  <Link to="/our-attorneys">
                    <Button variant="outline" className="border-woodlands-cream/30 text-woodlands-cream">
                      Meet Our Attorneys
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <ConsultationCTA 
              title="Need Help with Probate?"
              subtitle="Contact us for a free consultation to discuss your probate or estate administration needs."
              buttonText="Schedule a Free Consultation"
              variant="dark"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Probate;
