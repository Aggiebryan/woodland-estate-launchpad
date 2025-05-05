
import React from "react";
import { Link } from "react-router-dom";

const AttorneyNotice = () => {
  return (
    <div className="bg-woodlands-darkpurple text-woodlands-cream/80 text-xs px-4 py-3 border-t border-woodlands-gold/20">
      <div className="container mx-auto">
        <p className="max-w-4xl text-justify">
          This website is designed for general information only. The information presented at this site should not be construed as formal legal advice or the formation of a lawyer-client relationship. The principal office is located in The Woodlands, Texas. Attorney Gwendolyn Simpson is responsible for the content of this website. While the information on this site is about legal issues, it is not legal advice. Moreover, due to the rapidly changing nature of the law and reliance on information provided by outside sources, the firm and its attorney(s) make no warranty or guarantee concerning the accuracy or reliability of the content at this site or at other sites to which this website links.
        </p>
        <p className="mt-2 max-w-4xl text-justify">
          Providing a mobile number to the firm for contact shall be construed as express consent to utilize such a number for SMS and text messaging for the purpose of occasional notifications. You may opt out at any time by providing us notice at admin@woodlands.law or replying STOP.
        </p>
      </div>
    </div>
  );
};

export default AttorneyNotice;
