import React from 'react';
import { Music, Headphones, Globe } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center space-y-8 animate-fade-in">
      {/* Logo */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <div className="bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 p-4 rounded-2xl shadow-2xl animate-bounce-gentle">
            <Music className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 bg-accent-400 rounded-full p-1 animate-pulse-soft">
            <Globe className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="ml-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent font-poppins">
            Lody
          </h1>
        </div>
      </div>

      {/* Main Headlines */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight font-poppins">
          🎵 Learn Languages Through Music
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-inter max-w-3xl mx-auto">
          Join the waitlist for Lody – the app that teaches you <span className="font-semibold text-primary-600">Polish</span> and <span className="font-semibold text-secondary-600">Spanish</span> through songs you love.
        </p>
      </div>

      {/* Feature Icons */}
      <div className="flex justify-center items-center space-x-8 pt-8">
        <div className="flex items-center space-x-2 text-gray-500">
          <Headphones className="w-5 h-5" />
          <span className="text-sm font-medium">Your Music</span>
        </div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="flex items-center space-x-2 text-gray-500">
          <Globe className="w-5 h-5" />
          <span className="text-sm font-medium">New Languages</span>
        </div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="flex items-center space-x-2 text-gray-500">
          <Music className="w-5 h-5" />
          <span className="text-sm font-medium">Natural Learning</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;