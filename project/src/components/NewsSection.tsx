import { NewsCard } from './NewsCard';

const newsUpdates = [
  {
    title: 'Biogas Plant to Be Revived by Faridabad Municipal Corporation',
    category: 'Biogas',
    date: 'March 15, 2024',
  },
  {
    title: 'Straw-Based Biogas Plant Commercialization',
    category: 'Innovation',
    date: 'March 14, 2024',
  },
  {
    title: 'Biofuel from Carbon Dioxide: New Tech Developed by IIT Guwahati',
    category: 'Research',
    date: 'March 13, 2024',
  },
  {
    title: 'Biodiesel Deliveries: Aemetis India Completes $103 Million to OMCs',
    category: 'Business',
    date: 'March 12, 2024',
  },
  {
    title: 'Green Hydrogen: TKIL Partners with Sohhytec',
    category: 'Partnership',
    date: 'March 11, 2024',
  },
];

export function NewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Latest India Updates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest developments in India's bioeconomy sector
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsUpdates.map((news) => (
            <NewsCard
              key={news.title}
              title={news.title}
              category={news.category}
              date={news.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}