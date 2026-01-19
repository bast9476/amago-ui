import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { favoriteMerchants, recentMerchants } from '../initialData';
import type { Merchant } from '../types';

export interface PaymentState {
  searchQuery: string;
  selectedMerchantId: string | null;
  recentMerchants: Merchant[];
  favoriteMerchants: Merchant[];
}

const initialState: PaymentState = {
  searchQuery: '',
  selectedMerchantId: 'biman',
  recentMerchants,
  favoriteMerchants,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedMerchant: (state, action: PayloadAction<string>) => {
      state.selectedMerchantId = action.payload;
    },
    setRecentMerchants: (state, action: PayloadAction<Merchant[]>) => {
      state.recentMerchants = action.payload;
    },
    setFavoriteMerchants: (state, action: PayloadAction<Merchant[]>) => {
      state.favoriteMerchants = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setSelectedMerchant,
  setRecentMerchants,
  setFavoriteMerchants,
} = paymentSlice.actions;

export default paymentSlice.reducer;
