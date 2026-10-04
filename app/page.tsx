"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { certifications, engagements, expertise, faqs, featured, person, process, projects, stats } from "@/content/site";
import { Arrow, Counter, Reveal, Roll, Spark } from "@/components/motion";
import { CallCard, SectionHead } from "@/components/Section";
import "./home.css";

const EASE = [0.22, 1, 0.36, 1] as const;
const work = featured.map((s) => projects.find((p) => p.slug === s)!);

function Hero() {
  return (
    <section className="hero">
      <motion.img className="hero-img" src={person.photo} alt="Portrait of Ahmed Gamal Arfa" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: EASE }} />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-top">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: EASE }}>
          <p className="hero-tag"><span className="dot" />Available for work</p>
          <h1 className="hero-name">{person.name}</h1>
          <p className="hero-addr">AI &amp; Data Engineer<br />Cairo, Egypt<br />Remote · Contract · Full-time</p>
        </motion.div>
        <motion.div className="hero-list" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45, ease: EASE }}>
          <p className="hero-year"><span className="dot small" />2026</p>
          {["Applied AI", "Executive BI", "Data", "Delivery"].map((t) => <p key={t}>{t}</p>)}
        </motion.div>
      </div>
      <div className="hero-bottom">
        {[["INTELLIGENT SYSTEMS", "red"], ["BUILT TO", ""], ["SHIP & LAST", ""]].map(([t, c], i) => (
          <p key={t} className={`hero-line ${c}`}><motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.5 + i * 0.12, ease: EASE }}>{t}{i === 0 && <span className="hero-spark"><Spark /></span>}</motion.span></p>
        ))}
        <motion.p className="hero-credit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>{person.short}<br /><span>Notebooks are drafts. Products ship.</span></motion.p>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="work">
      <Reveal className="work-head"><h2 className="display upper">Selected projects</h2><p>Case studies in AI, ML and BI with measurable impact.</p></Reveal>
      <div className="work-grid">
        {work.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.08}>
            <Link href={`/projects/${p.slug}`} className="work-card">
              <img src={p.image} alt="" loading="lazy" />
              <span className="work-meta"><b>{p.title}</b><span>{p.category} · {p.year}</span></span>
            </Link>
          </Reveal>
        ))}
      </div>
      <Link href="/projects" className="work-more display upper"><Roll>More projects</Roll></Link>
    </section>
  );
}

function Credentials() {
  const top = certifications.filter((c) => c.featured);
  const items = [...top, ...top];
  return (
    <section className="creds">
      <Reveal className="creds-head"><h2 className="display upper">Credentials</h2><p>Verified training that never settled for good enough.</p></Reveal>
      <div className="creds-window" aria-label="Certificates">
        <div className="creds-track">{items.map((c, i) => <figure key={i} aria-hidden={i >= top.length}><img src={c.image} alt={i < top.length ? c.title : ""} loading="lazy" /></figure>)}</div>
      </div>
      <Reveal><p className="creds-note">From Microsoft and AWS to Stanford and Hugging Face.<br />{certifications.length} credentials, one consistent standard.</p></Reveal>
    </section>
  );
}

function Expertise() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setActive((a) => (a + 1) % expertise.length), 6000);
    return () => window.clearInterval(id);
  }, [active]);
  const item = expertise[active];
  return (
    <section className="section wrap">
      <SectionHead label="Expertise" sub="From raw data to decisions." lines={["I", "build systems.", "then I make them", "useful every day"]} dim={2} indent={[1]} />
      <div className="xp">
        <div className="xp-word" aria-hidden="true">
          <AnimatePresence mode="wait">
            <motion.p key={item.title} initial="hide" animate="show" exit="hide" variants={{ show: { transition: { staggerChildren: 0.025 } }, hide: { transition: { staggerChildren: 0.01 } } }}>
              {item.title.split(" ").map((word, w) => <span key={w} className="xp-w">{word.split("").map((ch, i) => <motion.span key={i} variants={{ hide: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.4, ease: EASE }}>{ch}</motion.span>)}</span>)}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="xp-side">
          <ul className="xp-list">
            {expertise.map((e, i) => <li key={e.title}><button type="button" className={i === active ? "on" : ""} onClick={() => setActive(i)} aria-pressed={i === active}><Roll>{e.title}</Roll></button></li>)}
          </ul>
          <p className="xp-text">{item.text}</p>
        </div>
      </div>
      <div className="xp-panel">
        <AnimatePresence mode="wait"><motion.img key={item.image + active} src={item.image} alt="" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: EASE }} /></AnimatePresence>
        <motion.span className="xp-progress" key={active} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 6, ease: "linear" }} />
      </div>
      <div className="xp-foot"><p>{item.items.map((t) => <span key={t}>{t}</span>)}</p><span className="xp-index">.{String(active + 1).padStart(2, "0")}</span></div>
    </section>
  );
}

