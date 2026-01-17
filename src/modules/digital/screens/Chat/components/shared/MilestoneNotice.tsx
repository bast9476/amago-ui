import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useCrossModuleNavigation } from '@modules/common/hooks/useCrossModuleNavigation';

export interface MilestoneNoticeProps {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    onPrimaryPress?: () => void | undefined;
    onSecondaryPress?: () => void;
}

export function MilestoneNotice({
    title,
    description,
    primaryCta,
    secondaryCta,
    onPrimaryPress,
    onSecondaryPress,
}: MilestoneNoticeProps) {  

    return (
        <View className="mt-6 rounded-2xl border border-[#A4F4CF] bg-[#E6FFF3] pl-4 pr-8 py-5">
            <View className="flex-row items-start space-x-3">
                <View className="w-6 h-6 rounded-full items-center justify-center">
                    <Svg className='w-[100%] h-[100%]' viewBox="0 0 20 20" fill="none">
                        <Path
                            d="M10 18.125c4.487 0 8.125-3.638 8.125-8.125S14.487 1.875 10 1.875 1.875 5.513 1.875 10 5.513 18.125 10 18.125Z"
                            stroke="#009966"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <Path
                            d="M6.875 9.9375 8.75 11.8125 13.125 7.5"
                            stroke="#009966"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </Svg>
                </View>

                <View className="flex-1">
                    <Text className="text-[16.5px] font-[500] text-[#242424]">{title}</Text>
                    <Text className="mt-2 text-[14px] font-[400] text-[#242424] opacity-70 leading-5">{description}</Text>

                    <View className="mt-2 flex-row justify-between">
                        <TouchableOpacity
                            activeOpacity={0.85}
                            onPress={onSecondaryPress}
                            className="h-[32px] rounded-xl border border-black/10 bg-white items-center justify-center px-3"
                        >
                            <Text className="text-xs font-medium text-[#242424]">{secondaryCta}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.85}
                            onPress={onPrimaryPress}
                            className="h-[32px] rounded-xl bg-[#009966] items-center justify-center px-3"
                        >
                            <Text className="text-xs font-medium text-white">{primaryCta}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

