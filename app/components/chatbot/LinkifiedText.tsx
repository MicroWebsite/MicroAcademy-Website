import React from "react";
import Link from "next/link";

interface LinkifiedTextProps {
  text: string;
}

const LINK_MAPPINGS: Record<string, string> = {
  "careers page": "/careers",
  "recruitment page": "/services/recruitment",
  "contract hiring page": "/services/contract-hiring",
  "freshers drive page": "/freshers-drive",
  "train and hire page": "/services/train-and-hire",
  "train & hire page": "/services/train-and-hire",
  "corporate training page": "/services/corporate-training",
  "corporate training": "/services/corporate-training",
  "contact page": "/contact",
  "about page": "/about",
  "careers and services pages": "/services",
  "job pages": "/services",
  "our services": "/services",
  "contact us": "/contact",
  "about us": "/about",
  "about microacademy": "/about",
  "freshers drive": "/freshers-drive",
  "direct careers": "/careers",
  "recruitment roles": "/services/recruitment",
  "contract positions": "/services/contract-hiring",
  careers: "/careers",
  recruitment: "/services/recruitment",
  "recruitment services": "/services/recruitment",
  "contract hiring": "/services/contract-hiring",
  "contract hiring services": "/services/contract-hiring",
  "contract to hire": "/services/contract-hiring",
  "contract to hire services": "/services/contract-hiring",
  "train and hire": "/services/train-and-hire",
  "train and hire services": "/services/train-and-hire",
  "train & hire": "/services/train-and-hire",
};

export default function LinkifiedText({ text }: LinkifiedTextProps) {
  // Regex for URLs and our specific labels
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // For the labels, we'll do a case-insensitive search
  // We want to sort them by length descending to match longer phrases first
  const labels = Object.keys(LINK_MAPPINGS).sort((a, b) => b.length - a.length);
  const labelRegexPart = labels
    .map((l) => l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const combinedRegex = new RegExp(
    `(${urlRegex.source})|(${labelRegexPart})`,
    "gi",
  );

  const parts = text.split(combinedRegex);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;

        // Check if part is a URL
        if (part.match(urlRegex)) {
          return (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold underline hover:text-primary-light transition-colors"
            >
              {part}
            </a>
          );
        }

        // Check if part matches a label
        const lowerPart = part.toLowerCase();
        if (LINK_MAPPINGS[lowerPart]) {
          return (
            <Link
              key={i}
              href={LINK_MAPPINGS[lowerPart]}
              className="text-primary font-bold underline hover:text-primary-light transition-colors"
            >
              {part}
            </Link>
          );
        }

        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
