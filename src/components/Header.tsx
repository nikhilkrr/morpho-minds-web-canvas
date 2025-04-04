
import React, { useState } from 'react';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={cn(
        "px-5 py-2 rounded-full transition-all duration-300 font-medium",
        "transform hover:scale-105 active:scale-95",
        isActive ? "nav-button-active" : "nav-button-inactive"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Header: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("English");
  
  const navOptions = ["Hindi", "English", "Maths"];
  
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b animate-fade-in [animation-delay:0.2s] opacity-0">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-morpho-purple to-morpho-blue bg-clip-text text-transparent">
          MorphoMinds
        </h1>
      </div>
      
      <nav className="flex gap-2">
        {navOptions.map((nav) => (
          <NavButton
            key={nav}
            label={nav}
            isActive={activeNav === nav}
            onClick={() => setActiveNav(nav)}
          />
        ))}
      </nav>
      
      <div className="w-10 h-10 rounded-full bg-morpho-purple/10 flex items-center justify-center cursor-pointer hover:bg-morpho-purple/20 transition-colors duration-300">
        <User className="w-5 h-5 text-morpho-purple" />
      </div>
    </header>
  );
};

export default Header;
