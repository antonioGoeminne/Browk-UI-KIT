import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from "./Notification";

const meta = {
  title: "ui/Notification",
  component: Notification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    head: "Head",
    description: "Description",
    status: "success",
  },
};

export const Error: Story = {
  args: {
    head: "Head",
    description: "Description",
    status: "error",
  },
};

export const Info: Story = {
  args: {
    head: "Head",
    description: "Description",
    status: "info",
  },
};

export const WithButton: Story = {
  args: {
    head: "Head",
    description: "Description",
    status: "info",
    withButton: true,
  },
};
