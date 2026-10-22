import { UserPlus, Globe, CheckCircle2, Key, MapPin, GitBranch, Send } from "lucide-react";
import Button from "./ui/Button";
import { SITE } from "@/lib/config";

const STEPS = [
    {
        number: 1,
        icon: UserPlus,
        title: "Sign up free",
        description: "Create an account in 30 seconds. No credit card needed.",
        time: "30 sec",
    },
    {
        number: 2,
        icon: Globe,
        title: "Add your domain",
        description: "Enter the domain you'll send from. Admin verifies it (usually < 1 hour).",
        time: "1 min",
    },
    {
        number: 3,
        icon: Key,
        title: "Generate API key",
        description: "Once verified, generate a domain-scoped API key. Copy it once — it's hashed after.",
        time: "10 sec",
    },
    {
        number: 4,
        icon: MapPin,
        title: "Add destination",
        description: "Point to your Telegram chat, team group, or channel. Or use dynamic B2C.",
        time: "2 min",
    },
    {
        number: 5,
        icon: GitBranch,
        title: "Create a route",
        description: "Connect domain + notification type → destinations. Config, not code.",
        time: "1 min",
    },
    {
        number: 6,
        icon: Send,
        title: "Send first notification",
        description: "One API call. Message delivered to all configured destinations in < 1 second.",
        time: "5 sec",
    },
];

const HowItWorks = () => {
    return (
        <section
            id="how-it-works"
            className="relative border-t border-white/5 bg-[#0a0c1a] py-20"
        >
            <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-7">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="badge-success text-[11px] uppercase tracking-wider">
                        How it works
                    </span>
                    <h2 className="section-title mt-4">
                        From signup to{" "}
                        <span className="gradient-text">first notification</span>
                        <br />
                        in under 5 minutes.
                    </h2>
                    <p className="section-subtitle">
                        No DevOps, no bot setup, no webhook infrastructure. Just 6 simple
                        steps.
                    </p>
                </div>
                <div className="mt-14 grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {STEPS.map((step, index) => {
                        const Icon = step.icon;
                        const isLast = index === STEPS.length - 1;
                        return (
                            <div
                                key={step.number}
                                className={`group relative rounded-xl border border-white/10 bg-[#0B1220] p-6 transition hover:border-indigo-500/30 hover:bg-indigo-500/[0.02] ${isLast ? "border-indigo-500/30 bg-indigo-500/[0.03]" : ""
                                    }`}
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <div
                                        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${isLast
                                                ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30"
                                                : "bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-500/30"
                                            }`}
                                    >
                                        {step.number}
                                    </div>
                                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">
                                        {step.time}
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/60 transition group-hover:bg-indigo-500/10 group-hover:text-indigo-400">
                                        <Icon size={16} />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-sm font-semibold text-gray-100">
                                            {step.title}
                                        </h3>
                                        <p className="mt-1 text-xs leading-relaxed text-white/60">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                                {isLast && (
                                    <div className="absolute right-4 top-3">
                                        <CheckCircle2 size={14} className="text-emerald-400" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="mt-10 flex justify-center">
                    <Button
                        href={SITE.registerUrl}
                        variant="primary"
                        size="lg"
                        external
                    >
                        Start Free — No Credit Card
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;