import React, { InputHTMLAttributes, useState } from "react";
import clsx from "clsx";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  label: string;
  size?: any;
  id: string;
}

const defaultClass =
  " w-full h-9 px-4 text-sm peer outline-none disabled:text-gray/50";

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const { className, label, id, error, success } = props;
  return (
    <div
      className={clsx(
        "w-56 relative group shadow-md py-1 rounded hover:shadow-lg transition-all",
        { ["bg-red-100"]: error },
        { ["bg-green-100"]: success }
      )}
    >
      <input
        type="text"
        required
        {...props}
        className={clsx(
          defaultClass,
          className,
          { ["bg-red-100"]: error },
          { ["bg-green-100"]: success }
        )}
      />
      <label
        htmlFor={id}
        className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-disabled:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[4px] group-focus-within:translate-x-[14px] peer-valid:-translate-y-[4px] peer-disabled:-translate-y-[14px] peer-disabled:translate-x-[5px] peer-valid:translate-x-[14px] group-focus-within:pl-0 peer-valid:pl-0  peer-disabled:text-gray/20"
      >
        {label}
      </label>
    </div>
  );
};
