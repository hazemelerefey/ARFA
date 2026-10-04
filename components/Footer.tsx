"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { person } from "@/content/site";
import { Arrow, Roll, Spark } from "./motion";

export default function Footer() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Hi Ahmed,\n\nPlease keep me posted on new work and writing.\n\n${data.get("name") ?? ""}\n${data.get("email") ?? ""}`;
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent("Stay in touch")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <footer className="footer">
      <div className="footer-word" aria-hidden="true">ARFA</div>
      <p className="footer-tag">I build systems that <span className="red">ship and get used</span>, not just demoed</p>
      <div className="footer-grid">
        <div className="footer-news">
          <h3>Stay in touch <small>New case studies and field notes on AI, data and BI.</small></h3>
          <form onSubmit={submit}>
            <input className="field" name="name" placeholder="Your Name" autoComplete="name" required />
            <input className="field" name="email" type="email" placeholder="Your Email" autoComplete="email" required />
            <button type="submit" className="roll-host" style={{ display: "flex", alignItems: "center", gap: 16, background: "none", border: 0, cursor: "pointer", fontSize: 20, textAlign: "left" }}>
              <Roll>Subscribe</Roll><Arrow />
              <span style={{ fontSize: 10, textTransform: "uppercase", color: "var(--gray-2)", letterSpacing: 0, maxWidth: 220 }}>{sent ? "Your mail app should open with a draft." : "Opens your mail app with a short note. Nothing is stored."}</span>
            </button>
          </form>
        </div>
        <div className="footer-cols">
          <div><h4>Navigation</h4>{[["/", "Home"], ["/projects", "Projects"], ["/about", "About"], ["/lab", "Lab (Writing)"], ["/contact", "Contact"]].map(([h, l]) => <Link key={h} href={h}><Roll>{l}</Roll></Link>)}</div>
          <div><h4>Legal</h4>{[["/privacy-policy", "Privacy Policy"], ["/terms-of-service", "Terms of Service"], ["/disclaimer", "Disclaimer"], ["/404", "404"]].map(([h, l]) => <Link key={h} href={h}><Roll>{l}</Roll></Link>)}</div>
          <div><h4>Social</h4>{[[person.linkedin, "LinkedIn"], [person.github, "GitHub"], [person.whatsapp, "WhatsApp"], [`mailto:${person.email}`, "Email"]].map(([h, l]) => <a key={h} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"><Roll>{l}</Roll></a>)}</div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p className="who"><span className="red">Ahmed Arfa</span> is an AI &amp; Data Engineer based in Cairo.</p>
          <p className="muted" style={{ fontSize: 13, marginTop: 14, maxWidth: 260 }}>ML pipelines, executive BI and SQL foundations, designed and shipped end to end.</p>
        </div>
        <div>
          <a className="mail" href={`mailto:${person.email}`}>{person.email.split("@")[0]}<span>@{person.email.split("@")[1]}</span></a>
          <p style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.05em", marginTop: 8 }}><a href={person.whatsapp} target="_blank" rel="noopener noreferrer">{person.phone}</a></p>
          <div className="footer-legal"><span>© 2026 {person.name}. All rights reserved.</span><span style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ width: 14, height: 14, color: "var(--red)", display: "inline-block" }}><Spark /></span>Designed by Hazem Elerefy</span></div>
        </div>
      </div>
      <div className="footer-top"><button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 2 2 16h14L9 2Z" stroke="currentColor" strokeWidth="1.4" /></svg></button></div>
    </footer>
  );
}
