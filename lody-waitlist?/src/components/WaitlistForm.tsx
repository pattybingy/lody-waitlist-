import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { addToWaitlist } from '../lib/supabase';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const result = await addToWaitlist(email.trim().toLowerCase());

    if (result.success) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-md mx-auto animate-slide-up">
        <div className="bg-gradient-to-br from-accent-50 to-accent-100 border-2 border-accent-200 rounded-3xl p-8 text-center shadow-xl">
          <div className="flex justify-center mb-4">
            <div className="bg-accent-500 rounded-full p-3 animate-bounce-gentle">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-accent-800 mb-2 font-poppins">
            You're on the list! 🎉
          </h3>
          <p className="text-accent-700 font-inter leading-relaxed">
            We'll notify you as soon as Lody is ready to transform your music into language learning magic.
          </p>
          <button
            onClick={() => {
              setStatus('idle');
              setEmail('');
            }}
            className="mt-6 text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200"
          >
            Join another email →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto animate-slide-up">
      <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full p-3">
              <Mail className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 font-poppins">
            Join the Waitlist
          </h3>
          <p className="text-gray-600 mt-2 font-inter">
            Be the first to experience language learning through music
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') {
                  setStatus('idle');
                  setErrorMessage('');
                }
              }}
              placeholder="Enter your email address..."
              className={`w-full px-6 py-4 text-lg rounded-2xl border-2 transition-all duration-300 font-inter bg-white/90 placeholder-gray-400 ${
                status === 'error'
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                  : 'border-gray-200 focus:border-primary-400 focus:ring-primary-100'
              } focus:outline-none focus:ring-4`}
              disabled={status === 'loading'}
            />
            {status === 'loading' && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Loader2 className="w-5 h-5 text-primary-500 animate-spin" />
              </div>
            )}
          </div>

          {status === 'error' && errorMessage && (
            <div className="flex items-center space-x-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading' || !email.trim()}
            className="w-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 hover:from-primary-600 hover:via-secondary-600 hover:to-accent-600 disabled:from-gray-300 disabled:via-gray-300 disabled:to-gray-300 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center space-x-2 font-poppins text-lg disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Joining...</span>
              </>
            ) : (
              <>
                <span>Join the Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4 font-inter">
          We'll never spam you. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default WaitlistForm;