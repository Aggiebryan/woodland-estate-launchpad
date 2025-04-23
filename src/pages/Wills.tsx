
import { Shield } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";

const Wills = () => {
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
              Wills & Estate Planning
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Protect your legacy and ensure your wishes are carried out with a professionally drafted will. Our experienced attorneys will guide you through the process.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Purpose of a Will */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Why Do I Need a Will?
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  A will is a legal document that ensures your assets are distributed according to your wishes after your death. Without a will, Texas law determines how your property is distributed, which may not align with your intentions.
                </p>
                <p>
                  Having a will provides:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Control over asset distribution</li>
                  <li>Protection for your loved ones</li>
                  <li>Designation of guardians for minor children</li>
                  <li>Peace of mind for your family</li>
                  <li>Potential tax benefits</li>
                </ul>
              </div>
            </section>

            {/* Who Needs a Will */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Who Should Have a Will?
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  Everyone over 18 years old should consider having a will, especially:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Parents with minor children</li>
                  <li>Property owners</li>
                  <li>Business owners</li>
                  <li>Individuals with specific wishes for asset distribution</li>
                  <li>Those wanting to leave charitable bequests</li>
                </ul>
              </div>
            </section>

            {/* What to Include */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Essential Elements of a Will
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>A comprehensive will should include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Executor designation</li>
                  <li>Beneficiary designations</li>
                  <li>Guardian appointments for minor children</li>
                  <li>Specific bequests of property or assets</li>
                  <li>Residuary estate distribution</li>
                  <li>Tax considerations</li>
                </ul>
              </div>
            </section>

            {/* Texas Laws */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Texas Will Requirements
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  In Texas, for a will to be valid:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The testator must be at least 18 years old</li>
                  <li>The testator must be of sound mind</li>
                  <li>The will must be in writing</li>
                  <li>The will must be signed by the testator</li>
                  <li>The will must be signed by two witnesses (for attested wills)</li>
                  <li>Holographic (handwritten) wills must be entirely in the testator's handwriting</li>
                </ul>
                <p className="mt-4">
                  Texas recognizes both attested (witnessed) wills and holographic (handwritten) wills. However, working with an attorney to create a properly witnessed will provides the greatest protection and clarity for your estate.
                </p>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <ConsultationCTA />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Wills;
