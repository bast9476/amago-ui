/**
 * Icon size constants for consistent sizing across the application
 * 
 * These constants document the current sizes used in MainHeader and MainHeaderSearch.
 * Icons can still accept custom sizes via props, but these provide standard references.
 */
export const ICON_SIZES = {
  // Header right icons (current usage)
  HEADER_RIGHT_ICON: 22,
  HEADER_BACK_ICON: 18,
  HEADER_RIGHT_ICON_CONTAINER: 22,
  
  // Cart icon (from Figma design)
  CART_ICON: 29.66,  // Exact size from Figma SVG
  CART_ICON_CONTAINER_WIDTH: 30.15,  // Container width from Figma
  CART_ICON_CONTAINER_HEIGHT: 35,  // Container height from Figma (includes badge space)
  
  // Search bar icons (current usage)
  SEARCH_ICON: 22,
  SEARCH_ACTION_ICON: 18,
  SEARCH_ACTION_BUTTON: 37,
  
  // Filter button (from Figma design)
  FILTER_ICON_WIDTH: 39.65,  // Exact width from Figma
  FILTER_ICON_HEIGHT: 46,  // Exact height from Figma
  
  // Badge sizes (from Figma design)
  BADGE_SIZE: 12.5,  // 12.46px from Figma
  BADGE_TEXT_SIZE: 6.5,  // 6.525px from Figma
  BADGE_SIZE_DEFAULT: 16,  // Current default (4 * 4 = 16px)
  BADGE_TEXT_SIZE_DEFAULT: 10,  // Current default
  
  // Standard sizes for reference
  SMALL: 15,
  MEDIUM: 18,
  LARGE: 20,
  XLARGE: 22,
  XXLARGE: 30,
} as const;

