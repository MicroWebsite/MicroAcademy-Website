export interface Client {
  id: string;
  name: string;
  logo: string;
}

export interface ClientsSectionData {
  sectionTag: string;
  heading: string;
  clients: Client[];
}

export const clientsData: ClientsSectionData = {
  sectionTag: "VALUED PARTNERS",
  heading: "Few of Our Clients",
  clients: [
    // Existing Clients
    { id: "hp", name: "HP", logo: "/assets/home/hp.svg" },
    { id: "hexaware", name: "Hexaware", logo: "/assets/home/hexaware.svg" },
    {
      id: "fidelity",
      name: "Fidelity Investments",
      logo: "/assets/home/fidelity.svg",
    },
    { id: "allstate", name: "Allstate", logo: "/assets/home/allstate.svg" },
    { id: "capgemini", name: "Capgemini", logo: "/assets/home/capgemini.svg" },
    {
      id: "hitachi",
      name: "Hitachi Vantara",
      logo: "/assets/home/hitachi.svg",
    },
    { id: "lnt", name: "L&T Infotech", logo: "/assets/home/landt.svg" },
    { id: "emc", name: "EMC²", logo: "/assets/home/emc.svg" },
    { id: "dxc", name: "DXC Technology", logo: "/assets/home/dxc.svg" },
    { id: "birlasoft", name: "Birlasoft", logo: "/assets/home/birla.svg" },
    { id: "cgi", name: "CGI", logo: "/assets/home/cgi.svg" },
    {
      id: "tech-mahindra",
      name: "Tech Mahindra",
      logo: "/assets/home/techmahindra.svg",
    },
    // New Clients
    {
      id: "innover-digital",
      name: "Innover Digital",
      logo: "/assets/home/innover_digital.svg",
    },
    {
      id: "deloitte",
      name: "Deloitte",
      logo: "/assets/home/deloitte.svg",
    },
    {
      id: "infosys",
      name: "Infosys Technologies",
      logo: "/assets/home/infosys.svg",
    },
    {
      id: "kpmg-india",
      name: "KPMG India Services",
      logo: "/assets/home/kpmg.svg",
    },
    {
      id: "cognizant-india",
      name: "Cognizant Technology Solutions India",
      logo: "/assets/home/cognizant.svg",
    },
    {
      id: "accenture-services",
      name: "Accenture Services",
      logo: "/assets/home/accenture.svg",
    },
    {
      id: "wipro-technologies",
      name: "Wipro Technologies",
      logo: "/assets/home/wipro.svg",
    },
    {
      id: "mphasis-corp",
      name: "Mphasis Corporation",
      logo: "/assets/home/mphasis.svg",
    },
    {
      id: "tata-technologies",
      name: "Tata Technologies",
      logo: "/assets/home/tata_technologies.svg",
    },
    {
      id: "bny-mellon",
      name: "BNY Mellon Technology",
      logo: "/assets/home/bny_mellon.svg",
    },
    {
      id: "nagarro",
      name: "Nagarro Software",
      logo: "/assets/home/nagarro.svg",
    },
    {
      id: "vays-infotech",
      name: "Vays Infotech",
      logo: "/assets/home/vays_infotech.svg",
    },
  ],
};
