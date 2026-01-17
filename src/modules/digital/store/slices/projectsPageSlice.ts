import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project, ProjectStatus } from '../types';

interface ProjectsPageState {
    active: Project[];
    completed: Project[];
    posted: Project[];
    loading: boolean;
    error: string | null;
    initialized: boolean;
}

const initialState: ProjectsPageState = {
    active: [],
    completed: [],
    posted: [],
    loading: false,
    error: null,
    initialized: false,
};

const projectsPageSlice = createSlice({
    name: 'digital/projectsPage',
    initialState,
    reducers: {
        setActiveProjects: (state, action: PayloadAction<Project[]>) => {
            state.active = action.payload;
            state.loading = false;
            state.error = null;
            state.initialized = true;
        },
        setCompletedProjects: (state, action: PayloadAction<Project[]>) => {
            state.completed = action.payload;
            state.loading = false;
            state.error = null;
            state.initialized = true;
        },
        setPostedProjects: (state, action: PayloadAction<Project[]>) => {
            state.posted = action.payload;
            state.loading = false;
            state.error = null;
            state.initialized = true;
        },
        setProjectsByStatus: (state, action: PayloadAction<{ status: ProjectStatus; projects: Project[] }>) => {
            state[action.payload.status] = action.payload.projects;
            state.loading = false;
            state.error = null;
            state.initialized = true;
        },
        setProjectsPageLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setProjectsPageError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    setActiveProjects,
    setCompletedProjects,
    setPostedProjects,
    setProjectsByStatus,
    setProjectsPageLoading,
    setProjectsPageError,
} = projectsPageSlice.actions;

export default projectsPageSlice.reducer;

