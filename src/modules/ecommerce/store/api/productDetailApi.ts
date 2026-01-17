// RTK Query API with lazy loading to prevent Hermes initialization errors
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductDetailData } from '../types';

// Base URL - Update this with your actual API endpoint
const baseUrl = 'https://api.example.com'; // Replace with your API URL

// Lazy API creation - only create when first accessed
// This prevents createApi() from being called during module load, which causes "property is not configurable" errors
let productDetailApiInstance: ReturnType<typeof createApi> | null = null;

export const getProductDetailApi = () => {
  if (!productDetailApiInstance) {
    productDetailApiInstance = createApi({
      reducerPath: 'ecommerceProductDetailApi',
      baseQuery: fetchBaseQuery({ baseUrl }),
      tagTypes: ['ProductDetail'],
      endpoints: (builder) => ({
        // Get Product Detail by ID
        getProductDetail: builder.query<ProductDetailData, string>({
          query: (id) => `/products/${id}`,
          providesTags: (result, error, id) => [{ type: 'ProductDetail', id }],
        }),

        // Get Product Images
        getProductImages: builder.query<{ images: string[] }, string>({
          query: (id) => `/products/${id}/images`,
          providesTags: (result, error, id) => [{ type: 'ProductDetail', id }],
        }),

        // Get Product Reviews
        getProductReviews: builder.query<
          {
            overallRating: number;
            totalReviews: number;
            ratingBreakdown: Array<{ stars: number; count: number; percentage: number }>;
            reviews: Array<{
              id: string;
              userName: string;
              userInitial: string;
              rating: number;
              timeAgo: string;
              comment: string;
            }>;
          },
          string
        >({
          query: (id) => `/products/${id}/reviews`,
          providesTags: (result, error, id) => [{ type: 'ProductDetail', id }],
        }),

        // Add Product to Cart
        addToCart: builder.mutation<
          { success: boolean; cartItemId: string },
          { productId: string; quantity: number }
        >({
          query: ({ productId, quantity }) => ({
            url: `/cart/items`,
            method: 'POST',
            body: { productId, quantity },
          }),
          invalidatesTags: ['ProductDetail'],
        }),

        // Update Cart Item Quantity
        updateCartItemQuantity: builder.mutation<
          { success: boolean },
          { cartItemId: string; quantity: number }
        >({
          query: ({ cartItemId, quantity }) => ({
            url: `/cart/items/${cartItemId}`,
            method: 'PATCH',
            body: { quantity },
          }),
          invalidatesTags: ['ProductDetail'],
        }),

        // Share Product
        shareProduct: builder.mutation<{ success: boolean; shareUrl: string }, string>({
          query: (productId) => ({
            url: `/products/${productId}/share`,
            method: 'POST',
          }),
        }),
      }),
    });
  }
  return productDetailApiInstance;
};

// Export hooks getter - hooks are created lazily when API is created
export const getProductDetailApiHooks = () => {
  const api = getProductDetailApi();
  return {
    useGetProductDetailQuery: api.useGetProductDetailQuery,
    useGetProductImagesQuery: api.useGetProductImagesQuery,
    useGetProductReviewsQuery: api.useGetProductReviewsQuery,
    useAddToCartMutation: api.useAddToCartMutation,
    useUpdateCartItemQuantityMutation: api.useUpdateCartItemQuantityMutation,
    useShareProductMutation: api.useShareProductMutation,
  };
};

// Default export for store/index.ts
export default getProductDetailApi;

