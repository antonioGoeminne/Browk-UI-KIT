import * as Switch from "@radix-ui/react-switch";
import clsx from "clsx";

interface toggleProps {
  disabled?: boolean;
  id: string;
  label?: string;
  onChange?: () => {};
}

export const Toggle = (props: toggleProps) => {
  const { id, label, disabled } = props;

  return (
    <div className="flex items-center">
      <Switch.Root
        {...props}
        name="toggle"
        className="w-[48px] h-[24px] border-2 border-primary-disabled bg-white rounded-full relative focus:border-gray/50 data-[state=checked]:disabled:bg-primary/50 data-[state=checked]:disabled:border-primary/50  data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:focus:border-primary-darker-200 data-[state=checked]:hover:bg-primary-darker-200 data-[state=checked]:hover:border-primary-darker-200 outline-none cursor-default transition-all peer"
        id={id}
      >
        <div className="flex">
          <Switch.Thumb className="hidden relative left-1 data-[state=checked]:block">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.67587 7.98419C4.48741 7.81543 4.24183 7.72386 3.98839 7.72786C3.73496 7.73186 3.49242 7.83113 3.30942 8.00575C3.12642 8.18037 3.0165 8.41743 3.00171 8.66938C2.98692 8.92133 3.06835 9.16953 3.22967 9.36419L5.45922 11.6942C5.55257 11.7917 5.66474 11.8694 5.78899 11.9227C5.91325 11.976 6.04704 12.0037 6.18232 12.0042C6.31689 12.005 6.45024 11.9788 6.57446 11.9273C6.69867 11.8757 6.81122 11.7999 6.90542 11.7042L13.7146 4.70419C13.8069 4.60964 13.8796 4.49791 13.9286 4.37537C13.9775 4.25284 14.0018 4.12191 13.9999 3.99005C13.998 3.85819 13.9701 3.72799 13.9177 3.60688C13.8653 3.48577 13.7895 3.37612 13.6945 3.28419C13.5995 3.19227 13.4873 3.11986 13.3643 3.07112C13.2412 3.02238 13.1097 2.99824 12.9773 3.0001C12.8449 3.00196 12.7141 3.02977 12.5925 3.08194C12.4708 3.13412 12.3607 3.20964 12.2684 3.30419L6.19236 9.56419L4.67587 7.98419Z"
                fill="white"
              />
            </svg>
          </Switch.Thumb>

          <Switch.Thumb
            className={clsx(
              "block w-[16px] h-[16px] bg-primary rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[10px] data-[state=checked]:bg-white  peer-hover:bg-primary-darker-100",
              { ["bg-primary-disabled"]: disabled }
            )}
          />
          <Switch.Thumb className="block w-[12px] h-[12px] border-2 border-primary-disabled rounded-full transition-transform duration-100 translate-x-[8px] translate-y-[2px] will-change-transform data-[state=checked]:hidden peer-hover:bg-primary-darker-100" />
        </div>
      </Switch.Root>
      <label className="  leading-none pl-2" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
