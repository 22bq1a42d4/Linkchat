import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, User, MessageCircle } from 'lucide-react';
import GlassCard from '../GlassCard';
import useFetchUser from '../../hooks/useFetchUser';

const Navbar = () => {
  const { user, logout } = useFetchUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <GlassCard className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-full neon-gradient flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold glow-text">LinkChat</h1>
          </motion.div>

          {/* User info and logout */}
          {user && (
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <span className="text-sm text-white/90">
                  {user.firstName} {user.lastName}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-colors"
                aria-label="Logout"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </motion.button>
            </div>
          )}
        </div>
      </GlassCard>
    </motion.nav>
  );
};

export default Navbar;