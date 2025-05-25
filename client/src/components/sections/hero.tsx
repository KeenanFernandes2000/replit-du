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
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Innovative Digital Solutions for Jordan's Future
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              PMC Jordan delivers cutting-edge AI voice bots, chat bots, and comprehensive digital solutions to transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={() => scrollToSection('services')}
                className="bg-white text-primary hover:bg-gray-100 transition px-8 py-6 rounded-lg font-semibold text-center"
              >
                Explore Solutions
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent-dark text-white transition px-8 py-6 rounded-lg font-semibold text-center"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Digital technology illustration" 
              className="rounded-lg shadow-2xl max-w-full h-auto lg:max-w-lg" 
              width="600" 
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
