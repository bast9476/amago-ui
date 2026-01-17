import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

// Checkmark Icon Component with Gradient
const CheckmarkIcon = ({ id }: { id: string }) => (
    <Svg width={24} height={24} viewBox="0 0 19 19" fill="none">
        <Defs>
            <LinearGradient
                id={`paint0_linear_${id}`}
                x1="7.15766"
                y1="7.15766"
                x2="18.3167"
                y2="-4.00141"
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#07B556" />
                <Stop offset="1" stopColor="#36D97F" />
            </LinearGradient>
            <LinearGradient
                id={`paint1_linear_${id}`}
                x1="8.77542"
                y1="9.00653"
                x2="10.8356"
                y2="5.91633"
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#07B556" />
                <Stop offset="1" stopColor="#36D97F" />
            </LinearGradient>
        </Defs>
        <Path
            d="M9.46878 17.3594C13.8267 17.3594 17.3594 13.8267 17.3594 9.46878C17.3594 5.11089 13.8267 1.57812 9.46878 1.57812C5.11089 1.57812 1.57812 5.11089 1.57812 9.46878C1.57812 13.8267 5.11089 17.3594 9.46878 17.3594Z"
            stroke={`url(#paint0_linear_${id})`}
            strokeWidth="1.57813"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M7.10156 9.46876L8.67969 11.0469L11.836 7.89062"
            stroke={`url(#paint1_linear_${id})`}
            strokeWidth="1.57813"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export interface TaskItemProps {
    text: string;
    isCompleted: boolean;
    isActive?: boolean;
    checkmarkId?: string;
}

export function TaskItem({ text, isCompleted, isActive = false, checkmarkId = 'default' }: TaskItemProps) {
    return (
        <View className="flex-row items-center self-stretch h-14 pl-3 rounded-[15.16px] border-[1.16px] border-black/10 mb-2">
            <View className="flex-row items-center gap-[11px]">
                {isCompleted ? (
                    <View className="w-[22px] h-[22px]">
                        <CheckmarkIcon id={checkmarkId} />
                    </View>
                ) : (
                    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
                        <Path
                            d="M11 20.5C16.2467 20.5 20.5 16.2467 20.5 11C20.5 5.75329 16.2467 1.5 11 1.5C5.75329 1.5 1.5 5.75329 1.5 11C1.5 16.2467 5.75329 20.5 11 20.5Z"
                            stroke={isActive ? '#00a551' : '#d1d5dc'}
                            strokeWidth={1.5}
                        />
                    </Svg>
                )}
                <Text
                    className={`text-[18px] text-left ${
                        isCompleted ? 'text-[#717182] line-through' : 'text-[#0a0a0a]'
                    }`}
                >
                    {text}
                </Text>
            </View>
        </View>
    );
}

