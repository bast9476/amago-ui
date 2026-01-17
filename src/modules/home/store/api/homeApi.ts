// RTK Query API with lazy loading to prevent Hermes initialization errors
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Base URL - Update this with your actual API endpoint
const baseUrl = 'https://api.example.com'; // Replace with your API URL

export type HomeSummary = {
  welcomeMessage: string;
};

// Lazy API creation - only create when first accessed
// This prevents createApi() from being called during module load, which causes "property is not configurable" errors
let homeApiInstance: any = null;

export const getHomeApi = () => {
  if (!homeApiInstance) {
    homeApiInstance = createApi({
      reducerPath: 'homeModuleApi',
      baseQuery: fetchBaseQuery({ baseUrl }),
      tagTypes: ['Home'],
      endpoints: (builder) => ({
        // Home summary - placeholder endpoint for future integration
        getHomeSummary: builder.query<HomeSummary, void>({
          query: () => '/home/summary',
          providesTags: ['Home'],
        }),
      }),
    });
  }
  return homeApiInstance;
};

// Export hooks getter - hooks are created lazily when API is created
export const getHomeApiHooks = () => {
  const api = getHomeApi();
  if (!api) {
    throw new Error('HomeApi instance is not initialized');
  }
  return {
    useGetHomeSummaryQuery: api.useGetHomeSummaryQuery,
  };
};

// Default export for store/index.ts
export default getHomeApi;
