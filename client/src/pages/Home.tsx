import { motion } from "framer-motion";
import { FaGamepad, FaArrowDown } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black font-orbitron"
    >
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-400 opacity-10 blur-md"
            style={{
              width: Math.random() * 40 + 30,
              height: Math.random() * 40 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          className="mb-8"
        >
          <FaGamepad className="text-green-400 text-6xl mx-auto drop-shadow-lg animate-pulse" />
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="text-5xl md:text-7xl font-pressStart2P bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mt-4 mb-4 tracking-wider"
          >
            CHIRANJEET
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-2xl text-green-300 max-w-2xl mx-auto font-audiowide"
          >
            Full-Stack Developer | Gamer Spirit | Futuristic Creations
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #00FF00" }}
            className="border-1 border-green-300 hover:bg-green-500 text-white font-orbitron px-8 py-4 rounded-full text-xl flex items-center gap-2 transition-all duration-300 mx-auto"
          >
            START <FaArrowDown />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-0 right-0 text-center"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <p className="text-green-300 font-orbitron text-sm tracking-wider">
          Scroll to explore
        </p>
      </motion.div>
    </section>
  );
}
