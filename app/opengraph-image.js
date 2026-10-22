import { ImageResponse } from "next/og";
import { SITE } from "@/lib/config";

export const alt = `${SITE.name} — ${SITE.tagline}`;
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
                    background: "linear-gradient(135deg, #0a0c1a 0%, #0a0c1c 50%, #03030d 100%)",
                    padding: 80,
                    color: "#f3f4f6",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 900,
                        height: 300,
                        background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        marginBottom: 40,
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 64,
                            height: 64,
                            borderRadius: 16,
                            background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                            boxShadow: "0 10px 40px rgba(99,102,241,0.4)",
                            fontSize: 36,
                            fontWeight: 800,
                            color: "white",
                        }}
                    >
                        N
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            fontWeight: 700,
                            background: "linear-gradient(90deg, #818cf8 0%, #c084fc 50%, #22d3ee 100%)",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        Notify Manager
                    </div>
                </div>
                <div
                    style={{
                        fontSize: 64,
                        fontWeight: 800,
                        lineHeight: 1.1,
                        textAlign: "center",
                        letterSpacing: -2,
                        maxWidth: 1000,
                        position: "relative",
                    }}
                >
                    Send Telegram notifications
                    <br />
                    <span
                        style={{
                            background: "linear-gradient(90deg, #818cf8 0%, #c084fc 50%, #22d3ee 100%)",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        from any app — in 5 minutes.
                    </span>
                </div>
                <div
                    style={{
                        fontSize: 24,
                        color: "rgba(255,255,255,0.55)",
                        marginTop: 32,
                        textAlign: "center",
                        maxWidth: 800,
                        position: "relative",
                    }}
                >
                    Centralized notification infrastructure for developers
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: 12,
                        marginTop: 48,
                        position: "relative",
                    }}
                >
                    {["REST API", "B2B + B2C", "99.9% Uptime"].map((label) => (
                        <div
                            key={label}
                            style={{
                                padding: "8px 20px",
                                borderRadius: 9999,
                                border: "1px solid rgba(99,102,241,0.4)",
                                background: "rgba(99,102,241,0.1)",
                                color: "#a5b4fc",
                                fontSize: 16,
                                fontWeight: 600,
                            }}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    );
}