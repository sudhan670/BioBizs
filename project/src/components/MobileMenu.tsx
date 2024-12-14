import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLinks } from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      {/* Menu toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="p-4 text-gray-600 hover:text-green-600"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
          <div className="px-4 py-2">
            <NavLinks className="flex flex-col space-y-4" mobile />
          </div>
        </div>
      )}
    </div>
  );
}
