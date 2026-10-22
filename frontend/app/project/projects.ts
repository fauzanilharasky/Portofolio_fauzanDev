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
      "professional corporate website concept presenting notary services with clear navigation and a responsive layout.",
    coverImage: "/assets/images/projects/Notaris.png",
    previewLabel: "Corporate Website",
    technologies: [
      { name: "React", icon: "react/61DAFB" },
      { name: "TypeScript", icon: "typescript/3178C6" },
      { name: "Next.js", icon: "nextdotjs/ffff" },
      { name: "Tailwind CSS", icon: "tailwindcss/06B6D4" },
    ],
  },
  {
    title: "Onicars: Car Rental Service Application",
    category: "Custom Mobile App",
    role: "Mobile Development",
    description:
      "mobile application concept for a car rental service, allowing users to browse available vehicles, book rentals, and manage their reservations.",
    coverImage: "/assets/images/projects/onicars.png",
    previewLabel: "Car Rental Application",
    technologies: [
      { name: "Flutter", icon: "flutter/02569B" },
      { name: "Dart", icon: "dart/0175C2" },
      { name: "Firebase", icon: "firebase/FFCA28" },
      { name: "Google Cloud", icon: "googlecloud/4285F4" },
    ],
  },
  {
    title: "Base Incubator Learning Course",
    category: "E-Learning Website",
    role: "Web Development",
    description:
      "landing page concept that presents an incubator program and helps visitors explore its services.",
    coverImage: "/assets/images/projects/learning.png",
    previewLabel: "E-Learning Website",
    technologies: [
      { name: "PHP", icon: "php/777BB4" },
      { name: "Laravel", icon: "laravel/FF2D20" },
      { name: "Tailwind CSS", icon: "tailwindcss/06B6D4" },
      { name: "JavaScript", icon: "javascript/F7DF1E" },
      { name: "MySQL", icon: "mysql/4479A1" },
    ],
  },
  {
    title: "Mechanical Completion: on-site construction project monitoring",
    category: "Management System",
    role: "Full-stack Development",
    description:
      "website concept for managing completion records, as well as facilitating the monitoring of information and the processes of ongoing projects.",
    coverImage: "/assets/images/projects/mechanical.jpg",
    previewLabel: "Management System",
    technologies: [
      { name: "JavaScript", icon: "javascript/F7DF1E" },
      { name: "TypeScript", icon: "typescript/3178C6" },
      { name: "Next.js", icon: "nextdotjs/ffff" },
      { name: "nestjs", icon: "nestjs/E0234E" },
      { name: "PostgreSQL", icon: "postgresql/4169E1" },
      { name: "nginx", icon: "nginx/009639" },
    ],
  },
  {
    title: "Top Websites: Web development service profile",
    category: "Custom Website",
    role: "Web Development Service",
    description:
      "profile website concept for a web development service, showcasing the services offered and previous projects.",
    coverImage: "/assets/images/projects/Topwebsite.png",
    previewLabel: "Business Landing Page",
    technologies: [
      { name: "Next.js", icon: "nextdotjs/ffff" },
      { name: "Tailwind CSS", icon: "tailwindcss/06B6D4" },
      { name: "JavaScript", icon: "javascript/F7DF1E" },
    ],
  },
  {
    title: "Inforsys: Software company profile",
    category: "Custom Website",
    role: "Frontend Development",
    description:
      "A website concept for showcasing a software company's profile, services, and portfolio.",
    coverImage: "/assets/images/projects/inforsys.jpg",
    previewLabel: "Company Profile",
    technologies: [
      { name: "JavaScript", icon: "javascript/F7DF1E" },
      { name: "Angular", icon: "angular/E23237" },
      { name: "Tailwind CSS", icon: "tailwindcss/06B6D4" },
      { name: "CSS", icon: "css/1572B6" },
    ],
  },
  {
    title: "Fauzan.dev: Personal Portfolio",
    category: "Portfolio Website",
    role: "Full-stack Development",
    description:
      "responsive portfolio website to introduce my work, experience, and services in one place.",
    coverImage: "/assets/images/portfolio.png",
    previewLabel: "Personal Portfolio",
    technologies: [
      { name: "JavaScript", icon: "javascript/F7DF1E" },
      { name: "Next.js", icon: "nextdotjs/ffff" },
      { name: "React", icon: "react/61DAFB" },
      { name: "TypeScript", icon: "typescript/3178C6" },
      { name: "PostgreSQL", icon: "postgresql/4169E1" },
    ],
  },
];
