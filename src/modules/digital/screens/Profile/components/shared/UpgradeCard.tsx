import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { Path, Defs, ClipPath, Rect, G } from 'react-native-svg'

type UpgradeCardProps = {
    title?: string
    subtitle?: string
    buttonLabel?: string
}

const UpgradeIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 17 17" fill="none">
        <G clipPath="url(#clip0_upgrade_pro_shared)">
            <Path
                d="M8.04346 2.27382C8.07349 2.21929 8.1176 2.17381 8.1712 2.14213C8.2248 2.11046 8.28591 2.09375 8.34817 2.09375C8.41043 2.09375 8.47154 2.11046 8.52514 2.14213C8.57874 2.17381 8.62285 2.21929 8.65288 2.27382L10.7065 6.17244C10.7555 6.26271 10.8239 6.34103 10.9067 6.40175C10.9895 6.46248 11.0848 6.50411 11.1856 6.52366C11.2864 6.54322 11.3903 6.5402 11.4898 6.51484C11.5894 6.48948 11.682 6.44239 11.7612 6.37697L14.7366 3.82798C14.7938 3.78153 14.8641 3.75439 14.9377 3.75048C15.0112 3.74658 15.0841 3.7661 15.1458 3.80624C15.2075 3.84638 15.2549 3.90507 15.2811 3.97386C15.3074 4.04265 15.3111 4.11799 15.2918 4.18904L13.3202 11.317C13.28 11.4629 13.1933 11.5917 13.0733 11.6838C12.9532 11.7759 12.8065 11.8265 12.6552 11.8277H4.04188C3.89046 11.8266 3.74351 11.7762 3.62335 11.684C3.50319 11.5919 3.41639 11.463 3.37611 11.317L1.40524 4.18974C1.38593 4.11869 1.38967 4.04335 1.41591 3.97456C1.44215 3.90577 1.48954 3.84708 1.55126 3.80694C1.61298 3.76679 1.68585 3.74727 1.75937 3.75118C1.83289 3.75509 1.90328 3.78222 1.96039 3.82868L4.93514 6.37767C5.01431 6.44309 5.10698 6.49017 5.2065 6.51554C5.30602 6.5409 5.40993 6.54391 5.51075 6.52436C5.61157 6.50481 5.70682 6.46317 5.78964 6.40245C5.87247 6.34172 5.94082 6.26341 5.9898 6.17314L8.04346 2.27382Z"
                stroke="#E17100"
                strokeWidth={1.39}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M3.47852 14.6094H13.2181"
                stroke="#E17100"
                strokeWidth={1.39}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_upgrade_pro_shared">
                <Rect width={16.6964} height={16.6964} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const UpgradeCard: React.FC<UpgradeCardProps> = ({
    title = 'Upgrade to Pro',
    subtitle = 'Get 50 bids/month, featured listings, and lower fees',
    buttonLabel = 'View Plans',
}) => {
    return (
        <View className="mt-6 rounded-[13px] bg-[#FFF7E8] border border-[#FEE685] px-4 py-4">
            <View className="flex-row items-start">
                <View className="w-9 h-9 mt-1 rounded-full bg-[#FEF3C6] items-center justify-center">
                    <UpgradeIcon />
                </View>

                <View className="flex-1 ml-3">
                    <Text className="text-base font-semibold text-[#242424]">{title}</Text>
                    <Text className="mt-1 text-xs text-[#242424] opacity-60">{subtitle}</Text>

                    <TouchableOpacity className="self-start mt-3 px-3 py-1 rounded-[8.35px] bg-white border border-[#E17100] active:opacity-90">
                        <Text className="text-[10px] font-medium text-[#E17100]">{buttonLabel}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


