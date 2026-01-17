import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { cardShadow } from '../../components/cardShadow';

type Props = { tasks: string[] };

const CheckIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="m13.325 4-7.33 7.33L2.666 8"
      stroke="white"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PlatinumIcon = () => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
  >
    <Path
      d="M29.1665 11.667H5.83321C5.0278 11.667 4.37488 12.3199 4.37488 13.1253V16.042C4.37488 16.8474 5.0278 17.5003 5.83321 17.5003H29.1665C29.972 17.5003 30.6249 16.8474 30.6249 16.042V13.1253C30.6249 12.3199 29.972 11.667 29.1665 11.667Z"
      stroke="#00A551"
      strokeWidth="2.91667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.5 11.667V30.6253"
      stroke="#00A551"
      strokeWidth="2.91667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M27.7084 17.5V27.7083C27.7084 28.4819 27.4011 29.2237 26.8541 29.7707C26.3072 30.3177 25.5653 30.625 24.7917 30.625H10.2084C9.43487 30.625 8.693 30.3177 8.14602 29.7707C7.59904 29.2237 7.29175 28.4819 7.29175 27.7083V17.5"
      stroke="#00A551"
      strokeWidth="2.91667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.9376 11.6673C9.97065 11.6673 9.04331 11.2832 8.35959 10.5995C7.67586 9.91574 7.29175 8.98841 7.29175 8.02147C7.29175 7.05454 7.67586 6.1272 8.35959 5.44348C9.04331 4.75975 9.97065 4.37564 10.9376 4.37564C12.3444 4.35113 13.723 5.03372 14.8937 6.33441C16.0643 7.6351 16.9726 9.49352 17.5001 11.6673C18.0276 9.49352 18.9359 7.6351 20.1065 6.33441C21.2771 5.03372 22.6557 4.35113 24.0626 4.37564C25.0295 4.37564 25.9568 4.75975 26.6406 5.44348C27.3243 6.1272 27.7084 7.05454 27.7084 8.02147C27.7084 8.98841 27.3243 9.91574 26.6406 10.5995C25.9568 11.2832 25.0295 11.6673 24.0626 11.6673"
      stroke="#00A551"
      strokeWidth="2.91667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default function TasksList({ tasks }: Props) {
  return (
    <View>
      <View className="flex-row items-center justify-between mb-4 mt-[50px]">
        <Text className="text-[20px] font-semibold text-left text-[#242424]">
          Progress to Platinum Introducer
        </Text>
        <View className="w-[35px] h-[35px]">
          <PlatinumIcon />
        </View>
      </View>
      <View className="gap-3">
        {tasks.map((t) => (
          <View
            key={t}
            className="flex-row items-center px-4 py-[20px] h-[66px] rounded-[14px] bg-emerald-50 border border-[#a4f4cf]"
            style={cardShadow}
          >
            <View className="w-[32px] h-[32px] rounded-full bg-[#00a551] items-center justify-center mr-3">
              <CheckIcon />
            </View>
            <Text className="text-[16px] font-medium text-[#007a55] flex-1">{t}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
