import { Meta, StoryObj } from "@storybook/react";
import Message from "@/components/messages/Message";
import UsersLayout from "@/app/(main)/layout";

const meta = {
  title: 'Layout/Users',
  component: UsersLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof UsersLayout>;


export default meta;
type Story = StoryObj <typeof meta>;

export const Primary: Story = {
  args: {
    children:<>esto es un conteniido</>
  },
};