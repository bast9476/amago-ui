import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/store/index';
import { ProductData, FeaturedProductData } from '../types';
import type { EcommerceState } from '../types/state';

// Base selectors
type EcommerceStateAccessor = RootState & { ecommerce: EcommerceState };

const selectEcommerceState = (state: RootState): EcommerceState | undefined =>
  (state as EcommerceStateAccessor).ecommerce;

// Home UI State Selectors
export const selectHomeUI = createSelector([selectEcommerceState], (ecommerce) => ecommerce?.home?.ui ?? { searchQuery: '', selectedCategory: undefined });
export const selectSearchQuery = createSelector([selectHomeUI], (ui) => ui.searchQuery);
export const selectSelectedCategory = createSelector([selectHomeUI], (ui) => ui.selectedCategory);

// Favorites Selectors
export const selectProductFavorites = createSelector(
  [selectEcommerceState],
  (ecommerce) => ecommerce?.home?.favorites?.products ?? []
);

export const selectFeaturedProductFavorites = createSelector(
  [selectEcommerceState],
  (ecommerce) => ecommerce?.home?.favorites?.featured ?? []
);

// Products Data Selectors (from products slice - for now, until API is integrated)
export const selectProductsData = createSelector(
  [selectEcommerceState],
  (ecommerce) => (ecommerce?.products?.items as ProductData[]) ?? null
);

export const selectFeaturedProductsData = createSelector(
  [selectEcommerceState],
  (ecommerce) => (ecommerce?.products?.featured as FeaturedProductData[]) ?? null
);

// Combined Selectors - Merge API data with favorites
export const selectProducts = createSelector(
  [selectProductsData, selectProductFavorites],
  (productsData, favorites) => {
    if (!productsData) return null;
    return productsData.map((product) => ({
      ...product,
      isFavorite: favorites.includes(product.id),
    }));
  }
);

export const selectFeaturedProducts = createSelector(
  [selectFeaturedProductsData, selectFeaturedProductFavorites],
  (featuredData, favorites) => {
    if (!featuredData) return null;
    return featuredData.map((product) => ({
      ...product,
      isFavorite: favorites.includes(product.id),
    }));
  }
);

// Loading States (for now, always false since we're using initial data)
// When API is integrated, these will check RTK Query loading states
export const selectProductsLoading = createSelector(
  [selectEcommerceState],
  (ecommerce) => !(ecommerce?.products?.initialized ?? false)
);

export const selectFeaturedProductsLoading = createSelector(
  [selectEcommerceState],
  (ecommerce) => !(ecommerce?.products?.initialized ?? false)
);

// Initialized State
export const selectIsInitialized = createSelector(
  [selectEcommerceState],
  (ecommerce) => ecommerce?.home?.initialized ?? false
);

