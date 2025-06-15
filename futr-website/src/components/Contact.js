import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { FaPaperPlane } from 'react-icons/fa';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then((result) => {
            console.log(result.text);
            setIsSending(false);
            setIsSent(true);
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message, please try again.');
            setIsSending(false);
        });
        e.target.reset();
    };

    return (
        <motion.section
            id="contact"
            className="glass-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2 variants={itemVariants}>GOT GAME?</motion.h2>
            <motion.p variants={itemVariants} className={styles.description}>
                The FUTR is built, not given. If you've got the drive and the dream, we want to hear from you. Show us you belong here.
            </motion.p>
            <motion.form onSubmit={sendEmail} variants={itemVariants}>
                <div className={styles.formGroup}>
                    <input type="text" name="from_name" placeholder=" " required className={styles.formInput} />
                    <label htmlFor="from_name" className={styles.formLabel}>Your In-Game Name</label>
                </div>
                <div className={styles.formGroup}>
                    <input type="email" name="from_email" placeholder=" " required className={styles.formInput} />
                    <label htmlFor="from_email" className={styles.formLabel}>Your Contact Email</label>
                </div>
                <div className={styles.formGroup}>
                    <textarea name="message" rows="5" placeholder=" " required className={styles.formInput}></textarea>
                    <label htmlFor="message" className={styles.formLabel}>Tell us your story. Why FUTR?</label>
                </div>
                <button type="submit" className={styles.submitButton} disabled={isSending || isSent}>
                    {isSending ? 'SENDING...' : isSent ? 'SENT!' : <> <FaPaperPlane /> SEND APPLICATION </>}
                </button>
            </motion.form>
        </motion.section>
    );
};

export default Contact; 