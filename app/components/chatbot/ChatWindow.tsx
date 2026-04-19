import { FormEvent, RefObject } from "react";
import { quickActions } from "./data";
import { ChatMessage } from "@/app/types/chatbot";

type ChatWindowProps = {
  isOpen: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  inputValue: string;
  inputRef: RefObject<HTMLInputElement | null>;
  messagesEndRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
  onInputChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
  onQuickAction: (action: string) => void;
};

const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export default function ChatWindow({
  isOpen,
  messages,
  isTyping,
  inputValue,
  inputRef,
  messagesEndRef,
  onClose,
  onInputChange,
  onSubmit,
  onQuickAction,
}: ChatWindowProps) {
  return (
    <div
      className={`fixed bottom-20 right-5 md:bottom-24 md:right-10 z-[9999] w-[370px] max-w-[calc(100vw-2.5rem)] transition-all duration-300 ease-out origin-bottom-right ${
        isOpen
          ? "scale-100 opacity-100 translate-y-0 pointer-events-auto"
          : "scale-90 opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-border bg-white h-[520px] max-h-[70vh]">
        <div className="relative flex items-center gap-3 px-5 py-4 bg-linear-to-r from-primary to-primary-light">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, var(--color-secondary) 1px, transparent 1px), radial-gradient(circle at 80% 20%, var(--color-secondary) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative z-10 flex items-center gap-3 flex-1">
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
            onClick={onClose}
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

        {messages.length <= 1 && !isTyping && (
          <div className="px-4 py-3 bg-white border-t border-border-light">
            <p className="text-xs text-text-subtle font-semibold mb-2 uppercase tracking-wider">
              Quick Actions
            </p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <button
                  key={action}
                  onClick={() => onQuickAction(action)}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full border border-border text-primary bg-bg-cream-alt hover:bg-secondary hover:border-secondary hover:text-text-badge transition-all duration-200 hover:shadow-sm"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="flex items-center gap-2 px-4 py-3 bg-white border-t border-border-light"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
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
  );
}
