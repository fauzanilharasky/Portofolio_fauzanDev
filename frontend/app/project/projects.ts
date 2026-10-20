export type PortfolioProject = {
  title: string;
  category: string;
  role: string;
  description: string;
  coverImage: string | null;
  previewLabel: string;
  technologies: { name: string; icon: string }[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Notaris: Corporate Website Development",
    category: "Notary Office Website",
    role: "Frontend Development",
    description:
      "A professional corporate website concept presenting notary services with clear navigation and a responsive layout.",
    coverImage: "/assets/images/projects/Notaris.png",
    previewLabel: "Corporate Website",
    technologies: [
      { name: "React", icon: "react/61DAFB" },
      { name: "TypeScript", icon: "typescript/3178C6" },
      { name: "Next.js", icon: "nextdotjs/111827" },
    ],
  },
  {
    title: "Fauzan.dev: Personal Portfolio",
    category: "Portfolio Website",
    role: "Full-stack Development",
    description:
      "A responsive portfolio website to introduce my work, experience, and services in one place.",
    coverImage: "/assets/images/portfolio.png",
    previewLabel: "Personal Portfolio",
    technologies: [
      { name: "Next.js", icon: "nextdotjs/111827" },
      { name: "React", icon: "react/61DAFB" },
      { name: "TypeScript", icon: "typescript/3178C6" },
      { name: "PostgreSQL", icon: "postgresql/4169E1" },
    ],
  },
  {
    title: "Base Incubator Learning Course",
    category: "E-Learning Website",
    role: "Web Development",
    description:
      "A landing page concept that presents an incubator program and helps visitors explore its services.",
    coverImage: "/assets/images/projects/learning.png",
    previewLabel: "E-Learning Website",
    technologies: [
      { name: "PHP", icon: "php/777BB4" },
      { name: "Laravel", icon: "laravel/FF2D20" },
      { name: "Tailwind CSS", icon: "tailwindcss/06B6D4" },
      { name: "JavaScript", icon: "javascript/F7DF1E" },
    ],
  },
  {
    title: "Mechanical Completion Portal",
    category: "Management System",
    role: "Web Application Concept",
    description:
      "A concept for managing completion records and making project information easier to review.",
    coverImage: "/assets/images/Mechanical Completion.png",
    previewLabel: "Management System",
    technologies: [
      { name: "JavaScript", icon: "javascript/F7DF1E" },
      { name: "Bootstrap", icon: "bootstrap/7952B3" },
      { name: "MySQL", icon: "mysql/4479A1" },
    ],
  },
  {
    title: "Incubator Business Landing Page",
    category: "Landing Page",
    role: "Web Design Concept",
    description:
      "A clean landing page concept highlighting business services, key benefits, and a clear call to action.",
    coverImage: null,
    previewLabel: "Business Landing Page",
    technologies: [
      { name: "HTML5", icon: "html5/E34F26" },
      { name: "CSS3", icon: "css3/1572B6" },
      { name: "JavaScript", icon: "javascript/F7DF1E" },
    ],
  },
  {
    title: "Analytics Dashboard Concept",
    category: "Dashboard UI",
    role: "Frontend Concept",
    description:
      "A dashboard concept focused on readable metrics, structured information, and a responsive interface.",
    coverImage: null,
    previewLabel: "Analytics Dashboard",
    technologies: [
      { name: "React", icon: "react/61DAFB" },
      { name: "TypeScript", icon: "typescript/3178C6" },
      { name: "Firebase", icon: "firebase/FFCA28" },
    ],
  },
];
