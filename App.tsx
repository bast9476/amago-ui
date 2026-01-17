import React, { useState, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { getStore } from '@src/store';
import AppNavigator from './src/navigation/AppNavigator';

enableScreens(true);

export default function App() {
    const [store, setStore] = useState<any>(null);

    // Create store after component mounts to ensure app is registered first
    useEffect(() => {
        try {
            const storeInstance = getStore();
            setStore(storeInstance);
        } catch (error) {
            console.error('Failed to create store:', error);
        }
    }, []);

    // Don't render until store is created
    if (!store) {
        return null;
    }

    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <SafeAreaProvider>
                    <StatusBar style="auto" />
                    <AppNavigator />
                </SafeAreaProvider>
            </GestureHandlerRootView>
        </Provider>
    );
}

