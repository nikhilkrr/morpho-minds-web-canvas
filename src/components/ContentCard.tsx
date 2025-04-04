
import React from 'react';
import ProgressBar from './ProgressBar';

interface ContentCardProps {
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  animationDelay?: number;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  progress,
  maxProgress,
  animationDelay = 0
}) => {
  return (
    <div 
      className="content-card animate-fade-in opacity-0" 
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <ProgressBar 
        value={progress} 
        max={maxProgress} 
        label="Progress" 
        animationDelay={animationDelay + 0.2}
      />
    </div>
  );
};

export default ContentCard;
