import Link from "next/link";
import { person } from "@/content/site";
import { Arrow, Lines, Reveal, Roll, Spark } from "./motion";

/** Section header used throughout the reference: spark label, sub label, then a two-tone statement. */
export function SectionHead({ label, sub, lines, dim, indent, notes }: { label: string; sub?: string; lines: string[]; dim: number; indent?: number[]; notes?: string[] }) {
  return (
    <div>
      <Reveal><p className="eyebrow"><Spark />{label}</p>{sub && <p className="eyebrow-sub">{sub}</p>}</Reveal>
      <Lines className="statement" lines={lines} dimCount={dim} indent={indent} />
      {notes && <div className="sub-lines">{notes.map((n) => <Reveal key={n}><p>{n}</p></Reveal>)}</div>}
    </div>
  );
}

/** "Book a call" card: person, prompt, full-width pill. */
export function CallCard({ kicker, line, cta = "Book a Call", href = "/contact" }: { kicker: string; line: string; cta?: string; href?: string }) {
  return (
    <Reveal className="call">
      <p className="call-brand">ARFA®</p>
      <div className="call-person"><img src={person.photo} alt="" /><div><b>{person.short}</b><span>{person.role}</span></div></div>
      <div><p className="call-kicker">{kicker}</p><p className="call-line">{line}</p></div>
      <Link className="pill" href={href}><Roll>{cta}</Roll><Arrow /></Link>
    </Reveal>
  );
}
