import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../logo.png';
import styles from './Header.module.css';

const navLinks = [
  { to: "about", text: "About" },
  { to: "members", text: "The Lineup" },
  { to: "merch", text: "Merch" },
  { to: "brands", text: "Brands" },
  { to: "contact", text: "Join" },
];

const Header = () => {
  const closeNav = () => {};

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
      <nav className={styles.nav}>
        {navLinks.map(link => (
          <motion.div key={link.to} className={styles.navLinkContainer}>
            <Link
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
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header; 