import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoaded, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
<motion.h1
  animate={{
    x: [0, 2, -2, 2, 0],
    y: [0, -2, 2, -2, 0],
    color: ["#00FF00", "#00FF0", "#00AA00", "#00FF00"],
  }}
  transition={{ duration: 0.1, repeat: Infinity }}
  className="text-neon-green font-orbitron text-4xl mb-8"
>
  Loading Profile...
</motion.h1>




      <div className="w-64 h-4 bg-black border border-neon-green rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-green-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <p className="text-neon-green font-orbitron mt-4">
        {progress}% complete
      </p>
    </div>
  );
}
