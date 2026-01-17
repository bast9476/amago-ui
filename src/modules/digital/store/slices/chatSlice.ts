import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessage, Task } from '../types';

const CHAT_API_URL = 'https://dummyjson.com/comments?limit=12';

export const fetchChatMessages = createAsyncThunk<ChatMessage[]>(
    'digital/chat/fetchChatMessages',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(CHAT_API_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch chat messages');
            }
            const data = await response.json();
            const messagesSource = data?.comments ?? data ?? [];
            return messagesSource.map((item: any, index: number) => ({
                id: String(item.id ?? index),
                direction: index % 2 === 0 ? 'incoming' : 'outgoing',
                message: (item.body ?? item.comment ?? 'New message').trim(),
                senderName: item.user?.username ?? item.user?.fullName ?? `User ${index + 1}`,
                timestamp: new Date(Date.now() - index * 60 * 60 * 1000).toISOString(),
                attachment:
                    index % 4 === 3
                        ? {
                            id: `attachment-${item.id ?? index}`,
                            name: `wireframes_v${index + 1}.fig`,
                        }
                        : undefined,
            }));
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

interface ChatState {
    items: ChatMessage[];
    tasks: Task[];
    loading: boolean;
    error: string | null;
    initialized: boolean;
    tasksInitialized: boolean;
}

const initialState: ChatState = {
    items: [],
    tasks: [],
    loading: false,
    error: null,
    initialized: false,
    tasksInitialized: false,
};

const chatSlice = createSlice({
    name: 'digital/chat',
    initialState,
    reducers: {
        setChatMessages: (state, action: PayloadAction<ChatMessage[]>) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
            state.initialized = true;
        },
        upsertChatMessage: (state, action: PayloadAction<ChatMessage>) => {
            const existingIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (existingIndex >= 0) {
                state.items[existingIndex] = action.payload;
            } else {
                state.items.push(action.payload);
            }
        },
        clearChatMessages: (state) => {
            state.items = [];
            state.initialized = false;
        },
        setChatTasks: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload;
            state.tasksInitialized = true;
        },
        toggleChatTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        },
        setChatTaskActive: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) => {
                task.isActive = task.id === action.payload;
            });
        },
        updateChatTask: (state, action: PayloadAction<Task>) => {
            const existingIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (existingIndex >= 0) {
                state.tasks[existingIndex] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChatMessages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChatMessages.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
                state.error = null;
                state.initialized = true;
            })
            .addCase(fetchChatMessages.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.payload as string) ?? 'Unable to load chat messages';
            });
    },
});

export const {
    setChatMessages,
    upsertChatMessage,
    clearChatMessages,
    setChatTasks,
    toggleChatTask,
    setChatTaskActive,
    updateChatTask,
} = chatSlice.actions;

export default chatSlice.reducer;

