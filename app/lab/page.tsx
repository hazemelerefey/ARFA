import type { Metadata } from "next";
import Link from "next/link";
import { articles, person } from "@/content/site";
import { Reveal, Spark } from "@/components/motion";

export const metadata: Metadata = { title: "Lab", description: "Writing on AI, data, and the craft — field notes from real engagements." };

export default function Lab() {
  return (
    <>
      <div className="page-title"><Reveal><h1>The Lab</h1><p>Field notes on AI, data, and the craft of shipping.</p></Reveal></div>
      <div className="lab-list">
        {articles.map((a) => (
          <Reveal key={a.slug}>
            <Link href={`/lab/${a.slug}`} className="lab-item">
              <div className="copy">
                <p className="date"><Spark />{a.date} · {a.topic} · {a.read}</p>
                <h2>{a.title}</h2>
                <p className="by">by {person.name}</p>
                <p className="ex">{a.excerpt}</p>
              </div>
              <div className="media"><img src={a.image} alt="" loading="lazy" /></div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
