export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const workHistory: WorkExperience[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "NaviStone",
    duration: "2022 - Present",
    description: "Focused on frontend development, learning on the job, while also contributing to backend tasks. Acted as a tech lead for various projects.",
    technologies: ["Vue.js", "Nuxt.js", ".NET", "PostgreSQL"],
    achievements: [
      "Served as a tech lead, guiding project architecture and development processes.",
      "Mentored two interns, helping them grow their skills and contribute to the team.",
      "Rapidly learned and applied new frontend technologies to deliver modern user interfaces.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Frontier Technology",
    duration: "2019 - 2022",
    description: "Developed a war gaming simulation program for the Department of Defense (U.S. Air Force).",
    technologies: [".NET Framework", "C#", "SQL Server", "SQL Server Replication Service"],
    achievements: [
      "Led the development of a critical simulation module.",
      "Mentored a junior developer, providing guidance and code reviews.",
      "Collaborated with military stakeholders to gather requirements and ensure project alignment.",
    ],
  },
  {
    id: 3,
    title: "Helpdesk Staff/Student Developer",
    company: "Thomas More University",
    duration: "2016 - 2019",
    description: "Provided technical support to students and faculty, troubleshooting hardware, software, and network issues. Assisted with campus-wide technology deployments and maintenance.",
    technologies: ["Windows OS", ".NET Framework", "Microsoft Office Suite", "Active Directory", "SQL Server"],
    achievements: [
      "Managed the IT asset management program for the university, ensuring accurate and up-to-date inventory.",
      "Assisted in a campus-wide upgrade of over 200 faculty computers.",
      "Created documentation for common technical issues, reducing recurring support requests.",
    ],
  },
  {
    id: 4,
    title: "IT Intern",
    company: "Gravity Diagnostics",
    duration: "2018 - 2019",
    description: "Provided technical support to in-person and remote employees.",
    technologies: [".NET", "Orchard", "Active Directory", "SQL Server"],
    achievements: [
      "Offered technical support to employees, resolving issues with company equipment and systems.",
      "Assisted with the onboarding of new hires, providing essential training and support to help them integrate smoothly.",
      "Conducted research on potential business solutions to enhance efficiency and productivity.",
    ],
  },
];
