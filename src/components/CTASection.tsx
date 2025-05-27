import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TuesdayStarImg from "@/images/TuesdayStarImg.svg";

const CTASection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className='bg-white py-20'>
      <div ref={ref}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
          }`}>
        <div className="bg-gray-900 rounded-3xl p-16 text-center relative overflow-hidden">

            {/* Star Pattern on Left Bottom */}
          <div className="absolute bottom-0 left-8 opacity-10">
             <img src={TuesdayStarImg}  alt='Star Pattern' className='w-52 h-52 object-contain'/>
          </div>
          
          {/* Content */}
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl lg:text-4xl font-semibold text-white leading-tight">
              Join us and accelerate your growth today!
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Discover the difference with Tuesday – where lead generation meets data quality, performance guarantee, and cutting-edge AI technology.
            </p>
            
            <div className="pt-4">
              <button className="btn bg-white text-gray-900">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;