import React from 'react';
import { motion } from 'framer-motion';
import styles from './Brands.module.css';
import razerLogo from '../razer.png';
import attackSharkLogo from '../attack-shark-seeklogo.png';

const brands = [
  { name: 'Razer', logo: razerLogo, url: 'https://www.razer.com' },
  { name: 'Attack Shark', logo: attackSharkLogo, url: 'https://www.attackshark.com' },
];

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
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 120 } },
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
      <motion.h2 variants={itemVariants} className={styles.title}>Trusted by FUTR</motion.h2>
      <motion.div className={styles.brandsGrid} variants={containerVariants}>
        {brands.map((brand) => (
          <motion.div
            key={brand.name}
            className={styles.brandCard}
            variants={itemVariants}
          >
            <a href={brand.url} target="_blank" rel="noopener noreferrer">
              <img src={brand.logo} alt={brand.name} className={styles.logo} />
            </a>
            <a href={brand.url} target="_blank" rel="noopener noreferrer" className={styles.brandLink}>
              Visit {brand.name}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Brands; 