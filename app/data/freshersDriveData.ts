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
  eligibility: EligibilityCriteria;
}

export const freshersDrives: DriveDomain[] = [
  {
    id: 'storage-and-backup',
    title: 'Freshers Drive For Storage And Backup Domain',
    description: 'Architecting the future of data infrastructure. Join a world-class IT service provider through our curated Train & Hire model.',
    image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2000&auto=format&fit=crop',
    eligibility: {
      academicYear: '2023 and 2024 batch pass outs',
      degreeRequirement: 'BE/B.Tech, B.Sc (Computer Science)',
      minimumAggregate: '60% and above in 10th, 12th And UG',
      educationGap: 'More than Two Year gap is not allowed',
      coreCompetency: 'Excellent communication skills',
      flexibility: 'Willing to work in 24/7 shifts',
    },
  },
  {
    id: 'cis-domain',
    title: 'Freshers Drive At Micro Academy For CIS Domain',
    description: 'Cloud Infrastructure Services (CIS) is the backbone of modern enterprise. Be part of the team managing large scale IT environments.',
    image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2000&auto=format&fit=crop',
    eligibility: {
      academicYear: '2023 and 2024 batch pass outs',
      degreeRequirement: 'BE/B.Tech, M.Tech, MCA',
      minimumAggregate: '65% and above throughout',
      educationGap: 'Maximum 1 year gap allowed',
      coreCompetency: 'Fundamental knowledge of OSI models and Cloud basics',
      flexibility: 'Open to relocate across India',
    },
  },
];
