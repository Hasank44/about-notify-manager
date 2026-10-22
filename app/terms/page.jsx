import { SITE } from "@/lib/config";

export const metadata = {
    title: "Terms of Service",
    description: `Terms of Service for ${SITE.name}`,
};

export default function TermsPage() {
    return (
        <div className="mx-auto max-w-3xl px-3 py-20 sm:px-5 lg:px-7">
            <h1 className="page-title text-3xl font-bold">Terms of Service</h1>
            <p className="mt-2 text-sm text-white/40">
                Last updated: {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
            <div className="mt-10 space-y-5 text-sm leading-relaxed text-white/70">
                <section>
                    <h2 className="mb-2 text-lg font-semibold text-gray-100">
                        Service usage
                    </h2>
                    <p>
                        You agree not to use Notify Manager for spam, illegal content, or
                        any activity that violates Telegram's Terms of Service. We reserve
                        the right to suspend accounts that violate these rules.
                    </p>
                </section>
                <section>
                    <h2 className="mb-2 text-lg font-semibold text-gray-100">
                        Billing & cancellation
                    </h2>
                    <p>
                        Subscriptions are billed monthly. You can cancel at any time; access
                        continues until the end of the current billing period. No refunds
                        for partial months.
                    </p>
                </section>
                <section>
                    <h2 className="mb-2 text-lg font-semibold text-gray-100">
                        Uptime & liability
                    </h2>
                    <p>
                        We target 99.9% uptime but provide no SLA on free plans. Our
                        liability is limited to fees paid in the prior 12 months.
                    </p>
                </section>
                <section>
                    <h2 className="mb-2 text-lg font-semibold text-gray-100">Contact</h2>
                    <p>
                        Questions? Email{" "}
                        <a
                            href="mailto:mdhasan.sjb@gmail.com"
                            className="text-indigo-400 underline-offset-2 hover:underline"
                        >
                            mdhasan.sjb@gmail.com
                        </a>
                        .
                    </p>
                </section>
            </div>
        </div>
    );
}