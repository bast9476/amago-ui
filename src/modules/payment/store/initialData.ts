import { ImageSourcePropType } from 'react-native';

import type { Merchant, PaymentMethod } from './types';

const logoBiman = require('../assets/bitman.png');
const logoSopno = require('../assets/sopno.png');
const logoKfc = require('../assets/kfc.png');

export const recentMerchants: Merchant[] = [
  { id: 'biman', name: 'Biman', logo: logoBiman },
  { id: 'sopno', name: 'Sopno', logo: logoSopno },
  { id: 'kfc', name: 'KFC', logo: logoKfc },
];

export const favoriteMerchants: Merchant[] = [{ id: 'fav-sopno', name: 'Sopno', logo: logoSopno }];

export const merchantLogos: Record<string, ImageSourcePropType> = {
  biman: logoBiman,
  sopno: logoSopno,
  kfc: logoKfc,
  'fav-sopno': logoSopno,
};

// Payment method logos
const logoAmago = require('../assets/aamago.png');
const logoBkash = require('../assets/bkash.png');
const logoNagad = require('../assets/red.png');
const logoCard = require('../assets/Container.png');
const logoCash = require('../assets/cash.png');
const logoRocket = require('../assets/rocket.png');
const logoBank = require('../assets/bank.png');

export const paymentMethods: PaymentMethod[] = [
  { id: 'amago', name: 'Amago', logo: logoAmago, fee: '−1% fee' },
  { id: 'bkash', name: 'bKash', logo: logoBkash },
  { id: 'nagad', name: 'Nagad', logo: logoNagad },
  { id: 'Cash', name: 'Cash', logo: logoCash, cashback: '+2% cashback' },
  { id: 'card', name: 'Card', logo: logoCard },
  { id: 'bank', name: 'Bank', logo: logoBank },
  { id: 'rocket', name: 'Rocket', logo: logoRocket },
];
