import { Calendar, Tag } from 'lucide-react';

interface NewsCardProps {
  title: string;
  category: string;
  date: string;
}

export function NewsCard({ title, category, date }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Tag className="h-4 w-4 mr-1" />
            {category}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 line-clamp-2">
          {title}
        </h3>
        <a
          href="#"
          className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}