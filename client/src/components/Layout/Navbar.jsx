import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaDownload,
} from "react-icons/fa";

import "../../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="dark"){

document.body.classList.add("dark");

setDarkMode(true);

}

},[]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {

  const newTheme = !darkMode;

  setDarkMode(newTheme);

  if(newTheme){

    document.body.classList.add("dark");

    localStorage.setItem("theme","dark");

  }else{

    document.body.classList.remove("dark");

    localStorage.setItem("theme","light");

  }

};

  return (
    <nav className="navbar">

      <div className="logo">
        Manthan.
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="#home">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#skills">Skills</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#education">Education</a></li>

        <li><a href="#certificates">Certificates</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="right-icons">

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <a
          href="/resume.pdf"
          download
          className="resume-btn"
        >
          <FaDownload />
          Resume
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;