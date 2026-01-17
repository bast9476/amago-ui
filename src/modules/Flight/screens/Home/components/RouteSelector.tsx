import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

export default function RouteSelector() {
  const { width } = Dimensions.get('window');
  const containerWidth = width - 32; // Account for px-4 (16px * 2)
  const buttonSize = 44;
  const leftPosition = (containerWidth - buttonSize) / 2;

  return (
    <View className="w-full px-4 mb-[27px]">
      <Text className="text-[18px] font-semibold text-[#242424] mb-[20px]">Route</Text>
      <View className="relative" style={{ minHeight: 178 }}>
        <TouchableOpacity className="w-full h-[70px] rounded-xl bg-white border border-black/10 mb-3 flex-row items-center px-4">
          <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
            <Path
              d="M18.4976 19.9536L16.6271 11.4322L20.2643 7.79504C21.823 6.23625 22.3426 4.15787 21.823 3.11868C20.7839 2.59908 18.7055 3.11868 17.1467 4.67747L13.5095 8.31464L4.98813 6.44409C4.46853 6.34017 4.05286 6.54801 3.84502 6.96369L3.53326 7.48328C3.32542 8.00288 3.42934 8.52248 3.84502 8.83424L9.35274 12.4714L7.27435 15.589H4.15678L3.11758 16.6282L6.23516 18.7066L8.31355 21.8241L9.35274 20.7849V17.6674L12.4703 15.589L16.1075 21.0967C16.4192 21.5124 16.9388 21.6163 17.4584 21.4085L17.978 21.2006C18.3937 20.8889 18.6016 20.4732 18.4976 19.9536Z"
              stroke="#878787"
              strokeWidth={2.07838}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <View className="ml-3">
            <Text className="text-xs text-[#878787]">From</Text>
            <Text className="text-[17px] font-medium text-[#242424]">Dhaka, Bangladesh</Text>
          </View>
        </TouchableOpacity>

        <View
          className="absolute"
          style={{
            left: leftPosition,
            top: 78 - buttonSize / 2,
            zIndex: 10,
          }}
        >
          <TouchableOpacity
            className="w-[48px] h-[48px] items-center justify-center rounded-full"
            style={{
              borderWidth: 1.39,
              borderColor: 'rgba(7, 181, 86, 0.1)',
            }}
          >
            <View className="w-full h-full items-center justify-center rounded-full overflow-hidden">
              <Svg width={48} height={48} viewBox="0 0 44 44" className="absolute inset-0">
                <Defs>
                  <LinearGradient id="swapGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <Stop offset="57.95%" stopColor="#07B556" />
                    <Stop offset="124.21%" stopColor="#36D97F" />
                  </LinearGradient>
                </Defs>
                <Rect width="48" height="48" rx={24} fill="url(#swapGrad)" />
              </Svg>
              <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
                <Path
                  d="M15.5727 11.8652L12.6065 14.8315L9.64026 11.8652"
                  stroke="white"
                  strokeWidth={1.48312}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M12.6065 14.8317V2.9668"
                  stroke="white"
                  strokeWidth={1.48312}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M2.22467 5.93303L5.1909 2.9668L8.15714 5.93303"
                  stroke="white"
                  strokeWidth={1.48312}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M5.19092 2.9668V14.8317"
                  stroke="white"
                  strokeWidth={1.48312}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="w-full h-[70px] rounded-xl bg-white border border-black/10 flex-row items-center px-4 mt-3">
          <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
            <Path
              d="M18.4976 19.9536L16.6271 11.4322L20.2643 7.79504C21.823 6.23625 22.3426 4.15787 21.823 3.11868C20.7839 2.59908 18.7055 3.11868 17.1467 4.67747L13.5095 8.31464L4.98813 6.44409C4.46853 6.34017 4.05286 6.54801 3.84502 6.96369L3.53326 7.48328C3.32542 8.00288 3.42934 8.52248 3.84502 8.83424L9.35274 12.4714L7.27435 15.589H4.15678L3.11758 16.6282L6.23516 18.7066L8.31355 21.8241L9.35274 20.7849V17.6674L12.4703 15.589L16.1075 21.0967C16.4192 21.5124 16.9388 21.6163 17.4584 21.4085L17.978 21.2006C18.3937 20.8889 18.6016 20.4732 18.4976 19.9536Z"
              stroke="#878787"
              strokeWidth={2.07838}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <View className="ml-3">
            <Text className="text-[14px] text-[#878787]">To</Text>
            <Text className="text-[17px] font-medium text-[#242424]">Chittagong, Bangladesh</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
