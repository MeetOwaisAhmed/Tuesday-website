// src/components/FeaturesSection.tsx
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import CardImg1 from '@/images/crdImg1.svg';
import CardImg2 from '@/images/crdImg2.svg';
import CardImg3 from '@/images/crdImg3.svg';

const features = [
  {
    icon: CardImg1,
    title: 'Triple-Verified Phone Numbers',
    description: `Make cold calls with confidence – knowing you’re getting in touch with the right decision makers.`,
  },
  {
    icon: CardImg2,
    title: '(Extremely) Affordable Pricing',
    description: `Our mobile number cost starts at 15 cents per number and gets cheaper with larger orders.`,
  },
  {
    icon: CardImg3,
    title: 'Seamless Integration, Immediate Impact',
    description: `Export triple-verified emails & phone numbers as CSV or push directly to your CRM in 30 secs.`,
  },
]

export default function FeaturesSection() {
    const [ref, isVisible] = useScrollAnimation();
  return (
    <section className="bg-white py-20">
      <div  ref={ref}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
      }`}
      >
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
            >
              {/* image */}
                <img src={feat.icon} alt="" className='mb-6'  />

              {/* title */}
              <h3 className="text-s font-semibold text-gray-900 mt-4 mb-4">
                {feat.title}
              </h3>

              {/* description */}
              <p className="text-s text-gray-600 leading-relaxed mt-8">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
