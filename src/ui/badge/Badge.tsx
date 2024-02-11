import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utils/cn";

const badgeVariants = cva("rounded-full text-center font-bold text-[13px] flex items-center justify-center", {
  variants: {
    variant: {
      primary: "bg-primary text-white",
      secondary: "bg-white text-primary border border-primary",
      white: "bg-white text-primary shadow-md",
    },
    size: {
      default: "h-6 px-2 py-3 max-w-[85px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface badgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
      label: string
    }

export const Badge = (props: badgeProps) => {
  const { className, label, variant, size } = props;
  return <div className={cn(badgeVariants({ className, variant, size }))}>{label}</div>;
};
