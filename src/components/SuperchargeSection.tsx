// src/components/SuperchargeSection.tsx
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Icon1 from '@/images/SuperchargeIcon1.svg'
import Icon2 from '@/images/SuperchargeIcon2.svg'
import Icon3 from '@/images/SuperchargeIcon3.svg'
import Icon4 from '@/images/SuperchargeIcon4.svg'
import Icon5 from '@/images/SuperchargeIcon5.svg'
import BottomIllustration from '@/images/BottomIllustrationImg.svg'

const SuperchargeSection: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation()

  const cards = [
    { src: Icon1, alt: 'Advanced filters', text: 'Advanced lead filters to build hyper-targeted lead list.' },
    { src: Icon2, alt: 'Email & phone verification', text: 'Automated email and phone verification for seamless outreach.' },
    { src: Icon3, alt: 'AI email writer', text: 'Scalable AI email writer to generate 1000s of personalizations in minutes.' },
    { src: Icon4, alt: 'CRM integrations', text: 'Integrate with CRMs and email sending tools in a few clicks.' },
    { src: Icon5, alt: 'Easy interface', text: 'User-friendly interface to get your job done easily.' },
  ]

  return (
    <section className="bg-white py-20 overflow-hidden" ref={ref}>
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'animate-slide-up-slow  opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900">
            Supercharge your outbound
            <span className="block text-primary">marketing efforts</span>
          </h2>
        </div>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {cards.slice(0, 3).map((c, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl border border-gray-200 p-8 text-left shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img src={c.src} alt={c.alt} className="w-8 h-8 mb-4" />
              <p className="text-lg font-medium text-gray-900">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Second row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cards.slice(3).map((c, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl border border-gray-200 p-8 text-left shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img src={c.src} alt={c.alt} className="w-8 h-8 mb-4" />
              <p className="text-lg font-medium text-gray-900">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom illustration */}
        <div className="flex justify-center">
          <img
            src={BottomIllustration}
            alt="Supercharge illustration"
            className="w-screen max-w-none h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default SuperchargeSection
