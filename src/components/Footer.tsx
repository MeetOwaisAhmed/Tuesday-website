
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Linkedin, X, Youtube } from 'lucide-react';
import TuesdayLogo from '@/images/FooterLogo.svg';


const Footer = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <footer className="bg-black text-white py-16">
      <div ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
        }`}
        >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <a href="/" className="cursor-pointer inline-block">
               <img src={TuesdayLogo} alt='Tuesday Logo' />
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="social-link">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="social-link">
                <X className="w-4 h-4" />
              </a>
              <a href="#" className="social-link">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Scale Personalized outreach with Triple-Verified email and mobile number leads.
            </p>
          </div>

          {/* Comparison Column */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-6">Comparison</h3>
            <ul className="space-y-4">
              <li><a href="#" className="footer-link">Tuesday vs. Apollo.io</a></li>
              <li><a href="#" className="footer-link">Tuesday vs. Zoominfo</a></li>
              <li><a href="#" className="footer-link">Tuesday vs. Lusha</a></li>
              <li><a href="#" className="footer-link">Tuesday vs. Cognism</a></li>
              <li><a href="#" className="footer-link">Tuesday vs. RocketReach</a></li>
              <li><a href="#" className="footer-link">Tuesday vs. Snov.io</a></li>
              <li><a href="#" className="footer-link">Tuesday vs. Seamless</a></li>
              <li><a href="#" className="footer-link">Tuesday vs. Clay</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="footer-link">Demo</a></li>
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="#" className="footer-link">ROI Calculator</a></li>
              <li><a href="#" className="footer-link">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="footer-link">Privacy</a></li>
              <li><a href="#" className="footer-link">Terms</a></li>
              <li><a href="#" className="footer-link">Contact Sales</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
