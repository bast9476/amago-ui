import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { favoriteMerchants, recentMerchants } from '../initialData';
import type { Merchant } from '../types';

export interface PaymentDetailsState {
  amount: string;
  promoCode: string;
  schedulePayment: boolean;
  saveAsTemplate: boolean;
  selectedPaymentMethod: string | null;
  availableBalance: string;
  dailyLimitLeft: string;
}

export interface PaymentReviewState {
  authType: 'faceId' | 'pin';
  pinDigits: string[];
  showPin: boolean;
}

export interface PaymentState {
  searchQuery: string;
  selectedMerchantId: string | null;
  recentMerchants: Merchant[];
  favoriteMerchants: Merchant[];
  paymentDetails: PaymentDetailsState;
  paymentReview: PaymentReviewState;
}

const initialPaymentDetailsState: PaymentDetailsState = {
  amount: '3000.00',
  promoCode: '',
  schedulePayment: false,
  saveAsTemplate: false,
  selectedPaymentMethod: 'amago',
  availableBalance: '15000.00',
  dailyLimitLeft: '50000',
};

const initialPaymentReviewState: PaymentReviewState = {
  authType: 'faceId',
  pinDigits: [],
  showPin: false,
};

const initialState: PaymentState = {
  searchQuery: '',
  selectedMerchantId: 'biman',
  recentMerchants,
  favoriteMerchants,
  paymentDetails: initialPaymentDetailsState,
  paymentReview: initialPaymentReviewState,
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
    setPaymentAmount: (state, action: PayloadAction<string>) => {
      state.paymentDetails.amount = action.payload;
    },
    setPromoCode: (state, action: PayloadAction<string>) => {
      state.paymentDetails.promoCode = action.payload;
    },
    setSchedulePayment: (state, action: PayloadAction<boolean>) => {
      state.paymentDetails.schedulePayment = action.payload;
    },
    setSaveAsTemplate: (state, action: PayloadAction<boolean>) => {
      state.paymentDetails.saveAsTemplate = action.payload;
    },
    setSelectedPaymentMethod: (state, action: PayloadAction<string | null>) => {
      state.paymentDetails.selectedPaymentMethod = action.payload;
    },
    setAuthType: (state, action: PayloadAction<'faceId' | 'pin'>) => {
      state.paymentReview.authType = action.payload;
      // Reset PIN when switching auth type
      if (action.payload === 'faceId') {
        state.paymentReview.pinDigits = [];
        state.paymentReview.showPin = false;
      }
    },
    addPinDigit: (state, action: PayloadAction<string>) => {
      if (state.paymentReview.pinDigits.length < 6) {
        state.paymentReview.pinDigits.push(action.payload);
      }
    },
    removePinDigit: (state) => {
      state.paymentReview.pinDigits.pop();
    },
    clearPin: (state) => {
      state.paymentReview.pinDigits = [];
    },
    togglePinVisibility: (state) => {
      state.paymentReview.showPin = !state.paymentReview.showPin;
    },
  },
});

export const {
  setSearchQuery,
  setSelectedMerchant,
  setRecentMerchants,
  setFavoriteMerchants,
  setPaymentAmount,
  setPromoCode,
  setSchedulePayment,
  setSaveAsTemplate,
  setSelectedPaymentMethod,
  setAuthType,
  addPinDigit,
  removePinDigit,
  clearPin,
  togglePinVisibility,
} = paymentSlice.actions;

export default paymentSlice.reducer;
