export const crt = (html: string) => {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const extract = (patterns: RegExp[], fallback: string) => {
    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[0]) {
        let result = match[0].trim();
        result = result.replace(/[.,]$/, "");
        return result;
      }
    }
    return fallback;
  };

  return {
    academicYear: extract(
      [
        /\d{4}(?:, \d{4})*(?: and \d{4})? batch/i,
        /20\d{2}\s*batch/i,
        /20\d{2}/,
      ],
      "Refer to description",
    ),
    degreeRequirement: extract(
      [
        /(?:BE\/B\.Tech|MCA|MS|M\.Sc|B\.Sc|UG|PG)[^.,]*/i,
        /Graduation|Post Graduation/i,
      ],
      "As per job specification",
    ),
    minimumAggregate: extract(
      [
        /\d+%\s*(?:&|and)\s*above[^.,]*/i,
        /\d+%\s*in[^.,]*/i,
        /Minimum aggregate of \d+%/i,
      ],
      "60% & above (UG/PG)",
    ),
    educationGap: extract(
      [/[^.,]*year gap[^.,]*/i, /No standing arrears/i],
      "Not specified",
    ),
    coreCompetency: extract(
      [
        /[^.,]*communication skills[^.,]*/i,
        /(?:CSE|IT|ECE|EEE|Mechanical|Instrumentation|Civil|circuit branches)[^.]*/i,
      ],
      "As per job role",
    ),
    flexibility: extract(
      [
        /[^.,]*work in 24\/7 shifts[^.,]*/i,
        /[^.,]*relocate[^.,]*/i,
        /Flexible to[^.,]*/i,
      ],
      "Willing to relocate",
    ),
  };
};
