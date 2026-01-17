import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/store/index';
import { ProductDetailData } from '../types';
import type { EcommerceState } from '../types/state';

// Base selectors
type EcommerceStateAccessor = RootState & { ecommerce: EcommerceState };

const selectEcommerceState = (state: RootState): EcommerceState | undefined =>
  (state as EcommerceStateAccessor).ecommerce;
const selectProductDetailState = createSelector(
  [selectEcommerceState],
  (ecommerce) => ecommerce?.productDetail ?? null
);

// Product Detail Selectors
export const selectCurrentProductId = createSelector(
  [selectProductDetailState],
  (productDetail) => productDetail?.currentProductId ?? null
);

export const selectProductDetailData = createSelector(
  [selectProductDetailState],
  (productDetail) => productDetail?.productData ?? null
);

export const selectSelectedImageIndex = createSelector(
  [selectProductDetailState],
  (productDetail) => productDetail?.selectedImageIndex ?? 0
);

export const selectQuantity = createSelector(
  [selectProductDetailState],
  (productDetail) => productDetail?.quantity ?? 1
);

export const selectProductDetailLoading = createSelector(
  [selectProductDetailState],
  (productDetail) => productDetail?.isLoading ?? false
);

export const selectProductDetailError = createSelector(
  [selectProductDetailState],
  (productDetail) => productDetail?.error ?? null
);

// Points Distribution Selectors
export const selectPointsDistribution = createSelector(
  [selectProductDetailState],
  (productDetail) => productDetail?.pointsDistribution ?? null
);

export const selectYouEarn = createSelector(
  [selectPointsDistribution],
  (pointsDistribution) => pointsDistribution?.youEarn ?? 0
);

export const selectNetworkEarns = createSelector(
  [selectPointsDistribution],
  (pointsDistribution) => pointsDistribution?.networkEarns ?? 0
);

export const selectPointsBreakdown = createSelector(
  [selectPointsDistribution],
  (pointsDistribution) => pointsDistribution?.breakdown ?? []
);

// Combined selector: Get product by ID from products slice
// This allows us to get product data from the products list if not yet loaded in productDetail
export const selectProductById = (productId: string) =>
  createSelector(
    [selectEcommerceState],
    (ecommerce) => {
      const products = ecommerce?.products?.items ?? [];
      const featuredProducts = ecommerce?.products?.featured ?? [];
      const allProducts = [...products, ...featuredProducts];
      return allProducts.find((p) => p.id === productId) as ProductDetailData | undefined;
    }
  );

// Combined selector: Check if current product is favorite
export const selectIsCurrentProductFavorite = createSelector(
  [selectProductDetailData, selectEcommerceState],
  (productData, ecommerce) => {
    if (!productData) return false;
    const favorites = ecommerce?.home?.favorites ?? { products: [], featured: [] };
    return (
      favorites.products.includes(productData.id) || favorites.featured.includes(productData.id)
    );
  }
);

// Combined selector: Get product with favorite status
export const selectProductDetailWithFavorite = createSelector(
  [selectProductDetailData, selectIsCurrentProductFavorite],
  (productData, isFavorite) => {
    if (!productData) return null;
    return {
      ...productData,
      isFavorite,
    };
  }
);

