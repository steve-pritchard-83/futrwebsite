import React from 'react';
import { motion } from 'framer-motion';
import styles from './Media.module.css';

// Placeholder data - replace with actual video/image URLs
const mediaItems = [
  { id: 1, type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Epic Squad Wipe' },
  { id: 2, type: 'image', url: 'https://via.placeholder.com/1920x1080.png?text=Victory+Royale', title: 'Tournament Winners' },
  { id: 3, type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Clutch 1v3' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Media = () => {
  return (
    <motion.section
      id="media"
      className="glass-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={itemVariants}>MEDIA SHOWCASE</motion.h2>
      <motion.p variants={itemVariants} className={styles.description}>
        Talk is cheap. Here's the proof. Check out our latest highlights and best moments.
      </motion.p>
      <motion.div className={styles.mediaGrid} variants={containerVariants}>
        {mediaItems.map((item) => (
          <motion.div key={item.id} className={styles.mediaItem} variants={itemVariants}>
            {item.type === 'video' ? (
              <div className={styles.videoWrapper}>
                <iframe
                  src={item.url}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img src={item.url} alt={item.title} className={styles.image} />
            )}
            <h3 className={styles.mediaTitle}>{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Media; 