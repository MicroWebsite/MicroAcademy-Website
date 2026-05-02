import { botResponses } from "./data";
import { StrapiData } from "@/app/types/chatbot";
import { JobPosition, FresherDrive } from "@/app/types/drupal";

function matchesAny(text: string, keywords: string[]): boolean {
  return keywords.some((kw) => text.includes(kw));
}

function matchesWord(text: string, keyword: string): boolean {
  if (keyword.length <= 3) {
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`\\b${escaped}\\b`, "i").test(text);
  }
  return text.includes(keyword);
}

function formatJobList(
  jobs: JobPosition[],
  label: string,
  limit = 5,
  footer?: string,
): string {
  if (jobs.length === 0) return "";

  const lines = jobs
    .slice(0, limit)
    .map(
      (j) =>
        `• ${j.title} — ${j.location}${j.experience ? ` (${j.experience})` : ""}`,
    );

  let result = `Here are our current ${label}:\n\n${lines.join("\n")}`;

  if (jobs.length > limit) {
    result += `\n\n...and ${jobs.length - limit} more!`;
  }

  if (footer) {
    result += `\n\n${footer}`;
  }
  return result;
}

function formatDriveList(drives: FresherDrive[], limit = 5): string {
  if (drives.length === 0) return "";

  const lines = drives
    .slice(0, limit)
    .map(
      (d) =>
        `• ${d.title} — ${d.domain || "Multiple Domains"} | 📍 ${d.location || "Multiple Locations"}`,
    );

  let result = `🎓 Current Freshers Drives:\n\n${lines.join("\n")}`;

  if (drives.length > limit) {
    result += `\n\n...and ${drives.length - limit} more!`;
  }

  result += `\n\nVisit our Freshers Drive page for eligibility and registration details!`;
  return result;
}

