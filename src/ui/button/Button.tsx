import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utils/cn";
import { Spinner } from "./Spinner";
import Image from "next/image";

const buttonVariants = cva(
  "inline-flex items-center roboto justify-center whitespace-nowrap rounded-[4px]  ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-darker-100 active:bg-primary-darker-200 focus:border-2 focus:border-primary-darker-200 disabled:bg-primary-disabled",
        secondary:
          "bg-white border-2 border-primary text-primary hover:bg-primary/20  hover:bg-primary/10 active:bg-primary/20 focus:border-2 focus:border-gray/50",
      },
      size: {
        default: "h-11 px-[17px] ",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
  startIcon?: string;
  iconButton?: boolean;
  icon?: string;
  circle?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      label,
      asChild = false,
      isLoading,
      iconButton = false,
      startIcon = null,
      icon,
      circle,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }), {
          ["gap-1"]: startIcon,
          ["min-w-[96px]"]: !startIcon,
          ["min-w-[124px]"]: startIcon,
          ["w-[46px] h-[46px]  min-w-0 px-0"]: iconButton,
          ["w-[46px] h-[46px] min-w-0 px-0 rounded-full"]: iconButton && circle,
        })}
        {...props}
      >
        {iconButton && icon && !isLoading ? (
          <Image width={24} height={24} src={icon} alt="left icon" />
        ) : (
          <>
            {startIcon && !isLoading && (
              <Image width={24} height={24} src={startIcon} alt="left icon" />
            )}
          </>
        )}
        {isLoading && <Spinner variant={variant || "primary"} />}
        {!iconButton && !isLoading && label}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
