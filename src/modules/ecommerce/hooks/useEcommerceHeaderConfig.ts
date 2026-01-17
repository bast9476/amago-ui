import { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EcommerceStackParamList } from '@src/navigation/types';
import type { MainHeaderProps, SearchBehavior } from '@modules/common/components/MainHeader';

export function useEcommerceHeaderConfig(): MainHeaderProps {
  const navigation = useNavigation<NativeStackNavigationProp<EcommerceStackParamList>>();
  const [searchValue, setSearchValue] = useState('');

  const searchBehavior: SearchBehavior = useMemo(
    () => ({
      getValue: () => searchValue,
      onChangeText: (text: string) => {
        setSearchValue(text);
      },
      onSubmit: (text: string) => {
        console.log('Search submitted:', text);
        // TODO: Implement search functionality
      },
    }),
    [searchValue]
  );

  return useMemo(
    () => ({
      title: 'Ecommerce',
      rightIcon: {
        type: 'cart',
        badge: 5, // TODO: Get from Redux/cart state
        onPress: () => {
          navigation.navigate('MyCart');
        },
      },
      searchConfig: {
        placeholder: 'Search products...',
        icons: [], // No icons inside search bar
        filterButton: {
          onPress: () => {
            console.log('Filter pressed');
            // TODO: Open filter modal/screen
          },
        },
        behavior: searchBehavior,
      },
    }),
    [searchBehavior]
  );
}

