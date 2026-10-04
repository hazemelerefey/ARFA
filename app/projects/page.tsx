"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/content/site";

const filters = ["All", "Dashboard", "AI/ML", "Data"] as const;

export default function ProjectsIndex() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);
  return (
    <>
      <div style={{ height: 60, background: "var(--black)" }} />
      <h1 className="sr-only">Projects — {projects.length} case studies</h1>
      <div className="pj-filter" role="group" aria-label="Filter projects">
        {filters.map((f) => <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}{f === "All" ? ` · ${projects.length}` : ""}</button>)}
      </div>
      {list.map((p) => (
        <Link key={p.slug} href={`/projects/${p.slug}`} className="pj">
          <img src={p.image} alt="" loading="lazy" />
          <motion.div className="pj-copy" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-15% 0px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <p className="pj-kicker">{p.category} · {p.year}</p>
            <h2>{p.title}</h2>
            <p className="pj-sum">{p.summary}</p>
          </motion.div>
        </Link>
      ))}
    </>
  );
}
