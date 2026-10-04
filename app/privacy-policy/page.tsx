import Legal from "@/components/Legal";
import { person } from "@/content/site";

export const metadata = { title: "Privacy Policy" };

export default function Page() {
  return <Legal title="Privacy Policy" updated="October 2026" sections={[
    { h: "Overview", p: [`This is the personal portfolio of ${person.name}. It is a static website: it has no user accounts, no database, and no analytics or advertising trackers.`] },
    { h: "Information you send", p: ["The contact and “Stay in touch” forms do not submit data to this website. They open your own email application with a pre-filled draft, and nothing is sent until you choose to send it.", `When you email or message me, I receive whatever you include (for example your name, email address, and message). I use it only to reply to you and to discuss the work you asked about.`] },
    { h: "Cookies", p: ["This site does not set cookies for tracking or profiling. Your hosting provider may keep standard server logs, such as IP address and request time, for security and reliability."] },
    { h: "Third-party links", p: ["Links to LinkedIn, GitHub, and WhatsApp open services with their own privacy policies, which apply once you leave this site."] },
    { h: "Your choices", p: [`You can ask me to delete our correspondence at any time by writing to ${person.email}.`] },
  ]} />;
}
