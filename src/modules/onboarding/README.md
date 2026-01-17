# Onboarding Module

This module handles the first-time user onboarding experience.

## Structure

```
onboarding/
├── assets/              # Onboarding images
├── navigation/          # OnboardingNavigator
├── screens/             # Onboarding screens
│   ├── Onboarding/     # Main onboarding screen
│   ├── components/     # Reusable onboarding components
│   └── data/           # Onboarding slide data
└── types/              # TypeScript types
```

## Components

- **OnboardingSlide**: Individual slide component
- **PaginationDots**: Progress indicator
- **OnboardingButtons**: Navigation buttons (Next, Skip, Get Started)

## Usage

The onboarding screen is shown on first app launch and guides users through key features.

