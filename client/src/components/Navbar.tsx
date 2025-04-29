import { motion } from "framer-motion";
import { FaAdjust } from "react-icons/fa";
import { Toggle } from "@/components/ui/toggle";

export default function Navbar({  isDark,  toggleTheme,}: { isDark: boolean;  toggleTheme: () => void;}) {
  const navitem: string[] = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-sm p-4 flex justify-between items-center border-b border-green-500">
      <motion.div
        className="text-green-400 text-2xl font-bold flex items-center gap-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaAdjust className="text-green-400 text-3xl mr-2" />
        <h1 className="text-green-400 font-orbitron text-2xl font-bold">
          CHIRANJEET
        </h1>
      </motion.div>

      <div className="hidden md:flex space-x-6">
        {navitem.map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-300 hover:text-black hover:bg-green-300 rounded-lg px-2 py-1 font-orbitron relative"
            whileHover={{ scale: 1.1 }}
          >
            {item}
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>

      <ProfileStats isDark={isDark} toggleTheme={toggleTheme} />
    </nav>
  );
}

function ProfileStats({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) {
  return (
    <motion.div
      className="flex items-center space-x-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="text-right">
        <p className="text-green-400 font-orbitron">Level 10 Coder</p>
        <p className="text-gray-400 text-sm">XP: 1200/1500</p>
      </div>

      <Toggle
        onClick={toggleTheme}
        className="bg-green-400 text-black w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-green-300 transition duration-300"
      >
        {isDark ? "🌙" : "☀️"}
      </Toggle>

      <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
        <span className="text-black font-bold">CD</span>
      </div>
    </motion.div>
  );
}
