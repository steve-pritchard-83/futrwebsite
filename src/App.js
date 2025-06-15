import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll } from 'framer-motion';
import './App.css';

import Cursor from './Cursor';
import Header from './components/Header';
import About from './components/About';
import Members from './components/Members';
import Merch from './components/Merch';
import Brands from './components/Brands';
// import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import FloatingClouds from './components/FloatingClouds';

function App() {
  const { scrollYProgress } = useScroll();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="App">
      <Helmet>
        <title>FUTR Clan | Professional Fortnite Team</title>
        <meta name="description" content="The official website for FUTR, a professional Fortnite competitive clan. Join us to find out more about our members, see our media, and get in touch." />
      </Helmet>
      <Cursor />
      <FloatingClouds scrollYProgress={scrollYProgress} />
      <Header />
      <main>
        <About />
        <Members />
        <Merch />
        <Brands />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
