export type Product = {
  id: string;
  author_id: string;
  amount: number;
  status: 'pending' | 'paid';
  date?: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestProduct = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestProductRaw = Omit<LatestProduct, 'amount'> & {
  amount: number;
};

export type ProductsTable = {
  id: string;
  author_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type ProductForm = {
  id: string;
  author_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type LatestProductsResponse = {
  products: LatestProduct[];
  error: string | null;
};

export type ProductState = {
  product: Product | null;
  errors?: {
    authorId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
