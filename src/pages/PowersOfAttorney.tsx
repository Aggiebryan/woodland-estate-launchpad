
import { FileKey, ArrowRight, Shield, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PowersOfAttorney = () => {
  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen">
        {/* Hero Section */}
        <div className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <FileKey className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
              Texas Powers of Attorney
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Protect your future and loved ones by establishing essential Power of Attorney documents 
              that safeguard your financial and healthcare decisions.
            </p>
            <div className="flex justify-center mt-8">
              <a 
                href="https://woodlandslaw.cliogrow.com/book" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-woodlands-gold hover:bg-woodlands-lightgold text-woodlands-purple font-medium px-6 py-3 rounded-md transition-colors flex items-center"
              >
                Schedule a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Plan for the Unexpected with Powers of Attorney
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  Life is unpredictable. While most people plan for what happens after they pass away, 
                  it's just as important to plan for events during your lifetime when you might be unable 
                  to make decisions. A sudden illness, accident, or decline in health could leave you 
                  incapacitated (legally unable to make your own decisions).
                </p>
                <p className="font-semibold">
                  Who will manage your finances or make medical choices for you if that happens?
                </p>
                <p>
                  Without the proper documents in place, your loved ones may have to go to court to get 
                  authority, causing stressful delays and expenses. A Power of Attorney is the legal 
                  tool that prevents this burden by empowering someone you trust to act on your behalf 
                  when you need help the most.
                </p>
                <p className="font-semibold">
                  Every adult in Texas should have Powers of Attorney, no matter your age or wealth.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl text-woodlands-gold mb-3">Who Needs Powers of Attorney?</h3>
                  <ul className="space-y-3 text-woodlands-cream">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Seniors:</strong> Plan ahead for age-related illness or memory issues.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Parents:</strong> Ensure your spouse or trusted person can manage affairs if you're seriously injured.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-2 mt-1 flex-shrink-0" />
                      <span><strong>High-Net-Worth Individuals:</strong> Protect complex financial portfolios and investments.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Business Owners:</strong> Keep your business running if you're incapacitated.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl text-woodlands-gold mb-3">Benefits of Planning Ahead</h3>
                  <ul className="space-y-3 text-woodlands-cream">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-2 mt-1 flex-shrink-0" />
                      <span>Avoid costly court proceedings for guardianship</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-2 mt-1 flex-shrink-0" />
                      <span>Ensure your affairs are managed by someone you trust</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-2 mt-1 flex-shrink-0" />
                      <span>Prevent family conflict and uncertainty</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-woodlands-gold mr-2 mt-1 flex-shrink-0" />
                      <span>Maintain control over who will make decisions for you</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* What is a Power of Attorney */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                What Is a Power of Attorney?
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  A <strong>Power of Attorney (POA)</strong> is a legal document that gives another person 
                  (your "agent" or "attorney-in-fact") the authority to make decisions and take actions on 
                  your behalf. The person who grants the power is called the "principal" (that's you). 
                  With a POA, you can appoint a trusted individual to manage your affairs if illness, 
                  injury, or other circumstances prevent you from doing so yourself.
                </p>
                <p>
                  In Texas, the two most important Powers of Attorney for estate planning purposes are:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white/10 p-6 rounded-lg border border-woodlands-gold/20">
                    <h3 className="text-xl text-woodlands-gold mb-2">Statutory Durable Power of Attorney</h3>
                    <p className="text-woodlands-cream/90">For financial and property decisions</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg border border-woodlands-gold/20">
                    <h3 className="text-xl text-woodlands-gold mb-2">Medical Power of Attorney</h3>
                    <p className="text-woodlands-cream/90">For healthcare and medical treatment decisions</p>
                  </div>
                </div>
                <p>
                  These documents are <strong>critical components of any comprehensive estate plan</strong>. 
                  They only take effect under conditions you specify – typically when you are deemed 
                  incapacitated or unable to act – and they can be customized to fit your needs.
                </p>
              </div>
            </section>

            {/* Types of POAs */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Types of Powers of Attorney
              </h2>

              {/* Financial POA */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-woodlands-gold mr-3" />
                  <h3 className="text-2xl font-serif text-woodlands-gold">Texas Statutory Durable Power of Attorney</h3>
                </div>
                <div className="space-y-4 text-woodlands-cream font-body ml-11">
                  <p>
                    A <strong>Texas Statutory Durable Power of Attorney</strong> is a legal document that lets 
                    you appoint someone to handle your <strong>financial and property matters</strong> if you cannot. 
                    "Durable" means it remains in effect even if you become mentally or physically incapacitated.
                    This is sometimes simply called a <strong>financial power of attorney</strong>. It empowers 
                    your chosen agent to step into your shoes for financial decisions, ensuring your bills get 
                    paid and assets are managed without interruption.
                  </p>
                  
                  <h4 className="text-xl text-woodlands-gold mt-6">What can a Financial POA cover?</h4>
                  <p>
                    A Statutory Durable Power of Attorney in Texas can be broad or limited, depending on how you 
                    draft it. You can give your agent authority to manage a wide range of financial tasks, such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Managing bank accounts (deposits, withdrawals, writing checks, etc.)</li>
                    <li>Paying your bills and handling day-to-day expenses</li>
                    <li>Managing real estate transactions (buying, selling, or refinancing property)</li>
                    <li>Overseeing business operations and signing business documents</li>
                    <li>Handling investment accounts, retirement accounts, and insurance matters</li>
                    <li>Filing taxes and dealing with government benefits</li>
                  </ul>
                  <p>
                    You decide which powers to grant — the document can cover <strong>almost any financial 
                    or legal transaction</strong> you could do yourself. Many people choose to have the powers 
                    "spring" into effect only if they become incapacitated (this is known as a springing 
                    power of attorney).
                  </p>
                  <p>
                    Importantly, your agent must act in your best interest and follow any instructions you include. 
                    A well-drafted Durable POA will specify your wishes and limits to prevent misuse. Texas 
                    provides a statutory POA form in the Estates Code, but it's wise to have an attorney tailor 
                    it to your situation.
                  </p>
                </div>
              </div>

              {/* Medical POA */}
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-woodlands-gold mr-3" />
                  <h3 className="text-2xl font-serif text-woodlands-gold">Texas Medical Power of Attorney</h3>
                </div>
                <div className="space-y-4 text-woodlands-cream font-body ml-11">
                  <p>
                    A <strong>Texas Medical Power of Attorney</strong> allows you to designate someone (an agent) 
                    to make <strong>healthcare decisions</strong> for you if you are unable to communicate or decide 
                    for yourself. This document is also referred to as a <strong>healthcare power of attorney</strong> or 
                    a durable power of attorney for healthcare. It is a crucial part of planning for medical 
                    emergencies and end-of-life situations, ensuring that treatment decisions will align with 
                    your wishes and be made by someone you trust.
                  </p>
                  
                  <h4 className="text-xl text-woodlands-gold mt-6">When does a Medical POA take effect?</h4>
                  <p>
                    Unlike a financial POA, a Medical Power of Attorney typically becomes active <strong>only 
                    when doctors determine that you are incapacitated and unable to make your own healthcare 
                    decisions</strong>. As long as you can understand and communicate about your treatment, 
                    you remain in charge of your medical decisions.
                  </p>
                  
                  <h4 className="text-xl text-woodlands-gold mt-6">What decisions can a Healthcare POA cover?</h4>
                  <p>
                    A Medical POA gives your agent the authority to make essentially any medical decision 
                    you could make for yourself, for example:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Discussing your condition with doctors and accessing your medical records</li>
                    <li>Deciding on treatments, surgeries, medications, or therapies</li>
                    <li>Choosing hospitals, nursing facilities, or in-home care providers</li>
                    <li>Making end-of-life care decisions in accordance with any known wishes</li>
                  </ul>
                  <p>
                    Your chosen healthcare agent is obligated to follow your known wishes as closely as possible. 
                    It's wise to talk with your agent in advance about your values, religious or moral beliefs, 
                    and preferences for care. <strong>Having a Medical POA in place means doctors and hospitals 
                    will turn to the person you trust</strong> – not a court-appointed stranger – if critical 
                    decisions must be made when you cannot speak for yourself.
                  </p>
                </div>
              </div>
            </section>

            {/* Risks and Benefits */}
            <section>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="risks" className="bg-white/5 rounded-t-lg px-8 pt-8 border-none mb-4">
                  <AccordionTrigger className="text-3xl font-serif text-woodlands-gold hover:no-underline gap-4">
                    <div className="flex items-center">
                      <AlertTriangle className="w-8 h-8 text-woodlands-gold mr-3" />
                      <span>Risks of Not Having a Power of Attorney</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-woodlands-cream space-y-4 pb-8">
                    <p className="font-body">
                      Without a Power of Attorney, your family may face serious challenges if you become incapacitated. 
                      Some risks include:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-white/10 p-5 rounded-lg">
                        <h4 className="text-woodlands-gold text-lg mb-2">Court-Appointed Guardianship</h4>
                        <p className="text-woodlands-cream/90">
                          A family member would have to petition a court to become your legal guardian, a process that is 
                          <strong> time-consuming, expensive, and stressful</strong> for loved ones.
                        </p>
                      </div>
                      <div className="bg-white/10 p-5 rounded-lg">
                        <h4 className="text-woodlands-gold text-lg mb-2">Financial Chaos</h4>
                        <p className="text-woodlands-cream/90">
                          Even your spouse or adult children could be <strong>locked out of accounts or unable to pay 
                          bills</strong> that are solely in your name.
                        </p>
                      </div>
                      <div className="bg-white/10 p-5 rounded-lg">
                        <h4 className="text-woodlands-gold text-lg mb-2">Medical Uncertainty</h4>
                        <p className="text-woodlands-cream/90">
                          Doctors will look to your nearest relatives to make decisions, which can create confusion 
                          or conflict, and you risk receiving treatments you <strong>might not have wanted</strong>.
                        </p>
                      </div>
                      <div className="bg-white/10 p-5 rounded-lg">
                        <h4 className="text-woodlands-gold text-lg mb-2">Loss of Control</h4>
                        <p className="text-woodlands-cream/90">
                          Not having a POA means <strong>you lose control over who will handle your affairs</strong>. 
                          A judge or hospital administrators may end up dictating the outcome.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="benefits" className="bg-white/5 rounded-b-lg px-8 pb-8 pt-6 border-none">
                  <AccordionTrigger className="text-3xl font-serif text-woodlands-gold hover:no-underline gap-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-8 h-8 text-woodlands-gold mr-3" />
                      <span>Benefits of Having Power of Attorney</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-woodlands-cream space-y-4 pb-8">
                    <p className="font-body">
                      Setting up a Power of Attorney offers peace of mind and practical advantages:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-white/10 p-5 rounded-lg">
                        <h4 className="text-woodlands-gold text-lg mb-2">You Remain in Control</h4>
                        <p className="text-woodlands-cream/90">
                          By naming an agent ahead of time, <i>you</i> decide who will manage your affairs rather 
                          than leaving that decision to courts or hospital staff.
                        </p>
                      </div>
                      <div className="bg-white/10 p-5 rounded-lg">
                        <h4 className="text-woodlands-gold text-lg mb-2">Quick Action in Emergencies</h4>
                        <p className="text-woodlands-cream/90">
                          Your agent can immediately step in to pay bills, talk to doctors, or take whatever actions 
                          are needed without delay.
                        </p>
                      </div>
                      <div className="bg-white/10 p-5 rounded-lg">
                        <h4 className="text-woodlands-gold text-lg mb-2">Avoiding Expensive Court Proceedings</h4>
                        <p className="text-woodlands-cream/90">
                          A properly executed Power of Attorney <strong>avoids the need for a court-appointed 
                          guardian</strong>, saving thousands in legal fees.
                        </p>
                      </div>
                      <div className="bg-white/10 p-5 rounded-lg">
                        <h4 className="text-woodlands-gold text-lg mb-2">Peace of Mind</h4>
                        <p className="text-woodlands-cream/90">
                          You and your family have peace of mind knowing there is a clear plan. Your loved ones 
                          will be <strong>empowered to help you</strong> according to your wishes.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Our Process */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Creating Your Powers of Attorney with The Woodlands Law Firm
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  <strong>At The Woodlands Law Firm, we make the process of establishing your Powers of Attorney 
                  simple and secure.</strong> Our experienced Texas estate planning attorneys are dedicated to 
                  delivering exceptional legal service. We utilize the latest technologies to offer efficient, 
                  convenient counsel – including virtual meetings and electronic document preparation – so you 
                  can complete your planning with ease.
                </p>
                <p>
                  Here's how we assist you in setting up your Medical and Durable Power of Attorney documents:
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="bg-white/10 p-6 rounded-lg border-l-4 border-woodlands-gold">
                  <h3 className="text-xl text-woodlands-gold mb-2">1. Personalized Consultation</h3>
                  <p className="text-woodlands-cream/90">
                    We begin with a free, no-obligation consultation to understand your situation and goals. 
                    We'll discuss your family dynamics, assets, and wishes for medical care. Our team will 
                    answer all your questions in plain language.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg border-l-4 border-woodlands-gold">
                  <h3 className="text-xl text-woodlands-gold mb-2">2. Customized Documents</h3>
                  <p className="text-woodlands-cream/90">
                    Our attorneys will draft POA documents tailored to your needs. We make sure the language 
                    in your documents clearly reflects your intentions, and we can integrate them seamlessly 
                    with your other estate planning tools.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg border-l-4 border-woodlands-gold">
                  <h3 className="text-xl text-woodlands-gold mb-2">3. Legal Expertise and Compliance</h3>
                  <p className="text-woodlands-cream/90">
                    We ensure your documents meet all legal requirements under Texas law, so they will be 
                    valid when needed. We'll arrange for proper notarization and witnesses as required.
                  </p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg border-l-4 border-woodlands-gold">
                  <h3 className="text-xl text-woodlands-gold mb-2">4. Review and Peace of Mind</h3>
                  <p className="text-woodlands-cream/90">
                    We review the final documents with you to confirm everything is correct. Once signed and 
                    notarized, your Powers of Attorney become effective according to their terms. You'll walk 
                    away with confidence that you have safeguarded your future.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <ConsultationCTA 
              title="Schedule a Free Consultation Today"
              subtitle="Take the first step towards protecting your future with Powers of Attorney that give you peace of mind."
              variant="dark"
            />
          </div>

          {/* Related Services */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-serif text-woodlands-gold mb-6 text-center">
              Related Estate Planning Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/wills" className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors group">
                <h3 className="text-xl text-woodlands-gold mb-2 group-hover:text-woodlands-lightgold">Wills</h3>
                <p className="text-woodlands-cream/80 mb-4">Ensure your assets are distributed according to your wishes.</p>
                <Button variant="link" className="text-woodlands-gold p-0 group-hover:text-woodlands-lightgold">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/trusts" className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors group">
                <h3 className="text-xl text-woodlands-gold mb-2 group-hover:text-woodlands-lightgold">Trusts</h3>
                <p className="text-woodlands-cream/80 mb-4">Protect assets and provide for beneficiaries with tailored trust options.</p>
                <Button variant="link" className="text-woodlands-gold p-0 group-hover:text-woodlands-lightgold">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/living-wills" className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors group">
                <h3 className="text-xl text-woodlands-gold mb-2 group-hover:text-woodlands-lightgold">Living Wills</h3>
                <p className="text-woodlands-cream/80 mb-4">Document your preferences for medical care and end-of-life decisions.</p>
                <Button variant="link" className="text-woodlands-gold p-0 group-hover:text-woodlands-lightgold">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PowersOfAttorney;
