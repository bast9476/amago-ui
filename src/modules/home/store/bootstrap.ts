import type { AppDispatch, RootState } from '@src/store';
import type { ThunkAction, AnyAction } from '@reduxjs/toolkit';
import { getHomeCategorySections, getHomeSeeAllConfigs } from './initialData';
import { hydrateHomeContent } from './slices/contentSlice';

type HomeThunk = ThunkAction<Promise<void> | void, RootState, unknown, AnyAction>;

type HomeStateAccessor = RootState & { home: any };

const selectHomeState = (state: RootState) =>
  (state as HomeStateAccessor).home ?? {};

export const bootstrapHomeData = (): HomeThunk => (dispatch, getState) => {
  const homeModule = selectHomeState(getState());
  const isInitialized = homeModule?.content?.initialized ?? false;

  if (isInitialized) {
    return;
  }

  dispatch(
    hydrateHomeContent({
      categorySections: getHomeCategorySections(),
      seeAllConfigs: getHomeSeeAllConfigs(),
    })
  );
};


