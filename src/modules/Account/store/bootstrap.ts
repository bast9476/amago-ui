import type { ThunkAction, AnyAction } from '@reduxjs/toolkit';
import type { RootState } from '@src/store';
import { setProfile } from './slices/accountSlice';

type AccountThunk = ThunkAction<void, RootState, unknown, AnyAction>;

type AccountStateAccessor = RootState & { account: any };

const selectAccountState = (state: RootState) =>
  (state as AccountStateAccessor).account ?? {};

export const bootstrapAccount = (): AccountThunk => (dispatch, getState) => {
  const account = selectAccountState(getState());
  if (account?.initialized) {
    return;
  }

  // Mock profile data; replace with API-driven data later.
  dispatch(
    setProfile({
      id: 'user-1',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      phone: '+1 555-123-4567',
    })
  );
};

