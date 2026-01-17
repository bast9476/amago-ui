import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Svg, { Defs, LinearGradient, Stop, Rect, Path, ClipPath, G } from 'react-native-svg'

const EditIcon = () => (
    <Svg width={18} height={18} viewBox="0 0 14 14" fill="none">
        <G clipPath="url(#clip0_profile_edit)">
            <Path
                d="M11.7845 3.7916C12.0787 3.49742 12.2441 3.0984 12.2441 2.68232C12.2442 2.26624 12.0789 1.86718 11.7848 1.57292C11.4906 1.27867 11.0916 1.11333 10.6755 1.11328C10.2594 1.11323 9.86034 1.27847 9.56609 1.57265L2.13841 9.002C2.00919 9.13084 1.91362 9.28947 1.86013 9.46393L1.12493 11.886C1.11055 11.9342 1.10946 11.9853 1.12179 12.034C1.13411 12.0827 1.15939 12.1271 1.19494 12.1626C1.23049 12.1981 1.27499 12.2233 1.32371 12.2356C1.37243 12.2478 1.42355 12.2467 1.47166 12.2322L3.89431 11.4976C4.06861 11.4445 4.22723 11.3496 4.35625 11.221L11.7845 3.7916Z"
                stroke="white"
                strokeWidth={1.1}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_profile_edit">
                <Rect width={13.36} height={13.36} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

const VerifiedIcon = () => (
    <Svg width={14} height={14} viewBox="0 0 11 11" fill="none">
        <G clipPath="url(#clip0_profile_verified)">
            <Path
                d="M8.348 5.42374C8.348 7.51079 6.88707 8.55432 5.15064 9.15956C5.05971 9.19038 4.96094 9.1889 4.87097 9.15539C3.13037 8.55432 1.66943 7.51079 1.66943 5.42374V2.50186C1.66943 2.39116 1.71341 2.28499 1.79169 2.20671C1.86997 2.12843 1.97614 2.08445 2.08684 2.08445C2.92167 2.08445 3.96519 1.58356 4.69149 0.949094C4.77992 0.873542 4.89241 0.832031 5.00872 0.832031C5.12503 0.832031 5.23752 0.873542 5.32595 0.949094C6.05642 1.58773 7.09577 2.08445 7.93059 2.08445C8.0413 2.08445 8.14747 2.12843 8.22575 2.20671C8.30403 2.28499 8.348 2.39116 8.348 2.50186V5.42374Z"
                stroke="white"
                strokeWidth={0.83}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_profile_verified">
                <Rect width={10.02} height={10.02} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

type ProfileMode = 'buyer' | 'provider'

interface ProfileHeaderProps {
    mode: ProfileMode
    onChangeMode: (mode: ProfileMode) => void
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ mode, onChangeMode }) => {
    const insets = useSafeAreaInsets()
    const topPad = insets?.top ?? 0

    return (
        <View className="w-full">
            <Svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <Defs>
                    <LinearGradient
                        id="profile-header-gradient"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0.5795" stopColor="#07B556" />
                        <Stop offset="1.2421" stopColor="#36D97F" />
                    </LinearGradient>
                </Defs>
                <Rect width="100" height="100" fill="url(#profile-header-gradient)" />
            </Svg>

            <View className="px-4 pb-20" style={{ paddingTop: topPad }}>
                {/* Header row */}
                <View className="flex-row items-center justify-between">
                    <Text className="text-lg font-semibold text-white">Profile</Text>
                    <EditIcon />
                </View>

                {/* Avatar + info */}
                <View className="flex-row items-start mt-2 space-x-4">
                    <View className="w-16 h-16 mt-1 rounded-full border-[1.5px] border-white overflow-hidden bg-white/10">
                        <Image
                            source={require('@modules/digital/assets/img.png')}
                            className="w-full h-full"
                            resizeMode="cover"
                        />
                    </View>

                    <View className="flex-1 space-y-1">
                        <View>
                            <Text className="text-base font-semibold text-white">John Doe</Text>
                            <Text className="text-sm text-white opacity-70">john.doe@email.com</Text>
                        </View>

                        <View className="flex-row items-center self-start px-3 py-1 rounded-lg border border-white/30 bg-white/20">
                            <VerifiedIcon />
                            <Text className="ml-1.5 text-xs font-medium text-white">Verified</Text>
                        </View>
                    </View>
                </View>

                {/* Role toggle */}
                <View className="mt-6 flex-row items-center rounded-[10px] bg-white/20 px-1 py-1">
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={() => onChangeMode('buyer')}
                        className={`flex-1 h-9 rounded-[8px] items-center justify-center ${mode === 'buyer' ? 'bg-white' : ''
                            }`}
                    >
                        <Text
                            className={`text-sm font-semibold ${mode === 'buyer' ? 'text-[#07B556]' : 'text-white'
                                }`}
                        >
                            Buyer
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={() => onChangeMode('provider')}
                        className={`flex-1 h-8 rounded-[8px] items-center justify-center ${mode === 'provider' ? 'bg-white' : ''
                            }`}
                    >
                        <Text
                            className={`text-sm font-medium ${mode === 'provider' ? 'text-[#07B556]' : 'text-white'
                                }`}
                        >
                            Service Provider
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


