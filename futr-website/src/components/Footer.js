import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <motion.footer
      className={`${styles.footer} glass-container`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <p>&copy; {new Date().getFullYear()} FUTR Clan. The Grind Never Stops.</p>
    </motion.footer>
  );
};

export default Footer; 