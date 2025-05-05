
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AttorneyNotice from "./AttorneyNotice";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-woodlands-darkpurple via-woodlands-purple to-woodlands-lightpurple">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
