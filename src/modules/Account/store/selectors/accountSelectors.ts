import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@src/store';

type AccountStateAccessor = RootState & { account: any };

const selectAccountRoot = (state: RootState) =>
  (state as AccountStateAccessor).account ?? {};

export const selectAccountProfile = createSelector(
  [selectAccountRoot],
  (account) => account.profile
);

export const selectAccountLoading = createSelector(
  [selectAccountRoot],
  (account) => account.loading
);

export const selectAccountError = createSelector(
  [selectAccountRoot],
  (account) => account.error
);

export const selectAccountInitialized = createSelector(
  [selectAccountRoot],
  (account) => account.initialized
);

