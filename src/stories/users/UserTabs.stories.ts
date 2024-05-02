import { Meta, StoryObj } from "@storybook/react";
import UsersTabs from "@/components/messages/users/UsersTabs";

const meta = {
  title: 'Users/UserTabs',
  component: UsersTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UsersTabs>;


export default meta;
type Story = StoryObj <typeof meta>;


const messages = [
    {
      name: "Pedro Lopo",
      username: "lopo",
      message: "segundo mensaje",
      repliesCount: 13
    },
    {
      name: "Pedro Lopo",
      username: "lopo",
      message: "primer mensaje",
      repliesCount: 22
    }
]


const replies = [
    {
      name: "Pedro Lopo",
      username: "lopo",
      message: "segundo mensaje de respuesta",
      repliesCount: 13
    },
    {
      name: "Pedro Lopo",
      username: "lopo",
      message: "primer mensaje de respuesta",
      repliesCount: 22
    }
]

export const MessageTab: Story = {
  args: {
    messages: messages,
    replies: replies,
  },
};