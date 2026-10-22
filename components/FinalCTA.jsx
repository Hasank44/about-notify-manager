import { ArrowRight, Zap } from "lucide-react";
import Button from "./ui/Button";
import { SITE } from "@/lib/config";

const FinalCTA = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
            <div className="pointer-events-none absolute left-1/4 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute right-1/4 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="relative mx-auto max-w-4xl px-3 sm:px-5 lg:px-7">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-8 text-center sm:p-12">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/40">
                        <Zap size={26} className="text-white" />
                    </div>
                    <h2 className="text-balance text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl md:text-4xl">
                        Ready to send your first notification?
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-base text-white/60 sm:text-lg">
                        Free plan, no credit card, 5-minute setup. Send notifications from
                        any app to any Telegram chat.
                    </p>
                    <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Button
                            href={SITE.registerUrl}
                            variant="primary"
                            size="xl"
                            external
                            className="w-full sm:w-auto"
                        >
                            Get Started Free
                            <ArrowRight size={16} />
                        </Button>
                        <Button
                            href={SITE.docsUrl}
                            variant="secondary"
                            size="xl"
                            external
                            className="w-full sm:w-auto"
                        >
                            Read the Docs
                        </Button>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-white/40">
                        <span>✓ Free forever plan</span>
                        <span>✓ 100 free notifications/month</span>
                        <span>✓ Cancel anytime</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;