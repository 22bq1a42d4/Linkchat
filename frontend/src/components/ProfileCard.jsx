import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Briefcase, MapPin } from 'lucide-react';
import GlassCard from './GlassCard';

const ProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    <GlassCard className="p-6 max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Profile Picture with Animated Glow */}
        <motion.div
          className="relative inline-block mb-4"
          animate={{
            boxShadow: [
              "0 0 20px rgba(0, 240, 255, 0.3)",
              "0 0 40px rgba(0, 240, 255, 0.6)",
              "0 0 20px rgba(0, 240, 255, 0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-transparent bg-gradient-to-r from-cyan-400 to-pink-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white mb-2 glow-text"
        >
          {user.firstName} {user.lastName}
        </motion.h2>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center space-x-2 text-gray-300 mb-3"
        >
          <Mail className="h-4 w-4" />
          <span className="text-sm">{user.email}</span>
        </motion.div>

        {/* Headline */}
        {user.headline && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start justify-center space-x-2 text-gray-400 mb-4"
          >
            <Briefcase className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-center leading-relaxed">{user.headline}</p>
          </motion.div>
        )}

        {/* LinkedIn Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center space-x-2 mx-auto"
          >
            <span>View LinkedIn Profile</span>
          </motion.button>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 flex items-center justify-center space-x-2"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Connected to LinkedIn</span>
        </motion.div>
      </motion.div>
    </GlassCard>
  );
};

export default ProfileCard;