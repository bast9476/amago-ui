import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeaturedService } from '../types';

interface ServicesState {
  items: FeaturedService[];
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

// Initialize with empty array - data will be loaded after app registration
const initialState: ServicesState = {
  items: [],
  loading: false,
  error: null,
  initialized: false,
};

const servicesSlice = createSlice({
  name: 'digital/services',
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<FeaturedService[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
      state.initialized = true;
    },
    setServicesLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setServicesError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setServices, setServicesLoading, setServicesError } = servicesSlice.actions;

export default servicesSlice.reducer;

