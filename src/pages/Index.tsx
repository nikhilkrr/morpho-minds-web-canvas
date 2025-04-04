
import React, { useState } from 'react';
import Header from '@/components/Header';
import ContentCard from '@/components/ContentCard';
import BackgroundElements from '@/components/BackgroundElements';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundElements />
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8 animate-fade-in opacity-0">
          Welcome to <span className="bg-gradient-to-r from-morpho-purple to-morpho-blue bg-clip-text text-transparent">MorphoMinds</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ContentCard 
            title="Learning Progress"
            description="Track your progress across various subjects and modules. Complete lessons to advance your knowledge."
            progress={65}
            maxProgress={100}
            animationDelay={0.4}
          />
          
          <ContentCard 
            title="Recent Activities"
            description="View your recent learning activities and continue where you left off. Stay consistent for best results."
            progress={42}
            maxProgress={100}
            animationDelay={0.6}
          />
        </div>
      </main>
      
      <footer className="py-6 px-6 border-t text-center text-sm text-gray-500 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
        <p>© 2025 MorphoMinds. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
