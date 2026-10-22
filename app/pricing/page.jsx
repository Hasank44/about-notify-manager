import Pricing from "@/components/Pricing";
import StructuredData from "@/components/page/StructuredData";
import { pricingSchemas } from "@/lib/schemas";
import { SITE } from "@/lib/config";

export const metadata = {
    title: "Pricing",
    description:
        "Simple, transparent pricing for Notify Manager. Start free — upgrade as you grow. From $2/month for 1,000 notifications.",
    alternates: {
        canonical: `${SITE.url}/pricing`,
    },
    openGraph: {
        title: `Pricing | ${SITE.name}`,
        description: "Start free, upgrade as you grow.",
        url: `${SITE.url}/pricing`,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `Pricing | ${SITE.name}`,
        description: "Start free, upgrade as you grow.",
    },
};

export default function PricingPage() {
    return (
        <>
            <StructuredData schemas={pricingSchemas} />
            <div className="pt-16">
                <Pricing />
            </div>
        </>
    );
}