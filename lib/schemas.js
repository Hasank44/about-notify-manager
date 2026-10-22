import { SITE } from "./config";

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/icon`,
        width: 512,
        height: 512,
    },
    description: SITE.description,
    founder: {
        "@type": "Person",
        name: "Md Hasan Ali",
        url: "https://iftyhasan.com",
    },
    foundingDate: "2026",
    sameAs: [
        "https://github.com/Hasank44",
        "https://iftyhasan.com",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "mdhasan.sjb@gmail.com",
        availableLanguage: ["English", "Bengali"],
    },
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: {
        "@id": `${SITE.url}/#organization`,
    },
    inLanguage: "en-US",
};

export const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "Notification Service",
    operatingSystem: "Web",
    description: SITE.description,
    url: SITE.url,
    offers: [
        {
            "@type": "Offer",
            name: "Free",
            price: "0",
            priceCurrency: "USD",
            description: "1 domain, 100 notifications/month",
        },
        {
            "@type": "Offer",
            name: "Pro",
            price: "5",
            priceCurrency: "USD",
            description: "3 domains, 10,000 notifications/month, own bot",
        },
        {
            "@type": "Offer",
            name: "Business",
            price: "10",
            priceCurrency: "USD",
            description: "10 domains, 50,000 notifications/month",
        },
        {
            "@type": "Offer",
            name: "Enterprise",
            price: "15",
            priceCurrency: "USD",
            description: "25 domains, 200,000 notifications/month",
        },
    ],
    featureList: [
        "Multi-channel Telegram delivery",
        "B2B and B2C notifications",
        "Delivery tracking",
        "API key authentication",
        "AES-256 encrypted bot tokens",
        "Automatic retry logic",
        "Rate limit handling",
    ],
};

export const buildFaqSchema = (questions) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
        },
    })),
});

export const buildBreadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
    })),
});

const HOME_FAQ_ITEMS = [
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
    {
        q: "How do I get my Telegram chat ID?",
        a: "Open Telegram, search @userinfobot, send /start. It replies with your numeric ID. Alternatively use @MyTelegramID_bot or @getmyid_bot.",
    },
];

export const homeSchemas = [
    organizationSchema,
    websiteSchema,
    softwareApplicationSchema,
    buildFaqSchema(HOME_FAQ_ITEMS),
    buildBreadcrumbSchema([{ name: "Home", url: SITE.url }]),
];

export const pricingSchemas = [
    organizationSchema,
    softwareApplicationSchema,
    buildBreadcrumbSchema([
        { name: "Home", url: SITE.url },
        { name: "Pricing", url: `${SITE.url}/pricing` },
    ]),
];

export const aboutSchemas = [
    organizationSchema,
    buildBreadcrumbSchema([
        { name: "Home", url: SITE.url },
        { name: "About", url: `${SITE.url}/about` },
    ]),
];