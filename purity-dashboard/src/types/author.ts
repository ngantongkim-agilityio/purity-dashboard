export type Author = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type AuthorsTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_products: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedAuthorsTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_products: number;
  total_pending: string;
  total_paid: string;
};

export type AuthorField = {
  id: string;
  name: string;
};
