/**
 * Centralized exports for the digital module store
 * 
 * This file provides a clean, organized way to import Redux Toolkit features
 * while maintaining Hermes compatibility through lazy loading.
 * 
 * Usage:
 *   import { setSelectedCategory, selectSelectedCategory } from '@modules/digital/store';
 *   import { useGetCategoriesQuery } from '@modules/digital/store';
 */

// Export all action creators from slices
export { setSelectedCategory, setHowItWorksTab, setSearchQuery } from './slices/homeSlice';

export { setCategories, setCategoriesLoading, setCategoriesError } from './slices/categoriesSlice';

export { setServices, setServicesLoading, setServicesError } from './slices/servicesSlice';

export { setProviders, setProvidersLoading, setProvidersError } from './slices/providersSlice';

export { setProjects, setProjectsLoading, setProjectsError } from './slices/projectsSlice';

export {
  setActiveProjects,
  setCompletedProjects,
  setPostedProjects,
  setProjectsByStatus,
  setProjectsPageLoading,
  setProjectsPageError,
} from './slices/projectsPageSlice';

export {
  hydratePostJobData,
  setJobTitle,
  setJobCategory,
  addJobSkill,
  removeJobSkill,
  setJobDescription,
  addJobAttachment,
  removeJobAttachment,
  setPostJobBudgetType,
  setPostJobBudget,
  setPostJobMaximum,
  setPostJobTimeline,
  setPostJobVisibility,
  resetPostJobForm,
} from './slices/postJobSlice';

export {
  hydrateBecomeProviderData,
  setProviderFullName,
  setProviderCountry,
  setProviderTimezone,
  setProviderLanguages,
  setProviderPublicProfileName,
  setProviderBio,
  setProviderPrimaryRoles,
  setProviderTopSkills,
  setProviderTools,
  setProviderExperienceLevel,
  setProviderWorkMode,
  setProviderWorkDistances,
  setProviderBillingType,
  setProviderCurrency,
  setProviderHourlyRate,
  setProviderMinimumPrice,
  setProviderTypicalDelivery,
  setProviderWeeklyAvailability,
  setProviderHoursPerWeek,
  setProviderShowOnlineNow,
  setProviderImportPlatform,
  setProviderProjectTags,
  setProviderFeaturedProject,
  resetBecomeProviderForm,
} from './slices/becomeProviderSlice';

export { setMessages, setMessagesLoading, setMessagesError } from './slices/messagesSlice';

export {
  fetchChatMessages,
  setChatMessages,
  upsertChatMessage,
  clearChatMessages,
  setChatTasks,
  toggleChatTask,
  setChatTaskActive,
  updateChatTask,
} from './slices/chatSlice';

export {
  bootstrapHomeData,
  bootstrapProjectsPageData,
  bootstrapPostJobData,
  bootstrapMessagesData,
  bootstrapChatMessages,
  bootstrapChatTasks,
  bootstrapBecomeProviderData,
} from './bootstrap';

// Export all selectors
export * from './selectors/homeSelectors';
export * from './selectors/messagesSelectors';
export * from './selectors/chatSelectors';
export * from './selectors/projectsPageSelectors';
export * from './selectors/postJobSelectors';
export * from './selectors/becomeProviderSelectors';

// Export RTK Query hooks getters
// Usage: const { useGetCategoriesQuery } = getHomeApiHooks();
export { getHomeApiHooks } from './api/homeApi';
export { getMessagesApiHooks } from './api/messagesApi';
export { getChatApiHooks } from './api/chatApi';
export { getProjectsApiHooks } from './api/projectsApi';
export { getCompletedProjectApiHooks } from './api/completedProjectApi';
export { getPostJobApiHooks } from './api/postJobApi';
export { getBecomeProviderApiHooks } from './api/becomeProviderApi';

// Export types
export * from './types';

