import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { MenuIcon, CloseIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [, setLocation] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">BIC</span>
          </div>
          <div>
            <span className="font-bold text-primary text-xl">BIC Kuwait</span>
            <p className="text-xs text-gray-600">ICT Solutions</p>
          </div>
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }} 
            className={cn(
              "nav-link font-semibold hover:text-primary transition",
              activeSection === 'home' ? "text-primary active" : "text-gray-600"
            )}
          >
            Home
          </a>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }} 
            className={cn(
              "nav-link font-semibold hover:text-primary transition",
              activeSection === 'services' ? "text-primary active" : "text-gray-600"
            )}
          >
            Services
          </a>
          <a 
            href="#partnership" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('partnership');
            }} 
            className={cn(
              "nav-link font-semibold hover:text-primary transition",
              activeSection === 'partnership' ? "text-primary active" : "text-gray-600"
            )}
          >
            Partnership
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }} 
            className={cn(
              "nav-link font-semibold hover:text-primary transition",
              activeSection === 'about' ? "text-primary active" : "text-gray-600"
            )}
          >
            About Us
          </a>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-lg transition font-semibold"
          >
            Contact Us
          </Button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn("lg:hidden bg-white border-t", isOpen ? "block" : "hidden")}>
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }} 
            className={cn(
              "py-2 font-semibold hover:bg-gray-100 px-3 rounded",
              activeSection === 'home' ? "text-primary" : "text-gray-600"
            )}
          >
            Home
          </a>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }} 
            className={cn(
              "py-2 font-semibold hover:bg-gray-100 px-3 rounded",
              activeSection === 'services' ? "text-primary" : "text-gray-600"
            )}
          >
            Services
          </a>
          <a 
            href="#partnership" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('partnership');
            }} 
            className={cn(
              "py-2 font-semibold hover:bg-gray-100 px-3 rounded",
              activeSection === 'partnership' ? "text-primary" : "text-gray-600"
            )}
          >
            Partnership
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }} 
            className={cn(
              "py-2 font-semibold hover:bg-gray-100 px-3 rounded",
              activeSection === 'about' ? "text-primary" : "text-gray-600"
            )}
          >
            About Us
          </a>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-lg transition font-semibold text-center"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
