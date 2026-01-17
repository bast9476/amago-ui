import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AccountStackParamList } from '@src/navigation/types';
import { LoginScreen, ForgetScreen, ResetPasswordScreen, RegisterScreen, SuccessScreen } from '../screens';

const Stack = createNativeStackNavigator<AccountStackParamList>();

export default function AccountNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  );
}

