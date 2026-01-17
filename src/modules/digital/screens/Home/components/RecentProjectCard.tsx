import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

export interface RecentProjectCardProps {
  title: string;
  company: string;
  budget: string;
  progress: number; // 0-100
  dueDate: string;
  iconLetter: string;
  index?: number; // For unique gradient IDs
}

export default function RecentProjectCard({
  title,
  company,
  budget,
  progress,
  dueDate,
  iconLetter,
  index = 0,
}: RecentProjectCardProps) {
  return (
    <View
      className="rounded-2xl bg-white border border-neutral-100 p-4 shadow shadow-black/10"
    >
      {/* Header: Icon and Title */}
      <View className="flex-row items-start mb-4">
        {/* Icon with gradient */}
        <View className="w-12 h-12 rounded-[10px] items-center justify-center mr-3 overflow-hidden">
          {/* <Svg width={40} height={40} viewBox="0 0 40 40" style={{ position: 'absolute', top: 0, left: 0 }}> */}
          <Svg width={50} height={50} viewBox="0 0 40 40" className="absolute left-0 top-0">
            <Defs>
              <LinearGradient id={`projectIconGradient_${index}`} x1="0" y1="40" x2="40" y2="0" gradientUnits="userSpaceOnUse">
                <Stop offset="0.5795" stopColor="#07b556" />
                <Stop offset="1.2421" stopColor="#36d97f" />
              </LinearGradient>
            </Defs>
            <Rect width={40} height={40} rx={10} fill={`url(#projectIconGradient_${index})`} />
          </Svg>
          <Text className="text-[17px] text-white font-medium z-[1]">{iconLetter}</Text>
        </View>
        {/* Title and Company */}
        <View className="flex-1 gap-0.5">
          <Text className="text-[19px] font-semibold text-black" numberOfLines={1}>
            {title}
          </Text>
          <Text className="text-[16px] opacity-60 text-[#242424]" numberOfLines={1}>
            {company}
          </Text>
        </View>
      </View>
      {/* Budget and Progress */}
      <View className="gap-2">
        {/* Budget and Percentage */}
        <View className="flex-row justify-between items-center">
          <Text className="text-[16px] font-medium text-neutral-600">Budget: {budget}</Text>
          <Text className="text-[16px] font-medium text-[#00a63e]">{progress}%</Text>
        </View>
        {/* Progress Bar */}
        <View className="h-3 rounded-full bg-[#030213]/20 overflow-hidden">
          <View className="h-full rounded-full overflow-hidden" style={{ width: `${progress}%` }}>
            <Svg height="100%" width="100%" viewBox="0 0 100 8" preserveAspectRatio="none">
              <Defs>
                <LinearGradient id={`progressGradient_${index}`} x1="0" y1="8" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                  <Stop offset="0.5795" stopColor="#07b556" />
                  <Stop offset="1.2421" stopColor="#36d97f" />
                </LinearGradient>
              </Defs>
              <Rect width="100" height="8" rx={4} fill={`url(#progressGradient_${index})`} />
            </Svg>
          </View>
        </View>
        {/* Due Date */}
        <View className="flex-row items-center gap-2">
          <Svg width={18} height={18} viewBox="0 0 16 16" fill="none">
            <Path
              d="M5.32983 1.33203V3.99694"
              stroke="#737373"
              strokeWidth={1.33245}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M10.6596 1.33203V3.99694"
              stroke="#737373"
              strokeWidth={1.33245}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M12.6583 2.66406H3.33111C2.59522 2.66406 1.99866 3.26062 1.99866 3.99652V13.3237C1.99866 14.0596 2.59522 14.6561 3.33111 14.6561H12.6583C13.3942 14.6561 13.9907 14.0596 13.9907 13.3237V3.99652C13.9907 3.26062 13.3942 2.66406 12.6583 2.66406Z"
              stroke="#737373"
              strokeWidth={1.33245}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M1.99866 6.66406H13.9907"
              stroke="#737373"
              strokeWidth={1.33245}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <Text className="text-[16px] text-neutral-500">Due {dueDate}</Text>
        </View>
      </View>
    </View>
  );
}

