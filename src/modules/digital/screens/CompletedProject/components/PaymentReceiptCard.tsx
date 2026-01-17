import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const milestones = [
    { label: 'Milestone 1', amount: '৳8,000' },
    { label: 'Milestone 2', amount: '৳12,000' },
    { label: 'Milestone 3', amount: '৳5,000' },
]

const PaymentReceiptCard = () => (
    <View className="px-5 mt-8">
        <View className="rounded-2xl bg-white border border-black/10 px-5 py-6">
            <Text className="text-[#242424] text-[18px] font-semibold">Payment Receipt</Text>
            <View className="mt-9 mb-2 space-y-3">
                {milestones.map((item) => (
                    <View key={item.label} className="flex-row justify-between">
                        <Text className="text-[16px] text-[#242424]/60">{item.label}</Text>
                        <Text className="text-[17px] font-medium text-[#242424]">{item.amount}</Text>
                    </View>
                ))}
            </View>
            <View className="h-px bg-black/10" />
            <View className="mt-3 flex-row justify-between items-center">
                <Text className="text-[16px] font-medium text-[#242424]">Total Released</Text>
                <Text className="text-[18px] font-medium text-[#242424]">৳25,000</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.85}
                className="h-9 rounded-[10px] border border-black/10 mt-8 flex-row items-center justify-center"
            >
                <Text className="text-[17px] font-medium text-[#242424]">Download Invoice</Text>
            </TouchableOpacity>
        </View>
    </View>
)

export default PaymentReceiptCard

