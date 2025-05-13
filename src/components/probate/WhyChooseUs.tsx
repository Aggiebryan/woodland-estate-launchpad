
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section className="bg-white/5 p-8 rounded-lg">
      <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
        Why Choose The Woodlands Law Firm?
      </h2>
      <div className="space-y-4 text-woodlands-cream font-body">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xl text-woodlands-gold">Experience and Local Knowledge</h3>
            <p>Our attorneys have deep roots in the Houston area and are familiar with Montgomery County and Harris County probate courts, local rules, and judges.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl text-woodlands-gold">Personalized Attention</h3>
            <p>Estate matters are personal and sometimes emotional. We take the time to listen to your story and understand your goals.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl text-woodlands-gold">Comprehensive Services</h3>
            <p>We handle both probate administration and estate planning, giving us insight into the complete picture of your needs.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl text-woodlands-gold">Compassion and Integrity</h3>
            <p>Our firm was founded on principles of integrity and doing what's right for each client. You can expect honesty and transparency.</p>
          </div>
        </div>
        
        <Separator className="my-6 bg-woodlands-gold/20" />
        
        <div className="flex items-center flex-wrap gap-4 justify-center">
          <Link to="/our-firm">
            <Button variant="outline" className="border-woodlands-cream/30 text-woodlands-cream">
              About Our Firm
            </Button>
          </Link>
          <Link to="/our-attorneys">
            <Button variant="outline" className="border-woodlands-cream/30 text-woodlands-cream">
              Meet Our Attorneys
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
