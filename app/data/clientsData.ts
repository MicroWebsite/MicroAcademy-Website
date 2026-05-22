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
  ],
};
