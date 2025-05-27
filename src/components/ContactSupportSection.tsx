import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ContacSupportImg from "@/images/ContactIconImg.svg";

const ContactSupportSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className='py-12'>
      <div  ref={ref}
           className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
           isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
          }`}
        >
         <div className="bg-gray-100 rounded-2xl p-8">
          <div className="flex items-center justify-between">
            {/* Left side - Icon and Text */}
            <div className="flex items-center space-x-4">
              <img src={ContacSupportImg} alt='' />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600">
                  Contact our live support 24/7.
                </p>
              </div>
            </div>

            {/* Right side - Button */}
            <div>
              <button className="btn">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupportSection;
