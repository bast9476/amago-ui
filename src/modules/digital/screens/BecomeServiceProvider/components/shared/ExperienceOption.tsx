import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const RadioIndicator = ({ selected }: { selected?: boolean }) => (
    <View
        className={`w-[18px] h-[18px] rounded-full border ${selected ? 'border-[#00A551] bg-[#00A551]/10' : 'border-[#242424]/40'}`}
    >
        {selected && <View className="flex-1 m-[2px] rounded-full bg-[#00A551]" />}
    </View>
)

export type ExperienceOptionProps = {
    index: number,
    title: string
    description: string
    selected: boolean
    onPress: () => void
}

export function ExperienceOption({ index, title, description, selected, onPress }: ExperienceOptionProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={onPress}
            className={`${index === 0 ? '' : 'mt-3'} flex-row items-start rounded-2xl border px-4 py-4 space-x-3 ${selected ? 'border-[#00A551] bg-[#E6F6EE]' : 'border-[#F3F4F7]'
                }`}
        >
            <RadioIndicator selected={selected} />
            <View className="flex-1 space-y-1">
                <Text className="text-base leading-[18px] font-semibold text-[#242424]">{title}</Text>
                <Text className="text-base text-[#242424] opacity-60">{description}</Text>
            </View>
        </TouchableOpacity>
    )
}

