type ChatToggleButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function ChatToggleButton({
  isOpen,
  onToggle,
}: ChatToggleButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-5 right-5 z-9999 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 group ${
        isOpen
          ? "bg-bg-dark hover:bg-bg-dark-card-hover rotate-0"
          : "bg-primary bg-linear-to-br from-primary to-primary-light"
      }`}
      aria-label={isOpen ? "Close chat" : "Open chat"}
      id="chatbot-toggle"
    >
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
  );
}
