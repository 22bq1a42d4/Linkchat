import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, TrendingUp, Award, ArrowRight, Lightbulb, Calendar, CheckCircle } from 'lucide-react';
import GlassCard from './GlassCard';

const GoalsSection = () => {
  const [selectedGoal, setSelectedGoal] = useState(0);

  // AI-generated goal suggestions (placeholder until model integration)
  const aiSuggestions = [
    {
      id: 1,
      title: "Advance to Senior Developer",
      description: "Based on your current skills and LinkedIn activity, here's your personalized roadmap to senior level.",
      priority: "high",
      timeframe: "6-12 months",
      steps: [
        "Master advanced React patterns and architecture",
        "Lead a cross-functional project team",
        "Contribute to open-source projects",
        "Obtain cloud certification (AWS/Azure)"
      ],
      icon: TrendingUp,
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 2,
      title: "Build Industry Network",
      description: "Expand your professional network to unlock new opportunities and collaborations.",
      priority: "medium",
      timeframe: "3-6 months",
      steps: [
        "Connect with 50 industry professionals monthly",
        "Attend 2 tech conferences or meetups",
        "Share weekly insights on LinkedIn",
        "Start a tech blog or newsletter"
      ],
      icon: Award,
      color: "from-pink-400 to-purple-500"
    },
    {
      id: 3,
      title: "Develop AI/ML Expertise",
      description: "Position yourself at the forefront of AI innovation with targeted learning and practical projects.",
      priority: "high",
      timeframe: "8-12 months",
      steps: [
        "Complete advanced ML course (Stanford/Coursera)",
        "Build 3 AI projects for portfolio",
        "Join AI/ML communities and forums",
        "Attend AI conferences and workshops"
      ],
      icon: Lightbulb,
      color: "from-green-400 to-teal-500"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
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
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
            <Target className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white glow-text">AI Career Goals</h3>
            <p className="text-gray-400 text-sm">Personalized recommendations for your growth</p>
          </div>
        </div>

        {/* Goal Cards Navigation */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          {aiSuggestions.map((goal, index) => (
            <motion.button
              key={goal.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedGoal(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedGoal === index
                  ? 'bg-gradient-to-r from-cyan-500/30 to-pink-500/30 text-white border border-cyan-400/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {goal.title}
            </motion.button>
          ))}
        </div>

        {/* Selected Goal Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedGoal}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {(() => {
              const goal = aiSuggestions[selectedGoal];
              const Icon = goal.icon;
              
              return (
                <>
                  {/* Goal Header */}
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${goal.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{goal.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">{goal.description}</p>
                      
                      {/* Goal Meta Info */}
                      <div className="flex items-center space-x-4 text-xs">
                        <span className={`px-2 py-1 rounded-full ${getPriorityColor(goal.priority)}`}>
                          {goal.priority.toUpperCase()} PRIORITY
                        </span>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Calendar className="h-3 w-3" />
                          <span>{goal.timeframe}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Steps */}
                  <div className="pl-16">
                    <h5 className="text-white font-medium mb-3 flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-cyan-400" />
                      <span>Recommended Action Steps</span>
                    </h5>
                    <div className="space-y-2">
                      {goal.steps.map((step, stepIndex) => (
                        <motion.div
                          key={stepIndex}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: stepIndex * 0.1 }}
                          className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer"
                        >
                          <CheckCircle className="h-4 w-4 text-gray-400 group-hover:text-cyan-400 mt-0.5 flex-shrink-0 transition-colors" />
                          <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pl-16 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-6 py-3 rounded-lg bg-gradient-to-r ${goal.color} text-white font-medium text-sm hover:shadow-lg transition-shadow flex items-center space-x-2`}
                    >
                      <span>Start This Goal</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </AnimatePresence>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-6 border-t border-white/10"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400">3</div>
              <div className="text-xs text-gray-400">Active Goals</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">12</div>
              <div className="text-xs text-gray-400">Action Items</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">67%</div>
              <div className="text-xs text-gray-400">Progress Score</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </GlassCard>
  );
};

export default GoalsSection;