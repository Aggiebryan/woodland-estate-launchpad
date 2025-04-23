
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-woodlands-gold hover:text-woodlands-lightgold font-body">
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="px-3 py-2 text-woodlands-gold hover:text-woodlands-purple hover:bg-woodlands-gold/20 font-body flex items-center gap-1"
                >
                  Practice Areas
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-52">
                <DropdownMenuItem asChild>
                  <Link to="/wills" className="w-full px-4 py-2 hover:bg-woodlands-cream text-woodlands-purple">Wills</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/trusts" className="w-full px-4 py-2 hover:bg-woodlands-cream text-woodlands-purple">Trusts</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/probate" className="w-full px-4 py-2 hover:bg-woodlands-cream text-woodlands-purple">Probate</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/estate-planning" className="w-full px-4 py-2 hover:bg-woodlands-cream text-woodlands-purple">Estate Planning</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="px-3 py-2 text-woodlands-gold hover:text-woodlands-purple hover:bg-woodlands-gold/20 font-body flex items-center gap-1"
                >
                  About Us
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-52">
                <DropdownMenuItem asChild>
                  <Link to="/our-firm" className="w-full px-4 py-2 hover:bg-woodlands-cream text-woodlands-purple">Our Firm</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/our-attorneys" className="w-full px-4 py-2 hover:bg-woodlands-cream text-woodlands-purple">Our Attorneys</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/blog" className="px-3 py-2 text-woodlands-gold hover:text-woodlands-lightgold font-body">
              Blog
            </Link>
            
            <Link to="/contact" className="px-3 py-2 text-woodlands-gold hover:text-woodlands-lightgold font-body">
              Contact
            </Link>
          </div>
          
          <div className="hidden md:flex">
            <a href="https://woodlandslaw.cliogrow.com/book" target="_blank" rel="noopener noreferrer">
              <Button className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold">
                Free Consultation
              </Button>
            </a>
          </div>
          
          {/* Mobile Navigation Toggle */}
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
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-woodlands-purple border-t border-woodlands-gold/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <div className="relative">
              <button className="w-full text-left block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple">
                Practice Areas
              </button>
              <div className="pl-4 bg-woodlands-darkpurple/30">
                <Link 
                  to="/wills" 
                  className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
                  onClick={() => setIsOpen(false)}
                >
                  Wills
                </Link>
                <Link 
                  to="/trusts" 
                  className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
                  onClick={() => setIsOpen(false)}
                >
                  Trusts
                </Link>
                <Link 
                  to="/probate" 
                  className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
                  onClick={() => setIsOpen(false)}
                >
                  Probate
                </Link>
                <Link 
                  to="/estate-planning" 
                  className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
                  onClick={() => setIsOpen(false)}
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
                  onClick={() => setIsOpen(false)}
                >
                  Our Firm
                </Link>
                <Link 
                  to="/our-attorneys" 
                  className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
                  onClick={() => setIsOpen(false)}
                >
                  Our Attorneys
                </Link>
              </div>
            </div>
            
            <Link
              to="/blog"
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className="block px-3 py-2 text-woodlands-gold font-body hover:bg-woodlands-darkpurple"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            <a
              href="https://woodlandslaw.cliogrow.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-center bg-woodlands-gold text-woodlands-purple font-semibold rounded-md mt-4"
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
