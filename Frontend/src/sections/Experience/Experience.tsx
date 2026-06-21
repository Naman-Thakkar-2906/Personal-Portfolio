import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/Card/Card';
import { TechBadge } from '../../components/TechBadge/TechBadge';
import styles from './Experience.module.css';


const EXPERIENCE_DATA = {
  role: 'Software Development Intern',
  company: 'Vedshil',
  date: 'January 2025 -Present',
  techStack: [
    'React',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Redis',
    'Docker',
    'Git',
  ],
  responsibilities: [
    'Developed frontend and backend features using MERN stack tools, ensuring a modular codebase structure.',
    'Integrated REST API interfaces and secure endpoints for client-server communication.',
    'Collaborated effectively within a developer team using Git workflows and code reviews.',
    'Debugged and tested web applications using browser dev tools and unit test suites to fix bottlenecks.',
    'Participated in application deployment activities, utilizing Docker container configurations.',
  ],
};

export const Experience: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <section id="experience" className={`${styles.experience} section`}>
      <div className="container">
        <h2 className={styles.title}>Experience</h2>

        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <Card hoverEffect={false}>
            {/* Header info: Role, Company name, Date */}
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.roleTitle}>{EXPERIENCE_DATA.role}</h3>
                <span className={styles.company}>{EXPERIENCE_DATA.company}</span>
              </div>
              <span className={styles.date}>{EXPERIENCE_DATA.date}</span>
            </div>

            {/* Tech Stack badges */}
            <div className={styles.techStack}>
              {EXPERIENCE_DATA.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>

            {/* Responsibilities bullet checklist */}
            <ul className={styles.bulletList}>
              {EXPERIENCE_DATA.responsibilities.map((responsibility, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  <span className={styles.bulletDot} />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
