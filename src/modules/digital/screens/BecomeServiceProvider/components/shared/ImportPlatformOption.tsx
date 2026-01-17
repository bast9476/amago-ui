import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export type ImportPlatformOptionProps = {
    label: string
    icon: React.ReactNode
    selected: boolean
    onPress: () => void
}

export function ImportPlatformOption({ label, icon, selected, onPress }: ImportPlatformOptionProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            className={`mr-3 mb-3 flex-row items-center justify-center px-4 py-3.5 rounded-xl border flex-1 ${selected ? 'border-[#00A551] bg-green-50' : 'border-gray-300 bg-transparent'
                }`}
            style={{ minWidth: 0, flexBasis: '48%', maxWidth: '48%' }}
        >
            <View className="w-[18px] h-5 mr-2">
                {icon}
            </View>
            <Text className="text-base text-center text-[#242424]">{label}</Text>
        </TouchableOpacity>
    )
}

