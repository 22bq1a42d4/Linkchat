import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full neon-gradient flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="text-white/90 font-medium">LinkChat</span>
          </div>

          {/* Description */}
          <div className="text-center">
            <p className="text-white/70 text-sm">
              Your AI Career Companion – Powered by LinkedIn
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: '#00f0ff' }}
              className="text-white/70 hover:text-cyan-400 transition-colors flex items-center space-x-1 text-sm"
            >
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3" />
            </motion.a>
            
            <motion.a
              href="https://amergent.sh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: '#ff00ff' }}
              className="text-white/70 hover:text-pink-500 transition-colors flex items-center space-x-1 text-sm"
            >
              <span>Amergent</span>
              <ExternalLink className="h-3 w-3" />
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-center text-white/50 text-xs">
            © 2025 LinkChat. All rights reserved. Built with ❤️ and AI.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;