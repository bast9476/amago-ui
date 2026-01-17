import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AppDispatch } from '@src/store/index';
import { FlightStackParamList } from '@src/navigation/types';
import { selectSearchParameters, updateSearchParameters } from '@modules/Flight/store';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

type NavigationProp = NativeStackNavigationProp<FlightStackParamList>;

interface SearchBarProps {
  route?: string;
  date?: string;
  travelers?: string;
}

export default function SearchBar({ route, date, travelers }: SearchBarProps) {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSelector(selectSearchParameters);

  // Use props if provided, otherwise use Redux state, otherwise use defaults
  const displayRoute = route || searchParams.route || 'DAC → CGP';
  const displayDate = date || searchParams.date || 'Thu, Oct 9';
  const displayTravelers = travelers || searchParams.travelers || '1 traveler, Economy';

  const handleSearch = () => {
    // Update Redux store with search parameters
    dispatch(updateSearchParameters({
      route: displayRoute,
      date: displayDate,
      travelers: displayTravelers,
    }));
    navigation.navigate('AvailableFlight');
  };

  return (
    <View className="w-full bg-white border-t border-[#f3f4f7] px-[17px] py-[30px]">
      <View className="flex-row items-center justify-between">
        <Text className="flex-1 text-[14px] font-medium text-[#242424] mr-2" numberOfLines={2}>
          {displayRoute} • {displayDate} • {displayTravelers}
        </Text>
        <TouchableOpacity
          className="h-[32px] rounded-[7px] items-center justify-center relative w-[106px]"
          activeOpacity={0.8}
          onPress={handleSearch}
        >
          <Svg width={106} height="100%" className="absolute">
            <Defs>
              <LinearGradient id="searchGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <Stop offset="57.95%" stopColor="#07B556" />
                <Stop offset="124.21%" stopColor="#36D97F" />
              </LinearGradient>
            </Defs>
            <Rect width="100%" height="100%" rx={7.03} fill="url(#searchGrad)" />
          </Svg>
          <View className="flex-row items-center justify-center gap-[7px] px-[20px] py-[5px]">
            <Svg width={14} height={14} viewBox="0 0 15 15" fill="none">
              <Path
                d="M12.2981 12.2975L9.7565 9.75586"
                stroke="white"
                strokeWidth={1.17125}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M6.44186 11.1258C9.02931 11.1258 11.1268 9.0283 11.1268 6.44085C11.1268 3.8534 9.02931 1.75586 6.44186 1.75586C3.85441 1.75586 1.75687 3.8534 1.75687 6.44085C1.75687 9.0283 3.85441 11.1258 6.44186 11.1258Z"
                stroke="white"
                strokeWidth={1.17125}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text className="text-[12px] font-medium text-white">Search</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
