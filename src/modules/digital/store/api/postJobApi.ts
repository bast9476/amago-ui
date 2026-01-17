// RTK Query API with lazy loading to prevent Hermes initialization errors
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PostJobFormState } from '../types';

const baseUrl = 'https://api.example.com'; // Replace with real endpoint when available

let postJobApiInstance: ReturnType<typeof createApi> | null = null;

export const getPostJobApi = () => {
    if (!postJobApiInstance) {
        postJobApiInstance = createApi({
            reducerPath: 'postJobApi',
            baseQuery: fetchBaseQuery({ baseUrl }),
            tagTypes: ['PostJob', 'PostJobOptions'],
            endpoints: (builder) => ({
                getPostJobCategories: builder.query<string[], void>({
                    query: () => '/post-jobs/categories',
                    providesTags: ['PostJobOptions'],
                }),
                getPostJobSkills: builder.query<string[], void>({
                    query: () => '/post-jobs/skills',
                    providesTags: ['PostJobOptions'],
                }),
                getPostJobTimelines: builder.query<string[], void>({
                    query: () => '/post-jobs/timelines',
                    providesTags: ['PostJobOptions'],
                }),
                submitPostJob: builder.mutation<{ success: boolean }, PostJobFormState>({
                    query: (form) => ({
                        url: '/post-jobs',
                        method: 'POST',
                        body: form,
                    }),
                    invalidatesTags: ['PostJob'],
                }),
            }),
        });
    }
    return postJobApiInstance;
};

export const getPostJobApiHooks = () => {
    const api = getPostJobApi();
    return {
        useGetPostJobCategoriesQuery: api.useGetPostJobCategoriesQuery,
        useGetPostJobSkillsQuery: api.useGetPostJobSkillsQuery,
        useGetPostJobTimelinesQuery: api.useGetPostJobTimelinesQuery,
        useSubmitPostJobMutation: api.useSubmitPostJobMutation,
    };
};

export default getPostJobApi;


