import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg'

const SubmitReviewButton = () => (
    <View className="px-5 py-[21px] bg-white">
        <TouchableOpacity activeOpacity={0.85} className="rounded-[12px] overflow-hidden">
            <Svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 375 60" preserveAspectRatio="none">
                <Defs>
                    <LinearGradient id="submit-review-gradient" x1="0" y1="60" x2="375" y2="0">
                        <Stop offset="0.5795" stopColor="#07B556" />
                        <Stop offset="1.2421" stopColor="#36D97F" />
                    </LinearGradient>
                </Defs>
                <Rect width="375" height="60" fill="url(#submit-review-gradient)" rx="12" />
            </Svg>
            <Text className="text-center text-[16px] font-semibold text-white py-3">Submit Review &amp; Close</Text>
        </TouchableOpacity>
    </View>
)

export default SubmitReviewButton

