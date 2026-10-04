/** Public site origin; set NEXT_PUBLIC_SITE_URL when deploying to a custom domain. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://ahmed-arfa.vercel.app").replace(/\/$/, "");
