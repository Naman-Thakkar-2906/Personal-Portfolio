import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import styles from './Hero.module.css';
import profilePic from '../../assets/linkedin_profile_pic.png';

export const Hero: React.FC = () => {
  // Simple, subtle fade-in transition
  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Side: Information */}
          <motion.div
            className={styles.textSide}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            <motion.span className={styles.greeting} variants={fadeUp}>
              Hi, I'm Naman Thakkar
            </motion.span>
            
            <motion.h1 className={styles.title} variants={fadeUp}>
              Full Stack Developer
            </motion.h1>
            
            <motion.p className={styles.description} variants={fadeUp}>
              Building scalable web applications, real-time systems, and AI-powered products using the MERN Stack.
            </motion.p>

            {/* View Projects and Download Resume */}
            <motion.div className={styles.ctaButtons} variants={fadeUp}>
              <Button variant="primary" onClick={() => handleScrollTo('projects')}>
                View Projects
              </Button>
              <a href="/Naman_Thakkar_Resume_After_Projects" download="my_resume.pdf">
              
               <FileText size={16} /> Download Resume
              </a>

            </motion.div>

            {/* Social Links */}
            <motion.div className={styles.socials} variants={fadeUp}>
              <a
                href="https://github.com/Naman-Thakkar-2906"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/naman-thakkar-82163233b/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:nthakkar603@gmail.com"
                className={styles.socialLink}
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Profile Photo */}
          <motion.div
            className={styles.imageSide}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
          >
            <img
              src={profilePic}
              alt="Naman Thakkar profile"
              className={styles.profileImage}
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
