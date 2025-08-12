import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const GlassCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  animate = true,
  glowColor = 'cyan',
  ...props 
}) => {
  const variants = {
    default: 'glass-card',
    dark: 'glass-card-dark',
    subtle: 'bg-white/5 backdrop-blur-md border border-white/10'
  };

  const glowColors = {
    cyan: 'hover:shadow-cyan-400/20',
    pink: 'hover:shadow-pink-500/20',
    purple: 'hover:shadow-purple-500/20',
    none: ''
  };

  const Component = animate ? motion.div : 'div';
  
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
    whileHover: { 
      y: -2,
      transition: { duration: 0.2 }
    }
  } : {};

  return (
    <Component
      className={cn(
        variants[variant],
        glowColors[glowColor],
        'transition-all duration-300',
        className
      )}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GlassCard;