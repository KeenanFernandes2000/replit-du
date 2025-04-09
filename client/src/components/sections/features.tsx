import React from 'react';
import { MaterialIcon } from '@/components/ui/icons';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 rounded-lg">
      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <MaterialIcon icon={icon} className="text-primary text-3xl" />
      </div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: 'trending_up',
      title: 'Innovative Solutions',
      description: 'Cutting-edge technologies tailored to meet modern business challenges.'
    },
    {
      icon: 'integration_instructions',
      title: 'Seamless Integration',
      description: 'Solutions that work with your existing infrastructure and systems.'
    },
    {
      icon: 'support_agent',
      title: 'Local Expertise',
      description: 'Specialized knowledge of Kuwait\'s business environment and requirements.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
