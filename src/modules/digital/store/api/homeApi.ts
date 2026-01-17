// RTK Query API with lazy loading to prevent Hermes initialization errors
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category, FeaturedService, TopRatedProvider, RecentProject, HowItWorksStep } from '../types';

// Base URL - Update this with your actual API endpoint
const baseUrl = 'https://api.example.com'; // Replace with your API URL

// Lazy API creation - only create when first accessed
// This prevents createApi() from being called during module load, which causes "property is not configurable" errors
let homeApiInstance: any = null;

export const getHomeApi = () => {
  if (!homeApiInstance) {
    homeApiInstance = createApi({
      reducerPath: 'digitalHomeApi',
      baseQuery: fetchBaseQuery({ baseUrl }),
      tagTypes: ['Categories', 'Services', 'Providers', 'Projects'],
      endpoints: (builder) => ({
        // Get Popular Categories
        getCategories: builder.query<Category[], void>({
          query: () => '/categories',
          providesTags: ['Categories'],
        }),

        // Get Featured Services
        getFeaturedServices: builder.query<FeaturedService[], void>({
          query: () => '/services/featured',
          providesTags: ['Services'],
        }),

        // Get Top Rated Providers
        getTopRatedProviders: builder.query<TopRatedProvider[], void>({
          query: () => '/providers/top-rated',
          providesTags: ['Providers'],
        }),

        // Get Recent Projects
        getRecentProjects: builder.query<RecentProject[], void>({
          query: () => '/projects/recent',
          providesTags: ['Projects'],
        }),

        // Get How It Works Steps (for clients or freelancers)
        getHowItWorksSteps: builder.query<HowItWorksStep[], 'clients' | 'freelancers'>({
          query: (audience) => `/how-it-works/${audience}`,
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
    useGetCategoriesQuery: api.useGetCategoriesQuery,
    useGetFeaturedServicesQuery: api.useGetFeaturedServicesQuery,
    useGetTopRatedProvidersQuery: api.useGetTopRatedProvidersQuery,
    useGetRecentProjectsQuery: api.useGetRecentProjectsQuery,
    useGetHowItWorksStepsQuery: api.useGetHowItWorksStepsQuery,
  };
};

// Export hooks as getters - these return the actual RTK Query hooks lazily
// Usage: const { useGetCategoriesQuery } = getHomeApiHooks();
// Then use: const { data } = useGetCategoriesQuery();
// 
// Alternative: Access directly from API when needed
// const api = getHomeApi();
// const { data } = api.useGetCategoriesQuery();

// Default export for store/index.ts
export default getHomeApi;

