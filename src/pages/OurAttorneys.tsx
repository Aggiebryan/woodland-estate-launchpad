
import MainLayout from "@/components/layout/MainLayout";
import AttorneyProfile from "@/components/shared/AttorneyProfile";
import { Separator } from "@/components/ui/separator";

const OurAttorneys = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
        <h1 className="text-4xl font-serif font-bold text-woodlands-gold text-center mb-8">
          Our Attorneys
        </h1>
        
        <AttorneyProfile 
          name="Gwendolyn Simpson"
          image="/lovable-uploads/fc6c1c70-3817-4323-a54c-2a04adee36fb.png"
          bio="Gwendolyn Simpson is the founder and managing attorney of The Woodlands Law Firm. A Houston native, she earned her J.D. from Baylor Law School in 2007, where she received multiple Dean's Academic Merit Scholarships and tied for Best Brief in the Dawson and Sodd Moot Court Competition. She graduated summa cum laude from LeTourneau University with a B.B.A. after completing an associate degree in legal assisting.

Ms. Simpson's legal career began as a paralegal in 1998 before her licensure in 2007. Her experience includes serving as staff attorney to the Honorable Kathleen Hamilton in Montgomery County's 359th Judicial District Court and being appointed as a Master/Referee for the same court. In 2015, she contributed to developing Montgomery County's Veterans' Treatment Court.

A certified mediator recognized by the Pro Bono College of the State Bar, Ms. Simpson has taught ABA-approved legal courses nationwide. Her professional affiliations include the College of the State Bar and local bar associations. Licensed in Texas and the U.S. Southern District of Texas, she serves clients in Montgomery, Harris, and surrounding counties while enjoying family time, historical fiction, travel, and local cupcakes."
        />

        <Separator className="my-8 bg-woodlands-gold/20" />

        <AttorneyProfile 
          name="Bryan C. Holman"
          image="/lovable-uploads/e7cbab38-2c31-4735-923d-c00a44ed632a.png"
          bio="Bryan Holman brings practical experience and entrepreneurial insight to The Woodlands Law Firm. After earning his B.S. from Texas A&M University and J.D. from South Texas College of Law, he built a career informed by diverse professional experience.

Bryan worked as an insurance adjuster from 1999 to 2013, representing major carriers in claims involving natural disasters. This background provides him with valuable insight into the insurance industry and claimants' challenges. His entrepreneurial ventures include co-owning a furniture store with his wife and launching a construction and home inspection company in Houston, demonstrating his operational management abilities.

At The Woodlands Law Firm, Bryan focuses on civil litigation, consumer protection, personal injury, and estate planning. His multifaceted background allows him to evaluate cases from strategic, financial, and legal perspectives.

Bryan is licensed in Texas and the U.S. Southern District of Texas. He is an active member of The Woodlands Bar Association and the Federalist Society. Outside work, he enjoys camping, fishing, and working on technology and cars, reflecting the service-oriented approach he brings to his legal practice across Montgomery and Harris Counties."
        />
      </div>
    </MainLayout>
  );
};

export default OurAttorneys;
