import { Check, Sparkles, X } from "lucide-react";
import Button from "./ui/Button";
import { SITE } from "@/lib/config";

const PLANS = [
    {
        name: "Free",
        price: 0,
        description: "For testing and personal projects",
        features: [
            "1 domain",
            "100 notifications/month",
            "System bot only",
            "Group destinations",
            "B2B notifications only",
        ],
        excluded: ["B2C notifications", "Own bot", "Channel destinations"],
        cta: "Start Free",
        ctaVariant: "secondary",
        href: SITE.registerUrl,
    },
    {
        name: "Starter",
        price: 2,
        description: "For small websites and side projects",
        features: [
            "1 domain",
            "1,000 notifications/month",
            "System bot",
            "Group + user destinations",
            "B2B notifications only",
        ],
        excluded: ["B2C notifications", "Own bot", "Channel destinations"],
        cta: "Start Free Trial",
        ctaVariant: "secondary",
        href: SITE.registerUrl,
    },
    {
        name: "Pro",
        price: 5,
        description: "For growing businesses",
        features: [
            "3 domains",
            "10,000 notifications/month",
            "Own Telegram bot",
            "B2B + B2C notifications",
            "Channel & group destinations",
            "Priority support",
        ],
        excluded: [],
        cta: "Get Started",
        ctaVariant: "primary",
        href: SITE.registerUrl,
        popular: true,
    },
    {
        name: "Business",
        price: 10,
        description: "For scaling operations",
        features: [
            "10 domains",
            "50,000 notifications/month",
            "Own Telegram bot",
            "B2B + B2C notifications",
            "All destination types",
            "Priority support",
        ],
        excluded: [],
        cta: "Get Started",
        ctaVariant: "secondary",
        href: SITE.registerUrl,
    },
    {
        name: "Enterprise",
        price: 15,
        description: "For high-volume use",
        features: [
            "25 domains",
            "200,000 notifications/month",
            "Own Telegram bot",
            "B2B + B2C notifications",
            "All destination types",
            "Dedicated support",
        ],
        excluded: [],
        cta: "Contact Us",
        ctaVariant: "secondary",
        href: "mailto:mdhasan.sjb@gmail.com",
        external: true,
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="relative border-t border-white/5 py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
            <div className="relative mx-auto max-w-7xl px-3 sm:px-5 lg:px-7">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="badge-primary text-[11px] uppercase tracking-wider">
                        Pricing
                    </span>
                    <h2 className="section-title mt-3">
                        Simple, transparent pricing.
                        <br />
                        <span className="gradient-text">Start free.</span>
                    </h2>
                    <p className="section-subtitle">
                        No hidden fees. No setup costs. Cancel anytime.
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {PLANS.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col rounded-2xl border p-6 transition-all ${plan.popular
                                    ? "border-indigo-500/40 bg-gradient-to-b from-indigo-500/[0.08] to-[#0B1220] shadow-2xl shadow-indigo-500/10 lg:scale-[1.03]"
                                    : "border-white/10 bg-[#0B1220] hover:border-white/20"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-indigo-500/30">
                                        <Sparkles size={10} />
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <div className="mb-3">
                                <h3 className="text-lg font-semibold text-gray-100">
                                    {plan.name}
                                </h3>
                                <p className="mt-1 text-xs text-white/50">
                                    {plan.description}
                                </p>
                            </div>
                            <div className="mb-3 flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-gray-100">
                                    ${plan.price}
                                </span>
                                <span className="text-xs text-white/40">/month</span>
                            </div>
                            <Button
                                href={plan.href}
                                variant={plan.ctaVariant}
                                size="md"
                                external
                                className="mb-5 w-full"
                            >
                                {plan.cta}
                            </Button>
                            <ul className="flex-1 space-y-2.5">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2 text-xs text-gray-300"
                                    >
                                        <Check
                                            size={13}
                                            className="mt-0.5 flex-shrink-0 text-emerald-400"
                                        />
                                        <span>{feature}</span>
                                    </li>
                                ))}

                                {plan.excluded.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2 text-xs text-white/30"
                                    >
                                        <X
                                            size={13}
                                            className="mt-0.5 flex-shrink-0 text-white/20"
                                        />
                                        <span className="line-through">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-white/40">
                        All plans include
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/60">
                        {[
                            "API keys",
                            "Delivery tracking",
                            "Retry logic",
                            "AES-256 encryption",
                            "99.9% uptime",
                            "Asia-optimized",
                        ].map((item) => (
                            <span key={item} className="flex items-center gap-1.5">
                                <Check size={12} className="text-emerald-400" />
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <p className="mt-5 text-center text-xs text-white/40">
                    Need something custom?{" "}
                    <a
                        href="mailto:mdhasan.sjb@gmail.com"
                        className="text-indigo-400 underline-offset-2 hover:underline"
                    >
                        Contact us
                    </a>{" "}
                    for custom plans.
                </p>
            </div>
        </section>
    );
};

export default Pricing;