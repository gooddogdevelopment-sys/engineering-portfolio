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
    duration: "October 2022 - Present",
    description: "Enhanced legacy client-facing applications and architected new platforms to reduce technical debt and accelerate feature development.",
    technologies: ["Vue.js", "Nuxt.js", ".NET Core", "PostgreSQL", "Kubernetes", "AWS", "DataDog"],
    achievements: [
      "Refactored Vue.js components for improved reusability and maintainability, reducing average lines of code by 45% and boosting page load performance.",
      "Architected new Nuxt platform to significantly reduce technical debt, increase scalability, and accelerate future feature development.",
      "Implemented comprehensive monitoring and observability dashboards using DataDog, proactively capturing over 40% of production errors.",
      "Deployed and managed containerized applications with Kubernetes in AWS cloud environment.",
      "Mentored 4 software engineering interns on development best practices, with 2 receiving return offers for full-time positions.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Frontier Technology Inc",
    duration: "December 2019 - October 2022",
    description: "Developed and delivered full-stack web applications for government clients, specializing in wargaming simulation software and mission-critical tools.",
    technologies: [".NET Core", "C#", "SQL Server"],
    achievements: [
      "Developed full-stack web applications for government clients using .NET Core, specializing in wargaming simulation software.",
      "Engineered and optimized complex SQL Views and Stored Procedures to streamline data retrieval for reporting and application backends.",
      "Facilitated deployment and support processes for wargaming simulation software used in government exercises.",
    ],
  },
  {
    id: 3,
    title: "Technology Support Specialist",
    company: "Thomas More University",
    duration: "August 2016 - December 2019",
    description: "Provided technical support across campus technology systems and developed internal .NET web applications to address university requirements.",
    technologies: ["C#", ".NET Framework", "Active Directory", "SQL Server"],
    achievements: [
      "Provided technical support for over 2,000 faculty, staff, and students across all campus technology systems.",
      "Transitioned from support duties to develop and maintain internal .NET web applications addressing university requirements.",
      "Maintained C# Active Directory Management Application, automating user provisioning and access control which reduced manual administration time by over 50%.",
    ],
  },
];
