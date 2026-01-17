import {
  Category,
  FeaturedService,
  TopRatedProvider,
  RecentProject,
  Conversation,
  ChatMessage,
  Project,
  PostJobFormState,
  Task,
  BecomeProviderFormState,
} from './types';

// Lazy-load initial data functions to avoid require() evaluation at module load time
// This prevents Hermes "property is not configurable" errors
export const getInitialCategories = (): Category[] => [
  { id: '1', title: 'UI/UX Design', jobs: '2.5k+ jobs', color: '#07b556', icon: require('@modules/digital/assets/icon-1.png') },
  { id: '2', title: 'Content Writing', jobs: '1.8k+ jobs', color: '#4e9aff', icon: require('@modules/digital/assets/icon-2.png') },
  { id: '3', title: 'Development', jobs: '3k+ jobs', color: '#fbc81f', icon: require('@modules/digital/assets/icon-3.png') },
  { id: '4', title: 'Video Editing', jobs: '1.2k+ jobs', color: '#57edfe', icon: require('@modules/digital/assets/icon-4.png') },
];

export const getInitialFeaturedServices = (): FeaturedService[] => [
  {
    id: '1',
    title: 'I will design modern UI/UX for your mobile app',
    price: '৳1,200',
    seller: 'Sarah K.',
    badge: '24h',
    badgeType: 'orange',
    level: 'Level 2',
    cardImage: require('@modules/digital/assets/img.png'),
    profileImage: require('@modules/digital/assets/img-5.png'),
  },
  {
    id: '2',
    title: 'I will develop responsive website with modern tech',
    price: '৳2,500',
    seller: 'Alex M.',
    badge: '24h',
    badgeType: 'orange',
    level: 'Pro',
    cardImage: require('@modules/digital/assets/img-4.png'),
    profileImage: require('@modules/digital/assets/img-3.png'),
  },
  {
    id: '3',
    title: 'I will write engaging content for your business',
    price: '৳800',
    seller: 'Emma L.',
    badge: 'Online',
    badgeType: 'green',
    level: 'Level 2',
    cardImage: require('@modules/digital/assets/img-2.png'),
    profileImage: require('@modules/digital/assets/img-6.png'),
  },
];

export const getInitialTopRatedProviders = (): TopRatedProvider[] => [
  {
    id: '1',
    name: 'Ayesha Rahman',
    title: 'UI/UX Designer',
    rating: 4.9,
    reviews: 127,
    price: '৳8,000',
    profileImage: require('@modules/digital/assets/img-3.png'),
  },
  {
    id: '2',
    name: 'Rafiq Ahmed',
    title: 'I will design a modern UI/UX for your mobile app',
    rating: 4.9,
    reviews: 127,
    price: '৳12,000',
    profileImage: require('@modules/digital/assets/img-3.png'),
  },
  {
    id: '3',
    name: 'Nadia Islam',
    title: 'Professional content writing and copywriting services',
    rating: 4.9,
    reviews: 127,
    price: '৳3,000',
    profileImage: require('@modules/digital/assets/img-3.png'),
  },
];

export const getInitialRecentProjects = (): RecentProject[] => [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    company: 'TechStart BD',
    budget: '৳45,000',
    progress: 75,
    dueDate: 'Nov 5',
    iconLetter: 'T',
  },
];

