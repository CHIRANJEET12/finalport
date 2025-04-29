import { motion } from "framer-motion";

import { FaCode, FaGamepad, FaServer, FaLaptopCode, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // added icons

export default function About() {
  const skills = [
    { name: "Frontend", level: 85, icon: <FaCode className="text-green-400" /> },
    { name: "Backend", level: 75, icon: <FaServer className="text-green-400" /> },
    { name: "Game Dev", level: 60, icon: <FaGamepad className="text-green-400" /> },
    { name: "DevOps", level: 65, icon: <FaLaptopCode className="text-green-400" /> },
  ];

  const languages = ["TypeScript", "JavaScript", "Python", "C++", "Java", "C#", "HTML", "CSS", "SQL", "React", "Node.js", "Express", "Unity", "Docker", "Kubernetes"];

  const leetcodeStats = {
    easy: 77,
    medium: 55,
    hard: 3
  };

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden font-orbitron">
      
      {/* Moving Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-700 to-black opacity-40"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      
      {/* Subtle green glow */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <div className="absolute w-96 h-96 bg-green-700 opacity-15 rounded-full blur-3xl top-1/3 left-1/2 transform -translate-x-1/2" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-orbitron text-green-400 mb-16 text-center tracking-wider"
        >
          PLAYER PROFILE
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Avatar and Bio */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black bg-opacity-60 backdrop-blur-md p-10 rounded-3xl border border-green-400 shadow-lg shadow-green-400/30 hover:shadow-green-400/50 transition-all duration-500"
          >
            <div className="flex flex-col items-center mb-8">
              {/* Avatar */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="w-36 h-36 rounded-full border-4 border-green-400 mb-6 overflow-hidden shadow-lg shadow-green-400/40"
              >
                <img 
                  src="/images/avatar.jpg" 
                  alt="Developer Avatar"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Level */}
              <h3 className="text-4xl font-orbitron text-green-400 tracking-widest drop-shadow-lg mb-2">
                LEVEL 10 CODER
              </h3>

              {/* XP Bar */}
              <div className="w-full bg-neutral-800 h-3 rounded-full mt-4 mb-2 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-green-400 to-green-300 h-full rounded-full shadow-md shadow-green-400/30" 
                  style={{ width: '67%' }}
                  animate={{ width: ["65%", "70%", "67%"] }}
                  transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
                />
              </div>
              <p className="text-green-300 text-sm tracking-wide">XP: 1200 / 1500</p>
            </div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4 text-green-200 text-center text-lg leading-relaxed"
            >
              <p>
                As a passionate Full Stack Developer and AI-ML Enthusiast, I thrive on leveraging technology to solve complex problems and create innovative solutions. My journey in the tech world has equipped me with a diverse skill set and a deep understanding of various programming languages and frameworks.
              </p>

              <p>
                Artificial Intelligence & Machine Learning: I am fascinated by the potential of AI and ML to transform industries and improve lives. I enjoy exploring new algorithms, working on predictive models, and staying updated with the latest advancements in the field.
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mt-8 text-green-400 text-2xl">
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                  <FaLinkedin />
                </a>
                <a href="https://leetcode.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                  <img src="/images/leetcode.svg" alt="LeetCode" className="w-6 h-6" />
                </a>
                <a href="https://auth.geeksforgeeks.org/user/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                  <img src="/images/gfg.svg" alt="GeeksforGeeks" className="w-6 h-6" />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills and Languages */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Skills Section */}
            <div className="bg-black-900 bg-opacity-80 p-10 rounded-2xl border border-green-100 shadow-lg shadow-green-500/30">
              <h3 className="text-2xl font-orbitron text-green-400 mb-8 tracking-wide">
                SKILL STATS
              </h3>
              <div className="space-y-8">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-orbitron text-lg tracking-wider text-white">{skill.name}</span>
                      <span className="ml-auto text-green-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-green-900 h-2 rounded-full">
                      <div 
                        className="bg-green-400 h-full rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="bg-black-100 bg-opacity-80 p-10 rounded-2xl border border-green-900 shadow-lg shadow-green-500/30">
              <h3 className="text-2xl font-orbitron text-green-700 mb-8 tracking-wide">
                LANGUAGE PROGRESSION
              </h3>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <motion.span 
                    key={lang}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-green-800 rounded-full text-sm flex items-center gap-2 font-orbitron text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>


  {/* LeetCode Stats Card */}
<div className="bg-black bg-opacity-70 p-6 rounded-xl border border-green-400 shadow-lg shadow-green-500/30 w-80">
  <h3 className="text-xl font-orbitron text-green-400 mb-4 tracking-wide text-center">
    LeetCode STATS
  </h3>

  {/* Total Stats */}
  <h3 className="text-lg font-orbitron text-green-400 mb-4 text-center">
    <span className="text-green-500 text-lg">Total</span>
    <br />
    <span className="text-base">{leetcodeStats.easy + leetcodeStats.medium + leetcodeStats.hard}</span>
  </h3>

  {/* Breakdown of Stats */}
  <div className="space-y-3 text-center text-green-200">
    <div className="flex justify-between text-sm">
      <span>Easy</span>
      <span>{leetcodeStats.easy}</span>
    </div>

    <div className="flex justify-between text-sm">
      <span>Medium</span>
      <span>{leetcodeStats.medium}</span>
    </div>

    <div className="flex justify-between text-sm">
      <span>Hard</span>
      <span>{leetcodeStats.hard}</span>
    </div>
  </div>
</div>




        </div>
      </motion.div>
    </section>
  );
}
