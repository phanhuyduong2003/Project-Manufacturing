import paths from "@/config/paths";
import DefaultLayout from "@/layouts/DefaultLayout";
import { Formula, Login, Product, ProductCreate, ProductDetail } from "@/pages";
import { RouteType } from "@/types/routes";

export const privateRoutes: RouteType[] = [
  {
    path: paths.product,
    component: Product,
    layout: DefaultLayout,
  },
  {
    path: paths.productCreate,
    component: ProductCreate,
    layout: DefaultLayout,
  },
  {
    path: paths.productDetail,
    component: ProductDetail,
    layout: DefaultLayout,
  },
  {
    path: paths.formula,
    component: Formula,
    layout: DefaultLayout,
  },
];
export const publicRoutes: RouteType[] = [
  {
    path: paths.login,
    component: Login,
  },
];
