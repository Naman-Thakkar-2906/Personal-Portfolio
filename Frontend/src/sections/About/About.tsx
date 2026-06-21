import React from 'react';
import { motion } from 'framer-motion';
import { TechBadge } from '../../components/TechBadge/TechBadge';
import styles from './About.module.css';


const HIGHLIGHTS = [
  'MERN Stack',
  'Docker',
  'Redis',
  'TypeScript',
  'AI Integrations',
];

export const About: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <h2 className={styles.title}>About Me</h2>
          
          <p className={styles.text}>
            Recent Graduate Inforamtion Technolgoy Engineering student passionate about Full Stack Development, Backend Engineering, Real-Time Applications, and AI-powered systems.
          </p>
          
          <p className={styles.text}>
            I enjoy building practical web applications that solve real user problems. I focus on developing clean APIs, designing normalized databases, integrating fast caching configurations, and coding responsive user interfaces.
          </p>

          <h3 className={styles.highlightTitle}>Core Focus Stacks:</h3>
          <div className={styles.highlights}>
            {HIGHLIGHTS.map((stack) => (
              <TechBadge key={stack} name={stack} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
