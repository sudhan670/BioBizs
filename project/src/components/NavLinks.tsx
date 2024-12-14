import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavLinksProps {
  className?: string;
  mobile?: boolean;
}

const insightsDropdown = [
  'Bioenergy',
  'Environmental Solutions',
  'Bio Products',
  'Bio-based Sciences & Tech Pathways',
  'Regional Biomass Residues',
  'India Biomass Residues',
  'Indian Bioeconomy',
];

export function NavLinks({ className = '', mobile = false }: NavLinksProps) {
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);

  const toggleInsightsDropdown = (open: boolean) => {
    if (!mobile) {
      setIsInsightsOpen(open);
    } else {
      setIsInsightsOpen((prev) => !prev);
    }
  };

  return (
    <div
  className={`${className || ''} ${
    mobile
      ? 'space-y-5 flex flex-col' // For mobile: vertical spacing
      : 'mt-2 flex flex-col md:flex-row md:space-x-4 md:space-y-0 md:items-center' // For desktop: horizontal spacing
  }`}
>
  <NavLink href="#" label="Home" />
  <NavLink href="#" label="About" />
  <NavLink href="#" label="Updates" />
  <NavLink href="#" label="Opportunities" />
  <NavLink href="#" label="Consulting" />

      {/* Dropdown */}
      <div className="relative md:ml-4">
        <button
          className="flex items-center space-x-1 text-gray-700 hover:text-green-600"
          onClick={() => toggleInsightsDropdown(!isInsightsOpen)}
          onMouseEnter={() => !mobile && setIsInsightsOpen(true)}
          onMouseLeave={() => !mobile && setIsInsightsOpen(false)}
        >
          <span>Innovation Insights</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isInsightsOpen ? 'rotate-180' : ''}`} />
        </button>

        {isInsightsOpen && (
          <div
            className={`${
              mobile
                ? 'mt-2 pl-4 space-y-2'
                : 'absolute left-0 mt-2 w-72 bg-white border rounded-lg shadow-lg py-2 z-50'
            }`}
            onMouseEnter={() => !mobile && setIsInsightsOpen(true)}
            onMouseLeave={() => !mobile && setIsInsightsOpen(false)}
          >
            {insightsDropdown.map((item) => (
              <NavLink
                key={item}
                href="#"
                label={item}
                className={`block ${mobile ? 'py-2' : 'px-4 py-2 hover:bg-gray-50'}`}
              />
            ))}
          </div>
        )}
      </div>

      <NavLink href="#" label="Bring" />
      <NavLink href="#" label="Contact" />
    </div>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

function NavLink({ href, label, className = '' }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-700 hover:text-green-600 transition-colors ${className}`}
    >
      {label}
    </a>
  );
}
