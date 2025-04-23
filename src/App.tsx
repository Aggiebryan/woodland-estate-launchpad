
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import OurFirm from "./pages/OurFirm";
import OurAttorneys from "./pages/OurAttorneys";
import NotFound from "./pages/NotFound";
import Wills from "./pages/Wills";

// Generic component for pages under development
const UnderDevelopment = () => (
  <div className="min-h-screen bg-woodlands-purple flex items-center justify-center">
    <div className="bg-white/10 p-8 rounded-lg max-w-md text-center">
      <h1 className="text-3xl font-serif text-woodlands-gold mb-4">Coming Soon</h1>
      <p className="text-woodlands-cream">
        This page is currently under development. Please check back later for updates.
      </p>
    </div>
  </div>
);

// Service pages
const Trusts = () => <UnderDevelopment />;
const PowersOfAttorney = () => <UnderDevelopment />;
const LivingWills = () => <UnderDevelopment />;
const Probate = () => <UnderDevelopment />;
const Guardianship = () => <UnderDevelopment />;
const ElderLaw = () => <UnderDevelopment />;

// Resource pages
const Blog = () => <UnderDevelopment />;
const Checklist = () => <UnderDevelopment />;
const FAQs = () => <UnderDevelopment />;
const Glossary = () => <UnderDevelopment />;

// Plan pages
const IntakeForm = () => <UnderDevelopment />;
const WillQuestionnaire = () => <UnderDevelopment />;
const Schedule = () => <UnderDevelopment />;
const VirtualPlanning = () => <UnderDevelopment />;

// Legal pages
const Privacy = () => <UnderDevelopment />;
const Terms = () => <UnderDevelopment />;
const Disclaimer = () => <UnderDevelopment />;
const Sitemap = () => <UnderDevelopment />;

// SEO-focused landing pages
const ParentsWithMinorChildren = () => <UnderDevelopment />;
const BusinessOwners = () => <UnderDevelopment />;
const AvoidingProbate = () => <UnderDevelopment />;
const WhyNeedWill = () => <UnderDevelopment />;
const DieWithoutWill = () => <UnderDevelopment />;
const RevocableLivingTrust = () => <UnderDevelopment />;
const DIYvsAttorneyWills = () => <UnderDevelopment />;
const ComparingTrustsWills = () => <UnderDevelopment />;
const ExecutorDuties = () => <UnderDevelopment />;
const MedicaidStrategies = () => <UnderDevelopment />;
const Testimonials = () => <UnderDevelopment />;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main Navigation Routes */}
          <Route path="/our-firm" element={<OurFirm />} />
          <Route path="/our-attorneys" element={<OurAttorneys />} />
          <Route path="/testimonials" element={<Testimonials />} />
          
          {/* Services Routes */}
          <Route path="/wills" element={<Wills />} />
          <Route path="/trusts" element={<Trusts />} />
          <Route path="/powers-of-attorney" element={<PowersOfAttorney />} />
          <Route path="/living-wills" element={<LivingWills />} />
          <Route path="/probate" element={<Probate />} />
          <Route path="/guardianship" element={<Guardianship />} />
          <Route path="/elder-law" element={<ElderLaw />} />
          
          {/* Resources Routes */}
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/glossary" element={<Glossary />} />
          
          {/* Start Your Plan Routes */}
          <Route path="/intake-form" element={<IntakeForm />} />
          <Route path="/will-questionnaire" element={<WillQuestionnaire />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/virtual-planning" element={<VirtualPlanning />} />
          
          {/* Contact Routes */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Legal Pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
          {/* SEO-Focused Landing Pages */}
          <Route path="/estate-planning-for-parents" element={<ParentsWithMinorChildren />} />
          <Route path="/estate-planning-for-business-owners" element={<BusinessOwners />} />
          <Route path="/avoiding-probate-in-texas" element={<AvoidingProbate />} />
          <Route path="/why-need-will-in-texas" element={<WhyNeedWill />} />
          <Route path="/dying-without-will-texas" element={<DieWithoutWill />} />
          <Route path="/revocable-living-trust" element={<RevocableLivingTrust />} />
          <Route path="/diy-vs-attorney-wills" element={<DIYvsAttorneyWills />} />
          <Route path="/trusts-vs-wills-texas" element={<ComparingTrustsWills />} />
          <Route path="/executor-duties-texas" element={<ExecutorDuties />} />
          <Route path="/medicaid-spend-down-strategies" element={<MedicaidStrategies />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
