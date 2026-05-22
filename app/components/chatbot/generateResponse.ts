import { botResponses } from "./data";
import { StrapiData } from "@/app/types/chatbot";
import { JobPosition, FresherDrive } from "@/app/types/drupal";

// Enriched Static Data Imports
import { clientsData } from "@/app/data/clientsData";
import { countriesData } from "@/app/data/countriesData";
import { timelineMilestones } from "@/app/data/timelineMilestones";
import { keyAchievementsData } from "@/app/data/keyAchievementsData";
import { microAdvantageData } from "@/app/data/microAdvantageData";

// Helper to find a fresher drive in the user query
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

// Helper to find a fresher drive in the user query
function findMatchedDrive(
  query: string,
  drives: FresherDrive[],
): FresherDrive | null {
  if (drives.length === 0) return null;

  // 1. Keyword match in title, designation, or domain
  for (const drive of drives) {
    const title = drive.title.toLowerCase();
    const designation = (drive.designation || "").toLowerCase();
    const domain = (drive.domain || "").toLowerCase();

    const titleWords = title.split(/\s+/).filter((w) => w.length > 3);
    const hasWordMatch = titleWords.some((word) => query.includes(word));

    if (
      (domain && query.includes(domain)) ||
      (designation && query.includes(designation)) ||
      hasWordMatch ||
      query.includes(title)
    ) {
      return drive;
    }
  }

  // 2. Fallback: if there is only 1 drive, and query asks for specific drive fields and is not generic
  if (
    drives.length === 1 &&
    matchesAny(query, [
      "venue",
      "landmark",
      "selection",
      "process",
      "contact",
      "notes",
      "criteria",
      "academic",
      "aggregate",
      "gap",
    ]) &&
    !matchesAny(query, ["openings", "careers", "jobs", "vacancies"])
  ) {
    return drives[0];
  }

  return null;
}

