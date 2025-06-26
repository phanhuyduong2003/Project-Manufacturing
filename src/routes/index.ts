import paths from "@/config/paths";
import DefaultLayout from "@/layouts/DefaultLayout";
import {
  Account,
  AccountCreate,
  AccountDetail,
  Category,
  CategoryCreate,
  CategoryDetail,
  Customer,
  CustomerCreate,
  CustomerDetail,
  Formula,
  Login,
  Material,
  MaterialCreate,
  MaterialDetail,
  Product,
  ProductCreate,
  ProductDetail,
} from "@/pages";
import { RouteType } from "@/types/routes";

export const privateRoutes: RouteType[] = [
  {
    path: paths.formula,
    component: Formula,
    layout: DefaultLayout,
  },
  /* Product */
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
  /* Declare category */
  {
    path: paths.declareCategory,
    component: Category,
    layout: DefaultLayout,
  },
  {
    path: paths.declareCategoryCreate,
    component: CategoryCreate,
    layout: DefaultLayout,
  },
  {
    path: paths.declareCategoryDetail,
    component: CategoryDetail,
    layout: DefaultLayout,
  },
  /* Declare material */
  {
    path: paths.declareMaterial,
    component: Material,
    layout: DefaultLayout,
  },
  {
    path: paths.declareMaterialCreate,
    component: MaterialCreate,
    layout: DefaultLayout,
  },
  {
    path: paths.declareMaterialDetail,
    component: MaterialDetail,
    layout: DefaultLayout,
  },
  /* Declare customer */
  {
    path: paths.declareCustomer,
    component: Customer,
    layout: DefaultLayout,
  },
  {
    path: paths.declareCustomerCreate,
    component: CustomerCreate,
    layout: DefaultLayout,
  },
  {
    path: paths.declareCustomerDetail,
    component: CustomerDetail,
    layout: DefaultLayout,
  },
  /* Account */
  {
    path: paths.account,
    component: Account,
    layout: DefaultLayout,
  },
  {
    path: paths.accountCreate,
    component: AccountCreate,
    layout: DefaultLayout,
  },
  {
    path: paths.accountDetail,
    component: AccountDetail,
    layout: DefaultLayout,
  },
];
export const publicRoutes: RouteType[] = [
  {
    path: paths.login,
    component: Login,
  },
];
