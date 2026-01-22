import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import OnboardingNavigator from '@modules/onboarding/navigation/OnboardingNavigator';
import HomeNavigator from '@modules/home/navigation/HomeNavigator';
import EcommerceNavigator from '@modules/ecommerce/navigation/EcommerceNavigator';
import DigitalNavigator from '@modules/digital/navigation/DigitalNavigator';
import AccountNavigator from '@modules/Account/navigation/AccountNavigator';
import UserLevelNavigator from '@modules/UserLevel/navigation/UserLevelNavigator';
import FlightNavigator from '@modules/Flight/navigation/FlightNavigator';
import PaymentNavigator from '@modules/payment/navigation/PaymentNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Ecommerce"
                screenOptions={{
                    headerShown: false,
                }}
            >
                {/* Register each module as a section */}
                <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
                <Stack.Screen name="Home" component={HomeNavigator} />
                <Stack.Screen name="Ecommerce" component={EcommerceNavigator} />
                <Stack.Screen name="Digital" component={DigitalNavigator} />
                <Stack.Screen name="Account" component={AccountNavigator} />
                <Stack.Screen name="UserLevel" component={UserLevelNavigator} />
                <Stack.Screen name="Flight" component={FlightNavigator} />
                <Stack.Screen name="Payment" component={PaymentNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
