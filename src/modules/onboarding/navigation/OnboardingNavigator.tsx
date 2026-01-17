import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '@src/navigation/types';
import { FirstOnboardingScreen, SecondOnboardingScreen, ThridOnboardingScreen } from '../screens';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="FirstOnboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FirstOnboarding" component={FirstOnboardingScreen} />
      <Stack.Screen name="SecondOnboarding" component={SecondOnboardingScreen} />
      <Stack.Screen name="ThridOnboarding" component={ThridOnboardingScreen} />
    </Stack.Navigator>
  );
}

