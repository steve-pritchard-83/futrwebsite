import React from 'react';
import { motion } from 'framer-motion';
import { FaFortAwesome } from 'react-icons/fa';
import styles from './Members.module.css';
// import PlayerStats from './PlayerStats';

const members = [
  { name: 'Judd', username: 'Stoneagelover', trackerUrl: 'https://fortnitetracker.com/profile/all/Stoneagelover' },
  { name: 'Callum', username: 'fUTR jamsyfv', trackerUrl: 'https://fortnitetracker.com/profile/all/jamsyfv' },
  { name: 'Finn', username: 'ꜰᴜᴛʀ F3IN', trackerUrl: 'https://fortnitetracker.com/profile/all/%ea%9c%b0%e1%b4%9c%e1%b4%9b%ca%80%20F3IN' },
  { name: 'Wihan', username: 'futr RYZ', trackerUrl: null },
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