import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MaterialIcon, FacebookIcon, LinkedInIcon, InstagramIcon, SendIcon } from '@/components/ui/icons';
import { useForm } from 'react-hook-form';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const Footer: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<{ email: string }>();
  const { toast } = useToast();

  const onSubmit = async (data: { email: string }) => {
    try {
      await apiRequest('POST', '/api/newsletter/subscribe', data);
      toast({
        title: "Success",
        description: "You've been subscribed to our newsletter.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe to newsletter. Please try again.",
        variant: "destructive",
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center mr-2">
                <span className="text-primary font-bold text-xl">PMC</span>
              </div>
              <span className="font-bold text-xl">PMC Pakistan</span>
            </div>
            <p className="text-gray-400 mb-4">Your trusted partner for innovative digital solutions in Pakistan.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition">
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                  className="text-gray-400 hover:text-accent transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-gray-400 hover:text-accent transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#partnership" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('partnership');
                  }}
                  className="text-gray-400 hover:text-accent transition"
                >
                  Partnership
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="text-gray-400 hover:text-accent transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="text-gray-400 hover:text-accent transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-gray-400 hover:text-accent transition"
                >
                  AI Voice Bots
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-gray-400 hover:text-accent transition"
                >
                  AI Chat Bots
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-gray-400 hover:text-accent transition"
                >
                  AI Agents
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-gray-400 hover:text-accent transition"
                >
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-gray-400 hover:text-accent transition"
                >
                  Cybersecurity
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates on technology trends and services.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex">
              <Input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-900"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              <Button type="submit" className="bg-accent hover:bg-accent-dark px-4 py-2 rounded-r-lg transition">
                <SendIcon className="h-5 w-5" />
              </Button>
            </form>
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/20 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} PMC Pakistan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
