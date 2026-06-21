import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} container`}>

        {/* Social Icons */}
        <div className={styles.socials}>
          <a
            href="https://github.com/Naman-Thakkar-2906"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/naman-thakkar-82163233b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:nthakkar603@gmail.com"
            className={styles.socialIcon}
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright notice */}
        <p className={styles.copyright}>
          &copy; {currentYear} Naman Thakkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
