import { OnboardingSlide } from './types';

// Lazy-load initial data functions to avoid require() evaluation at module load time
// This prevents Hermes "property is not configurable" errors
export const getInitialOnboardingSlides = (): OnboardingSlide[] => [
  {
    id: '1',
    title: 'Welcome to Aamago',
    description: 'Your all-in-one super app for digital services, e-commerce, and more. Discover amazing features in one place.',
    image: require('../assets/onboarding-1.png'),
  },
  {
    id: '2',
    title: 'Explore Digital Services',
    description: 'Find top-rated service providers, post jobs, and manage your projects all in one convenient platform.',
    image: require('../assets/onboarding-1.png'), // Replace with actual image
  },
  {
    id: '3',
    title: 'Shop with Ease',
    description: 'Browse thousands of products, add to cart, and checkout seamlessly. Enjoy fast delivery and great deals.',
    image: require('../assets/onboarding-1.png'), // Replace with actual image
  },
];

