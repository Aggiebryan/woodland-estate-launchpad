
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-28 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-woodlands-gold leading-tight">
                Protect Your Legacy & Your Loved Ones
              </h1>
              <p className="text-xl text-woodlands-cream mt-6 md:max-w-md">
                Expert estate planning attorneys helping families in The Woodlands secure their future and protect what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                <Link to="/contact">
                  <a href="https://woodlandslaw.cliogrow.com/book"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                  <Button size="lg" className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold w-full sm:w-auto">
                    Free Consultation
                  </Button>
                 </a>
                </Link>
                <Link to="/practice-areas">
                  <Button size="lg" variant="outline" className="border-woodlands-gold text-woodlands-gold hover:bg-woodlands-gold/10 w-full sm:w-auto">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-5/12">
              <div className="bg-woodlands-darkpurple/50 rounded-lg p-6 border border-woodlands-gold/30">
                <h2 className="text-2xl font-serif text-woodlands-gold mb-4">Why Choose Us?</h2>
                <ul className="space-y-4">
                  {[
                    "Personalized estate plans tailored to your needs",
                    "20+ years of estate planning experience",
                    "Compassionate, client-focused approach",
                    "Clear, jargon-free communication",
                    "Convenient location in The Woodlands"
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <Check className="h-6 w-6 text-woodlands-gold mr-2 flex-shrink-0" />
                      <span className="text-woodlands-cream">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-woodlands-lightpurple">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-woodlands-gold">
              Our Estate Planning Services
            </h2>
            <p className="text-woodlands-cream mt-4 max-w-3xl mx-auto">
              Comprehensive legal solutions to protect your assets, provide for your loved ones, and secure your legacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: "Wills",
                description: "Ensure your assets are distributed according to your wishes with a legally binding will.",
                link: "/wills"
              },
              {
                title: "Trusts",
                description: "Protect your assets and provide for your beneficiaries with various trust options.",
                link: "/trusts"
              },
              {
                title: "Probate",
                description: "Navigate the probate process with expert guidance and representation.",
                link: "/probate"
              },
              {
                title: "Estate Planning",
                description: "Create a comprehensive plan that addresses all aspects of your estate.",
                link: "/estate-planning"
              }
            ].map((service, index) => (
              <div key={index} className="bg-woodlands-purple p-6 rounded-lg border border-woodlands-gold/20 shadow-lg hover:border-woodlands-gold/50 transition-all duration-300">
                <h3 className="text-xl font-serif font-semibold text-woodlands-gold mb-3">
                  {service.title}
                </h3>
                <p className="text-woodlands-cream mb-4">
                  {service.description}
                </p>
                <Link to={service.link} className="inline-flex items-center text-woodlands-lightgold hover:text-woodlands-gold font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-woodlands-gold">
              What Our Clients Say
            </h2>
            <p className="text-woodlands-cream mt-4 max-w-3xl mx-auto">
              Don't take our word for it. Here's what our clients have to say about working with Woodlands Estate Law.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <TestimonialCard 
              quote="The attorneys at Woodlands Estate Law made the estate planning process simple and straightforward. They explained everything clearly and created a plan that gives me peace of mind."
              author="Sarah Johnson"
              role="Client since 2020"
            />
            <TestimonialCard 
              quote="After my father passed, navigating probate seemed overwhelming. The team guided me through every step with compassion and expertise. I cannot recommend them enough."
              author="Michael Rodriguez"
              role="Probate Client"
            />
            <TestimonialCard 
              quote="Creating a trust for my special needs child was complex, but they designed a solution that perfectly met our family's unique needs. True professionals who genuinely care."
              author="Jennifer Williams"
              role="Trust Client"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <ConsultationCTA 
            variant="dark"
            title="Ready to Secure Your Legacy?"
            subtitle="Schedule your free 15-minute consultation today and take the first step toward protecting your family's future."
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
