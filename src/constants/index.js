import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pngegg
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI | UX Designer",
    icon: creator,
  },
  {
    title: "Cardano Enthusiactic",
    icon: backend,
  },
  {
    title: "Haskell Developer",
    icon: web,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "L&D InfoTech",
    icon: meta,
    iconBg: "#383E56",
    date: "Dec 2021 - March 2022",
    points: [
      "Utilizing React.js and associated technologies for the creation and upkeep of web applications.",
      "Execution of responsive design techniques while upholding compatibility across diverse browsers.",
      "Participated in user research and usability testing, incorporating feedback to iterate and enhance the user interface and overall user experience.",
      "Actively partaking in code evaluations and furnishing valuable input to peers for enhancement purposes.",
      "Engaging in collaborative efforts with multidisciplinary groups encompassing designers, product managers, and fellow developers to forge refined end-products.",
      "Engaged as a UI/UX Developer, focused on crafting exceptional user experiences and intuitive interfaces."
    ],
  },
  {
    title: "Campus Ambassador Intern",
    company_name: "International Model of United Nation [IMUNA]",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2022 - Dec 2022",
    points: [
      "Served as a delegate from Myanmar in the International Model United Nations Assembly (IMUNA), participating in substantive deliberations and negotiations concerning pivotal worldwide matters.",
      "Participated in global conferences, articulating Myanmar's position in opposition to child marriage and poverty through diplomatic channels and international forums.",
      "Concurrently, engaged in social work initiatives and awareness campaigns, fostering a deeper understanding of the aforementioned issues within local and global communities.",
      "Additionally, generated comprehensive reports, meticulously documented proceedings, and authored published papers, thereby contributing valuable insights and analyses to the broader discourse surrounding these socio-economic challenges.",
    ],
  },
  {
    title: "Web3 Developer",
    company_name: "Konma DAO",
    icon: meta,
    iconBg: "#383E56",
    date: "Feb 2023 - Current",
    points: [
      "Employed as a Web3 Developer at Konma Company, specializing in the implementation of blockchain solutions using Haskell Plutus and the Web3 blockchain language.",
      "Engaged in an immersive learning journey centered around the Cardano blockchain ecosystem, enhancing proficiency in its intricacies and functionalities.",
      "Actively contributed expertise to Web3 projects within the organization, leveraging a combination of Haskell Plutus and Web3 blockchain skills to architect and develop innovative decentralized applications.",
      "Collaborated closely with cross-functional teams to ensure the seamless integration of blockchain components, enhancing the overall functionality and user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "I am thrilled to share my experience working with AKash during our time together at Konma DAO. As a colleague, I had the privilege of witnessing Akash's outstanding skills and dedication to web development firsthand.",
    name: "Rahat Sayyed",
    designation: "Web3 Dev | ",
    company: "Konma DAO",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I had the pleasure of collaborating with Akash on Luxo | Pinko, and the results were nothing short of exceptional. Akash's attention to detail and commitment to delivering high-quality work were evident in every aspect of the project. ",
    name: "Vinay Deva",
    designation: "Co-Founder |",
    company: "Konma DAO",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I have no doubt that Akash will continue to excel and make a significant impact in the field of web development. If you're seeking a talented and dedicated web developer who brings both technical expertise and a collaborative spirit to the table, Akashis the person to work with.",
    name: "Faizan Shaikh",
    designation: "Haskell Dev |",
    company: "Konma DAO",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
