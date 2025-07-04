import { FormInstance } from "antd";
import { ReactNode, SVGProps } from "react";

import { RootState } from "@/redux/store";
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

export interface ProductTabProps {
  form: FormInstance;
  declareState: RootState["declare"];
}

export interface FormulaTabProps {
  disabledFormula: boolean;
  setActiveTab: (key: string) => void;
}

export interface FormulaDetailTabProps {
  setOpenMaterial: (state: boolean) => void;
  setOpenConfirm: (state: boolean) => void;
  setOpenFormula: (state: boolean) => void;
}

export interface ApprovedHistoryTabProps {
  setOpenNote: (state: boolean) => void;
}

export interface ModalCommonProps {
  open: boolean;
  setOpen: (state: boolean) => void;
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
