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
    <section className="py-24 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">Contact us today to discuss how our digital solutions can help you achieve your business goals and stay ahead in the digital era in Pakistan.</p>
        <Button 
          onClick={scrollToContact}
          className="bg-white hover:bg-white/90 text-primary transition px-10 py-5 rounded-md font-semibold inline-flex items-center justify-center text-lg mx-auto shadow-lg"
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};

export default CTA;
