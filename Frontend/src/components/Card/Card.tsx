import React from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverEffect = true,
}) => {
  // Combine CSS Module classes
  const cardClass = `${styles.card} ${hoverEffect ? styles.hoverEffect : ''} ${
    onClick ? styles.clickable : ''
  } ${className}`;

  // Configure animations only when hover/click interactions are relevant
  const animationProps = hoverEffect || onClick
    ? {
        whileHover: hoverEffect ? { y: -4 } : {},
        whileTap: onClick ? { scale: 0.99 } : {},
        transition: { duration: 0.2, ease: 'easeOut' as const },
      }
    : {};

  return (
    <motion.div className={cardClass} onClick={onClick} {...animationProps}>
      {children}
    </motion.div>
  );
};
