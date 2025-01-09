import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import FrontPage from "./Pages/FrontPage";
import About from "./Pages/About";
import Social from "./Pages/Social";
import Projects from "./Pages/Projects";
import AboutMe from "./Pages/AboutMe";
import MultiTabs from "./Pages/MultiTabs";
import HeaderBar from "./Pages/HeaderBar";
import NotFound from "./Pages/NotFound";
import Experience from "./Pages/Experience";

function App() {
  const location = useLocation(); // Get the current location

  return (
    <>
      {/* Conditionally render HeaderBar based on the current path */}
      {location.pathname !== "/" && <HeaderBar />}

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/all" element={<About />} />
        <Route path="/social" element={<Social />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/checking" element={<MultiTabs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
