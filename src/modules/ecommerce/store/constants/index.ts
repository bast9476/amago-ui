// Default product detail values
export const DEFAULT_PRODUCT_RATING = 4.8;
export const DEFAULT_REVIEWS_COUNT = 1247;
export const DEFAULT_PRODUCT_POINTS = 100;

// Default points distribution values
export const DEFAULT_YOU_EARN_POINTS = 30;
export const DEFAULT_NETWORK_EARNS_POINTS = 70;

// Points breakdown levels
export const DEFAULT_POINTS_BREAKDOWN = [
  { level: 1, description: 'Direct referral bonus', points: 30 },
  { level: 2, description: 'Second level commission', points: 20 },
  { level: 3, description: 'Third level commission', points: 15 },
  { level: 4, description: 'Fourth level commission', points: 10 },
  { level: 5, description: 'Fifth level commission', points: 8 },
  { level: 6, description: 'Sixth level commission', points: 6 },
  { level: 7, description: 'Seventh level commission', points: 5 },
  { level: 8, description: 'Eighth level commission', points: 4 },
  { level: 9, description: 'Ninth level commission', points: 3 },
  { level: 10, description: 'Tenth level commission', points: 2 },
] as const;

