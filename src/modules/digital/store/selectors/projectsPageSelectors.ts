import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/store/index';

// Base selectors
type DigitalStateAccessor = RootState & { digital: any };

const selectDigitalState = (state: RootState) => (state as DigitalStateAccessor).digital;

// Projects Page State Selectors
export const selectProjectsPage = createSelector([selectDigitalState], (digital) => digital.projectsPage);

export const selectActiveProjects = createSelector([selectProjectsPage], (projectsPage) => projectsPage.active);
export const selectCompletedProjects = createSelector([selectProjectsPage], (projectsPage) => projectsPage.completed);
export const selectPostedProjects = createSelector([selectProjectsPage], (projectsPage) => projectsPage.posted);

export const selectProjectsPageLoading = createSelector([selectProjectsPage], (projectsPage) => projectsPage.loading);
export const selectProjectsPageError = createSelector([selectProjectsPage], (projectsPage) => projectsPage.error);
export const selectProjectsPageInitialized = createSelector([selectProjectsPage], (projectsPage) => projectsPage.initialized);

