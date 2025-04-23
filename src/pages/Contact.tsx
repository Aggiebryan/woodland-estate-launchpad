import MainLayout from "@/components/layout/MainLayout";
import ConsultationForm from "@/components/shared/ConsultationForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-woodlands-gold">Contact Us</h1>
          <p className="text-woodlands-cream mt-4 max-w-3xl mx-auto">
            Schedule your free 15-minute consultation or reach out with any questions about our estate planning services.
          </p>
        </div>
        
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
          
          {/* Contact Form */}
          <div className="bg-woodlands-lightpurple p-8 rounded-lg border border-woodlands-gold/20">
            <h2 className="text-2xl font-serif font-semibold text-woodlands-gold mb-6">
              Free Consultation Request
            </h2>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
