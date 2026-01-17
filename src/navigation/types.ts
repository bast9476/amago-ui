// Root navigation types - each module is a separate navigator
export type RootStackParamList = {
  Onboarding: undefined; // Onboarding module navigator
  Home: undefined;        // Home module navigator
  Ecommerce: undefined;  // Ecommerce module navigator
  Digital: undefined;    // Digital module navigator
  Account: undefined;    // Account module navigator
  UserLevel: undefined;   // User level module navigator
  Flight: undefined;     // Flight module navigator
};

// Home module navigation types
export type HomeStackParamList = {
  HomeMain: undefined;
};

// Ecommerce module navigation types
export type EcommerceStackParamList = {
  Home: undefined;
  MyCart: undefined;
  ProductDetail: { productId: string };
  Cart: undefined;
  Checkout: undefined;
  Orders: undefined;
};

// Digital module navigation types
export type DigitalStackParamList = {
  Home: undefined;
  Messages: undefined;
  Chat: undefined;
  CompletedProject: undefined;
  Projects: undefined;
  PostJob: undefined;
  BecomeServiceProvider: undefined;
  Profile: undefined;
};

// User level module navigation types
export type UserLevelStackParamList = {
  GamifiedUserLevelSystem: undefined;
  LevelProgress: undefined;
};

// Onboarding module navigation types
export type OnboardingStackParamList = {
  FirstOnboarding: undefined;
  SecondOnboarding: undefined;
  ThridOnboarding: undefined;
};

// Account module navigation types
export type AccountStackParamList = {
  LoginScreen: undefined;
  ForgetScreen: undefined;
  ResetPasswordScreen: undefined;
  RegisterScreen: undefined;
  SuccessScreen: undefined;
};

// Flight module navigation types
export type FlightStackParamList = {
  Home: undefined;
  AvailableFlight: undefined;
  ReviewFlight: undefined;
};

// Export all param lists for use in navigation hooks
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
