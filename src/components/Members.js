import React from 'react';
import { motion } from 'framer-motion';
import { FaFortAwesome } from 'react-icons/fa';
import styles from './Members.module.css';
import { members } from '../data/content.json';

import callumImage from '../callum.png';
import juddImage from '../judd.png';
import finnImage from '../finn.png';
import liamImage from '../liam.png';

const memberImages = {
  "callum.png": callumImage,
  "judd.png": juddImage,
  "finn.png": finnImage,
  "liam.png": liamImage
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
      <motion.h2 variants={itemVariants}>THE LINEUP</motion.h2>
      <motion.div className={styles.membersGrid} variants={containerVariants}>
        {members.map((member, index) => (
          <motion.div
            key={member.username}
            className={styles.memberCard}
            variants={itemVariants}
          >
            <h3 className={styles.memberName}>{member.name}</h3>
            <img src={memberImages[member.image]} alt={member.name} className={styles.memberImage} />
            <p className={styles.memberUsername}>@{member.username}</p>
            {/* <PlayerStats username={member.username} /> */}
            {member.trackerUrl ? (
              <a href={member.trackerUrl} target="_blank" rel="noopener noreferrer" className={styles.statsLink}>
                <FaFortAwesome />
                <span>Track The Rise</span>
              </a>
            ) : (
              <p className={styles.noLink}>Stats Coming Soon</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Members; 