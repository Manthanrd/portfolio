function MessageModal({ message, onClose }) {
  return (
    <div className="modal-overlay">

      <div className="modal-box">

        <h2>{message.subject}</h2>

        <hr />

        <p>
          <strong>Name :</strong> {message.name}
        </p>

        <p>
          <strong>Email :</strong> {message.email}
        </p>

        <p>
          <strong>Subject :</strong> {message.subject}
        </p>

        <p>
          <strong>Message :</strong>
        </p>

        <div
          style={{
            background: "#f3f4f6",
            color: "#111827",
            padding: "15px",
            borderRadius: "10px",
            marginTop: "10px",
            lineHeight: "1.7",
            whiteSpace: "pre-wrap",
          }}
        >
          {message.message}
        </div>

        <button onClick={onClose}>
          Close
        </button>

      </div>

    </div>
  );
}

export default MessageModal;