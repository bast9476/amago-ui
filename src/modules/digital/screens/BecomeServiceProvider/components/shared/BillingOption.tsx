import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg'

export const SquareCheckIcon = ({ stroke = '#007C3D' }: { stroke?: string }) => (
    <Svg width={14} height={12} viewBox="0 0 14 12" fill="none">
        <G clipPath="url(#clip0_square_check)">
            <Path
                d="M1.50977 7.1321L4.90267 10.4571L12.1974 2.14453"
                stroke={stroke}
                strokeWidth="2.37503"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_square_check">
                <Rect width="13.9079" height="11.9211" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

export type BillingOptionProps = {
    index: number,
    label: string
    selected: boolean
    onPress: () => void
}

export function BillingOption({ index, label, selected, onPress }: BillingOptionProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            className={`${index === 0 ? '' : 'mt-3'} flex-row items-center px-3.5 py-3.5 rounded-xl ${selected
                ? 'bg-green-50 border-2 border-[#00A551]'
                : 'bg-transparent border border-[#F3F4F7]'
                }`}
        >
            <View className="w-[15px] h-[15px] mr-3">
                {selected ? (
                    <View className="w-[15px] h-[15px] rounded-sm bg-[#00A551] items-center justify-center">
                        <SquareCheckIcon />
                    </View>
                ) : (
                    <View className="w-[15px] h-[15px] rounded-sm bg-white border-[0.5px] border-[#242424]" />
                )}
            </View>
            <Text className="text-lg font-medium text-[#242424]">{label}</Text>
        </TouchableOpacity>
    )
}

