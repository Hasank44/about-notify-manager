import { cn } from "@/lib/utils";

const VARIANTS = {
    primary: "badge-primary",
    success: "badge-success",
    neutral: "badge border-white/10 bg-white/5 text-white/60",
    warning: "badge border-amber-500/30 bg-amber-500/15 text-amber-300",
    cyan: "badge border-cyan-500/30 bg-cyan-500/15 text-cyan-300",
};

const Badge = ({ variant = "primary", children, className }) => (
    <span className={cn(VARIANTS[variant] ?? VARIANTS.primary, className)}>
        {children}
    </span>
);

export default Badge;