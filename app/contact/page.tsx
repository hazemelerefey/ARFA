"use client";

import { useState, type FormEvent } from "react";
import { person } from "@/content/site";
import { Arrow, Reveal, Roll, Spark } from "@/components/motion";

const channels = [
  ["Email", person.email, `mailto:${person.email}`],
  ["WhatsApp", person.phone, person.whatsapp],
  ["LinkedIn", person.linkedinHandle, person.linkedin],
  ["GitHub", person.githubHandle, person.github],
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}\nEmail: ${d.get("email")}\nType: ${d.get("type")}\n\n${d.get("message")}`;
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(`Portfolio inquiry — ${d.get("type")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <section className="ct">
      <Reveal><h1>Let&apos;s connect <Spark /></h1><p className="ct-lede">Roles, contracts, consulting, or a quick question — outline what you have in mind. I reply within 24 hours.</p></Reveal>
      <div className="ct-grid">
        <Reveal>
          <form className="ct-form" onSubmit={submit}>
            <div className="row">
              <select className="field" name="type" defaultValue="" required aria-label="Type of inquiry">
                <option value="" disabled>Type of inquiry</option>
                <option>Full-time role</option><option>Contract project</option><option>Consulting</option><option>Just a question</option>
              </select>
              <input className="field" name="name" placeholder="Your name" autoComplete="name" required />
            </div>
            <input className="field" name="email" type="email" placeholder="Your email" autoComplete="email" required />
            <textarea className="field" name="message" placeholder="Your message" required />
            <button type="submit" className="ct-submit roll-host"><Roll>Submit</Roll><Arrow /><small>{sent ? "Your mail app should open with the message ready to send." : "Opens your mail app with the message drafted. Nothing is stored on this site."}</small></button>
          </form>
          <div className="ct-links" style={{ marginTop: 40 }}>
            {channels.map(([k, v, h]) => <a key={k} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"><span>{k}</span><span>{v}</span></a>)}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="ct-note">I take on a limited number of projects at a time. If it&apos;s a fit, I&apos;ll come back with next steps and a short written scope.</p>
          <div className="call-person" style={{ marginTop: 28 }}><img src={person.photo} alt="" /><div><b>{person.short}</b><span>{person.role} · {person.location}</span></div></div>
          <a href={person.whatsapp} target="_blank" rel="noopener noreferrer" className="pill" style={{ marginTop: 32 }}><Roll>Book a call on WhatsApp</Roll><Arrow /></a>
        </Reveal>
      </div>
    </section>
  );
}
