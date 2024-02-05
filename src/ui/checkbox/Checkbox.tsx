import { cn } from "@utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

const checkVariants = cva(
  `        cursor-pointer
        hover:bg-gray-300
        active:bg-gray-200
        focus:border-2 focus:border-gray/50
        disabled:border-gray-100/50
        disabled:bg-gray-300
            peer relative appearance-none shrink-0 border border-gray-100 rounded-[4px] mt-1 bg-white
            checked:bg-primary checked:border-0
            checked:hover:bg-primary-darker-100
            checked:active:bg-primary-darker-200
            checked:focus:border-primary-darker-200
            checked:disabled:bg-primary-disabled
          `,
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "w-6 h-6 ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof checkVariants> {
  disabled?: boolean;
  defaultChecked?: boolean;
  id: string;
  label: string;
  error?: boolean;
  indeterminate?: boolean;
  size?: any; // i had to add any because a conflict between cva and input html attribute
}

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const { error, variant, size, className, indeterminate } = props;
  return (
    <div className="w-full flex gap-2 items-center relative">
      <input
        className={cn(checkVariants({ variant, size, className }), {
          ["bg-red-100 hover:bg-red-100/80 border-0"]: error,
        })}
        type="checkbox"
        {...props}
      />
      {!indeterminate && (
        <svg
          className="absolute left-1 w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )}
      {indeterminate && (
        <svg
          className="absolute left-[6px] w-3 h-3 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
          width="12"
          height="2"
          viewBox="0 0 12 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="12" height="2" rx="1" fill="white" />
        </svg>
      )}
      <label
        className={cn("cursor-pointer", {
          ["text-red"]: error,
        })}
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </div>
  );
};
