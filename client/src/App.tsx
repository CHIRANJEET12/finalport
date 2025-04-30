import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/Loading";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", !isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className={`main ${isDark ? "dark" : "light"}`}>
      {isLoading ? (
        <LoadingScreen onLoaded={() => setIsLoading(false)} />
      ) : (
        <ContextMenu>
        <ContextMenuTrigger>
        <div>
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <main className="container">
            <Home />
            <About />
            <Projects />
            <Contact />
          </main>
        </div>
        </ContextMenuTrigger>

        <ContextMenuContent>
            <ContextMenuItem><a href="#home">Home</a></ContextMenuItem>
            <ContextMenuItem><a href="#about">about</a></ContextMenuItem>
            <ContextMenuItem><a href="#projects">project</a></ContextMenuItem>
            <ContextMenuItem><a href="#contact">contact</a></ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )}
    </div>
  );
}

export default App;
