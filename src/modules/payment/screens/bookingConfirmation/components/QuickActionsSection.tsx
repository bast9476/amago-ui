import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';

const DocumentIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_doc)">
      <Path
        d="M9.99341 1.33203H3.99737C3.64398 1.33203 3.30507 1.47241 3.05518 1.7223C2.8053 1.97218 2.66492 2.3111 2.66492 2.66448V13.3241C2.66492 13.6775 2.8053 14.0164 3.05518 14.2663C3.30507 14.5162 3.64398 14.6566 3.99737 14.6566H11.9921C12.3455 14.6566 12.6844 14.5162 12.9343 14.2663C13.1842 14.0164 13.3245 13.6775 13.3245 13.3241V4.66316L9.99341 1.33203Z"
        stroke="#242424"
        strokeWidth={1.33245}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.32715 1.33203V3.99694C9.32715 4.35033 9.46753 4.68924 9.71742 4.93912C9.9673 5.18901 10.3062 5.32939 10.6596 5.32939H13.3245"
        stroke="#242424"
        strokeWidth={1.33245}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M6.66229 5.99609H5.32983" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M10.6596 8.66016H5.32983" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M10.6596 11.3262H5.32983" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
    </G>
    <Defs>
      <ClipPath id="clip0_doc">
        <Rect width={15.9894} height={15.9894} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const WarningIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_warn)">
      <Path
        d="M7.99466 14.6566C11.6741 14.6566 14.6569 11.6738 14.6569 7.9943C14.6569 4.31483 11.6741 1.33203 7.99466 1.33203C4.3152 1.33203 1.3324 4.31483 1.3324 7.9943C1.3324 11.6738 4.3152 14.6566 7.99466 14.6566Z"
        stroke="#E7000B"
        strokeWidth={1.33245}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M7.99475 5.33008V7.99498" stroke="#E7000B" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M7.99475 10.6602H8.00141" stroke="#E7000B" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
    </G>
    <Defs>
      <ClipPath id="clip0_warn">
        <Rect width={15.9894} height={15.9894} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

interface QuickActionsSectionProps {
  onCategorize: () => void;
  onReportIssue: () => void;
}

export default function QuickActionsSection({ onCategorize, onReportIssue }: QuickActionsSectionProps) {
  return (
    <View className="w-full gap-3 mt-1">
      <TouchableOpacity
        onPress={onCategorize}
        className="w-full h-[80px] rounded-[14px] bg-white border border-black/10 flex-row items-center px-4"
        activeOpacity={0.8}
      >
        <DocumentIcon />
        <View className="ml-4">
          <Text className="text-[17px] font-medium text-[#242424]">Categorize this payment</Text>
          <Text className="text-[15px] text-[#7c7c7c]">Help track your spending</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onReportIssue}
        className="w-full h-[80px] rounded-[14px] bg-white border border-[#ffc9c9] flex-row items-center px-4"
        activeOpacity={0.8}
      >
        <WarningIcon />
        <View className="ml-4">
          <Text className="text-[17px] font-medium text-[#e7000b]">Report an issue</Text>
          <Text className="text-[15px] text-[#7c7c7c]">Something wrong with this transaction?</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
