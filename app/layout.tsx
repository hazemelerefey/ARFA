import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import "./pages.css";
import { SITE_URL } from "@/lib";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Ahmed Gamal Arfa | AI & Data Engineer", template: "%s | Ahmed Gamal Arfa" },
  description: "AI & Data Engineer designing production-grade ML systems, executive BI products, and audit-by-default data pipelines. Based in Cairo, Egypt.",
  openGraph: { title: "Ahmed Gamal Arfa — AI & Data Engineer", description: "Intelligent systems, built to ship.", images: ["/media/profile.jpg"] },
};
export const viewport: Viewport = { width: "device-width", themeColor: "#050609" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
