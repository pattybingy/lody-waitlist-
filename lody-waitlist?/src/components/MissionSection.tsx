import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <div className="space-y-8 mb-12 animate-slide-up">
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/20">
        <p className="text-lg text-gray-700 leading-relaxed font-quicksand font-medium">
          Lody helps you learn Polish and Spanish effortlessly by tracking your music listening habits 
          and teaching you high-frequency words through songs you already love.
        </p>
      </div>
      
      <div className="bg-gradient-to-br from-mint-50 to-cream-50 p-8 rounded-3xl shadow-lg border border-mint-100">
        <p className="text-lg text-gray-700 leading-relaxed font-quicksand font-medium">
          We believe language learning should be natural, fun, and part of your everyday vibe. 
          With Lody, your daily playlist becomes your daily language vitamin.
        </p>
      </div>
    </div>
  );
};

export default MissionSection;