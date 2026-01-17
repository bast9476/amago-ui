import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
    PostJobState,
    PostJobFormState,
    PostJobAttachment,
    PostJobBudgetType,
    PostJobVisibility,
} from '../types';

const emptyForm: PostJobFormState = {
    jobTitle: '',
    category: '',
    skills: [],
    description: '',
    attachments: [],
    budgetType: 'fixed',
    budget: '',
    maximum: '',
    timeline: '',
    visibility: 'public',
};

const initialState: PostJobState = {
    form: emptyForm,
    categoryOptions: [],
    skillOptions: [],
    timelineOptions: [],
    initialized: false,
    loading: false,
    error: null,
};

const postJobSlice = createSlice({
    name: 'digital/postJob',
    initialState,
    reducers: {
        hydratePostJobData: (
            state,
            action: PayloadAction<{
                form: PostJobFormState;
                categoryOptions: string[];
                skillOptions: string[];
                timelineOptions: string[];
            }>
        ) => {
            state.form = action.payload.form;
            state.categoryOptions = action.payload.categoryOptions;
            state.skillOptions = action.payload.skillOptions;
            state.timelineOptions = action.payload.timelineOptions;
            state.initialized = true;
            state.loading = false;
            state.error = null;
        },
        setJobTitle: (state, action: PayloadAction<string>) => {
            state.form.jobTitle = action.payload;
        },
        setJobCategory: (state, action: PayloadAction<string>) => {
            state.form.category = action.payload;
        },
        addJobSkill: (state, action: PayloadAction<string>) => {
            if (!state.form.skills.includes(action.payload)) {
                state.form.skills.push(action.payload);
            }
        },
        removeJobSkill: (state, action: PayloadAction<string>) => {
            state.form.skills = state.form.skills.filter((skill) => skill !== action.payload);
        },
        setJobDescription: (state, action: PayloadAction<string>) => {
            state.form.description = action.payload;
        },
        addJobAttachment: (state, action: PayloadAction<PostJobAttachment>) => {
            state.form.attachments.push(action.payload);
        },
        removeJobAttachment: (state, action: PayloadAction<string>) => {
            state.form.attachments = state.form.attachments.filter((attachment) => attachment.id !== action.payload);
        },
        setPostJobBudgetType: (state, action: PayloadAction<PostJobBudgetType>) => {
            state.form.budgetType = action.payload;
        },
        setPostJobBudget: (state, action: PayloadAction<string>) => {
            state.form.budget = action.payload;
        },
        setPostJobMaximum: (state, action: PayloadAction<string>) => {
            state.form.maximum = action.payload;
        },
        setPostJobTimeline: (state, action: PayloadAction<string>) => {
            state.form.timeline = action.payload;
        },
        setPostJobVisibility: (state, action: PayloadAction<PostJobVisibility>) => {
            state.form.visibility = action.payload;
        },
        resetPostJobForm: (state) => {
            state.form = {
                ...emptyForm,
                category: state.categoryOptions[0] || '',
                timeline: state.timelineOptions[0] || '',
            };
            state.form.skills = [];
            state.form.attachments = [];
        },
    },
});

export const {
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
} = postJobSlice.actions;

export default postJobSlice.reducer;


