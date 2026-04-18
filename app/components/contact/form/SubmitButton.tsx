import { ContactSubmitStatus } from "@/app/types/contactForm";

type SubmitButtonProps = {
  status: ContactSubmitStatus;
};

export default function SubmitButton({ status }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={status === "loading"}
      className="self-start inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-btn-primary text-white text-sm font-semibold hover:bg-btn-primary-hover active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer"
    >
      {status === "loading" ? (
        <>
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </button>
  );
}
