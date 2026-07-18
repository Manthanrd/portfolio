import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import "../../styles/Footer.css";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Manthan Domde</h2>

        <p>
          React Frontend Developer | MERN Stack Developer
        </p>

        <div className="footer-social">

          <a
            href="https://github.com/manthanrd"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/manthan-domde"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/YOUR_INSTAGRAM"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

        <button
          className="top-btn"
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>

        <p className="copyright">
          © {new Date().getFullYear()} Manthan Domde. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;