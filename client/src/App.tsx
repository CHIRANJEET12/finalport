import { useState } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/Loading";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
// import GameTile from "./components/Gametile";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="main">
      {isLoading ? (
        <LoadingScreen onLoaded={() => setIsLoading(false)} />
      ) : (
        <div>
          <Navbar />
          <main className="container">
            <Home />
            <About />
            <Projects/>
            <Contact/>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
