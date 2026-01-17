import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../types';

interface CategoriesState {
  items: Category[];
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

// Initialize with empty array - data will be loaded after app registration
const initialState: CategoriesState = {
  items: [],
  loading: false,
  error: null,
  initialized: false,
};

const categoriesSlice = createSlice({
  name: 'digital/categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
      state.initialized = true;
    },
    setCategoriesLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCategoriesError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setCategories, setCategoriesLoading, setCategoriesError } = categoriesSlice.actions;

export default categoriesSlice.reducer;

