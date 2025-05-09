
import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";
import { ListTree, ChevronRight } from "lucide-react";

const Sitemap = () => {
  // Groups of routes organized by category
  const routeGroups = [
    {
      title: "Main Pages",
      routes: [
        { path: "/", label: "Home" },
        { path: "/our-firm", label: "Our Firm" },
        { path: "/our-attorneys", label: "Our Attorneys" },
        { path: "/contact", label: "Contact" },
        { path: "/testimonials", label: "Testimonials" },
      ],
    },
    {
      title: "Estate Planning Services",
      routes: [
        { path: "/estate-planning", label: "Estate Planning" },
        { path: "/wills", label: "Wills" },
        { path: "/trusts", label: "Trusts" },
        { path: "/wills-and-trusts", label: "Wills & Trusts" },
        { path: "/powers-of-attorney", label: "Powers of Attorney" },
        { path: "/living-wills", label: "Living Wills" },
        { path: "/probate", label: "Probate" },
        { path: "/guardianship", label: "Guardianship" },
        { path: "/elder-law", label: "Elder Law" },
      ],
    },
    {
      title: "Resources",
      routes: [
        { path: "/blog", label: "Blog" },
        { path: "/faqs", label: "FAQs" },
        { path: "/checklist", label: "Estate Planning Checklist" },
        { path: "/glossary", label: "Glossary" },
      ],
    },
    {
      title: "Start Your Plan",
      routes: [
        { path: "/intake-form", label: "Intake Form" },
        { path: "/will-questionnaire", label: "Will Questionnaire" },
        { path: "/schedule", label: "Schedule a Consultation" },
        { path: "/virtual-planning", label: "Virtual Planning" },
      ],
    },
    {
      title: "Legal Information",
      routes: [
        { path: "/privacy", label: "Privacy Policy" },
        { path: "/terms", label: "Terms of Use" },
        { path: "/disclaimer", label: "Disclaimer" },
        { path: "/sitemap", label: "Sitemap" },
      ],
    },
    {
      title: "Special Topics",
      routes: [
        { path: "/estate-planning-for-parents", label: "Estate Planning for Parents" },
        { path: "/estate-planning-for-business-owners", label: "Estate Planning for Business Owners" },
        { path: "/avoiding-probate-in-texas", label: "Avoiding Probate in Texas" },
        { path: "/why-need-will-in-texas", label: "Why You Need a Will in Texas" },
        { path: "/dying-without-will-texas", label: "Dying Without a Will in Texas" },
        { path: "/revocable-living-trust", label: "Revocable Living Trust" },
        { path: "/diy-vs-attorney-wills", label: "DIY vs Attorney Wills" },
        { path: "/trusts-vs-wills-texas", label: "Trusts vs Wills in Texas" },
        { path: "/executor-duties-texas", label: "Executor Duties in Texas" },
        { path: "/medicaid-spend-down-strategies", label: "Medicaid Spend Down Strategies" },
      ],
    },
  ];

  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <ListTree className="w-12 h-12 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-12">
              Site Map
            </h1>
            
            <div className="bg-white/5 rounded-lg p-8 shadow-lg">
              {routeGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="mb-10 last:mb-0">
                  <h2 className="text-2xl font-serif text-woodlands-gold mb-4 pb-2 border-b border-woodlands-gold/20">
                    {group.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {group.routes.map((route, routeIndex) => (
                      <Link
                        key={routeIndex}
                        to={route.path}
                        className="flex items-center text-woodlands-cream hover:text-woodlands-lightgold transition-colors py-2"
                      >
                        <ChevronRight className="h-4 w-4 mr-2 text-woodlands-gold" />
                        <span className="font-body">{route.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-woodlands-cream/80 text-sm">
                Can't find what you're looking for?{" "}
                <Link to="/contact" className="text-woodlands-lightgold hover:underline">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Sitemap;
