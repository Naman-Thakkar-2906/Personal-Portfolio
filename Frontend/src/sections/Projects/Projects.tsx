import React from 'react';
import { motion } from 'framer-motion';
import { Check, ExternalLink, Github } from 'lucide-react';
import { TechBadge } from '../../components/TechBadge/TechBadge';
import { Button } from '../../components/Button/Button';
import styles from './Projects.module.css';


import voltplugImg from '../../assets/voltplug.png';
import postgenImg from '../../assets/postgen.png';
import plantImg from '../../assets/plant.png';
import grammarImg from '../../assets/grammar.png';

interface Project {
  title: string;
  image: string;
  techStack: string[];
  description: string;
  features: string[];
  liveLink: string;
  githubLink: string;
}

const PROJECTS_DATA: Project[] = [
  {
    title: 'VoltPlugEV',
    image: voltplugImg,
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'Razorpay',
      'Leaflet',
      'Docker',
    ],
    description:
      'A full-stack EV charging station booking and navigation platform inspired by modern EV ecosystems.',
    features: [
      'EV Station Discovery',
      'Real-Time Navigation',
      'Booking System',
      'Razorpay Payments',
      'Admin Dashboard',
      'Station Master Dashboard',
    ],
    liveLink: 'https://volt-plug-ev.vercel.app/',
    githubLink: 'https://github.com/Naman-Thakkar-2906/VoltPlugEV',
  },
  {
    title: 'PostGen AI',
    image: postgenImg,
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Gemini AI'],
    description:
      'AI-powered LinkedIn content generation platform that helps users create professional social media posts.',
    features: [
      'AI Content Generation',
      'Prompt Engineering',
      'Redis Caching',
      'Authentication',
    ],
    liveLink: 'https://post-gen-ai-beta.vercel.app/',
    githubLink: 'https://github.com/admin-creator407/postgen-ai-linkedin-post-generator',
  },
  {
    title: 'Plant Analyzer',
    image: plantImg,
    techStack: ['Node.js', 'Express.js', 'Gemini AI', 'PDFKit'],
    description:
      'AI-powered plant health analysis application that identifies plant species and provides health recommendations.',
    features: [
      'Plant Disease Detection',
      'AI Analysis',
      'PDF Report Generation',
      'Image Upload',
    ],
    liveLink: 'https://plant-analyzer-6ab5.onrender.com/',
    githubLink: 'https://github.com/Naman-Thakkar-2906/plant-analyzer',
  },
  {
    title: 'AI Grammar Assistant',
    image: grammarImg,
    techStack: ['React', 'Node.js', 'Express.js', 'Gemini AI'],
    description:
      'AI-powered writing assistant that improves grammar, spelling, sentence structure, and overall writing quality.',
    features: [
      'Grammar Correction',
      'Spell Checking',
      'Sentence Rewriting',
      'AI Suggestions',
    ],
    liveLink: 'https://ai-grammar-mern.vercel.app/',
    githubLink: 'https://github.com/Naman-Thakkar-2906/AI_Grammar_MERN',
  },
];

export const Projects: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className="container">
        <h2 className={styles.title}>Featured Projects</h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={styles.projectCardWrapper}
            >
              <div className={styles.projectCard}>
                {/* Large 16:9 screenshot frame */}
                <div className={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className={styles.screenshot}
                    loading="lazy"
                  />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.techStack}>
                      {project.techStack.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </div>

                  <p className={styles.projectDescription}>{project.description}</p>

                  <ul className={styles.featuresList}>
                    {project.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <Check size={14} className={styles.checkIcon} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.actions}>
                    <Button variant="primary" href={project.liveLink} onClick={() => alert(`Opening Live Demo for ${project.title}`)}>
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                    <Button variant="secondary" href={project.githubLink} external>
                      <Github size={16} />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
