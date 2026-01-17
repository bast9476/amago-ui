import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg'

const GradientButton: React.FC<{ label: string; onPress?: () => void }> = ({ label, onPress }) => (
    <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        className="h-[50px] rounded-xl overflow-hidden"
        style={{ minWidth: 130 }}
    >
        <Svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <Defs>
                <LinearGradient id="continue-gradient" x1="0%" y1="100%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                    <Stop offset="0.5795" stopColor="#07B556" />
                    <Stop offset="1.2421" stopColor="#34D399" />
                </LinearGradient>
            </Defs>
            <Rect width="100" height="100" rx="12" fill="url(#continue-gradient)" />
        </Svg>
        <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold text-white">{label}</Text>
        </View>
    </TouchableOpacity>
)

export function ProgressFooter() {
    return (
        <View className="w-full h-[108px] bg-white border-t border-[#F3F4F7] px-4 justify-center">
            <View className="flex-row justify-between items-center">
                <View className="flex-col justify-center items-start h-12">
                    <Text className="text-base font-semibold text-left text-gray-900">65% Complete</Text>
                    <Text className="text-sm text-left text-gray-600">Next: Verification</Text>
                </View>
                <GradientButton label="Continue" />
            </View>
        </View>
    )
}

