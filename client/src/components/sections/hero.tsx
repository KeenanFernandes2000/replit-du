import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient pt-28 pb-16 lg:pt-40 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              AI Agentic Solutions for Jordan's Future
            </h1>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              PMC Jordan has partnered with potential.com, bringing world-class AI Agentic solutions to the Jordanian market.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 justify-center">
              <Button
                onClick={() => scrollToSection('services')}
                className="bg-white text-primary hover:bg-white/90 transition px-8 py-5 rounded-md font-semibold text-center shadow-md"
              >
                Explore Solutions
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-secondary hover:bg-secondary/90 text-white transition px-8 py-5 rounded-md font-semibold text-center shadow-md"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="tech-animation-background absolute inset-0 z-0">
            <div className="floating-bits"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
