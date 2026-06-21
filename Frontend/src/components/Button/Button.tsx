import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  href,
  external = false,
}) => {
  // Combine CSS Module classes with any external classes passed in
  const buttonClass = `${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''} ${className}`;

  // Framer Motion options: subtle hover lift and click contraction
  const animationProps = {
    whileHover: { y: -2, transition: { duration: 0.15 } },
    whileTap: { scale: 0.98 },
  };

  // If href is provided, render as a motion-enhanced anchor tag (a)
  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...animationProps}
      >
        {children}
      </motion.a>
    );
  }

  // Otherwise, render as a standard motion-enhanced HTML button
  return (
    <motion.button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...animationProps}
    >
      {children}
    </motion.button>
  );
};
