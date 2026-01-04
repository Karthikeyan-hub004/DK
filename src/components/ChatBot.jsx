import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Chatbot.css";

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const API_URL = import.meta.env.VITE_API_URL||"https://dk2004.onrender.com";
            const res = await fetch(
                API_URL,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: userMsg.text })
                }
            );

            const data = await res.json();

            setMessages(prev => [
                ...prev,
                { role: "bot", text: data.reply }
            ]);
        } catch (err) {
            setMessages(prev => [
                ...prev,
                { role: "bot", text: "⚠️ Server error. Try again." }
            ]);
        }

        setLoading(false);
    };

    return (
        <>
            <button
                className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chatbot"
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {isOpen && (
                <div className="chatbot">
                    <div className="chat-header">
                        <span>✨️Career Assistant🎓 </span>
                    </div>

                    <div className="chat-body">
                        {messages.length === 0 && (
                            <div className="msg bot intro">
                                Hi! I can help you with career paths, roadmaps, and resources. Ask me anything!
                            </div>
                        )}
                        {messages.map((m, i) => (
                            <div key={i} className={`msg ${m.role}`}>
                                <ReactMarkdown>{m.text}</ReactMarkdown>
                            </div>
                        ))}
                        {loading && <div className="msg bot typing">Thinking...</div>}
                    </div>

                    <div className="chat-footer">
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Ask about your career..."
                            onKeyDown={e => e.key === "Enter" && sendMessage()}
                            autoFocus
                        />
                        <button onClick={sendMessage} disabled={loading || !input.trim()}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
