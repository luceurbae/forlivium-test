
import React from 'react';

interface IconProps {
  className?: string;
}

export const DiscordIcon: React.FC<IconProps> = ({ className }) => {
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
      <path d="M18 20.58a9.4 9.4 0 0 0 1.8-3.27 8.5 8.5 0 0 0-1-8.7A9.47 9.47 0 0 0 12 6 9.47 9.47 0 0 0 5.2 8.61a8.5 8.5 0 0 0-1 8.7A9.4 9.4 0 0 0 6 20.58M14 15l-2 2-2-2M14 9l-2-2-2 2M6.26 3l11.48 18" />
    </svg>
  );
};
