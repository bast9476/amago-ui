import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg'

const RehireBanner = () => {
    return (
        <View className="px-5 mt-8">
            <View className="w-full rounded-2xl border border-[#A4F4CF] overflow-hidden">
                <View className="relative">
                    <Svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 374 200" preserveAspectRatio="none">
                        <Defs>
                            <LinearGradient id="rehire-gradient" x1="0" y1="200" x2="374" y2="0">
                                <Stop offset="0.5795" stopColor="#07B556" />
                                <Stop offset="1.2421" stopColor="#36D97F" />
                            </LinearGradient>
                        </Defs>
                        <Rect width="374" height="200" fill="url(#rehire-gradient)" />
                    </Svg>

                    <View className="px-5 py-8 space-y-4">
                        <Text className="text-white text-[20px] font-semibold">Work with Sarah again?</Text>
                        <Text className="text-white opacity-90 text-[16px] leading-[24px] mb-2">
                            Sarah delivered excellent work. Hire her again for your next project.
                        </Text>
                        <TouchableOpacity
                            activeOpacity={0.85}
                            className="w-full rounded-[10px] bg-white border border-[#007C3D] py-[10px]"
                        >
                            <View className="flex-row justify-center items-center space-x-2">
                                <Svg width={20} height={20} viewBox="0 0 16 16" fill="none">
                                    <Path
                                        d="M13.9909 7.99604C13.9909 6.40579 13.3591 4.88067 12.2347 3.7562C11.1102 2.63172 9.58507 2 7.99482 2C6.31856 2.00631 4.70963 2.66038 3.50445 3.82546L1.99878 5.33113"
                                        stroke="#00A551"
                                        strokeWidth={1.33245}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M1.99878 2V5.33113H5.32991"
                                        stroke="#00A551"
                                        strokeWidth={1.33245}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M1.99878 7.99609C1.99878 9.58634 2.6305 11.1115 3.75498 12.2359C4.87945 13.3604 6.40457 13.9921 7.99482 13.9921C9.67108 13.9858 11.28 13.3318 12.4852 12.1667L13.9909 10.661"
                                        stroke="#00A551"
                                        strokeWidth={1.33245}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M10.6597 10.6602H13.9908V13.9913"
                                        stroke="#00A551"
                                        strokeWidth={1.33245}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                                <Text className="text-[#00A551] text-[16px] font-medium">Hire Sarah Again</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RehireBanner

