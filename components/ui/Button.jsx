import Link from "next/link";
import { cn } from "@/lib/utils";

const VARIANTS = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
};

const SIZES = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "btn-lg",
    xl: "btn-xl",
};

const Button = ({ variant = "primary", size = "md", href, children, className, external = false, ...props }) => {
    const classes = cn(VARIANTS[variant] ?? VARIANTS.primary, SIZES[size] ?? SIZES.md, className);
    if (href) {
        const isExternal = external || href.startsWith("http") || href.startsWith("//");
        if (isExternal) {
            return (
                <a
                    href={href}
                    className={classes}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    {...props}
                >
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={classes} {...props}>
                {children}
            </Link>
        );
    }
    return (
        <button type="button" className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;