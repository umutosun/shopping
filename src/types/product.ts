export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
  quantity: number;
}
export interface ProductState {
  data: Product[];
  basket: Product[];
  loading: boolean;
  error: string;
  detail: Product[];
}
export interface Category {
  category: [];
  loading: boolean;
}
export interface BasketState {
  products: Product[];
  itemCount: number;
  totalAmount: number;
}
