import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import PersonalizedEmailImg from "@/images/PersonalizedEmailImg.svg";

const PersonalizedEmailSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className='bg-white py-20'>
      <div  ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
        }`}>
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={PersonalizedEmailImg}
                alt="AI research agent interface showing automated research capabilities"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                  Write personalized emails with AI
            </h2>
            
            <div className="flex items-start space-x-3">
              <p className="text-lg font-semibold">
                 💌Personalized emails get your 8x more replies
              </p>
            </div>

            <p className="text-gray-900 leading-relaxed text-lg">
                  Tuesday’s AI sales email agent writes personalized emails relevant to the buyer’s specific pain points using your custom knowledge base. Easily scale your outreach to 1000s of emails in a few minutes. Never manually write “personalized” messages again!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedEmailSection;
