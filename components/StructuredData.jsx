import { SITE } from "@/lib/config";

const FAQ_DATA = [
    {
        q: "Do I need my own Telegram bot?",
        a: "Free and Starter plans use our shared system bot — no own bot needed. Pro, Business, and Enterprise plans register their own bot for custom branding and B2C customer capture via webhook.",
    },
    {
        q: "How is this different from the Telegram Bot API?",
        a: "We handle everything around it: webhooks, retries, rate limits, multi-tenancy, delivery tracking, API keys, encryption, and routing. You make one HTTP call — we handle the rest.",
    },
    {
        q: "Can I send to multiple destinations at once?",
        a: "Yes. A single route can connect one (domain + type) combination to up to 50 destinations simultaneously. Users, groups, channels — all in one API call.",
    },
    {
        q: "Is my bot token secure?",
        a: "Yes. Bot tokens are encrypted with AES-256-GCM at rest and never logged or returned in API responses. Only the message delivery service can decrypt them, in memory, per-request.",
    },
    {
        q: "Do you support B2C (customer notifications)?",
        a: "Yes on Pro+ plans. Register customer chatIds via POST /api/v1/subscriptions, then send them individual notifications using their externalUserId in data.userId.",
    },
];

const StructuredData = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/icon`,
        description: SITE.description,
        sameAs: ["https://github.com/Hasank44", "https://iftyhasan.com"],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "mdhasan.sjb@gmail.com",
            availableLanguage: ["English", "Bengali"],
        },
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${SITE.docsUrl}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };

    /* SoftwareApplication schema */
    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: SITE.name,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        description: SITE.description,
        url: SITE.url,
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Free plan — 100 notifications/month",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "12",
        },
    };

    /* FAQPage schema */
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_DATA.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
            },
        })),
    };

    /* BreadcrumbList schema */
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE.url,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
};

export default StructuredData;