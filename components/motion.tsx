"use client";

import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade-and-rise when the element scrolls into view (once). */
export function Reveal({ children, delay = 0, y = 40, className, as = "div" }: { children: ReactNode; delay?: number; y?: number; className?: string; as?: "div" | "section" | "li" | "article" }) {
  const Tag = motion[as];
  return (
    <Tag className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -10% 0px" }} transition={{ duration: 0.9, delay, ease: EASE }}>
      {children}
    </Tag>
  );
}

/** Masked line reveal: each child line slides up from below its own clip box. */
export function Lines({ lines, className, dimCount = 0, indent = [] }: { lines: string[]; className?: string; dimCount?: number; indent?: number[] }) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <motion.p key={line + i} className={`${i < dimCount ? "dim" : ""} ${indent.includes(i) ? "indent" : ""}`} initial="hide" whileInView="show" viewport={{ once: true, margin: "0px 0px -8% 0px" }}>
          {/* The clipped span cannot intersect the viewport itself, so the visible line triggers it. */}
          <motion.span variants={{ hide: { y: "105%" }, show: { y: 0 } }} transition={{ duration: 1, delay: i * 0.08, ease: EASE }}>
            {line}
          </motion.span>
        </motion.p>
      ))}
    </div>
  );
}

/** Number that counts up from zero the first time it is visible. */
export function Counter({ value, decimals = 0, className }: { value: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.8, ease: EASE, onUpdate: setShown });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref} className={className}>{shown.toFixed(decimals)}</span>;
}

/** Two stacked copies of a label; CSS rolls them on hover of the parent link. */
export function Roll({ children }: { children: string }) {
  return <span className="roll"><span>{children}</span><span aria-hidden="true">{children}</span></span>;
}

export function Arrow() {
  return <svg className="arrow" viewBox="0 0 36 10" fill="none" aria-hidden="true"><path d="M0 5h34M30 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" /></svg>;
}

export function Spark() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10.5 0h3v8.4l5.9-5.9 2.1 2.1-5.9 5.9H24v3h-8.4l5.9 5.9-2.1 2.1-5.9-5.9V24h-3v-8.4l-5.9 5.9-2.1-2.1 5.9-5.9H0v-3h8.4L2.5 4.6l2.1-2.1 5.9 5.9z" /></svg>;
}
