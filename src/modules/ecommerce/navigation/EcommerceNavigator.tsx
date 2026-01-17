import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EcommerceStackParamList } from '@src/navigation/types';
import { HomeScreen, MyCartScreen, ProductDetailScreen } from '../screens';

const Stack = createNativeStackNavigator<EcommerceStackParamList>();

export default function EcommerceNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MyCart" component={MyCartScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      {/* Add more screens here as you create them:
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Orders" component={OrdersScreen} />
      */}
    </Stack.Navigator>
  );
}

