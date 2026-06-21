import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import styles from './Contact.module.css';
// import api from '../../apis/axios.ts';
import axios from 'axios'


export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form input change listener
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit interceptor
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill in all the input fields.");
    return;
  }

  try {
    setIsSubmitting(true);

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/submit`,
      formData
    );

    if (response.data.success) {
      setSubmitSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }
  } catch (error: any) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to send message"
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <h2 className={styles.title}>Contact Me</h2>

        <div className={styles.grid}>
          {/* Left Column: Information details */}
          <motion.div
            className={styles.infoSide}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div>
              <h3 className={styles.heading}>Let's Connect</h3>
              <p className={styles.text}>
                I am currently looking for new opportunities as a Full Stack Developer, Software Engineer, MERN Developer, or Backend Developer. 
                Whether you have an opening, a technical query, or just want to connect, feel free to send a message!
              </p>
            </div>

            <div className={styles.contactList}>
              <a href="mailto:nthakkar603@gmail" target="_blank" className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={18} />
                </div>
                <span>nthakkar603@gmail.com</span>
              </a>
              <a
                href="https://github.com/Naman-Thakkar-2906"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <div className={styles.iconWrapper}>
                  <Github size={18} />
                </div>
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/naman-thakkar-82163233b/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <div className={styles.iconWrapper}>
                  <Linkedin size={18} />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact form box */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Card hoverEffect={false}>
              {submitSuccess ? (
                <div className={styles.successMessage}>
                  Success! Your message was received. I will get back to you as soon as possible.
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={styles.input}
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={styles.input}
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={styles.textarea}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting}>
                    <Send size={16} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