// Helper to find a job position in the user query
function findMatchedJob(
  query: string,
  jobs: JobPosition[],
): JobPosition | null {
  if (jobs.length === 0) return null;

  // If the query is generic, do not match a specific job
  if (matchesAny(query, ["openings", "careers", "jobs", "vacancies"])) {
    return null;
  }

  for (const job of jobs) {
    const title = job.title.toLowerCase();
    const jobId = (job.job_id || job.jobId || "").toLowerCase();

    if (jobId && query.includes(jobId)) {
      return job;
    }
    if (query.includes(title)) {
      return job;
    }

    const titleWords = title
      .split(/\s+/)
      .filter(
        (w) =>
          w.length > 3 &&
          w !== "developer" &&
          w !== "engineer" &&
          w !== "lead" &&
          w !== "manager" &&
          w !== "analyst",
      );
    if (
      titleWords.length > 0 &&
      titleWords.some((word) => query.includes(word))
    ) {
      return job;
    }
  }
  return null;
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
  return [...data.careers, ...data.directLateralHiring, ...data.contractHiring];
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

const directLateralHiringKeywords = [
  "recruitment",
  "recruiting",
  "headhunt",
  "staffing",
  "talent acquisition",
  "hire for us",
  "find candidate",
  "find talent",
  "direct-lateral hiring",
  "lateral hiring",
  "direct hiring",
  "direct lateral hiring",
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

const careerSpecificKeywords = ["career", "careers"];

const genericJobKeywords = [
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

const clientKeywords = [
  "client",
  "clients",
  "partner",
  "partners",
  "customer",
  "customers",
  "companies you work with",
  "work with",
  "who are your clients",
  "which companies",
  "company list",
];

const globalKeywords = [
  "global",
  "countries",
  "operate",
  "presence",
  "locations",
  "geography",
  "international",
  "regions",
  "world",
  "map",
  "where are you located",
  "where do you operate",
];

const milestoneKeywords = [
  "milestones",
  "timeline",
  "history",
  "founded",
  "genesis",
  "established",
  "years",
  "how long have you",
  "when was micro",
  "thirty-year",
  "30 years",
];

const achievementKeywords = [
  "achievements",
  "key achievements",
  "diversity",
  "captive",
  "ramp up",
  "ramp-up",
  "scale",
];

const microAdvantageKeywords = [
  "micro advantage",
  "value add",
  "advantage",
  "why should we choose",
  "why choose micro",
  "lms",
  "learning management system",
  "guidance",
  "lab support",
  "technical lab",
  "sme",
];

const trainHireStepsKeywords = [
  "train and hire step",
  "train & hire step",
  "hiring step",
  "hiring steps",
  "train and hire process",
  "train & hire process",
  "sourcing",
  "pre-selection",
  "placement step",
];

const lmsKeywords = [
  "lms feature",
  "lms features",
  "learning management system feature",
  "individual reports",
  "assignments",
  "capstone",
  "milestone assessment",
  "session scheduling",
];

const contractProcessKeywords = [
  "contract hiring benefit",
  "contract hiring process",
  "contract hiring step",
  "contract process",
  "contract step",
  "contracting process",
  "profile sourcing",
  "curation",
  "client interview",
  "rapid onboarding",
  "elastic scalability",
  "compliance & payroll",
  "niche expertise on demand",
];

const directLateralProcessKeywords = [
  "lateral hiring process",
  "lateral hiring source",
  "permanent hire",
  "talent expertise",
  "leadership position",
  "mid-level position",
  "senior-level position",
  "hiring channels",
  "sourcing channel",
  "associate referral",
  "advisory recommendation",
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
    return "Hello! 😊 Welcome to MicroAcademy. I can help you with:\n\n• Current job openings & careers\n• Freshers drives & eligibility\n• Our services (Direct/lateral Hiring, Training, etc.)\n• Contact information\n\nJust ask away!";
  }
  if (matchesAny(lower, thankKeywords)) {
    return "You're welcome! 😊 Is there anything else I can help you with?";
  }
  if (matchesAny(lower, goodbyeKeywords) && lower.length < 30) {
    return "Goodbye! 👋 Thanks for chatting with MicroBot. Feel free to come back anytime. Have a great day!";
  }

  // Enriched Static Section Intents
  if (matchesAny(lower, clientKeywords)) {
    return `🤝 **Valued Partners & Clients**\n\nMicroAcademy is a trusted partner for leading IT multinationals globally. A few of our valued clients include:\n\n${clientsData.clients.map((c) => `• **${c.name}**`).join("\n")}\n\nWe collaborate closely with these organizations to source elite digital talent and deliver custom L&D programs.`;
  }

  if (matchesAny(lower, globalKeywords)) {
    const asian = countriesData
      .filter((c) => c.region === "Asia")
      .map((c) => c.name)
      .join(", ");
    const me = countriesData
      .filter((c) => c.region === "Middle East")
      .map((c) => c.name)
      .join(", ");
    const african = countriesData
      .filter((c) => c.region === "Africa")
      .map((c) => c.name)
      .join(", ");
    const european = countriesData
      .filter((c) => c.region === "Europe")
      .map((c) => c.name)
      .join(", ");

    return `🌍 **Our Global Footprint**\n\nMicroAcademy has a strong footprint spanning **20+ countries** across several key global regions:\n\n🔹 **Asia:** ${asian}\n🔹 **Middle East:** ${me}\n🔹 **Africa:** ${african}\n🔹 **Europe:** ${european}\n\nWe deliver enterprise-grade L&D programs and talent acquisition solutions across these global markets.`;
  }

  if (matchesAny(lower, milestoneKeywords)) {
    const list = timelineMilestones
      .map((m) => `• **${m.year} — ${m.title}**: ${m.description}`)
      .join("\n\n");
    return `📜 **A Thirty-Year Genesis & History**\n\nMicroAcademy was established in 1995. Here are the major milestones that have shaped our legacy:\n\n${list}\n\nVisit our About page to learn more about our journey!`;
  }

  if (matchesAny(lower, achievementKeywords)) {
    const achievementsList = keyAchievementsData
      .map((a) => `🏆 **${a.title}**\n${a.description}`)
      .join("\n\n");
    return `🚀 **Key Achievements**\n\nOver our 30-year journey, MicroAcademy has achieved major benchmarks in the IT talent space:\n\n${achievementsList}\n\nWe are committed to delivering swift scale and strategic alignment.`;
  }

  if (matchesAny(lower, microAdvantageKeywords)) {
    const itemsList = microAdvantageData.items
      .map((item) => `✨ **${item.title}**\n${item.description}`)
      .join("\n\n");
    return `🌟 **The Micro Advantage**\n\nHere are the core value adds that make MicroAcademy a definitive standard for workforce intelligence:\n\n${itemsList}\n\nThese capabilities enable us to curate elite, future-ready digital talent for top global firms.`;
  }

  if (matchesAny(lower, trainHireStepsKeywords)) {
    return `🎓 **Train & Hire Process Steps**\n\nWe follow a rigorous 5-step methodology to ensure candidates are enterprise-ready:\n\n1️⃣ **Sourcing:** Candidates are strategically sourced and shortlisted based strictly on your precise technical and cultural criteria.\n2️⃣ **Pre-Selection:** A rigorous pre-selection by your team, encompassing aptitude, technical capability, and HR round evaluations.\n3️⃣ **Training:** Pre-selected candidates undergo intensive, customized training with Micro Academy tailored exactly to your business needs.\n4️⃣ **Assessment:** Comprehensive final assessment conducted by your team to validate readiness before formal induction.\n5️⃣ **Job Placement:** Selected candidates are smoothly boarded by the client as Full-Time Employees (FTE) or on a Contract-to-Hire (C2H) basis.\n\nVisit our Train & Hire page to learn more!`;
  }

  if (matchesAny(lower, lmsKeywords)) {
    return `💻 **Our Learning Management System (LMS) Features**\n\nOur LMS provides comprehensive tracking and structured learning:\n\n📊 **Batchwise & Individual Reports:** Granular performance analytics covering sprints, module proficiencies, capstone assessments, and attendance.\n📖 **Reference Material:** Persistent repository with high-fidelity PDFs, custom guides, and developer video lectures accessible 24/7.\n💻 **Assignments & Capstones:** Daily industry-standard coding tasks, multi-layered real-world case studies, and full-stack projects.\n🎓 **Milestone Assessments:** Automated unit tests, comprehensive knowledge-based diagnostic exams, and technical interviews.\n🗓️ **Session Scheduling:** Seamless coordinating of live classes, tech cohort check-ins, and individual assessments.\n\nVisit our Train & Hire page to see it in action!`;
  }

  if (matchesAny(lower, contractProcessKeywords)) {
    return `📝 **Contract Hiring Benefits & Process**\n\n✅ **Key Benefits:**\n• **Rapid Deployment:** Bypass lengthy hiring cycles (onboard within 48-72 hours).\n• **Elastic Scalability:** Scale teams up/down based on project demands without overhead liabilities.\n• **Compliance & Payroll:** We handle all statutory compliances, payroll, and legal formalities.\n• **Niche Expertise:** Access highly specialized skills for short-term critical projects.\n\n🔄 **Our 4-Step Contracting Process:**\n1️⃣ **Requirement Analysis:** We understand your technical stack, timeline, and resource gaps.\n2️⃣ **Profile Sourcing & Curation:** We identify and pre-screen candidates from our ready talent pool.\n3️⃣ **Client Interview:** You interview a curated shortlist of top-tier professionals.\n4️⃣ **Rapid Onboarding:** We manage all paperwork and logistics for seamless integration.\n\nVisit our Contract Hiring page for more details!`;
  }

  if (matchesAny(lower, directLateralProcessKeywords)) {
    return `🎯 **Direct/Lateral Hiring Details & Expertise**\n\nOur direct and lateral hiring services specialize in permanent placement and strategic leadership staffing:\n\n🔑 **Sourcing Channels & Channels:**\n• **Major Hiring Portals:** Active pipelines across all skill bands.\n• **Advisory Recommendations:** A panel of tier-1 advisors with 30+ years of leadership experience recommends and guides candidate matching.\n• **Associate Referrals:** A vast network of candidates sourced and placed since 1995 who are now in senior multinational roles.\n• **Voluntary Applicants & Internal Search:** Strong database and reputation built over 3 decades.\n\n🏆 **Our Talent Focus Areas:**\n• **Leadership Roles:** CTO, CISO, IT Director, Site/DC Head.\n• **Specialized Tech Roles:** Data Scientist, Cybersecurity, Cloud/DevOps, Blockchain.\n• **Senior & Mid-Level:** Solution Architect, IT Manager, System Admin, Software Developer.\n\nVisit our Direct/lateral Hiring page for full details!`;
  }

  // Dynamic Strapi Data Lookups (Fresher Drives and Job Positions)
  if (strapiData?.isLoaded) {
    // 1. Specific Fresher Drive Lookup
    const matchedDrive = findMatchedDrive(lower, strapiData.fresherDrives);
    if (matchedDrive) {
      if (matchesAny(lower, salaryKeywords)) {
        return `💰 **Salary package for the ${matchedDrive.title}** drive:\n${matchedDrive.salary}\n\nVisit our Freshers Drive page to register!`;
      }
      if (
        matchesAny(lower, ["venue", "address", "location", "landmark", "where"])
      ) {
        return `📍 **Venue & Location details for ${matchedDrive.title}**:\n• **Location:** ${matchedDrive.location}\n• **Venue:** ${matchedDrive.venue}\n• **Landmark:** ${matchedDrive.landmark || "N/A"}\n\nVisit our Freshers Drive page to view on map and register!`;
      }
      if (
        matchesAny(lower, [
          "selection",
          "process",
          "round",
          "interview",
          "test",
        ])
      ) {
        return `📝 **Selection Process for ${matchedDrive.title}**:\n${matchedDrive.selection_process}\n\nVisit our Freshers Drive page to learn more!`;
      }
      if (matchesAny(lower, eligibilityKeywords)) {
        return `🎓 **Eligibility Criteria for ${matchedDrive.title}**:\n• **Degree Requirement:** ${matchedDrive.degree_requirement || "BE/BTech/MCA/Graduates"}\n• **Minimum Aggregate:** ${matchedDrive.minimum_aggregate || "60%"}\n• **Academic Year:** ${matchedDrive.academic_year || "2024/2025"}\n• **Education Gap:** ${matchedDrive.education_gap || "No gaps allowed"}\n\nVisit our Freshers Drive page for full prerequisites!`;
      }
      if (matchesAny(lower, contactKeywords)) {
        return `📞 **Contact Information for ${matchedDrive.title}**:\n${matchedDrive.contact}\n\nFor queries, call the above numbers or visit our Contact page!`;
      }
      if (lower.includes("training")) {
        return `📚 **Training details for ${matchedDrive.title}**:\n${matchedDrive.training}\n\nVisit our Freshers Drive page for full registration.`;
      }
      if (lower.includes("note")) {
        return `ℹ️ **Additional Notes for ${matchedDrive.title}**:\n${matchedDrive.notes}`;
      }

      // Default response when a drive is matched but no specific field was requested
      return `🎓 **${matchedDrive.title}**\n\nHere are the details for this Freshers Drive:\n• 💼 **Designation:** ${matchedDrive.designation} (Domain: ${matchedDrive.domain})\n• 💰 **Salary Package:** ${matchedDrive.salary}\n• 📍 **Location:** ${matchedDrive.location}\n• 🏫 **Venue:** ${matchedDrive.venue}\n• 🎓 **Eligibility:** Degree: ${matchedDrive.degree_requirement} | Aggregate: ${matchedDrive.minimum_aggregate} | Year: ${matchedDrive.academic_year}\n• 📝 **Selection Process:** ${matchedDrive.selection_process}\n• 📞 **Contact:** ${matchedDrive.contact}\n\nVisit our Freshers Drive page to register!`;
    }

    // 2. Specific Job Position Lookup
    const allJobs = getAllJobs(strapiData);
    const matchedJob = findMatchedJob(lower, allJobs);
    if (matchedJob) {
      if (matchesAny(lower, ["location", "where"])) {
        return `📍 The position **${matchedJob.title}** is located in **${matchedJob.location}**.`;
      }
      if (matchesAny(lower, ["education", "qualification", "degree"])) {
        return `🎓 Educational requirements for **${matchedJob.title}**:\n• ${matchedJob.education}`;
      }
      if (
        matchesAny(lower, ["experience", "yoe", "senior", "junior", "years"])
      ) {
        return `⏳ Experience requirement for **${matchedJob.title}**:\n• ${matchedJob.experience || "Not specified"}`;
      }
      if (matchesAny(lower, ["salary", "ctc", "package", "pay"])) {
        return `💰 Compensation for **${matchedJob.title}** is commensurate with experience and skills.\n\nApply now to discuss with our recruitment team!`;
      }
      const isInternal = strapiData.careers.some(
        (c) =>
          (c.job_id || c.jobId) === (matchedJob.job_id || matchedJob.jobId),
      );
      const applyPage = isInternal ? "Careers page" : "Recruitments page";
      return `💼 **Job Details: ${matchedJob.title}**\n\n• 🆔 **Job ID:** ${matchedJob.job_id || matchedJob.jobId || "N/A"}\n• 📍 **Location:** ${matchedJob.location}\n• ⏳ **Experience:** ${matchedJob.experience || "Not specified"}\n• 🎓 **Education:** ${matchedJob.education}\n• 🏷️ **Type:** ${matchedJob.type || "Full-time"}\n\nWould you like to apply? Visit our ${applyPage} to submit your application!`;
    }
  }
  if (strapiData?.isLoaded) {
    const matchedSkill = techSkillKeywords.find((kw) => matchesWord(lower, kw));

    if (
      matchedSkill &&
      (matchesAny(lower, careerSpecificKeywords) ||
        matchesAny(lower, genericJobKeywords) ||
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
          "🔗 Visit our Careers page or see our Recruitments page for full details!",
        );
      }

      return `We don't have any "${matchedSkill}" specific openings right now. 😔\n\nBut we frequently update our positions! You can check our specific job pages: visit our Careers page (for internal roles), see our Recruitments page (for direct & contract client roles), or check out our Freshers Drive page (for entry-level drives).\n\nOr send your resume to info@microacademy.net! 📧`;
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

  if (matchesAny(lower, directLateralHiringKeywords)) {
    let response =
      "🎯 Our Direct/lateral Hiring Services:\n\nWith a strong technical team and 30+ years of experience, we specialize in:\n\n• Strategic headhunting for mid to senior-level roles\n• Contractual hiring for project-based needs\n• Full lifecycle direct/lateral hiring support\n\nWe find the candidate best suited for your organization and job role.";

    if (strapiData?.isLoaded && strapiData.directLateralHiring.length > 0) {
      response += `\n\n📋 Current direct/lateral hiring openings:\n\n`;
      response += strapiData.directLateralHiring
        .slice(0, 5)
        .map(
          (j) =>
            `• ${j.title} — ${j.location}${j.experience ? ` (${j.experience})` : ""}`,
        )
        .join("\n");

      if (strapiData.directLateralHiring.length > 5) {
        response += `\n\n...and ${strapiData.directLateralHiring.length - 5} more!`;
      }
      response += `\n\n🔗 Visit our Recruitments page for full details and to apply!`;
    }

    return response;
  }

  if (matchesAny(lower, contractKeywords)) {
    let response =
      "📝 Contract to Hire:\n\nMicroAcademy sources candidates who join on our payroll for the contract period. The client can directly hire the resource during or after the contract.\n\n✅ Benefits:\n• Rapid deployment (48-72 hours)\n• Zero long-term commitment\n• We handle payroll & compliance\n• Access niche expertise on demand";

    if (strapiData?.isLoaded && strapiData.contractHiring.length > 0) {
      response += `\n\n📋 Current contract positions:\n\n`;
      response += strapiData.contractHiring
        .slice(0, 5)
        .map(
          (j) =>
            `• ${j.title} — ${j.location}${j.experience ? ` (${j.experience})` : ""}`,
        )
        .join("\n");

      if (strapiData.contractHiring.length > 5) {
        response += `\n\n...and ${strapiData.contractHiring.length - 5} more!`;
      }
      response += `\n\n🔗 Visit our Recruitments page to see all available roles!`;
    } else if (strapiData?.isLoaded) {
      response += `\n\n(No active contract openings at the moment, but you can visit our Recruitments page for future updates!)`;
    }

    return response;
  }

  if (matchesAny(lower, careerSpecificKeywords)) {
    if (strapiData?.isLoaded) {
      if (strapiData.careers.length > 0) {
        return formatJobList(
          strapiData.careers,
          "internal career openings",
          5,
          "🔗 Visit our Careers page for more details.",
        );
      }

      return "No internal career openings at the moment. 😔\n\nBut we're always looking for great talent! You can send your resume to info@microacademy.net to be considered for future roles.";
    }

    return botResponses["💼 Job Openings"];
  }

  if (matchesAny(lower, genericJobKeywords)) {
    if (strapiData?.isLoaded) {
      const parts: string[] = [];

      // 1. Full Time (directLateralHiring)
      const directJobs = strapiData.directLateralHiring || [];
      const directList =
        directJobs.length > 0
          ? directJobs.map((j) => `• ${j.title}`).join("\n")
          : "No active openings at the moment.";
      parts.push(
        `💼 **Full Time**\n${directList}\n\nVisit our Recruitments page to see full details!`,
      );

      // 2. Contract (contractHiring)
      const contractJobs = strapiData.contractHiring || [];
      const contractList =
        contractJobs.length > 0
          ? contractJobs.map((j) => `• ${j.title}`).join("\n")
          : "No active openings at the moment.";
      parts.push(
        `📝 **Contract**\n${contractList}\n\nVisit our Recruitments page to see full details!`,
      );

      // 3. Freshers Drive (fresherDrives)
      const drives = strapiData.fresherDrives || [];
      const drivesList =
        drives.length > 0
          ? drives.map((d) => `• ${d.title}`).join("\n")
          : "No active openings at the moment.";
      parts.push(
        `🎓 **Freshers Drive**\n${drivesList}\n\nVisit our Freshers Drive page to see full details!`,
      );

      // 4. Careers (careers)
      const careerJobs = strapiData.careers || [];
      const careerList =
        careerJobs.length > 0
          ? careerJobs.map((j) => `• ${j.title}`).join("\n")
          : "No active openings at the moment.";
      parts.push(
        `🏢 **Careers**\n${careerList}\n\nVisit our Careers page to see full details!`,
      );

      return (
        "Here are the available job vacancies by category:\n\n" +
        parts.join("\n\n────────────────\n\n")
      );
    }

    return botResponses["💼 Job Openings"];
  }

  if (strapiData?.isLoaded) {
    const matchedCity = locationCityKeywords.find((kw) => lower.includes(kw));

    if (
      matchedCity &&
      (matchesAny(lower, careerSpecificKeywords) ||
        matchesAny(lower, genericJobKeywords) ||
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

      return `No current openings in ${matchedCity}. 😔\n\nYou can check for roles in other locations: visit our Careers page, see our Recruitments page, or check out our Freshers Drive page. Or send your resume to info@microacademy.net and we'll notify you!`;
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
        return `Great news for freshers! 🎓\n\n${formatDriveList(strapiData.fresherDrives)}\n\nAlso visit our Careers page for entry-level positions.`;
      }
      return "For freshers, we regularly conduct Freshers Drives with training + placement. Visit our Freshers Drive page for upcoming drives!";
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

    return "We have opportunities across all experience levels. You can check out our Careers page, visit our Recruitments page, or see our Freshers Drive page for current openings!";
  }
  if (matchesAny(lower, trainHireKeywords)) {
    return "🎓 Train & Hire Services:\n\nWe bridge the gap between raw talent and enterprise-ready professionals. Our value proposition is built on 4 key pillars:\n\n1️⃣ Cost Benefits\n• No employee cost during training\n• Mitigated risk of attrition during training\n• Reduced recruitment and onboarding overheads\n\n2️⃣ Flexibility\n• Option to hire trained candidates directly or through Contract-to-Hire (C2H)\n• Customized as well as certified training under one roof\n• 'Necessity-driven' training tailored to your business needs\n\n3️⃣ Standardization\n• Standardized training curriculum across various locations\n• Rigorous selection where only candidates meeting client expectations are recruited\n\n4️⃣ Scalability\n• Easy ramp-up for large corporate deals\n• Ability to deploy Level 1 resources in niche and hard-to-get skills\n\n🔗 Visit our Train & Hire page or contact us to get started!";
  }
  if (matchesAny(lower, corporateTrainingKeywords)) {
    return "🏫 Corporate Training:\n\nWith 3 decades of IT training expertise, we offer specialized programs across 4 key technology domains:\n\n💻 1. System Administration\n• Windows & Linux Server Administration\n• IBM Mainframe / IBM i Administration\n• Networking & Virtualization, Database Admin, Storage & Backup\n\n🚀 2. Application Development\n• Java Full Stack, .NET, Angular JS\n• Web Technologies, Middleware, Testing\n\n🤝 3. Soft Skills\n• Critical Thinking & Problem Solving, Agility & Adaptability\n• Leadership & Project Management, Cross-Cultural Collaboration\n\n🔮 4. Niche Technologies\n• AI Transformation for Business & IT Leaders\n• AI / ML / Gen AI Tech Stack\n• Data Science & Analytics, Network & Cybersecurity, Automation & Robotics\n\n📊 3,500+ Trainings Delivered | 25,000+ People Trained\n🏅 ISO 9001:2015 Certified Methodology\n\nContact us to customize a training program for your team!";
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
      let response =
        "📋 **Eligibility Criteria for our current Freshers Drives:**\n\n";
      strapiData.fresherDrives.forEach((drive) => {
        response += `🎓 **${drive.title}**:\n`;
        if (drive.degree_requirement)
          response += `  • **Degree:** ${drive.degree_requirement}\n`;
        if (drive.minimum_aggregate)
          response += `  • **Min Aggregate:** ${drive.minimum_aggregate}\n`;
        if (drive.academic_year)
          response += `  • **Academic Year:** ${drive.academic_year}\n`;
        if (drive.education_gap)
          response += `  • **Education Gap:** ${drive.education_gap}\n`;
        response += "\n";
      });
      response +=
        "Visit our Freshers Drive page for full registration instructions!";
      return response;
    }

    return "📋 Eligibility varies by role:\n\n• Freshers Drives: Typically BE/BTech/MCA with min aggregate\n• Career Roles: Relevant degree + experience\n• Contract Roles: Specific tech expertise required\n\nVisit our Job Openings page for detailed requirements, or ask me about a specific role!";
  }
  if (matchesAny(lower, salaryKeywords)) {
    if (strapiData?.isLoaded && strapiData.fresherDrives.length > 0) {
      const drivesWithSalary = strapiData.fresherDrives.filter((d) => d.salary);

      if (drivesWithSalary.length > 0) {
        const lines = drivesWithSalary.map(
          (d) => `• **${d.title}**: ${d.salary}`,
        );
        return `💰 **Salary Packages for current Fresher Drives:**\n\n${lines.join("\n")}\n\nFor internal or client lateral hiring roles, packages are discussed during interviews. Visit our Careers page or see our Recruitments page for more details!`;
      }
    }

    return "💰 Compensation varies based on role, experience, and skill level.\n\nFor specific salary details:\n📧 Email: info@microacademy.net\n📞 Call: +91 080-25358182\n\nOr apply to a specific position and our team will share the details!";
  }
  if (matchesAny(lower, whyJoinKeywords)) {
    return "🌟 Why Join MicroAcademy?\n\n📈 Professional Growth — Continuous learning paths for leadership mastery\n🏥 Premium Benefits — Healthcare, performance bonuses & wellness programs\n🌍 Global Impact — Work on projects influencing global markets across 20+ countries\n🏢 30+ Years Legacy — Established in 1995, pioneering in IT L&D and workforce intelligence\n📊 Proven Track Record — 25,000+ professionals trained & deployed, 30+ global clients\n\nJoin us and be part of something bigger!";
  }
  return 'I\'m not sure I understood that. 🤔 Here\'s what I can help with:\n\n• 💼 Job openings & careers\n• 🎓 Freshers drives\n• 📋 Our services\n• 📞 Contact information\n• 🏢 About MicroAcademy\n\nTry asking something like "Show me job openings" or "Any React developer roles?"';
}
