import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AvatorImg1 from '@/images/avatorImg1.svg';
import AvatorImg2 from '@/images/avatorImg2.svg';
import AvatorImg3 from '@/images/avatorImg3.svg';
import AvatorImg4 from '@/images/avatorImg4.svg';
import AvatorImg5 from '@/images/avatorImg5.svg';
import AvatorImg6 from '@/images/avatorImg6.svg';
import AvatorImg7 from '@/images/avatorImg7.svg';
import AvatorImg8 from '@/images/avatorImg8.svg';
import AvatorImg9 from '@/images/avatorImg9.svg';
import AvatorImg10 from '@/images/avatorImg10.svg';
import AvatorImg11 from '@/images/avatorImg11.svg';
import AvatorImg12 from '@/images/avatorImg12.svg';
import AvatorImg13 from '@/images/avatorImg13.svg';
import AvatorImg14 from '@/images/avatorImg14.svg';
import AvatorImg15 from '@/images/avatorImg15.svg';
import AvatorImg16 from '@/images/avatorImg16.svg';
import AvatorImg17 from '@/images/avatorImg17.svg';
import AvatorImg18 from '@/images/avatorImg18.svg';
import AvatorImg19 from '@/images/avatorImg19.svg';
import AvatorImg20 from '@/images/avatorImg20.svg';

const TestimonialsSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const testimonials = {
    column1: [
      {
        name: "Oleg Torgonskiy",
        title: "Account Executive, DeckRobot",
        avatar: AvatorImg1,
        content: "Appreciate your message and product. It’s doing great job on summarizing the lead’s profile and connecting it to the product I promote. I believe you are doing great work and this is definitely the best “message generation” tool i’ve used so far."
      },
      {
        name: "Simon Fournier",
        title: "Chief of Staff at Klark.ai",
        avatar: AvatorImg2,
        content: "Tuesday is by far the best AI outreach tool I've seen and I absolutely love the way I've seen it marketed"
      },
      {
        name: "Kristina Rad",
        title: "Growth Specialist, Superfiliate",
        avatar: AvatorImg3,
        content: "It's actually a phenomenal tool!"
      },
      {
        name: "Simon Fournier",
        title: "Account Executive, DeckRobot",
        avatar: AvatorImg4,
        content: "I have to give credit where credit is due. Great email, you really got my attention."
      },
      {
        name: "Kiara",
        title: "Sales Development Representative, Discout",
        avatar: AvatorImg5,
        content: "I love your email and shared this with our team"
      },
      {
        name: "Chase Huisman",
        title: "Sales Development Representative, Allego",
        avatar: AvatorImg6,
        content: "As a current SDR I really appreciate that outreach and your attention to detail and personalization (referencing the car and tech nerd stuff from LinkedIn)!"
      }
    ],
    column2: [
      {
        name: "Annalisa Lucini",
        title: "International Sales & Business Developer, Teamtailor",
        avatar: AvatorImg7,
        content: "The tool is amazing and the chrome extension even more! It helps us so much in saving times and energy."
      },
      {
        name: "Jonathan Trinidad",
        title: "Business Development Rep, Duda",
        avatar: AvatorImg8,
        content: "TBH its an amazing system"
      },
      {
        name: "Grant Hallock",
        title: "New Business, Ramp",
        avatar: AvatorImg9,
        content: "This is a really fire cold email...."
      },
      {
        name: "Bastani",
        title: "Sales Development Manager, Visiting Media",
        avatar: AvatorImg10,
        content: "The customization of your message has piqued my interest. Let's setup a time where I can learn about what you have to offer"
      },
      {
        name: "Jack Brozynski",
        title: "",
        avatar: AvatorImg11,
        content: "This is one of the best cold emails I have ever received."
      },
      {
        name: "Derrick MacMillan",
        title: "",
        avatar: AvatorImg12,
        content: "Appreciate the pre-email research. Keep up the good work. I'll take a peek!"
      },
      {
        name: "Leila McElroy",
        title: "Sales Development, Orum",
        avatar: AvatorImg13,
        content: "I normally don't answer these emails but I have to say this was outstanding and was great personalization."
      }
    ],
    column3: [
      {
        name: "Simran Hundal",
        title: "Founder & Tech Recruiter, Titan Tech Solutions",
        avatar: AvatorImg14,
        content: "Really happy with Tuesday at the moment and it's making my life so much easier when it comes to researching prospects to reach out to via email or LinkedIn."
      },
      {
        name: "Brandon Huff",
        title: "",
        avatar: AvatorImg15,
        content: "I think it's a great tool"
      },
      {
        name: "Nia Bennafield",
        title: "Trinet",
        avatar: AvatorImg16,
        content: "This was an awesome email!"
      },
      {
        name: "Leila",
        title: "",
        avatar: AvatorImg17,
        content: "Love the email and your AI platform, it looks really interesting what you do!"
      },
      {
        name: "Nathan Fisette",
        title: "Sales Development Representative, Split",
        avatar: AvatorImg18,
        content: "Sweet email – I'm getting that's the power of your product?"
      },
      {
        name: "Deborah Partiz",
        title: "Area Sales Manager, Account Development SLED, Staples",
        avatar: AvatorImg19,
        content: "This is an incredibly good email strategy."
      },
      {
        name: "Patrick Donaher",
        title: "Sales Development Representative, Split",
        avatar: AvatorImg20,
        content: "Okay, first off ... This is a great email. I am going to try that link below and happy to help anyway further simply because of how great this email is. Have a great Thursday!"
      }
    ]
  };

  return (
    <section className='bg-white py-20'>
      <div ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
        }`}
        >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Discover <span className="text-primary">Why users love</span>
          </h2>
          <h2 className="text-4xl lg:text-4xl font-semibold text-primary">
            Tuesday.so
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            {testimonials.column1.map((testimonial, index) => (
              <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {testimonials.column2.map((testimonial, index) => (
              <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {testimonials.column3.map((testimonial, index) => (
              <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialProps {
  testimonial: {
    name: string;
    title: string;
    avatar: string;
    content: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-[20px]">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="w-12 h-12 border">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </div>
        </div>
        
        <p className="mt-4 text-gray-900">{testimonial.content}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;