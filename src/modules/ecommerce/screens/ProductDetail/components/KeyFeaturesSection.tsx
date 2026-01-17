import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { ReactElement } from 'react';

export interface KeyFeature {
  icon: ReactElement;
  text: string;
}

export interface KeyFeaturesSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
  features: KeyFeature[];
}

export function KeyFeaturesSection({
  isExpanded,
  onToggle,
  features,
}: KeyFeaturesSectionProps) {
  const rotateAnim = useRef(new Animated.Value(isExpanded ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isExpanded ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isExpanded]);

  const chevronRotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View className="flex-col items-start w-full overflow-hidden rounded-[14px] bg-gray-50 border-[1.22px] border-[#f3f4f7] mt-4">
      {/* Header */}
      <TouchableOpacity
        onPress={onToggle}
        className="flex-row justify-between items-center self-stretch px-4 py-4"
        activeOpacity={0.7}
      >
        <View className="flex-row items-center gap-2.5">
          <Svg width={24} height={24} viewBox="0 0 20 20" fill="none">
            <Path
              d="M9.59782 1.91111C9.63432 1.83738 9.6907 1.77531 9.76059 1.73192C9.83049 1.68852 9.91113 1.66553 9.9934 1.66553C10.0757 1.66553 10.1563 1.68852 10.2262 1.73192C10.2961 1.77531 10.3525 1.83738 10.389 1.91111L12.3127 5.8077C12.4394 6.06417 12.6265 6.28606 12.8579 6.45432C13.0892 6.62258 13.3579 6.73219 13.641 6.77373L17.9431 7.40332C18.0247 7.41513 18.1012 7.44951 18.1642 7.50258C18.2272 7.55565 18.2741 7.62529 18.2996 7.70362C18.3251 7.78195 18.3281 7.86585 18.3084 7.94582C18.2887 8.02579 18.247 8.09865 18.188 8.15615L15.0767 11.1858C14.8715 11.3858 14.718 11.6326 14.6294 11.905C14.5407 12.1775 14.5196 12.4674 14.5679 12.7498L15.3024 17.0303C15.3168 17.1118 15.308 17.1956 15.277 17.2724C15.246 17.3491 15.1941 17.4155 15.1271 17.4642C15.0602 17.5128 14.9809 17.5416 14.8984 17.5474C14.8158 17.5531 14.7333 17.5355 14.6603 17.4966L10.8145 15.4747C10.5611 15.3416 10.2792 15.2721 9.99298 15.2721C9.70677 15.2721 9.42484 15.3416 9.17144 15.4747L5.32648 17.4966C5.25347 17.5353 5.17108 17.5527 5.08868 17.5468C5.00628 17.541 4.92718 17.5121 4.86037 17.4635C4.79356 17.4149 4.74173 17.3486 4.71077 17.272C4.67981 17.1954 4.67096 17.1117 4.68524 17.0303L5.41892 12.7506C5.46738 12.4681 5.44639 12.178 5.35774 11.9054C5.26909 11.6328 5.11546 11.3858 4.91009 11.1858L1.79881 8.15698C1.73934 8.09955 1.69721 8.02657 1.67719 7.94635C1.65718 7.86614 1.6601 7.78191 1.68562 7.70328C1.71114 7.62464 1.75823 7.55475 1.82153 7.50157C1.88483 7.44839 1.96179 7.41406 2.04365 7.40248L6.34497 6.77373C6.62833 6.73251 6.89743 6.62305 7.12911 6.45476C7.36079 6.28648 7.5481 6.06443 7.67493 5.8077L9.59782 1.91111Z"
              stroke="#737373"
              strokeWidth={1.66557}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <Text className="text-lg font-semibold text-left text-[#242424]">
            Key Features
          </Text>
        </View>
        <Animated.View
          style={{
            transform: [{ rotate: chevronRotation }],
          }}
        >
          <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <Path
              d="M4.9967 7.49512L9.9934 12.4918L14.9901 7.49512"
              stroke="#99A1AF"
              strokeWidth={1.66557}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Animated.View>
      </TouchableOpacity>
      {/* Content - Collapsible */}
      {isExpanded && (
        <View className="flex-col items-start self-stretch px-4 pb-4 space-y-1">
          {features.map((feature, index) => (
            <View key={index} className="flex-row items-center self-stretch gap-3">
              <View className="w-5 h-5 items-center justify-center">
                {feature.icon}
              </View>
              <Text className="flex-1 text-lg font-[5400] text-left text-[#919191]">
                {feature.text}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

