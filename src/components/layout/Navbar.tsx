
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import DesktopNav from "../navigation/DesktopNav";
import MobileNav from "../navigation/MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-woodlands-purple border-b border-woodlands-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/eec20be5-5337-4ef4-bf2e-108bd0116fda.png"
                alt="Woodlands Estate Law"
                className="h-16 w-auto"
              />
              <span className="ml-3 text-woodlands-gold font-serif text-xl font-semibold hidden sm:block">
                Woodlands Estate Law
              </span>
            </Link>
          </div>
          
          <DesktopNav />
          
          <div className="hidden md:flex">
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
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-woodlands-gold hover:text-white hover:bg-woodlands-darkpurple"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;

