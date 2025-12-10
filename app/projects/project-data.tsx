export interface Project {
  title: string;
  description: string;
  url: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Promo+ Toolkit",
    description: "Cross-platform Electron.js internal toolkit",
    url: "/blog/promo-toolkit",
    featured: true,
  },
  {
    title: "Restaurant Empire",
    description: "<Prototype> Full-stack Restaurant website",
    url: "https://restaurant-empire-demo.vercel.app/",
    featured: false,
  },
  {
    title: "Recipes",
    description: "<Prototype> Personal cooking journal",
    url: "https://recipes.gogov.dev/",
    featured: false,
  },
];
