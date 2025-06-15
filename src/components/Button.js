import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.button}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 