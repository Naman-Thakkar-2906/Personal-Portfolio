import React from 'react';
import styles from './TechBadge.module.css';

/* 
  TechBadge.tsx - Reusable Technology Badge
  Displays a capsule/pill tag containing the name of a technology or skill.
  Perfect for showcasing developer stacks on cards.
*/

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, icon }) => {
  return (
    <span className={styles.badge}>
      {icon}
      <span>{name}</span>
    </span>
  );
};
