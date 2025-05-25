import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircleIcon } from '@/components/ui/icons';

const Partnership: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    'Access to cutting-edge global technologies',
    'Customized solutions for Jordan\'s market needs',
    'Combined expertise in technology and local business',
    'Comprehensive training and implementation support'
  ];

  return (
    <section id="partnership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Strategic Partnership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">PMC Jordan has partnered with potential.com, bringing world-class AI Agentic solutions to the Jordanian market.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Business partnership" 
              className="rounded-lg shadow-lg w-full h-auto" 
              width="600" 
              height="400"
            />
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-primary mb-4">Partnership with potential.com</h3>
            <p className="text-gray-600 mb-6">Through our strategic partnership with potential.com, we deliver world-class AI Agentic solutions that are customized for the Jordanian market while maintaining global standards of excellence.</p>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-md p-8 mb-6 shadow-md border border-gray-200">
              <h4 className="font-bold text-lg mb-4 text-primary">Partnership Benefits</h4>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="text-secondary mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;