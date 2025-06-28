import React, { Suspense, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useScroll } from 'framer-motion';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Cursor from './Cursor';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import FloatingClouds from './components/FloatingClouds';
import About from './components/About';
import Divider from './components/Divider';

const Members = lazy(() => import('./components/Members'));
const Merch = lazy(() => import('./components/Merch'));
const Brands = lazy(() => import('./components/Brands'));
const Contact = lazy(() => import('./components/Contact'));

const LoadingFallback = () => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="loader"></div>
  </div>
);

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>FUTR Clan | Professional Fortnite Team</title>
          <meta name="description" content="The official website for FUTR, a professional Fortnite competitive clan. Join us to find out more about our members, see our media, and get in touch." />
          <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <Cursor />
        <FloatingClouds scrollYProgress={scrollYProgress} />
        <Header />
        <main>
          <About />
          <Divider />
          <Suspense fallback={<LoadingFallback />}>
            <Members />
            <Divider />
            <Merch />
            <Divider />
            <Brands />
            <Divider />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <BackToTopButton />
        <Analytics />
        <SpeedInsights />
      </HelmetProvider>
    </div>
  );
}

export default App;
