import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlightStackParamList } from '@src/navigation/types';
import { HomeScreen, AvailableFlightScreen, ReviewFlightScreen } from '../screens';

const Stack = createNativeStackNavigator<FlightStackParamList>();

export default function FlightNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AvailableFlight" component={AvailableFlightScreen} />
      <Stack.Screen name="ReviewFlight" component={ReviewFlightScreen} />
    </Stack.Navigator>
  );
}
