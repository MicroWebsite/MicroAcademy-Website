export default function GreetingTooltip() {
  return (
    <div className="fixed bottom-20 right-5 z-[9998] animate-fade-in-up hidden sm:block">
      <div className="bg-white rounded-xl shadow-lg border border-border px-4 py-2.5 text-sm text-text-dark font-medium max-w-[200px]">
        <p>Need help? Chat with us! 💬</p>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-border rotate-45" />
      </div>
    </div>
  );
}
