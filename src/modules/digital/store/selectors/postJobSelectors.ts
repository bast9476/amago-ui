import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/store/index';

type DigitalStateAccessor = RootState & { digital: any };

const selectDigitalState = (state: RootState) => (state as DigitalStateAccessor).digital;

export const selectPostJobState = createSelector([selectDigitalState], (digital) => digital.postJob);

export const selectPostJobForm = createSelector([selectPostJobState], (postJob) => postJob.form);
export const selectPostJobInitialized = createSelector([selectPostJobState], (postJob) => postJob.initialized);
export const selectPostJobCategoryOptions = createSelector([selectPostJobState], (postJob) => postJob.categoryOptions);
export const selectPostJobSkillOptions = createSelector([selectPostJobState], (postJob) => postJob.skillOptions);
export const selectPostJobTimelineOptions = createSelector([selectPostJobState], (postJob) => postJob.timelineOptions);
export const selectPostJobLoading = createSelector([selectPostJobState], (postJob) => postJob.loading);
export const selectPostJobError = createSelector([selectPostJobState], (postJob) => postJob.error);


