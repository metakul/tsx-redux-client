import React from 'react';
import { Dialog, Button, Inset } from '@radix-ui/themes';
import "./Dailog.css"
interface CustomDialogProps {
  triggerButtonText: React.ReactNode | "";
  title: React.ReactNode;
  description?: React.ReactNode;
  open?:boolean | undefined
  setOpen?:((open: boolean) => void) | undefined;
  children: React.ReactNode;
}

const CustomDialog: React.FC<CustomDialogProps> = (props) => {
  return (
    <Dialog.Root open={props.open} onOpenChange={props.setOpen}>
      <Dialog.Trigger>
      <Button>{props.triggerButtonText}</Button>
      </Dialog.Trigger>

      <Dialog.Content className='custom-dailog'>
        <Dialog.Title>{props.title}</Dialog.Title>
        {props.description && <Dialog.Description>{props.description}</Dialog.Description>}
        <Inset side="x" my="5">
        {props.children}
        </Inset>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CustomDialog;
