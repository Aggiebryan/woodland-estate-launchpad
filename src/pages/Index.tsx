
import { Link } from "react-router-dom";
import { ArrowRight, Check, Mail, Phone, MapPin, Clock } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
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
                description: "Create a legally binding document that ensures your assets are distributed according to your wishes after your passing.",
                link: "/wills",
                iconSrc: "/lovable-uploads/8b5c5d4f-c6d1-4353-a4d4-fd05f736eef9.png"
              },
              {
                title: "Trusts",
                description: "Establish a trust to protect your assets, minimize taxes, and provide for your beneficiaries with greater control and privacy.",
                link: "/trusts",
                iconSrc: "/lovable-uploads/d2ad99e0-04d1-4f80-93bc-cfaa208623b4.png"
              },
              {
                title: "Guardianship",
                description: "Secure legal guardianship arrangements for minor children or loved ones who require assistance with decision-making.",
                link: "/guardianship",
                iconSrc: "/lovable-uploads/d2ad99e0-04d1-4f80-93bc-cfaa208623b4.png"
              },
              {
                title: "Probate",
                description: "Navigate the probate process efficiently with expert guidance to settle estates and transfer assets to beneficiaries.",
                link: "/probate",
                iconSrc: "/lovable-uploads/a4a9913f-1fdf-4474-88a6-ca5984befa57.png"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white p-6 rounded-lg border border-woodlands-darkpurple/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-woodlands-gold/20">
                <div className="flex justify-center mb-4">
                  <img src={service.iconSrc} alt={service.title} className="h-16 w-16" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-woodlands-purple mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-woodlands-darkpurple mb-4 group-hover:text-woodlands-purple transition-colors duration-300">
                  {service.description}
                </p>
                <div className="text-center">
                  <Link to={service.link} className="inline-flex items-center text-woodlands-gold hover:text-woodlands-lightgold font-medium transition-colors duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-b from-woodlands-darkpurple via-woodlands-purple to-woodlands-purple relative overflow-hidden">
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
              quote="I have worked with Gwen many times and she is not only brilliant but a passionate advocate for her clients.  I highly recommend Gwen!!!"
              author="Lisa B"
              role="Client since 2019"
            />
            <TestimonialCard 
              quote="This law firm is Outstanding. When I had questions / concerns they responded in less than 24hr. They were very easy to work with and got my case settled quickly."
              author="Kimberly P"
              role="Client Since 2024"
            />
            <TestimonialCard 
              quote="This law firm is hands down the best. We were treated like family and our matter was resolved quickly and efficiently. We will always use The Woodlands Law Firm and Gwendolyn Simpson for any matter we may need help with."
              author="Madison G"
              role="Client Since 2024"
            />
          </div>
        </div>
      </section>

      {/* Call to Action with Consultation Form */}
      <section className="py-16 px-4 bg-gradient-to-t from-woodlands-darkpurple via-woodlands-purple to-woodlands-purple relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-woodlands-darkpurple p-8 rounded-lg border border-woodlands-gold/20">
              <h2 className="text-2xl font-serif font-semibold text-woodlands-gold mb-6">
                Get in Touch
              </h2>
              
              <ul className="space-y-6">
                <li className="flex">
                  <Phone className="h-6 w-6 text-woodlands-gold mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-woodlands-lightgold">Phone</p>
                    <a 
                      href="tel:+18326260116" 
                      className="text-woodlands-cream hover:text-woodlands-gold transition-colors"
                    >
                      (832) 626-0116
                    </a>
                  </div>
                </li>
                
                <li className="flex">
                  <Mail className="h-6 w-6 text-woodlands-gold mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-woodlands-lightgold">Email</p>
                    <a 
                      href="mailto:admin@woodlands.law"
                      className="text-woodlands-cream hover:text-woodlands-gold transition-colors"
                    >
                      admin@woodlands.law
                    </a>
                  </div>
                </li>
                
                <li className="flex">
                  <Clock className="h-6 w-6 text-woodlands-gold mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-woodlands-lightgold">Hours</p>
                    <p className="text-woodlands-cream">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <MapPin className="h-6 w-6 text-woodlands-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-woodlands-lightgold">Office</p>
                    <p className="text-woodlands-cream">
                      2219 Sawdust Rd.<br />
                      Suite 803<br />
                      The Woodlands, TX 77380
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-woodlands-gold/20">
                <h3 className="text-xl font-serif text-woodlands-gold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/woodlandslaw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-woodlands-gold/10 hover:bg-woodlands-gold/20 text-woodlands-gold p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/woodlandslaw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-woodlands-gold/10 hover:bg-woodlands-gold/20 text-woodlands-gold p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/woodlands_law" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-woodlands-gold/10 hover:bg-woodlands-gold/20 text-woodlands-gold p-3 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18.901 1.153h3.68l-8.04 9.557L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.353l8.15-9.108L0 1.153h7.594l5.243 6.932zM16.9 20.777h2.042L7.089 3.245H4.907z" />
                    </svg>
                  </a>
                </div>
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
