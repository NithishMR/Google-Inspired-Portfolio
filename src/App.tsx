import { Routes, Route } from "react-router-dom";
import "./App.css";
import FrontPage from "./Pages/FrontPage";
import About from "./Pages/About";
import Social from "./Pages/Social";
import Projects from "./Pages/Projects";
import AboutMe from "./Pages/AboutMe";
import MultiTabs from "./Pages/MultiTabs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/all" element={<About />} />
        <Route path="/social" element={<Social />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/checking" element={<MultiTabs />} />
      </Routes>
    </>
  );
}

export default App;
