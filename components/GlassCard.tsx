import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark'; 
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  variant = 'light' 
}) => {
  // If variant is 'dark', use the specific dark class that doesn't adapt to light mode
  // If variant is 'light' (default), use the adaptive 'glass-card' class that switches with the theme
  const cardClass = variant === 'dark' ? 'glass-card-dark' : 'glass-card';
  
  return (
    <div className={`${cardClass} rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
};