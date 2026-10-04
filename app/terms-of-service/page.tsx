import Legal from "@/components/Legal";
import { person } from "@/content/site";

export const metadata = { title: "Terms of Service" };

export default function Page() {
  return <Legal title="Terms of Service" updated="October 2026" sections={[
    { h: "Use of this site", p: [`This website presents the work and experience of ${person.name}. You may browse and share links to it for personal or professional reference.`] },
    { h: "Content and ownership", p: ["Case studies, writing, and images are provided to describe past and ongoing work. Certificates and third-party names remain the property of their respective issuers and owners and are shown for identification only.", "Please do not republish substantial parts of the writing or case studies without permission."] },
    { h: "No professional engagement", p: ["Reading this site or sending a message does not create a working relationship. Any engagement is agreed separately in writing, with its own scope and terms."] },
    { h: "Availability", p: ["The site is provided as is. I aim to keep it accurate and online, but cannot guarantee uninterrupted availability."] },
    { h: "Contact", p: [`Questions about these terms can be sent to ${person.email}.`] },
  ]} />;
}
