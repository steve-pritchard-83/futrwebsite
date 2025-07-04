import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBullseye, FaHandshake } from 'react-icons/fa';
import styles from './About.module.css';
import groupImage from '../group.webp';

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
    <section id="about" className="glass-container">
      <h2>FORGED IN THE STORM</h2>
      <p className={styles.intro}>
        "We are FUTR. Not a clan. A contract. Signed in dropped crowns and midnight queues. We don't log on — we clock in. We warm up before school, VOD review after dinner, and we're still running sets while the world sleeps. This isn't casual. This is comp. Every ping matters. Every death gets dissected. The grind is real. The FUTR is earned."
      </p>
      <div className={styles.imageContainer}>
        <img src={groupImage} alt="FUTR Clan" className={styles.groupImage} />
      </div>
      <motion.div
        className={styles.philosophyGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.philosophyItem} variants={itemVariants}>
          <FaUsers size={40} />
          <h3>Unbreakable Teamwork</h3>
          <p>Comms locked. Pings clean. Roles locked in. We full wipe or get full wiped — but we do it together. No solo ego, no rage quits, no excuses. Trust gets built in late nights and clutch wins.</p>
        </motion.div>
        <motion.div className={styles.philosophyItem} variants={itemVariants}>
          <FaBullseye size={40} />
          <h3>Relentless Improvement</h3>
          <p>We don't play for clips. We play for reps. We don't chase fame — we chase discipline. Every death screen is a lesson. Every warm-up is a weapon. We've got notebooks full of strats and screenshots of mistakes. Adapt. Adjust. Ascend.</p>
        </motion.div>
        <motion.div className={styles.philosophyItem} variants={itemVariants}>
          <FaHandshake size={40} />
          <h3>Respect, Friendship & Brotherhood</h3>
          <p>It's bigger than Fortnite. We show up for each other on bad games and bad days. We hold each other accountable and hype each other up. Win or lose, the squad stays locked.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 