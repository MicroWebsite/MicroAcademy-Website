// app/components/Chatbot.tsx
"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const quickActions = [
  "📋 Our Services",
  "🎓 Freshers Drive",
  "📞 Contact Info",
  "💼 Career Openings",
];

const botResponses: Record<string, string> = {
  "📋 Our Services":
    "We offer Recruitment, Contract Hiring, Train & Hire, and Corporate Training services. Visit our Services page to learn more!",
  "🎓 Freshers Drive":
    "We regularly conduct Freshers Drives for new graduates. Check out our Freshers Drive page for the latest openings and registration details!",
  "📞 Contact Info":
    "📍 #189, Amar Jyothi Layout, Domlur Ring Road, Bangalore -71\n📞 +91 080-25358182 / 25359192\n📧 info@microacademy.net",
  "💼 Career Openings":
    "We have exciting career opportunities! Visit our Careers page to explore current openings and apply.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [mounted, setMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Client-only: set mounted flag and add the welcome message
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      setMessages([
        {
          id: "welcome",
          text: "Hi there! 👋 I'm MicroBot, your virtual assistant. How can I help you today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateBotResponse = useCallback((userMessage: string): string => {
    // Check quick actions first
    if (botResponses[userMessage]) {
      return botResponses[userMessage];
    }

    const lower = userMessage.toLowerCase();

    if (
      lower.includes("service") ||
      lower.includes("offer") ||
      lower.includes("what do you do")
    )
      return botResponses["📋 Our Services"];
    if (
      lower.includes("fresher") ||
      lower.includes("drive") ||
      lower.includes("graduate")
    )
      return botResponses["🎓 Freshers Drive"];
    if (
      lower.includes("contact") ||
      lower.includes("phone") ||
      lower.includes("email") ||
      lower.includes("address")
    )
      return botResponses["📞 Contact Info"];
    if (
      lower.includes("career") ||
      lower.includes("job") ||
      lower.includes("opening") ||
      lower.includes("hire")
    )
      return botResponses["💼 Career Openings"];
    if (
      lower.includes("hello") ||
      lower.includes("hi") ||
      lower.includes("hey")
    )
      return "Hello! 😊 Welcome to MicroAcademy. I'm here to help you with any questions about our services, careers, or freshers drives!";
    if (lower.includes("thank"))
      return "You're welcome! Is there anything else I can help you with? 😊";

    return "Thanks for your message! For detailed assistance, please visit our Contact page or call us at +91 080-25358182. I can also help you with info about our Services, Careers, or Freshers Drive!";
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        text: text.trim(),
        sender: "user",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsTyping(true);

      setTimeout(
        () => {
          const botReply: Message = {
            id: `bot-${Date.now()}`,
            text: generateBotResponse(text.trim()),
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, botReply]);
          setIsTyping(false);
        },
        800 + Math.random() * 700,
      );
    },
    [generateBotResponse],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      sendMessage(inputValue);
    },
    [inputValue, sendMessage],
  );

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Don't render anything on the server to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <>
      {/* ── Chat Window ── */}
      <div
        className={`fixed bottom-24 right-10 z-[9999] w-[370px] max-w-[calc(100vw-2.5rem)] transition-all duration-300 ease-out origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0 pointer-events-auto"
            : "scale-90 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-border bg-white h-[520px] max-h-[70vh]">
          {/* ── Header ── */}
          <div className="relative flex items-center gap-3 px-5 py-4 bg-linear-to-r from-primary to-primary-light">
            {/* Subtle pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, var(--color-secondary) 1px, transparent 1px), radial-gradient(circle at 80% 20%, var(--color-secondary) 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative z-10 flex items-center gap-3 flex-1">
              {/* Bot avatar */}
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-md ring-2 ring-white/20 text-primary">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 8V4H8" />
                  <rect x="4" y="8" width="16" height="12" rx="3" />
                  <circle
                    cx="9"
                    cy="14"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                  />
                  <circle
                    cx="15"
                    cy="14"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                  />
                  <path d="M9 18h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm tracking-wide">
                  MicroBot
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-chat-online animate-pulse" />
                  <span className="text-white/70 text-xs font-medium">
                    Online
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close chat"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* ── Messages Area ── */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg-cream-alt scroll-smooth"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "var(--color-border) transparent",
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex flex-col gap-1 max-w-[80%] ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.sender === "user"
                        ? "text-white rounded-2xl rounded-br-md shadow-sm bg-linear-to-br from-primary to-primary-light"
                        : "bg-white text-text-dark rounded-2xl rounded-bl-md shadow-sm border border-border-light"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-text-label px-1 font-medium">
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-border-light">
                  <div className="flex gap-1.5 items-center">
                    <span
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-primary-light rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-secondary rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Quick Actions ── */}
          {messages.length <= 1 && !isTyping && (
            <div className="px-4 py-3 bg-white border-t border-border-light">
              <p className="text-xs text-text-subtle font-semibold mb-2 uppercase tracking-wider">
                Quick Actions
              </p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => sendMessage(action)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full border border-border text-primary bg-bg-cream-alt hover:bg-secondary hover:border-secondary hover:text-text-badge transition-all duration-200 hover:shadow-sm"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Input Area ── */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3 bg-white border-t border-border-light"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 rounded-full bg-bg-cream border border-border text-sm text-text-dark placeholder-text-label-input outline-none focus:border-primary focus:ring-2 focus:ring-secondary/30 transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="w-10 h-10 flex items-center justify-center rounded-full text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md hover:shadow-lg disabled:shadow-none bg-linear-to-br from-primary to-primary-light"
              aria-label="Send message"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ── Floating Action Button ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-5 right-5 z-[9999] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 group ${
          isOpen
            ? "bg-bg-dark hover:bg-bg-dark-card-hover rotate-0"
            : "bg-linear-to-br from-primary to-primary-light"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        id="chatbot-toggle"
      >
        {/* Pulse ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-20" />
        )}

        {isOpen ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="9" cy="10" r="1" fill="white" stroke="none" />
            <circle cx="12" cy="10" r="1" fill="white" stroke="none" />
            <circle cx="15" cy="10" r="1" fill="white" stroke="none" />
          </svg>
        )}
      </button>

      {/* ── Greeting tooltip (shown briefly when button first appears) ── */}
      {!isOpen && (
        <div className="fixed bottom-20 right-5 z-[9998] animate-fade-in-up">
          <div className="bg-white rounded-xl shadow-lg border border-border px-4 py-2.5 text-sm text-text-dark font-medium max-w-[200px]">
            <p>Need help? Chat with us! 💬</p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-border rotate-45" />
          </div>
        </div>
      )}

      {/* Inline styles for the fade animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }
      `,
        }}
      />
    </>
  );
}
