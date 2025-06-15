import React from 'react';
import { FaTwitch, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" aria-label="Twitch">
          <FaTwitch />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <FaDiscord />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} FUTR Clan. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 