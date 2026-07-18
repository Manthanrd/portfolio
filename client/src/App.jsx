import { Routes, Route } from "react-router-dom";

import CursorGlow from "./components/ui/CursorGlow";

import Navbar from "./components/Layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Github from "./sections/Github";
import Contact from "./sections/Contact";
import Footer from "./components/Layout/Footer";
import Background from "./components/layout/Background";

import Dashboard from "./admin/Dashboard";
import ScrollProgress from "./components/ui/ScrollProgress";

function Portfolio() {
  return (
    <>
      <ScrollProgress/>
      <CursorGlow />

      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Education />
      <Certificates />
      <Github />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />

      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
}

export default App;