import React from 'react';
import { Dialog, Button, Inset } from '@radix-ui/themes';
import "./Dailog.css"
interface CustomDialogProps {
  triggerButtonText: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
}

const CustomDialog: React.FC<CustomDialogProps> = ({ triggerButtonText, title, description, children }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
      <Button>{triggerButtonText}</Button>
      </Dialog.Trigger>

      <Dialog.Content className='custom-dailog'>
        <Dialog.Title>{title}</Dialog.Title>
        {description && <Dialog.Description>{description}</Dialog.Description>}
        <Inset side="x" my="5">
        {children}
        </Inset>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CustomDialog;
