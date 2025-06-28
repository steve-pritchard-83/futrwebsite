import React from 'react';
import { motion } from 'framer-motion';
import styles from './Brands.module.css';
import { brands } from '../data/content.json';

// Manually import all brand logos
import razerLogo from '../razer.webp';
import attackSharkLogo from '../attack-shark-seeklogo.webp';

// Create a mapping from the image filename to the imported module
const logoMap = {
  'razer.webp': razerLogo,
  'attack-shark-seeklogo.webp': attackSharkLogo,
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

const Brands = () => {
  return (
    <motion.section
      id="brands"
      className="glass-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={itemVariants}>TRUSTED BY THE BEST</motion.h2>
      <motion.div className={styles.brandsGrid} variants={containerVariants}>
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className={styles.brandItem}
            variants={itemVariants}
          >
            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brandLink}
            >
              <img src={logoMap[brand.logo]} alt={`${brand.name} logo`} className={styles.brandLogo} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Brands;