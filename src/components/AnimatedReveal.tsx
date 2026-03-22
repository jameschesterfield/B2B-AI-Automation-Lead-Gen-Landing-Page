import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  amount?: 'some' | 'all' | number;
}

export const FadeIn: React.FC<Props> = ({ children, delay = 0, duration = 0.5, className = '' }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideUp: React.FC<Props> = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  direction = 'up',
  className = '',
  amount = 0.2
}) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{ children: React.ReactNode; delayChildren?: number; staggerChildren?: number }> = ({ 
  children, 
  delayChildren = 0, 
  staggerChildren = 0.1 
}) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={{
      animate: {
        transition: {
          delayChildren,
          staggerChildren,
        },
      },
    }}
  >
    {children}
  </motion.div>
);
