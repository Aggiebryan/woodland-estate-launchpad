
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
              to="/probate" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Probate
            </Link>
            <Link 
              to="/estate-planning" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Estate Planning
            </Link>
          </div>
        </div>
        
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
              Our Attorneys
            </Link>
          </div>
        </div>

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
              FAQs
            </Link>
            <Link 
              to="/glossary" 
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={onClose}
            >
              Glossary
            </Link>
          </div>
        </div>
        
        <Link
          to="/blog"
          className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
          onClick={onClose}
        >
          Blog
        </Link>
        
        <Link
          to="/contact"
          className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
          onClick={onClose}
        >
          Contact
        </Link>
        
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
