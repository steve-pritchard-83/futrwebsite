import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../logo.png';
import styles from './Header.module.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.logoContainer}>
        <img src={logo} alt="FUTR Clan Logo" className={styles.logo} />
      </div>
      <h1 className={styles.title}>FUTR</h1>
      <p className={styles.subtitle}>“The grind is real. The FUTR is earned.”</p>
      <nav className={`${styles.nav} ${isNavOpen ? styles.navOpen : ''}`}>
        <Link to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={closeNav}>About</Link>
        <Link to="members" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={closeNav}>The Lineup</Link>
        <Link to="merch" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={closeNav}>Merch</Link>
        <Link to="brands" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={closeNav}>Brands</Link>
        <Link to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={closeNav}>Join</Link>
      </nav>
      {isMobile && (
        <button className={styles.hamburger} onClick={toggleNav} aria-label="Toggle navigation">
          <div className={`${styles.bar} ${isNavOpen ? styles.bar1Open : ''}`} />
          <div className={`${styles.bar} ${isNavOpen ? styles.bar2Open : ''}`} />
          <div className={`${styles.bar} ${isNavOpen ? styles.bar3Open : ''}`} />
        </button>
      )}
    </motion.header>
  );
};

export default Header; 