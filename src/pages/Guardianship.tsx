
import { UserCheck } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";

const Guardianship = () => {
  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen">
        {/* Hero Section */}
        <div className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <UserCheck className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
              Guardianship Services
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Compassionate legal guidance for establishing and managing guardianships in Texas.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Types of Guardianship
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Guardian of the Person</h3>
                    <p>Responsible for personal care, custody, and protection.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Guardian of the Estate</h3>
                    <p>Manages financial affairs and property.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Minor Guardianship</h3>
                    <p>Protection for children under 18.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-woodlands-gold">Adult Guardianship</h3>
                    <p>Care for incapacitated adults.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                When Is Guardianship Needed?
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mental or physical incapacity</li>
                  <li>Protection of minors</li>
                  <li>Management of inherited assets</li>
                  <li>Care for elderly individuals</li>
                  <li>Special needs situations</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <ConsultationCTA 
              title="Protect Your Loved Ones"
              subtitle="Learn about guardianship options and get expert guidance."
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Guardianship;
