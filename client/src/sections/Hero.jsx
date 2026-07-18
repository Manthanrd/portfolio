import { FaReact, FaNodeJs, } from "react-icons/fa";
import { SiJavascript, SiMongodb, } from "react-icons/si";
import "../styles/Hero.css";
import profile from "../assets/images/profile.jpg";
import { Button } from "react-bootstrap"; 

import portfolioData from "../data/portfolioData";

import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {

  const { personal } = portfolioData;

  return (
    <section className="hero" id="home">

      <div className="hero-bg">
        <div className="gradient-circle circle-1">...</div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>  

      <div className="hero-content">

        <p className="hero-greeting">
          👋 Hello, I'm
        </p>

        <h1>
          {personal.firstName}
          <br />
          {personal.lastName}
        </h1>

        <h2>

          <Typewriter
            words={personal.role}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
          />

        </h2>

        <p className="hero-description">

          {personal.tagline}

        </p>

        <div className="hero-buttons">

         <Button href="#projects">
              View My Work
          </Button>

          <Button
              variant="secondary"
              href="/resume.pdf"
              download
          >
              Download Resume
          </Button>

          <a href="/resume.pdf" download className="secondary-btn">

            Download Resume

          </a>

        </div>

        <div className="social-links">

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href={`mailto:${personal.email}`}>
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-image">

        <img
          src={profile}
          alt="Manthan Domde"
        />

      </div>

      <div className="scroll-indicator">

          Scroll Down

      </div>

    </section>
  );
}

export default Hero;