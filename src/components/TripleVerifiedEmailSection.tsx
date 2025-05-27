import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TripleVerifiedEmailImg from "@/images/TripleVerifiedEmailImg.svg";

const TripleVerifiedEmailSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className='py-20'>
      <div ref={ref}
         className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
         isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
        }`}>

         {/* Content Section */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           {/* Left Content */}
           <div className="space-y-6">
             <h2 className="text-4xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                  Triple-verified emails and mobile numbers
             </h2>
            
             <div className="flex items-start space-x-3">
               <p className="text-lg font-semibold">
                   ✅You can reach prospects with 99.5% success rate
               </p>
             </div>

             <p className="text-gray-900 text-lg leading-relaxed">
                   We use the innovative waterfall approach to aggregate the best results from multiple data providers. All results must go through our Triple-verification process. Only valid results are charged.
             </p>
            </div>

           {/* Right Image */}
           <div className="flex justify-center lg:justify-end">
             <div className="relative">
               <img 
                 src={TripleVerifiedEmailImg}
                 alt="Sales toolkit interface showing filters and contact lists"
                />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TripleVerifiedEmailSection;
