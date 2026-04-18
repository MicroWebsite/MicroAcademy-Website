/**
 * Criteria Restructure & Transform (crt) helper
 * Parses Drupal's HTML eligibility string into structured criteria for the UI boxes.
 */
export const crt = (html: string) => {
  // Strip HTML tags for processing
  const text = html.replace(/<[^>]*>/g, " ").trim();

  // Helper to extract by patterns
  const extract = (patterns: RegExp[], fallback: string) => {
    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[0]) return match[0].trim();
    }
    return fallback;
  };

  return {
    academicYear: extract(
      [/\d{4}(?:, \d{4})*(?: and \d{4})? batch/, /20\d{2}/],
      "Refer to description",
    ),
    degreeRequirement: extract(
      [
        /(?:BE\/B\.Tech|MCA|MS|M\.Sc|B\.Sc|UG|PG)[^.]*/i,
        /Graduation|Post Graduation/i,
      ],
      "As per job specification",
    ),
    minimumAggregate: extract(
      [/\d+%[^.]*/, /Minimum aggregate of \d+%/i],
      "60% & above (UG/PG)",
    ),
    educationGap: extract(
      [/[^.]*year gap[^.]*/i, /No standing arrears/i],
      "Not specified",
    ),
    coreCompetency: extract(
      [/[^.]*communication skills[^.]*/i, /[^.]*circuit branches[^.]*/i],
      "As per job role",
    ),
    flexibility: extract(
      [
        /[^.]*work in 24\/7 shifts[^.]*/i,
        /[^.]*relocate[^.]*/i,
        /Flexible[^.]*/i,
      ],
      "Willing to relocate",
    ),
  };
};
