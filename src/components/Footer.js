import React from 'react';
import { FaTwitch, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styles from './Footer.module.css';

const navLinks = [
    { to: 'about', text: 'About' },
    { to: 'members', text: 'Team' },
    { to: 'merch', text: 'Merch' },
    { to: 'brands', text: 'Brands' },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.navLinks}>
            {navLinks.map(link => (
                <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={styles.navLink}
                >
                    {link.text}
                </Link>
            ))}
        </div>
      <div className={styles.socialIcons}>
        <a href="https://www.twitch.tv/team/futr" target="_blank" rel="noopener noreferrer" aria-label="Twitch">
          <FaTwitch />
        </a>
        <a href="https://twitter.com/FUTR_esports" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/@FUTR_esports" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://discord.gg/futr" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <FaDiscord />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} FUTR. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 