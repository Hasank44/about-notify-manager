import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center px-3 py-20">
            <div className="max-w-md text-center">
                <div className="mb-5 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-indigo-400">
                        <Compass size={28} />
                    </div>
                </div>
                <h1 className="text-6xl font-black gradient-text">404</h1>
                <h2 className="mt-3 text-xl font-semibold text-gray-100">
                    Page not found
                </h2>
                <p className="mt-2 text-sm text-white/60">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="mt-8 flex justify-center">
                    <Link href="/" className="btn-primary">
                        <ArrowLeft size={14} />
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}