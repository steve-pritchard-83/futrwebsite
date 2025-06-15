import React from 'react';
import { motion } from 'framer-motion';
import styles from './Merch.module.css';
import merchImage from '../merch.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Merch = () => {
  return (
    <motion.section 
      id="merch" 
      className="glass-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={itemVariants} className={styles.title}>
        Merch Coming Soon
      </motion.h2>
      <motion.div 
        className={styles.merchContent}
        variants={itemVariants}
      >
        <img
          src={merchImage}
          alt="FUTR Clan Merch Coming Soon"
          className={styles.merchImage}
        />
      </motion.div>
    </motion.section>
  );
};

export default Merch; 