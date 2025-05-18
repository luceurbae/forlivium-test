
import React from 'react';

interface IconProps {
  className?: string;
}

export const TelegramIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
      <path d="m8 12 4 4 4-8-8 3v6z" />
    </svg>
  );
};
