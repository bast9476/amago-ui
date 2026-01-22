import { ImageSourcePropType } from 'react-native';

export interface Merchant {
  id: string;
  name: string;
  logo: ImageSourcePropType;
}

export interface PaymentMethod {
  id: string;
  name: string;
  logo: ImageSourcePropType;
  fee?: string;
  cashback?: string;
}
