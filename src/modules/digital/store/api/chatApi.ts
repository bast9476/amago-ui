// RTK Query API with lazy loading to prevent Hermes initialization errors
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ChatMessage } from '../types';

// Base URL - Update this with your actual API endpoint
const baseUrl = 'https://api.example.com'; // Replace with your API URL

// Lazy API creation - only create when first accessed
let chatApiInstance: ReturnType<typeof createApi> | null = null;

export const getChatApi = () => {
    if (!chatApiInstance) {
        chatApiInstance = createApi({
            reducerPath: 'chatApi',
            baseQuery: fetchBaseQuery({ baseUrl }),
            tagTypes: ['ChatMessages'],
            endpoints: (builder) => ({
                // Get Chat Messages
                getChatMessages: builder.query<ChatMessage[], string>({
                    query: (conversationId) => `/chat/${conversationId}/messages`,
                    providesTags: (result, error, conversationId) => [
                        { type: 'ChatMessages', id: conversationId },
                    ],
                }),

                // Send Chat Message
                sendChatMessage: builder.mutation<ChatMessage, { conversationId: string; message: string }>({
                    query: ({ conversationId, message }) => ({
                        url: `/chat/${conversationId}/messages`,
                        method: 'POST',
                        body: { message },
                    }),
                    invalidatesTags: (result, error, { conversationId }) => [
                        { type: 'ChatMessages', id: conversationId },
                    ],
                }),
            }),
        });
    }
    return chatApiInstance;
};

// Export hooks getter
export const getChatApiHooks = () => {
    const api = getChatApi();
    return {
        useGetChatMessagesQuery: api.useGetChatMessagesQuery,
        useSendChatMessageMutation: api.useSendChatMessageMutation,
    };
};

// Default export for store/index.ts
export default getChatApi;

