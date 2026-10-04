import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { person, projects } from "@/content/site";
import { Arrow, Lines, Reveal, Roll, Spark } from "@/components/motion";
import { CallCard } from "@/components/Section";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.summary } : {};
}

function Block({ label, lines, lead, children }: { label: string; lines: string[]; lead: string; children: React.ReactNode }) {
  return (
    <section className="section wrap">
      <Reveal><p className="eyebrow"><Spark />{label}</p></Reveal>
      <Lines className="statement" lines={lines} dimCount={1} indent={[1]} />
      <div className="pd-cols"><Reveal><p className="lead">{lead}</p></Reveal><Reveal className="body" delay={0.1}>{children}</Reveal></div>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return (
    <>
      <section className="pd-hero">
        <img src={p.image} alt="" />
        <div className="pd-hero-in">
          <Reveal><h1>{p.title}</h1><p className="pd-sum">{p.summary}</p></Reveal>
          <Reveal className="pd-side" delay={0.15}><p>{p.overview}</p></Reveal>
        </div>
      </section>

      <section className="pd-meta">
        <div className="pd-meta-head"><div><p>{p.category} · {p.year}</p><h2>{p.title}</h2></div><p>{person.short}</p></div>
        {[["Role", [p.role]], ["Stack", p.tags], ["Dataset", [p.dataset]], ["Architecture", [p.architecture]]].map(([k, v]) => (
          <Reveal key={k as string} className="pd-row"><span>{k as string}</span><span>{(v as string[]).map((x) => <span key={x}>{x}</span>)}</span></Reveal>
        ))}
      </section>

      {p.github && <a className="pd-gh" href={person.github} target="_blank" rel="noopener noreferrer"><Roll>View on GitHub</Roll><Arrow /></a>}

      <div className="pd-nums">{p.metrics.map(([v, l]) => <Reveal key={l}><b>{v}</b><span>{l}</span></Reveal>)}</div>

      <div className="pd-figure"><Reveal><img src={p.image} alt={p.title} /></Reveal></div>

      <Block label="Challenge" lines={["The problem", "behind the work"]} lead={p.problem}>
        <p>{p.overview}</p>
        <ul className="pd-list">{p.challenges.map((c) => <li key={c}>{c}</li>)}</ul>
      </Block>

      <Block label="Approach" lines={["The method", "built to last"]} lead={p.architecture}>
        <ul className="pd-list">{[...p.methodology, ...p.implementation].map((c) => <li key={c}>{c}</li>)}</ul>
      </Block>

      <section className="pd-split">
        <div style={{ background: "#fff" }}>
          <Reveal><p className="eyebrow"><Spark />Results</p><h3 style={{ marginTop: 20 }}>{p.results[0]}.</h3></Reveal>
          <ul className="pd-list">{p.results.slice(1).concat(p.lessons.map((l) => `Lesson: ${l}`)).map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
        <div className="dark"><Reveal><p>{p.impact}</p></Reveal></div>
      </section>

      <nav className="pd-next" aria-label="More projects">
        <Link href={`/projects/${prev.slug}`}><img src={prev.image} alt="" /><span><small>Previous</small><b>{prev.title}</b></span></Link>
        <Link href={`/projects/${next.slug}`}><img src={next.image} alt="" /><span><small>Next</small><b>{next.title}</b></span></Link>
      </nav>

      <section className="wrap" style={{ paddingBottom: 100 }}>
        <CallCard kicker="Building something similar?" line="Tell me about the decision it should support, and let's scope it together." cta="Start a conversation" />
        <p style={{ marginTop: 32 }}><Link href="/projects" className="roll-host" style={{ display: "inline-flex", gap: 12, alignItems: "center" }}><Roll>All projects</Roll><Arrow /></Link></p>
      </section>
    </>
  );
}
