import type { ThunkAction, AnyAction } from '@reduxjs/toolkit';
import type { RootState } from '@src/store';
import { setLevel, addPoints, setInitialized } from './slices/userLevelSlice';

type UserLevelThunk = ThunkAction<void, RootState, unknown, AnyAction>;

type UserLevelAccessor = RootState & { userLevel: any };

const selectUserLevelState = (state: RootState) =>
  (state as UserLevelAccessor).userLevel ?? {};

export const bootstrapUserLevel = (): UserLevelThunk => (dispatch, getState) => {
  const userLevel = selectUserLevelState(getState());
  if (userLevel?.initialized) {
    return;
  }

  dispatch(setLevel(1));
  dispatch(addPoints(120)); // mock starting points
  dispatch(setInitialized(true));
};
