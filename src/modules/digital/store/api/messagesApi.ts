// RTK Query API with lazy loading to prevent Hermes initialization errors
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Conversation } from '../types';

// Base URL - Update this with your actual API endpoint
const baseUrl = 'https://api.example.com'; // Replace with your API URL

// Lazy API creation - only create when first accessed
let messagesApiInstance: ReturnType<typeof createApi> | null = null;

export const getMessagesApi = () => {
    if (!messagesApiInstance) {
        messagesApiInstance = createApi({
            reducerPath: 'messagesApi',
            baseQuery: fetchBaseQuery({ baseUrl }),
            tagTypes: ['Conversations'],
            endpoints: (builder) => ({
                // Get Conversations
                getConversations: builder.query<Conversation[], void>({
                    query: () => '/conversations',
                    providesTags: ['Conversations'],
                }),

                // Get Conversation by ID
                getConversationById: builder.query<Conversation, string>({
                    query: (id) => `/conversations/${id}`,
                    providesTags: (result, error, id) => [{ type: 'Conversations', id }],
                }),
            }),
        });
    }
    return messagesApiInstance;
};

// Export hooks getter
export const getMessagesApiHooks = () => {
    const api = getMessagesApi();
    return {
        useGetConversationsQuery: api.useGetConversationsQuery,
        useGetConversationByIdQuery: api.useGetConversationByIdQuery,
    };
};

// Default export for store/index.ts
export default getMessagesApi;

