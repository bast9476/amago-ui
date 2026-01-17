import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { FlightStackParamList } from '@src/navigation/types';
import {
  selectAvailableFilterButtons,
  selectSearchParameters,
} from '@modules/Flight/store';

type NavigationProp = NativeStackNavigationProp<FlightStackParamList>;

interface SearchDetailsBarProps {
  onEditRoute?: () => void;
  onEditDate?: () => void;
  onEditTravelers?: () => void;
}

export default function SearchDetailsBar({
  onEditRoute,
  onEditDate,
  onEditTravelers,
}: SearchDetailsBarProps) {
  const navigation = useNavigation<NavigationProp>();
  const filterButtons = useAppSelector(selectAvailableFilterButtons);
  const searchParameters = useAppSelector(selectSearchParameters);

  // Get data from Redux store with fallbacks
  const route = searchParameters.route || 'DAC → CGP';
  const date = searchParameters.date || 'Thu, Oct 9';
  const travelers = searchParameters.travelers || '1 traveler, Economy';

  // Handle edit actions - navigate to Home screen to edit
  const handleEditRoute = () => {
    if (onEditRoute) {
      onEditRoute();
    } else {
      navigation.navigate('Home');
    }
  };

  const handleEditDate = () => {
    if (onEditDate) {
      onEditDate();
    } else {
      navigation.navigate('Home');
    }
  };

  const handleEditTravelers = () => {
    if (onEditTravelers) {
      onEditTravelers();
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View className="w-full bg-white border-b border-[#f3f4f7]">
      {/* Main container with responsive padding */}
      <View className="px-4 pt-4 pb-3">
        {/* Search parameters row - responsive horizontal scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 6,
            paddingBottom: 14,
            paddingRight: 4,
            marginBottom: 10,
          }}
        >
          {/* Route button - flexible width based on content */}
          <TouchableOpacity
            onPress={handleEditRoute}
            className="px-3 py-[7px] rounded-full bg-white border border-[#d1d5dc] flex-row items-center"
            style={{ gap: 3 }}
          >
            <Text className="text-[15px] text-[#242424]" numberOfLines={1}>
              {route}
            </Text>
            <Svg width={15} height={15} viewBox="0 0 13 13" fill="none">
              <Path
                d="M3.24463 4.86719L6.48924 8.1118L9.73385 4.86719"
                stroke="#999999"
                strokeWidth={1.08154}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>

          {/* Date button - flexible width based on content */}
          <TouchableOpacity
            onPress={handleEditDate}
            className="px-3.5 py-[7px] rounded-full bg-white border border-[#d1d5dc] flex-row items-center"
            style={{ gap: 5 }}
          >
            <Svg width={13} height={13} viewBox="0 0 13 13" fill="none">
              <G clipPath="url(#clip0_11_6147)">
                <Path
                  d="M4.32617 1.08203V3.2451"
                  stroke="#6C6C6C"
                  strokeWidth={1.08154}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M8.65234 1.08203V3.2451"
                  stroke="#6C6C6C"
                  strokeWidth={1.08154}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M10.2746 2.16406H2.70385C2.10653 2.16406 1.62231 2.64828 1.62231 3.2456V10.8164C1.62231 11.4137 2.10653 11.8979 2.70385 11.8979H10.2746C10.8719 11.8979 11.3561 11.4137 11.3561 10.8164V3.2456C11.3561 2.64828 10.8719 2.16406 10.2746 2.16406Z"
                  stroke="#6C6C6C"
                  strokeWidth={1.08154}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M1.62231 5.4082H11.3561"
                  stroke="#6C6C6C"
                  strokeWidth={1.08154}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_11_6147">
                  <Rect width={12.9784} height={12.9784} fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
            <Text className="text-[15px] text-[#242424]" numberOfLines={1}>
              {date}
            </Text>
            <Svg width={13} height={13} viewBox="0 0 13 13" fill="none">
              <Path
                d="M3.24463 4.86719L6.48924 8.1118L9.73385 4.86719"
                stroke="#999999"
                strokeWidth={1.08154}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>

          {/* Travelers button - flexible width based on content */}
          <TouchableOpacity
            onPress={handleEditTravelers}
            className="px-3.5 py-[7px] rounded-full bg-white border border-[#d1d5dc] flex-row items-center"
            style={{ gap: 5 }}
          >
            <Svg width={13} height={13} viewBox="0 0 13 13" fill="none">
              <G clipPath="url(#clip0_11_6157)">
                <Path
                  d="M8.6523 11.3559V10.2744C8.6523 9.70072 8.4244 9.15053 8.01875 8.74488C7.61309 8.33922 7.06291 8.11133 6.48923 8.11133H3.24462C2.67093 8.11133 2.12075 8.33922 1.71509 8.74488C1.30944 9.15053 1.08154 9.70072 1.08154 10.2744V11.3559"
                  stroke="#999999"
                  strokeWidth={1.08154}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M8.65234 1.69141C9.11619 1.81166 9.52698 2.08252 9.82023 2.46149C10.1135 2.84046 10.2726 3.30608 10.2726 3.78526C10.2726 4.26444 10.1135 4.73006 9.82023 5.10903C9.52698 5.488 9.11619 5.75886 8.65234 5.87912"
                  stroke="#999999"
                  strokeWidth={1.08154}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M11.897 11.356V10.2744C11.8966 9.79515 11.7371 9.32957 11.4435 8.95078C11.1498 8.572 10.7387 8.30146 10.2747 8.18164"
                  stroke="#999999"
                  strokeWidth={1.08154}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M4.86693 5.94919C6.06156 5.94919 7.03 4.98075 7.03 3.78612C7.03 2.59149 6.06156 1.62305 4.86693 1.62305C3.6723 1.62305 2.70386 2.59149 2.70386 3.78612C2.70386 4.98075 3.6723 5.94919 4.86693 5.94919Z"
                  stroke="#999999"
                  strokeWidth={1.08154}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_11_6157">
                  <Rect width={12.9784} height={12.9784} fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
            <Text className="text-[15px] text-[#242424] flex-shrink" numberOfLines={1}>
              {travelers}
            </Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Filter buttons row - responsive horizontal scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
            paddingRight: 4,
          }}
        >
          {filterButtons.map((filter) => (
            <TouchableOpacity
              key={filter}
              className="px-2 py-1 rounded-full bg-white border border-[#d1d5dc]"
            >
              <Text className="text-[11.5px] text-center text-[#575757]">
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
