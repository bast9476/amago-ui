import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

export interface ProjectCardProps {
    title: string;
    clientName: string;
    clientAvatar?: ImageSourcePropType;
    clientInitial?: string;
    status: string;
    statusColor?: string;
    statusBg?: string;
    progress: number;
    paid: string;
    budget: string;
    dueDate: string;
    index?: number;
}

export function ProjectCard({
    title,
    clientName,
    clientAvatar,
    clientInitial,
    status,
    statusColor = '#1447e6',
    statusBg = 'bg-blue-100',
    progress,
    paid,
    budget,
    dueDate,
    index = 0,
}: ProjectCardProps) {
    const gradientId = `progressGradient-${index}`;

    return (
        <View className="flex-col self-stretch rounded-[15.16px] bg-white border border-black/10 px-5 py-10  mb-5">
            {/* Header: Title, Client, Status */}
            <View className="flex-row justify-between items-start mb-5">
                <View className="flex-1 mr-3">
                    <Text className="text-[16px] font-medium text-[#242424] mb-2" numberOfLines={2}>
                        {title}
                    </Text>
                    <View className="flex-row items-center">
                        {clientAvatar ? (
                            <Image
                                source={clientAvatar}
                                className="w-[28px] h-[28px] rounded-full mr-2"
                            />
                        ) : (
                            <View className="w-[28px] h-[28px] rounded-full bg-[#ececf0] items-center justify-center mr-2">
                                <Text className="text-[17px] text-[#242424]">
                                    {clientInitial || clientName.charAt(0).toUpperCase()}
                                </Text>
                            </View>
                        )}
                        <Text className="text-[16px] font-medium text-[#242424] opacity-60">
                            {clientName}
                        </Text>
                    </View>
                </View>
                <View className={`px-2 py-1 rounded-[9.48px] ${statusBg}`}>
                    <Text className="text-[14px] font-medium" style={{ color: statusColor }}>
                        {status}
                    </Text>
                </View>
            </View>

            {/* Progress Section */}
            <View className="mb-6">
                <View className="flex-row justify-between items-center mb-2">
                    <Text className="text-[14px] font-medium text-[#717182]">Progress</Text>
                    <Text className="text-[16px] font-medium text-[#242424]">{progress}%</Text>
                </View>
                <View className="h-[10px] rounded-full bg-[#030213]/20 overflow-hidden">
                    <View className="h-full rounded-full overflow-hidden" style={{ width: `${progress}%` }}>
                        <Svg width="100%" height="100%" viewBox="0 0 100 8" preserveAspectRatio="none">
                            <Defs>
                                <LinearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                                    <Stop offset="0.5795" stopColor="#07B556" />
                                    <Stop offset="1.2421" stopColor="#36D97F" />
                                </LinearGradient>
                            </Defs>
                            <Rect width="100" height="8" rx="4" fill={`url(#${gradientId})`} />
                        </Svg>
                    </View>
                </View>
            </View>

            {/* Footer: Paid, Budget, Due */}
            <View className="flex-row justify-between items-center pt-4 border-t border-black/10">
                <View className="flex-col">
                    <Text className="text-[14px] opacity-60 text-[#242424]">Paid</Text>
                    <Text className="text-[16px] font-medium text-[#242424]">{paid}</Text>
                </View>
                <View className="flex-col">
                    <Text className="text-[14px] opacity-60 text-[#242424]">Budget</Text>
                    <Text className="text-[16px] font-medium text-[#242424]">{budget}</Text>
                </View>
                <View className="flex-col">
                    <Text className="text-[14px] opacity-60 text-[#242424]">Due</Text>
                    <Text className="text-[16px] font-medium text-[#242424]">{dueDate}</Text>
                </View>
            </View>
        </View>
    );
}

