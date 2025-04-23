
import { FileHeart } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";

const LivingWills = () => {
  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen">
        {/* Hero Section */}
        <div className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <FileHeart className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
              Living Wills & Advance Directives
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Make your healthcare wishes known and ensure they're respected with comprehensive advance care planning.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Understanding Living Wills
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  A living will, also known as an advance directive, is a legal document that specifies your preferences for end-of-life medical care. It provides clear guidance to your healthcare providers and loved ones about your wishes.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Medical Preferences</h3>
                    <p>Specify your wishes for life-sustaining treatments and end-of-life care.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Healthcare Decisions</h3>
                    <p>Make informed choices about your medical treatment in advance.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Key Components
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Medical treatment preferences</li>
                  <li>Pain management directives</li>
                  <li>Organ donation wishes</li>
                  <li>Life-sustaining treatment choices</li>
                  <li>Religious or personal beliefs consideration</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <ConsultationCTA 
              title="Plan for Your Healthcare Future"
              subtitle="Get expert guidance on living wills and advance directives."
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LivingWills;
