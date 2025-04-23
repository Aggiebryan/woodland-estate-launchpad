
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavDropdown from "./NavDropdown";

const DesktopNav = () => {
  const servicesItems = [
    { label: "Wills", href: "/wills" },
    { label: "Trusts", href: "/trusts" },
    { label: "Probate", href: "/probate" },
    { label: "Estate Planning", href: "/estate-planning" },
  ];

  const aboutItems = [
    { label: "Our Firm", href: "/our-firm" },
    { label: "Our Attorneys", href: "/our-attorneys" },
  ];

  const resourcesItems = [
    { label: "Estate Planning Checklist", href: "/checklist" },
    { label: "FAQs", href: "/faqs" },
    { label: "Glossary", href: "/glossary" },
  ];

  return (
    <div className="hidden md:flex items-center space-x-1">
      <Link to="/" className="px-3 py-2 text-woodlands-gold hover:text-woodlands-lightgold font-body">
        Home
      </Link>
      
      <NavDropdown label="Services" items={servicesItems} />
      <NavDropdown label="About Us" items={aboutItems} />
      <NavDropdown label="Resources" items={resourcesItems} />
      
      <Link to="/blog" className="px-3 py-2 text-woodlands-gold hover:text-woodlands-lightgold font-body">
        Blog
      </Link>
      
      <Link to="/contact" className="px-3 py-2 text-woodlands-gold hover:text-woodlands-lightgold font-body">
        Contact
      </Link>
    </div>
  );
};

export default DesktopNav;
