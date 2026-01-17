import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TopRatedProvider } from '../types';

interface ProvidersState {
  items: TopRatedProvider[];
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

// Initialize with empty array - data will be loaded after app registration
const initialState: ProvidersState = {
  items: [],
  loading: false,
  error: null,
  initialized: false,
};

const providersSlice = createSlice({
  name: 'digital/providers',
  initialState,
  reducers: {
    setProviders: (state, action: PayloadAction<TopRatedProvider[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
      state.initialized = true;
    },
    setProvidersLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProvidersError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setProviders, setProvidersLoading, setProvidersError } = providersSlice.actions;

export default providersSlice.reducer;

