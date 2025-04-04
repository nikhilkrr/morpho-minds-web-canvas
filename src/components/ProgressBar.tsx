
import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  animationDelay?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  max, 
  label, 
  animationDelay = 0 
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const percentage = (currentValue / max) * 100;
  
  useEffect(() => {
    // Animate the progress bar from 0 to the target value
    const timer = setTimeout(() => {
      const animationDuration = 1000; // 1 second animation
      const step = 10; // Update every 10ms
      const increment = value / (animationDuration / step);
      
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCurrentValue(value);
          clearInterval(interval);
        } else {
          setCurrentValue(current);
        }
      }, step);
      
      return () => clearInterval(interval);
    }, animationDelay);
    
    return () => clearTimeout(timer);
  }, [value, animationDelay]);

  return (
    <div className="w-full space-y-2 animate-fade-in opacity-0" style={{ animationDelay: `${animationDelay + 0.3}s` }}>
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-morpho-dark">{label}</span>
          <span className="text-sm font-medium text-morpho-dark">{Math.round(currentValue)}/{max}</span>
        </div>
      )}
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full progress-gradient rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
