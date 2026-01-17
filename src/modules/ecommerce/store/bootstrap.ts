import type { AppDispatch, RootState } from '@src/store/index';
import type { ThunkAction, AnyAction } from '@reduxjs/toolkit';
import { getInitialProducts, getInitialFeaturedProducts } from './initialData';
import { initializeFavorites } from './slices/homeSlice';
import { setProducts, setFeaturedProducts } from './slices/productsSlice';
import { setProductDetail, setPointsDistribution, PointsDistributionData } from './slices/productDetailSlice';
import { initializeCart, CartItemData } from './slices/cartSlice';
import { ProductDetailData } from './types';
import {
  DEFAULT_PRODUCT_RATING,
  DEFAULT_REVIEWS_COUNT,
  DEFAULT_PRODUCT_POINTS,
  DEFAULT_YOU_EARN_POINTS,
  DEFAULT_NETWORK_EARNS_POINTS,
  DEFAULT_POINTS_BREAKDOWN,
} from './constants';

type EcommerceThunk = ThunkAction<Promise<void> | void, RootState, unknown, AnyAction>;

import type { EcommerceState } from './types/state';

type EcommerceStateAccessor = RootState & { ecommerce: EcommerceState };

const selectEcommerceState = (state: RootState): EcommerceState | undefined =>
  (state as EcommerceStateAccessor).ecommerce;

export const bootstrapHomeData = (): EcommerceThunk => (dispatch, getState) => {
  const ecommerce = selectEcommerceState(getState());
  const isInitialized = ecommerce?.home?.initialized ?? false;

  if (isInitialized) {
    return;
  }

  // Get initial data
  const initialProducts = getInitialProducts();
  const initialFeaturedProducts = getInitialFeaturedProducts();

  // Extract favorite IDs from initial data
  const favoriteProductIds = initialProducts
    .filter((p) => p.isFavorite)
    .map((p) => p.id);
  const favoriteFeaturedIds = initialFeaturedProducts
    .filter((p) => p.isFavorite)
    .map((p) => p.id);

  // Initialize favorites in Redux
  dispatch(
    initializeFavorites({
      products: favoriteProductIds,
      featured: favoriteFeaturedIds,
    })
  );

  // Set products in products slice (for now, until API is integrated)
  dispatch(setProducts(initialProducts));
  dispatch(setFeaturedProducts(initialFeaturedProducts));
};

// Bootstrap cart data with initial 3 items
export const bootstrapCartData = (): EcommerceThunk => (dispatch, getState) => {
  const ecommerce = selectEcommerceState(getState());
  const isInitialized = ecommerce?.cart?.initialized ?? false;

  if (isInitialized) {
    return;
  }

  // Import featured product images for cart items
  const featureImage1 = require('@modules/ecommerce/assets/feature-1.png');
  const featureImage2 = require('@modules/ecommerce/assets/feature-2.png');
  const featureImage3 = require('@modules/ecommerce/assets/feature-3.png');

  // Initialize cart with 3 default items
  const initialCartItems: CartItemData[] = [
    {
      id: '1',
      imageSource: featureImage1,
      title: 'Snopy Headphone',
      description: 'Black, Price',
      price: '৳549',
      quantity: 1,
    },
    {
      id: '2',
      imageSource: featureImage2,
      title: 'Sport Band',
      description: 'Black, Price',
      price: '৳549',
      quantity: 1,
    },
    {
      id: '3',
      imageSource: featureImage3,
      title: 'Laptop Lenovo',
      description: 'Black, Price',
      price: '৳549',
      quantity: 1,
    },
  ];

  dispatch(initializeCart(initialCartItems));
};

// Bootstrap product detail data
export const bootstrapProductDetail = (productId: string): EcommerceThunk => (dispatch, getState) => {
  const ecommerce = selectEcommerceState(getState());
  const currentProductId = ecommerce?.productDetail?.currentProductId;

  // If product is already loaded, don't reload
  if (currentProductId === productId && ecommerce?.productDetail?.productData) {
    return;
  }

  // Get products from state
  const products = ecommerce?.products?.items ?? [];
  const featuredProducts = ecommerce?.products?.featured ?? [];
  const allProducts = [...products, ...featuredProducts];

  // Find product by ID
  const product = allProducts.find((p) => p.id === productId);

  if (product) {
    // Convert to ProductDetailData format
    // For now, we'll use the basic product data and extend it
    // In the future, this will come from API with full details
    const productDetailData: ProductDetailData = {
      ...product,
      // Add default values for product detail specific fields
      images: [product.imageSource], // For now, use single image
      rating: DEFAULT_PRODUCT_RATING,
      totalReviews: DEFAULT_REVIEWS_COUNT,
      points: DEFAULT_PRODUCT_POINTS,
      inStock: true, // Default stock status
    };

    dispatch(setProductDetail(productDetailData));

    // Set default points distribution data
    // In the future, this will come from API
    const defaultPointsDistribution: PointsDistributionData = {
      youEarn: DEFAULT_YOU_EARN_POINTS,
      networkEarns: DEFAULT_NETWORK_EARNS_POINTS,
      breakdown: [...DEFAULT_POINTS_BREAKDOWN],
    };

    dispatch(setPointsDistribution(defaultPointsDistribution));
  }
};

