import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';

const BackArrowIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
    <Path
      d="M8.99858 14.2484L3.74939 8.99919L8.99858 3.75"
      stroke="#242424"
      strokeWidth={1.49977}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.2478 9H3.74939"
      stroke="#242424"
      strokeWidth={1.49977}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const InfoIconCircle = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_info_booking)">
      <Path
        d="M7.99472 14.6566C11.6742 14.6566 14.657 11.6738 14.657 7.9943C14.657 4.31483 11.6742 1.33203 7.99472 1.33203C4.31526 1.33203 1.33246 4.31483 1.33246 7.9943C1.33246 11.6738 4.31526 14.6566 7.99472 14.6566Z"
        stroke="#242424"
        strokeWidth={1.33245}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99472 10.659V7.99414"
        stroke="#242424"
        strokeWidth={1.33245}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99472 5.33008H8.00138"
        stroke="#242424"
        strokeWidth={1.33245}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_info_booking">
        <Rect width={15.9894} height={15.9894} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

interface BookingConfirmationHeaderProps {
  title: string;
  onBack: () => void;
  onInfo: () => void;
}

export default function BookingConfirmationHeader({ title, onBack, onInfo }: BookingConfirmationHeaderProps) {
  return (
    <View className="bg-white border-b border-[#f3f4f7] h-[65px] px-4">
      <View className="flex-1 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={onBack}
          className="w-[30px] h-[30px] items-center justify-center rounded-full bg-white/80"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 1,
          }}
        >
          <BackArrowIcon />
        </TouchableOpacity>
        <Text className="text-[17px] font-semibold text-[#242424]">{title}</Text>
        <TouchableOpacity onPress={onInfo} className="w-10 h-10 items-center justify-center">
          <InfoIconCircle />
        </TouchableOpacity>
      </View>
    </View>
  );
}
