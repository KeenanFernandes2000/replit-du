import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About PMC Pakistan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Learn more about our mission, values, and commitment to advancing technology in Pakistan.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">PMC Pakistan is dedicated to providing innovative digital solutions that empower businesses in Pakistan to thrive in the digital age. We aim to be the trusted technology partner that helps organizations transform, grow, and succeed through tailored technology implementations.</p>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">To be Pakistan's leading provider of advanced technology solutions, driving digital transformation across industries and contributing to the country's vision of a diversified, knowledge-based economy.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-7 rounded-md shadow-lg border-l-4 border-primary">
                <h4 className="font-bold text-lg mb-3 text-primary">Experience</h4>
                <p className="text-gray-600">Years of expertise in delivering technology solutions across various industries in Pakistan.</p>
              </div>
              
              <div className="bg-white p-7 rounded-md shadow-lg border-l-4 border-secondary">
                <h4 className="font-bold text-lg mb-3 text-primary">Local Knowledge</h4>
                <p className="text-gray-600">Deep understanding of Pakistan's business landscape, regulations, and market needs.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mb-10 lg:mb-0 order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="BIC Kuwait team" 
              className="rounded-lg shadow-lg w-full h-auto" 
              width="600" 
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
