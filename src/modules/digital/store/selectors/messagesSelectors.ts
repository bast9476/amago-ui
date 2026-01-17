import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/store';

type DigitalStateAccessor = RootState & { digital: any };

const selectDigitalState = (state: RootState) => (state as DigitalStateAccessor).digital;

const selectMessagesState = createSelector([selectDigitalState], (digital) => digital.messages);

export const selectConversations = createSelector([selectMessagesState], (messages) => messages.items);
export const selectMessagesLoading = createSelector([selectMessagesState], (messages) => messages.loading);
export const selectMessagesError = createSelector([selectMessagesState], (messages) => messages.error);
export const selectMessagesInitialized = createSelector([selectMessagesState], (messages) => messages.initialized);

