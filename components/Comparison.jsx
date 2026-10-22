import { Check, X } from "lucide-react";

const ROWS = [
    {
        task: "Bot setup + token management",
        diy: "2 days",
        ours: "30 seconds",
    },
    {
        task: "Webhook infrastructure",
        diy: "3 days",
        ours: "Included",
    },
    {
        task: "Rate limit handling",
        diy: "1 day",
        ours: "Built-in",
    },
    {
        task: "Retry + backoff logic",
        diy: "2 days",
        ours: "Built-in",
    },
    {
        task: "Delivery tracking & logs",
        diy: "3 days",
        ours: "Automatic",
    },
    {
        task: "Multi-tenant routing",
        diy: "5 days",
        ours: "Config only",
    },
    {
        task: "Encryption & API keys",
        diy: "2 days",
        ours: "Built-in",
    },
    {
        task: "Monitoring & alerts",
        diy: "2 days",
        ours: "Included",
    },
];

const Comparison = () => {
    return (
        <section className="relative border-t border-white/5 bg-[#0a0c1a] py-20">
            <div className="mx-auto max-w-5xl px-3 sm:px-5 lg:px-7">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="badge-primary text-[11px] uppercase tracking-wider">
                        The math
                    </span>
                    <h2 className="section-title mt-4">
                        Build it yourself vs.
                        <br />
                        <span className="gradient-text">use Notify Manager</span>
                    </h2>
                    <p className="section-subtitle">
                        We've done the math for you. The savings are not subtle.
                    </p>
                </div>
                <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220] shadow-2xl">
                    <div className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-white/10 bg-white/[0.03] px-3 py-3 sm:px-5">
                        <div className="text-xs font-semibold uppercase tracking-wider text-white/40">
                            Task
                        </div>
                        <div className="hidden text-center text-xs font-semibold uppercase tracking-wider text-white/40 sm:block">
                            DIY
                        </div>
                        <div className="text-center text-xs font-semibold uppercase tracking-wider text-indigo-300">
                            Notify Manager
                        </div>
                    </div>
                    <div className="divide-y divide-white/5">
                        {ROWS.map((row) => (
                            <div
                                key={row.task}
                                className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-3 py-3.5 transition hover:bg-white/[0.02] sm:px-5"
                            >
                                <div className="text-sm text-gray-200">{row.task}</div>
                                <div className="hidden text-center text-sm text-white/40 sm:block">
                                    {row.diy}
                                </div>
                                <div className="text-right sm:text-center">
                                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                                        <Check size={11} />
                                        {row.ours}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-[1fr_auto_auto] gap-3 border-t-2 border-indigo-500/30 bg-indigo-500/[0.05] px-3 py-3 sm:px-5">
                        <div className="text-sm font-bold text-gray-100">Total</div>
                        <div className="hidden text-center text-sm font-bold text-red-300 line-through decoration-red-500/50 sm:block">
                            ~20 days
                        </div>
                        <div className="text-right sm:text-center">
                            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-indigo-500/30">
                                <Check size={11} />
                                5 minutes
                            </span>
                        </div>
                    </div>
                </div>
                <p className="mt-5 text-center text-sm text-white/50">
                    * Estimated time for one experienced backend developer. Your mileage
                    may vary (usually worse).
                </p>
            </div>
        </section>
    );
};

export default Comparison;