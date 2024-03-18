import { ReactNode } from 'react';

export interface CustomDialogProps {
  triggerButtonText: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  userType?: React.ReactNode;
  children: React.ReactNode;
  className:string | undefined;
}

export interface HomeButtonProps {
  onClick?: () => void; 
  children?: ReactNode;
}

export interface CustomTextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  className?: string;
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

export interface CustomTabProps {
  value: string;
  children: ReactNode;
}

export interface OverViewProps {
  value?: string;
  children?: ReactNode;
}
export interface UserActivityProps {
  value?: string;
  children?: ReactNode;
}
export interface UserProfileProps {
  value?: string;
  children?: ReactNode;
}