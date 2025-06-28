import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../logo.webp';
import styles from './Header.module.css';

const navLinks = [
  { to: "about", text: "About" },
  { to: "members", text: "Team" },
  { to: "merch", text: "Merch" },
  { to: "brands", text: "Brands" },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

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
      <p className={styles.subtitle}>"The grind is real. The FUTR is earned."</p>
      <nav className={`${styles.nav} ${isNavOpen ? styles.navOpen : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={closeNav}
            className={styles.navLink}
          >
            {link.text}
          </Link>
        ))}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
          onClick={closeNav}
          className={`${styles.navLink} ${styles.ctaLink}`}
        >
          Apply Now
        </Link>
      </nav>
      {isMobile && (
        <button
          className={`${styles.hamburger} ${isNavOpen ? styles.open : ''}`}
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      )}
    </motion.header>
  );
};

export default Header; 