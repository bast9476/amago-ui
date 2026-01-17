import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg'

// Internal DistanceButton component (not exported)
type DistanceButtonProps = {
    label: string
    highlighted: boolean
    onPress?: () => void
}

const DistanceButton = ({ label, highlighted, onPress }: DistanceButtonProps) => {
    const gradientId = `distanceGradient-${label.replace(/\s+/g, '')}`

    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={onPress}
            className={`w-[58px] h-8 rounded-lg justify-center items-center overflow-hidden relative ${!highlighted ? 'bg-[#F3F4F7]' : ''}`}
            style={{ flexShrink: 0 }}
        >
            {highlighted && (
                <Svg className="absolute top-0 left-0 right-0 bottom-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <Defs>
                        <LinearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                            <Stop offset="57.95%" stopColor="#07B556" />
                            <Stop offset="124.21%" stopColor="#36D97F" />
                        </LinearGradient>
                    </Defs>
                    <Rect width="100" height="100" rx="8" fill={`url(#${gradientId})`} />
                </Svg>
            )}
            <Text
                className={`text-base relative z-10 text-center ${highlighted ? 'text-white font-medium' : 'text-[#242424] opacity-80'
                    }`}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

// RadioIndicator component (internal)
const RadioIndicator = ({ selected }: { selected?: boolean }) => (
    <View
        className={`w-[18px] h-[18px] rounded-full border ${selected ? 'border-[#00A551] bg-[#00A551]/10' : 'border-[#242424]/40'}`}
    >
        {selected && <View className="flex-1 m-[2px] rounded-full bg-[#00A551]" />}
    </View>
)

// Exported WorkModeOption component
export type WorkModeOptionProps = {
    index: number,
    label: string
    selected: boolean
    onPress: () => void
    distances?: Array<{ label: string; highlighted: boolean }>
    onToggleDistance?: (label: string) => void
}

export function WorkModeOption({ index, label, selected, onPress, distances, onToggleDistance }: WorkModeOptionProps) {
    if (distances && onToggleDistance) {
        return (
            <View className={`${index === 0 ? '' : 'mt-4'} rounded-2xl border px-4 py-4 space-y-1 ${selected ? 'border-[#00A551] bg-[#E6F6EE]' : 'border-[#F3F4F7] bg-white'}`}>
                <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={onPress}
                    className="flex-row items-center space-x-3 mb-3"
                >
                    <RadioIndicator selected={selected} />
                    <Text className="text-lg font-medium text-[#242424]">{label}</Text>
                </TouchableOpacity>
                <View className="flex-row flex-wrap ml-6 -mr-3 -mb-3">
                    {distances.map((dist) => (
                        <View key={dist.label} className="mr-3 mb-3">
                            <DistanceButton
                                label={dist.label}
                                highlighted={dist.highlighted}
                                onPress={() => onToggleDistance(dist.label)}
                            />
                        </View>
                    ))}
                </View>
            </View>
        )
    }

    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={onPress}
            className={`flex-row items-center space-x-3 rounded-lg border px-4 py-3 ${selected ? 'border-[#00A551] bg-[#E6F6EE]' : 'border-[#F3F4F7] bg-white'}`}
        >
            <RadioIndicator selected={selected} />
            <Text className="text-lg font-medium text-[#242424]">{label}</Text>
        </TouchableOpacity>
    )
}

