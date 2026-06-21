import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Settings } from 'lucide-react';
import { Card } from '../../components/Card/Card';
import styles from './Skills.module.css';


interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Monitor size={18} className={styles.categoryIcon} />,
    skills: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'TanStack Query',
      'React Router',
    ],
  },
  {
    title: 'Backend',
    icon: <Server size={18} className={styles.categoryIcon} />,
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT',
      'Authentication',
      'Authorization',
      'Socket.IO',
    ],
  },
  {
    title: 'Database',
    icon: <Database size={18} className={styles.categoryIcon} />,
    skills: ['MongoDB', 'MySQL', 'Redis'],
  },
  {
    title: 'Tools',
    icon: <Settings size={18} className={styles.categoryIcon} />,
    skills: [
      'Docker',
      'Git',
      'GitHub',
      'Razorpay',
      
    ],
  },
];

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className="container">
        <h2 className={styles.title}>Skills</h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div key={category.title} variants={cardVariants}>
              <Card hoverEffect={true}>
                <h3 className={styles.categoryTitle}>
                  {category.icon}
                  {category.title}
                </h3>
                <ul className={styles.skillList}>
                  {category.skills.map((skill) => (
                    <li key={skill} className={styles.skillItem}>
                      <span className={styles.dot} />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
