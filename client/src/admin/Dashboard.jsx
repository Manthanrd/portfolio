import { useEffect, useMemo, useState } from "react";
import api from "../services/api";
import Swal from "sweetalert2";

import MessageCard from "../components/ui/MessageCard";
import MessageModal from "../components/ui/MessageModal";

import "../styles/Admin.css";

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await api.get("/contact");
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredMessages = useMemo(() => {
    return messages.filter((msg) => {
      return (
        msg.name.toLowerCase().includes(search.toLowerCase()) ||
        msg.email.toLowerCase().includes(search.toLowerCase()) ||
        msg.subject.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [messages, search]);

  const todayMessages = useMemo(() => {
    const today = new Date().toDateString();

    return messages.filter(
      (msg) =>
        new Date(msg.createdAt).toDateString() === today
    ).length;
  }, [messages]);

  const deleteMessage = async (id) => {

    const result = await Swal.fire({
      title: "Delete Message?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Delete",
    });

    if (!result.isConfirmed) return;

    try {

      await api.delete(`/contact/${id}`);

      setMessages(messages.filter((msg) => msg._id !== id));

      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "Message deleted successfully.",
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="admin">

      <h1>Portfolio Admin Dashboard</h1>

      <div className="stats">

        <div className="stat-card">
          <h2>{messages.length}</h2>
          <p>Total Messages</p>
        </div>

        <div className="stat-card">
          <h2>{todayMessages}</h2>
          <p>Today's Messages</p>
        </div>

      </div>

      <input
        className="search-box"
        type="text"
        placeholder="Search by name, email or subject..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="message-grid">

        {filteredMessages.map((msg) => (

          <MessageCard
            key={msg._id}
            message={msg}
            onView={() => setSelected(msg)}
            onDelete={() => deleteMessage(msg._id)}
          />

        ))}

      </div>

      {selected && (
        <MessageModal
          message={selected}
          onClose={() => setSelected(null)}
        />
      )}

    </section>
  );
}

export default Dashboard;