import { useState, useRef } from "react";
import { motion } from "framer-motion";
import GameTile from "../components/Gametile";

// import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    id: 1,
    title: "FORWIT",
    type: "web app",
    image: "/images/projects/forwit.jpg",
    description: "A social platform for developers to share their projects and collaborate.",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/forwit",
    liveUrl: "https://forwit-app.com",
  },
  {
    id: 2,
    title: "Voice",
    type: "game",
    image: "/images/projects/voice.jpg",
    description: "An interactive voice-controlled adventure game built with Web Audio API.",
    technologies: ["JavaScript", "Web Audio API", "Three.js"],
    githubUrl: "https://github.com/yourusername/voice-game",
  },
  {
    id: 3,
    title: "Prime Video Clone",
    type: "web app",
    image: "/images/projects/prime.jpg",
    description: "A responsive clone of Prime Video with custom recommendations engine.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/prime-clone",
    liveUrl: "https://prime-clone-demo.netlify.app",
  },
  {
    id: 4,
    title: "NETFLIX UI",
    type: "web app",
    image: "/images/projects/netflix.jpg",
    description: "Netflix UI recreation with custom animations and responsive design.",
    technologies: ["React", "Framer Motion", "CSS Modules"],
    githubUrl: "https://github.com/yourusername/netflix-ui",
  },
  {
    id: 5,
    title: "ESPTI",
    type: "game",
    image: "/images/projects/espti.jpg",
    description: "2D platformer game with physics engine and custom level design.",
    technologies: ["Unity", "C#"],
    githubUrl: "https://github.com/yourusername/espti-game",
  },
  {
    id: 6,
    title: "Motorist App",
    type: "mobile app",
    image: "/images/projects/motorist.jpg",
    description: "Car maintenance tracker with notifications and service history.",
    technologies: ["React Native", "Firebase"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.motorist.app",
  },
];

type ProjectType = (typeof projects)[0];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-black font-mono relative overflow-hidden font-orbitron min-h-screen">

      {/* Moving Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-700 to-black opacity-30"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Soft Green Glow */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <div className="absolute w-96 h-96 bg-green-700 opacity-15 rounded-full blur-3xl top-1/3 left-1/2 transform -translate-x-1/2" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold font-orbitron text-green-400 text-center mb-6 drop-shadow-[0_0_10px_#00FF00]"
        >
          GAME LIBRARY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Dive into my collection of projects — each crafted with creativity, learning, and passion.
        </motion.p>

        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-green-600 p-3 rounded-full shadow-md hover:bg-green-700 transition"
        >
          
        </button>

        {/* Scrollable Cards */}
        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
        >
          {projects.map((project) => (
            <GameTile
              key={project.id}
              title={project.title}
              image={project.image}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {/* Right Arrow Button */}
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-green-600 p-3 rounded-full shadow-md hover:bg-green-700 transition"
        >

        </button>

        {/* {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )} */}
      </div>
    </section>
  );
}
