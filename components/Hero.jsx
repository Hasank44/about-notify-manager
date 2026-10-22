import { ArrowRight, Check, Sparkles } from "lucide-react";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import { SITE } from "@/lib/config";

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-25 lg:pt-32">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c1a] via-[#0a0c1c] to-[#03030d]" />
                <div className="absolute inset-0 bg-grid opacity-30 mask-fade-bottom" />
                <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[120px]" />
                <div className="absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]" />
                <div className="absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
            </div>

            <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-7">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-6 flex justify-center">
                        <Badge variant="primary" className="animate-fade-in text-[11px]">
                            <Sparkles size={11} />
                            API keys now live — hardened security
                        </Badge>
                    </div>
                    <h1 className="text-balance text-2xl font-bold leading-[1.1] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                        <span className="text-gray-100">Send Telegram notifications </span>
                        <span className="gradient-text">from any app</span>
                        <span className="text-gray-100"> — in 5 minutes.</span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-white/60 sm:text-lg md:text-xl">
                        Centralized notification infrastructure for teams and customers.
                        No bot setup. No rate limit headaches. No retry logic. Just one API
                        call.
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
                            View Docs
                        </Button>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50 sm:text-sm">
                        <span className="flex items-center gap-1.5">
                            <Check size={14} className="text-emerald-400" />
                            No credit card
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Check size={14} className="text-emerald-400" />
                            100 free notifications/month
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Check size={14} className="text-emerald-400" />
                            5-minute setup
                        </span>
                    </div>
                </div>
                <div className="relative mx-auto mt-12 max-w-5xl sm:mt-20">
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 opacity-40 blur-3xl" />
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220] shadow-2xl shadow-black/50">
                        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                            <div className="ml-3 hidden flex-1 rounded-md bg-white/5 px-3 py-1 text-[10px] text-white/40 sm:block">
                                api-notify-manager.vercel.app/api/v1/notify
                            </div>
                        </div>

                        <div className="p-3 sm:p-5">
                            <pre className="overflow-x-auto text-[10px] leading-relaxed text-gray-300 sm:text-xs md:text-sm">
                                {`POST /api/v1/notify
Headers: X-API-Key: notify_live_••••

{
  "type": "order",
  "domain": "shop.example.com",
  "data": {
    "userId": "customer-name",
    "orderId": "ORD-5001",
    "amount": 2500
  }
}

// ✓ 202 Accepted
{
  "success": true,
  "status": "sent",
  "deliveryCount": 3,
  "requestId": "NTF-20261021-A8F92D"
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;