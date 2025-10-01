import React, { useState, useEffect, useRef } from "react";

const Chats = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey, have you read *The Metamorphosis*?", sender: "other" },
    { id: 2, text: "Yes! Kafka’s writing is so surreal 👀", sender: "me" },
    {
      id: 3,
      text: "I just finished *No Longer Human* by Osamu Dazai. It was heavy 😔",
      sender: "other",
    },
    {
      id: 4,
      text: "Sharing the cover of my favorite:",
      sender: "me",
      bookCover:
        "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
    },
    {
      id: 5,
      text: "That’s amazing! I’ll share *Crime and Punishment* 📖",
      sender: "other",
      bookCover:
        "https://eastindiapublishing.com/cdn/shop/files/CrimeandPunishment-01.png?v=1706581156",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    const msg = {
      id: messages.length + 1,
      text: newMessage,
      sender: "me",
    };
    setMessages([...messages, msg]);
    setNewMessage("");
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f2f2f2",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "12px",
          backgroundColor: "#333",
          color: "white",
          fontWeight: "bold",
          fontSize: "18px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        📚 Book Discussion Chat
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: "16px",
          overflowY: "auto",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              justifyContent: msg.sender === "me" ? "flex-end" : "flex-start",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                padding: "12px",
                borderRadius: "16px",
                maxWidth: "250px",
                backgroundColor: msg.sender === "me" ? "#333" : "#ddd",
                color: msg.sender === "me" ? "white" : "black",
              }}
            >
              <p style={{ margin: 0 }}>{msg.text}</p>
              {msg.bookCover && (
                <img
                  src={msg.bookCover}
                  alt="Book cover"
                  style={{
                    marginTop: "8px",
                    width: "100px",
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSend}
        style={{
          display: "flex",
          padding: "12px",
          backgroundColor: "white",
          borderTop: "1px solid #ccc",
        }}
      >
        <input
          type="text"
          placeholder="Talk about a book..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "16px",
            marginRight: "8px",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#333",
            color: "white",
            padding: "10px 16px",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chats;
