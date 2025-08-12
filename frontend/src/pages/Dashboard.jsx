import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import ProfileCard from '../components/ProfileCard';
import SkillsCloud from '../components/SkillsCloud';
import GoalsSection from '../components/GoalsSection';
import ChatWindow from '../components/ChatWindow';
import ThreeBackground from '../components/ThreeBackground';
import Loader from '../components/Loader';
import useFetchUser from '../hooks/useFetchUser';
import { staggerContainer, staggerItem } from '../utils/motionPresets';

const Dashboard = () => {
  const { user, loading, error } = useFetchUser();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <Loader size="large" text="Loading your dashboard..." />
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Authentication Required</h2>
          <p className="text-gray-400 mb-6">Please log in with LinkedIn to access your dashboard.</p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Subtle particle background for dashboard */}
      <ThreeBackground variant="subtle" />
      
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar />

        {/* Main Dashboard Content */}
        <main className="pt-24 pb-12 px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-7xl mx-auto"
          >
            {/* Welcome Section */}
            <motion.div variants={staggerItem} className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text">
                Welcome back, {user.firstName}!
              </h1>
              <p className="text-gray-300 text-lg">
                Let's continue building your career together
              </p>
            </motion.div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Left Column - Profile */}
              <motion.div variants={staggerItem} className="lg:col-span-1">
                <div className="space-y-8">
                  <ProfileCard user={user} />
                </div>
              </motion.div>

              {/* Right Column - Skills & Goals */}
              <motion.div variants={staggerItem} className="lg:col-span-2">
                <div className="space-y-8">
                  <SkillsCloud user={user} />
                  <GoalsSection />
                </div>
              </motion.div>
            </div>

            {/* Chat Section - Full Width */}
            <motion.div variants={staggerItem} className="mb-12">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 glow-text-pink">
                  AI Career Assistant
                </h2>
                <p className="text-gray-400">
                  Get personalized career advice and insights
                </p>
              </div>
              <ChatWindow />
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">85%</div>
                <div className="text-xs text-gray-400">Profile Strength</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-pink-400 mb-1">12</div>
                <div className="text-xs text-gray-400">Skills Tracked</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">3</div>
                <div className="text-xs text-gray-400">Active Goals</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">247</div>
                <div className="text-xs text-gray-400">Network Connections</div>
              </div>
            </motion.div>

            {/* Action Items */}
            <motion.div variants={staggerItem} className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Today's Action Items</h3>
              <div className="space-y-3">
                {[
                  { task: "Complete React advanced course module", priority: "high", time: "30 min" },
                  { task: "Connect with 3 professionals in AI field", priority: "medium", time: "15 min" },
                  { task: "Update LinkedIn headline", priority: "low", time: "5 min" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        item.priority === 'high' ? 'bg-red-400' :
                        item.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                      }`} />
                      <span className="text-white group-hover:text-cyan-400 transition-colors">
                        {item.task}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;