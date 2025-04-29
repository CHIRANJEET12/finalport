import { motion } from "framer-motion";
import { FaGamepad, FaArrowDown } from "react-icons/fa";

export default function Home() {
  const preview=()=>{
    window.open("https://drive.google.com/file/d/11YDyjMUVdhklQWTktPqVOj4Mfr4FMOiV/view?usp=sharing");
  }
  return (
    <section
      id="home"
      className="min-h-screen font-mono flex flex-col justify-center items-center relative overflow-hidden bg-black font-orbitron px-4"
    >
      {/* Floating Animated Background Bubbles */}
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

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          className="mb-8"
        >
          <FaGamepad className="text-green-400 text-[clamp(2.5rem,6vw,5rem)] mx-auto drop-shadow-lg animate-pulse" />

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="font-pressStart2P bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mt-1 mb-4 tracking-wider text-[clamp(2rem,6vw,5rem)]"
          >
            CHIRANJEET
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-[clamp(1rem,2vw,1.5rem)] text-green-300 max-w-3xl mx-auto font-audiowide"
          >
Full-Stack Developer with a <span onClick={preview} className="bg-green-200  text-black border hover:cursor-pointer border-green-300 rounded-lg py-1 px-3 shadow-md hover:bg-green-400 transition duration-300">resume</span>
 showcasing expertise in responsive, scalable web apps, integrating creative code and problem-solving skills.          </motion.p>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-7"
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #00FF00" }}
            className="border border-green-300 hover:bg-green-500 text-white font-orbitron px-6 py-3 rounded-full text-lg sm:text-xl flex items-center gap-1 transition-all duration-300 mx-auto"
          >
            START <FaArrowDown />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-0 right-0 text-center"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <p className="text-green-300 font-orbitron text-sm sm:text-base tracking-wider">
          Scroll to explore
        </p>
      </motion.div>
    </section>
  );
}
