import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { HomeUIState } from '../types';

const initialState: HomeUIState = {
  welcomeMessage: 'Welcome to the Home section',
};

const homeSlice = createSlice({
  name: 'home/home',
  initialState,
  reducers: {
    setWelcomeMessage: (state, action: PayloadAction<string>) => {
      state.welcomeMessage = action.payload;
    },
  },
});

export const { setWelcomeMessage } = homeSlice.actions;

export default homeSlice.reducer;


