
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import OurFirm from "./pages/OurFirm";
import OurAttorneys from "./pages/OurAttorneys";
import NotFound from "./pages/NotFound";
import Wills from "./pages/Wills";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Trusts from "./pages/Trusts";
import WillsAndTrusts from "./pages/WillsAndTrusts";
import EstatePlanningLanding from "./pages/EstatePlanningLanding";
import Disclaimer from "./pages/Disclaimer";
import Privacy from "./pages/Privacy";
import Sitemap from "./pages/Sitemap";
import Terms from "./pages/Terms";
import EstateChecklist from "./pages/EstateChecklist";
import Glossary from "./pages/Glossary";
import FAQs from "./pages/FAQs";
import PowersOfAttorney from "./pages/PowersOfAttorney";
import LivingWills from "./pages/LivingWills";

// Generic component for pages under development
const UnderDevelopment = () => (
  <MainLayout>
    <div className="min-h-[60vh] bg-woodlands-purple flex items-center justify-center px-4">
      <div className="bg-white/10 p-8 rounded-lg max-w-md text-center">
        <h1 className="text-3xl font-serif text-woodlands-gold mb-4">Coming Soon</h1>
        <p className="text-woodlands-cream mb-8">
          This page is currently under development. Please check back later for updates.
        </p>
        <a 
          href="https://woodlandslaw.cliogrow.com/book" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-woodlands-gold text-woodlands-purple px-6 py-3 rounded-md font-medium hover:bg-woodlands-lightgold transition-colors"
        >
          Schedule a Free Consultation
        </a>
      </div>
    </div>
  </MainLayout>
);

// Service pages
// Removed the PowersOfAttorney component definition since we're now importing it
// Removed the LivingWills component definition since we're now importing it
const Probate = () => <UnderDevelopment />;
const Guardianship = () => <UnderDevelopment />;
const ElderLaw = () => <UnderDevelopment />;

// Resource pages
// No longer need FAQs as UnderDevelopment since we've implemented it
// No longer need Checklist as UnderDevelopment as we've implemented it
// No longer need Glossary as UnderDevelopment as we've implemented it

// Plan pages
const IntakeForm = () => <UnderDevelopment />;
const WillQuestionnaire = () => <UnderDevelopment />;
const Schedule = () => <UnderDevelopment />;
const VirtualPlanning = () => <UnderDevelopment />;

// Legal pages
// Removed the UnderDevelopment for Privacy since we now have a real page
// Removed the UnderDevelopment for Terms since we now have a real page
// Removed the UnderDevelopment for Disclaimer since we now have a real page
// Removed the UnderDevelopment for Sitemap since we now have a real page

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
          
          {/* Landing Page Route */}
          <Route path="/estate-planning" element={<EstatePlanningLanding />} />
          
          {/* Resources Routes */}
          <Route path="/checklist" element={<EstateChecklist />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
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
          
          <Route path="/wills-and-trusts" element={<WillsAndTrusts />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
