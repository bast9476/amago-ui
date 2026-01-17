import { ImageSourcePropType } from 'react-native';
import React from 'react';

// Product Data Interface
export interface ProductData {
  id: string;
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
  isFavorite: boolean;
}

// Featured Product Data Interface
export interface FeaturedProductData {
  id: string;
  imageSource: ImageSourcePropType;
  title: string;
  price: string;
  isFavorite: boolean;
}

// Home UI State (for local state like search, filters)
export interface HomeUIState {
  searchQuery: string;
  selectedCategory?: string;
}

// Product Detail Data Interface (extended product data with additional details)
export interface ProductDetailData extends ProductData {
  images?: ImageSourcePropType[]; // Multiple product images
  rating?: number; // Product rating (e.g., 4.8)
  totalReviews?: number; // Total number of reviews
  points?: number; // Points earned for purchase
  oldPrice?: string; // Original price before discount
  inStock?: boolean; // Stock availability
  description?: string; // Full product description
  details?: string; // Product details text
  keyFeatures?: Array<{ icon: React.ReactNode; text: string }>; // Key features list
}

