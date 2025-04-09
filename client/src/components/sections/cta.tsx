import React from 'react';
import { Button } from '@/components/ui/button';

const CTA: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Contact us today to discuss how our ICT solutions can help you achieve your business goals and stay ahead in the digital era.</p>
        <Button 
          onClick={scrollToContact}
          className="bg-accent hover:bg-accent-dark text-white transition px-10 py-4 rounded-lg font-semibold inline-block text-lg"
        >
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default CTA;