function searchJobs(query: string, jobs: JobPosition[]): JobPosition[] {
  const isShort = query.length <= 3;
  const regex = isShort
    ? new RegExp(`\\b${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i")
    : null;

  return jobs.filter((j) => {
    const textToSearch =
      `${j.title} ${j.location} ${j.experience || ""} ${j.education}`.toLowerCase();
    if (isShort && regex) {
      return regex.test(textToSearch);
    }
    return textToSearch.includes(query.toLowerCase());
  });
}

function getAllJobs(data: StrapiData): JobPosition[] {
  return [...data.careers, ...data.recruitment, ...data.contractHiring];
}

const greetingKeywords = [
  "hello",
  "hi",
  "Hlo",
  "hey",
  "good morning",
  "good afternoon",
  "good evening",
  "howdy",
  "hola",
  "namaste",
  "sup",
  "what's up",
  "whats up",
  "yo",
  "greetings",
];

const thankKeywords = [
  "thank",
  "thanks",
  "thankyou",
  "thank you",
  "thx",
  "appreciate",
  "grateful",
  "cheers",
];

const goodbyeKeywords = [
  "bye",
  "goodbye",
  "good bye",
  "see you",
  "take care",
  "cya",
  "later",
  "good night",
  "goodnight",
];

const serviceKeywords = [
  "service",
  "services",
  "offer",
  "offering",
  "what do you do",
  "what does micro",
  "what you do",
  "capabilities",
  "solutions",
  "provide",
];

const recruitmentKeywords = [
  "recruitment",
  "recruiting",
  "headhunt",
  "staffing",
  "talent acquisition",
  "hire for us",
  "find candidate",
  "find talent",
];

const contractKeywords = [
  "contract",
  "contracting",
  "contract to hire",
  "contract hiring",
  "temporary",
  "temp job",
  "temp role",
  "freelance",
  "project based",
  "project-based",
  "short term",
  "short-term",
];

const trainHireKeywords = [
  "train and hire",
  "train & hire",
  "train to hire",
  "train-and-hire",
  "training and hiring",
  "train hire",
  "freshers training",
  "graduate training",
  "campus hire",
  "batch hiring",
];

const corporateTrainingKeywords = [
  "corporate training",
  "training program",
  "upskill",
  "reskill",
  "skill development",
  "employee training",
  "workshop",
  "certification",
  "learning program",
  "instructor",
  "curriculum",
];

const fresherKeywords = [
  "fresher",
  "freshers",
  "fresher drive",
  "freshers drive",
  "fresh graduate",
  "new graduate",
  "campus drive",
  "campus placement",
  "campus recruitment",
  "entry level",
  "entry-level",
  "graduate job",
  "first job",
  "placement drive",
  "walk-in",
  "walkin",
  "walk in",
];

const careerKeywords = [
  "career",
  "careers",
  "job",
  "jobs",
  "opening",
  "openings",
  "vacancy",
  "vacancies",
  "position",
  "positions",
  "opportunity",
  "opportunities",
  "work",
  "employment",
  "role",
  "roles",
  "joining",
  "join",
  "apply",
  "application",
  "resume",
  "cv",
];

const contactKeywords = [
  "contact",
  "phone",
  "email",
  "address",
  "call",
  "reach",
  "location",
  "office",
  "where are you",
  "where is",
  "how to reach",
  "get in touch",
  "connect",
  "enquiry",
  "inquiry",
  "mail",
  "number",
  "telephone",
  "mobile",
];

const aboutKeywords = [
  "about",
  "about us",
  "who are you",
  "who is micro",
  "what is micro",
  "company",
  "organization",
  "organisation",
  "founded",
  "established",
  "history",
  "background",
  "since when",
  "how old",
  "how long",
  "years",
];

const missionKeywords = [
  "mission",
  "vision",
  "values",
  "goal",
  "purpose",
  "motto",
  "philosophy",
  "belief",
  "objective",
  "culture",
];

const locationCityKeywords = [
  "bangalore",
  "bengaluru",
  "chennai",
  "hyderabad",
  "mumbai",
  "pune",
  "delhi",
  "noida",
  "gurgaon",
  "kolkata",
  "remote",
  "work from home",
  "wfh",
];

const techSkillKeywords = [
  "java",
  "python",
  "javascript",
  "react",
  "angular",
  "node",
  "nodejs",
  "dotnet",
  ".net",
  "c#",
  "devops",
  "cloud",
  "aws",
  "azure",
  "gcp",
  "sql",
  "database",
  "testing",
  "qa",
  "automation",
  "selenium",
  "manual testing",
  "frontend",
  "backend",
  "full stack",
  "fullstack",
  "full-stack",
  "data engineer",
  "data analyst",
  "data science",
  "machine learning",
  "ml",
  "ai",
  "artificial intelligence",
  "cyber",
  "security",
  "cybersecurity",
  "sap",
  "salesforce",
  "servicenow",
  "linux",
  "windows",
  "exchange",
  "active directory",
  "service desk",
  "helpdesk",
  "support",
  "hr",
  "human resource",
  "recruiter",
  "android",
  "ios",
  "mobile",
  "flutter",
  "docker",
  "kubernetes",
  "terraform",
  "jenkins",
  "ci/cd",
  "agile",
  "scrum",
  "project manager",
  "product manager",
];

const experienceKeywords = [
  "experience",
  "experienced",
  "senior",
  "junior",
  "lead",
  "manager",
  "architect",
  "intern",
  "internship",
  "trainee",
  "years of experience",
  "yoe",
  "mid level",
  "mid-level",
  "entry level",
  "entry-level",
];

const salaryKeywords = [
  "salary",
  "package",
  "ctc",
  "compensation",
  "pay",
  "stipend",
  "remuneration",
  "lpa",
];

const applyKeywords = [
  "how to apply",
  "apply",
  "application",
  "submit resume",
  "send resume",
  "send cv",
  "apply online",
  "registration",
  "register",
  "sign up",
  "enroll",
  "enrol",
];

const eligibilityKeywords = [
  "eligibility",
  "eligible",
  "qualification",
  "requirement",
  "criteria",
  "prerequisite",
  "education",
  "degree",
  "btech",
  "b.tech",
  "be",
  "b.e",
  "mca",
  "mba",
  "bsc",
  "b.sc",
  "graduate",
  "post graduate",
  "postgraduate",
  "diploma",
  "aggregate",
  "percentage",
  "cgpa",
  "backlog",
  "gap",
];

const whyJoinKeywords = [
  "why join",
  "why micro",
  "why work",
  "benefit",
  "benefits",
  "perks",
  "advantage",
  "why should i",
  "what makes you different",
  "growth",
  "career growth",
];

export function generateBotResponse(
  userMessage: string,
  strapiData?: StrapiData,
): string {
  if (botResponses[userMessage]) {
    return botResponses[userMessage];
  }
  const lower = userMessage.toLowerCase().trim();
  if (
    greetingKeywords.some((kw) => matchesWord(lower, kw)) &&
    lower.length < 30
  ) {
    return "Hello! 😊 Welcome to MicroAcademy. I can help you with:\n\n• Current job openings & careers\n• Freshers drives & eligibility\n• Our services (Recruitment, Training, etc.)\n• Contact information\n\nJust ask away!";
  }
  if (matchesAny(lower, thankKeywords)) {
    return "You're welcome! 😊 Is there anything else I can help you with?";
  }
  if (matchesAny(lower, goodbyeKeywords) && lower.length < 30) {
    return "Goodbye! 👋 Thanks for chatting with MicroBot. Feel free to come back anytime. Have a great day!";
  }
  if (strapiData?.isLoaded) {
    const matchedSkill = techSkillKeywords.find((kw) => matchesWord(lower, kw));

    if (
      matchedSkill &&
      (matchesAny(lower, careerKeywords) ||
        matchesAny(lower, [
          "any",
          "looking",
          "available",
          "have",
          "open",
          "find",
          "search",
          "show",
        ]))
    ) {
      const allJobs = getAllJobs(strapiData);
      const matches = searchJobs(matchedSkill, allJobs);

      if (matches.length > 0) {
        return formatJobList(
          matches,
          `"${matchedSkill}" related openings`,
          5,
          "🔗 Visit our Careers and Services pages for full details!",
        );
      }

      return `We don't have any "${matchedSkill}" specific openings right now. 😔\n\nBut we frequently update our positions! You can check our specific job pages:\n• Careers Page (Direct Roles)\n• Recruitment Page\n• Contract Hiring Page\n• Freshers Drive Page\n\nOr send your resume to info@microacademy.net! 📧`;
    }
  }

  if (matchesAny(lower, fresherKeywords)) {
    if (strapiData?.isLoaded && strapiData.fresherDrives.length > 0) {
      return formatDriveList(strapiData.fresherDrives);
    }

    if (strapiData?.isLoaded && strapiData.fresherDrives.length === 0) {
      return "There are no freshers drives scheduled right now. 📋\n\nBut we conduct drives regularly! Keep checking our Freshers Drive page or contact us at info@microacademy.net to stay updated.";
    }

    return botResponses["🎓 Freshers Drive"];
  }

  if (matchesAny(lower, careerKeywords)) {
    if (strapiData?.isLoaded) {
      const parts: string[] = [];

      if (strapiData.careers.length > 0) {
        parts.push(
          formatJobList(
            strapiData.careers,
            "career openings",
            5,
            "🔗 Visit our Careers page for more details.",
          ),
        );
      }

      if (strapiData.recruitment.length > 0) {
        parts.push(
          formatJobList(
            strapiData.recruitment,
            "recruitment positions",
            5,
            "🔗 Visit our Recruitment page for more details.",
          ),
        );
      }

      if (strapiData.contractHiring.length > 0) {
        parts.push(
          formatJobList(
            strapiData.contractHiring,
            "contract positions",
            5,
            "🔗 Visit our Contract Hiring page for more details.",
          ),
        );
      }

      if (parts.length > 0) {
        return parts.join("\n\n────────────────\n\n");
      }

      return "No open positions at the moment. 😔\n\nBut we're always looking for great talent! You can check our job pages (Careers, Recruitment, Contract Hiring, or Freshers Drive) for the latest updates, or send your resume to info@microacademy.net!";
    }

    return botResponses["💼 Career Openings"];
  }

  if (strapiData?.isLoaded) {
    const matchedCity = locationCityKeywords.find((kw) => lower.includes(kw));

    if (
      matchedCity &&
      (matchesAny(lower, careerKeywords) ||
        matchesAny(lower, [
          "any",
          "available",
          "open",
          "in",
          "at",
          "near",
          "show",
          "find",
          "search",
        ]))
    ) {
      const allJobs = getAllJobs(strapiData);
      const matches = searchJobs(matchedCity, allJobs);

      if (matches.length > 0) {
        return formatJobList(matches, `openings in ${matchedCity}`);
      }
      const cityDrives = strapiData.fresherDrives.filter((d) =>
        d.location.toLowerCase().includes(matchedCity),
      );

      if (cityDrives.length > 0) {
        return `No job openings in ${matchedCity} right now, but we have freshers drives there!\n\n${formatDriveList(cityDrives)}`;
      }

      return `No current openings in ${matchedCity}. 😔\n\nYou can check for roles in other locations on our Careers, Recruitment, or Contract Hiring pages. Or send your resume to info@microacademy.net and we'll notify you!`;
    }
  }

  if (matchesAny(lower, experienceKeywords) && strapiData?.isLoaded) {
    const allJobs = getAllJobs(strapiData);

    if (
      lower.includes("fresher") ||
      lower.includes("entry") ||
      lower.includes("intern") ||
      lower.includes("trainee")
    ) {
      if (strapiData.fresherDrives.length > 0) {
        return `Great news for freshers! 🎓\n\n${formatDriveList(strapiData.fresherDrives)}\n\nAlso check our Careers page for entry-level positions.`;
      }
      return "For freshers, we regularly conduct Freshers Drives with training + placement. Check our Freshers Drive page for upcoming drives!";
    }

    if (allJobs.length > 0) {
      const experienced = allJobs.filter(
        (j) =>
          j.experience &&
          !j.experience.toLowerCase().includes("0") &&
          !j.experience.toLowerCase().includes("fresher"),
      );

      if (experienced.length > 0) {
        return formatJobList(
          experienced,
          "positions for experienced professionals",
        );
      }
    }

    return "We have opportunities across all experience levels. Check our Careers and Recruitment pages for current openings!";
  }
  if (matchesAny(lower, recruitmentKeywords)) {
    let response =
      "🎯 Our Recruitment Services:\n\nWith a strong technical team and 30+ years of experience, we specialize in:\n\n• Strategic headhunting for mid to senior-level roles\n• Contractual hiring for project-based needs\n• Full lifecycle recruitment support\n\nWe find the candidate best suited for your organization and job role.";

    if (strapiData?.isLoaded && strapiData.recruitment.length > 0) {
      response += `\n\n📋 Current recruitment openings:\n\n`;
      response += strapiData.recruitment
        .slice(0, 4)
        .map((j) => `• ${j.title} — ${j.location}`)
        .join("\n");

      if (strapiData.recruitment.length > 4) {
        response += `\n\n...and ${strapiData.recruitment.length - 4} more!`;
      }
      response += `\n\nVisit our Recruitment page for full details and to apply!`;
    }

    return response;
  }
  if (matchesAny(lower, contractKeywords)) {
    let response =
      "📝 Contract to Hire:\n\nMicroAcademy sources candidates who join on our payroll for the contract period. The client can directly hire the resource during or after the contract.\n\n✅ Benefits:\n• Rapid deployment (48-72 hours)\n• Zero long-term commitment\n• We handle payroll & compliance\n• Access niche expertise on demand";

    if (strapiData?.isLoaded && strapiData.contractHiring.length > 0) {
      response += `\n\n📋 Current contract positions:\n\n`;
      response += strapiData.contractHiring
        .slice(0, 4)
        .map((j) => `• ${j.title} — ${j.location}`)
        .join("\n");

      if (strapiData.contractHiring.length > 4) {
        response += `\n\n...and ${strapiData.contractHiring.length - 4} more!`;
      }
      response += `\n\nVisit our Contract Hiring page to see all available roles!`;
    } else if (strapiData?.isLoaded) {
      response += `\n\n(No active contract openings at the moment, but you can visit our Contract Hiring page for future updates!)`;
    }

    return response;
  }
  if (matchesAny(lower, trainHireKeywords)) {
    return "🎓 Train and Hire Services:\n\nWe bridge the gap between raw talent and enterprise-ready professionals:\n\n1️⃣ Precision Selection — Rigorous assessments, top 5% candidates\n2️⃣ Customized Training — Tailored to your tech stack & culture\n3️⃣ Seamless Hiring — Friction-less transition with full onboarding support\n\n✅ Benefits:\n• Zero hiring risk\n• Industry-ready talent from day one\n• Scalable — 5 to 500 professionals\n• 60% faster onboarding\n\nVisit our Train & Hire page or contact us to get started!";
  }
  if (matchesAny(lower, corporateTrainingKeywords)) {
    return "🏫 Corporate Training:\n\nWith 2+ decades of IT training expertise, we offer:\n\n• Wide range of technology domains\n• Experienced instructors with rich domain knowledge\n• Customized training programs\n• ISO-certified methodology\n• Measurable skill elevation\n\n📊 3500+ trainings delivered | 25000+ people trained\n\nContact us to customize a training program for your team!";
  }
  if (matchesAny(lower, serviceKeywords)) {
    return botResponses["📋 Our Services"];
  }

  if (strapiData?.isLoaded) {
    const matchedSkill = techSkillKeywords.find((kw) => matchesWord(lower, kw));

    if (matchedSkill && lower.length < 50) {
      const allJobs = getAllJobs(strapiData);
      const matches = searchJobs(matchedSkill, allJobs);

      if (matches.length > 0) {
        return formatJobList(matches, `"${matchedSkill}" related openings`);
      }

      return `We don't have "${matchedSkill}" specific openings right now, but we frequently update our positions.\n\nSend your resume to info@microacademy.net and we'll match you when something opens up! 📧`;
    }
  }

  if (matchesAny(lower, contactKeywords)) {
    return botResponses["📞 Contact Info"];
  }
  if (matchesAny(lower, aboutKeywords)) {
    return botResponses["🏢 About Us"];
  }
  if (matchesAny(lower, missionKeywords)) {
    return "🎯 Our Core Beliefs:\n\n🚀 Mission: To empower global organizations by curating a legacy of elite, future-ready digital talent.\n\n👁️ Vision: To be the definitive global standard for workforce intelligence and strategic transformation.\n\n✨ Values: Integrity in insight, precision in execution, and a relentless pursuit of human potential.";
  }
  if (matchesAny(lower, applyKeywords)) {
    return botResponses["📄 How to Apply"];
  }
  if (matchesAny(lower, eligibilityKeywords)) {
    if (strapiData?.isLoaded && strapiData.fresherDrives.length > 0) {
      const drive = strapiData.fresherDrives[0];
      let response =
        "📋 Eligibility typically varies by role. Here's a sample from our latest fresher drive:\n\n";
      if (drive.degree_requirement)
        response += `🎓 Degree: ${drive.degree_requirement}\n`;
      if (drive.minimum_aggregate)
        response += `📊 Min Aggregate: ${drive.minimum_aggregate}\n`;
      if (drive.education_gap)
        response += `📅 Education Gap: ${drive.education_gap}\n`;
      if (drive.academic_year)
        response += `🗓️ Academic Year: ${drive.academic_year}\n`;
      response += `\nFor specific role requirements, visit the relevant job listing page or ask me about a specific position!`;
      return response;
    }

    return "📋 Eligibility varies by role:\n\n• Freshers Drives: Typically BE/BTech/MCA with min aggregate\n• Career Roles: Relevant degree + experience\n• Contract Roles: Specific tech expertise required\n\nVisit our job listings for detailed requirements, or ask me about a specific role!";
  }
  if (matchesAny(lower, salaryKeywords)) {
    if (strapiData?.isLoaded && strapiData.fresherDrives.length > 0) {
      const drivesWithSalary = strapiData.fresherDrives.filter((d) => d.salary);

      if (drivesWithSalary.length > 0) {
        const lines = drivesWithSalary
          .slice(0, 3)
          .map((d) => `• ${d.title}: ${d.salary}`);
        return `💰 Here are packages from our current fresher drives:\n\n${lines.join("\n")}\n\nFor specific role packages, please contact us at info@microacademy.net or call +91 080-25358182.`;
      }
    }

    return "💰 Compensation varies based on role, experience, and skill level.\n\nFor specific salary details:\n📧 Email: info@microacademy.net\n📞 Call: +91 080-25358182\n\nOr apply to a specific position and our team will share the details!";
  }
  if (matchesAny(lower, whyJoinKeywords)) {
    return "🌟 Why Join MicroAcademy?\n\n📈 Professional Growth — Continuous learning paths for leadership mastery\n🏥 Premium Benefits — Healthcare, performance bonuses & wellness programs\n🌍 Global Impact — Projects influencing global markets across industries\n🏢 30+ Years Legacy — Established in 1994, pioneering in IT workforce\n📊 Proven Track Record — 25000+ professionals trained, 30+ global clients\n\nJoin us and be part of something bigger!";
  }
  return 'I\'m not sure I understood that. 🤔 Here\'s what I can help with:\n\n• 💼 Job openings & careers\n• 🎓 Freshers drives\n• 📋 Our services\n• 📞 Contact information\n• 🏢 About MicroAcademy\n\nTry asking something like "Show me job openings" or "Any React developer roles?"';
}
