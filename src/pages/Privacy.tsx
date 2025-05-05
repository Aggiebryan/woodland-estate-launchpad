
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6">
        <h1 className="text-4xl font-serif font-bold text-woodlands-gold text-center mb-8">
          Privacy Policy
        </h1>
        <Card className="bg-woodlands-darkpurple border-woodlands-gold/20 mb-8">
          <CardContent className="pt-6 space-y-6 text-woodlands-cream leading-relaxed text-justify">
            <p>
              This Privacy Policy describes how The Woodlands Law Firm ("we," "us," or "our") collects, uses, and shares information from visitors to our website. We respect your privacy and are committed to protecting the confidentiality of your personal information. Please read this policy carefully to understand how we collect and handle your data.
            </p>
            
            <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4 pt-4">
              Collection of Cookies
            </h2>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device to help us improve the functionality of our website. Cookies may collect certain information, including your IP address, browser type, and pages you visit. We use this data to analyze website traffic, improve our site, and provide a better user experience.
            </p>
            
            <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4 pt-4">
              Information Collected
            </h2>
            <p>
              <strong>Personal Information:</strong> We may collect personal information when you voluntarily provide it, such as when you fill out a contact form or sign up for our newsletter. This may include your name, email address, phone number, and any other information you choose to provide.
            </p>
            <p>
              <strong>Non-Personal Information:</strong> We may automatically collect non-personal information, such as your IP address, browser type, and device information when you visit our website.
            </p>
            
            <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4 pt-4">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To respond to your inquiries or requests.</li>
              <li>To provide you with legal information and updates.</li>
              <li>To improve and optimize our website.</li>
              <li>For any other purposes disclosed to you at the time of collection.</li>
            </ul>
            
            <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4 pt-4">
              Consent for Text Messaging
            </h2>
            <p>
              Providing a mobile number to the Firm for contact shall be construed express consent to utilize such number for SMS and text messaging for the purpose of occasional case or appointment notifications. You may opt out at any time by providing us notice to admin@woodlands.law or replying STOP.
            </p>
            
            <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4 pt-4">
              Confidentiality for Clients and Case Inquiries
            </h2>
            <p>
              Client confidentiality and potential client confidentiality is of utmost importance to us. We are committed to protecting the privacy and confidentiality of information provided to us by our clients. All client communications and information will be held in strict confidence, with the following exceptions:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>In cases involving elder or child abuse, we are obligated to report such incidents to the appropriate authorities.</li>
              <li>In cases where a client may pose a threat of harm to themselves or others, we may be required to disclose information to protect the safety of all parties involved.</li>
            </ul>
            
            <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4 pt-4">
              Disclaimer
            </h2>
            <p>
              No attorney-client relationship is formed by visiting our website, and no legal advice is provided through this website. An attorney-client relationship is established only when parties sign an engagement agreement with The Woodlands Law Firm and the retainer is paid unless otherwise agreed. This website is intended for general informational purposes only and should not be construed as legal advice or a solicitation for legal services.
            </p>
            
            <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4 pt-4">
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content on these external sites. We encourage you to review the privacy policies of these third-party sites.
            </p>
            
            <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4 pt-4">
              Changes to this Privacy Policy
            </h2>
            <p>
              We reserve the right to update and amend this Privacy Policy as needed. Any changes will be posted on this page, and the effective date will be updated accordingly. Please check this page regularly for updates.
            </p>
            
            <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold to-woodlands-lightgold mb-4 pt-4">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at (832) 626-0116 or admin@woodlands.law
            </p>
            
            <p className="mt-6 font-medium">
              By using our website, you consent to the terms of this Privacy Policy. Please do not use our website if you do not agree with the terms outlined in this policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Privacy;
