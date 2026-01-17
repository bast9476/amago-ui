import { ProductData, FeaturedProductData } from './types';

// Lazy-load initial data functions to avoid require() evaluation at module load time
// This prevents Hermes "property is not configurable" errors

const productImage1 = require('@modules/ecommerce/assets/feature-1.png');
const productImage2 = require('@modules/ecommerce/assets/feature-2.png');
const productImage3 = require('@modules/ecommerce/assets/feature-3.png');

export const getInitialProducts = (): ProductData[] => [
  {
    id: '1',
    imageSource: productImage1,
    title: 'Snopy Headphone',
    description: 'Snopy SN- BT96 Pretty Back Bluetooth Headphone',
    price: '৳549',
    isFavorite: true,
  },
  {
    id: '2',
    imageSource: productImage2,
    title: 'Greeting Card',
    description: 'Snopy SN- BT96 Pretty Back Bluetooth Headphone',
    price: '৳49',
    isFavorite: false,
  },
  {
    id: '3',
    imageSource: productImage3,
    title: 'Snopy Headphone',
    description: 'Snopy SN- BT96 Pretty Back Bluetooth Headphone',
    price: '৳549',
    isFavorite: true,
  },
];

export const getInitialFeaturedProducts = (): FeaturedProductData[] => [
  {
    id: 'f1',
    imageSource: productImage1,
    title: 'Headphones',
    price: '৳549',
    isFavorite: true,
  },
  {
    id: 'f2',
    imageSource: productImage2,
    title: 'Sport Band',
    price: '৳1500',
    isFavorite: false,
  },
  {
    id: 'f3',
    imageSource: productImage3,
    title: 'laptop Lenovo',
    price: '৳749',
    isFavorite: false,
  },
  {
    id: 'f4',
    imageSource: productImage3,
    title: 'laptop Lenovo',
    price: '৳749',
    isFavorite: false,
  },
];

