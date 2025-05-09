
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AttorneyNotice from "./AttorneyNotice";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-woodlands-darkpurple via-woodlands-purple to-woodlands-lightpurple relative">
      {/* Marble texture overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-15"
        style={{ 
          backgroundImage: "url('/lovable-uploads/23338cd7-77c7-4aaf-865e-21a0057c8d94.png')", 
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      />
      {/* Content positioned above the texture */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
