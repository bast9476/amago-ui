import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDetailData } from '../types';

export interface PointsDistributionData {
  youEarn: number;
  networkEarns: number;
  breakdown: Array<{
    level: number;
    description: string;
    points: number;
  }>;
}

export interface ProductDetailState {
  currentProductId: string | null;
  productData: ProductDetailData | null;
  selectedImageIndex: number;
  quantity: number;
  isLoading: boolean;
  error: string | null;
  pointsDistribution: PointsDistributionData | null;
}

const initialState: ProductDetailState = {
  currentProductId: null,
  productData: null,
  selectedImageIndex: 0,
  quantity: 1,
  isLoading: false,
  error: null,
  pointsDistribution: null,
};

const productDetailSlice = createSlice({
  name: 'ecommerce/productDetail',
  initialState,
  reducers: {
    // Set product detail data
    setProductDetail: (state, action: PayloadAction<ProductDetailData>) => {
      state.productData = action.payload;
      state.currentProductId = action.payload.id;
      state.selectedImageIndex = 0; // Reset to first image
      state.quantity = 1; // Reset quantity
      state.error = null;
    },

    // Set selected image index
    setSelectedImageIndex: (state, action: PayloadAction<number>) => {
      state.selectedImageIndex = action.payload;
    },

    // Set quantity
    setQuantity: (state, action: PayloadAction<number>) => {
      if (action.payload >= 1) {
        state.quantity = action.payload;
      }
    },

    // Increment quantity
    incrementQuantity: (state) => {
      state.quantity += 1;
    },

    // Decrement quantity
    decrementQuantity: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      }
    },

    // Set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    // Set error state
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    // Set points distribution data
    setPointsDistribution: (state, action: PayloadAction<PointsDistributionData>) => {
      state.pointsDistribution = action.payload;
    },

    // Clear points distribution
    clearPointsDistribution: (state) => {
      state.pointsDistribution = null;
    },

    // Clear product detail (when leaving the page)
    clearProductDetail: (state) => {
      state.currentProductId = null;
      state.productData = null;
      state.selectedImageIndex = 0;
      state.quantity = 1;
      state.isLoading = false;
      state.error = null;
      state.pointsDistribution = null;
    },
  },
});

export const {
  setProductDetail,
  setSelectedImageIndex,
  setQuantity,
  incrementQuantity,
  decrementQuantity,
  setLoading,
  setError,
  setPointsDistribution,
  clearPointsDistribution,
  clearProductDetail,
} = productDetailSlice.actions;

export default productDetailSlice.reducer;

