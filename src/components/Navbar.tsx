import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import tuesdaylogo from '@/images/Tuesday Logo.svg';
import apolloLogo from '@/images/Appollo-logo.svg';
import rocketReachLogo from '@/images/RocketReach-logo.svg';
import zoominfoLogo from '@/images/Zoominfo-logo.svg';
import snovioLogo from '@/images/Snov-logo.svg';
import lushaLogo from '@/images/Lusha-logo.svg';
import seamlessLogo from '@/images/Seamless-logo.svg';
import cognismLogo from '@/images/Congnism-logo.svg';
import clayLogo from '@/images/Clay-logo.svg';

const comparisonItems = [
  { name: 'Apollo.io', logo: apolloLogo },
  { name: 'RocketReach', logo: rocketReachLogo },
  { name: 'Zoominfo', logo: zoominfoLogo },
  { name: 'Snov.io', logo: snovioLogo },
  { name: 'Lusha', logo: lushaLogo },
  { name: 'Seamless', logo: seamlessLogo },
  { name: 'Cognism', logo: cognismLogo },
  { name: 'Clay', logo: clayLogo },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 cursor-pointer">
            <img src={tuesdaylogo} alt="Tuesday Logo" className="h-15 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-linkHover transition-colors duration-200"
            >
              Pricing
            </a>

            {/* Comparison Dropdown (desktop) */}
            <div
              className="relative inline-block group"
              onMouseEnter={() => setIsComparisonOpen(true)}
              onMouseLeave={() => setIsComparisonOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-gray-900 hover:text-linkHover transition-colors duration-200"
                onClick={() => setIsComparisonOpen(o => !o)}
              >
                <span>Comparison</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    isComparisonOpen ? '-rotate-180' : ''
                  } group-hover:-rotate-180`}
                />
              </button>
              {isComparisonOpen && (
                <div
                  className="
                    absolute top-full left-1/2 mt-2
                    w-[700px] -translate-x-1/2
                    bg-white border border-gray-200 rounded-xl shadow-lg
                    px-6 py-6 z-10
                  "
                >
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                    {comparisonItems.map(item => (
                      <a key={item.name} href="#" className="dropdown-item">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-14 h-14 flex-shrink-0"
                        />
                        <span className="text-gray-700 whitespace-nowrap">
                          Tuesday vs {item.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-gray-900 hover:text-linkHover transition-colors duration-200"
            >
              Affiliates
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-linkHover transition-colors duration-200"
            >
              Demo
            </a>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-900 hover:text-linkHover transition-colors duration-200">
              Log In
            </button>
            <button className="btn">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4 px-4">
              {/* Pricing */}
              <a
                href="#"
                className="text-gray-900 hover:text-linkHover transition-colors duration-200"
              >
                Pricing
              </a>

              {/* Mobile Comparison */}
              <div>
                <button
                  className="w-full flex justify-between items-center group text-gray-900 hover:text-linkHover transition-colors duration-200"
                  onClick={() => setIsComparisonOpen(o => !o)} 
                >
                  <span>Comparison</span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      isComparisonOpen ? 'rotate-180' : ''} group-hover:-rotate-180 `}
                  />
                </button>

                {isComparisonOpen && (
                  <div className="mt-2 border-t border-gray-100 divide-y divide-gray-100">
                    {comparisonItems.map(item => (
                      <a
                        key={item.name}
                        href="#"
                        className="block px-2 py-3 text-gray-700 hover:bg-dropdownHover transition-colors"
                      >
                        Tuesday vs {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Affiliates */}
              <a
                href="#"
                className="text-gray-900 hover:text-linkHover transition-colors duration-200"
              >
                Affiliates
              </a>

              {/* Demo */}
              <a
                href="#"
                className="text-gray-900 hover:text-linkHover transition-colors duration-200"
              >
                Demo
              </a>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="w-full text-left text-gray-900 hover:text-linkHover transition-colors duration-200">
                  Log In
                </button>
                <button className="w-full btn">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
