import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './Contact.module.css';
import { FaPaperPlane } from 'react-icons/fa';
import Button from './Button';

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
    const [isVerified, setIsVerified] = useState(false);
    const recaptchaRef = useRef();
    const recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleCaptchaChange(value) {
        if (value) {
            setIsVerified(true);
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;

        if (!serviceID || !templateID || !userID) {
            console.error("EmailJS environment variables are not set. Please check your .env file.");
            alert("Email service is not configured correctly. Please contact the administrator.");
            setIsSending(false);
            return;
        }

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
                setIsSending(false);
                setIsSent(true);
                setStatusMessage('Message sent successfully!');
            }, (error) => {
                console.error('FAILED...', error);
                alert(`Failed to send message. Error: ${error.text || 'Unknown error'}`);
                setIsSending(false);
                setErrorMessage('Failed to send message. Please try again later.');
            });
        e.target.reset();
        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
        setIsVerified(false);
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
            <motion.form ref={form} onSubmit={sendEmail} variants={itemVariants} className={styles.form}>
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
                <div className={styles.recaptchaContainer}>
                    {recaptchaSiteKey ? (
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={recaptchaSiteKey}
                            onChange={handleCaptchaChange}
                            theme="dark"
                        />
                    ) : (
                        <p className={styles.errorText}>
                            reCAPTCHA is not configured. <br />
                            Please ensure <code>REACT_APP_RECAPTCHA_SITE_KEY</code> is set in your <code>.env</code> file.
                        </p>
                    )}
                </div>
                <div className={styles.buttonWrapper}>
                    <Button type="submit" disabled={isSending || !isVerified}>
                        {isSending ? 'Sending...' : 'Send Message'}
                    </Button>
                </div>
            </motion.form>
            {statusMessage && <p className={styles.status}>{statusMessage}</p>}
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </motion.section>
    );
};

export default Contact; 