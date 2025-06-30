import { ReactNode, SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  viewBox?: string;
  className?: string;
}

export interface HeaderProps {
  title: string;
  className?: {
    wrapper?: string;
    icon?: string;
    title?: string;
  };
}

export interface EmptyProps {
  description: string | ReactNode;
  href: string;
  buttonText: string;
}

export interface ValuesFormAccount {
  status: "apply" | "not_apply";
  role: string[];
  username: string;
  name: string;
  email: string;
  password: string;
}
