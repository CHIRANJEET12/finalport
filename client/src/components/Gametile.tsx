import { motion } from "framer-motion";
import { useState } from "react";

interface GameTileProps {
  title: string;
  image: string;
  onClick: () => void;
}

export default function GameTile({ title, image, onClick }: GameTileProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-xl border-2 border-gray-800 h-60 w-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.8 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-white font-orbitron text-lg">{title}</h3>
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <button className="bg-green-400 text-black px-4 py-2 rounded-full font-orbitron font-bold drop-shadow-[0_0_6px_#00FF00]">
            Press to Play
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
