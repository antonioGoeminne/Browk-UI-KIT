import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "ui/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Your text",
  },
};

export const Secondary: Story = {
  args: {
    label: "Your text",
    variant:'secondary'
  },
};

export const White: Story = {
  args: {
    label: "Your text",
    variant:'white'
  },
};

