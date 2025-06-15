import React from 'react';
import { motion, useTransform } from 'framer-motion';
import styles from './FloatingClouds.module.css';

const Cloud = ({ cloud, scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * cloud.parallaxStrength]);

  return (
    <motion.div
      className={styles.cloud}
      style={{ ...cloud.style, y }}
      initial={cloud.initial}
      animate={cloud.animate}
      transition={cloud.transition}
    >
      <svg width="200" height="100" viewBox="0 0 200 100" fill="rgba(255, 255, 255, 0.1)">
        <circle cx="50" cy="50" r="40" />
        <circle cx="100" cy="50" r="50" />
        <circle cx="150" cy="60" r="40" />
        <rect y="50" width="200" height="50" />
      </svg>
    </motion.div>
  );
};

const FloatingClouds = ({ scrollYProgress }) => {
  const clouds = [
    {
      style: { top: '10%', scale: 4.0 },
      initial: { x: '-200px' },
      animate: { x: '100vw' },
      transition: { duration: 30, repeat: Infinity, ease: 'linear', delay: 0 },
      parallaxStrength: 1.5,
    },
    {
      style: { top: '20%', scale: 6.0 },
      initial: { x: '-200px' },
      animate: { x: '100vw' },
      transition: { duration: 40, repeat: Infinity, ease: 'linear', delay: 5 },
      parallaxStrength: 2.5,
    },
    {
      style: { top: '60%', scale: 5.0 },
      initial: { x: '-200px' },
      animate: { x: '100vw' },
      transition: { duration: 45, repeat: Infinity, ease: 'linear', delay: 10 },
      parallaxStrength: 1.8,
    },
    {
      style: { top: '80%', scale: 4.5 },
      initial: { x: '-200px' },
      animate: { x: '100vw' },
      transition: { duration: 35, repeat: Infinity, ease: 'linear', delay: 15 },
      parallaxStrength: 2.2,
    },
  ];

  return (
    <div className={styles.cloudContainer}>
      {clouds.map((cloud, index) => (
        <Cloud 
            key={index} 
            cloud={cloud}
            scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
};

export default FloatingClouds; 