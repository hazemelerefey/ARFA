import Link from "next/link";
import { person } from "@/content/site";
import { Arrow, Reveal, Roll } from "@/components/motion";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="nf">
      <Reveal>
        <h1>Even pipelines need downtime.<br />This page took it a little too seriously.</h1>
        <Link href="/" className="roll-host"><Roll>Back to Home</Roll><Arrow /></Link>
      </Reveal>
      <Reveal delay={0.1}><p className="nf-code" aria-hidden="true">404</p><p className="muted" style={{ textAlign: "right", fontSize: 13 }}>{person.short} · {person.role}</p></Reveal>
    </section>
  );
}
