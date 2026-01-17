import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecentProject } from '../types';

interface ProjectsState {
  items: RecentProject[];
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

// Initialize with empty array - data will be loaded after app registration
const initialState: ProjectsState = {
  items: [],
  loading: false,
  error: null,
  initialized: false,
};

const projectsSlice = createSlice({
  name: 'digital/projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<RecentProject[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
      state.initialized = true;
    },
    setProjectsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProjectsError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setProjects, setProjectsLoading, setProjectsError } = projectsSlice.actions;

export default projectsSlice.reducer;

