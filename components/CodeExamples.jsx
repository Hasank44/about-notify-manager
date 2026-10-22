"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const EXAMPLES = {
    javascript: {
        label: "JavaScript",
        language: "js",
        code: `const response = await fetch(
  "https://api-notify-manager.vercel.app/api/v1/notify",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.NOTIFY_API_KEY,
      "Idempotency-Key": \`order-\${order.id}\`
    },
    body: JSON.stringify({
      type: "order",
      domain: "shop.example.com",
      data: {
        userId: "customer-name",
        orderId: order.id,
        amount: order.total,
        status: "shipped"
      }
    })
  }
);

const result = await response.json();
if (result.success) {
  console.log("Sent:", result.data.requestId);
}`,
    },
    php: {
        label: "PHP",
        language: "php",
        code: `<?php

$ch = curl_init(
  "https://api-notify-manager.vercel.app/api/v1/notify"
);

curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    "Content-Type: application/json",
    "X-API-Key: " . getenv("NOTIFY_API_KEY"),
    "Idempotency-Key: order-" . $orderId
  ],
  CURLOPT_POSTFIELDS => json_encode([
    "type" => "order",
    "domain" => "shop.example.com",
    "data" => [
      "userId" => "customer-name",
      "orderId" => $orderId,
      "amount" => $total,
      "status" => "shipped"
    ]
  ])
]);

$response = curl_exec($ch);
curl_close($ch);
$result = json_decode($response, true);`,
    },
    python: {
        label: "Python",
        language: "python",
        code: `import os
import requests

response = requests.post(
    "https://api-notify-manager.vercel.app/api/v1/notify",
    headers={
        "Content-Type": "application/json",
        "X-API-Key": os.getenv("NOTIFY_API_KEY"),
        "Idempotency-Key": f"order-{order_id}",
    },
    json={
        "type": "order",
        "domain": "shop.example.com",
        "data": {
            "userId": "customer-name",
            "orderId": order_id,
            "amount": total,
            "status": "shipped",
        },
    },
)

result = response.json()
if result["success"]:
    print(f"Sent: {result['data']['requestId']}")`,
    },
    curl: {
        label: "cURL",
        language: "bash",
        code: `curl -X POST \\
  https://api-notify-manager.vercel.app/api/v1/notify \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: $NOTIFY_API_KEY" \\
  -H "Idempotency-Key: order-ORD-5001" \\
  -d '{
    "type": "order",
    "domain": "shop.example.com",
    "data": {
      "userId": "customer-name",
      "orderId": "ORD-5001",
      "amount": 2500,
      "status": "shipped"
    }
  }'`,
    },
};

const TABS = Object.keys(EXAMPLES);

const CodeExamples = () => {
    const [activeTab, setActiveTab] = useState("javascript");
    const [copied, setCopied] = useState(false);

    const active = EXAMPLES[activeTab];

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(active.code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            /* clipboard API not available */
        }
    };

    return (
        <section className="relative border-t border-white/5 py-20">
            <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />
            <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
            <div className="relative mx-auto max-w-6xl px-3 sm:px-5 lg:px-7">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="badge-primary text-[11px] uppercase tracking-wider">
                        Developer-friendly
                    </span>
                    <h2 className="section-title mt-3">
                        Integrate in{" "}
                        <span className="gradient-text">any language.</span>
                    </h2>
                    <p className="section-subtitle">
                        One endpoint. Consistent response shape. Works everywhere HTTP
                        works.
                    </p>
                </div>
                <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#03030d] shadow-2xl">
                    <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-3 py-2">
                        <div className="flex gap-1 overflow-x-auto">
                            {TABS.map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition ${activeTab === tab
                                            ? "bg-indigo-500/15 text-indigo-300"
                                            : "text-white/50 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    {EXAMPLES[tab].label}
                                </button>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={handleCopy}
                            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-white/50 transition hover:bg-white/10 hover:text-white"
                        >
                            {copied ? (
                                <>
                                    <Check size={12} className="text-emerald-400" />
                                    <span className="text-emerald-400">Copied</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={12} />
                                    Copy
                                </>
                            )}
                        </button>
                    </div>
                    <pre className="overflow-x-auto p-5 text-[12px] leading-relaxed">
                        <code className="font-mono text-gray-200">{active.code}</code>
                    </pre>
                    <div className="border-t border-white/10 bg-white/[0.02] px-3 py-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="rounded border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 font-mono text-emerald-300">
                                202 Accepted
                            </span>
                            <span className="text-white/40">→</span>
                            <span className="text-white/60">
                                Message delivered to{" "}
                                <span className="text-indigo-300">3 destinations</span> in{" "}
                                <span className="text-emerald-300">&lt;1s</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodeExamples;