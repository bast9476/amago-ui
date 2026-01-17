// RTK Query API with lazy loading to prevent Hermes initialization errors
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductData, FeaturedProductData } from '../types';

// Base URL - Update this with your actual API endpoint
const baseUrl = 'https://api.example.com'; // Replace with your API URL

// Lazy API creation - only create when first accessed
// This prevents createApi() from being called during module load, which causes "property is not configurable" errors
let homeApiInstance: ReturnType<typeof createApi> | null = null;

export const getHomeApi = () => {
  if (!homeApiInstance) {
    homeApiInstance = createApi({
      reducerPath: 'ecommerceHomeApi',
      baseQuery: fetchBaseQuery({ baseUrl }),
      tagTypes: ['Products', 'FeaturedProducts'],
      endpoints: (builder) => ({
        // Get All Products
        getProducts: builder.query<ProductData[], void>({
          query: () => '/products',
          providesTags: ['Products'],
        }),

        // Get Featured Products
        getFeaturedProducts: builder.query<FeaturedProductData[], void>({
          query: () => '/products/featured',
          providesTags: ['FeaturedProducts'],
        }),

        // Get Product by ID
        getProductById: builder.query<ProductData, string>({
          query: (id) => `/products/${id}`,
          providesTags: (result, error, id) => [{ type: 'Products', id }],
        }),

        // Toggle Product Favorite (if API supports it)
        toggleProductFavorite: builder.mutation<
          { success: boolean; isFavorite: boolean },
          { productId: string; isFavorite: boolean }
        >({
          query: ({ productId, isFavorite }) => ({
            url: `/products/${productId}/favorite`,
            method: 'POST',
            body: { isFavorite },
          }),
          invalidatesTags: (result, error, { productId }) => [
            { type: 'Products', id: productId },
            'Products',
          ],
        }),

        // Toggle Featured Product Favorite (if API supports it)
        toggleFeaturedProductFavorite: builder.mutation<
          { success: boolean; isFavorite: boolean },
          { productId: string; isFavorite: boolean }
        >({
          query: ({ productId, isFavorite }) => ({
            url: `/products/featured/${productId}/favorite`,
            method: 'POST',
            body: { isFavorite },
          }),
          invalidatesTags: (result, error, { productId }) => [
            { type: 'FeaturedProducts', id: productId },
            'FeaturedProducts',
          ],
        }),
      }),
    });
  }
  return homeApiInstance;
};

// Export hooks getter - hooks are created lazily when API is created
export const getHomeApiHooks = () => {
  const api = getHomeApi();
  return {
    useGetProductsQuery: api.useGetProductsQuery,
    useGetFeaturedProductsQuery: api.useGetFeaturedProductsQuery,
    useGetProductByIdQuery: api.useGetProductByIdQuery,
    useToggleProductFavoriteMutation: api.useToggleProductFavoriteMutation,
    useToggleFeaturedProductFavoriteMutation: api.useToggleFeaturedProductFavoriteMutation,
  };
};

// Default export for store/index.ts
export default getHomeApi;

