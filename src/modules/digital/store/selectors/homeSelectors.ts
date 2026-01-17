import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/store/index';

// Base selectors
type DigitalStateAccessor = RootState & { digital: any };

const selectDigitalState = (state: RootState) => (state as DigitalStateAccessor).digital;

// Home UI State Selectors
export const selectHomeUI = createSelector([selectDigitalState], (digital) => digital.home);
export const selectSelectedCategory = createSelector([selectHomeUI], (home) => home.selectedCategory);
export const selectHowItWorksTab = createSelector([selectHomeUI], (home) => home.howItWorksTab);
export const selectSearchQuery = createSelector([selectHomeUI], (home) => home.searchQuery);

// Categories Selectors
export const selectCategories = createSelector([selectDigitalState], (digital) => digital.categories.items);
export const selectCategoriesLoading = createSelector([selectDigitalState], (digital) => digital.categories.loading);
export const selectCategoriesError = createSelector([selectDigitalState], (digital) => digital.categories.error);

// Services Selectors
export const selectFeaturedServices = createSelector([selectDigitalState], (digital) => digital.services.items);
export const selectServicesLoading = createSelector([selectDigitalState], (digital) => digital.services.loading);
export const selectServicesError = createSelector([selectDigitalState], (digital) => digital.services.error);

// Providers Selectors
export const selectTopRatedProviders = createSelector([selectDigitalState], (digital) => digital.providers.items);
export const selectProvidersLoading = createSelector([selectDigitalState], (digital) => digital.providers.loading);
export const selectProvidersError = createSelector([selectDigitalState], (digital) => digital.providers.error);

// Projects Selectors
export const selectRecentProjects = createSelector([selectDigitalState], (digital) => digital.projects.items);
export const selectProjectsLoading = createSelector([selectDigitalState], (digital) => digital.projects.loading);
export const selectProjectsError = createSelector([selectDigitalState], (digital) => digital.projects.error);

// Combined loading selector for Digital Home (messages load separately)
export const selectIsDataLoaded = createSelector(
  [selectDigitalState],
  (digital) =>
    digital.categories.initialized &&
    digital.services.initialized &&
    digital.providers.initialized &&
    digital.projects.initialized
);

