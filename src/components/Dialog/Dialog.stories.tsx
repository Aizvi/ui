import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Dialog } from "./Dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Delete account</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Delete account</Dialog.Title>
        <Dialog.Description>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </Dialog.Description>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="secondary">Cancel</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button variant="danger">Delete</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Open dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content showCloseButton={false}>
        <Dialog.Title>Heads up</Dialog.Title>
        <Dialog.Description>
          You must choose an option below to close this dialog.
        </Dialog.Description>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button>Got it</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};
