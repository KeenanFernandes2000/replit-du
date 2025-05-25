import React from 'react';
import { MaterialIcon, CheckCircleIcon, ArrowRightIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

interface ServiceFeature {
  text: string;
}

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  features: ServiceFeature[];
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, features }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="service-card bg-white rounded-md shadow-xl p-8 transition duration-300 border-t-4 border-primary/20">
      <div className="bg-primary/10 w-16 h-16 rounded-md flex items-center justify-center mb-5">
        <MaterialIcon icon={icon} className="text-primary text-3xl" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircleIcon className="text-accent mr-2 h-5 w-5 flex-shrink-0" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant="link"
        onClick={scrollToContact}
        className="text-primary font-semibold hover:text-primary-dark p-0 flex items-center"
      >
        Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: 'record_voice_over',
      title: 'AI Voice Bots',
      description: 'Intelligent voice assistants that can handle customer inquiries, process requests, and provide information in natural language.',
      features: [
        { text: 'Natural language processing' },
        { text: 'Multi-language support' },
        { text: 'Advanced voice recognition' }
      ]
    },
    {
      icon: 'chat',
      title: 'AI Chat Bots',
      description: 'Interactive chat assistants that provide instant responses to customer queries, improving engagement and support efficiency.',
      features: [
        { text: '24/7 customer support' },
        { text: 'Contextual understanding' },
        { text: 'Seamless handover to humans' }
      ]
    },
    {
      icon: 'smart_toy',
      title: 'AI Agents',
      description: 'Autonomous AI agents that can perform complex tasks, analyze data, and make decisions based on predefined parameters.',
      features: [
        { text: 'Task automation' },
        { text: 'Predictive analytics' },
        { text: 'Process optimization' }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Digital Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive technology solutions designed to optimize your operations and enhance customer experience across Jordan.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
