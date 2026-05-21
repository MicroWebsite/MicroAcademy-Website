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
    { id: "hp", name: "HP", logo: "/assets/home/hp.png" },
    { id: "hexaware", name: "Hexaware", logo: "/assets/home/hexaware.png" },
    {
      id: "fidelity",
      name: "Fidelity Investments",
      logo: "/assets/home/fidelity.png",
    },
    { id: "allstate", name: "Allstate", logo: "/assets/home/allstate.png" },
    { id: "kpmg", name: "KPMG", logo: "/assets/home/kpmg.png" },
    { id: "capgemini", name: "Capgemini", logo: "/assets/home/capgemini.png" },
    {
      id: "hitachi",
      name: "Hitachi Vantara",
      logo: "/assets/home/hitachi.png",
    },
    { id: "lnt", name: "L&T Infotech", logo: "/assets/home/landt.png" },
    { id: "emc", name: "EMC²", logo: "/assets/home/emc.png" },
    { id: "dell", name: "Dell", logo: "/assets/home/dell.png" },
    { id: "dxc", name: "DXC Technology", logo: "/assets/home/dxc.png" },
    { id: "birlasoft", name: "Birlasoft", logo: "/assets/home/birla.png" },
    { id: "cgi", name: "CGI", logo: "/assets/home/cgi.png" },
    {
      id: "tech-mahindra",
      name: "Tech Mahindra",
      logo: "/assets/home/techmahindra.png",
    },
    { id: "cognizant", name: "Cognizant", logo: "/assets/home/cognizant.png" },
  ],
};
