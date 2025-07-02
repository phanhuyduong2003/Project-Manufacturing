import { ReactNode, SVGProps } from "react";

import { Product } from "@/types/api";

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

export interface TableProductProps {
  data: Product[];
}

export interface ValuesFormAccount {
  status: "apply" | "not_apply";
  role: string[];
  username: string;
  name: string;
  email: string;
  password: string;
}

export interface ValuesFormCategory {
  status: "apply" | "not_apply";
  name: string;
}

export interface ValuesFormProduct {
  status: boolean;
  code: string;
  typeId: number;
  createdAt: string;
  createdBy: string;
}

export interface ValuesFormMaterial {
  status: "apply" | "not_apply";
  name: string;
  unit: string;
  description: string;
}

export interface ValuesFormCreateUnit {
  unit: string;
  description: string;
}

export interface ValuesFormUpdateUnit {
  id: number;
  unit: string;
  description: string;
}
