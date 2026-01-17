import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/types';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

/**
 * Hook to navigate between modules (cross-module navigation)
 * 
 * @example
 * const navigateToModule = useCrossModuleNavigation();
 * 
 * // Navigate to Travel module's FlightSearch screen
 * navigateToModule('Travel', 'FlightSearch');
 * 
 * // Navigate to Wallet module with params
 * navigateToModule('Wallet', 'TransactionDetail', { transactionId: '123' });
 */
export function useCrossModuleNavigation() {
  const navigation = useNavigation<CompositeNavigationProp<
    NativeStackNavigationProp<RootStackParamList>,
    NativeStackNavigationProp<any>
  >>();

  return (
    module: keyof RootStackParamList,
    screen: string,
    params?: any
  ) => {
    // @ts-ignore - React Navigation's nested navigation typing is complex
    // This works correctly at runtime
    navigation.navigate(module, { screen, params });
  };
}

