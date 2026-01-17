import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DigitalStackParamList } from '@src/navigation/types';
import { HomeScreen, Messages, Chat, CompletedProject, Projects, PostJob, BecomeServiceProvider, Profile } from '../screens';

const Stack = createNativeStackNavigator<DigitalStackParamList>();

export default function DigitalNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="CompletedProject" component={CompletedProject} />
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="PostJob" component={PostJob} />
      <Stack.Screen name="BecomeServiceProvider" component={BecomeServiceProvider} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

