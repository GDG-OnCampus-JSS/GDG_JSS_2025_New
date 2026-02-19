export interface Project {
  id: string;
  domain: string;
  year: string;
  title: string;
  description: string;
  image: string;
  projectLink: string;
  techStack?: { [key: string]: string }[];
  bgColor: string;
}

export const projects: Project[] = [
  {
    id: "1",
    domain: "Website",
    year: "2025",
    title: "GDSC Recruitment Platform",
    description:
      "GDSC Recruitment Platform is an intelligent solution designed to streamline and simplify the recruitment process. With GDSC Recruitment Platform, students can register and apply for recruitment test.",
    image: "https://i.ibb.co/KLPYYz6/recruitment.png",
    projectLink: "https://github.com/GDG-OnCampus-JSS/GDG_Recruitment_Platform_Frontend_2026",
    techStack: [
      { NextJs: "logos:nextjs-icon" },
      { NodeJs: "logos:nodejs-icon" },
    ],
    bgColor: "bg-[#DB4437]",
  },
  {
    id: "2",
    domain: "App",
    year: "2025",
    title: "Line Up",
    description:
      "It is a game where one has to find his team members in college during the Zealicon using GPS. It is an interactive game played by a lot of students.",
    image: "https://i.ibb.co/94ZqF3P/Line-up.png",
    projectLink: "https://github.com/DSC-JSS-NOIDA/Line-up",
    techStack: [{ Kotlin: "logos:kotlin-icon"}, { Firebase: "devicon:firebase" }],
    bgColor: "bg-[#F4B400]",
  },
  {
    id: "3",
    domain: "App",
    year: "2020",
    title: "Zealicon App 2020",
    description:
      "The official android app of the annual fest of JSSATEN, Zealicon 2020. The theme of the fest is Music. Explore all events day-wise as well as category-wise. Get all the upcoming events at one place. Set reminder to your favourite events.",
    image: "https://i.ibb.co/RbSCG8C/Zealicon-app.png",
    projectLink: "https://github.com/DSC-JSS-NOIDA/Zealicon",
    techStack: [
      { Kotlin: "logos:kotlin-icon" },
      { Firebase: "devicon:firebase" },
    ],
    bgColor: "bg-[#0F9D58]",
  },
  {
    id: "4",
    domain: "Website",
    year: "2020",
    title: "GDSC Folios",
    description:
      "GDSC Folios helps you generate an awesome, easy to share digital portfolios by just filling out some simple details. Showcase yourself and your achievements with a professional and impressive resume with effortlessness and awesome craftsmanship. Saves time and effort, so that developers land their dream job within a few clicks!",
    image: "https://i.ibb.co/f88774c/Dsc-Folios.png",
    projectLink: "https://github.com/DSC-JSS-NOIDA/DSC-Folios",
    techStack: [
      { React: "logos:react" },
      { Bootstrap: "devicon:bootstrap" },
      { PHP: "logos:php" },
    ],
    bgColor: "bg-[#DB4437]",
  },
  {
    id: "5",
    domain: "App",
    year: "2020",
    title: "Plasma Donor App",
    description:
      "An open-source Android app that helps in connecting patients and plasma donors. This is a beginner-friendly repository that helps you learn the basics of android development, git, and GitHub for GDSC HackFest 2020.",
    image: "https://i.ibb.co/gWxLVXB/Plasma-Doner.png",
    projectLink: "https://github.com/DSC-JSS-NOIDA/Plasma-Donor-App",
    techStack: [
      { Kotlin: "logos:kotlin-icon" },
      { Firebase: "devicon:firebase" },
    ],
    bgColor: "bg-[#F4B400]",
  },
  {
    id: "6",
    domain: "App",
    year: "2020",
    title: "Evento",
    description:
      "All events at one place one stop for all events and workshops organized by various college societies. The members from different societies and clubs can upload info about the upcoming workshops or events.",
    image: "https://i.ibb.co/jwHKDR4/Evento.png",
    projectLink: "https://github.com/tronku/Evento",
    techStack: [
      { Kotlin: "logos:kotlin-icon" },
      { Firebase: "devicon:firebase" },
    ],
    bgColor: "bg-[#4285F4]",
  },
  {
    id: "7",
    domain: "App",
    year: "2020",
    title: "Udhaari",
    description:
      "It helps to maintain transaction records between Vendors and Customers and minimizes the loss of data which customer is vending how much money and when did he return that to the shop owner.",
    image: "https://i.ibb.co/jD9D8Zm/Udhari-app.png",
    projectLink: "https://github.com/DSC-JSS-NOIDA/Udhaari",
    techStack: [{ Java: "logos:java" }, { Firebase: "devicon:firebase" }],
    bgColor: "bg-[#0F9D58]",
  },
  {
    id: "8",
    domain: "App",
    year: "2020",
    title: "Sudoku",
    description:
      "Just fill the board, hit the button, and get your solution! Backtracking implementation of an android app that would allow users to play the game as well as solve sudoku.",
    image: "https://i.ibb.co/kJC4HBb/Udhari-app-1.png",
    projectLink: "https://github.com/DSC-JSS-NOIDA/Sudoku",
    techStack: [
      { Kotlin: "logos:kotlin-icon" },
      { Firebase: "devicon:firebase" },
    ],
    bgColor: "bg-[#DB4437]",
  },
  {
    id: "9",
    domain: "Backend",
    year: "2020",
    title: "Foss Events",
    description:
      "It's a single platform with all the info that you need to stay updated with summits, meetups, hackathons, and much more! It is a beginner-friendly repository that helps you learn git and contribute to web projects under GDSC HackFest 2020.",
    image: "https://i.ibb.co/Kw2PWtP/Foss-Events.png",
    projectLink: "https://github.com/DSC-JSS-NOIDA/foss-events",
    techStack: [
      { MongoDB: "logos:mongodb-icon" },
      { NodeJs: "logos:nodejs-icon" },
    ],
    bgColor: "bg-[#F4B400]",
  },
  {
    id: "10",
    domain: "Website",
    year: "2020",
    title: "Snappify",
    description:
      "Snappify is a smart post generator that helps you create posts for all social media profiles including Instagram, Facebook, LinkedIn, and Twitter within a snap. Don't waste time coming up with creative ideas or messing with apps.",
    image: "https://i.ibb.co/JH0d7mN/Snappify.png",
    projectLink: "https://github.com/naman360/post-generator",
    techStack: [{ React: "logos:react" }, { Bootstrap: "devicon:bootstrap" }],
    bgColor: "bg-[#4285F4]",
  },
];
