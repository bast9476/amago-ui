import React from 'react'
import { View, Text } from 'react-native'

type StatsCardProps = {
    label: string
    value: string | number
    isFirst?: boolean
}

export const StatsCard: React.FC<StatsCardProps> = ({ label, value, isFirst }) => {
    return (
        <View className={`flex-1 rounded-[13px] bg-white border border-black/10 px-5 py-5 ${!isFirst ? 'ml-3' : ''}`}>
            <Text className="opacity-60 text-[15px] text-left text-[#242424]">{label}</Text>
            <Text className="mt-3 text-3xl font-semibold text-left text-[#242424]">{value}</Text>
        </View>
    )
}


