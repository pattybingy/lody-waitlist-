import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturePreview from './components/FeaturePreview';
import WaitlistForm from './components/WaitlistForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-accent-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12 max-w-6xl">
          <div className="space-y-20">
            <HeroSection />
            <FeaturePreview />
            <WaitlistForm />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-500 font-inter">
          <p className="text-sm">
            Made with 🎵 for language learners everywhere
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;