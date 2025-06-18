import paths from "@/config/paths";
import { Login } from "@/pages";
import { RouteType } from "@/types/routes";

export const privateRoutes: RouteType[] = [];
export const publicRoutes: RouteType[] = [
  {
    path: paths.login,
    component: Login,
  },
];
