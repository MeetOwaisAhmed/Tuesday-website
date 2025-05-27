import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SalesToolkitImg from "@/images/SalestToolkitImg.svg";

const SalesToolkitSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className='py-20'>
      <div ref={ref}
         className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
         isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
        }`}>
         {/* Main Header */}
         <div className="text-center mb-16">
           <h2 className="text-4xl lg:text-4xl font-semibold text-gray-900 mb-4">
             Your <span className="text-primary">Essential Toolkit</span> for Sales
           </h2>
           <p className="text-lg text-gray-900 max-w-2xl mx-auto">
             Find key decision makers at ICP companies. Use our unlimited b2b leads.
           </p>
         </div>

         {/* Content Section */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           {/* Left Content */}
           <div className="space-y-6">
             <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
               Build hyper-targeted contact list
             </h2>
            
             <div className="flex items-start space-x-3">
               <p className="text-lg font-semibold">
                 🔍 Find your ideal buyers with our user-friendly filters
               </p>
             </div>

             <p className="text-gray-900 text-lg leading-relaxed">
               Find key decision makers at ICP companies. Use our unlimited b2b lead database of 200M global professional profiles and 70M organizations to reach your entire market!
             </p>
            </div>

           {/* Right Image */}
           <div className="flex justify-center lg:justify-end">
             <div className="relative">
               <img 
                 src={SalesToolkitImg}
                 alt="Sales toolkit interface showing filters and contact lists"
                />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SalesToolkitSection;
