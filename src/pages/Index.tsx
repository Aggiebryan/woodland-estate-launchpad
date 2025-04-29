import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { Button } from "@/components/ui/button";
import ConsultationForm from "@/components/shared/ConsultationForm";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-28 px-4 bg-gradient-to-br from-woodlands-purple via-woodlands-darkpurple to-woodlands-lightpurple overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/eec20be5-5337-4ef4-bf2e-108bd0116fda.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
        <div className="relative max-w-7xl mx-auto backdrop-blur-sm">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                <span className="text-white">Protect </span> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold via-woodlands-lightgold to-woodlands-gold">Your Legacy</span> 
                <span className="text-white"> & Your Loved Ones</span>
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

      {/* Expertise in Action Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-woodlands-darkpurple mb-2">
                  Expertise in Action:
                </h2>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-6">
                  Meet Our Attorneys
                </h3>
                <p className="text-woodlands-darkpurple mb-6 leading-relaxed">
                  At The Woodlands Law Firm, our skilled attorneys are dedicated to delivering exceptional legal services, 
                  utilizing the latest technologies to offer efficient solutions with a strong commitment to client satisfaction.
                </p>
                <p className="text-woodlands-darkpurple mb-8 leading-relaxed">
                  Our proven track record of success, exceptional approach, and commitment to keeping our clients 
                  informed throughout every step of the legal process are what set us apart.
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-woodlands-gold/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="h-5 w-5 text-woodlands-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-1">Extensive Experience</h4>
                    <p className="text-woodlands-darkpurple">Our team brings decades of combined experience in estate planning and probate law.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-woodlands-gold/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="h-5 w-5 text-woodlands-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-1">Personalized Approach</h4>
                    <p className="text-woodlands-darkpurple">We take the time to understand your unique needs and goals to create tailored solutions.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-woodlands-gold/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="h-5 w-5 text-woodlands-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-1">Ongoing Support</h4>
                    <p className="text-woodlands-darkpurple">We provide continued support to ensure your estate plan remains current and effective.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/our-attorneys">
                <Button size="lg" className="bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold text-woodlands-purple hover:from-woodlands-lightgold hover:to-woodlands-gold transition-all duration-300 shadow-lg hover:shadow-woodlands-gold/20 w-full sm:w-auto">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="md:w-5/12">
              <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="/lovable-uploads/9ff24536-21a2-4073-beec-ecc9a5e333c9.png" 
                  alt="The Woodlands Law Firm Attorneys" 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-woodlands-darkpurple">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold via-woodlands-lightgold to-woodlands-gold">Estate Planning</span> Services
            </h2>
            <p className="text-woodlands-darkpurple mt-4 max-w-3xl mx-auto">
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
              <div key={index} className="group bg-white p-6 rounded-lg border border-woodlands-darkpurple/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-woodlands-gold/20">
                <h3 className="text-xl font-serif font-semibold text-woodlands-purple mb-3">
                  {service.title}
                </h3>
                <p className="text-woodlands-darkpurple mb-4 group-hover:text-woodlands-purple transition-colors duration-300">
                  {service.description}
                </p>
                <Link to={service.link} className="inline-flex items-center text-woodlands-gold hover:text-woodlands-lightgold font-medium transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-r from-woodlands-darkpurple via-woodlands-purple to-woodlands-lightpurple relative overflow-hidden">
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

      {/* Call to Action with Consultation Form */}
      <section className="py-16 px-4 bg-gradient-to-tr from-woodlands-darkpurple via-woodlands-purple to-woodlands-lightpurple relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* CTA Left side */}
            <div className="bg-woodlands-darkpurple p-8 rounded-lg border border-woodlands-gold/20 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-woodlands-gold mb-4">
                Ready to Secure Your Legacy?
              </h2>
              <p className="text-woodlands-cream/90 mb-6">
                Take the first step toward protecting your family's future with expert estate planning guidance. Our attorneys are ready to help you create a plan tailored to your unique needs.
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-woodlands-gold/20 rounded-full flex items-center justify-center mr-4">
                    <Check className="h-5 w-5 text-woodlands-gold" />
                  </div>
                  <p className="text-woodlands-cream/90">Free 15-minute initial consultation</p>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-woodlands-gold/20 rounded-full flex items-center justify-center mr-4">
                    <Check className="h-5 w-5 text-woodlands-gold" />
                  </div>
                  <p className="text-woodlands-cream/90">Personalized estate planning strategies</p>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-woodlands-gold/20 rounded-full flex items-center justify-center mr-4">
                    <Check className="h-5 w-5 text-woodlands-gold" />
                  </div>
                  <p className="text-woodlands-cream/90">Clear, jargon-free communication</p>
                </div>
              </div>
              
              <div className="mt-8 hidden md:block">
                <a
                  href="tel:+18326260116"
                  className="inline-flex items-center text-woodlands-gold hover:text-woodlands-lightgold transition-colors"
                >
                  <span className="font-medium">Call us now:</span>
                  <span className="ml-2 text-woodlands-lightgold">(832) 626-0116</span>
                </a>
              </div>
            </div>
            
            {/* Consultation Form */}
            <div className="bg-woodlands-lightpurple p-8 rounded-lg border border-woodlands-gold/20 shadow-lg">
              <h2 className="text-2xl font-serif font-semibold text-woodlands-gold mb-6">
                Free Consultation Request
              </h2>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
