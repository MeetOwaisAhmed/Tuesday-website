import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImg from '@/images/heroTextImg.svg';
import heroIconImg from '@/images/heroIconImg.svg';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
          }`}
        >

          {/* Left Content with animation */}
          <div className="space-y-6">
            {/* Y Combinator Button */}
            <button className="flex items-center space-x-2 px-3 py-1 border border-gray-200 rounded-full text-gray-900 cursor-default">
              <img src={heroIconImg} alt='Y Combinator logo' className='rounded-full px-1 py-1' />
              <span className="text-gray-900  text-sm">Backed by Y Combinator</span>
            </button>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 leading-[1.2]">
                Scale <span className="text-primary">Personalized</span> outreach
                <br />
                with Triple-Verified email and
                <br />
                mobile number leads
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-900 leading-relaxed max-w-lg">
              First, build hyper-targeted B2B contact lists without needing any manual verification – we'll verify the leads for you. Then, generate 1000s of personalized emails that get you 8x more replies within minutes using AI.
            </p>

            {/* CTA Button */}
            <div>
              <button className="btn text-white inline-flex items-center space-x-2">
                <span>Get Started Now</span>
                <ArrowRight className='w-5 h-5'/>
              </button>
            </div>
          </div>

          {/* Right Content with animation */}
          <div className="relative mt-20 lg:mt-0">
            {/* 1) Big light-pink backing */}
            <div className='absolute -inset-3 bg-pink-100 rounded-2xl rotate-[5.38deg] origin-center'></div>
            {/* PNG Image with "See How It Works" */}
            <img 
                  src={heroImg} 
                  alt="See How It Works" 
                  className="absolute -top-20 left-20 w-28 sm:w-35 h-auto"
                />

            {/* YouTube Video */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-linkHover">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/bzS-ciIY0po"
                  title="Tuesday Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-[315px] rounded-2xl"
                ></iframe>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl opacity-20 blur-sm -z-10"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
