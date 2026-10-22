import { SITE } from "@/lib/config";

export const metadata = {
    title: "Privacy Policy",
    description: `Privacy Policy for ${SITE.name}`,
};

export default function PrivacyPage() {
    return (
        <div className="mx-auto max-w-3xl px-3 py-20 sm:px-5 lg:px-7">
            <h1 className="page-title text-3xl font-bold">Privacy Policy</h1>
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
                        What we collect
                    </h2>
                    <p>
                        We collect account information (name, email, phone), usage
                        telemetry (request counts, delivery statuses), and technical logs
                        (IP address, user agent). We do not sell your data.
                    </p>
                </section>
                <section>
                    <h2 className="mb-2 text-lg font-semibold text-gray-100">
                        Bot tokens & secrets
                    </h2>
                    <p>
                        Telegram bot tokens are encrypted with AES-256-GCM at rest and never
                        logged or returned in API responses. Encryption keys are managed
                        separately from the database.
                    </p>
                </section>
                <section>
                    <h2 className="mb-2 text-lg font-semibold text-gray-100">
                        Data retention
                    </h2>
                    <p>
                        Notification history is retained per plan limits. You can delete
                        records at any time from the dashboard. Activity logs are kept for
                        180 days, then auto-purged.
                    </p>
                </section>
                <section>
                    <h2 className="mb-2 text-lg font-semibold text-gray-100">
                        Contact
                    </h2>
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