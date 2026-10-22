"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import { SITE } from "@/lib/config";

const NAV_LINKS = [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How it works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" },
    { href: SITE.docsUrl, label: "Docs", external: true },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "border-b border-white/10 bg-[#0B1220]/90 shadow-lg backdrop-blur-xl"
                        : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-5 lg:px-7">
                    <Link href="/" className="flex items-center gap-2 transition hover:opacity-80">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30">
                            <span className="text-sm font-bold text-white">N</span>
                        </span>
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-base font-bold text-transparent sm:text-lg">
                            Notify Manager
                        </span>
                    </Link>
                    <nav className="hidden items-center gap-1 lg:flex">
                        {NAV_LINKS.map((link) =>
                            link.external ? (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            )
                        )}
                    </nav>
                    <div className="hidden items-center gap-2 lg:flex">
                        <Button href={SITE.loginUrl} variant="ghost" size="sm" external>
                            Sign In
                        </Button>
                        <Button href={SITE.registerUrl} variant="primary" size="sm" external>
                            Get Started
                            <ArrowRight size={14} />
                        </Button>
                    </div>
                    <button
                        type="button"
                        onClick={() => setMobileOpen((v) => !v)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 lg:hidden"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>
            {mobileOpen && (
                <div className="fixed inset-0 top-14 z-40 lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />
                    <div className="relative mx-3 mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#0B1220] p-3 shadow-2xl">
                        <nav className="flex flex-col gap-1">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <div className="mt-3 flex flex-col gap-2 border-t border-white/5 pt-3">
                            <Button
                                href={SITE.loginUrl}
                                variant="secondary"
                                size="md"
                                external
                                className="w-full"
                            >
                                Sign In
                            </Button>
                            <Button
                                href={SITE.registerUrl}
                                variant="primary"
                                size="md"
                                external
                                className="w-full"
                            >
                                Get Started Free
                                <ArrowRight size={14} />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;