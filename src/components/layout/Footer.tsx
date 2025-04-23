
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-woodlands-darkpurple text-woodlands-gold pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/eec20be5-5337-4ef4-bf2e-108bd0116fda.png"
                alt="Woodlands Estate Law"
                className="h-12 w-auto mr-3"
              />
              <h3 className="font-serif text-xl font-semibold">Woodlands Estate Law</h3>
            </div>
            <p className="text-woodlands-cream opacity-80 mb-4 font-body">
              We provide comprehensive estate planning services to protect your legacy and your loved ones.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/woodlandslaw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-woodlands-gold hover:text-woodlands-lightgold transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/woodlandslaw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-woodlands-gold hover:text-woodlands-lightgold transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a 
                href="https://x.com/woodlands_law" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-woodlands-gold hover:text-woodlands-lightgold transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M18.901 1.153h3.68l-8.04 9.557L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.353l8.15-9.108L0 1.153h7.594l5.243 6.932zM16.9 20.777h2.042L7.089 3.245H4.907z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-serif text-xl font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/wills" className="text-woodlands-cream opacity-80 hover:opacity-100 hover:text-woodlands-lightgold transition-colors">
                  Wills
                </Link>
              </li>
              <li>
                <Link to="/trusts" className="text-woodlands-cream opacity-80 hover:opacity-100 hover:text-woodlands-lightgold transition-colors">
                  Trusts
                </Link>
              </li>
              <li>
                <Link to="/probate" className="text-woodlands-cream opacity-80 hover:opacity-100 hover:text-woodlands-lightgold transition-colors">
                  Probate
                </Link>
              </li>
              <li>
                <Link to="/estate-planning" className="text-woodlands-cream opacity-80 hover:opacity-100 hover:text-woodlands-lightgold transition-colors">
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-woodlands-cream opacity-80 hover:opacity-100 hover:text-woodlands-lightgold transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 font-body">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-woodlands-lightgold" />
                <span className="text-woodlands-cream opacity-80">
                  2219 Sawdust Rd.<br />
                  Suite 803<br />
                  The Woodlands, TX 77380
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-woodlands-lightgold" />
                <a
                  href="tel:+18326260116"
                  className="text-woodlands-cream opacity-80 hover:opacity-100 hover:text-woodlands-lightgold transition-colors"
                >
                  (832) 626-0116
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-woodlands-lightgold" />
                <a
                  href="mailto:admin@woodlands.law"
                  className="text-woodlands-cream opacity-80 hover:opacity-100 hover:text-woodlands-lightgold transition-colors"
                >
                  admin@woodlands.law
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-woodlands-gold/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-woodlands-cream opacity-80 text-sm mb-4 md:mb-0">
              &copy; {currentYear} The Woodlands Law Firm. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm font-body">
              <Link to="/privacy" className="text-woodlands-cream opacity-80 hover:opacity-100 hover:text-woodlands-lightgold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-woodlands-cream opacity-80 hover:opacity-100 hover:text-woodlands-lightgold transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-woodlands-cream opacity-80 hover:opacity-100 hover:text-woodlands-lightgold transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
