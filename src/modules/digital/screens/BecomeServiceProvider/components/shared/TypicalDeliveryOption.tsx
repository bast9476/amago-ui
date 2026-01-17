import React from 'react'
import { Text, TouchableOpacity, ViewStyle } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

const RadioSelectedIcon = () => (
    <Svg width={18} height={18} viewBox="0 0 16 16" fill="none">
        <Circle cx="8" cy="8" r="6.5" fill="#E6F6EE" stroke="#00A551" strokeWidth="1.02654" />
        <Circle cx="8" cy="8" r="4.5" fill="#00A551" />
    </Svg>
)

const RadioUnselectedIcon = () => (
    <Svg width={18} height={18} viewBox="0 0 16 16" fill="none">
        <Circle cx="8" cy="8" r="6.5" stroke="#242424" strokeWidth="0.5" fill="none" />
    </Svg>
)

export type TypicalDeliveryOptionProps = {
    label: string
    selected: boolean
    onPress: () => void
    style?: ViewStyle
}

export function TypicalDeliveryOption({ label, selected, onPress, style }: TypicalDeliveryOptionProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            className={`flex-row flex-1 items-center px-3 py-3 rounded-xl ${selected
                ? 'bg-green-50 border-2 border-[#00A551]'
                : 'bg-transparent border border-[#F3F4F7]'
                }`}
            style={[{ minWidth: 142 }, style]}
        >
            {selected ? <RadioSelectedIcon /> : <RadioUnselectedIcon />}
            <Text
                className={`ml-2 text-base ${selected ? 'font-medium text-[#242424]' : 'text-[#242424] opacity-70'
                    }`}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

