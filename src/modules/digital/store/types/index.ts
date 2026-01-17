import { ImageSourcePropType } from 'react-native';

// Popular Category
export interface Category {
    id: string;
    title: string;
    jobs: string;
    color: string;
    icon: ImageSourcePropType;
}

// Featured Service
export interface FeaturedService {
    id: string;
    title: string;
    price: string;
    seller: string;
    badge: string;
    badgeType: 'orange' | 'green';
    level: string;
    cardImage: ImageSourcePropType;
    profileImage: ImageSourcePropType;
}

// Top Rated Provider
export interface TopRatedProvider {
    id: string;
    name: string;
    title: string;
    rating: number;
    reviews: number;
    price: string;
    profileImage: ImageSourcePropType;
}

// Recent Project
export interface RecentProject {
    id: string;
    title: string;
    company: string;
    budget: string;
    progress: number; // 0-100
    dueDate: string;
    iconLetter: string;
}

// Conversation (Messages)
export interface Conversation {
    id: string;
    name: string;
    timestamp: string;
    preview: string;
    tag: string;
    tagColor?: string;
    tagBackground?: string;
    tagBorder?: string;
    unread: number;
    online?: boolean;
    avatar?: ImageSourcePropType;
}

// How It Works Step
export interface HowItWorksStep {
    title: string;
    description: string;
}

// Home Screen UI State
export type HowItWorksTab = 'clients' | 'freelancers';

export interface HomeUIState {
    selectedCategory: string;
    howItWorksTab: HowItWorksTab;
    searchQuery: string;
}

// Chat
export type ChatMessageDirection = 'incoming' | 'outgoing';

export interface ChatAttachment {
    id: string;
    name: string;
    url?: string;
}

export interface ChatMessage {
    id: string;
    direction: ChatMessageDirection;
    message: string;
    senderName: string;
    timestamp: string;
    avatar?: ImageSourcePropType;
    attachment?: ChatAttachment;
}

export interface Task {
    id: string;
    text: string;
    isCompleted: boolean;
    isActive?: boolean;
}

// Post Job
export interface PostJobAttachment {
    id: string;
    name: string;
}

export type PostJobBudgetType = 'fixed' | 'hourly';
export type PostJobVisibility = 'public' | 'invite-only';

export interface PostJobFormState {
    jobTitle: string;
    category: string;
    skills: string[];
    description: string;
    attachments: PostJobAttachment[];
    budgetType: PostJobBudgetType;
    budget: string;
    maximum: string;
    timeline: string;
    visibility: PostJobVisibility;
}

export interface PostJobState {
    form: PostJobFormState;
    categoryOptions: string[];
    skillOptions: string[];
    timelineOptions: string[];
    initialized: boolean;
    loading: boolean;
    error: string | null;
}

// Become Service Provider - registration form
export type BecomeProviderExperienceLevel = 'rising' | 'intermediate' | 'expert' | '';
export type BecomeProviderBillingType = 'hourly' | 'fixed';
export type BecomeProviderWorkMode = 'remote' | 'hybrid';

export interface BecomeProviderFormState {
    // Basic info
    fullName: string;
    country: string;
    timezone: string;
    languages: string[];
    publicProfileName: string;
    bio: string;
    // Skills & roles
    primaryRoles: string[];
    topSkills: string[];
    tools: string[];
    experienceLevel: BecomeProviderExperienceLevel;
    workMode: BecomeProviderWorkMode;
    workDistances: string[]; // e.g. ['5km', '10km']
    // Rates & availability
    billingType: BecomeProviderBillingType;
    currency: string;
    hourlyRate: string;
    minimumPrice: string;
    typicalDelivery: string;
    weeklyAvailability: string[]; // e.g. ['M', 'T', 'W']
    hoursPerWeek: number;
    showOnlineNow: boolean;
    // Portfolio
    importPlatform: string | null; // behance, dribbble, etc.
    projectTags: string[];
    featuredProject: boolean;
}

export interface BecomeProviderState {
    form: BecomeProviderFormState;
    countryOptions: string[];
    timezoneOptions: string[];
    languageSuggestions: string[];
    roleOptions: string[];
    skillOptions: string[];
    toolOptions: string[];
    experienceOptions: string[];
    workModeOptions: BecomeProviderWorkMode[];
    distanceOptions: string[];
    currencyOptions: string[];
    typicalDeliveryOptions: string[];
    minimumPriceOptions: string[];
    tagSuggestions: string[];
    initialized: boolean;
    loading: boolean;
    error: string | null;
}

// Project (for Projects page - Active/Completed/Posted)
export interface Project {
    id: string;
    title: string;
    clientName: string;
    clientAvatar?: ImageSourcePropType;
    clientInitial?: string;
    status: string;
    statusColor?: string;
    statusBg?: string;
    progress: number;
    paid: string;
    budget: string;
    dueDate: string;
}

export type ProjectStatus = 'active' | 'completed' | 'posted';

