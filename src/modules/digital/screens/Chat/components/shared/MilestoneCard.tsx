import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type MilestoneStatus = 'completed' | 'inProgress' | 'pending';

export interface MilestoneCardProps {
    title: string;
    amount: string;
    dueDate: string;
    status: MilestoneStatus;
    accentColor: string;
    onPress?: () => void;
    onPressMore?: () => void;
}

const STATUS_STYLES: Record<MilestoneStatus, { label: string; text: string; background: string }> = {
    completed: {
        label: 'Completed',
        text: '#00A551',
        background: 'rgba(7, 181, 86, 0.15)',
    },
    inProgress: {
        label: 'In Progress',
        text: '#2B7FFF',
        background: 'rgba(43, 127, 255, 0.12)',
    },
    pending: {
        label: 'Pending',
        text: '#99A1AF',
        background: 'rgba(153, 161, 175, 0.12)',
    },
};

export function MilestoneCard({
    title,
    amount,
    dueDate,
    status,
    accentColor,
    onPress,
    onPressMore,
}: MilestoneCardProps) {
    const statusStyles = STATUS_STYLES[status];

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            className="flex-row items-start bg-[#F1F3F7] border border-black/10 rounded-2xl px-4 py-[18px] mb-[10px]"
            onPress={onPress}
        >
            <View className="w-6 h-6 rounded-full items-center justify-center mr-3">
                <StatusIcon status={status} stroke={accentColor} />
            </View>

            <View className="flex-1">
                <Text className="text-[16.5px] font-[500] text-[#242424] leading-[20px]" numberOfLines={2}>
                    {title}
                </Text>
                <View className="flex-row items-center mt-[5px] space-x-4">
                    <Text className="text-[14px] text-[#717182] font-[400]">{amount}</Text>
                    <Text className="text-[14px] text-[#717182] font-[400]">Due: {dueDate}</Text>
                </View>
                <View
                    className="mt-3 px-4 py-1 rounded-full self-start"
                    style={{
                        backgroundColor: statusStyles.background,
                    }}
                >
                    <Text className="text-[13px] font-[400]" style={{ color: statusStyles.text }}>
                        {statusStyles.label}
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                accessibilityRole="button"
                className="w-8 h-8 items-center justify-center ml-2"
                activeOpacity={0.8}
                onPress={onPressMore}
            >
                <MoreIcon />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

function StatusIcon({ status, stroke }: { status: MilestoneStatus; stroke: string }) {
    if (status === 'completed') {
        return (
            <Svg className='w-[100%] h-[100%]' viewBox="0 0 20 20" fill="none">
                <Path
                    d="M10 18.125c4.487 0 8.125-3.638 8.125-8.125S14.487 1.875 10 1.875 1.875 5.513 1.875 10 5.513 18.125 10 18.125Z"
                    stroke={stroke}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="m6.875 10 2.1875 2.1875L13.125 8.125"
                    stroke={stroke}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        );
    }

    if (status === 'inProgress') {
        return (
            <Svg className='w-[100%] h-[100%]' viewBox="0 0 20 20" fill="none">
                <Path
                    d="M10 3.125v6.25l3.125 1.875"
                    stroke={stroke}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M10 18.125c4.487 0 8.125-3.638 8.125-8.125S14.487 1.875 10 1.875 1.875 5.513 1.875 10 5.513 18.125 10 18.125Z"
                    stroke={stroke}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        );
    }

    return (
        <Svg className='w-[100%] h-[100%]' viewBox="0 0 20 20" fill="none">
            <Path
                d="M10 18.125c4.487 0 8.125-3.638 8.125-8.125S14.487 1.875 10 1.875 1.875 5.513 1.875 10 5.513 18.125 10 18.125Z"
                stroke={stroke}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

function MoreIcon() {
    return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
            <Path
                d="M8 3.5a.937.937 0 1 1 0-1.875A.937.937 0 0 1 8 3.5Zm0 10.875a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875ZM8 8.75a.937.937 0 1 1 0-1.875A.937.937 0 0 1 8 8.75Z"
                stroke="#242424"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

