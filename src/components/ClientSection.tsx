import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TwilioLogo     from '@/images/twilio_logo.svg';
import SnowflakeLogo  from '@/images/snowflake-logo-color-rgb.svg';
import SalesforceLogo from '@/images/salesforce_logo.svg';
import DatabricksLogo from '@/images/databricks_logo.svg';
import MondayLogo     from '@/images/mondaycom_logo.svg';
import SproutLogo     from '@/images/Sprout Social primary logo.svg';
import YelpLogo       from '@/images/yelp_logo 1.svg';
import MongoLogo      from '@/images/mongodb_logo.svg';

const ClientSection: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const logos = [
    { name: 'Twilio',     src: TwilioLogo     },
    { name: 'Snowflake',  src: SnowflakeLogo  },
    { name: 'Salesforce', src: SalesforceLogo },
    { name: 'Databricks', src: DatabricksLogo },
    { name: 'Monday.com', src: MondayLogo     },
    { name: 'Sprout',     src: SproutLogo     },
    { name: 'Yelp',       src: YelpLogo       },
    { name: 'MongoDB',    src: MongoLogo      },
  ]

  // we repeat 2× so the scroll is continuous
  const repeated = [...logos, ...logos]

  return (
    <section className="bg-white overflow-hidden">
      {/* Heading */}
      <div ref={ref}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-all duration-1000 ${
        isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
      }`}
      >
        <h2 className="text-center text-lg text-gray-900 font-medium">
          Trusted by leading GTM teams around the world
        </h2>
      </div>

      {/* Marquee */}
      <div  ref={ref}
      className={`relative overflow-hidden mask-gradient pb-10 transition-all duration-1000 ${
        isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
      }`}
      >
        <div className="flex space-x-16 animate-marquee will-change-transform py-8">
          {repeated.map((logo, i) => (
            <div key={i} className="flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientSection
