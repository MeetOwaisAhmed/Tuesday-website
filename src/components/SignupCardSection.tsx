import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check } from 'lucide-react';
import TuesdayStarImg from "@/images/TuesdayStarImg.svg";

const CTASection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className='bg-gray-50 py-20'>
      <div  ref={ref}
         className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
         isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'
         }`}
        >
        <div className="bg-gray-900 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Star Pattern on Bottom Left */}
          <div className="absolute bottom-0 left-8 opacity-10">
             <img src={TuesdayStarImg}  alt='Star Pattern' className='w-52 h-52 object-contain'/>
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-4xl font-semibold text-white mb-8 leading-tight relative z-10">
            Don't miss out – close your next deal with Tuesday!
          </h2>
          
          {/* Benefits with green checkmarks */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-10 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-white/70 text-lg">Free trial credits available</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-white/70 text-lg">No credit card required</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-white/70 text-lg">30-day money back guarantee</span>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button className="btn px-8 py-4 rounded-xl">
              Sign up for free
            </button>
            
            <button className="btn bg-white text-gray-900 px-8 py-4 rounded-xl">
              See pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;