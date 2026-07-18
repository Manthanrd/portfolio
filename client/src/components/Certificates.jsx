import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

import "../styles/Certificates.css";

const certificates = [
  {
    title: "React Development",
    issuer: "Udemy",
    year: "2025",
    image: "/certificates/react.jpg",
  },
  {
    title: "Java Programming",
    issuer: "Infosys Springboard",
    year: "2025",
    image: "/certificates/java.jpg",
  },
  {
    title: "JavaScript",
    issuer: "Udemy",
    year: "2025",
    image: "/certificates/javascript.jpg",
  },
  {
    title: "MongoDB",
    issuer: "MongoDB University",
    year: "2025",
    image: "/certificates/mongodb.jpg",
  },
];

function Certificates() {

  const [preview, setPreview] = useState(null);

  return (

    <section
      className="certificates"
      id="certificates"
    >

      <motion.div

        initial={{ opacity: 0, y: 50 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

      >

        <h2 className="section-heading">

          🏆 Certificates

        </h2>

        <p className="section-subtitle">

          Courses and certifications that strengthened my technical skills.

        </p>

      </motion.div>

      <div className="certificate-grid">

        {

          certificates.map((item, index) => (

            <motion.div

              key={index}

              className="certificate-card"

              initial={{ opacity: 0, y: 60 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ delay: index * .15 }}

              viewport={{ once: true }}

            >

              <FaAward className="award-icon" />

              <h3>{item.title}</h3>

              <p>{item.issuer}</p>

              <span>{item.year}</span>

              <button

                onClick={() => setPreview(item.image)}

              >

                <FaExternalLinkAlt />

                View Certificate

              </button>

            </motion.div>

          ))

        }

      </div>

      {

        preview && (

          <div

            className="certificate-modal"

            onClick={() => setPreview(null)}

          >

            <div className="certificate-box">

              <button

                className="close-btn"

                onClick={() => setPreview(null)}

              >

                <FaTimes />

              </button>

              <img

                src={preview}

                alt="Certificate"

              />

            </div>

          </div>

        )

      }

    </section>

  );

}

export default Certificates;