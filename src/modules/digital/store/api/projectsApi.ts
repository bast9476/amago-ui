// RTK Query API with lazy loading to prevent Hermes initialization errors
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Project, ProjectStatus } from '../types';

// Base URL - Update this with your actual API endpoint
const baseUrl = 'https://api.example.com'; // Replace with your API URL

// Lazy API creation - only create when first accessed
let projectsApiInstance: ReturnType<typeof createApi> | null = null;

export const getProjectsApi = () => {
    if (!projectsApiInstance) {
        projectsApiInstance = createApi({
            reducerPath: 'projectsApi',
            baseQuery: fetchBaseQuery({ baseUrl }),
            tagTypes: ['Projects'],
            endpoints: (builder) => ({
                // Get Projects by Status
                getProjectsByStatus: builder.query<Project[], ProjectStatus>({
                    query: (status) => `/projects?status=${status}`,
                    providesTags: (result, error, status) => [{ type: 'Projects', id: status }],
                }),

                // Get Active Projects
                getActiveProjects: builder.query<Project[], void>({
                    query: () => '/projects?status=active',
                    providesTags: [{ type: 'Projects', id: 'active' }],
                }),

                // Get Completed Projects
                getCompletedProjects: builder.query<Project[], void>({
                    query: () => '/projects?status=completed',
                    providesTags: [{ type: 'Projects', id: 'completed' }],
                }),

                // Get Posted Projects
                getPostedProjects: builder.query<Project[], void>({
                    query: () => '/projects?status=posted',
                    providesTags: [{ type: 'Projects', id: 'posted' }],
                }),

                // Get Project by ID
                getProjectById: builder.query<Project, string>({
                    query: (id) => `/projects/${id}`,
                    providesTags: (result, error, id) => [{ type: 'Projects', id }],
                }),

                // Update Project Status
                updateProjectStatus: builder.mutation<Project, { id: string; status: ProjectStatus }>({
                    query: ({ id, status }) => ({
                        url: `/projects/${id}/status`,
                        method: 'PATCH',
                        body: { status },
                    }),
                    invalidatesTags: (result, error, { status }) => [
                        { type: 'Projects', id: status },
                        { type: 'Projects', id: result?.id },
                    ],
                }),
            }),
        });
    }
    return projectsApiInstance;
};

// Export hooks getter
export const getProjectsApiHooks = () => {
    const api = getProjectsApi();
    return {
        useGetProjectsByStatusQuery: api.useGetProjectsByStatusQuery,
        useGetActiveProjectsQuery: api.useGetActiveProjectsQuery,
        useGetCompletedProjectsQuery: api.useGetCompletedProjectsQuery,
        useGetPostedProjectsQuery: api.useGetPostedProjectsQuery,
        useGetProjectByIdQuery: api.useGetProjectByIdQuery,
        useUpdateProjectStatusMutation: api.useUpdateProjectStatusMutation,
    };
};

// Default export for store/index.ts
export default getProjectsApi;

