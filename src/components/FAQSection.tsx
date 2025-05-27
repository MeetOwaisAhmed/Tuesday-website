import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);

  const faqData = [
    {
      question: "What happens if I want additional credits?",
      answer: (
        <>
          <p>
            No worries! You can easily get more credits by upgrading to a higher tier in Settings → Billing.
          </p>
          <p className="mt-4">
            For those who’re on the Pro plan, you can upgrade from 2k credits to 5k credits.
          </p>
          <p className="mt-4">
            For those who’re on the Team plan, you can upgrade to 20k credits. The higher the tier, the more volume discount you will enjoy.
          </p>
          <p className="mt-4">
            If you’d like to get more credits than those tiers allow, just contact our friendly sales team at{' '}
            <a
              href="mailto:sales@tuesday.so"
              className="footer-link text-gray-900"
            >
              sales@tuesday.so
            </a>{' '}
            and we’ll help you out ASAP.
          </p>
        </>
      ),
    },
    {
      question: "Do you have enterprise packages?",
      answer:
        "Of course! We offer tailored Enterprise packages to accommodate the needs of larger organizations. From our Pricing page, click on Talk to sales button to get started."
    },
    {
      question: "What other platforms do users use for lead generation?",
      answer: (
        <>
        <p>Users typically combine Tuesday and a sending platform such as Smartlead / Instantly / Apollo.io, to run cold email campaigns. Thanks to our email sending integrations, you can directly send leads to whichever tool you choose easily.</p><br/>
        <p>If you want to send LinkedIn messages and connection requests automatically, we recommend using Tuesday and MeetAlfred.com in combination. You can export the leads and messages in Tuesday as CSV files and import into MeetAlfred.com to run your campaign.</p>
        </>
      ),
    },
    {
      question: "How accurate is the data provided by Tuesday?",
      answer:
        "Every single email and phone number from Tuesday is verified by us before you receive it. While no dataset is perfect, we strive to ensure the highest possible data quality to maximize your success in outbound sales and marketing."
    },
    {
      question: "How long will it take for me to build a lead list?",
      answer:
        "With Tuesday’s user-friendly interface and powerful lead filters, you can build a targeted list of prospects in just a few minutes."
    },
    {
      question: "How do I verify emails in Tuesday?",
      answer:
        "Email verification is built into Tuesday, so you don’t have to worry about it. If you want extra validation, we also have a standalone email verification tool which you can setup in one click."
    },
    {
      question: "How do I generate personalized emails using AI?",
      answer: (
        <>
        <p>Tuesday’s AI Email Writer tool is the best sales outreach AI out there today. You can easily generate personalized emails using our pre-built template, which takes in a LinkedIn URL of any prospect and produces a fully personalized outreach message in just under 3 seconds.</p><br/>
        <p>You can even customize the structure, tone of voice, and value proposition of the sales email just by clicking a few buttons. It’s that easy!</p>
        </>
      ),
    },
    {
      question: "How do I customize the AI message to sell my offer?",
      answer:
        "You can directly click on the AI message and adjust the AI prompt. Our easy-to-use knowledge base allows you to define specifically which buyer personas and pain points you address, along with any case studies and proof points. Whatever you feed into the system, Tuesday AI email writer will use them to write the personalized message for you!"
    },
    {
        question: "What types of businesses can benefit from using Tuesday?",
        answer: "Tuesday is beneficial to businesses of all sizes and industries, from early stage startups and marketing agencies to large enterprises looking to enhance their outbound marketing efforts."
    },
    {
        question: "Can Tuesday save me time on lead generation?",
        answer: (
            <>
             <p>Yes, Tuesday eliminates the need for manual data validation and spreadsheet cleaning from your lead generation process - saving you hours per week. </p><br/>
             <p>Tuesday’s AI email writer reads the entire LinkedIn and company profile of any lead you want to reach out to, and then crafts a fully personalized email in seconds.</p><br/>
             <p>This could save you 3-5 minutes per lead while multiplying your efforts by 10-100x.</p>
            </>
        ),
    },
    {
        question: "How much does Tuesday cost and what pricing plans are available?",
        answer: (
            <>
             <p>We’ve got 2 paid plans for you to choose from</p><br/>
             <p>Tuesday’s Pro plan starts at only $99/month for 2,000 monthly credits. That means you can generate 2,000 leads, write 2,000 AI personalized emails, or get 1,000 triple-verified emails.</p><br/>
             <p>Tuesday’s Team plan starts at $399/month for 10,000 monthly credits. That means you can generate 10,000 leads, write 10,000 AI personalized emails, or get 5,000 triple-verified emails.</p><br/>
             <p>For more info on pricing and options, please visit our pricing page.</p>
            </>
        ),
    },
    {
        question: "How can I send out the email messages generated by Tuesday?",
        answer: (
            <>
             <p>You can either connect your Gmail account or use any email sending tool.</p><br/>
             <p>We natively integrate with Smartlead, Instantly, Apollo.io, Salesloft, [Outreach.io](http://Outreach.io) and HubSpot sales automation tool. Plus, you can export Tuesday leads as CSV file and import them into any other tool you want to use. </p><br/>
             <p>We recommend using a combination of Tuesday and an email sending tool like Smartlead to launch and grow your cold outreach campaign. Our customers have seen great success and 11.5x ROI using this approach.</p>
            </>
        ),
    },
    {
        question: "How can I send LinkedIn messages generated by Tuesday?",
        answer:"We recommend using Tuesday and Meetalfred.com to generate leads and messages, and then send out those messages automatically. You can engage, nurture and follow-up with leads while you sleep!"
    },
    {
        question: "How does Tuesday compare to other lead generation tools in the market?",
        answer: "Tuesday stands out due to its extensive B2B database, user-friendly interface, best-in-class AI personalization, and most importantly – the built-in Triple Verification process. You won’t have to manually clean spreadsheets or use multiple tools to validate emails. We do it all for you!"
    },
    {
        question: "How does Tuesday’s credit system work?",
        answer: (
            <>
             <p>Tuesday uses credit system to ensure fair usage. Each saved lead costs 1 credit. Verified email address costs 2 credits. Verified mobile number costs 3-6 credits. And AI personalized email costs only 1 credit. You can evaluate your needs and estimate how many credits you will need based on how many leads you plan on reaching out to.</p><br/>
             <p>You can upgrade, downgrade, cancel your plan at any time. Tuesday’s credit system gives you the most flexibility and is here to help you every step of the way to successful cold outreach.</p>
            </>
        ),
    },
    {
        question: "Does Tuesday have export limits?",
        answer: "No, there are no export limits in Tuesday. You can export 100% of your data to CSV, using API calls, or through direct integrations to push to your CRMs and email sending tools."
    },
    {
        question: "How easy is it to use Tuesday?",
        answer: "Tuesday’s intuitive interface and powerful lead filter and email personalization capabilities make it easy for users of all skill levels to build an effective targeted outbound campaign in a few minutes. Even your grandma can use it!"
    },
    {
        question: "How can I contact customer support",
        answer: (
            <>
             <p>You can contact Tuesday’s award-winning customer support 24/7, through website live chat or by emailing us at <a
              href="mailto:sales@tuesday.so"
              className="footer-link text-gray-900"
            > support@tuesday.so</a>. We are always here to help you succeed!</p>
            </>
        ),
    },
    {
        question: "How secure is my data with Tuesday?",
        answer: (
            <>
             <p>Tuesday takes data security and compliance seriously, employing industry-leading encryption and security measures to protect your data and ensure its confidentiality.</p><br/>
             <p>Tuesday is SOC 2 Type II compliant with certification. Enterprise customers may request to view certification PDF upon signed NDA.</p>
            </>
        ),
    },
    {
        question: "What is the process for exporting leads from Tuesday?",
        answer: "Exporting leads from Tuesday is a breeze. Just save the leads you want to a Tuesday worksheet and click on the Export button located on the top toolbar, and your file will be ready to download as a CSV in just a few seconds."
    },
    {
        question: "Can I bring my own leads into Tuesday?",
        answer: (
            <>
             <p>Yes! You can import CSV which contains your own leads into Tuesday, and use our Find Work Email and Verify Email tools to get contact emails.</p><br/>
             <p>You can also use our Find Mobile Phone Number tool to get verified mobile numbers for any prospect, and use our AI Email Writer tool to generate 1000s of personalized sales email messages that generate 8x replies.</p>
            </>
        ),
    },
    {
        question: "How often is the data updated in Tuesday?",
        answer: "Tuesday’s B2B lead database is updated with fresh data regularly to maintain accuracy and relevance, ensuring you have access to the most up-to-date information for your outbound marketing campaigns."
    },
    {
        question: "Can Tuesday integrate with my cold email sending software and/or CRM?",
        answer: "Yes, Tuesday can be easily integrated with popular cold email sending software and CRM platforms, streamlining your workflow and improving efficiency."
    },
    {
        question: "Can I cancel or upgrade my Tuesday subscription at any time?",
        answer: "Absolutely! You can upgrade, downgrade, or cancel your Tuesday subscription at any time. With Tuesday, you’re never locked into any paid plan you don’t want and you’ll have the ultimate flexibility to adapt your plan to your business’s changing needs."
    },
    {
        question: "Does Tuesday offer any training or resoures to help me use the platform effectively?",
        answer: "Yes, Tuesday provides extensive resources to help you succeed, including dozens of video tutorials, Loom recordings, help articles and best practices, to help you make the most of our platform and set you up for success in outbound marketing."
    },
    {
        question: "Can I use Tuesday to find leads in specific geographic locaions?",
        answer: "Yes, Tuesday allows you to filter leads by geographic locations, helping you target prospects in specific countries, cities, and regions to cater to your business’s unique needs."
    },
    {
        question: "How does Tuesday source and verify its data?",
        answer: "Tuesday sources data from a variety of public and proprietary sources, including web scraping, data partnerships, 3rd party data vendors, and user submissions. We also employ advanced real-time verification algorithms and large language models (LLMs) to ensure the accuracy and reliability of our data."
    },
    {
        question: "Am I locked into a long-term pricing package with Tuesday?",
        answer: "No, our pricing packages are month-to-month and credit based, so you can cancel at anytime if you no longer need it. We are known for our easy cancelation process, because we’re confident that you’ll come back anytime you are in need of our service again."
    },
    {
        question: "Why does Tuesday have a verification tool if the contacts are already triple-verified?",
        answer: (
            <>
             <p>Great question! We know you may be getting your leads from a variety of sources, such as form submissions, other data vendors, existing records in your system, and user signups. So we give you the ability to easily verify those emails in one click, ensuring your success in reaching your buyers and protecting your domain reputation against invalid and bounced emails.</p><br/>
             <p>Tuesday’s verify email tool is great for:</p>
             <ul className='mt-2 ml-8 list-disc space-y-2 text-gray-900'>
                <li>Verify data you acquired from other sources</li>
                <li>Clean your email newsletter / email list data</li>
                <li>Re-verify &amp; clean old lead lists</li>
                <li>Clean up your CRM data</li>
             </ul>
            </>
        ),
    }
  ];

  const visibleFAQs = showAll ? faqData : faqData.slice(0, 16);

  return (
    <section className='bg-white py-20'>
      <div  ref={ref}
         className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
         isVisible ? 'animate-slide-up-slow opacity-100' : 'opacity-0 translate-y-20'
         }`}
       >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Frequently <span className="text-primary">asked questions</span>
          </h2>
        </div>

        {/* Accordion */}
        
          <Accordion type="single" collapsible className='mb-8'>
            {visibleFAQs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className='rounded-2xl border border-gray-300 mb-1 last:mb-0'>
                <AccordionTrigger className='flex items-center justify-between w-full py-5 px-6 text-left text-gray-900 font-semibold text-lg no-underline hover:no-underline'>{faq.question}</AccordionTrigger>
                <AccordionContent className='px-1 pb-1 text-gray-900'>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
       

        {/* Load More/ View Less */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn bg-white border border-gray-200 text-gray-900"
          >
            {showAll ? 'View Less' : 'Load More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
