"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Roll } from "./motion";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/lab", label: "Lab" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const current = (href: string) => (path === href || path.startsWith(href + "/") ? "page" : undefined);
  return (
    <>
      <header className="nav">
        <Link href="/" className="nav-logo" aria-label="Ahmed Arfa, home">ARFA<sup>®</sup></Link>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => <Link key={l.href} href={l.href} aria-current={current(l.href)}><Roll>{l.label}</Roll></Link>)}
        </nav>
        <button className="nav-burger" type="button" aria-label="Menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}><span /><span /></button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" className="nav-menu" aria-label="Mobile" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.45, ease: [0.6, 0, 0.2, 1] }}>
            {[{ href: "/", label: "Home" }, ...links].map((l) => <Link key={l.href} href={l.href} aria-current={l.href === "/" ? (path === "/" ? "page" : undefined) : current(l.href)}>{l.label}</Link>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
