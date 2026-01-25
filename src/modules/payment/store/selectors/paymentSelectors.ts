import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@src/store';
import type { PaymentState } from '../slices/paymentSlice';

type PaymentStateAccessor = RootState & { payment: { payment: PaymentState } };

const defaultPaymentState: PaymentState = {
  searchQuery: '',
  selectedMerchantId: null,
  recentMerchants: [],
  favoriteMerchants: [],
  paymentDetails: {
    amount: '0.00',
    promoCode: '',
    schedulePayment: false,
    saveAsTemplate: false,
    selectedPaymentMethod: null,
    availableBalance: '0.00',
    dailyLimitLeft: '0',
  },
  paymentReview: {
    authType: 'faceId',
    pinDigits: [],
    showPin: false,
  },
  bookingConfirmation: {
    statusTitle: '',
    totalPaid: '',
    amount: '',
    fee: '',
    transactionId: '',
    dateTime: '',
    maskedAccount: '',
    categoryLabel: '',
    balanceLeft: '',
    pointsTitle: '',
    pointsSubtitle: '',
    isRecurring: false,
  },
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

export const selectPaymentDetails = createSelector(
  [selectPaymentState],
  (paymentState) => paymentState.paymentDetails
);

export const selectPaymentAmount = createSelector(
  [selectPaymentDetails],
  (details) => details.amount
);

export const selectPromoCode = createSelector(
  [selectPaymentDetails],
  (details) => details.promoCode
);

export const selectSchedulePayment = createSelector(
  [selectPaymentDetails],
  (details) => details.schedulePayment
);

export const selectSaveAsTemplate = createSelector(
  [selectPaymentDetails],
  (details) => details.saveAsTemplate
);

export const selectSelectedPaymentMethod = createSelector(
  [selectPaymentDetails],
  (details) => details.selectedPaymentMethod
);

export const selectAvailableBalance = createSelector(
  [selectPaymentDetails],
  (details) => details.availableBalance
);

export const selectDailyLimitLeft = createSelector(
  [selectPaymentDetails],
  (details) => details.dailyLimitLeft
);

export const selectPaymentReview = createSelector(
  [selectPaymentState],
  (paymentState) => paymentState.paymentReview
);

export const selectAuthType = createSelector(
  [selectPaymentReview],
  (review) => review.authType
);

export const selectPinDigits = createSelector(
  [selectPaymentReview],
  (review) => review.pinDigits
);

export const selectShowPin = createSelector(
  [selectPaymentReview],
  (review) => review.showPin
);

export const selectBookingConfirmation = createSelector(
  [selectPaymentState],
  (paymentState) => paymentState.bookingConfirmation
);
