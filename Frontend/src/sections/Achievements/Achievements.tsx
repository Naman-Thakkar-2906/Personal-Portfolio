import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { Card } from '../../components/Card/Card';
import styles from './Achievements.module.css';


export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className={`${styles.achievements} section`}>
      <div className="container">
        <h2 className={styles.title}>Achievements</h2>

        <div className={styles.content}>
          {/* Framer motion wrapper for card bounce entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Card className={styles.achievementCard}>
              <div className={styles.iconWrapper}>
                <Trophy size={36} />
              </div>
              <div className={styles.details}>
                <h3 className={styles.awardTitle}>Devang Mehta IT Award 2025</h3>
                <p className={styles.awardDescription}>
                  Recognized as the Top Ranker of the College for academic excellence and technical performance. 
                  This award highlights academic diligence and a proven ability to apply engineering theory to practical computer development.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
