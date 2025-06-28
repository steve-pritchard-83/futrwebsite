import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFortAwesome } from 'react-icons/fa';
import styles from './Members.module.css';
import { members } from '../data/content.json';
import PlayerStats from './PlayerStats';

// Manually import all member images
import callumImage from '../callum.webp';
import juddImage from '../judd.webp';
import finnImage from '../finn.webp';
import liamImage from '../liam.webp';
import tomImage from '../tom.webp';

// Create a mapping from the image filename to the imported module
const imageMap = {
  'callum.webp': callumImage,
  'judd.webp': juddImage,
  'finn.webp': finnImage,
  'liam.webp': liamImage,
  'tom.webp': tomImage,
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

const Members = () => {
  return (
    <motion.section
      id="members"
      className="glass-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={itemVariants}>THE SQUAD</motion.h2>
      <motion.div className={styles.membersGrid} variants={containerVariants}>
        {members.map((member, index) => (
          <motion.div
            key={index}
            className={styles.memberCard}
            variants={itemVariants}
          >
            <div className={styles.imageContainer}>
              <img src={imageMap[member.image]} alt={member.name} className={styles.memberImage} />
            </div>
            <div className={styles.memberInfo}>
              <h3>{member.name}</h3>
              <p className={styles.username}>{member.username}</p>
              <PlayerStats trackerUrl={member.trackerUrl} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Members; 