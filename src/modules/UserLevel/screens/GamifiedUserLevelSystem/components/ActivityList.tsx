import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, Path, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { cardShadow } from './cardShadow';

type Activity = { title: string; time: string; tint: string };

type Props = {
  activities: Activity[];
};

const icons = {
  green: (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M11 14v-1.33a3.34 3.34 0 0 0-.98-2.36A3.33 3.33 0 0 0 7.67 9H4.33A3.33 3.33 0 0 0 1 12.33V14"
        stroke="#00A551"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 2.09c.57.15 1.06.48 1.41.94.36.46.55 1.03.55 1.62 0 .59-.19 1.16-.55 1.62-.35.46-.84.79-1.41.94"
        stroke="#00A551"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 14v-1.33c0-.88-.35-1.72-.98-2.35A3.34 3.34 0 0 0 11 9.33"
        stroke="#00A551"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 7.33a2.67 2.67 0 1 0 0-5.33 2.67 2.67 0 0 0 0 5.33Z"
        stroke="#00A551"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  blue: (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M10.67 14V10.67c0-.18-.07-.35-.2-.47a.67.67 0 0 0-.47-.2H6c-.18 0-.35.07-.47.2a.67.67 0 0 0-.2.47V14"
        stroke="#155DFC"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.51 6.87a.67.67 0 0 0-.48-.2c-.18 0-.35.07-.48.2a1.75 1.75 0 0 1-2.47 0c-.13-.13-.3-.2-.47-.2-.18 0-.35.07-.48.2a1.75 1.75 0 0 1-2.47 0 .67.67 0 0 0-.48-.2.67.67 0 0 0-.48.2 2 2 0 0 1-1.35.52c-.37 0-.73-.13-1.02-.38A1.9 1.9 0 0 1 1.34 5.9c-.05-.41.08-.83.32-1.17L3.45 1.9c.13-.2.31-.36.53-.48.22-.12.47-.18.73-.18h6.66c.25 0 .5.06.72.18.22.12.4.28.53.48l2.1 2.84c.24.34.37.76.32 1.17a1.9 1.9 0 0 1-.64 1.31 2.01 2.01 0 0 1-1.02.38 2 2 0 0 1-1.35-.52Z"
        stroke="#155DFC"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.67 7.29v5.37c0 .35.14.69.39.94.25.25.59.39.94.39h7.99c.35 0 .69-.14.94-.39.25-.25.39-.59.39-.94V7.29"
        stroke="#155DFC"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  purple: (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path d="M8 6.66h.01M8 9.33h.01M8 4h.01" stroke="#9810FA" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M10.67 6.66h.01M10.67 9.33h.01M10.67 4h.01" stroke="#9810FA" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M5.33 6.66h.01M5.33 9.33h.01M5.33 4h.01" stroke="#9810FA" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M6 14.66v-2c0-.18.07-.35.2-.48.13-.13.3-.2.48-.2h2.66c.18 0 .35.07.48.2.13.13.2.3.2.48v2"
        stroke="#9810FA"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 1.33H4c-.74 0-1.33.6-1.33 1.34v10.66c0 .74.59 1.34 1.33 1.34h8c.74 0 1.33-.6 1.33-1.34V2.67c0-.74-.59-1.34-1.33-1.34Z"
        stroke="#9810FA"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
};

const iconForIndex = (index: number) => {
  if (index === 0) return icons.green;
  if (index === 1) return icons.blue;
  return icons.purple;
};

export default function ActivityList({ activities }: Props) {
  return (
    <View className="rounded-[14px] bg-white border border-[#eff4f1] p-6 mb-6" style={cardShadow}>
      <Text className="text-[19px] font-semibold text-[#242424] mb-4">Recent Activity</Text>
      <View className="space-y-3">
        {activities.map((item, idx) => (
          <View
            key={`${item.title}-${idx}`}
            className="flex-row items-center px-[15px] py-[15px] rounded-[10px]"
            style={{ backgroundColor: item.tint }}
          >
            <View className={`w-8 h-8 rounded-full items-center justify-center mr-3 ${idx === 0 ? 'bg-[#DCFCE7]' : idx === 1 ? 'bg-[#DBEAFE]' : 'bg-[#F3E8FF]'}`}>
              {iconForIndex(idx)}
            </View>
            <View className="flex-1">
              <Text className="text-[16px] font-medium text-[#242424]">{item.title}</Text>
              <Text className="text-[12px] text-[#818181] mt-0.5">{item.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}