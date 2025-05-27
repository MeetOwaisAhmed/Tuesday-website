import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import IntegrationEmailImg from "@/images/IntegrationEmailImg.svg";

const IntegrationEmailSection = () => {
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
                  Easy integrations with CRMs and email platforms
             </h2>
            
             <div className="flex items-start space-x-3">
               <p className="text-lg font-semibold">
                   ⏱️Rapid integration, seamless workflows
               </p>
             </div>

             <p className="text-gray-900 text-lg leading-relaxed">
                   Send personalized AI emails and LinkedIn messages automatically using your favorite sending tool, CRM, or even Google. We can automate push leads into Smartlead, Instantly, Apollo.io, HubSpot, Salesforce, etc. You can also export all data as CSV file.
             </p>
            </div>

           {/* Right Image */}
           <div className="flex justify-center lg:justify-end">
             <div className="relative">
               <img 
                 src={IntegrationEmailImg}
                 alt="Sales toolkit interface showing filters and contact lists"
                />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationEmailSection;
