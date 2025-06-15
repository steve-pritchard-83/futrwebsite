import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <motion.header
      className={`${styles.header} glass-container`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} alt="FUTR Clan Logo" />
      </div>
      <h1 className={styles.title}>FUTR</h1>
      <p className={styles.subtitle}>The future of Fortnite is not a spectator sport. It's an arena. And we're stepping in.</p>
    </motion.header>
  );
};

export default Header; 