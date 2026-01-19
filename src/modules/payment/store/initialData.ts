import { ImageSourcePropType } from 'react-native';

import type { Merchant } from './types';

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
