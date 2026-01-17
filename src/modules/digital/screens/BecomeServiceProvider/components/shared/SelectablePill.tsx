import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export type SelectablePillProps = {
    label: string
    highlighted?: boolean
    onPress?: () => void
}

export function SelectablePill({ label, highlighted, onPress }: SelectablePillProps) {
    const baseLabel = label.replace(/^\+\s*/, '')
    const displayLabel = highlighted ? baseLabel : `+ ${baseLabel}`

    return (
        <View className="mr-3 mb-3">
            <TouchableOpacity
                activeOpacity={0.85}
                onPress={onPress}
                className={`px-4 h-10 rounded-lg justify-center ${highlighted ? 'bg-[#07B556]' : 'bg-[#F3F4F7]'
                    }`}
            >
                <Text
                    className={`text-base text-center ${highlighted ? 'text-white font-medium' : 'text-[#242424] opacity-70'
                        }`}
                >
                    {displayLabel}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

