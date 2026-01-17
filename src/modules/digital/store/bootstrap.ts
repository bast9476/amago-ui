import type { AppDispatch, RootState } from '@src/store/index';
import type { ThunkAction, AnyAction } from '@reduxjs/toolkit';
import {
  getInitialCategories,
  getInitialFeaturedServices,
  getInitialTopRatedProviders,
  getInitialRecentProjects,
  getInitialActiveProjects,
  getInitialCompletedProjects,
  getInitialPostedProjects,
  getInitialPostJobForm,
  getPostJobCategoryOptions,
  getPostJobSkillOptions,
  getPostJobTimelineOptions,
  getInitialConversations,
  getInitialChatMessages,
  getInitialChatTasks,
  getInitialBecomeProviderForm,
  getBecomeProviderCountryOptions,
  getBecomeProviderTimezoneOptions,
  getBecomeProviderLanguageSuggestions,
  getBecomeProviderRoleOptions,
  getBecomeProviderSkillOptions,
  getBecomeProviderToolOptions,
  getBecomeProviderExperienceOptions,
  getBecomeProviderWorkModeOptions,
  getBecomeProviderDistanceOptions,
  getBecomeProviderCurrencyOptions,
  getBecomeProviderTypicalDeliveryOptions,
  getBecomeProviderMinimumPriceOptions,
  getBecomeProviderTagSuggestions,
} from './initialData';
import { setCategories } from './slices/categoriesSlice';
import { setServices } from './slices/servicesSlice';
import { setProviders } from './slices/providersSlice';
import { setProjects } from './slices/projectsSlice';
import {
  setActiveProjects,
  setCompletedProjects,
  setPostedProjects,
} from './slices/projectsPageSlice';
import { hydratePostJobData } from './slices/postJobSlice';
import { setMessages } from './slices/messagesSlice';
import { setChatMessages, setChatTasks } from './slices/chatSlice';
import { hydrateBecomeProviderData } from './slices/becomeProviderSlice';

type DigitalThunk = ThunkAction<void, RootState, unknown, AnyAction>;

type DigitalStateAccessor = RootState & { digital: any };

const selectDigitalState = (state: RootState) => (state as DigitalStateAccessor).digital ?? {};

export const bootstrapHomeData = (): DigitalThunk => (dispatch, getState) => {
  const digital = selectDigitalState(getState());
  const isHydrated =
    digital.categories?.initialized &&
    digital.services?.initialized &&
    digital.providers?.initialized &&
    digital.projects?.initialized;

  if (isHydrated) {
    return;
  }

  dispatch(setCategories(getInitialCategories()));
  dispatch(setServices(getInitialFeaturedServices()));
  dispatch(setProviders(getInitialTopRatedProviders()));
  dispatch(setProjects(getInitialRecentProjects()));
};

export const bootstrapProjectsPageData = (): DigitalThunk => (dispatch, getState) => {
  const { projectsPage } = selectDigitalState(getState());

  if (projectsPage?.initialized) {
    return;
  }

  dispatch(setActiveProjects(getInitialActiveProjects()));
  dispatch(setCompletedProjects(getInitialCompletedProjects()));
  dispatch(setPostedProjects(getInitialPostedProjects()));
};

export const bootstrapPostJobData = (): DigitalThunk => (dispatch, getState) => {
  const { postJob } = selectDigitalState(getState());

  if (postJob?.initialized) {
    return;
  }

  dispatch(
    hydratePostJobData({
      form: getInitialPostJobForm(),
      categoryOptions: getPostJobCategoryOptions(),
      skillOptions: getPostJobSkillOptions(),
      timelineOptions: getPostJobTimelineOptions(),
    })
  );
};

export const bootstrapMessagesData = (): DigitalThunk => (dispatch, getState) => {
  const { messages } = selectDigitalState(getState());

  if (messages?.initialized) {
    return;
  }

  dispatch(setMessages(getInitialConversations()));
};

export const bootstrapChatMessages = (): DigitalThunk => (dispatch, getState) => {
  const { chat } = selectDigitalState(getState());

  if (chat?.initialized) {
    return;
  }

  dispatch(setChatMessages(getInitialChatMessages()));
};

export const bootstrapChatTasks = (): DigitalThunk => (dispatch, getState) => {
  const { chat } = selectDigitalState(getState());

  if (chat?.tasksInitialized) {
    return;
  }

  dispatch(setChatTasks(getInitialChatTasks()));
};

export const bootstrapBecomeProviderData = (): DigitalThunk => (dispatch, getState) => {
  const { becomeProvider } = selectDigitalState(getState());

  if (becomeProvider?.initialized) {
    return;
  }

  dispatch(
    hydrateBecomeProviderData({
      form: getInitialBecomeProviderForm(),
      countryOptions: getBecomeProviderCountryOptions(),
      timezoneOptions: getBecomeProviderTimezoneOptions(),
      languageSuggestions: getBecomeProviderLanguageSuggestions(),
      roleOptions: getBecomeProviderRoleOptions(),
      skillOptions: getBecomeProviderSkillOptions(),
      toolOptions: getBecomeProviderToolOptions(),
      experienceOptions: getBecomeProviderExperienceOptions(),
      distanceOptions: getBecomeProviderDistanceOptions(),
      currencyOptions: getBecomeProviderCurrencyOptions(),
      typicalDeliveryOptions: getBecomeProviderTypicalDeliveryOptions(),
      minimumPriceOptions: getBecomeProviderMinimumPriceOptions(),
      tagSuggestions: getBecomeProviderTagSuggestions(),
      workModeOptions: getBecomeProviderWorkModeOptions(),
    })
  );
};

