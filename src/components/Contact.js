import React, { useState, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { FaCheckCircle } from 'react-icons/fa';

const ReCAPTCHA = lazy(() => import('react-google-recaptcha'));

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
    const [submitStatus, setSubmitStatus] = useState({ state: 'idle' });
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [loadRecaptcha, setLoadRecaptcha] = useState(false);

    function handleCaptchaChange(value) {
        if (value) {
            setRecaptchaToken(value);
        }
    }

    const handleFocus = () => {
        setLoadRecaptcha(true);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ state: 'sending' });

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
                setSubmitStatus({ state: 'success', message: 'Message sent! We\'ll be in touch.' });

                // --- Notifies your LIVE G'dayPulse server ---
                fetch(gdayPulseEndpoint, { method: 'POST' })
                    .then(response => response.json())
                    .then(data => console.log('GdayPulse OKR updated:', data))
                    .catch(error => console.error('Error updating GdayPulse OKR:', error));

            }, (error) => {
                console.error('FAILED...', error);
                setIsSubmitting(false);
                setSubmitStatus({ state: 'error', message: `Failed to send. Error: ${error.text}` });
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
            <AnimatePresence>
                {submitStatus.state === 'success' ? (
                    <motion.div
                        key="success"
                        className={styles.successMessage}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        <FaCheckCircle size={50} className={styles.successIcon} />
                        <h3>Message Sent!</h3>
                        <p>Thanks for reaching out. We'll get back to you soon.</p>
                    </motion.div>
                ) : (
                    <motion.div key="form">
                        <motion.h2 variants={itemVariants}>GOT GAME?</motion.h2>
                        <motion.p variants={itemVariants} className={styles.description}>
                            The FUTR is built, not given. If you've got the drive and the dream, we want to hear from you. Show us you belong here.
                        </motion.p>
                        <motion.form ref={form} onSubmit={sendEmail} variants={itemVariants} className={styles.form} onFocus={handleFocus}>
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
                            {loadRecaptcha && (
                                <Suspense fallback={<div className={styles.recaptchaLoading}>Loading...</div>}>
                                    <div className={styles.recaptchaContainer}>
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                            onChange={handleCaptchaChange}
                                            theme="dark"
                                        />
                                    </div>
                                </Suspense>
                            )}
                            <div className={styles.buttonWrapper}>
                                <button type="submit" disabled={isSubmitting || !recaptchaToken} className={styles.submitButton}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </motion.form>
                        {submitStatus.state === 'error' && <p className={styles.statusError}>{submitStatus.message}</p>}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default Contact; 