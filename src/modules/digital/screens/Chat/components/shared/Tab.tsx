import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import type { ChatTabConfig } from '../../tabs';

interface TabProps {
    tab: ChatTabConfig;
    isActive: boolean;
    onPress: () => void;
}

export const Tab: React.FC<TabProps> = ({ tab, isActive, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={onPress}
            className="relative flex-row items-center rounded-[12px] px-4 py-0.5 overflow-hidden"
            style={{
                minHeight: 35,
            }}
        >
            <View
                pointerEvents="none"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: isActive ? 1 : 0,
                }}
            >
                <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <Defs>
                        <LinearGradient
                            id={`activeTabGradient-${tab.id}`}
                            x1="0%"
                            y1="100%"
                            x2="100%"
                            y2="0%"
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop offset="0.5795" stopColor="#07B556" />
                            <Stop offset="1.2421" stopColor="#36D97F" />
                        </LinearGradient>
                    </Defs>
                    <Rect width="100" height="100" fill={`url(#activeTabGradient-${tab.id})`} />
                </Svg>
            </View>
            <View className="relative flex-row items-center space-x-3 z-10">
                <Text className={`text-[17px] font-[400] ${isActive ? 'text-white' : 'text-[#242424]'}`}>
                    {tab.label}
                </Text>
                {tab.hasBadge && tab.badgeCount && (
                    <View className="absolute -top-[8px] -right-[18px] rounded-full px-2 py-0.5">
                        <Text className={`text-[14px] font-medium ${isActive ? 'text-black' : 'text-[#00a551]'}`}>
                            {tab.badgeCount}
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

