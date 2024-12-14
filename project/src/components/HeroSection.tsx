import React from 'react';
import { SocialLinks } from './SocialLinks';

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-r from-green-900 to-green-700 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <SocialLinks />
          </div>
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Sustainable Solutions for a Better Tomorrow
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              At BioBiz, we are keen to capitalize on India's rich biodiversity and the availability
              of large amounts of biomass residues to develop a sustainable bio-economy and attractive
              business opportunities for diverse stakeholders.
            </p>
            <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}