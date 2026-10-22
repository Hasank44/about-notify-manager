import { SITE } from "@/lib/config";

export default function sitemap() {
    const lastUpdate = new Date("2026-10-21");

    return [
        {
            url: SITE.url,
            lastModified: lastUpdate,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${SITE.url}/pricing`,
            lastModified: lastUpdate,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${SITE.url}/about`,
            lastModified: lastUpdate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${SITE.url}/privacy`,
            lastModified: lastUpdate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${SITE.url}/terms`,
            lastModified: lastUpdate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}