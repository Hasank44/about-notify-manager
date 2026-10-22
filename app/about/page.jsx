import { Heart, Github, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/config";
import StructuredData from "@/components/page/StructuredData";
import { aboutSchemas } from "@/lib/schemas";

export const metadata = {
    title: "About",
    description: `About ${SITE.name} — a focused notification infrastructure for developers who'd rather ship products than build DevOps.`,
    alternates: {
        canonical: `${SITE.url}/about`,
    },
    openGraph: {
        title: `About | ${SITE.name}`,
        description: "Built for developers, by developers.",
        url: `${SITE.url}/about`,
        type: "website",
    },
};
export default function AboutPage() {
    return (
        <>
            <StructuredData schemas={aboutSchemas} />
            <div className="mx-auto max-w-3xl px-3 py-20 sm:px-5 lg:px-7">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        <span className="gradient-text">About</span> Notify Manager
                    </h1>
                    <p className="mx-auto mt-3 max-w-xl text-base text-white/60">
                        A focused notification infrastructure for developers who'd rather
                        ship products than build DevOps.
                    </p>
                </div>
                <div className="mt-10 space-y-4 text-sm leading-relaxed text-white/70">
                    <section>
                        <h2 className="mb-2 text-lg font-semibold text-gray-100">Why we built this</h2>
                        <p>
                            Setting up Telegram notifications for a SaaS used to mean weeks of
                            work: bot registration, webhook hosting, retry logic, rate limits,
                            delivery tracking, encryption, multi-tenant routing. We bundled all
                            of it into one API.
                        </p>
                    </section>
                    <section>
                        <h2 className="mb-2 text-lg font-semibold text-gray-100">Built with</h2>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Node.js 20",
                                "Express 5",
                                "MongoDB Atlas",
                                "Mongoose 8",
                                "Vercel Serverless",
                                "React 18",
                                "Next.js 15",
                                "Tailwind CSS",
                                "AES-256-GCM",
                                "Argon2id",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-2 text-lg font-semibold text-gray-100">Built by</h2>
                        <p>
                            Made with{" "}
                            <Heart
                                size={12}
                                className="inline-block text-red-400"
                                fill="currentColor"
                            />{" "}
                            in Bangladesh by Md Hasan Ali
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <Button
                                href="https://github.com/Hasank44"
                                variant="secondary"
                                size="sm"
                                external
                            >
                                <Github size={13} />
                                GitHub
                            </Button>
                            <Button
                                href="mailto:mdhasan.sjb@gmail.com"
                                variant="secondary"
                                size="sm"
                                external
                            >
                                <Mail size={13} />
                                Email
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}