export const getInitialConversations = (): Conversation[] => [
  {
    id: 'sarah-ahmed',
    name: 'Sarah Ahmed',
    timestamp: '2m ago',
    preview: "I've uploaded the wireframes for review",
    tag: 'Banking App UI/UX',
    tagColor: '#00A551',
    tagBackground: 'rgba(7, 181, 86, 0.08)',
    tagBorder: 'rgba(7, 181, 86, 0.15)',
    unread: 2,
    online: true,
    avatar: require('@modules/digital/assets/img.png'),
  },
  {
    id: 'fatima-khan',
    name: 'Fatima Khan',
    timestamp: '15m ago',
    preview: 'Thank you for the great review!',
    tag: 'SEO Content',
    tagColor: '#D97706',
    tagBackground: 'rgba(249, 168, 38, 0.15)',
    tagBorder: 'rgba(217, 119, 6, 0.2)',
    unread: 3,
    online: false,
    avatar: require('@modules/digital/assets/img-2.png'),
  },
  {
    id: 'rahul-sharma',
    name: 'Rahul Sharma',
    timestamp: 'Yesterday',
    preview: 'When can we schedule a call?',
    tag: 'E-commerce Website',
    tagColor: '#1D4ED8',
    tagBackground: 'rgba(59, 130, 246, 0.12)',
    tagBorder: 'rgba(29, 78, 216, 0.2)',
    unread: 0,
    online: true,
    avatar: require('@modules/digital/assets/img-3.png'),
  },
  {
    id: 'alex-chen',
    name: 'Alex Chen',
    timestamp: '2d ago',
    preview: 'Okay got it',
    tag: 'Driver',
    tagColor: '#DC2626',
    tagBackground: 'rgba(239, 68, 68, 0.12)',
    tagBorder: 'rgba(220, 38, 38, 0.2)',
    unread: 0,
    online: false,
    avatar: require('@modules/digital/assets/img-4.png'),
  },
];

export const getInitialChatMessages = (): ChatMessage[] => [
  {
    id: 'chat-1',
    direction: 'incoming',
    message: "Hi! Thanks for hiring me. I've reviewed the brief and I'm excited to get started!",
    senderName: 'Sarah Ahmed',
    timestamp: '2025-10-25 10:30',
  },
  {
    id: 'chat-2',
    direction: 'outgoing',
    message: 'Great! When can you start with the wireframes?',
    senderName: 'You',
    timestamp: '2025-10-25 10:45',
  },
  {
    id: 'chat-3',
    direction: 'incoming',
    message: 'I can start today. Here are some initial questions about the user flow...',
    senderName: 'Sarah Ahmed',
    timestamp: '2025-10-25 11:00',
  },
  {
    id: 'chat-4',
    direction: 'incoming',
    message: 'Uploading the latest Wireframes for your review.',
    senderName: 'Sarah Ahmed',
    timestamp: '2025-10-25 11:05',
    attachment: {
      id: 'attachment-1',
      name: 'wireframes_v1.fig',
    },
  },
];

export const getInitialChatTasks = (): Task[] => [
  { id: '1', text: 'Create user flow diagram', isCompleted: true },
  { id: '2', text: 'Design login & signup screens', isCompleted: true },
  { id: '3', text: 'Design home screen', isCompleted: false, isActive: true },
  { id: '4', text: 'Design profile & settings', isCompleted: false, isActive: false },
];

export const getInitialActiveProjects = (): Project[] => [
  {
    id: '1',
    title: 'Banking App UI/UX Design',
    clientName: 'Sarah Ahmed',
    clientInitial: 'S',
    status: 'In Progress',
    statusColor: '#1447e6',
    statusBg: 'bg-blue-100',
    progress: 65,
    paid: '৳16,250',
    budget: '৳25,000',
    dueDate: 'Nov 17',
  },
  {
    id: '2',
    title: 'E-commerce Website Development',
    clientName: 'Rahul Sharma',
    clientAvatar: require('@modules/digital/assets/img.png'),
    status: 'In Progress',
    statusColor: '#1447e6',
    statusBg: 'bg-blue-100',
    progress: 30,
    paid: '৳24,000',
    budget: '৳80,000',
    dueDate: 'Dec 5',
  },
];

export const getInitialCompletedProjects = (): Project[] => [
  {
    id: '3',
    title: 'Mobile App Redesign',
    clientName: 'Fatima Khan',
    clientInitial: 'F',
    status: 'Completed',
    statusColor: '#00A551',
    statusBg: 'bg-green-100',
    progress: 100,
    paid: '৳50,000',
    budget: '৳50,000',
    dueDate: 'Oct 15',
  },
];

