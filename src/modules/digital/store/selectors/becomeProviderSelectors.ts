import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/store/index';

type DigitalStateAccessor = RootState & { digital: any };

const selectDigitalState = (state: RootState) => (state as DigitalStateAccessor).digital;

export const selectBecomeProviderState = createSelector(
    [selectDigitalState],
    (digital) => digital.becomeProvider,
);

export const selectBecomeProviderForm = createSelector(
    [selectBecomeProviderState],
    (state) => state.form,
);

export const selectBecomeProviderInitialized = createSelector(
    [selectBecomeProviderState],
    (state) => state.initialized,
);

export const selectBecomeProviderCountryOptions = createSelector(
    [selectBecomeProviderState],
    (state) => state.countryOptions,
);

export const selectBecomeProviderTimezoneOptions = createSelector(
    [selectBecomeProviderState],
    (state) => state.timezoneOptions,
);

export const selectBecomeProviderRoleOptions = createSelector(
    [selectBecomeProviderState],
    (state) => state.roleOptions,
);

export const selectBecomeProviderSkillOptions = createSelector(
    [selectBecomeProviderState],
    (state) => state.skillOptions,
);

export const selectBecomeProviderToolOptions = createSelector(
    [selectBecomeProviderState],
    (state) => state.toolOptions,
);

export const selectBecomeProviderExperienceOptions = createSelector(
    [selectBecomeProviderState],
    (state) => state.experienceOptions,
);

export const selectBecomeProviderTypicalDeliveryOptions = createSelector(
    [selectBecomeProviderState],
    (state) => state.typicalDeliveryOptions,
);

export const selectBecomeProviderMinimumPriceOptions = createSelector(
    [selectBecomeProviderState],
    (state) => state.minimumPriceOptions,
);

export const selectBecomeProviderTagSuggestions = createSelector(
    [selectBecomeProviderState],
    (state) => state.tagSuggestions,
);

export const selectBecomeProviderLoading = createSelector(
    [selectBecomeProviderState],
    (state) => state.loading,
);

export const selectBecomeProviderError = createSelector(
    [selectBecomeProviderState],
    (state) => state.error,
);


