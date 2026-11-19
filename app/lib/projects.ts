export const projects = [
  {
    title: "Homelab Evolution",
    featured: true,
    archived: false,
    image: {
      src: "/k3s.svg",
      alt: "logo",
      width: 25,
      height: 25,
    },
    description:
      "The 3rd Edition of my homelab. 3 Proxmox nodes, end-to-end declarative IaC and GitOps Kubernetes via k3s and Flux.",
    stack: [
      "Proxmox",
      "K3s",
      "Flux",
      "Terraform",
      "Ansible",
      "Traefik",
      "Cloudflare",
      "Tailscale",
      "SOPS",
      "Debian",
      "TrueNAS",
      "More..."
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kristiangogov/homelab-evolution",
      },
    ],
  },
  {
    title: "Kubernetes Homelab",
    featured: false,
    archived: true,
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
    archived: true,
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
];
