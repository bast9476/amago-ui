import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { UserLevelStackParamList } from '@src/navigation/types';
import GamifiedUserLevelSystem from '../screens/GamifiedUserLevelSystem/GamifiedUserLevelSystem';
import LevelProgress from '../screens/GamifiedUserLevelSystem/LevelProgress/LevelProgress';

const Stack = createNativeStackNavigator<UserLevelStackParamList>();

export default function UserLevelNavigator() {
  return (
    <Stack.Navigator initialRouteName="GamifiedUserLevelSystem" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GamifiedUserLevelSystem" component={GamifiedUserLevelSystem} />
      <Stack.Screen name="LevelProgress" component={LevelProgress} />
    </Stack.Navigator>
  );
}
