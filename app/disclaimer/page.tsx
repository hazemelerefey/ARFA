import Legal from "@/components/Legal";

export const metadata = { title: "Disclaimer" };

export default function Page() {
  return <Legal title="Disclaimer" updated="October 2026" sections={[
    { h: "Case studies", p: ["Project metrics describe results observed on the datasets and environments described in each case study. Some projects use public or anonymised datasets, and outcomes in other contexts will differ."] },
    { h: "Writing", p: ["Articles in the Lab share personal opinions and field notes. They are not professional advice for a specific situation; validate any approach against your own data and constraints."] },
    { h: "Credentials", p: ["Certificates are listed as issued by the named organisations. Logos and names belong to those organisations and do not imply their endorsement of this site."] },
    { h: "External links", p: ["Links to external services are provided for convenience. I am not responsible for their content or availability."] },
  ]} />;
}
