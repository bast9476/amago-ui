import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { HomeCategorySection, HomeSeeAllConfig } from '../types';

export type HomeContentState = {
  initialized: boolean;
  categorySections: HomeCategorySection[];
  seeAllConfigs: HomeSeeAllConfig[];
};

const initialState: HomeContentState = {
  initialized: false,
  categorySections: [],
  seeAllConfigs: [],
};

const contentSlice = createSlice({
  name: 'home/content',
  initialState,
  reducers: {
    hydrateHomeContent: (
      state,
      action: PayloadAction<{
        categorySections: HomeCategorySection[];
        seeAllConfigs: HomeSeeAllConfig[];
      }>
    ) => {
      state.categorySections = action.payload.categorySections;
      state.seeAllConfigs = action.payload.seeAllConfigs;
      state.initialized = true;
    },
  },
});

export const { hydrateHomeContent } = contentSlice.actions;

export default contentSlice.reducer;


