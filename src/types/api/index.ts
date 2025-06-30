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
