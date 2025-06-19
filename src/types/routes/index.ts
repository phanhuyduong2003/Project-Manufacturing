import { ComponentType, ReactNode } from "react";

export interface RouteType {
  path: string;
  component: ComponentType;
  layout?: ComponentType<{ children: ReactNode }>;
}
