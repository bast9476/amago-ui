// RTK Query API with lazy loading for Become Service Provider registration
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BecomeProviderFormState } from '../types';

const baseUrl = 'https://api.example.com'; // Replace with real endpoint when backend is ready

let becomeProviderApiInstance: ReturnType<typeof createApi> | null = null;

export const getBecomeProviderApi = () => {
    if (!becomeProviderApiInstance) {
        becomeProviderApiInstance = createApi({
            reducerPath: 'becomeProviderApi',
            baseQuery: fetchBaseQuery({ baseUrl }),
            tagTypes: ['BecomeProvider', 'BecomeProviderOptions'],
            endpoints: (builder) => ({
                getBecomeProviderOptions: builder.query<
                    {
                        countryOptions: string[];
                        timezoneOptions: string[];
                        roleOptions: string[];
                        skillOptions: string[];
                        toolOptions: string[];
                        experienceOptions: string[];
                        distanceOptions: string[];
                        currencyOptions: string[];
                        typicalDeliveryOptions: string[];
                        minimumPriceOptions: string[];
                        tagSuggestions: string[];
                    },
                    void
                >({
                    query: () => '/providers/options',
                    providesTags: ['BecomeProviderOptions'],
                }),
                submitBecomeProviderProfile: builder.mutation<{ success: boolean }, BecomeProviderFormState>({
                    query: (form) => ({
                        url: '/providers',
                        method: 'POST',
                        body: form,
                    }),
                    invalidatesTags: ['BecomeProvider'],
                }),
            }),
        });
    }

    return becomeProviderApiInstance;
};

export const getBecomeProviderApiHooks = () => {
    const api = getBecomeProviderApi();
    return {
        useGetBecomeProviderOptionsQuery: api.useGetBecomeProviderOptionsQuery,
        useSubmitBecomeProviderProfileMutation: api.useSubmitBecomeProviderProfileMutation,
    };
};

export default getBecomeProviderApi;


