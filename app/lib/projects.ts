export const projects = [
  {
    title: "Kubernetes Homelab",
    featured: true,
    image: {
      src: "/k3s.svg",
      alt: "logo",
      width: 25,
      height: 25,
    },
    description:
      "Multi-environment K3s cluster running self-hosted services on multiple machines with a focus on Total Reproducibility and Environment Isolation.",
    stack: [
      "K3s",
      "FluxCD",
      "SOPS",
      "Cilium",
      "Tailscale",
      "NGINX",
      "Terraform",
      "Ansible",
      "Fedora",
      "QEMU/KVM",
      "Prometheus",
      "Grafana",
    ],
    links: [
      {
        label: "Read more",
        href: "/blog/homelab-initial-setup",
      },
      {
        label: "GitHub",
        href: "https://github.com/kristiangogov/homelab",
      },
    ],
  },
  {
    title: "Promo+ Toolkit",
    featured: false,
    image: {
      src: "/promo-plus-toolkit/icon.png",
      alt: "logo",
      width: 25,
      height: 25,
    },
    description:
      "Cross-platform Electron.js application that standardizes production automation workflows.",
    stack: [
      "Electron.js",
      "React.js",
      "Node.js",
      "Next.js (documentation)",
      "AWS SDK",
    ],
    links: [
      {
        label: "Read more",
        href: "/blog/promo-toolkit",
      },
      {
        label: "Documentation",
        href: "https://promo-plus-docs.vercel.app/docs/getting-started/introduction",
      },
    ],
  },
  {
    title: "Recipes",
    featured: false,
    image: {
      src: "/recipes.svg",
      alt: "logo",
      width: 25,
      height: 25,
    },
    description: "<Work in Progress> Personal cooking journal.",
    stack: [
      "React.js",
      "Redux.js",
      "Netlify Serverless Functions",
      "Contentful CMS",
    ],
    links: [
      {
        label: "Live",
        href: "https://recipes.gogov.dev/recipes",
      },
      {
        label: "GitHub",
        href: "https://github.com/kristiangogov/recipes",
      },
    ],
  },
//   {
//     title: "Restaurant Empire",
//     featured: false,
//     description: "Full-stack restaurant website prototype.",
//     stack: ["React.js", "Express.js", "Node.js", "MongoDB"],
//     links: [
//       {
//         label: "Live Demo",
//         href: "https://restaurant-empire-demo.vercel.app/",
//       },
//       {
//         label: "GitHub Front-end",
//         href: "https://github.com/kristiangogov/re_client",
//       },
//       {
//         label: "GitHub API",
//         href: "https://github.com/kristiangogov/re_server",
//       },
//     ],
//   },
];
