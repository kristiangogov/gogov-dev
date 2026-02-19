export interface Project {
  title: string;
  description: string;
  url: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Kubernetes Homelab",
    description: "K3s cluster for self-hosted services",
    url: "https://github.com/kristiangogov/homelab",
    featured: true,
  },
  {
    title: "Promo+ Toolkit",
    description: "Cross-platform Electron.js internal toolkit",
    url: "/blog/promo-toolkit",
    featured: false,
  },
  {
    title: "Restaurant Empire",
    description: "Full-stack Restaurant website",
    url: "https://restaurant-empire-demo.vercel.app/",
    featured: false,
  },
  {
    title: "Recipes",
    description: "<WIP> Personal cooking journal",
    url: "https://recipes.gogov.dev/",
    featured: false,
  },
];
