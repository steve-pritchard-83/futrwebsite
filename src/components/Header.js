import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../logo.png';
import styles from './Header.module.css';

const Header = () => {
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
      <nav className={styles.nav}>
        <Link to="about" smooth={true} duration={500} className={styles.navLink}>About</Link>
        <Link to="members" smooth={true} duration={500} className={styles.navLink}>Members</Link>
        <Link to="brands" smooth={true} duration={500} className={styles.navLink}>Brands</Link>
        <Link to="contact" smooth={true} duration={500} className={styles.navLink}>Contact</Link>
        <Link to="contact" smooth={true} duration={500} className={`${styles.navLink} ${styles.ctaLink}`}>Join Us</Link>
      </nav>
    </motion.header>
  );
};

export default Header; 