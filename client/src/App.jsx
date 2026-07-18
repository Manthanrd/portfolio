import { Routes, Route } from "react-router-dom";

import CursorGlow from "./components/ui/CursorGlow";
import ScrollProgress from "./components/ui/ScrollProgress";

import Navbar from "./components/Layout/Navbar";
import Background from "./components/Layout/Background";
import Footer from "./components/Layout/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Github from "./sections/Github";
import Contact from "./sections/Contact";

import Education from "./components/Education";
import Certificates from "./components/Certificates";

import Dashboard from "./admin/Dashboard";

function Portfolio() {
  return (
    <>
      <ScrollProgress />
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