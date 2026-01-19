import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@src/store';
import type { PaymentState } from '../slices/paymentSlice';

type PaymentStateAccessor = RootState & { payment: { payment: PaymentState } };

const defaultPaymentState: PaymentState = {
  searchQuery: '',
  selectedMerchantId: null,
  recentMerchants: [],
  favoriteMerchants: [],
};

export const selectPaymentState = (state: RootState): PaymentState => {
  const paymentState = (state as PaymentStateAccessor).payment?.payment;
  return paymentState ?? defaultPaymentState;
};

export const selectPaymentSearchQuery = createSelector(
  [selectPaymentState],
  (paymentState) => paymentState.searchQuery
);

export const selectRecentMerchants = createSelector(
  [selectPaymentState],
  (paymentState) => paymentState.recentMerchants
);

export const selectFavoriteMerchants = createSelector(
  [selectPaymentState],
  (paymentState) => paymentState.favoriteMerchants
);

export const selectSelectedMerchantId = createSelector(
  [selectPaymentState],
  (paymentState) => paymentState.selectedMerchantId
);

export const selectSelectedMerchant = createSelector(
  [selectRecentMerchants, selectFavoriteMerchants, selectSelectedMerchantId],
  (recent, favorites, selectedId) => {
    if (!selectedId) return null;
    return recent.find((merchant) => merchant.id === selectedId)
      ?? favorites.find((merchant) => merchant.id === selectedId)
      ?? null;
  }
);
