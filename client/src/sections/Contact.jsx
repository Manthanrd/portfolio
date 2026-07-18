import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import api from "../services/api";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);
 const handleSubmit = async (e) => {

  e.preventDefault();

  setLoading(true);

  try {

    const res = await api.post("/contact", form);

    Swal.fire({

      icon: "success",

      title: "Message Sent",

      text: res.data.message,

      confirmButtonColor: "#2563eb"

    });

    toast.success("Thank you for contacting me!");

    setForm({

      name: "",

      email: "",

      subject: "",

      message: ""

    });

  } catch (err) {

    Swal.fire({

      icon: "error",

      title: "Oops...",

      text: err.response?.data?.message || "Server Error",

    });

  } finally {

    setLoading(false);

  }

};

  return (
    <section id="contact">

      <SectionTitle
        number="06"
        title="LET'S CONNECT"
        subtitle="Have an idea or opportunity? Send me a message."
      />

      <div className="contact-container">

        {/* Left */}

        <div className="contact-info">

          <div className="info-box">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 8087570915</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>manthandomde@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>Nagpur, Maharashtra</p>
            </div>
          </div>

        </div>

        {/* Right */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
  type="submit"
  disabled={loading}
>

  {

    loading

    ? "Sending..."

    : "Send Message"

  }

</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;