import type { Metadata } from "next";
import { careerHistory } from "app/lib/data";
export const metadata: Metadata = {
  title: "About Me",
  description:
    "Cloud Operations Engineer with a background in process automation, team leadership, and hands-on troubleshooting across telecom and production systems.",
};

export default async function About() {
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert mt-[-1.25em]">
      <h2>
        From cable lines to cloud pipelines - solving problems end-to-end. 😎
      </h2>

      <section>
        <h2>Core skills</h2>
        <span className="font-bold">Automation & Scripting: </span>JavaScript,
        Bash, Python, AWS SDK <br />
        <span className="font-bold">OS & Networking: </span>Linux, TCP/IP, DNS,
        HTTP(S), TLS <br />
        <span className="font-bold">Cloud: </span>AWS - S3, DynamoDB, Lambda,
        CloudWatch, IAM, WAF <br />
        <span className="font-bold">Delivery & Infrastructure: </span>
        Kubernetes, Docker, GitHub Actions
        <br />
        <span className="font-bold">Monitoring & Observability: </span>
        CloudWatch, Prometheus, Grafana <br />
      </section>

      <section>
        <h2>Career history</h2>
        <div className="flex flex-col">
          {careerHistory.map((job) => (
            <div key={job.role + job.company}>
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <span className="font-bold">{job.role}</span>
                  <br className="sm:hidden" /> @ {job.company}
                </div>
                <span className="text-gray-600 dark:text-gray-300">
                  {job.dates}
                </span>
              </div>
              <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
