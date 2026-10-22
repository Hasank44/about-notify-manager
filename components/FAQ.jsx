"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const QUESTIONS = [
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
        q: "What happens if my quota runs out?",
        a: "Requests return HTTP 402 with code PACKAGE_LIMIT_NOTIFICATIONS. Your quota resets on the 1st of each month (UTC). Upgrade to increase limits or wait for the reset.",
    },
    {
        q: "Is my bot token secure?",
        a: "Yes. Bot tokens are encrypted with AES-256-GCM at rest and never logged or returned in API responses. Only the message delivery service can decrypt them, in memory, per-request.",
    },
    {
        q: "Do you support B2C (customer notifications)?",
        a: "Yes on Pro+ plans. Register customer chatIds via POST /api/v1/subscriptions, then send them individual notifications using their externalUserId in data.userId. Broadcast to all subscribers is also supported.",
    },
    {
        q: "How do I get my Telegram chat ID?",
        a: "Open Telegram, search @userinfobot, send /start. It replies with your numeric ID. Alternatively use @MyTelegramID_bot or @getmyid_bot. All work identically.",
    },
    {
        q: "What if I need more than 200,000 notifications?",
        a: "Enterprise plan supports custom quotas. Contact support iftyhasan.com with your volume and use case. We can also set up a dedicated instance for very high-volume senders.",
    },
    {
        q: "What payment methods do you accept?",
        a: "Currently subscriptions are approved manually after payment. We accept bKash, Nagad, bank transfer, and international transfers. Stripe and bKash auto-payment are coming soon.",
    },
    {
        q: "Can I cancel or downgrade?",
        a: "Yes, at any time. You keep access until the end of your billing period. No cancelation fees, no questions asked.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="relative border-t border-white/5 bg-[#0a0c1a] py-20">
            <div className="mx-auto max-w-4xl px-3 sm:px-5 lg:px-7">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="badge-primary text-[11px] uppercase tracking-wider">
                        FAQ
                    </span>
                    <h2 className="section-title mt-3">
                        Questions?{" "}
                        <span className="gradient-text">Answered.</span>
                    </h2>
                    <p className="section-subtitle">
                        Everything you need to know about the platform. Still curious?{" "}
                        <Link
                            href="mailto:mdhasan.sjb@gmail.com"
                            className="text-indigo-400 underline-offset-2 hover:underline"
                        >
                            Email us
                        </Link>
                        .
                    </p>
                </div>
                <div className="mt-10 space-y-2">
                    {QUESTIONS.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={item.q}
                                className={`overflow-hidden rounded-xl border transition ${isOpen
                                        ? "border-indigo-500/30 bg-indigo-500/[0.03]"
                                        : "border-white/10 bg-[#0B1220] hover:border-white/20"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left transition"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-sm font-medium text-gray-100 sm:text-base">
                                        {item.q}
                                    </span>
                                    <ChevronDown
                                        size={16}
                                        className={`flex-shrink-0 text-white/40 transition-transform ${isOpen ? "rotate-180 text-indigo-400" : ""
                                            }`}
                                    />
                                </button>
                                {isOpen && (
                                    <div className="border-t border-white/5 px-3 py-3">
                                        <p className="text-sm leading-relaxed text-white/60">
                                            {item.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;