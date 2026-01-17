// Home module initial data (API-shaped mock data)
// Follow the same pattern as digital/ecommerce: expose getter functions to avoid eager require() evaluation.

import type { ImageSourcePropType } from 'react-native';

export type HomeCategorySectionId = 'finance' | 'travel' | 'health' | 'socials';

export type HomeCategoryItem = {
  id: string;
  label: string;
  iconSource: ImageSourcePropType;
};

export type HomeCategorySection = {
  id: HomeCategorySectionId;
  title: string;
  items: HomeCategoryItem[];
};

export type HomeSeeAllItem = { id: string; label: string };

export type HomeSeeAllConfig = {
  id: HomeCategorySectionId;
  title: string;
  items: HomeSeeAllItem[];
};

const logoIcon = require('@modules/home/assets/logo.png');

// Original Home section icons (as previously used in `CategorySections.tsx`)
const billPayIcon = require('@modules/home/assets/bill_pay.png');
const feesPayIcon = require('@modules/home/assets/fees_pay.png');
const topUpIcon = require('@modules/home/assets/top_up.png');
const flightIcon = require('@modules/home/assets/flight.png');
const carIcon = require('@modules/home/assets/car.png');
const trainIcon = require('@modules/home/assets/train.png');
const tourIcon = require('@modules/home/assets/tour.png');
const doctorIcon = require('@modules/home/assets/doctor.png');
const bloodDonationIcon = require('@modules/home/assets/blood_donation.png');
const hospitalIcon = require('@modules/home/assets/hospital.png');
const ambulanceIcon = require('@modules/home/assets/ambulance.png');
const marriageMediaIcon = require('@modules/home/assets/marriage_media.png');
const socialBoardIcon = require('@modules/home/assets/social_board.png');
const tuitionMediaIcon = require('@modules/home/assets/tuition_media.png');
const privateMessageIcon = require('@modules/home/assets/private_message.png');

// Note: per your earlier request, the modal should use the logo icon for items.
export const getHomeSeeAllConfigs = (): HomeSeeAllConfig[] => [
  {
    id: 'finance',
    title: 'Finance',
    items: [
      { id: 'finance-topup', label: 'Top Up' },
      { id: 'finance-transfer', label: 'Transfer' },
      { id: 'finance-request', label: 'Request' },
      { id: 'finance-history', label: 'History' },
      { id: 'finance-bill', label: 'Bill' },
      { id: 'finance-fees', label: 'Fees' },
      { id: 'finance-wallet', label: 'Wallet' },
      { id: 'finance-pay', label: 'Pay' },
    ],
  },
  {
    id: 'travel',
    title: 'Tours & Travel',
    items: [
      { id: 'travel-flight', label: 'Flight' },
      { id: 'travel-car', label: 'Car' },
      { id: 'travel-train', label: 'Train' },
      { id: 'travel-tour', label: 'Tour' },
      { id: 'travel-hotel', label: 'Hotel' },
      { id: 'travel-bus', label: 'Bus' },
      { id: 'travel-visa', label: 'Visa' },
      { id: 'travel-insurance', label: 'Insurance' },
    ],
  },
  {
    id: 'health',
    title: 'Health',
    items: [
      { id: 'health-doctor', label: 'Doctor' },
      { id: 'health-blood', label: 'Blood Donation' },
      { id: 'health-hospital', label: 'Hospital' },
      { id: 'health-ambulance', label: 'Ambulance' },
      { id: 'health-pharmacy', label: 'Pharmacy' },
      { id: 'health-tests', label: 'Tests' },
      { id: 'health-appointment', label: 'Appointment' },
      { id: 'health-emergency', label: 'Emergency' },
    ],
  },
  {
    id: 'socials',
    title: 'Socials',
    items: [
      { id: 'socials-marriage', label: 'Marriage Media' },
      { id: 'socials-board', label: 'Social Board' },
      { id: 'socials-tuition', label: 'Tuition Media' },
      { id: 'socials-message', label: 'Private Message' },
      { id: 'socials-community', label: 'Community' },
      { id: 'socials-events', label: 'Events' },
      { id: 'socials-groups', label: 'Groups' },
      { id: 'socials-support', label: 'Support' },
    ],
  },
];

// Category sections shown on the Home screen.
// We keep them "API-shaped": ids + labels + icon sources.
export const getHomeCategorySections = (): HomeCategorySection[] => [
  {
    id: 'finance',
    title: 'Finance',
    items: [
      { id: 'finance-bill-pay', label: 'Bill Pay', iconSource: billPayIcon },
      { id: 'finance-fees-pay', label: 'Fees Pay', iconSource: feesPayIcon },
      { id: 'finance-aamago-pay', label: 'Aamago Pay', iconSource: logoIcon },
      { id: 'finance-topup', label: 'Top-Up', iconSource: topUpIcon },
    ],
  },
  {
    id: 'travel',
    title: 'Tours & Travel',
    items: [
      { id: 'travel-flight', label: 'Flight', iconSource: flightIcon },
      { id: 'travel-car', label: 'Car', iconSource: carIcon },
      { id: 'travel-train', label: 'Train', iconSource: trainIcon },
      { id: 'travel-tour', label: 'Tour', iconSource: tourIcon },
    ],
  },
  {
    id: 'health',
    title: 'Health',
    items: [
      { id: 'health-doctor', label: 'Doctor', iconSource: doctorIcon },
      { id: 'health-blood', label: 'Blood Donation', iconSource: bloodDonationIcon },
      { id: 'health-hospital', label: 'Hospital', iconSource: hospitalIcon },
      { id: 'health-ambulance', label: 'Ambulance', iconSource: ambulanceIcon },
    ],
  },
  {
    id: 'socials',
    title: 'Socials',
    items: [
      { id: 'socials-marriage', label: 'Marriage Media', iconSource: marriageMediaIcon },
      { id: 'socials-board', label: 'Social Board', iconSource: socialBoardIcon },
      { id: 'socials-tuition', label: 'Tuition Media', iconSource: tuitionMediaIcon },
      { id: 'socials-message', label: 'Private Message', iconSource: privateMessageIcon },
    ],
  },
];

// Placeholder initial data for the Home module.
// This mirrors the structure used in the digital and ecommerce modules.

export const getInitialHomeWelcomeMessage = () =>
  'Welcome to the Home section';


