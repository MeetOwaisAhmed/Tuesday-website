import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import AiPersonalizedImg from '@/images/AiPersonalizedSection.svg'
import CardImg4 from '@/images/crdImg4.svg'
import CardImg5 from '@/images/crdImg5.svg'
import CardImg6 from '@/images/crdImg6.svg'

const features = [
  {
    icon: CardImg4,
    title: "Research buyer's LinkedIn",
    description: `Tuesday automatically reads your buyer’s entire LinkedIn,
     and company website to find relevant insights to mention in its personalization.
     Just paste in someone’s LinkedIn URL and you get back a fully-personalized email in 3 seconds!`,
  },
  {
    icon: CardImg5,
    title: 'Persona-based messaging',
    description: `Think AI is not smart enough to sell based on your buyer persona? Think again! 
     Tuesday allows you to define buyer personas and value proposition for each, so you can pinch 
     their pain points with precision.`,
  },
  {
    icon: CardImg6,
    title: 'Customize AI tone and knowledge',
    description: `You can easily choose the right tone of voice, email structure and define your 
     own company knowledge base – add case studies, ROIs, testimonials, etc. Even define your own 
     email structure and let AI follow it precisely.`,
  },
]

const AIPersonalizedSection: React.FC = () => {
  const [topRef,   topVisible]   = useScrollAnimation()
  const [cardsRef, cardsVisible] = useScrollAnimation()

  return (
    <section className="bg-white py-20 overflow-hidden">
      {/* Top half: headline + image */}
      <div
        ref={topRef}
        className={`
          max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
          grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20
          transition-all duration-700 ease-out
          ${topVisible
            ? 'opacity-100 translate-y-0 animate-slide-up-slow'
            : 'opacity-0 translate-y-20'}
        `}
      >
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
            Book more meetings with{' '}
            <span className="text-primary">AI-Personalized</span> emails
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-900 leading-relaxed">
              Stop wasting time “personalizing” by hand—Tuesday reads your 
              prospect’s LinkedIn & website, then spits out a hyper-relevant 
              email in seconds.
            </p>
            <p className="text-lg text-gray-900 leading-relaxed">
              Tailor 1:1 messages to pain points and value props automatically—no manual research.
            </p>
          </div>
          <button className="btn inline-flex items-center space-x-2">
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="relative">
          <img
            src={AiPersonalizedImg}
            alt="AI-Personalized email interface"
          />
        </div>
      </div>

      {/* Bottom half: feature cards */}
      <div
        ref={cardsRef}
        className={`
          max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
          grid grid-cols-1 md:grid-cols-3 gap-8
          transition-all duration-700 ease-out
          ${cardsVisible
            ? 'opacity-100 translate-y-0 animate-slide-up-slow'
            : 'opacity-0 translate-y-20'}
        `}
      >
        {features.map((feat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
          >
            <img src={feat.icon} alt="" className="mb-6" />
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {feat.title}
            </h3>
            <p className="text-gray-900 leading-relaxed">{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AIPersonalizedSection
