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
    'Customized solutions for Kuwait\'s market needs',
    'Combined expertise in technology and local business',
    'Comprehensive training and implementation support'
  ];

  return (
    <section id="partnership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Strategic Partnership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">BIC Kuwait is proud to be the exclusive strategic partner of potential.com in Kuwait, bringing world-class technology solutions to the local market.</p>
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
            <h3 className="text-2xl font-bold text-primary mb-4">Representative for Kuwait</h3>
            <p className="text-gray-600 mb-6">As a strategic partner of potential.com in Kuwait, BIC Kuwait delivers innovative technology solutions that are customized for the local market while maintaining global standards of excellence.</p>
            
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-lg mb-3">Partnership Benefits</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="text-accent mr-2 h-5 w-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-dark text-white transition px-8 py-3 rounded-lg font-semibold inline-block"
            >
              Discuss Partnership Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
