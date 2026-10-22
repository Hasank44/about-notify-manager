import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CodeExamples from "@/components/CodeExamples";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import StructuredData from "@/components/page/StructuredData";
import { homeSchemas } from "@/lib/schemas";

export default function HomePage() {
    return (
        <>
            <StructuredData schemas={homeSchemas} />
            <Hero />
            <Features />
            <HowItWorks />
            <CodeExamples />
            <Comparison />
            <Pricing />
            <FAQ />
            <FinalCTA />
        </>
    );
}