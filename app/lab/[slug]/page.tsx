import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, person } from "@/content/site";
import { Reveal } from "@/components/motion";
import { CallCard } from "@/components/Section";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a ? { title: a.title, description: a.excerpt } : {};
}

/** Renders `inline code` spans in otherwise plain paragraphs. */
const inline = (text: string) => text.split(/(`[^`]+`)/).map((part, i) => part.startsWith("`") ? <code key={i}>{part.slice(1, -1)}</code> : part);

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <article className="article">
      <Link href="/lab" className="back">← All writing</Link>
      <Reveal><p className="meta">{a.topic} · {a.date} · {a.read} read</p><h1>{a.title}</h1><p className="dek">{a.excerpt}</p></Reveal>
      <Reveal><figure><img src={a.image} alt="" /></figure></Reveal>
      <div className="body">{a.body.map((t) => <Reveal key={t}><p>{inline(t)}</p></Reveal>)}</div>
      <p className="muted" style={{ marginTop: 40, fontSize: 14 }}>Written by {person.name}, {person.role}.</p>
      <CallCard kicker="Have a related problem?" line="I'm happy to compare notes on data, BI, or ML in production." cta="Get in touch" />
    </article>
  );
}
