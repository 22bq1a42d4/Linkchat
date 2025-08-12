import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Star, TrendingUp } from 'lucide-react';
import GlassCard from './GlassCard';

const SkillsCloud = ({ user }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Mock skills if user doesn't have skills data
  const mockSkills = [
    { name: 'JavaScript', level: 90, category: 'technical' },
    { name: 'React', level: 85, category: 'technical' },
    { name: 'Node.js', level: 80, category: 'technical' },
    { name: 'Project Management', level: 75, category: 'soft' },
    { name: 'Leadership', level: 70, category: 'soft' },
    { name: 'Communication', level: 95, category: 'soft' },
    { name: 'Python', level: 65, category: 'technical' },
    { name: 'SQL', level: 70, category: 'technical' },
    { name: 'Strategic Planning', level: 80, category: 'soft' },
    { name: 'Team Building', level: 85, category: 'soft' }
  ];

  const skills = user?.skills || mockSkills;

  const getSkillColor = (category, level) => {
    if (category === 'technical') {
      return level > 80 ? 'from-cyan-400 to-blue-500' : 'from-cyan-300 to-blue-400';
    }
    return level > 80 ? 'from-pink-400 to-purple-500' : 'from-pink-300 to-purple-400';
  };

  const getSkillIcon = (category) => {
    return category === 'technical' ? Zap : Star;
  };

  return (
    <GlassCard className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white glow-text">Skills Cloud</h3>
            <p className="text-gray-400 text-sm">Click on skills to explore</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill, index) => {
            const Icon = getSkillIcon(skill.category);
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 240, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedSkill === skill.name 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/50' 
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
                onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
              >
                {/* Skill Icon */}
                <div className="flex items-center justify-center mb-2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getSkillColor(skill.category, skill.level)} flex items-center justify-center`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Skill Name */}
                <h4 className="text-white text-sm font-medium text-center mb-2 leading-tight">
                  {skill.name}
                </h4>

                {/* Skill Level Bar */}
                <div className="w-full bg-gray-700 rounded-full h-1.5 mb-1">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${getSkillColor(skill.category, skill.level)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                  />
                </div>

                {/* Skill Level Text */}
                <p className="text-xs text-gray-400 text-center">{skill.level}%</p>

                {/* Floating indicator for high-level skills */}
                {skill.level > 85 && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Star className="h-2 w-2 text-white" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Selected Skill Details */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-xl border border-cyan-400/30"
          >
            <h4 className="text-white font-semibold mb-2">{selectedSkill}</h4>
            <p className="text-gray-300 text-sm">
              Click on other skills to compare or view recommendations for skill improvement.
            </p>
          </motion.div>
        )}

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex justify-between items-center text-sm"
        >
          <div className="text-gray-400">
            <span className="text-cyan-400">{skills.filter(s => s.category === 'technical').length}</span> Technical Skills
          </div>
          <div className="text-gray-400">
            <span className="text-pink-400">{skills.filter(s => s.category === 'soft').length}</span> Soft Skills
          </div>
          <div className="text-gray-400">
            <span className="text-yellow-400">{skills.filter(s => s.level > 85).length}</span> Expert Level
          </div>
        </motion.div>
      </motion.div>
    </GlassCard>
  );
};

export default SkillsCloud;