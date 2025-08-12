import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ArrowRight, Zap, Users, Target, MessageCircle } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import GlassCard from '../components/GlassCard';
import useFetchUser from '../hooks/useFetchUser';

const LandingPage = () => {
  const { user, loading } = useFetchUser();

  // Redirect to dashboard if user is already logged in
  useEffect(() => {
    if (user && !loading) {
      window.location.href = '/dashboard';
    }
  }, [user, loading]);

  const handleLinkedInLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_BASE}/auth/linkedin`;
  };

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Get personalized career recommendations based on your LinkedIn profile and industry trends."
    },
    {
      icon: Users,
      title: "Smart Networking",
      description: "Discover and connect with the right professionals to advance your career goals."
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and track meaningful career objectives with AI-guided action plans."
    },
    {
      icon: MessageCircle,
      title: "Career Coaching",
      description: "Chat with your AI career companion for instant advice and guidance."
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Three.js Background */}
      <ThreeBackground variant="full" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Your AI Career{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 bg-clip-text text-transparent glow-text">
                  Companion
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Powered by LinkedIn • Enhanced by AI • Designed for Growth
              </p>
            </motion.div>

            {/* Login Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <GlassCard className="p-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Get Started
                  </h2>
                  
                  <p className="text-gray-300 mb-6 text-sm">
                    Connect your LinkedIn profile to unlock personalized AI career insights
                  </p>

                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLinkedInLogin}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Continue with LinkedIn</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <p className="text-xs text-gray-500 mt-4">
                    Secure authentication via LinkedIn OAuth
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <GlassCard className="p-6 h-full text-center hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-2 mb-2 md:mb-0">
                <span>© 2025 LinkChat</span>
                <span>•</span>
                <span>Powered by AI</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="https://app.amergent.sh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Amergent
                </a>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default LandingPage;