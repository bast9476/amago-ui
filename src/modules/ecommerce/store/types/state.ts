import type { HomeState } from '../slices/homeSlice';
import type { ProductsState } from '../slices/productsSlice';
import type { ProductDetailState } from '../slices/productDetailSlice';
import type { CartState } from '../slices/cartSlice';

export interface EcommerceState {
  home: HomeState;
  products: ProductsState;
  productDetail: ProductDetailState;
  cart: CartState;
}

