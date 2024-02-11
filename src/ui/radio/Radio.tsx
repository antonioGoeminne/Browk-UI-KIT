import * as RadioGroup from "@radix-ui/react-radio-group";

interface radioProps {
  id: string;
  disabled?: boolean;
  defaultValue?: string;
  onClick?: () => {};
  label: string;
}

export const Radio = (props: radioProps) => {
  const { disabled, defaultValue, label, id } = props;
  return (
    <RadioGroup.Root
      className="RadioGroupRoot"
      defaultValue={defaultValue}
      aria-label="View density"
      name="radiogroup"
    >
      <div className="flex gap-3">
        <RadioGroup.Item
          className="bg-primary-disabled h-6 w-6 rounded-full peer hover:bg-primary/50 disabled:hover:bg-primary-disabled focus:border-primary-darker-200 aria-checked:bg-primary aria-checked:disabled:bg-primary-disabled aria-checked:hover:bg-primary-darker-200"
          value="default"
          {...props}
        >
          {!disabled && (
            <RadioGroup.Indicator className="w-full after:rounded-[50%] h-full relative flex items-center justify-center after:bg-white after:h-2.5 after:w-2.5 " />
          )}
        </RadioGroup.Item>
        <label className="peer-disabled:text-gray/80" htmlFor={id}>
          {label}
        </label>
      </div>
    </RadioGroup.Root>
  );
};
