import { CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Market Research & Analysis',
    description: 'In-depth market studies and opportunity assessment for bio-based ventures',
  },
  {
    title: 'Technical Consulting',
    description: 'Expert guidance on bioprocess optimization and technology selection',
  },
  {
    title: 'Project Development',
    description: 'End-to-end support for biotech project implementation',
  },
];

export function Consulting() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">BioBiz Consulting</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}