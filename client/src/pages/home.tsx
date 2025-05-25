import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import Services from '@/components/sections/services';
import Partnership from '@/components/sections/partnership';
import About from '@/components/sections/about';
import CTA from '@/components/sections/cta';
import Contact from '@/components/sections/contact';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>PMC Jordan - Digital Solutions & AI Innovation</title>
        <meta name="description" content="PMC Jordan specializes in innovative digital solutions including AI voice bots, AI chat bots, AI agents and other technology solutions. Part of the pmc.me family serving Jordan." />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Poppins:wght@500;600;700&family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Partnership />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
