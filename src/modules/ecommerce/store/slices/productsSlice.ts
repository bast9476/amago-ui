import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductData, FeaturedProductData } from '../types';

export interface ProductsState {
  items: ProductData[];
  featured: FeaturedProductData[];
  initialized: boolean;
}

const initialState: ProductsState = {
  items: [],
  featured: [],
  initialized: false,
};

const productsSlice = createSlice({
  name: 'ecommerce/products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductData[]>) => {
      state.items = action.payload;
      state.initialized = true;
    },
    setFeaturedProducts: (state, action: PayloadAction<FeaturedProductData[]>) => {
      state.featured = action.payload;
    },
    updateProduct: (state, action: PayloadAction<ProductData>) => {
      const index = state.items.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    updateFeaturedProduct: (state, action: PayloadAction<FeaturedProductData>) => {
      const index = state.featured.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.featured[index] = action.payload;
      }
    },
  },
});

export const { setProducts, setFeaturedProducts, updateProduct, updateFeaturedProduct } =
  productsSlice.actions;

export default productsSlice.reducer;

