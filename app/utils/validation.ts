export const validateEmail = (email: string): string | null => {
  if (!email) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Invalid email format";
  return null;
};

export const validatePhone = (phone: string): string | null => {
  if (!phone) return "Phone number is required";
  // Remove formatting characters: spaces, hyphens, parentheses, and dots
  const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, "");
  // Validate basic length (7-15 digits) with optional leading plus
  const phoneRegex = /^\+?[0-9]{7,15}$/;
  if (!phoneRegex.test(cleanPhone)) return "Invalid phone number format";
  return null;
};

export const validateRequired = (
  value: string,
  fieldName: string,
): string | null => {
  if (!value || value.trim() === "") return `${fieldName} is required`;
  return null;
};

export const validateFile = (
  file: File | null,
  fieldName: string,
): string | null => {
  if (!file) return `${fieldName} is required`;
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  if (!allowedTypes.includes(file.type))
    return "Only PDF and DOC/DOCX files are allowed";
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) return "File size should be less than 5MB";
  return null;
};
