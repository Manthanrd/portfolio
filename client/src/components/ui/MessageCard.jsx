function MessageCard({ message, onView, onDelete }) {
  return (
    <div className="message-card">

      <h3>{message.name}</h3>

      <p><strong>Email:</strong> {message.email}</p>

      <p><strong>Subject:</strong> {message.subject}</p>

      <div className="btn-group">

        <button onClick={onView}>
          View
        </button>

        <button onClick={onDelete}>
          Delete
        </button>

      </div>

    </div>
  );
}

export default MessageCard;