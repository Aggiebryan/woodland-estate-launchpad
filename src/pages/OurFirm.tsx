
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";

const OurFirm = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
        <section>
          <h1 className="text-4xl font-serif font-bold text-woodlands-gold text-center mb-8">
            About The Woodlands Law Firm
          </h1>
          <Card className="bg-woodlands-darkpurple border-woodlands-gold/20">
            <CardContent className="pt-6 space-y-6 text-woodlands-cream leading-relaxed text-justify">
              <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4">
                Our Legacy of Protection
              </h2>
              <p>
                The Woodlands Law Firm brings sophisticated legal expertise with the personalized attention you deserve. Our attorneys combine over 20 years of collective experience in estate planning and probate matters, delivering the caliber of legal counsel typically found in downtown Houston firms with the accessibility and relationship-focused approach of your trusted local advisors.
              </p>
              <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4">
                Estate Planning Excellence
              </h2>
              <p>
                At The Woodlands Law Firm, we recognize that estate planning is far more than document preparation—it's about securing your family's future with confidence and peace of mind. Our estate planning practice is built on the principle that every family deserves a customized strategy that protects what matters most, whether you're planning for young children, preparing for retirement, or addressing complex business succession issues.
              </p>
              <p>
                <p>Our estate planning attorneys specialize in:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Comprehensive estate plans tailored to Texas law</li>
              <li>Revocable and irrevocable trusts</li>
              <li>Asset protection strategies</li>
              <li>Business succession planning</li>
              <li>Special needs planning</li>
              <li>Powers of attorney and advanced directives</li>
              <li>Probate and estate administration</li>
              </ul>
              </p>
              <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4">
                The Full Service Advantage
              </h2>
              <p>
                The Woodlands Law Firm offers a comprehensive range of legal services with estate planning as an integral component of our practice. Our attorneys excel in civil litigation focused on plaintiff-side representation, including Deceptive Trade Practices Act violations, insurance disputes, and personal injury matters. This multidisciplinary approach provides our estate planning clients with unique advantages—our litigation experience informs preventative strategies in estate documents, while our probate expertise ensures your plan will function effectively when needed. By maintaining this balanced practice, we deliver more robust legal protection than firms with narrower specializations can provide.
              </p>
              <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4">
                Our Commitment
              </h2>
              <p>
                When you engage with The Woodlands Law Firm for your estate planning needs, we commit to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Taking the time to understand your family dynamics and financial goals</li>
              <li>Explaining complex legal concepts in straightforward terms</li>
              <li>Creating flexible estate plans that evolve with your changing circumstances</li>
              <li>Providing exceptional value with transparent fee structures</li>
              <li>Building lasting relationships based on trust and exceptional service</li>
              </ul>
              <p className="mt-4">
                The journey to securing your family's future begins with a conversation. Contact us today to discover how our estate planning attorneys can help you protect what matters most.
              </p>
              <p>
                If you are looking for a local law firm that values honesty, precision, and client-focused results, contact The Woodlands Law Firm today. We offer consultations and welcome the opportunity to serve as your trusted legal advisors.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </MainLayout>
  );
};

export default OurFirm;
