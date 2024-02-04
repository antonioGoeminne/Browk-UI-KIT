import type { Meta, StoryObj } from "@storybook/react";
import plus from "../../../public/plus.svg";
import plus_primary from "../../../public/plus_primary.svg";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ui/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const label = "Кнопка";

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label,
  },
};

export const Secondary: Story = {
  args: {
    label,
    variant: "secondary",
  },
};

export const WithStartIcon: Story = {
  args: {
    label,
    startIcon: plus,
  },
};

export const IconButton: Story = {
  args: {
    label,
    iconButton: true,
    icon: plus,
  },
};

export const IconButtonSecondary: Story = {
  args: {
    label,
    iconButton: true,
    icon: plus_primary,
    variant: "secondary",
  },
};
