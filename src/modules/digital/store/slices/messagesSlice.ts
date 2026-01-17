import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Conversation } from '../types';

interface MessagesState {
  items: Conversation[];
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

const initialState: MessagesState = {
  items: [],
  loading: false,
  error: null,
  initialized: false,
};

const messagesSlice = createSlice({
  name: 'digital/messages',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Conversation[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
      state.initialized = true;
    },
    setMessagesLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setMessagesError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setMessages, setMessagesLoading, setMessagesError } = messagesSlice.actions;

export default messagesSlice.reducer;


