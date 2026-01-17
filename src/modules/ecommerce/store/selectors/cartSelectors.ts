import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/store/index';
import { CartItemData } from '../slices/cartSlice';
import type { EcommerceState } from '../types/state';

// Base selectors
type EcommerceStateAccessor = RootState & { ecommerce: EcommerceState };

const selectEcommerceState = (state: RootState): EcommerceState | undefined =>
  (state as EcommerceStateAccessor).ecommerce;
const selectCartState = createSelector(
  [selectEcommerceState],
  (ecommerce) => ecommerce?.cart ?? { items: [], initialized: false }
);

// Cart Selectors
export const selectCartItems = createSelector(
  [selectCartState],
  (cart) => cart?.items ?? []
);

export const selectCartIsEmpty = createSelector(
  [selectCartItems],
  (items) => items.length === 0
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);

// Helper function to extract numeric value from price string (e.g., "৳549" -> 549)
const extractPriceValue = (priceString: string): number => {
  const numericValue = parseInt(priceString.replace(/[^\d]/g, ''), 10);
  return isNaN(numericValue) ? 0 : numericValue;
};

// Calculate total price from all cart items
export const selectCartTotal = createSelector(
  [selectCartItems],
  (items) => {
    return items.reduce((total, item) => {
      const priceValue = extractPriceValue(item.price);
      return total + priceValue * item.quantity;
    }, 0);
  }
);

// Subtotal (same as total for now, can be extended for discounts later)
export const selectCartSubtotal = createSelector(
  [selectCartTotal],
  (total) => total
);

// Check if cart is initialized
export const selectCartInitialized = createSelector(
  [selectCartState],
  (cart) => cart?.initialized ?? false
);

