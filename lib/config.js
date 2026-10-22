export const SITE = {
    name: "Notify Manager",
    tagline: "Send Telegram notifications from any app",
    description: "Centralized notification infrastructure for developers. Send Telegram messages to your team and customers with one API call. No bot setup, no rate limits, no headaches.",

    url: process.env.NEXT_PUBLIC_SITE_URL || "https://about-notify-manager.vercel.app",
    appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://all-notify-manager.vercel.app",
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "https://api-notify-manager.vercel.app",

    get loginUrl() {
        return `${this.appUrl}/login`;
    },
    get registerUrl() {
        return `${this.appUrl}/register`;
    },
    get docsUrl() {
        return `${this.appUrl}/docs`;
    },

    twitter: "@hasan46476127",
    year: new Date().getFullYear(),
};