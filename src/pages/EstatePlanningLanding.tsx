
import { ArrowRight, Shield, FileText, FileKey, FileHeart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const EstatePlanningLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-woodlands-darkpurple via-woodlands-purple to-woodlands-lightpurple">
      {/* Navigation */}
      <header className="bg-woodlands-purple border-b border-woodlands-gold/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="/lovable-uploads/eec20be5-5337-4ef4-bf2e-108bd0116fda.png"
                  alt="Estate Planning"
                  className="h-12 w-auto"
                />
                <span className="ml-3 text-woodlands-gold font-serif text-xl font-semibold">
                  Estate Planning
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" className="text-woodlands-gold hover:text-white hover:bg-woodlands-gold/20">
                  Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="text-woodlands-gold hover:text-white hover:bg-woodlands-gold/20">
                  Contact
                </Button>
              </Link>
              <a 
                href="https://woodlandslaw.cliogrow.com/book" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold">
                  Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/eec20be5-5337-4ef4-bf2e-108bd0116fda.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold via-woodlands-lightgold to-woodlands-gold">
                Comprehensive Estate Planning
              </span>
            </h1>
            <p className="text-xl text-woodlands-cream/90 mb-8">
              Protect your legacy and provide for your loved ones with our expert legal guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://woodlandslaw.cliogrow.com/book"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold text-woodlands-purple hover:from-woodlands-lightgold hover:to-woodlands-gold transition-all duration-300 shadow-lg hover:shadow-woodlands-gold/20 w-full sm:w-auto">
                  Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#learn-more">
                <Button size="lg" variant="outline" className="border-2 border-woodlands-gold/30 text-woodlands-gold hover:bg-woodlands-gold/10 w-full sm:w-auto">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need Estate Planning */}
      <section id="learn-more" className="bg-white/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-woodlands-gold mb-6">
              Why Estate Planning Matters
            </h2>
            <p className="text-lg text-woodlands-cream">
              Estate planning ensures your wishes are respected, your loved ones are protected, and your legacy continues exactly as you intend.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Protect Your Loved Ones",
                description: "Ensure your family is cared for according to your wishes and avoid unnecessary legal complications during difficult times."
              },
              {
                title: "Preserve Your Legacy",
                description: "Designate exactly how your assets are distributed and maintain control over your life's work and investments."
              },
              {
                title: "Peace of Mind",
                description: "Rest easy knowing your affairs are in order and your loved ones won't face unnecessary stress or confusion."
              }
            ].map((item, i) => (
              <div key={i} className="bg-woodlands-darkpurple/40 p-6 rounded-lg border border-woodlands-gold/20 hover:border-woodlands-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-woodlands-gold/5 text-center">
                <h3 className="text-xl font-serif text-woodlands-gold mb-3">{item.title}</h3>
                <p className="text-woodlands-cream/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* First CTA */}
      <section className="bg-gradient-to-r from-woodlands-darkpurple to-woodlands-purple py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-lg border border-woodlands-gold/20 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-serif text-woodlands-gold mb-4">Ready to Protect Your Legacy?</h3>
              <p className="text-woodlands-cream mb-6">
                Our experienced estate planning attorneys will guide you through every step of the process.
              </p>
              <a 
                href="https://woodlandslaw.cliogrow.com/book"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wills Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif font-bold text-woodlands-gold">Last Will & Testament</h2>
              </div>
              <div className="space-y-4 text-woodlands-cream">
                <p>
                  A properly executed will is the foundation of any estate plan, allowing you to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Specify who receives your assets and property</li>
                  <li>Name guardians for minor children</li>
                  <li>Designate an executor to carry out your wishes</li>
                  <li>Include specific bequests for family or charitable causes</li>
                  <li>Provide instructions for digital assets and pets</li>
                </ul>
                <p>
                  Without a will, Texas law determines how your property is distributed, which may not align with your wishes.
                </p>
                <div className="pt-4">
                  <Link to="/wills">
                    <Button className="bg-woodlands-gold/20 text-woodlands-gold hover:bg-woodlands-gold/30">
                      Learn More About Wills
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-woodlands-darkpurple/40 p-6 rounded-lg border border-woodlands-gold/20">
              <h3 className="text-xl font-serif text-woodlands-gold mb-4">Key Benefits of Having a Will</h3>
              <div className="space-y-3">
                {[
                  "Control over asset distribution",
                  "Guardianship designation for minor children",
                  "Opportunity to make specific bequests",
                  "Potential reduction in estate taxes",
                  "Ability to name your preferred executor",
                  "Peace of mind for you and your family"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="h-5 w-5 rounded-full bg-woodlands-gold/20 flex items-center justify-center mr-3 group-hover:bg-woodlands-gold/40 transition-colors">
                      <ArrowRight className="h-3 w-3 text-woodlands-gold" />
                    </div>
                    <span className="text-woodlands-cream/90 group-hover:text-woodlands-cream transition-colors duration-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA */}
      <section className="bg-woodlands-darkpurple py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-woodlands-gold/10 to-transparent p-8 rounded-lg border border-woodlands-gold/30">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-serif text-woodlands-gold mb-2">Expert Estate Planning Guidance</h3>
                <p className="text-woodlands-cream">
                  Our experienced attorneys will help you create a comprehensive estate plan tailored to your needs.
                </p>
              </div>
              <div>
                <a 
                  href="tel:+18326260116" 
                  className="inline-block mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
                >
                  <Button variant="outline" className="border-woodlands-gold/50 text-woodlands-gold hover:bg-woodlands-gold/10 w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    (832) 626-0116
                  </Button>
                </a>
                <a 
                  href="https://woodlandslaw.cliogrow.com/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto"
                >
                  <Button className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold w-full">
                    Schedule Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusts Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="md:w-1/2 bg-woodlands-darkpurple/40 p-6 rounded-lg border border-woodlands-gold/20">
              <h3 className="text-xl font-serif text-woodlands-gold mb-4">Types of Trusts We Can Help You Create</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Revocable Living Trust",
                    desc: "Maintain control of assets while creating a seamless transfer plan"
                  },
                  {
                    name: "Irrevocable Trust",
                    desc: "Protect assets and reduce estate tax liability"
                  },
                  {
                    name: "Special Needs Trust",
                    desc: "Provide for loved ones while preserving benefits eligibility"
                  },
                  {
                    name: "Charitable Trust",
                    desc: "Support causes you care about while receiving tax benefits"
                  }
                ].map((trust, index) => (
                  <div key={index} className="border border-woodlands-gold/10 rounded-lg p-4 bg-woodlands-darkpurple/30 hover:bg-woodlands-darkpurple/50 transition-colors">
                    <h4 className="text-woodlands-gold font-medium mb-2">{trust.name}</h4>
                    <p className="text-sm text-woodlands-cream/80">{trust.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <Lock className="h-10 w-10 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif font-bold text-woodlands-gold">Trusts</h2>
              </div>
              <div className="space-y-4 text-woodlands-cream">
                <p>
                  Trusts offer powerful estate planning benefits beyond what a will can provide, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Avoiding probate court proceedings</li>
                  <li>Maintaining privacy of your estate</li>
                  <li>Protecting assets from creditors</li>
                  <li>Reducing estate taxes</li>
                  <li>Controlling asset distribution over time</li>
                  <li>Providing for beneficiaries with special needs</li>
                </ul>
                <p>
                  Our experienced attorneys can help determine which trust options are right for your specific situation.
                </p>
                <div className="pt-4">
                  <Link to="/trusts">
                    <Button className="bg-woodlands-gold/20 text-woodlands-gold hover:bg-woodlands-gold/30">
                      Learn More About Trusts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third CTA */}
      <section className="bg-woodlands-purple py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-serif text-woodlands-gold mb-4">Not Sure Which Estate Planning Tools You Need?</h3>
            <p className="text-woodlands-cream mb-6 max-w-2xl mx-auto">
              Our experienced attorneys will help you understand your options and create a customized plan that meets your specific needs and goals.
            </p>
            <a 
              href="https://woodlandslaw.cliogrow.com/book"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold">
                Schedule Your Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Power of Attorney Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <FileKey className="h-10 w-10 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif font-bold text-woodlands-gold">Powers of Attorney</h2>
              </div>
              <div className="space-y-4 text-woodlands-cream">
                <p>
                  Powers of attorney are essential documents that designate trusted individuals to act on your behalf if you become unable to manage your own affairs:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="font-medium text-woodlands-gold">Financial Power of Attorney:</span> Grants authority to handle financial matters</li>
                  <li><span className="font-medium text-woodlands-gold">Medical Power of Attorney:</span> Designates someone to make healthcare decisions</li>
                  <li><span className="font-medium text-woodlands-gold">Durable Power of Attorney:</span> Remains effective even if you become incapacitated</li>
                  <li><span className="font-medium text-woodlands-gold">Limited Power of Attorney:</span> Grants specific powers for particular situations</li>
                </ul>
                <p>
                  Without these documents, your family may face costly court proceedings to gain authority to act on your behalf.
                </p>
                <div className="pt-4">
                  <Link to="/powers-of-attorney">
                    <Button className="bg-woodlands-gold/20 text-woodlands-gold hover:bg-woodlands-gold/30">
                      Learn More About Powers of Attorney
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-woodlands-darkpurple/40 p-6 rounded-lg border border-woodlands-gold/20">
              <h3 className="text-xl font-serif text-woodlands-gold mb-4">Why You Need Powers of Attorney</h3>
              <div className="space-y-3">
                {[
                  "Ensure your wishes are carried out if you're unable to act",
                  "Avoid costly and time-consuming guardianship proceedings",
                  "Maintain control over who makes decisions for you",
                  "Provide clear guidance to your loved ones",
                  "Create a seamless transition of authority when needed",
                  "Protect against financial exploitation"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="h-5 w-5 rounded-full bg-woodlands-gold/20 flex items-center justify-center mr-3 group-hover:bg-woodlands-gold/40 transition-colors">
                      <ArrowRight className="h-3 w-3 text-woodlands-gold" />
                    </div>
                    <span className="text-woodlands-cream/90 group-hover:text-woodlands-cream transition-colors duration-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth CTA */}
      <section className="bg-gradient-to-r from-woodlands-purple to-woodlands-darkpurple py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-lg border border-woodlands-gold/20 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-serif text-woodlands-gold mb-4">Planning for Every Stage of Life</h3>
              <p className="text-woodlands-cream mb-6">
                Whether you're just starting out or planning your retirement, we have the expertise to help you create a comprehensive estate plan.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold mr-4">
                  Contact Us Today
                </Button>
              </Link>
              <a 
                href="https://woodlandslaw.cliogrow.com/book"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-woodlands-gold/50 text-woodlands-gold hover:bg-woodlands-gold/10">
                  Schedule a Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Living Wills and Advance Directives Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="md:w-1/2 bg-woodlands-darkpurple/40 p-6 rounded-lg border border-woodlands-gold/20">
              <h3 className="text-xl font-serif text-woodlands-gold mb-4">Key Components of Advance Directives</h3>
              <div className="space-y-4">
                <div className="p-4 border border-woodlands-gold/10 rounded-lg bg-woodlands-darkpurple/30">
                  <h4 className="text-woodlands-gold font-medium mb-2">Treatment Preferences</h4>
                  <p className="text-sm text-woodlands-cream/80">Specify your wishes for life-sustaining treatments, including resuscitation, ventilation, dialysis, and artificial nutrition.</p>
                </div>
                <div className="p-4 border border-woodlands-gold/10 rounded-lg bg-woodlands-darkpurple/30">
                  <h4 className="text-woodlands-gold font-medium mb-2">Pain Management Directives</h4>
                  <p className="text-sm text-woodlands-cream/80">Express your preferences for pain management and comfort care, even if they might hasten your passing.</p>
                </div>
                <div className="p-4 border border-woodlands-gold/10 rounded-lg bg-woodlands-darkpurple/30">
                  <h4 className="text-woodlands-gold font-medium mb-2">Personal Wishes</h4>
                  <p className="text-sm text-woodlands-cream/80">Include preferences about visitation, religious practices, or other personal matters important to your end-of-life care.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <FileHeart className="h-10 w-10 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif font-bold text-woodlands-gold">Living Wills & Advance Directives</h2>
              </div>
              <div className="space-y-4 text-woodlands-cream">
                <p>
                  Living wills and advance directives are crucial documents that communicate your healthcare wishes when you can't speak for yourself:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="font-medium text-woodlands-gold">Living Will:</span> Specifies your preferences for end-of-life medical care</li>
                  <li><span className="font-medium text-woodlands-gold">Physician's Directive:</span> Provides specific instructions for your medical providers</li>
                  <li><span className="font-medium text-woodlands-gold">HIPAA Authorizations:</span> Allows designated individuals to access your medical information</li>
                  <li><span className="font-medium text-woodlands-gold">Do Not Resuscitate (DNR) Orders:</span> Instructs healthcare providers not to perform CPR</li>
                </ul>
                <p>
                  These documents ensure your healthcare preferences are respected and relieve your loved ones of making difficult decisions during emotional times.
                </p>
                <div className="pt-4">
                  <Link to="/living-wills">
                    <Button className="bg-woodlands-gold/20 text-woodlands-gold hover:bg-woodlands-gold/30">
                      Learn More About Living Wills
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-woodlands-darkpurple py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-woodlands-gold/20 to-woodlands-purple/80 p-8 rounded-lg border border-woodlands-gold/30">
            <div className="text-center">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-4">Protect Your Legacy Today</h2>
              <p className="text-woodlands-cream mb-8 max-w-2xl mx-auto">
                Our estate planning attorneys will work with you to create a comprehensive plan that protects your assets, provides for your loved ones, and ensures your wishes are respected.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-center">
                <a 
                  href="https://woodlandslaw.cliogrow.com/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block sm:mr-4"
                >
                  <Button size="lg" className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold w-full sm:w-auto">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <div className="flex items-center justify-center">
                  <a href="tel:+18326260116" className="text-woodlands-gold hover:text-woodlands-lightgold transition-colors mr-2">
                    (832) 626-0116
                  </a>
                  <span className="text-woodlands-cream/50">or</span>
                  <a href="mailto:admin@woodlands.law" className="text-woodlands-gold hover:text-woodlands-lightgold transition-colors ml-2">
                    admin@woodlands.law
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-woodlands-darkpurple border-t border-woodlands-gold/30 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/lovable-uploads/eec20be5-5337-4ef4-bf2e-108bd0116fda.png"
                  alt="Estate Planning"
                  className="h-10 w-auto"
                />
                <span className="ml-3 text-woodlands-gold font-serif text-lg">
                  Estate Planning
                </span>
              </Link>
              <p className="text-woodlands-cream/70 mt-2 text-sm">
                2219 Sawdust Rd. Suite 803<br />
                The Woodlands, TX 77380
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <Link to="/">
                  <span className="text-woodlands-cream hover:text-woodlands-gold transition-colors">Home</span>
                </Link>
                <Link to="/our-attorneys">
                  <span className="text-woodlands-cream hover:text-woodlands-gold transition-colors">Attorneys</span>
                </Link>
                <Link to="/contact">
                  <span className="text-woodlands-cream hover:text-woodlands-gold transition-colors">Contact</span>
                </Link>
              </div>
              <div className="text-woodlands-cream/70 text-sm">
                © {new Date().getFullYear()} The Woodlands Law Firm. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default EstatePlanningLanding;
