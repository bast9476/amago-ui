import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeUIState } from '../types';

export interface HomeState {
  favorites: {
    products: string[]; // Array of favorite product IDs
    featured: string[]; // Array of favorite featured product IDs
  };
  ui: HomeUIState;
  initialized: boolean;
}

const initialState: HomeState = {
  favorites: {
    products: [],
    featured: [],
  },
  ui: {
    searchQuery: '',
    selectedCategory: undefined,
  },
  initialized: false,
};

const homeSlice = createSlice({
  name: 'ecommerce/home',
  initialState,
  reducers: {
    // Toggle favorite for regular products
    toggleProductFavorite: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const index = state.favorites.products.indexOf(productId);
      if (index === -1) {
        state.favorites.products.push(productId);
      } else {
        state.favorites.products.splice(index, 1);
      }
    },

    // Toggle favorite for featured products
    toggleFeaturedProductFavorite: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const index = state.favorites.featured.indexOf(productId);
      if (index === -1) {
        state.favorites.featured.push(productId);
      } else {
        state.favorites.featured.splice(index, 1);
      }
    },

    // Set search query
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.ui.searchQuery = action.payload;
    },

    // Set selected category
    setSelectedCategory: (state, action: PayloadAction<string | undefined>) => {
      state.ui.selectedCategory = action.payload;
    },

    // Initialize favorites from initial data
    initializeFavorites: (
      state,
      action: PayloadAction<{ products: string[]; featured: string[] }>
    ) => {
      state.favorites.products = action.payload.products;
      state.favorites.featured = action.payload.featured;
      state.initialized = true;
    },
  },
});

export const {
  toggleProductFavorite,
  toggleFeaturedProductFavorite,
  setSearchQuery,
  setSelectedCategory,
  initializeFavorites,
} = homeSlice.actions;

export default homeSlice.reducer;

