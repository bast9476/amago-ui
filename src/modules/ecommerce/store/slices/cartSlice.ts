import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native';

export interface CartItemData {
  id: string;
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  price: string; // e.g., "৳549"
  quantity: number;
}

export interface CartState {
  items: CartItemData[];
  initialized: boolean;
}

const initialState: CartState = {
  items: [],
  initialized: false,
};

const cartSlice = createSlice({
  name: 'ecommerce/cart',
  initialState,
  reducers: {
    // Initialize cart with items
    initializeCart: (state, action: PayloadAction<CartItemData[]>) => {
      if (!state.initialized) {
        state.items = action.payload;
        state.initialized = true;
      }
    },

    // Add item to cart or update quantity if exists
    addToCart: (state, action: PayloadAction<CartItemData>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If item exists, update quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // If new item, add to cart
        state.items.push(action.payload);
      }
    },

    // Remove item from cart
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Update quantity for specific item
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && action.payload.quantity >= 1) {
        item.quantity = action.payload.quantity;
      }
    },

    // Increment quantity by 1
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrement quantity by 1 (minimum 1)
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  initializeCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

