import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about my background and journey toward DevOps.",
};

export default async function About() {
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert mt-[-1.25em]">
      <section>
        <p>
          I'm currently working @{" "}
          <span className="font-bold">The Coca-Cola Company</span>, where I
          designed and built{" "}
          <Link href="/blog/promo-toolkit">
            <span className="font-bold">Promo+ Toolkit</span>
          </Link>
          , a cross-platform desktop application used by operations teams
          globally to automate repetitive tasks and reduce errors. I also
          automate day-to-day operational tasks, handle incident management and
          monitoring, and test and validate releases before they hit production.
        </p>
        <p>
          In my free time I love tinkering with my homelab where I'm running a
          K3s cluster, managing everything remotely via SSH. Currently hosting
          my media collection via Jellyfin and building out observability with
          k9s - learning the operational side of Kubernetes by breaking things
          and fixing them in a real environment.
        </p>
      </section>
      <section>
        <h3>core skills</h3>
        <span className="font-bold">Automation & Scripting:</span> JavaScript,
        Bash, Python, AWS SDK <br />
        <span className="font-bold">OS & Networking:</span> Linux, TCP/IP, DNS,
        HTTP(S), TLS <br />
        <span className="font-bold">Cloud:</span> AWS - S3, DynamoDB, Lambda,
        CloudWatch, IAM, WAF <br />
        <span className="font-bold">Delivery & Infrastructure:</span>{" "}
        Kubernetes, Docker, GitHub Actions
        <br />
        <span className="font-bold">Monitoring & Observability:</span>{" "}
        CloudWatch, X-Trace, Prometheus, Grafana <br />
      </section>
      <section>
        <h3>career history</h3>
        <p>
          <span className="text-xs mr-[10px]">2021 - 2023</span> Prepress Team
          Lead @ <span className="font-bold">DSN</span>
          <br />
          <span className="text-xs mr-[12px]">2018 - 2021</span> Prepress
          Specialist @ <span className="font-bold">DSN</span>
          <br />
          <span className="text-xs mr-[10px]">2014 - 2018</span>{" "}
          Telecommunications Technician @ <span className="font-bold">A1 Bulgaria / blizoo</span>
        </p>
      </section>
    </article>
  );
}
