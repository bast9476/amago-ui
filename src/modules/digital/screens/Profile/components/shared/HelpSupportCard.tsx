import React from 'react'
import { View, Text } from 'react-native'

const HELP_ITEMS = ['Help Center', 'Contact Support', 'Terms & Conditions', 'Privacy Policy']

export const HelpSupportCard = () => {
    return (
        <View className="mt-6 rounded-[13px] bg-white border border-black/10 px-4 pb-9 pt-3">
            <Text className="text-lg font-semibold text-[#242424]">Help &amp; Support</Text>

            <View className="mt-6 space-y-4">
                {HELP_ITEMS.map(item => (
                    <Text
                        key={item}
                        className="opacity-70 text-sm font-medium text-[#242424]"
                    >
                        {item}
                    </Text>
                ))}
            </View>
        </View>
    )
}


