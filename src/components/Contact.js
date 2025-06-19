import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './Contact.module.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Contact = () => {
    const form = useRef();
    const recaptchaRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    function handleCaptchaChange(value) {
        if (value) {
            setRecaptchaToken(value);
        }
    }

const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // --- Ensure this points to your LIVE Vercel URL ---
    const gdayPulseEndpoint = 'https://gdaypulse.vercel.app/api/contact-submissions';

    if (!serviceID || !templateID || !publicKey) {
        console.error("EmailJS environment variables are not set. Please check your .env file.");
        alert("Email service is not configured correctly. Please contact the administrator.");
        setIsSubmitting(false);
        return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            setIsSubmitting(false);
            setSubmitStatus('Message sent successfully!');

            // --- Notifies your LIVE G'dayPulse server ---
            fetch(gdayPulseEndpoint, { method: 'POST' })
                .then(response => response.json())
                .then(data => console.log('GdayPulse OKR updated:', data))
                .catch(error => console.error('Error updating GdayPulse OKR:', error));

        }, (error) => {
            console.error('FAILED...', error);
            alert(`Failed to send message. Error: ${error.text || 'Unknown error'}`);
            setIsSubmitting(false);
        });
    e.target.reset();
    if (recaptchaRef.current) {
        recaptchaRef.current.reset();
    }
    setRecaptchaToken(null);
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
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        onChange={handleCaptchaChange}
                        theme="dark"
                    />
                </div>
                <div className={styles.buttonWrapper}>
                    <button type="submit" disabled={isSubmitting || !recaptchaToken} className={styles.submitButton}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </motion.form>
            {submitStatus && <p className={styles.status}>{submitStatus}</p>}
        </motion.section>
    );
};

export default Contact; 