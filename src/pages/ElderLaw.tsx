
import { HeartHandshake } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";

const ElderLaw = () => {
  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen">
        {/* Hero Section */}
        <div className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <HeartHandshake className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
              Elder Law & Medicaid Planning
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Comprehensive legal services for seniors and their families, including Medicaid planning and asset protection.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Our Elder Law Services
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Medicaid Planning</h3>
                    <p>Strategic planning to qualify for benefits while protecting assets.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Long-term Care Planning</h3>
                    <p>Prepare for future healthcare and living assistance needs.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Asset Protection</h3>
                    <p>Preserve wealth while qualifying for benefits.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Veterans Benefits</h3>
                    <p>Assistance with VA benefits and planning.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Medicaid Planning Strategies
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Asset protection trusts</li>
                  <li>Spend-down planning</li>
                  <li>Income planning</li>
                  <li>Gift and transfer strategies</li>
                  <li>Crisis planning options</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <ConsultationCTA 
              title="Secure Your Future Care"
              subtitle="Get expert guidance on elder law and Medicaid planning."
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ElderLaw;
