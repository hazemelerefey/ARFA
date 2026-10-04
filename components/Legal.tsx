import { Reveal } from "./motion";

export type LegalSection = { h: string; p?: string[]; list?: string[] };

export default function Legal({ title, updated, sections }: { title: string; updated: string; sections: LegalSection[] }) {
  return (
    <article className="legal">
      <Reveal><h1>{title}</h1><p className="updated">Last updated {updated}</p></Reveal>
      {sections.map((s) => (
        <Reveal key={s.h} as="section">
          <h2>{s.h}</h2>
          {s.p?.map((t) => <p key={t}>{t}</p>)}
          {s.list && <ul>{s.list.map((t) => <li key={t}>{t}</li>)}</ul>}
        </Reveal>
      ))}
    </article>
  );
}
