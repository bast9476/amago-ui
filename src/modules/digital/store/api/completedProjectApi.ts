// RTK Query API with lazy loading to prevent Hermes initialization errors
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Base URL - Update this with your actual API endpoint
const baseUrl = 'https://api.example.com'; // Replace with your API URL

// Types for Completed Project (add to types/index.ts when needed)
export interface CompletedProjectData {
    id: string;
    title: string;
    clientName: string;
    completedDate: string;
    totalAmount: string;
    paidAmount: string;
    // Add more fields as needed
}

// Lazy API creation - only create when first accessed
let completedProjectApiInstance: ReturnType<typeof createApi> | null = null;

export const getCompletedProjectApi = () => {
    if (!completedProjectApiInstance) {
        completedProjectApiInstance = createApi({
            reducerPath: 'completedProjectApi',
            baseQuery: fetchBaseQuery({ baseUrl }),
            tagTypes: ['CompletedProject'],
            endpoints: (builder) => ({
                // Get Completed Project by ID
                getCompletedProject: builder.query<CompletedProjectData, string>({
                    query: (id) => `/completed-projects/${id}`,
                    providesTags: (result, error, id) => [{ type: 'CompletedProject', id }],
                }),

                // Submit Review
                submitReview: builder.mutation<void, { projectId: string; rating: number; feedback: string }>({
                    query: ({ projectId, rating, feedback }) => ({
                        url: `/completed-projects/${projectId}/review`,
                        method: 'POST',
                        body: { rating, feedback },
                    }),
                    invalidatesTags: (result, error, { projectId }) => [
                        { type: 'CompletedProject', id: projectId },
                    ],
                }),

                // Rehire Provider
                rehireProvider: builder.mutation<void, { projectId: string }>({
                    query: ({ projectId }) => ({
                        url: `/completed-projects/${projectId}/rehire`,
                        method: 'POST',
                    }),
                    invalidatesTags: (result, error, { projectId }) => [
                        { type: 'CompletedProject', id: projectId },
                    ],
                }),
            }),
        });
    }
    return completedProjectApiInstance;
};

// Export hooks getter
export const getCompletedProjectApiHooks = () => {
    const api = getCompletedProjectApi();
    return {
        useGetCompletedProjectQuery: api.useGetCompletedProjectQuery,
        useSubmitReviewMutation: api.useSubmitReviewMutation,
        useRehireProviderMutation: api.useRehireProviderMutation,
    };
};

// Default export for store/index.ts
export default getCompletedProjectApi;

