export interface EligibilityCriteria {
  academicYear: string;
  degreeRequirement: string;
  minimumAggregate: string;
  educationGap: string;
  coreCompetency: string;
  flexibility: string;
}

export interface DriveDomain {
  id: string;
  title: string;
  description: string;
  image: string;
  domain: string;
  salary: string;
  location: string;
  designation: string;
  selection_process: string;
  training: string;
  eligibility: string;
  notes: string;
  venue: string;
  landmark: string;
  contact: string;
}

export const freshersDrives: DriveDomain[] = [
  {
    id: "storage-and-backup",
    title: "Freshers Drive for Storage and Backup Domain",
    image: "/assets/freshers/Workshop.svg",
    description:
      "Opportunity for 2023 and 2024 Pass out 60% Throughout (10th, 12th & UG). Don't miss it!\n\nLeading MNCs are hiring fresh graduates at Micro Academy for Storage Domain.",
    domain: "Storage and Backup",
    salary: "3.2 LPA",
    location: "Any location across India",
    designation: "Trainee Engineer",
    selection_process: "Aptitude and Technical Round.",
    training: "Train & Hire Model.",
    eligibility:
      "<p>2023 and 2024 batch pass outs in BE/B.Tech and B.Sc (Computer Science). No standing arrears, 60% and above in 10th, 12th and UG (full-time/regular courses). More than two year gap is not allowed. Excellent communication skills. Willing to work in 24/7 shifts.</p>",
    notes:
      "<p>This is a Fresher selection drive under Train &amp; Hire model for a tier-1 IT service provider for 2023 and 2024 pass out batch. There are no charges for registration. You can refer or forward this opportunity to eligible candidates.</p>",
    venue:
      "Micro Academy India Private Limited#189, Amar Jyothi Layout, Domlur Ring Road, Domlur, Bangalore - 560071",
    landmark:
      "Road between Urban Ladder and Paramount Hotel on the Intermediate Ring Road",
    contact: "",
  },
  {
    id: "cis-domain",
    title: "Freshers Drive at Micro Academy for CIS Domain",
    image: "/assets/freshers/Workshop.svg",
    description:
      "Opportunity for 2021, 2022 and 2023 pass out with 50% throughout (10th, 12th, UG & PG).\n\nLeading MNCs are hiring fresh graduates at Micro Academy for CIS Domain.",
    domain: "CIS",
    salary: "4 LPA",
    location: "Bangalore, Chennai and Pune",
    designation: "System Engineer",
    selection_process: "Online Aptitude, Communication and HR Round.",
    training: "Final selected candidates will undergo online training.",
    eligibility:
      "<p>2021, 2022 and 2023 batch of BE/B.Tech/MCA/MS/M.Sc (CSE, IT, ECE, EEE, Mechanical, Instrumentation, Telecommunication, Civil, other circuit branches). Candidates having 50% in X, XII, Diploma or UG. Open to Indian nationals only. Flexible to locations, shifts and domains. Final client onboarding subject to satisfactory background verification.</p>",
    notes:
      "<p>All educational certificates (10th, 12th and Graduation) are required. Consolidated mark sheets, provisional and degree certificates are mandatory. There are no charges for registration. Candidates can register using the official registration link.</p>",
    venue:
      "Micro Academy India Private Limited#189, Amar Jyothi Layout, Domlur Ring Road, Domlur, Bangalore - 560071(Call Mondays to Fridays, 9:00 AM to 6:00 PM for any queries)",
    landmark:
      "Road between Urban Ladder and Paramount Hotel on the Intermediate Ring Road",
    contact: "Phone/WhatsApp: 9980876288Email: referrals@Microacademy.net",
  },
];
