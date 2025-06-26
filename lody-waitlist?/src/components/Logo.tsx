import React from 'react';
import { Music } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-6 animate-float">
      <div className="bg-gradient-to-br from-mint-400 to-mint-500 p-4 rounded-2xl shadow-lg">
        <Music className="w-8 h-8 text-white" />
      </div>
      <span className="ml-3 text-4xl font-bold text-gray-800 font-quicksand">
        Lody
      </span>
    </div>
  );
};

export default Logo;