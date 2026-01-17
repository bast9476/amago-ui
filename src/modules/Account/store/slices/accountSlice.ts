import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountProfile, AccountState } from '../types';

const initialState: AccountState = {
  profile: null,
  loading: false,
  error: null,
  initialized: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<AccountProfile | null>) => {
      state.profile = action.payload;
      state.initialized = true;
    },
    updateProfile: (state, action: PayloadAction<Partial<AccountProfile>>) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setProfile, updateProfile, setLoading, setError } = accountSlice.actions;

export default accountSlice.reducer;

