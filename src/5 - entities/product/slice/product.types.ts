import { IProduct } from '../types';

export interface ProductState {
  products: IProduct;
  isLoading: boolean;
  error: string;
}
