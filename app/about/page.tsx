import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about my background and journey toward DevOps.",
};

export default async function About() {
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert mt-[-1.25em]">
      <section>
        <h1 className="mb-8 text-2xl font-medium">hey!</h1>
        <p>
          I'm <span className="font-bold">Kristian Gogov</span>, a Global
          Operations Engineer @ The Coca-Cola Company.
        </p>
        <p>
          I support the global digital promotions platform working with regional
          teams to ensure reliability, scalability, and automation across a
          serverless AWS environment. I build internal tools and automation
          scripts to streamline workflows and reduce manual effort.
        </p>
        <p>
          I'm actively expanding my skills in DevOps and cloud technologies,
          with a current focus on Infrastructure as Code and container
          orchestration:{" "}
          <span className="font-bold">Terraform, Ansible, and Kubernetes.</span>
        </p>
      </section>
      <section>
        <h3>what i'm good at</h3>
        <ul>
          <li>
            <span className="font-bold">Automation & Scripting:</span>{" "}
            JavaScript, Python, Bash, AWS SDK
          </li>
          <li>
            <span className="font-bold">Cloud:</span> AWS - S3, DynamoDB,
            Lambda, CloudWatch, IAM, WAF
          </li>
          <li>
            <span className="font-bold">OS & Networking:</span> Linux, TCP/IP,
            Forward/Reverse Proxy, DNS, Firewalls, TLS/SSL, HTTP/S
          </li>
          <li>
            <span className="font-bold">Containers & Orchestration:</span>{" "}
            Docker, Docker Compose, Kubernetes*
          </li>
          <li>
            <span className="font-bold">CI/CD & IaC:</span> GitHub Actions,
            Jenkins*, Terraform*, Ansible*
          </li>
          <li>
            <span className="font-bold">Monitoring & Observability:</span>{" "}
            CloudWatch, X-Trace, Prometheus, Grafana
          </li>
          <li>
            <span className="font-bold">Various Tools:</span> Git, GitHub,
            Next.js, Electron.js, VirtualBox, Postman etc.
          </li>
        </ul>
        <blockquote className="border-l-2 italic">
          * Currently improving
        </blockquote>
      </section>
      <section>
        <h3>what i love tinkering with</h3>
        <ul>
          <li>
            <span className="font-bold">JavaScript:</span> Electron.js, Next.js,
            Node.js, everything.js. Unlike most people, I actually like
            JavaScript and all its quirks 😵‍💫
          </li>
          <li>
            <span className="font-bold">Linux:</span> I'm increasingly immersing
            in the penguin universe. Thanks Microsoft.
          </li>
          <li>
            <span className="font-bold">Self-hosting:</span> Nextcloud, Seafile,
            Immich, Plex, Pi-Hole... Shame I don't have enough time to sink
            here, I'm addicted. 
          </li>
        </ul>
      </section>
      <section>
        <h3>career history</h3>
        <p>
          <span className="text-xs mr-[10px]">2021 - 2023</span> Prepress Team Lead @ DSN
          <br />
          <span className="text-xs mr-[12px]">2018 - 2021</span> Prepress Specialist @ DSN
          <br />
          <span className="text-xs mr-[10px]">2014 - 2018</span> Telecommunications
          Technician @ A1 Bulgaria / blizoo
        </p>
      </section>
    </article>
  );
}
