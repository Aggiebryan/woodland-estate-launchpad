
import { Link } from "react-router-dom";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-woodlands-purple border-t border-woodlands-gold/30">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          to="/"
          className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
          onClick={onClose}
        >
          Home
        </Link>
        
        {/* About Us Dropdown */}
        <div className="relative">
          <button className="w-full text-left block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple">
            About Us
          </button>
          <div className="pl-4 bg-woodlands-darkpurple/30">
            <Link 
              to="/our-firm" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Our Firm
            </Link>
            <Link 
              to="/our-attorneys" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Meet the Attorneys
            </Link>
            <Link 
              to="/testimonials" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Testimonials
            </Link>
          </div>
        </div>
        
        {/* Services Dropdown */}
        <div className="relative">
          <button className="w-full text-left block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple">
            Services
          </button>
          <div className="pl-4 bg-woodlands-darkpurple/30">
            <Link 
              to="/wills" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Wills
            </Link>
            <Link 
              to="/trusts" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Trusts
            </Link>
            <Link 
              to="/powers-of-attorney" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Powers of Attorney
            </Link>
            <Link 
              to="/living-wills" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Living Wills & Advance Directives
            </Link>
            <Link 
              to="/probate" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Probate & Estate Administration
            </Link>
            <Link 
              to="/guardianship" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Guardianship
            </Link>
            <Link 
              to="/elder-law" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Elder Law & Medicaid Planning
            </Link>
          </div>
        </div>

        {/* Resources Dropdown */}
        <div className="relative">
          <button className="w-full text-left block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple">
            Resources
          </button>
          <div className="pl-4 bg-woodlands-darkpurple/30">
            <Link 
              to="/checklist" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Estate Planning Checklist
            </Link>
            <Link 
              to="/faqs" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              FAQ: Wills & Trusts
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Blog
            </Link>
            <Link 
              to="/glossary" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Glossary of Terms
            </Link>
          </div>
        </div>
        
        {/* Start Your Plan Dropdown */}
        <div className="relative">
          <button className="w-full text-left block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple">
            Start Your Plan
          </button>
          <div className="pl-4 bg-woodlands-darkpurple/30">
            <Link 
              to="/intake-form" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Secure Client Intake Form
            </Link>
            <Link 
              to="/will-questionnaire" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Will Questionnaire
            </Link>
            <Link 
              to="/schedule" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/virtual-planning" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Virtual Planning Options
            </Link>
          </div>
        </div>
        
        {/* Contact Us Dropdown */}
        <div className="relative">
          <button className="w-full text-left block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple">
            Contact Us
          </button>
          <div className="pl-4 bg-woodlands-darkpurple/30">
            <Link 
              to="/contact#location" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Office Location
            </Link>
            <Link 
              to="/contact#call" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Call
            </Link>
            <Link 
              to="/contact#email" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Email
            </Link>
            <Link 
              to="/contact#form" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Contact Form
            </Link>
            <Link 
              to="/contact#hours" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Office Hours
            </Link>
          </div>
        </div>
        
        <a
          href="https://woodlandslaw.cliogrow.com/book"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-3 py-2 text-center bg-woodlands-gold text-woodlands-purple font-semibold rounded-md mt-4"
          onClick={onClose}
        >
          Free Consultation
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
