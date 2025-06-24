import { SVGProps } from "react";

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
