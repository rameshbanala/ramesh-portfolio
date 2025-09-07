import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Users, ExternalLink } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Second Prize - Aadhya Hackathon 2025",
      organization: "RGUKT",
      description:
        "Won second prize in the prestigious Aadhya Hackathon 2025 at RGUKT for building an innovative project called Campusphere with a strong team.",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      link: "https://www.linkedin.com/posts/bhuma-naga-pavan_hackathon-2ndprize-campusphere-ugcPost-7302729057673039872-6L53", // LinkedIn post link
      date: "2025",
    },
    {
      title: "High Academic Performance",
      organization: "RGUKT RK Valley",
      description:
        "Maintained excellent academic performance with current CGPA of 9.04/10.0 in Computer Science Engineering.",
      icon: Award,
      color: "from-green-400 to-blue-500",
      link: null,
      date: "Ongoing",
    },
    {
      title: "Perfect Secondary Education Score",
      organization: "Sri Chaitanya School",
      description:
        "Achieved perfect 10/10 CGPA in Secondary School Certificate, demonstrating consistent academic excellence.",
      icon: Award,
      color: "from-purple-400 to-pink-500",
      link: null,
      date: "2020",
    },
    {
      title: "Outstanding PUC Performance",
      organization: "RGUKT RK Valley",
      description:
        "Achieved exceptional 9.76/10.0 CGPA in Pre University Course, ranking among top performers.",
      icon: Award,
      color: "from-blue-400 to-purple-500",
      link: null,
      date: "2022",
    },
  ];

  const getAchievementsGridCols = (count) => {
    if (count === 1) return "grid-cols-1 max-w-2xl mx-auto";
    if (count === 2) return "grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto";
    if (count === 3) return "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3";
    return "grid-cols-1 lg:grid-cols-2"; // 4+ items (2 columns for better readability)
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Recognition
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Milestones that reflect my dedication to excellence and continuous
            learning
          </p>
        </motion.div>

        {/* Achievements Grid with Dynamic Layout */}
        <div
          className={`grid ${getAchievementsGridCols(
            achievements.length
          )} gap-6 md:gap-8`}
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div
                      className={`p-2 md:p-3 bg-gradient-to-r ${achievement.color} rounded-lg flex-shrink-0`}
                    >
                      <Icon size={24} className="text-white md:w-7 md:h-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs md:text-sm text-gray-400 mb-1">
                        {achievement.date}
                      </div>
                      <div className="text-xs md:text-sm text-purple-400 font-medium truncate">
                        {achievement.organization}
                      </div>
                    </div>
                  </div>
                  {achievement.link && (
                    <motion.a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0"
                    >
                      <ExternalLink size={16} className="md:w-5 md:h-5" />
                    </motion.a>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {achievement.description}
                </p>

                {achievement.title.includes("Hackathon") && (
                  <div className="mt-4 p-3 md:p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                    <p className="text-yellow-400 font-medium text-xs md:text-sm mb-1">
                      Project: Campusphere
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">
                      Built an innovative solution with strong teamwork and
                      technical excellence
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-6 md:p-8 border border-blue-500/20 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Ready to Create Something Amazing Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              I'm always eager to take on new challenges and contribute to
              innovative projects. Let's discuss how we can work together to
              achieve great results.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Let's Connect
              <ExternalLink size={16} className="ml-2 md:w-5 md:h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
