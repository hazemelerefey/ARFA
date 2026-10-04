import type { Metadata } from "next";
import Link from "next/link";
import { about, certifications, experience, person, stats } from "@/content/site";
import { Arrow, Counter, Reveal, Roll, Spark } from "@/components/motion";
import { CallCard, SectionHead } from "@/components/Section";
import CertGallery from "@/components/CertGallery";

export const metadata: Metadata = { title: "About", description: about.sub };

export default function About() {
  return (
    <>
      <section className="ab-hero">
        <img src={person.photo} alt="Ahmed Gamal Arfa" />
        <Reveal><p className="ab-kick">I shape the data.<br />Then build the decisions around it.</p><h1>I am <span>Ahmed Arfa</span></h1></Reveal>
        <Reveal className="ab-loc" delay={0.2}><div><small>{person.location} · Available for work</small><p>An AI &amp; Data Engineer building systems that survive Monday morning.</p></div></Reveal>
      </section>

      <section className="ab-split">
        <div>
          <Reveal><p className="big">{about.lead}<br /><span>Storyteller of the numbers.</span></p></Reveal>
          <Reveal><p className="muted" style={{ maxWidth: 420, marginTop: "auto" }}>{about.sub}</p></Reveal>
        </div>
        <div style={{ padding: 0 }}><img src="/media/project-hospital-flow.png" alt="Hospital Patient Flow dashboard" style={{ objectFit: "contain", background: "var(--mist)", padding: 24 }} /></div>
      </section>

      <section className="ab-intro">
        <Reveal><p className="brand">ARFA®</p><p className="muted" style={{ marginTop: 8 }}>Notebooks are drafts. Products ship.</p></Reveal>
        <div>
          <Reveal><p className="rec-big" style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.06em", color: "var(--gray-1)", padding: "10px 0", borderBottom: "1px solid var(--line)" }}>I take on fewer projects.</p><p style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.06em", color: "var(--gray-1)", padding: "10px 0", borderBottom: "1px solid var(--line)" }}>Each one gets full attention.</p></Reveal>
          <Reveal className="body" delay={0.1}><div style={{ display: "grid", gap: 16, marginTop: 28 }}>{about.paragraphs.map((t) => <p key={t}>{t}</p>)}</div></Reveal>
          <div className="ab-facts">{about.facts.map(([k, v]) => <Reveal key={k}><small>{k}</small><p>{v}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="ab-nums">
        <Reveal><h2>A closer look at<br />the numbers.</h2><p style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 40, fontSize: 12, textTransform: "uppercase", letterSpacing: 0 }}><span style={{ width: 14, height: 14, color: "var(--red)", display: "inline-block" }}><Spark /></span>Shipped, measured, documented</p></Reveal>
        <div className="ab-nums-grid">{stats.map((s) => <Reveal key={s.label}><b><Counter value={s.value} /><sup>{s.suffix}</sup></b><span>{s.label}</span></Reveal>)}</div>
      </section>

      <section className="section wrap">
        <SectionHead label="Values" sub="How I work." lines={["Precision", "over speed", "measured", "or it didn't ship"]} dim={2} />
        <div className="cards4">{about.values.map(([t, d], i) => <Reveal key={t} delay={i * 0.06}><span className="n">/ {String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </section>

      <section className="section wrap" id="experience" style={{ background: "#fff" }}>
        <SectionHead label="Experience" sub="A timeline of shipped work." lines={["From foundations", "to applied AI", "roles and outcomes"]} dim={2} />
        <div className="timeline">
          {experience.map((e) => (
            <Reveal key={e.role} className="tl">
              <div className="tl-when"><span>{e.period}</span><b>● {e.status}</b></div>
              <div><h3>{e.role}</h3><p className="org">{e.org}</p><ul>{e.points.map((t) => <li key={t}>{t}</li>)}</ul>{e.tags.length > 0 && <p style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 18 }}>{e.tags.map((t) => <span key={t} className="chip">{t}</span>)}</p>}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <SectionHead label="Learning roadmap" sub="What comes next." lines={["Foundations", "applied AI", "systems", "and what's next"]} dim={2} />
        <div className="cards4">{about.roadmap.map(([t, items], i) => <Reveal key={t} delay={i * 0.06}><span className="n">/ {String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><ul>{items.map((x) => <li key={x}>{x}</li>)}</ul></Reveal>)}</div>
        <div className="skills">{about.skills.map(([k, v]) => <Reveal key={k}><b>{k}</b><span>{v}</span></Reveal>)}</div>
      </section>

      <section className="section wrap" id="credentials" style={{ background: "#fff" }}>
        <SectionHead label="Credentials" sub={`${certifications.length} verified credentials.`} lines={["Certifications", "and continuous", "learning"]} dim={2} />
        <CertGallery />
      </section>

      <section className="wrap" style={{ paddingBottom: 100 }}>
        <CallCard kicker="Want the long version?" line="See what I've shipped, or start a conversation about what you're building next." cta="Start a conversation" />
        <p style={{ marginTop: 32 }}><Link href="/projects" className="roll-host" style={{ display: "inline-flex", gap: 12, alignItems: "center" }}><Roll>View all projects</Roll><Arrow /></Link></p>
      </section>
    </>
  );
}
