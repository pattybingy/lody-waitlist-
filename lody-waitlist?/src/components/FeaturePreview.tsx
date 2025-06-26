import React from 'react';
import { Music, Brain, Zap, Heart } from 'lucide-react';

const FeaturePreview: React.FC = () => {
  const features = [
    {
      icon: Music,
      title: 'Your Playlist, Your Lessons',
      description: 'Learn from songs you already love and discover new favorites',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Brain,
      title: 'Smart Vocabulary',
      description: 'Focus on high-frequency words that appear in your music',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Zap,
      title: 'Effortless Learning',
      description: 'No boring textbooks - just natural language absorption',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Heart,
      title: 'Made for Music Lovers',
      description: 'Turn your daily listening into daily language vitamins',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <div className="space-y-8 animate-slide-up">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">
          How Lody Works
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
          We believe language learning should be natural, fun, and part of your everyday vibe.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`bg-gradient-to-br ${feature.color} rounded-xl p-3 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturePreview;