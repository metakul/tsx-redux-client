import { ReactNode } from 'react';

export interface CustomDialogProps {
  triggerButtonText: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  userType?: React.ReactNode;
  children: React.ReactNode;
}

export interface HomeButtonProps {
  onClick?: () => void; 
  children?: ReactNode;
}

export interface CustomTextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (value: string) => void;
  children?: ReactNode;
}

export interface CustomHeadingProps {
  placeholder?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}

export interface CustomLinkProps {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
}