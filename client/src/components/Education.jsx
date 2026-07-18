import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/Education.css";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science & Engineering",
    college: "G H Raisoni College of Engineering",
    university: "RTM Nagpur University",
    location: "Nagpur, Maharashtra",
    year: "2022 - 2026",
    score: "CGPA : 8.0",
  },
];

function Education() {
  return (
    <section id="education" className="education">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >

        <h2 className="section-heading">
          🎓 Education
        </h2>

        <p className="section-subtitle">
          My academic journey.
        </p>

      </motion.div>

      <div className="timeline">

        {education.map((item, index) => (

          <motion.div
            key={index}
            className="edu-card"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * .2 }}
          >

            <div className="timeline-dot"></div>

            <div className="year-badge">

              <FaCalendarAlt />

              {item.year}

            </div>

            <h3>

              <FaGraduationCap />

              {item.degree}

            </h3>

            <h4>{item.branch}</h4>

            <p>

              <FaUniversity />

              {item.college}

            </p>

            <p>{item.university}</p>

            <p>

              <FaMapMarkerAlt />

              {item.location}

            </p>

            <div className="cgpa">

              {item.score}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Education;