
import MainLayout from "@/components/layout/MainLayout";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <FileText className="w-12 h-12 text-woodlands-gold mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-12">
            Terms of Use
          </h1>
          
          <div className="max-w-4xl mx-auto bg-white/5 rounded-lg p-8 text-woodlands-cream">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-serif text-woodlands-gold mb-4">Agreement to Terms</h2>
                <p className="mb-4">
                  By accessing and using this website (the "Site"), you accept and agree to be bound by these Terms of Use, our Privacy Policy, and any other terms that may appear on the Site from time to time. If you do not agree to these Terms, please do not use the Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-woodlands-gold mb-4">Intellectual Property</h2>
                <p className="mb-4">
                  The content on this Site, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of The Woodlands Law Firm and is protected by United States and international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="mb-4">
                  You may access, download, or print material from the Site for your personal, non-commercial use only. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the Site without our prior written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-woodlands-gold mb-4">Use of the Site</h2>
                <p className="mb-4">
                  You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Site. You may not use the Site in any manner that could damage, disable, overburden, or impair the Site or interfere with any other party's use of the Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-woodlands-gold mb-4">No Legal Advice</h2>
                <p className="mb-4">
                  The information provided on this Site is for general informational purposes only and does not constitute legal advice. The information presented at this Site should not be construed to be formal legal advice nor the formation of a lawyer/client relationship.
                </p>
                <p className="mb-4">
                  You should not act or rely on any information contained on the Site without seeking the advice of a licensed attorney who can address your specific legal needs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-woodlands-gold mb-4">Communication</h2>
                <p className="mb-4">
                  Any communication or material you transmit to the Site by electronic mail or otherwise, including any data, questions, comments, suggestions, or the like, will be treated as non-confidential and non-proprietary. Any information you provide may be used for any purpose, including but not limited to reproduction, solicitation, disclosure, transmission, publication, and posting.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-woodlands-gold mb-4">Limitation of Liability</h2>
                <p className="mb-4">
                  In no event will The Woodlands Law Firm be liable for any damages, including without limitation direct or indirect, special, incidental, or consequential damages, losses, or expenses arising in connection with this Site or any linked site or use thereof or inability to use by any party, or in connection with any failure of performance, error, omission, interruption, defect, delay in operation or transmission, computer virus, or line or system failure, even if we are advised of the possibility of such damages, losses, or expenses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-woodlands-gold mb-4">External Links</h2>
                <p className="mb-4">
                  This Site may contain links to other websites that are not under our control. We are not responsible for the content, accuracy, or opinions expressed on such websites, and such websites are not investigated, monitored, or checked for accuracy or completeness by us. The inclusion of any link does not imply endorsement by The Woodlands Law Firm of the website. Use of any such linked website is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-woodlands-gold mb-4">Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to change these Terms at any time without notice. Your continued use of the Site following the posting of changes to these Terms will mean you accept those changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-woodlands-gold mb-4">Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without giving effect to any principles of conflicts of law. Any legal action or proceeding arising out of or relating to these Terms shall be filed in Montgomery County, Texas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-woodlands-gold mb-4">Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="mb-4">
                  The Woodlands Law Firm<br />
                  2219 Sawdust Rd., Suite 803<br />
                  The Woodlands, TX 77380<br />
                  (832) 626-0116<br />
                  admin@woodlands.law
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;
