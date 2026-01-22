import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaymentStackParamList } from '@src/navigation/types';
import { MerchantScreen, PaymentDetailsScreen, PaymentReviewScreen } from '../screens';

const Stack = createNativeStackNavigator<PaymentStackParamList>();

export default function PaymentNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Merchant"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Merchant" component={MerchantScreen} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetailsScreen} />
      <Stack.Screen name="PaymentReview" component={PaymentReviewScreen} />
    </Stack.Navigator>
  );
}
