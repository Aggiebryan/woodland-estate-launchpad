
import { FileKey } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";

const PowersOfAttorney = () => {
  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen">
        {/* Hero Section */}
        <div className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <FileKey className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
              Powers of Attorney
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Ensure your affairs are managed according to your wishes with comprehensive power of attorney documents.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Types of Powers of Attorney
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Financial Power of Attorney</h3>
                    <p>Designate someone to manage your financial affairs.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Medical Power of Attorney</h3>
                    <p>Appoint someone to make healthcare decisions on your behalf.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Durable Power of Attorney</h3>
                    <p>Remains effective even if you become incapacitated.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Limited Power of Attorney</h3>
                    <p>Grants specific powers for particular transactions or time periods.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Why You Need a Power of Attorney
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ensure your wishes are carried out if you're unable to act</li>
                  <li>Avoid costly court proceedings for guardianship</li>
                  <li>Maintain control over who makes decisions for you</li>
                  <li>Peace of mind for you and your family</li>
                  <li>Protection against financial exploitation</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <ConsultationCTA 
              title="Plan for Your Future Today"
              subtitle="Get expert guidance on powers of attorney and protect your interests."
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PowersOfAttorney;
