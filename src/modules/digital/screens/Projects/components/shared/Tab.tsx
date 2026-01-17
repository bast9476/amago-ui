import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import type { ProjectTabConfig } from '../../tabs';

interface TabProps {
    tab: ProjectTabConfig;
    isActive: boolean;
    onPress: () => void;
    index: number;
}

export const Tab: React.FC<TabProps> = ({ tab, isActive, onPress, index }) => {
    const gradientId = `${tab.id}TabGradient-${index}`;

    return (
        <TouchableOpacity
            onPress={onPress}
            className="h-[35px] rounded-[12px] overflow-hidden flex-shrink-0 relative flex-1 justify-center items-center"
            activeOpacity={0.8}
        >
            {isActive && (
                <Svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <Defs>
                        <LinearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.5795" stopColor="#07B556" />
                            <Stop offset="1.2421" stopColor="#36D97F" />
                        </LinearGradient>
                    </Defs>
                    <Rect width="100" height="100" rx="10" fill={`url(#${gradientId})`} />
                </Svg>
            )}
            <View className="relative flex-row items-center justify-center h-full z-10 px-2 py-1">
                <Text className={`text-[16px] font-[400] ${isActive ? 'text-white font-[500]' : 'text-[#242424]'}`}>
                    {tab.label}
                </Text>
                {tab.badge !== undefined && (
                    <View className={`absolute -right-[14px] top-[4px] h-[17px] min-w-[17px] rounded-[8px] items-center justify-center overflow-hidden ${isActive ? 'bg-[#003a1c]' : ''}`}>
                        {!isActive && (
                            <Svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <Defs>
                                    <LinearGradient id={`${tab.id}BadgeGradient-${index}`} x1="0%" y1="100%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                                        <Stop offset="0.5795" stopColor="#07B556" />
                                        <Stop offset="1.2421" stopColor="#36D97F" />
                                    </LinearGradient>
                                </Defs>
                                <Rect width="100" height="100" rx="8" fill={`url(#${tab.id}BadgeGradient-${index})`} />
                            </Svg>
                        )}
                        <Text className={`font-medium relative z-10 ${isActive ? 'text-[10px] text-white' : 'text-[12px] text-white'}`}>
                                {tab.badge}
                            </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

