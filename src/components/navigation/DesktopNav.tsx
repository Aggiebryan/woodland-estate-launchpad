
import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

const DesktopNav = () => {
  const aboutItems = [
    { label: "Our Firm", href: "/our-firm" },
    { label: "Meet the Attorneys", href: "/our-attorneys" },
    { label: "Testimonials", href: "/testimonials" },
  ];

  const servicesItems = [
    { label: "Wills", href: "/wills" },
    { label: "Trusts", href: "/trusts" },
    { label: "Powers of Attorney", href: "/powers-of-attorney" },
    { label: "Living Wills & Advance Directives", href: "/living-wills" },
    { label: "Probate & Estate Administration", href: "/probate" },
    { label: "Guardianship", href: "/guardianship" },
    { label: "Elder Law & Medicaid Planning", href: "/elder-law" },
  ];

  const resourcesItems = [
    { label: "Estate Planning Checklist", href: "/checklist" },
    { label: "FAQ: Wills & Trusts", href: "/faqs" },
    { label: "Blog", href: "/blog" },
    { label: "Glossary of Terms", href: "/glossary" },
  ];

  const startPlanItems = [
    { label: "Secure Client Intake Form", href: "/intake-form" },
    { label: "Will Questionnaire", href: "/will-questionnaire" },
    { label: "Schedule a Consultation", href: "/schedule" },
    { label: "Virtual Planning Options", href: "/virtual-planning" },
  ];

  const contactItems = [
    { label: "Office Location", href: "/contact#location" },
    { label: "Call", href: "/contact#call" },
    { label: "Email", href: "/contact#email" },
    { label: "Contact Form", href: "/contact#form" },
    { label: "Office Hours", href: "/contact#hours" },
  ];

  return (
    <div className="hidden md:flex items-center space-x-1">
      <Link to="/" className="px-3 py-2 text-woodlands-gold hover:text-woodlands-lightgold font-body">
        Home
      </Link>
      
      <NavDropdown label="About Us" items={aboutItems} />
      <NavDropdown label="Services" items={servicesItems} />
      <NavDropdown label="Resources" items={resourcesItems} />
      <NavDropdown label="Start Your Plan" items={startPlanItems} />
      <NavDropdown label="Contact Us" items={contactItems} />
    </div>
  );
};

export default DesktopNav;
