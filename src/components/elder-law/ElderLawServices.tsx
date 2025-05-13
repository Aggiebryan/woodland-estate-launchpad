
import React from 'react';

const ElderLawServices = () => {
  return (
    <section className="bg-white/5 p-8 rounded-lg">
      <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
        Our Elder Law Services
      </h2>
      <div className="space-y-4 text-woodlands-cream font-body">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xl text-woodlands-gold">Medicaid Planning</h3>
            <p>Strategic planning to qualify for benefits while protecting assets.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl text-woodlands-gold">Long-term Care Planning</h3>
            <p>Prepare for future healthcare and living assistance needs.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl text-woodlands-gold">Asset Protection</h3>
            <p>Preserve wealth while qualifying for benefits.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl text-woodlands-gold">Veterans Benefits</h3>
            <p>Assistance with VA benefits and planning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElderLawServices;
