import * as React from "react"
import { cn } from "@/lib/utils"

// Wait, I forgot to install class-variance-authority and @radix-ui/react-slot.
// I will stick to a simpler button for now to avoid specific shadcn dependencies unless I really need them.
// Actually, for a "modern" site, these are nice. But I can write a simple component without them for now to save time/dependencies 
// OR I can just install them. The prompt asked for "Next.js with React and TypeScript" and "Tailwind".
// I'll stick to standard props without `cva` if possible, or just install `clsx` and `tailwind-merge` which I have.
// I'll write a simple Button component using `cn`.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-teal-700 text-white hover:bg-teal-800 shadow-md",
            secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
            outline: "border border-slate-200 bg-transparent hover:bg-slate-100 text-slate-900",
            ghost: "hover:bg-slate-100 text-slate-700",
        };

        const sizes = {
            sm: "h-9 px-3 text-sm",
            md: "h-10 px-4 py-2",
            lg: "h-12 px-8 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
