import { NewsCard } from '../components/NewsCard';

const updates = [
  {
    title: 'Biogas Plant to Be Revived by Faridabad Municipal Corporation',
    category: 'Infrastructure',
    date: 'March 15, 2024',
  },
  {
    title: 'Straw-Based Biogas Plant Commercialization',
    category: 'Technology',
    date: 'March 14, 2024',
  },
  // Add more updates here
];

export function IndiaUpdates() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">India Updates</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update) => (
            <NewsCard
              key={update.title}
              {...update}
            />
          ))}
        </div>
      </div>
    </section>
  );
}