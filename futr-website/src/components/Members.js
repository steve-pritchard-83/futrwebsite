import React from 'react';
import { motion } from 'framer-motion';
import { FaFortAwesome } from 'react-icons/fa';
import styles from './Members.module.css';

const members = [
  { name: 'Callum', username: 'jamsyfv', trackerUrl: 'https://fortnitetracker.com/profile/all/jamsyfv' },
  { name: 'Finn', username: 'F3IN', trackerUrl: 'https://fortnitetracker.com/profile/all/f3in' },
  { name: 'Judd', username: 'stoneagelover', trackerUrl: 'https://fortnitetracker.com/profile/all/Stoneagelover' },
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
            <p className={styles.memberUsername}>@{member.username}</p>
            <a href={member.trackerUrl} target="_blank" rel="noopener noreferrer" className={styles.statsLink}>
              <FaFortAwesome />
              <span>Track The Rise</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Members; 