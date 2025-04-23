
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
            <CardContent className="pt-6 space-y-6 text-woodlands-cream leading-relaxed">
              <p>
                The Woodlands Law Firm is a Texas-based law firm focused on civil litigation, estate planning, consumer protection, insurance disputes, and personal injury, and business planning. Located in The Woodlands, Texas, our firm is dedicated to representing individuals, families, and small businesses throughout Montgomery County, Harris County, and the surrounding areas.
              </p>
              <p>
                We provide legal representation with a commitment to integrity, preparation, and results. Our attorneys bring decades of combined experience in both the courtroom and the negotiation table. We work closely with clients to protect their rights, resolve disputes, and plan for the future.
              </p>
              <p>
                Founded by attorney Gwendolyn Simpson, the firm is built on a foundation of practical legal knowledge and community trust. Ms. Simpson and her team offer strategic advocacy across a wide range of legal matters, with a strong focus on achieving outcomes that matter. Whether drafting wills and trusts, litigating breach of contract claims, or pursuing justice in a personal injury case, we aim to deliver clear answers and effective representation.
              </p>
              <p>
                We understand that legal problems can disrupt your life or your business. That's why we strive to simplify the process, provide honest guidance, and work efficiently toward resolution. Our team is responsive, thorough, and committed to each client's goals.
              </p>
              <p>
                Our attorneys are licensed to practice in Texas state courts and the U.S. District Court for the Southern District of Texas. We are members of the Montgomery County Bar Association, The Woodlands Bar Association, and the Federalist Society.
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
