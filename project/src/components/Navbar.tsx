import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BiobizLogo } from './BiobizLogo';
import { NavLinks } from './NavLinks';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <BiobizLogo className="h-8 w-auto" />
          
          <div className="hidden md:block">
            <NavLinks />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-3 py-3">
            <NavLinks mobile />
          </div>
        </div>
      )}
    </nav>
  );
}