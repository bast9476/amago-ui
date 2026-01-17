import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

export interface PostedProjectCardProps {
    title: string;
    status: string;
    budget: string;
    dueDate: string;
}

export function PostedProjectCard({
    title,
    status,
    budget,
    dueDate,
}: PostedProjectCardProps) {
    return (
        <View className="flex-col items-start self-stretch space-y-10 px-4 py-4 rounded-[15.16px] bg-white border-[1.16px] border-black/10 mb-4">
            {/* Header Section: Title, Status Badge, Proposals */}
            <View className="flex-row items-start justify-between self-stretch">
                <View className="flex-1 mr-2">
                    <Text className="text-[16.3px] font-medium text-left text-[#242424] mb-3" numberOfLines={2}>
                        {title}
                    </Text>
                    <View className="flex-row items-center gap-2.5">
                        <View className="px-2.5 py-1 rounded-[9.48px] bg-[#e6f6ee] border-[1.16px] border-[#b0e3c9]">
                            <Text className="text-[14px] font-medium text-left text-[#00a551]">
                                {status}
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="px-2.5 py-0.5 rounded-[9.48px] bg-[#f3f4f7] border-[1.16px] border-transparent">
                    <Text className="text-[11.5px] font-medium text-left text-[#242424]">
                        12 proposals
                    </Text>
                </View>
            </View>

            {/* Footer Section: Budget, Posted Date, View Proposals Button */}
            <View className="flex-row justify-between items-center self-stretch pt-2 border-t-[1.16px] border-black/10">
                <View className="flex-col items-start flex-1">
                    <Text className="opacity-60 text-[14px] font-medium text-left text-[#242424] mb-0.5">
                        Budget
                    </Text>
                    <Text className="text-[14px] text-left text-[#242424]" numberOfLines={1}>
                        {budget}
                    </Text>
                </View>
                <View className="flex-col items-start mx-2">
                    <Text className="opacity-60 text-[14px] font-medium text-left text-[#242424] mb-0.5">
                        Posted
                    </Text>
                    <Text className="text-[14px] text-left text-[#242424]">
                        {dueDate}
                    </Text>
                </View>
                <View className="px-3.5 py-[6px] rounded-[12px] ml-2 border-[1px] border-[#1FC36A] bg-white">
                    <Text className="text-[14px] font-medium text-center text-[#242424]">
                        View Proposals
                    </Text>
                </View>
            </View>
        </View>
    );
}

