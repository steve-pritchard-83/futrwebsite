import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBullseye, FaHandshake } from 'react-icons/fa';
import styles from './About.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="glass-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={itemVariants}>FORGED IN THE STORM</motion.h2>
      <motion.p className={styles.intro} variants={itemVariants}>
        We are FUTR. More than a clan, we're a promise. A pact made between friends to grind, improve, and rise together. We are the early birds in the lobby and the last ones to leave the replay. Every match is a lesson, every loss is fuel.
      </motion.p>
      <motion.div className={styles.philosophyGrid} variants={containerVariants}>
        <motion.div className={styles.philosophyItem} variants={itemVariants}>
          <FaUsers size={40} />
          <h3>Unbreakable Teamwork</h3>
          <p>We win and lose as one. Communication and synergy are the cornerstones of our strategy.</p>
        </motion.div>
        <motion.div className={styles.philosophyItem} variants={itemVariants}>
          <FaBullseye size={40} />
          <h3>Relentless Improvement</h3>
          <p>We're not chasing fleeting fame; we're hunting for greatness. We analyze, adapt, and overcome.</p>
        </motion.div>
        <motion.div className={styles.philosophyItem} variants={itemVariants}>
          <FaHandshake size={40} />
          <h3>Respect & Friendship</h3>
          <p>Beyond the game, we are a brotherhood. We support each other and build lasting connections.</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About; 