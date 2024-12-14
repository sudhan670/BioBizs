import React from 'react';
import { ArrowRight } from 'lucide-react';

const sections = [
  {
    title: 'Opportunities',
    description: 'Discover business opportunities in the bioeconomy sector',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=400',
  },
  {
    title: 'Consulting',
    description: 'Expert guidance for your bio-based ventures',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400',
  },
  {
    title: 'Insights',
    description: 'Latest trends and analysis in the bio industry',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=400',
  },
  {
    title: 'Innovation Insights',
    description: 'Cutting-edge developments in biotechnology',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400',
  },
  {
    title: 'Biomass Residue Intelligence',
    description: 'Data-driven insights into biomass resources',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400',
  },
];

export function MainSections() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Explore Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
              </div>
              <div className="relative p-6 flex flex-col h-full min-h-[300px] justify-end">
                <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
                <p className="text-gray-200 mb-4">{section.description}</p>
                <button className="flex items-center text-white group-hover:text-green-400 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}