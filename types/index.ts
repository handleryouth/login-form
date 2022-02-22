import { ReactNode } from "react";

export interface LoginConfig {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
export interface CredentialsProperties {
  email: string;
  password: string;
}

export type LayoutProps = {
  children: ReactNode;
};

export interface PortalProps {
  children: React.ReactNode;
  visible: boolean;
}

export interface InputProps {
  label: string;
  icon: ReactNode;
  type?: string;
  placeholder: string;
  validator?: string;
  toggleFunction?: (value: string) => void;
}
