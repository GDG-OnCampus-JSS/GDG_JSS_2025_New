export interface Project {
  id: string;
  domain: string;
  year: string;
  title: string;
  description: string;
  image: string;
  projectLink: string;
  techStack?: { [key: string]: string }[];
}

export const projects: Project[] = [
  {
    id: "1",
    domain: "App",
    year: "2020",
    title: "Zealicon App 2020",
    description:
      "The official android app of the annual fest of JSSATEN, Zealicon 2020. The theme of the fest is Music. Explore all events day-wise as well as category-wise. Get all the upcoming events at one place. Set reminder to your favourite events.",
    image: "/icons/projectimage.png",
    projectLink: "",
    techStack: [
      { Kotlin: "/icons/kotlinlogo.svg" },
      { Kotlin: "/icons/kotlinlogo.svg" },
    ],
  },
  {
    id: "2",
    domain: "App",
    year: "2020",
    title: "Zealicon App 2020",
    description:
      "The official android app of the annual fest of JSSATEN, Zealicon 2020. The theme of the fest is Music. Explore all events day-wise as well as category-wise. Get all the upcoming events at one place. Set reminder to your favourite events.",
    image: "/icons/projectimage.png",
    projectLink: "",
    techStack: [
      { Kotlin: "/icons/kotlinlogo.svg" },
      { Kotlin: "/icons/kotlinlogo.svg" },
    ],
  },
  {
    id: "3",
    domain: "App",
    year: "2020",
    title: "Zealicon App 2020",
    description:
      "The official android app of the annual fest of JSSATEN, Zealicon 2020. The theme of the fest is Music. Explore all events day-wise as well as category-wise. Get all the upcoming events at one place. Set reminder to your favourite events.",
    image: "/icons/projectimage.png",
    projectLink: "",
    techStack: [
      { Kotlin: "/icons/kotlinlogo.svg" },
      { Kotlin: "/icons/kotlinlogo.svg" },
    ],
  },
  {
    id: "4",
    domain: "App",
    year: "2020",
    title: "Zealicon App 2020",
    description:
      "The official android app of the annual fest of JSSATEN, Zealicon 2020. The theme of the fest is Music. Explore all events day-wise as well as category-wise. Get all the upcoming events at one place. Set reminder to your favourite events.",
    image: "/icons/projectimage.png",
    projectLink: "",
    techStack: [
      { Kotlin: "/icons/kotlinlogo.svg" },
      { Kotlin: "/icons/kotlinlogo.svg" },
    ],
  },
];
