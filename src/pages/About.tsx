
import MainLayout from "@/components/layout/MainLayout";
import AttorneyProfile from "@/components/shared/AttorneyProfile";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
        {/* Firm Overview Section */}
        <section className="mb-16">
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

        {/* Attorneys Section */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-woodlands-gold text-center mb-8">
            Our Attorneys
          </h2>
          
          <AttorneyProfile 
            name="Gwendolyn Simpson"
            image="/public/lovable-uploads/fc6c1c70-3817-4323-a54c-2a04adee36fb.png"
            bio="Gwendolyn Simpson, a native Houstonian, is the founder and managing attorney of The Woodlands Law Firm. She earned her Juris Doctor from Baylor Law School in 2007, where she received nine Dean's Academic Merit Scholarships and tied for Best Brief in the Dawson and Sodd Moot Court Competition. Prior to law school, she graduated summa cum laude from LeTourneau University with a Bachelor of Business Administration and completed her associate degree in legal assisting at North Harris College.

Ms. Simpson began her legal career in 1998 as a paralegal before becoming a licensed attorney in 2007. She established her own civil practice, focusing on civil litigation, transactions, probate, and personal injury. Her career includes serving as staff attorney to the Honorable Kathleen Hamilton in the 359th Judicial District Court of Montgomery County, Texas. In 2012, she was appointed by the Board of Judges to serve as a Master/Referee for the same court. In 2015, she contributed to the development and administration of Montgomery County's Veterans' Treatment Court.

Beyond her practice, Ms. Simpson developed curriculum approved by the American Bar Association and taught legal courses nationwide as an adjunct professor at the Center for Advanced Legal Studies. She is a certified mediator and has been recognized by the Pro Bono College of the State Bar for her contributions to low-income Texans. Her professional affiliations include the College of the State Bar, Montgomery County Bar Association, and The Woodlands Bar Association.

Ms. Simpson is licensed to practice in Texas and the U.S. Southern District of Texas. She serves clients in Montgomery, Harris, and surrounding counties. Outside of her legal work, she enjoys spending time with her family, reading historical fiction, traveling, and sampling local cupcakes."
          />

          <Separator className="my-8 bg-woodlands-gold/20" />

          <AttorneyProfile 
            name="Bryan Holman"
            image="/public/lovable-uploads/e7cbab38-2c31-4735-923d-c00a44ed632a.png"
            bio="Bryan Holman brings a wealth of practical experience and entrepreneurial insight to his role at The Woodlands Law Firm. A native Texan, Bryan earned his Bachelor of Science from Texas A&M University before completing his Juris Doctor at South Texas College of Law, where he focused on building the legal skills necessary for effective advocacy and client service.

Bryan's career in law was preceded by over a decade of work as an insurance adjuster. From 1999 to 2013, he represented major national carriers in claims involving natural disasters such as hurricanes, floods, blizzards, and wildfires. This background gave him a detailed understanding of the insurance industry and the legal challenges claimants face.

In addition to his insurance background, Bryan has successfully run multiple businesses. He co-owned a furniture store in Mesquite, Texas, with his wife, and later launched a construction and home inspection company in Houston. His entrepreneurial ventures demonstrate his ability to manage complex operations and deliver value to customers—skills he now brings to his legal clients.

He also served in a consultative capacity with Reynolds & Reynolds, facilitating high-value transactions and software system deployments for automotive dealerships across the country. His work included drafting and negotiating detailed contracts with large dealer groups, sharpening his precision and contract literacy.

At The Woodlands Law Firm, Bryan concentrates on civil litigation, consumer protection, personal injury, and estate planning. His diverse background allows him to evaluate each case from multiple perspectives—strategic, financial, and legal—delivering comprehensive representation tailored to each client's needs.

Bryan is licensed to practice law in Texas and in the United States District Court for the Southern District of Texas. He is an active member of The Woodlands Bar Association and the Federalist Society, reflecting his commitment to principled legal advocacy and ongoing professional development.

Away from the office, Bryan is a devoted husband and family man who enjoys spending time outdoors. Whether camping, fishing, or working on technology and cars, he finds balance and perspective in these pursuits. His passion for service and integrity defines both his personal and professional life, making him a trusted advocate for individuals and families across Montgomery and Harris Counties."
          />
        </section>
      </div>
    </MainLayout>
  );
};

export default About;
