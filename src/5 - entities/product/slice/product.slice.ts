import { ProductState } from './product.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@entities/product/types';

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: ''
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    }
  }
});
