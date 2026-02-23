import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[9px] text-[15px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-white to-[#f0f0f0] text-[#1a1a1a] shadow-[0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.12)] active:translate-y-px",
        primary:
          "bg-[#0088FF] text-white hover:bg-[#0088FF]/90 active:translate-y-px",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:translate-y-px",
        outline:
          "bg-gradient-to-b from-black/85 to-black/95 text-white/80 hover:text-white active:translate-y-px",
        secondary:
          "bg-[rgb(15,15,16)] border border-[rgb(28,29,31)] text-secondary-foreground hover:border-white/20 active:translate-y-px",
        ghost: "hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[42px] px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-[42px] px-5 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
