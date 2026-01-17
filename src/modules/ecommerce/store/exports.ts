/**
 * Centralized exports for the ecommerce module store
 *
 * This file provides a clean, organized way to import Redux Toolkit features
 * while maintaining Hermes compatibility through lazy loading.
 *
 * Usage:
 *   import { toggleProductFavorite, selectProducts } from '@modules/ecommerce/store';
 */

// Export all action creators from slices
export {
  toggleProductFavorite,
  toggleFeaturedProductFavorite,
  setSearchQuery,
  setSelectedCategory,
  initializeFavorites,
} from './slices/homeSlice';

export { setProducts, setFeaturedProducts, updateProduct, updateFeaturedProduct } from './slices/productsSlice';

// Export product detail actions
export {
  setProductDetail,
  setSelectedImageIndex,
  setQuantity,
  incrementQuantity,
  decrementQuantity,
  setLoading,
  setError,
  setPointsDistribution,
  clearPointsDistribution,
  clearProductDetail,
} from './slices/productDetailSlice';

// Export product detail types
export type { PointsDistributionData } from './slices/productDetailSlice';

// Export cart actions
export {
  initializeCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQuantity as incrementCartQuantity,
  decrementQuantity as decrementCartQuantity,
  clearCart,
} from './slices/cartSlice';

// Export cart types
export type { CartItemData } from './slices/cartSlice';

// Export bootstrap thunks
export { bootstrapHomeData, bootstrapProductDetail, bootstrapCartData } from './bootstrap';

// Export all selectors
export * from './selectors/homeSelectors';
export * from './selectors/productDetailSelectors';
export * from './selectors/cartSelectors';

// Export RTK Query hooks getters
// Usage: const { useGetProductsQuery } = getHomeApiHooks();
export { getHomeApiHooks } from './api/homeApi';
export { getProductDetailApiHooks } from './api/productDetailApi';

// Export types
export * from './types';

