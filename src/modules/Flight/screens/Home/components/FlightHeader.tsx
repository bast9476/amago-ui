import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

export default function FlightHeader() {
  const navigation = useNavigation();

  return (
    <View className="w-full bg-white border-b border-[#f3f4f7]">
      <View className="h-[62px] flex-row items-center justify-between px-[15px]">
        {/* Left section: Back button and title */}
        <View className="flex-row items-center gap-4 flex-1">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="w-[30px] h-[30px] items-center justify-center rounded-full bg-white/80"
          >
            <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
              <Path
                d="M8.97462 14.2106L3.73943 8.97543L8.97462 3.74023"
                stroke="#242424"
                strokeWidth={1.49577}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M14.2098 8.97461H3.73943"
                stroke="#242424"
                strokeWidth={1.49577}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
          <Text className="text-[18px] font-semibold text-[#242424]">Search Flights</Text>
        </View>

        {/* Right section: Action icons */}
        <View className="flex-row items-center gap-1">
          <TouchableOpacity className="w-9 h-9 items-center justify-center rounded-lg">
            <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
              <Path
                d="M8.90195 4.45117V8.90215L11.8693 10.3858"
                stroke="#242424"
                strokeWidth={1.48366}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M8.90193 16.321C12.9989 16.321 16.3202 12.9997 16.3202 8.90267C16.3202 4.80566 12.9989 1.48438 8.90193 1.48438C4.80492 1.48438 1.48364 4.80566 1.48364 8.90267C1.48364 12.9997 4.80492 16.321 8.90193 16.321Z"
                stroke="#242424"
                strokeWidth={1.48366}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity className="w-9 h-9 items-center justify-center rounded-lg">
            <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
              <Path
                d="M7.61713 15.5801C7.74735 15.8056 7.93464 15.9929 8.16018 16.1231C8.38571 16.2533 8.64155 16.3218 8.90197 16.3218C9.1624 16.3218 9.41823 16.2533 9.64377 16.1231C9.86931 15.9929 10.0566 15.8056 10.1868 15.5801"
                stroke="#242424"
                strokeWidth={1.48366}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M2.41983 11.37C2.32292 11.4762 2.25897 11.6083 2.23575 11.7502C2.21253 11.8921 2.23105 12.0377 2.28905 12.1692C2.34705 12.3008 2.44204 12.4127 2.56245 12.4912C2.68287 12.5698 2.82352 12.6117 2.9673 12.6118H14.8366C14.9803 12.6119 15.121 12.5701 15.2415 12.4917C15.362 12.4133 15.4571 12.3015 15.5153 12.1701C15.5734 12.0386 15.5921 11.893 15.5691 11.7511C15.546 11.6092 15.4823 11.4771 15.3855 11.3707C14.3989 10.3537 13.3529 9.27284 13.3529 5.93535C13.3529 4.75488 12.884 3.62275 12.0492 2.78804C11.2145 1.95332 10.0824 1.48438 8.90193 1.48438C7.72146 1.48438 6.58934 1.95332 5.75462 2.78804C4.9199 3.62275 4.45096 4.75488 4.45096 5.93535C4.45096 9.27284 3.40424 10.3537 2.41983 11.37Z"
                stroke="#242424"
                strokeWidth={1.48366}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
