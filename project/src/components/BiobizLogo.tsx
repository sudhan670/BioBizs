import React from 'react';
import { Leaf } from 'lucide-react';

interface BiobizLogoProps {
  className?: string;
}

export function BiobizLogo({ className = '' }: BiobizLogoProps) {
  return (
    <a href="#" className={`flex items-center space-x-2 ${className}`}>
      <Leaf className="h-8 w-8 text-green-600" />
      <span className="text-xl font-bold text-gray-800">BioBiz</span>
    </a>
  );
}