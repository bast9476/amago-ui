import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const CheckIcon = ({ stroke = '#FFFFFF' }: { stroke?: string }) => (
    <Svg width={12} height={9} viewBox="0 0 12 9" fill="none">
        <Path d="M1 4.5L4 7.5L11 1.5" stroke={stroke} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
)

type RoleCheckboxProps = {
    label: string
    selected?: boolean
    onPress: () => void
}

const RoleCheckbox = ({ label, selected, onPress }: RoleCheckboxProps) => (
    <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.85}
        className="flex-row items-center space-x-2"
    >
        <View
            className={`w-4 h-4 rounded-[3px] border ${selected ? 'bg-[#00A551]/90 border-[#00A551]' : 'bg-white border-[#242424]/50'
                } items-center justify-center`}
        >
            {selected && <CheckIcon />}
        </View>
        <Text className="text-base text-[#242424] opacity-70">{label}</Text>
    </TouchableOpacity>
)

export type PrimaryRoleOptionProps = {
    index: number
    label: string
    selected?: boolean
    onPress: () => void
}

export function PrimaryRoleOption({ index, label, selected, onPress }: PrimaryRoleOptionProps) {
    return (
        <View className={`w-1/2 px-2 ${index === 0 || index === 1 ? '' : 'mt-2'}`}>
            <RoleCheckbox label={label} selected={selected} onPress={onPress} />
        </View>
    )
}

