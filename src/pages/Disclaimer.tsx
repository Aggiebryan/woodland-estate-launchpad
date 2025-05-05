
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";

const Disclaimer = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6">
        <h1 className="text-4xl font-serif font-bold text-woodlands-gold text-center mb-8">
          Attorney Advertising Notice
        </h1>
        <Card className="bg-woodlands-darkpurple border-woodlands-gold/20">
          <CardContent className="pt-6 space-y-6 text-woodlands-cream leading-relaxed text-justify">
            <p>
              This website is designed for general information only. The information presented at this site should not be construed as formal legal advice or the formation of a lawyer-client relationship. The principal office is located in The Woodlands, Texas. Attorney Gwendolyn Simpson is responsible for the content of this website.
            </p>
            <p>
              While the information on this site is about legal issues, it is not legal advice. Moreover, due to the rapidly changing nature of the law and reliance on information provided by outside sources, the firm and its attorney(s) make no warranty or guarantee concerning the accuracy or reliability of the content at this site or at other sites to which this website links.
            </p>
            <p>
              Providing a mobile number to the firm for contact shall be construed as express consent to utilize such a number for SMS and text messaging for the purpose of occasional notifications. You may opt out at any time by providing us notice at admin@woodlands.law or replying STOP.
            </p>
            <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4 pt-4">
              No Attorney-Client Relationship
            </h2>
            <p>
              Communication with The Woodlands Law Firm through this website does not create an attorney-client relationship. Please do not send confidential information to us until an attorney-client relationship has been established.
            </p>
            <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4 pt-4">
              Limitations
            </h2>
            <p>
              The Woodlands Law Firm practices law only in jurisdictions where its attorneys are admitted to practice. Attorneys at The Woodlands Law Firm are admitted to practice law in the State of Texas. The materials on this website have been prepared for informational purposes only and are not legal advice.
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Disclaimer;
