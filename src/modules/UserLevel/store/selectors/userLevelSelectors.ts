import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@src/store';

type UserLevelAccessor = RootState & { userLevel: any };

const selectUserLevelRoot = (state: RootState) =>
  (state as UserLevelAccessor).userLevel ?? {};

export const selectUserLevelLevel = createSelector(
  [selectUserLevelRoot],
  (userLevel) => userLevel.level
);

export const selectUserLevelPoints = createSelector(
  [selectUserLevelRoot],
  (userLevel) => userLevel.points
);

export const selectUserLevelLoading = createSelector(
  [selectUserLevelRoot],
  (userLevel) => userLevel.loading
);

export const selectUserLevelError = createSelector(
  [selectUserLevelRoot],
  (userLevel) => userLevel.error
);

export const selectUserLevelInitialized = createSelector(
  [selectUserLevelRoot],
  (userLevel) => userLevel.initialized
);
