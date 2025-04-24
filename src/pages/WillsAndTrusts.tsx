
import { Shield, Check, ArrowRight } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WillsAndTrusts = () => {
  const benefits = [
    "Protection of assets for future generations",
    "Tax benefits and savings",
    "Control over asset distribution",
    "Privacy in estate administration",
    "Avoiding probate court proceedings",
    "Peace of mind for your family"
  ];

  const services = [
    {
      title: "Last Will and Testament",
      description: "Ensure your assets are distributed according to your wishes and designate guardians for minor children."
    },
    {
      title: "Revocable Living Trust",
      description: "Maintain control of your assets during your lifetime while providing for seamless transfer upon death."
    },
    {
      title: "Special Needs Trust",
      description: "Provide for loved ones with disabilities while preserving their eligibility for government benefits."
    },
    {
      title: "Asset Protection Trust",
      description: "Shield your assets from creditors and legal claims while maintaining some control over them."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-woodlands-darkpurple py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-16 h-16 text-woodlands-gold mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
            Wills & Trusts in The Woodlands
          </h1>
          <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg">
            Protect your legacy and provide for your loved ones with comprehensive estate planning solutions.
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="https://woodlandslaw.cliogrow.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold">
                Schedule a Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-woodlands-purple py-16">
        <div className="container mx-auto px-4">
          {/* Overview Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Comprehensive Estate Planning Solutions
              </h2>
              <p className="text-woodlands-cream mb-6">
                At Woodlands Estate Law, we understand that planning for the future of your estate is a deeply personal matter. Our experienced attorneys work closely with you to create a customized estate plan that protects your assets and ensures your wishes are carried out.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-woodlands-darkpurple/50 p-6 rounded-lg border border-woodlands-gold/20">
                  <h3 className="text-xl font-serif text-woodlands-gold mb-4">Why Choose Our Service?</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-woodlands-gold mr-2 flex-shrink-0 mt-1" />
                        <span className="text-woodlands-cream">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-woodlands-darkpurple/50 p-6 rounded-lg border border-woodlands-gold/20">
                  <h3 className="text-xl font-serif text-woodlands-gold mb-4">Our Service Areas</h3>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="mb-4">
                        <h4 className="text-woodlands-gold font-semibold mb-1">{service.title}</h4>
                        <p className="text-woodlands-cream text-sm">{service.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Our Estate Planning Process
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    step: "1",
                    title: "Initial Consultation",
                    description: "Meet with our attorneys to discuss your goals and concerns."
                  },
                  {
                    step: "2",
                    title: "Plan Development",
                    description: "We create a customized estate plan tailored to your needs."
                  },
                  {
                    step: "3",
                    title: "Implementation",
                    description: "Execute your estate planning documents and ensure everything is in order."
                  }
                ].map((phase, index) => (
                  <div key={index} className="bg-woodlands-darkpurple/50 p-6 rounded-lg border border-woodlands-gold/20">
                    <div className="text-woodlands-gold text-2xl font-serif mb-2">Step {phase.step}</div>
                    <h3 className="text-woodlands-gold font-semibold mb-2">{phase.title}</h3>
                    <p className="text-woodlands-cream">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section>
            <ConsultationCTA 
              title="Ready to Protect Your Legacy?"
              subtitle="Schedule a free consultation to discuss your estate planning needs."
              variant="dark"
            />
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default WillsAndTrusts;
