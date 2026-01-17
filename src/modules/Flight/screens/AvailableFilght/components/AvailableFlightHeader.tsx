import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

export default function AvailableFlightHeader() {
  const navigation = useNavigation();

  return (
    <View className="w-full bg-white border-b border-[#f3f4f7]">
      <View className="h-[58px] flex-row items-center justify-between px-4">
        {/* Left: Back button and title */}
        <View className="flex-row items-center gap-4 flex-1">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="w-[30px] h-[30px] items-center justify-center rounded-full bg-white/80"
          >
            <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
              <Path
                d="M8.97469 14.2106L3.7395 8.97543L8.97469 3.74023"
                stroke="#242424"
                strokeWidth={1.49577}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M14.2099 8.97461H3.7395"
                stroke="#242424"
                strokeWidth={1.49577}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
          <Text className="text-base text-center font-semibold text-[#242424]">Available Flights</Text>
        </View>

        {/* Right: Action icons */}
        <View className="flex-row items-center gap-1">
          <TouchableOpacity className="w-[36px] h-[36px] items-center justify-center rounded-lg">
            <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
              <Path
                d="M8.90186 4.45117V8.90215L11.8692 10.3858"
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
          <TouchableOpacity className="w-[36px] h-[36px] items-center justify-center rounded-lg">
            <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
              <Path
                d="M7.61719 15.5801C7.74741 15.8056 7.9347 15.9929 8.16024 16.1231C8.38578 16.2533 8.64161 16.3218 8.90204 16.3218C9.16246 16.3218 9.4183 16.2533 9.64383 16.1231C9.86937 15.9929 10.0567 15.8056 10.1869 15.5801"
                stroke="#242424"
                strokeWidth={1.48366}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M2.41989 11.37C2.32298 11.4762 2.25903 11.6083 2.23581 11.7502C2.21259 11.8921 2.23111 12.0377 2.28911 12.1692C2.34711 12.3008 2.4421 12.4127 2.56251 12.4912C2.68293 12.5698 2.82358 12.6117 2.96736 12.6118H14.8366C14.9804 12.6119 15.1211 12.5701 15.2416 12.4917C15.3621 12.4133 15.4572 12.3015 15.5153 12.1701C15.5735 12.0386 15.5922 11.893 15.5691 11.7511C15.5461 11.6092 15.4823 11.4771 15.3856 11.3707C14.3989 10.3537 13.353 9.27284 13.353 5.93535C13.353 4.75488 12.884 3.62275 12.0493 2.78804C11.2146 1.95332 10.0825 1.48438 8.90199 1.48438C7.72152 1.48438 6.5894 1.95332 5.75468 2.78804C4.91996 3.62275 4.45102 4.75488 4.45102 5.93535C4.45102 9.27284 3.4043 10.3537 2.41989 11.37Z"
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