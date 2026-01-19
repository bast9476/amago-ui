import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaymentStackParamList } from '@src/navigation/types';
import { MerchantScreen } from '../screens';

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
    </Stack.Navigator>
  );
}