export const getInitialPostedProjects = (): Project[] => [
  {
    id: '4',
    title: 'Mobile App Development - React Native',
    clientName: 'Alex Chen',
    clientInitial: 'A',
    status: 'Development',
    statusColor: '#00a551',
    statusBg: 'bg-green-100',
    progress: 0,
    paid: '৳0',
    budget: '৳50,000 - 80,000',
    dueDate: 'Oct 28',
  },
];

export const getInitialPostJobForm = (): PostJobFormState => ({
  jobTitle: '',
  category: 'Development',
  skills: ['Figma', 'UI Design'],
  description: '',
  attachments: [{ id: '1', name: 'design-brief.pdf' }],
  budgetType: 'fixed',
  budget: '',
  maximum: '',
  timeline: '1-2 weeks',
  visibility: 'public',
});

export const getPostJobCategoryOptions = (): string[] => [
  'UI/UX Design',
  'Development',
  'Content Writing',
  'Video Editing',
  'Marketing',
  'Graphic Design',
  'Data Analysis',
  'Photography',
];

export const getPostJobSkillOptions = (): string[] => [
  'Figma',
  'UI Design',
  'UX Design',
  'React',
  'React Native',
  'Node.js',
  'JavaScript',
  'TypeScript',
  'CSS',
  'HTML',
  'Graphic Design',
  'Adobe XD',
  'Sketch',
  'Photoshop',
  'Illustrator',
  'Python',
  'Java',
  'Swift',
  'Kotlin',
  'Angular',
  'Vue.js',
  'Next.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Git',
  'Docker',
  'AWS',
  'Azure',
];

export const getPostJobTimelineOptions = (): string[] => [
  '1-2 weeks',
  '2-4 weeks',
  '1-2 months',
  '2-3 months',
  '3-6 months',
  '6+ months',
];

// Become Service Provider – registration form initial data and option lists

export const getInitialBecomeProviderForm = (): BecomeProviderFormState => ({
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
});

export const getBecomeProviderCountryOptions = (): string[] => [
  'Bangladesh',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
];

export const getBecomeProviderTimezoneOptions = (): string[] => [
  'GMT-8 (Pacific Time)',
  'GMT-5 (Eastern Time)',
  'GMT+0 (UTC)',
  'GMT+1 (Central Europe)',
  'GMT+6 (Bangladesh)',
];

export const getBecomeProviderLanguageSuggestions = (): string[] => [
  'English',
  'Bengali',
  'Hindi',
  'Spanish',
  'French',
  'German',
];

export const getBecomeProviderRoleOptions = (): string[] => [
  'UI/UX Designer',
  'Mobile Dev',
  'Content Writer',
  'Web Developer',
  'Data Analyst',
  'Others',
];

export const getBecomeProviderSkillOptions = (): string[] => [
  'React',
  'Node.js',
  'JavaScript',
  'TypeScript',
  'MongoDB',
  'Express',
  'HTML/CSS',
];

export const getBecomeProviderToolOptions = (): string[] => [
  'VS Code',
  'GitHub',
  'Figma',
  'Postman',
];

export const getBecomeProviderExperienceOptions = (): string[] => [
  'Rising (0-2 years)',
  'Intermediate (2-5 years)',
  'Expert (5+ years)',
];

export const getBecomeProviderWorkModeOptions = (): ('remote' | 'hybrid')[] => ['remote', 'hybrid'];

export const getBecomeProviderDistanceOptions = (): string[] => ['5km', '10km', '25km'];

export const getBecomeProviderCurrencyOptions = (): string[] => ['৳ BDT', '$ USD', '€ EUR'];

export const getBecomeProviderTypicalDeliveryOptions = (): string[] => [
  'Same-day',
  '1-2 days',
  '3-5 days',
  '7-10 days',
];

export const getBecomeProviderMinimumPriceOptions = (): string[] => ['৳5,000', '৳10,000', 'Custom'];

export const getBecomeProviderTagSuggestions = (): string[] => [
  'React',
  'Next.js',
  'UI Design',
  'Product Strategy',
  'Brand Identity',
  'UX Research',
];

// Note: Do NOT export constants here - they would evaluate require() at module load time
// Always use the getter functions (getInitialCategories, etc.) instead

