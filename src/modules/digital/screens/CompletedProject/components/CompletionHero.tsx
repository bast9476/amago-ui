import React from 'react'
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Svg, { Path, Rect, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg'

type CompletionHeroProps = {
    onBackPress?: () => void
}

const CARD_RATIO = 374 / 287
const DESIGN_PADDING_TOP = 20

const CompletionHero: React.FC<CompletionHeroProps> = ({ onBackPress }) => {
    const insets = useSafeAreaInsets()
    const { width } = useWindowDimensions()
    const cardHeight = width / CARD_RATIO + insets.top - DESIGN_PADDING_TOP

    return (
        <View className="relative">
            <View className="overflow-hidden">
                <View className="w-full relative" style={{ height: cardHeight }}>
                    <View className="absolute left-0 right-0 top-0 bottom-0">
                        <Svg width="100%" height="100%" viewBox="0 0 374 287" preserveAspectRatio="none">
                            <Defs>
                                <SvgLinearGradient id="completed-project-gradient" x1="0" y1="287" x2="374" y2="0">
                                    <Stop offset="0.5795" stopColor="#07B556" />
                                    <Stop offset="1.2421" stopColor="#36D97F" />
                                </SvgLinearGradient>
                            </Defs>
                            <Rect width="374" height="287" fill="url(#completed-project-gradient)" />
                        </Svg>
                    </View>

                    <View className="flex-1 px-5 pb-6" style={{ paddingTop: insets.top + DESIGN_PADDING_TOP }}>
                        <View className="flex-row items-start">
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={onBackPress}
                                className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white items-center justify-center shadow-md shadow-black/10 elevation-[4]"
                            >
                                <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
                                    <Path
                                        d="M9 14.2484L3.75081 8.99919L9 3.75"
                                        stroke="#242424"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M14.2492 9H3.75081"
                                        stroke="#242424"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                            </TouchableOpacity>

                            <View className="flex-1 items-center space-y-4">
                                <View className="w-[84px] h-[84px] rounded-full bg-white items-center justify-center">
                                    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
                                        <Path
                                            d="M23.9938 43.9895C35.0366 43.9895 43.9886 35.0376 43.9886 23.9948C43.9886 12.952 35.0366 4 23.9938 4C12.951 4 3.99902 12.952 3.99902 23.9948C3.99902 35.0376 12.951 43.9895 23.9938 43.9895Z"
                                            stroke="#009966"
                                            strokeWidth={3.99895}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <Path
                                            d="M17.9954 23.995L21.9943 27.994L29.9922 19.9961"
                                            stroke="#009966"
                                            strokeWidth={3.99895}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </Svg>
                                </View>

                                <View className="max-w-[90%] items-center space-y-2 px-4">
                                    <Text className="text-white text-[21px] font-[500] text-center">Project Completed!</Text>
                                    <Text className="text-white text-[19px] font-[400] text-center opacity-80">
                                        All milestones have been delivered and approved
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CompletionHero

