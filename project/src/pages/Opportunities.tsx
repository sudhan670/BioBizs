import { ArrowRight } from 'lucide-react';

const opportunities = [
  {
    title: 'Biomass Supply Chain',
    description: 'Connect with farmers and suppliers for sustainable biomass sourcing',
    category: 'Supply Chain',
  },
  {
    title: 'Biogas Projects',
    description: 'Investment opportunities in biogas plant development',
    category: 'Investment',
  },
  {
    title: 'Technology Licensing',
    description: 'Access cutting-edge biotech innovations for commercialization',
    category: 'Technology',
  },
];

export function Opportunities() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Opportunities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-sm font-medium text-green-600 mb-2">
                {opportunity.category}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {opportunity.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {opportunity.description}
              </p>
              <button className="flex items-center text-green-600 hover:text-green-700">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}