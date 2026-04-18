import { botResponses } from "./data";

export function generateBotResponse(userMessage: string): string {
  if (botResponses[userMessage]) {
    return botResponses[userMessage];
  }

  const lower = userMessage.toLowerCase();

  if (
    lower.includes("service") ||
    lower.includes("offer") ||
    lower.includes("what do you do")
  ) {
    return botResponses["📋 Our Services"];
  }

  if (
    lower.includes("fresher") ||
    lower.includes("drive") ||
    lower.includes("graduate")
  ) {
    return botResponses["🎓 Freshers Drive"];
  }

  if (
    lower.includes("contact") ||
    lower.includes("phone") ||
    lower.includes("email") ||
    lower.includes("address")
  ) {
    return botResponses["📞 Contact Info"];
  }

  if (
    lower.includes("career") ||
    lower.includes("job") ||
    lower.includes("opening") ||
    lower.includes("hire")
  ) {
    return botResponses["💼 Career Openings"];
  }

  if (
    lower.includes("hello") ||
    lower.includes("hi") ||
    lower.includes("hey")
  ) {
    return "Hello! 😊 Welcome to MicroAcademy. I'm here to help you with any questions about our services, careers, or freshers drives!";
  }

  if (lower.includes("thank")) {
    return "You're welcome! Is there anything else I can help you with? 😊";
  }

  return "Thanks for your message! For detailed assistance, please visit our Contact page or call us at +91 080-25358182. I can also help you with info about our Services, Careers, or Freshers Drive!";
}
