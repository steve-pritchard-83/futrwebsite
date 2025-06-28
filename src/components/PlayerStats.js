import React from 'react';
import { FaFortAwesome } from 'react-icons/fa';
import styles from './PlayerStats.module.css';

const PlayerStats = ({ trackerUrl, username }) => {
  if (!trackerUrl) {
    return (
      <p className={styles.noLink}>
        Stats Coming Soon
      </p>
    );
  }

  return (
    <a href={trackerUrl} target="_blank" rel="noopener noreferrer" className={styles.statsLink}>
      <FaFortAwesome />
      <span>Track The Rise</span>
    </a>
  );
};

export default PlayerStats;
