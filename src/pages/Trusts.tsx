
import { Shield, Lock } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";

const Trusts = () => {
  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen">
        {/* Hero Section */}
        <div className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Shield className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
              Trust Services
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Protect your assets and ensure your legacy with customized trust solutions tailored to your unique needs.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Types of Trusts We Offer
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Revocable Living Trust</h3>
                    <p>Maintain control of your assets while creating a seamless transfer plan.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Irrevocable Trust</h3>
                    <p>Protect assets and potentially reduce estate tax liability.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Special Needs Trust</h3>
                    <p>Provide for loved ones while preserving their benefits eligibility.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Charitable Trust</h3>
                    <p>Support causes you care about while potentially receiving tax benefits.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Benefits of Creating a Trust
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Avoid probate process</li>
                  <li>Maintain privacy of your estate</li>
                  <li>Protect assets from creditors</li>
                  <li>Reduce estate taxes</li>
                  <li>Control asset distribution</li>
                  <li>Provide for minor children or special needs beneficiaries</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Why Choose Us for Your Trust Planning
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Experienced trust attorneys</li>
                  <li>Customized solutions for your unique situation</li>
                  <li>Clear communication throughout the process</li>
                  <li>Ongoing support and trust administration</li>
                  <li>Competitive, transparent pricing</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <ConsultationCTA 
              title="Ready to Protect Your Legacy?"
              subtitle="Schedule a consultation to discuss your trust planning needs."
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Trusts;
