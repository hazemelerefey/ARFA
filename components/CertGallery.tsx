"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { certifications } from "@/content/site";

/** Filterable certificate grid; cards with a public record link to it. */
export default function CertGallery() {
  const issuers = useMemo(() => {
    const count = new Map<string, number>();
    certifications.forEach((c) => count.set(c.issuer, (count.get(c.issuer) ?? 0) + 1));
    return ["All", ...[...count.entries()].sort((a, b) => b[1] - a[1]).map(([k]) => k)];
  }, []);
  const [issuer, setIssuer] = useState("All");
  const list = certifications.filter((c) => issuer === "All" || c.issuer === issuer);
  return (
    <>
      <div className="cert-filter" role="group" aria-label="Filter credentials by issuer">
        {issuers.map((i) => <button key={i} type="button" aria-pressed={issuer === i} onClick={() => setIssuer(i)}>{i}{i === "All" ? ` · ${certifications.length}` : ""}</button>)}
      </div>
      <motion.div layout className="cert-grid">
        <AnimatePresence mode="popLayout">
          {list.map((c) => {
            const body = <><img src={c.image} alt={c.title} loading="lazy" /><div><small>{c.issuer}{c.via ? ` · via ${c.via}` : ""} · {c.date}</small><b>{c.title}</b>{c.verify && <span className="cert-verify">Verify credential ↗</span>}</div></>;
            return (
              <motion.div layout key={c.title} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35 }}>
                {c.verify ? <a className="cert" href={c.verify} target="_blank" rel="noopener noreferrer">{body}</a> : <div className="cert">{body}</div>}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
