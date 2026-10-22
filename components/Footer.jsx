import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { SITE } from "@/lib/config";

const FOOTER_LINKS = {
    Product: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "/pricing" },
        { label: "FAQ", href: "#faq" },
    ],
    Resources: [
        { label: "Documentation", href: SITE.docsUrl, external: true },
        { label: "API Reference", href: `${SITE.docsUrl}/public-api/notify`, external: true },
        { label: "Examples", href: `${SITE.docsUrl}/examples`, external: true },
    ],
    Company: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "mailto:mshasan.sjb@gmail.com" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
    ],
};

const Footer = () => {
    return (
        <footer className="relative border-t border-white/10 bg-[#0a0c1a]">
            <div className="mx-auto max-w-7xl px-3 py-10 sm:px-5 lg:px-7">
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/20">
                                <span className="text-sm font-bold text-white">N</span>
                            </span>
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-base font-bold text-transparent">
                                Notify Manager
                            </span>
                        </Link>
                        <p className="mt-3 max-w-xs text-sm text-white/50">
                            Centralized notification infrastructure for developers and small
                            teams. Send once, deliver everywhere.
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                            <Link
                                href="https://github.com/Hasank44"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
                                aria-label="GitHub"
                            >
                                <Github size={14} />
                            </Link>
                            <Link
                                href="mailto:mdhasan.sjb@gmail.com"
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
                                aria-label="Email"
                            >
                                <Mail size={14} />
                            </Link>
                        </div>
                    </div>
                    {Object.entries(FOOTER_LINKS).map(([section, links]) => (
                        <div key={section}>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                                {section}
                            </h3>
                            <ul className="mt-3 space-y-2">
                                {links.map((link) =>
                                    link.external ? (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-white/60 transition hover:text-white"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ) : (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-white/60 transition hover:text-white"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-5 text-xs text-white/40 sm:flex-row">
                    <p>© {SITE.year} {SITE.name}. All rights reserved.</p>
                    <div className="flex items-center gap-3">
                        <Link href="/privacy" className="hover:text-white">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-white">
                            Terms
                        </Link>
                        <Link href={'https://iftyhasan.com'} target="_blank" className="hover:text-white">
                            Built by iftyhasan.com
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;