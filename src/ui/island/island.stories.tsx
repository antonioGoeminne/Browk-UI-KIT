import type { Meta, StoryObj } from "@storybook/react";
import { Island } from "./Island";

const meta = {
  title: "ui/Island",
  component: Island,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Island>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    head: "Head",
    description: "Description",
    badgeText: "Your text"
  },
};
