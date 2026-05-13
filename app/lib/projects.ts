export const projects = [
  {
    title: "Kubernetes Homelab",
    featured: true,
    image: {
      src: "/server.svg",
      alt: "logo",
      width: 25,
      height: 25,
    },
    description:
      "Multi-environment K3s cluster running self-hosted services on multiple machines. TrueNAS providing persistant storage.",
    stack: [
      "K3s",
      "FluxCD",
      "SOPS",
      "Cilium",
      "Kyverno",
      "Tailscale",
      "Cloudflare",
      "Terraform",
      "Ansible",
      "Fedora",
      "QEMU/KVM",
      "TrueNAS",
      "Prometheus",
      "Grafana",
      "It's a long list..."
    ],
    links: [
      {
        label: "Blog series",
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
      "Cross-platform Electron.js application that standardizes production automation workflows. Built for The Coca-Cola Company.",
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
    description: "Personal cooking journal. A long-term work-in-progress.",
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
