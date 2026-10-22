import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/config";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata = {
    metadataBase: new URL(SITE.url),
    title: {
        default: `${SITE.name} — ${SITE.tagline}`,
        template: `${SITE.name} | %s`,
    },
    description: SITE.description,
    keywords: [
        "telegram notifications",
        "notification api",
        "telegram bot api",
        "b2b notifications",
        "b2c notifications",
        "notification infrastructure",
        "webhook notifications",
        "saas notification service",
    ],
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE.url,
        siteName: SITE.name,
        title: `${SITE.name} — ${SITE.tagline}`,
        description: SITE.description,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: SITE.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${SITE.name} — ${SITE.tagline}`,
        description: SITE.description,
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: "/logo.webp",
    },
    verification: {
        google: "XYZ...",
    },
};

export const viewport = {
    themeColor: "#0B1220",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="min-h-screen bg-[#03030d] font-sans text-gray-100 antialiased">
                <StructuredData />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}