import { ImageResponse } from "next/og";
import { SITE } from "@/lib/config";

export const alt = `Pricing — ${SITE.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                        "linear-gradient(135deg, #0a0c1a 0%, #0a0c1c 50%, #03030d 100%)",
                    padding: 80,
                    color: "#f3f4f6",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        fontSize: 24,
                        color: "#a5b4fc",
                        fontWeight: 600,
                        letterSpacing: 4,
                        marginBottom: 24,
                    }}
                >
                    PRICING
                </div>
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 800,
                        textAlign: "center",
                        letterSpacing: -2,
                        lineHeight: 1.1,
                    }}
                >
                    Simple, transparent pricing
                </div>
                <div
                    style={{
                        fontSize: 32,
                        color: "rgba(255,255,255,0.6)",
                        marginTop: 32,
                        textAlign: "center",
                    }}
                >
                    Start free — upgrade as you grow
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: 16,
                        marginTop: 64,
                    }}
                >
                    {["Free $0", "Starter $2", "Pro $5 ⭐", "Business $10", "Enterprise $15"].map((t) => (
                        <div
                            key={t}
                            style={{
                                padding: "12px 28px",
                                borderRadius: 9999,
                                border: "1px solid rgba(99,102,241,0.4)",
                                background: "rgba(99,102,241,0.1)",
                                color: "#a5b4fc",
                                fontSize: 20,
                                fontWeight: 600,
                            }}
                        >
                            {t}
                        </div>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    );
}