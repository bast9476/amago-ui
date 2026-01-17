import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

interface Step {
    title: string;
    description: string;
}

export interface HowItWorksCardProps {
    audience: string;
    secondaryAudience: string;
    steps: Step[];
    cardIndex?: number;
}

export default function HowItWorksCard({
    audience,
    secondaryAudience,
    steps,
    cardIndex = 0,
}: HowItWorksCardProps) {
    return (
        <View
            className="rounded-2xl bg-white border border-neutral-200 px-5 py-6 shadow shadow-black/5"
        // style={{ shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, elevation: 2 }}
        >
            <Text className="text-base font-semibold text-neutral-900">How it works</Text>

            {/* Audience toggle */}
            <View className="mt-4">
                <View className="flex-row bg-neutral-100 rounded-[14px] p-1">
                    <View className="flex-1 h-9">
                        <View className="flex-1 bg-white rounded-[10px] items-center justify-center">
                            <Text className="text-sm font-medium text-[#242424]">{audience}</Text>
                        </View>
                    </View>
                    <View className="flex-1 h-9">
                        <View className="flex-1 rounded-[10px] items-center justify-center">
                            <Text className="text-sm text-[#242424] opacity-70">{secondaryAudience}</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Steps */}
            <View className="mt-6 gap-4">
                {steps.map((step, idx) => {
                    const gradientId = `howItWorksCircle_${cardIndex}_${idx}`;
                    return (
                        <View key={`${step.title}_${idx}`} className="flex-row items-start gap-4">
                            <View className="w-8 h-8 rounded-full items-center justify-center overflow-hidden">
                                {/* <Svg width={32} height={32} viewBox="0 0 32 32" style={{ position: 'absolute', top: 0, left: 0 }}> */}
                                <Svg width={32} height={32} viewBox="0 0 32 32" className="absolute left-0 top-0">
                                    <Defs>
                                        <LinearGradient id={gradientId} x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
                                            <Stop offset="0.58" stopColor="#07b556" />
                                            <Stop offset="1" stopColor="#36d97f" />
                                        </LinearGradient>
                                    </Defs>
                                    <Rect width={32} height={32} rx={16} fill={`url(#${gradientId})`} />
                                </Svg>
                                <Text className="text-base text-white font-medium  z-[1]">{idx + 1}</Text>
                            </View>
                            <View className="flex-1 gap-1">
                                <Text className="text-base font-medium text-neutral-900" numberOfLines={1}>{step.title}</Text>
                                <Text className="text-sm text-[#242424] opacity-60">{step.description}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}
