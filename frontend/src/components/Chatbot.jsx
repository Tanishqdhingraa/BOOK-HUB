import React, { useState, useRef, useEffect } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Welcome to Book Hub — where you can read PDFs, buy PDFs, or chat with people about books!",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const faqs = [
    {
      triggers: ["what is book hub", "about book hub", "bookhub"],
      answer:
        "Book Hub is a digital reading platform where you can explore, read, buy PDFs, and chat with book lovers.",
    },
    {
      triggers: ["read pdf", "read books", "pdf reader"],
      answer:
        "You can open and read PDFs directly inside Book Hub with smooth page navigation and easy zoom.",
    },
    {
      triggers: ["buy pdf", "purchase", "pricing"],
      answer:
        "PDF prices vary depending on the book. You can purchase securely through Book Hub.",
    },
    {
      triggers: ["chat", "community", "discuss books"],
      answer:
        "Book Hub lets you chat with other readers, join book communities, and share opinions!",
    },
    {
      triggers: ["mission", "your mission"],
      answer:
        "Our mission is to make reading accessible, social, and enjoyable for everyone.",
    },
  ];

  function matchFAQ(text) {
    const query = text.toLowerCase();
    for (const faq of faqs) {
      for (const t of faq.triggers) {
        if (query.includes(t)) return faq.answer;
      }
    }
    return null;
  }

  function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setInput("");

    const response = matchFAQ(userText);

    if (response) {
      setMessages((prev) => [...prev, { from: "bot", text: response }]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text:
            "I'm not sure about that — try asking about reading PDFs, buying books, chatting, or Book Hub features.",
        },
      ]);
    }
  }

  return (
    <div className="w-44 fixed sm:w- bottom-10 right-10 z-50">
      <div className="w-full bg-indigo-600 shadow-2xl rounded-xl border border-indigo-300 overflow-hidden">
        <div className="bg-indigo-950 text-white p-3 font-semibold text-center text-sm border-b border-indigo-300">
          Book Hub Bot
        </div>

        <div className="h-64 overflow-y-auto p-3 space-y-2 bg-indigo-950">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-lg max-w-[80%] text-xs whitespace-pre-wrap shadow-md ${
                  m.from === "user"
                    ? "bg-white text-indigo-700"
                    : "bg-indigo-800 text-indigo-100"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form
          onSubmit={sendMessage}
          className="p-2 border-t border-indigo-300 flex gap-2 bg-indigo-600"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Book Hub..."
            className="flex-1 px-2 py-1 text-xs bg-indigo-800 text-white border border-indigo-300 rounded focus:ring-1 focus:ring-white outline-none"
          />
          <button
            type="submit"
            className="px-3 py-1 bg-white text-indigo-700 text-xs rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