function Recognition() {
  const [hero, ...rest] = [1, 2, 7, 8].map((i) => certifications[i]);
  return (
    <section className="section wrap rec">
      <SectionHead label="Recognition" sub="Trust continues." lines={["I didn't chase", "the certificates", "the work", "earned them"]} dim={2} />
      <div className="rec-grid">
        <Reveal className="rec-hero">
          <div><p className="rec-title">{hero.issuer} Certified</p><p className="rec-sub">Power BI Data Analyst Associate — {hero.date}</p></div>
          <p className="rec-note">One of {certifications.length} verified credentials.<br />Coursework backed by shipped dashboards.</p>
          <Link href="/about#credentials" className="rec-btn"><Roll>View credentials</Roll><Arrow /></Link>
          <img src={hero.image} alt={hero.title} />
        </Reveal>
        <div className="rec-list">
          {rest.map((c) => <Reveal key={c.title}><p className="rec-name">{c.issuer}</p><p className="rec-row"><span>{c.title}</span><span>{c.date}</span></p></Reveal>)}
        </div>
      </div>
      <div className="rec-copy">
        <Reveal><p className="rec-big">I take on fewer projects.</p><p className="rec-big">Each one gets full attention.</p></Reveal>
        <Reveal><p className="rec-para">Fewer projects means more attention. Every brief is a commitment to the decision behind it, not just the deliverable. Each engagement ends with a documented outcome and a business-impact number — recognition follows work that holds up.</p></Reveal>
      </div>
      <div className="stats">
        {stats.map((s) => (
          <Reveal key={s.label} className="stat">
            <div className="stat-bar"><motion.span initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: EASE }} /></div>
            <p className="stat-num"><Counter value={s.value} /><sup>{s.suffix}</sup></p>
            <div><p className="stat-label">{s.label}</p><p className="stat-text">{s.text}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const [i, setI] = useState(0);
  const step = (d: number) => setI((v) => (v + d + process.length) % process.length);
  return (
    <section className="section wrap">
      <SectionHead label="Process" sub="From question to impact." lines={["I don't start", "with models", "I start with the", "right questions"]} dim={2} />
      <div className="proc">
        <div className="proc-track" style={{ transform: `translateX(calc(${-i} * (var(--card) + 16px)))` }}>
          {process.map((p, n) => (
            <article key={p.title} className={`proc-card ${n === i ? "on" : ""}`}>
              <div className="proc-top"><h3>{p.title}</h3><span>/ {String(n + 1).padStart(2, "0")}</span></div>
              <p className="proc-line">{p.line}</p>
              <p className="proc-time"><span>Timeframe</span>{p.time}</p>
              <ul>{p.steps.map((s) => <li key={s}>{s}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="proc-nav"><button type="button" aria-label="Previous step" onClick={() => step(-1)}>←</button><button type="button" aria-label="Next step" onClick={() => step(1)}>→</button></div>
      </div>
      <CallCard kicker="I don't pitch. I have a conversation." line="Every project begins with a short discovery call. No commitment, no pressure." />
    </section>
  );
}

function Bento() {
  return (
    <section className="section wrap bento-sec">
      <SectionHead label="Approach" sub="Design with intent." lines={["Every dataset", "deserves", "thought, care", "and attention"]} dim={2} notes={["Built around the decision, not the dashboard count.", "Every project gets the same standard — no exceptions."]} />
      <div className="bento">
        <Reveal className="b-card b-founder">
          <p className="b-h">From the Engineer</p>
          <p className="b-t">A notebook is a draft, a dashboard is a product, and an evaluation report is a contract. That framing shapes how I scope, build, and ship.</p>
          <p className="b-sign">{person.name}<span>{person.role}</span></p>
        </Reveal>
        <Reveal className="b-card b-dark" delay={0.08}><p className="b-logo">ARFA®</p><p className="b-num"><Counter value={15} />+</p><p className="b-h2">Projects<br />Shipped</p><p className="b-small">Across healthcare, retail, HR and finance analytics.</p></Reveal>
        <Reveal className="b-card b-clear" delay={0.16}><p className="b-h2">Clear Scope.<br /><span className="red">Full Visibility.</span></p><p className="b-small">Scope, data sources and impact metric are agreed before anything is built.</p></Reveal>
        <Reveal className="b-card b-img"><img src="/media/project-hospital-flow.png" alt="" /><p className="b-h2">Executive BI</p><p className="b-small">Designed for one decision, not many.</p></Reveal>
        <Reveal className="b-card b-wide" delay={0.08}><div><p className="b-h2">Flexible Engagements</p><p className="b-small">Full-time roles, scoped contracts or short consulting.</p><Link href="/#engage" className="rec-btn light"><Roll>View options</Roll><Arrow /></Link></div><img src="/media/project-superstore.png" alt="" /></Reveal>
        <Reveal className="b-card b-red" delay={0.16}><p className="b-h">Best Accuracy</p><p className="b-num"><Counter value={97} /><sup>%</sup></p><p className="b-small">Calibrated probabilities, not just a headline number.</p></Reveal>
        <Reveal className="b-card b-metric"><p className="b-h">Reporting Time</p><p className="b-num sm">−<Counter value={60} /><sup>%</sup></p><p className="b-small">Weekly prep replaced by one dashboard.</p></Reveal>
        <Reveal className="b-card b-metric" delay={0.08}><p className="b-h">Time to Hire</p><p className="b-num sm">−<Counter value={22} /><sup>%</sup></p><p className="b-small">Recruitment funnel bottlenecks surfaced.</p></Reveal>
      </div>
      <CallCard kicker="Questions about your data?" line="Talk directly to the engineer who handles the work from audit to final delivery." />
    </section>
  );
}

function CaseStory() {
  const p = projects[0];
  return (
    <section className="section wrap">
      <SectionHead label="Case Story" sub="Results, delivered." lines={["When", "the data is right", "the numbers follow"]} dim={2} />
      <div className="story">
        <Reveal className="story-copy"><p className="story-tag">{p.category} · {p.year}</p><h3>{p.title}</h3><p>{p.overview} {p.impact}</p><Link href={`/projects/${p.slug}`} className="rec-btn light"><Roll>View case study</Roll><Arrow /></Link></Reveal>
        <Reveal className="story-img" delay={0.1}><img src={p.image} alt={p.title} /></Reveal>
        <Reveal className="story-metrics"><p className="story-h">Project metrics <span>From spreadsheets to one cockpit</span></p><div>{p.metrics.map(([v, l]) => <p key={l}><b>{v}</b><span>{l}</span></p>)}</div></Reveal>
        <Reveal className="story-quote" delay={0.1}><p className="story-tag">Outcome</p><p>“{p.results[0]}. {p.results[2]}.”</p><p className="story-by"><img src={person.photo} alt="" />{person.short}<span>{p.role}</span></p></Reveal>
      </div>
    </section>
  );
}

function Engage() {
  return (
    <section className="section wrap" id="engage">
      <SectionHead label="Work with me" sub="Value defined clearly." lines={["The right scope", "builds", "the right system", "and the right trust"]} dim={2} notes={["What we agree is what gets built.", "Scope and impact metric locked before anything moves."]} />
      <div className="plans">
        {engagements.map((e, i) => (
          <Reveal key={e.name} className="plan" delay={i * 0.08}>
            <h3>{e.name}</h3>
            <p className="plan-dur"><span>Duration:</span>{e.duration}</p>
            <ul>{e.items.map((t) => <li key={t}>{t}</li>)}</ul>
            <p className="plan-note">{e.note}</p>
            <Link href="/contact" className="pill"><Roll>{e.cta}</Roll><Arrow /></Link>
          </Reveal>
        ))}
      </div>
      <CallCard kicker="Not sure which fits?" line="Tell me about the decision you need to support, and I'll suggest the right shape for the work." cta="Let's talk" />
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section wrap">
      <SectionHead label="FAQ" sub="Before we start." lines={["What", "you need to know", "before we start"]} dim={2} />
      <div className="faq">
        {faqs.map(([q, a], i) => (
          <Reveal key={q} className="faq-item">
            <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><span>{q}</span><span className="faq-plus" aria-hidden="true">{open === i ? "−" : "+"}</span></button>
            <AnimatePresence initial={false}>{open === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} style={{ overflow: "hidden" }}><p>{a}</p></motion.div>}</AnimatePresence>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Credentials />
      <Expertise />
      <Recognition />
      <Process />
      <Bento />
      <CaseStory />
      <Engage />
      <Faq />
    </>
  );
}
