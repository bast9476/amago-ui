import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/store';

type HomeStateAccessor = RootState & { home: any };

const selectHomeModuleState = (state: RootState) =>
  (state as HomeStateAccessor).home ?? {};

export const selectHomeUI = createSelector(
  [selectHomeModuleState],
  (homeModule) => homeModule.home,
);

export const selectHomeWelcomeMessage = createSelector(
  [selectHomeUI],
  (home) => home?.welcomeMessage,
);

export const selectHomeContent = createSelector(
  [selectHomeModuleState],
  (homeModule) => homeModule.content,
);

export const selectHomeCategorySections = createSelector(
  [selectHomeContent],
  (content) => content?.categorySections ?? [],
);

export const selectHomeSeeAllConfigs = createSelector(
  [selectHomeContent],
  (content) => content?.seeAllConfigs ?? [],
);

export const selectIsDataLoaded = createSelector(
  [selectHomeModuleState],
  (homeModule) => homeModule.content?.initialized ?? false,
);


