export interface Account {
  id: number;
  name: string;
  username: string;
  password: string;
  role: string;
  createdProducts: unknown[];
  createdFormulas: unknown[];
  approvedFormulas: unknown[];
}

export interface DataUpdateAccount {
  id: number;
  role: string;
  username: string;
  name: string;
  email: string;
  password: string;
  createdProducts: unknown[];
  createdFormulas: unknown[];
  approvedFormulas: unknown[];
}

export interface DataCreateAccount {
  role: string;
  username: string;
  name: string;
  password: string;
}

export interface Product {
  id: number;
  name: string;
  status: boolean;
  createdAt: string;
  createdById: number;
  createdBy: Account;
  typeId: number;
  type: Category;
}

export interface DataCreateProduct {
  name: string;
  status: boolean;
  typeId: number;
  createdAt: string;
  createdById: number;
}

export interface Formula {
  id: number;
  name: string;
  createdAt: string;
  productId: number;
  product: Product;
  createdById: number;
  createdBy: Account;
  approvedById: number;
  approvedBy: Account;
  formulaMaterials: FormulaMaterial[];
  formulaProperties: [];
}

export interface FormulaMaterial {
  formulaId: number;
  formula: Formula;
  materialId: number;
  material: Material;
  quantity: number;
  unitId: number;
  unit: Unit;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}

export interface DataCreateCategory {
  name: string;
}

export interface DataUpdateCategory {
  id: number;
  name: string;
}

export interface Material {
  id: number;
  name: string;
  formulaMaterials: [];
}

export interface DataCreateMaterial {
  name: string;
}

export interface DataUpdateMaterial {
  id: number;
  name: string;
  formulaMaterials: [];
}

export interface Unit {
  id: number;
  name: string;
  formulaMaterials: [];
}

export interface DataCreateUnit {
  name: string;
}

export interface DataUpdateUnit {
  id: number;
  name: string;
  formulaMaterials: [];
}
