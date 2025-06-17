import React from 'react';
import { motion } from 'framer-motion';
import styles from './Merch.module.css';
import { merch } from '../data/content.json'; // Assuming you have merch data

import merchImage from '../merch.png';

const merchImages = {
  "merch.png": merchImage,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: 'spring', 
      stiffness: 100,
      damping: 10 
    } 
  },
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
      <motion.h2 variants={itemVariants}>GET THE KIT</motion.h2>
      <motion.div className={styles.merchGrid} variants={containerVariants}>
        {merch.map((item) => (
          <motion.div
            key={item.name}
            className={styles.merchLink}
            variants={itemVariants}
          >
            <img src={merchImages[item.image]} alt={`${item.name}`} className={styles.merchImage} />
            <div className={styles.merchInfo}>
              <h3 className={styles.merchName}>{item.name}</h3>
              <p className={styles.merchPrice}>{item.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Merch; 