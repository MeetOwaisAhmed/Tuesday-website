import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TripleVerifiedImg from "@/images/TripleVerifiedImg.svg";

const TripleVerifiedSection = () => {
    const [ref, isVisible] = useScrollAnimation();
  return (
    <section className="bg-white py-20">
      <div ref={ref}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
      }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-24 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 leading-[1.2]">
              Reach more buyers with{' '}
              <span className="text-primary">Triple-Verified</span>{' '}
              contacts
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-900 leading-relaxed">
                Other data providers in the market sell you outdated contacts that 
                waste your time. Tuesday offers unlimited triple-verified emails and 
                mobile phone numbers to you at extremely low cost.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                All contact data are triple-verified at the time of request, making sure 
                you can reach your buyers easily.
              </p>
            </div>

            <div className="pt-4">
              <button className="btn text-white inline-flex items-center space-x-2">
                <span>Get Started Now</span>
                <ArrowRight className='w-5 h-5'/>
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
              <img
                src= {TripleVerifiedImg}
                alt="Triple-Verified contacts interface showing buyer profiles"
              />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripleVerifiedSection;
