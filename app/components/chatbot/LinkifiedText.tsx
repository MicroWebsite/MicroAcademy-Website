import React from "react";
import Link from "next/link";

interface LinkifiedTextProps {
  text: string;
}

function renderTextWithBold(text: string, keyPrefix: string | number) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      const boldText = part.slice(2, -2);
      return (
        <strong key={`${keyPrefix}-${idx}`} className="font-bold">
          {boldText}
        </strong>
      );
    }
    return <span key={`${keyPrefix}-${idx}`}>{part}</span>;
  });
}

const LINK_MAPPINGS: Record<string, string> = {
  "direct/lateral hiring page": "/services/direct-lateral-hiring",
  "direct-lateral hiring page": "/services/direct-lateral-hiring",
  "direct/lateral hiring service page": "/services/direct-lateral-hiring",
  "direct-lateral hiring service page": "/services/direct-lateral-hiring",
  "contract hiring page": "/services/contract-hiring",
  "contract hiring service page": "/services/contract-hiring",
  "recruitment page": "/job-openings/recruitments",
  "recruitments page": "/job-openings/recruitments",
  recruitments: "/job-openings/recruitments",
  "freshers drive page": "/job-openings/freshers-drive",
  "freshers drive": "/job-openings/freshers-drive",
  "train and hire page": "/services/train-and-hire",
  "train & hire page": "/services/train-and-hire",
  "corporate training page": "/services/corporate-training",
  "contact page": "/contact",
  "about page": "/about",
  "job openings page": "/job-openings",
  "job openings": "/job-openings",
  "job pages": "/job-openings",
  "our services": "/services",
  "contact us": "/contact",
  "about us": "/about",
  "train and hire": "/services/train-and-hire",
  "train & hire": "/services/train-and-hire",
  "direct/lateral hiring": "/services/direct-lateral-hiring",
  "direct-lateral hiring": "/services/direct-lateral-hiring",
  "recruitment services": "/services/direct-lateral-hiring",
  "contract to hire": "/services/contract-hiring",
  "corporate training": "/services/corporate-training",
};

export default function LinkifiedText({ text }: LinkifiedTextProps) {
  const labels = Object.keys(LINK_MAPPINGS).sort((a, b) => b.length - a.length);
  const labelRegexPart = labels
    .map((l) => l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

  const combinedRegex = new RegExp(
    `((?:(?:visit|go to|check out|view|our|the|click|see|on|this)\\s+)+)(${labelRegexPart})`,
    "gi",
  );
  const parts = text.split(combinedRegex);

  const elements = [];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === undefined) continue;
    if (i % 3 === 0) {
      if (part) {
        elements.push(<span key={i}>{renderTextWithBold(part, i)}</span>);
      }
    } else if (i % 3 === 1) {
      const prefix = part || "";
      const keyword = parts[i + 1] || "";

      if (keyword) {
        const lowerKeyword = keyword.toLowerCase();
        const href = LINK_MAPPINGS[lowerKeyword];

        if (href) {
          elements.push(
            <Link
              key={i}
              href={href}
              className="text-primary font-bold underline hover:text-primary-light transition-colors"
            >
              {prefix}
              {keyword}
            </Link>,
          );
        } else {
          elements.push(
            <span key={i}>
              {prefix}
              {keyword}
            </span>,
          );
        }
        i++;
      }
    }
  }

  return <>{elements}</>;
}
