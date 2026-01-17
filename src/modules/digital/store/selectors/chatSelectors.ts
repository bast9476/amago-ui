import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/store';

type DigitalStateAccessor = RootState & { digital: any };

const selectDigitalState = (state: RootState) => (state as DigitalStateAccessor).digital;

const selectChatState = createSelector([selectDigitalState], (digital) => digital.chat);

export const selectChatMessages = createSelector([selectChatState], (chat) => chat.items);
export const selectChatLoading = createSelector([selectChatState], (chat) => chat.loading);
export const selectChatError = createSelector([selectChatState], (chat) => chat.error);
export const selectChatInitialized = createSelector([selectChatState], (chat) => chat.initialized);

export const selectChatTasks = createSelector([selectChatState], (chat) => chat.tasks);
export const selectChatTasksInitialized = createSelector([selectChatState], (chat) => chat.tasksInitialized);

