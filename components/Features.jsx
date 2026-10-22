import { Send, Shield, GitBranch, Activity, Users, Zap, RefreshCw, Gauge, FileText, Rocket } from "lucide-react";

const FEATURES = [
    {
        icon: Send,
        title: "Multi-channel Delivery",
        description: "One API call → Telegram users, groups, and channels simultaneously. No loops, no orchestration code.",
        accent: "indigo",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "AES-256-GCM encrypted bot tokens. Domain-scoped API keys. Rate limiting at every layer.",
        accent: "emerald",
    },
    {
        icon: GitBranch,
        title: "Dynamic Routing",
        description: "Configure which domain + type goes to which destinations — entirely through the UI. No deploys.",
        accent: "purple",
    },
    {
        icon: Activity,
        title: "Delivery Tracking",
        description: "Per-destination status, message IDs, error codes, and timestamps. Full audit trail for every send.",
        accent: "cyan",
    },
    {
        icon: Users,
        title: "B2B + B2C",
        description: "Send alerts to your team AND notifications to 1,000s of customers. Both, from the same API.",
        accent: "amber",
    },
    {
        icon: Zap,
        title: "99.9% Uptime",
        description: "Serverless deployment. Global edge. Asia-optimized (Singapore region). No cold start pain.",
        accent: "indigo",
    },
    {
        icon: RefreshCw,
        title: "Automatic Retries",
        description: "Transient failures auto-retry with exponential backoff. Network hiccups don't lose messages.",
        accent: "emerald",
    },
    {
        icon: Gauge,
        title: "Rate Limit Handling",
        description: "Telegram's per-chat limits handled automatically. No 429 errors leaked to your code.",
        accent: "purple",
    },
    {
        icon: FileText,
        title: "15+ Notification Types",
        description: "Subscription, order, payment, error, warning, custom... any string works out of the box.",
        accent: "cyan",
    },
    {
        icon: Rocket,
        title: "5-Minute Setup",
        description: "Sign up → add domain → send first notification. No DevOps degree needed.",
        accent: "amber",
    },
];

const ACCENT_MAP = {
    indigo: "bg-indigo-500/10 text-indigo-400 ring-indigo-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
    purple: "bg-purple-500/10 text-purple-400 ring-purple-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 ring-cyan-500/20",
    amber: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
};

const Features = () => {
    return (
        <section id="features" className="relative border-t border-white/5 py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
            <div className="relative mx-auto max-w-7xl px-3 sm:px-5 lg:px-7">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="badge-primary text-[11px] uppercase tracking-wider">
                        Features
                    </span>
                    <h2 className="section-title mt-3">
                        Everything you need.
                        <br />
                        <span className="gradient-text">Nothing you don't.</span>
                    </h2>
                    <p className="section-subtitle">
                        Built for developers who'd rather ship features than manage
                        notification infrastructure.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((feature) => {
                        const Icon = feature.icon;
                        const accentClass = ACCENT_MAP[feature.accent] ?? ACCENT_MAP.indigo;

                        return (
                            <div
                                key={feature.title}
                                className="card-hover group cursor-default rounded-xl border border-white/10 bg-[#0B1220] p-6"
                            >
                                <div
                                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg ring-1 ${accentClass} transition group-hover:scale-110`}
                                >
                                    <Icon size={20} />
                                </div>
                                <h3 className="text-base font-semibold text-gray-100">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/60">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;