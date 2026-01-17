import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserLevelState } from '../types';

const initialState: UserLevelState = {
  level: 1,
  points: 0,
  loading: false,
  error: null,
  initialized: false,
};

const userLevelSlice = createSlice({
  name: 'userLevel',
  initialState,
  reducers: {
    setLevel(state, action: PayloadAction<number>) {
      state.level = action.payload;
      state.initialized = true;
    },
    addPoints(state, action: PayloadAction<number>) {
      state.points += action.payload;
      state.initialized = true;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setInitialized(state, action: PayloadAction<boolean>) {
      state.initialized = action.payload;
    },
  },
});

export const { setLevel, addPoints, setLoading, setError, setInitialized } = userLevelSlice.actions;
export default userLevelSlice.reducer;
