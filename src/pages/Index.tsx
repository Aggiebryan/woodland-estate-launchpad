
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
      <section className="relative py-16 md:py-28 px-4 bg-gradient-to-br from-woodlands-purple via-woodlands-darkpurple to-woodlands-lightpurple overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/eec20be5-5337-4ef4-bf2e-108bd0116fda.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
        <div className="relative max-w-7xl mx-auto backdrop-blur-sm">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold via-woodlands-lightgold to-woodlands-gold leading-tight">
                Protect Your Legacy & Your Loved Ones
              </h1>
              <p className="text-xl text-woodlands-cream/90 mt-6 md:max-w-md backdrop-blur-sm">
                Expert estate planning attorneys helping families in The Woodlands secure their future and protect what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                <Link to="/contact">
                  <a href="https://woodlandslaw.cliogrow.com/book"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                  <Button size="lg" className="bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold text-woodlands-purple hover:from-woodlands-lightgold hover:to-woodlands-gold transition-all duration-300 shadow-lg hover:shadow-woodlands-gold/20 w-full sm:w-auto">
                    Free Consultation
                  </Button>
                  </a>
                </Link>
                <Link to="/practice-areas">
                  <Button size="lg" variant="outline" className="border-2 border-woodlands-gold/30 text-woodlands-gold hover:bg-woodlands-gold/10 w-full sm:w-auto backdrop-blur-md transition-all duration-300">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-5/12">
              <div className="backdrop-blur-md bg-woodlands-darkpurple/30 rounded-lg p-6 border border-woodlands-gold/20 shadow-lg hover:shadow-woodlands-gold/10 transition-all duration-300">
                <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4">
                  Why Choose Us?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Personalized estate plans tailored to your needs",
                    "20+ years of estate planning experience",
                    "Compassionate, client-focused approach",
                    "Clear, jargon-free communication",
                    "Convenient location in The Woodlands"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center group">
                      <Check className="h-6 w-6 text-woodlands-gold mr-2 flex-shrink-0 group-hover:text-woodlands-lightgold transition-colors duration-300" />
                      <span className="text-woodlands-cream/90 group-hover:text-woodlands-cream transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-woodlands-lightpurple via-woodlands-purple to-woodlands-darkpurple relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-woodlands-gold/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold via-woodlands-lightgold to-woodlands-gold">
              Our Estate Planning Services
            </h2>
            <p className="text-woodlands-cream/90 mt-4 max-w-3xl mx-auto">
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
              <div key={index} className="group backdrop-blur-sm bg-woodlands-purple/30 p-6 rounded-lg border border-woodlands-gold/20 shadow-lg hover:shadow-woodlands-gold/10 transition-all duration-300 hover:bg-woodlands-purple/40">
                <h3 className="text-xl font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-3">
                  {service.title}
                </h3>
                <p className="text-woodlands-cream/90 mb-4 group-hover:text-woodlands-cream transition-colors duration-300">
                  {service.description}
                </p>
                <Link to={service.link} className="inline-flex items-center text-woodlands-lightgold hover:text-woodlands-gold font-medium transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-br from-woodlands-darkpurple via-woodlands-purple to-woodlands-lightpurple relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-woodlands-gold/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold via-woodlands-lightgold to-woodlands-gold">
              What Our Clients Say
            </h2>
            <p className="text-woodlands-cream/90 mt-4 max-w-3xl mx-auto">
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
      <section className="py-8 px-4 mb-16 relative">
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
