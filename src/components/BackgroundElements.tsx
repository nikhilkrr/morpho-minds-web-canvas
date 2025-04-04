
import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Purple circle */}
      <div 
        className="absolute top-[20%] -left-20 w-64 h-64 rounded-full bg-morpho-purple/10 animate-float" 
        style={{ animationDelay: "0s" }}
      />
      
      {/* Blue circle */}
      <div 
        className="absolute bottom-[10%] -right-32 w-80 h-80 rounded-full bg-morpho-blue/10 animate-float" 
        style={{ animationDelay: "1.5s" }}
      />
      
      {/* Small purple circle */}
      <div 
        className="absolute top-[60%] left-[20%] w-24 h-24 rounded-full bg-morpho-purple/5 animate-float" 
        style={{ animationDelay: "1s" }}
      />
      
      {/* Small blue dots */}
      <div className="absolute top-[15%] right-[25%] w-4 h-4 rounded-full bg-morpho-blue/20 animate-pulse-light" />
      <div className="absolute top-[45%] left-[15%] w-3 h-3 rounded-full bg-morpho-purple/20 animate-pulse-light" />
      <div className="absolute bottom-[20%] left-[40%] w-5 h-5 rounded-full bg-morpho-blue/15 animate-pulse-light" />
    </div>
  );
};

export default BackgroundElements;
