import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
    BecomeProviderState,
    BecomeProviderFormState,
    BecomeProviderBillingType,
    BecomeProviderWorkMode,
    BecomeProviderExperienceLevel,
} from '../types';

const emptyForm: BecomeProviderFormState = {
    // Basic info
    fullName: '',
    country: '',
    timezone: '',
    languages: [],
    publicProfileName: '',
    bio: '',
    // Skills & roles
    primaryRoles: [],
    topSkills: [],
    tools: [],
    experienceLevel: '',
    workMode: 'remote',
    workDistances: [],
    // Rates & availability
    billingType: 'hourly',
    currency: '৳ BDT',
    hourlyRate: '',
    minimumPrice: '',
    typicalDelivery: '3-5 days',
    weeklyAvailability: ['M', 'T', 'W', 'T', 'F'],
    hoursPerWeek: 30,
    showOnlineNow: true,
    // Portfolio
    importPlatform: null,
    projectTags: [],
    featuredProject: false,
};

const initialState: BecomeProviderState = {
    form: emptyForm,
    countryOptions: [],
    timezoneOptions: [],
    languageSuggestions: [],
    roleOptions: [],
    skillOptions: [],
    toolOptions: [],
    experienceOptions: [],
    workModeOptions: ['remote', 'hybrid'],
    distanceOptions: [],
    currencyOptions: [],
    typicalDeliveryOptions: [],
    minimumPriceOptions: [],
    tagSuggestions: [],
    initialized: false,
    loading: false,
    error: null,
};

const becomeProviderSlice = createSlice({
    name: 'digital/becomeProvider',
    initialState,
    reducers: {
        hydrateBecomeProviderData: (
            state,
            action: PayloadAction<{
                form: BecomeProviderFormState;
                countryOptions: string[];
                timezoneOptions: string[];
                languageSuggestions: string[];
                roleOptions: string[];
                skillOptions: string[];
                toolOptions: string[];
                experienceOptions: string[];
                distanceOptions: string[];
                currencyOptions: string[];
                typicalDeliveryOptions: string[];
                minimumPriceOptions: string[];
                tagSuggestions: string[];
                workModeOptions: BecomeProviderWorkMode[];
            }>,
        ) => {
            state.form = action.payload.form;
            state.countryOptions = action.payload.countryOptions;
            state.timezoneOptions = action.payload.timezoneOptions;
            state.languageSuggestions = action.payload.languageSuggestions;
            state.roleOptions = action.payload.roleOptions;
            state.skillOptions = action.payload.skillOptions;
            state.toolOptions = action.payload.toolOptions;
            state.experienceOptions = action.payload.experienceOptions;
            state.workModeOptions = action.payload.workModeOptions;
            state.distanceOptions = action.payload.distanceOptions;
            state.currencyOptions = action.payload.currencyOptions;
            state.typicalDeliveryOptions = action.payload.typicalDeliveryOptions;
            state.minimumPriceOptions = action.payload.minimumPriceOptions;
            state.tagSuggestions = action.payload.tagSuggestions;
            state.initialized = true;
            state.loading = false;
            state.error = null;
        },
        // Basic info
        setProviderFullName: (state, action: PayloadAction<string>) => {
            state.form.fullName = action.payload;
        },
        setProviderCountry: (state, action: PayloadAction<string>) => {
            state.form.country = action.payload;
        },
        setProviderTimezone: (state, action: PayloadAction<string>) => {
            state.form.timezone = action.payload;
        },
        setProviderLanguages: (state, action: PayloadAction<string[]>) => {
            state.form.languages = action.payload;
        },
        setProviderPublicProfileName: (state, action: PayloadAction<string>) => {
            state.form.publicProfileName = action.payload;
        },
        setProviderBio: (state, action: PayloadAction<string>) => {
            state.form.bio = action.payload;
        },
        // Skills & roles
        setProviderPrimaryRoles: (state, action: PayloadAction<string[]>) => {
            state.form.primaryRoles = action.payload;
        },
        setProviderTopSkills: (state, action: PayloadAction<string[]>) => {
            state.form.topSkills = action.payload;
        },
        setProviderTools: (state, action: PayloadAction<string[]>) => {
            state.form.tools = action.payload;
        },
        setProviderExperienceLevel: (state, action: PayloadAction<BecomeProviderExperienceLevel>) => {
            state.form.experienceLevel = action.payload;
        },
        setProviderWorkMode: (state, action: PayloadAction<BecomeProviderWorkMode>) => {
            state.form.workMode = action.payload;
        },
        setProviderWorkDistances: (state, action: PayloadAction<string[]>) => {
            state.form.workDistances = action.payload;
        },
        // Rates & availability
        setProviderBillingType: (state, action: PayloadAction<BecomeProviderBillingType>) => {
            state.form.billingType = action.payload;
        },
        setProviderCurrency: (state, action: PayloadAction<string>) => {
            state.form.currency = action.payload;
        },
        setProviderHourlyRate: (state, action: PayloadAction<string>) => {
            state.form.hourlyRate = action.payload;
        },
        setProviderMinimumPrice: (state, action: PayloadAction<string>) => {
            state.form.minimumPrice = action.payload;
        },
        setProviderTypicalDelivery: (state, action: PayloadAction<string>) => {
            state.form.typicalDelivery = action.payload;
        },
        setProviderWeeklyAvailability: (state, action: PayloadAction<string[]>) => {
            state.form.weeklyAvailability = action.payload;
        },
        setProviderHoursPerWeek: (state, action: PayloadAction<number>) => {
            state.form.hoursPerWeek = action.payload;
        },
        setProviderShowOnlineNow: (state, action: PayloadAction<boolean>) => {
            state.form.showOnlineNow = action.payload;
        },
        // Portfolio
        setProviderImportPlatform: (state, action: PayloadAction<string | null>) => {
            state.form.importPlatform = action.payload;
        },
        setProviderProjectTags: (state, action: PayloadAction<string[]>) => {
            state.form.projectTags = action.payload;
        },
        setProviderFeaturedProject: (state, action: PayloadAction<boolean>) => {
            state.form.featuredProject = action.payload;
        },
        resetBecomeProviderForm: (state) => {
            state.form = {
                ...emptyForm,
            };
        },
    },
});

export const {
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
} = becomeProviderSlice.actions;

export default becomeProviderSlice.reducer;


