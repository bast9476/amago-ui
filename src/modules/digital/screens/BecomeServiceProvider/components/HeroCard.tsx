import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { Path, Defs, LinearGradient, Stop, ClipPath, G, Rect } from 'react-native-svg'

const GradientButton: React.FC<{ label: string }> = ({ label }) => (
    <TouchableOpacity activeOpacity={0.9} className="w-full h-[48px] rounded-[14px] overflow-hidden mb-3">
        <Svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <Defs>
                <LinearGradient id="become-provider-gradient" x1="0%" y1="100%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                    <Stop offset="0.5795" stopColor="#07B556" />
                    <Stop offset="1.2421" stopColor="#34D399" />
                </LinearGradient>
            </Defs>
            <Rect width="100" height="100" fill="url(#become-provider-gradient)" />
        </Svg>
        <View className="flex-1 items-center justify-center">
            <Text className="text-[16px] font-semibold text-white">{label}</Text>
        </View>
    </TouchableOpacity>
)

const PlayIcon = () => (
    <Svg width={28} height={28} viewBox="0 0 28 28" fill="none">
        <Path d="M9 6L22 14L9 22V6Z" fill="#00A551" />
    </Svg>
)

const ShieldIcon = () => (
    <Svg width={22} height={22} viewBox="0 0 16 16" fill="none">
        <G clipPath="url(#clip0_shield)">
            <Path
                d="M7.67398 0C7.81187 0 7.94977 0.029977 8.07567 0.0869332L13.7203 2.48209C14.3798 2.76088 14.8715 3.41138 14.8685 4.19678C14.8535 7.17049 13.6304 12.6113 8.46537 15.0844C7.96476 15.3242 7.3832 15.3242 6.88259 15.0844C1.71756 12.6113 0.494494 7.17049 0.479506 4.19678C0.476508 3.41138 0.968131 2.76088 1.62762 2.48209L7.27529 0.0869332C7.39819 0.029977 7.53609 0 7.67398 0ZM7.67398 2.00246V13.3338C11.8108 11.3313 12.9229 6.8977 12.9499 4.23874L7.67398 2.00246Z"
                fill="#00A551"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_shield">
                <Path d="M0 0H15.3482V15.3482H0V0Z" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

const SupportIcon = () => (
    <Svg width={22} height={22} viewBox="0 0 16 16" fill="none">
        <G clipPath="url(#clip0_support)">
            <Path
                d="M7.67411 1.4389C4.22975 1.4389 1.4389 4.22975 1.4389 7.67411V8.87319C1.4389 9.27188 1.11814 9.59263 0.719448 9.59263C0.320754 9.59263 0 9.27188 0 8.87319V7.67411C0 3.43536 3.43536 0 7.67411 0C11.9129 0 15.3482 3.43536 15.3482 7.67411V11.9938C15.3482 13.4507 14.1671 14.6318 12.7072 14.6318L9.40078 14.6288C9.15197 15.0574 8.68733 15.3482 8.15374 15.3482H7.19448C6.40009 15.3482 5.75558 14.7037 5.75558 13.9093C5.75558 13.1149 6.40009 12.4704 7.19448 12.4704H8.15374C8.68733 12.4704 9.15197 12.7612 9.40078 13.1899L12.7102 13.1929C13.3727 13.1929 13.9093 12.6563 13.9093 11.9938V7.67411C13.9093 4.22975 11.1185 1.4389 7.67411 1.4389ZM4.31669 6.23521H4.79632C5.32691 6.23521 5.75558 6.66388 5.75558 7.19448V10.5519C5.75558 11.0825 5.32691 11.5112 4.79632 11.5112H4.31669C3.2585 11.5112 2.39816 10.6508 2.39816 9.59263V8.15374C2.39816 7.09555 3.2585 6.23521 4.31669 6.23521ZM11.0315 6.23521C12.0897 6.23521 12.9501 7.09555 12.9501 8.15374V9.59263C12.9501 10.6508 12.0897 11.5112 11.0315 11.5112H10.5519C10.0213 11.5112 9.59263 11.0825 9.59263 10.5519V7.19448C9.59263 6.66388 10.0213 6.23521 10.5519 6.23521H11.0315Z"
                fill="#00A551"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_support">
                <Path d="M0 0H15.3482V15.3482H0V0Z" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

const CheckIcon = () => (
    <Svg width={22} height={22} viewBox="0 0 16 16" fill="none">
        <G clipPath="url(#clip0_check)">
            <Path
                d="M7.67411 15.3482C9.70941 15.3482 11.6613 14.5397 13.1005 13.1005C14.5397 11.6613 15.3482 9.70941 15.3482 7.67411C15.3482 5.63881 14.5397 3.68687 13.1005 2.24769C11.6613 0.80852 9.70941 0 7.67411 0C5.63881 0 3.68687 0.80852 2.24769 2.24769C0.80852 3.68687 0 5.63881 0 7.67411C0 9.70941 0.80852 11.6613 2.24769 13.1005C3.68687 14.5397 5.63881 15.3482 7.67411 15.3482ZM11.0615 6.26519L7.22445 10.1022C6.94267 10.384 6.48702 10.384 6.20823 10.1022L4.28971 8.18372C4.00792 7.90193 4.00792 7.44628 4.28971 7.1675C4.57149 6.88871 5.02714 6.88571 5.30593 7.1675L6.71484 8.57642L10.0423 5.24597C10.3241 4.96419 10.7797 4.96419 11.0585 5.24597C11.3373 5.52776 11.3403 5.98341 11.0585 6.26219L11.0615 6.26519Z"
                fill="#00A551"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_check">
                <Path d="M0 0H15.3482V15.3482H0V0Z" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

const ColumnIcon = () => (
    <Svg width={24} height={19.2} viewBox="0 0 20 16" fill="none">
        <G clipPath="url(#clip0_columns)">
            <Path
                d="M11.5109 0.959263H15.348C15.8786 0.959263 16.3073 1.38793 16.3073 1.91853C16.3073 2.44912 15.8786 2.87779 15.348 2.87779H11.9426C11.7867 3.6512 11.2561 4.28971 10.5517 4.59547V13.4297H15.348C15.8786 13.4297 16.3073 13.8584 16.3073 14.389C16.3073 14.9195 15.8786 15.3482 15.348 15.3482H9.59241H3.83683C3.30624 15.3482 2.87757 14.9195 2.87757 14.389C2.87757 13.8584 3.30624 13.4297 3.83683 13.4297H8.63315V4.59547C7.92869 4.28671 7.3981 3.6482 7.24222 2.87779H3.83683C3.30624 2.87779 2.87757 2.44912 2.87757 1.91853C2.87757 1.38793 3.30624 0.959263 3.83683 0.959263H7.67389C8.11155 0.37771 8.80702 0 9.59241 0C10.3778 0 11.0733 0.37771 11.5109 0.959263ZM13.1777 9.59263H17.5183L15.348 5.86949L13.1777 9.59263ZM3.80086 5.86949L1.63053 9.59263H5.97419L3.80086 5.86949ZM0.0267604 10.1052C-0.0511798 9.77549 0.0567373 9.43675 0.227606 9.14298L3.08141 4.25074C3.2313 3.99293 3.50709 3.83705 3.80386 3.83705C4.10063 3.83705 4.37642 3.99593 4.5263 4.25074L7.38011 9.14298C7.55098 9.43675 7.6589 9.77549 7.58096 10.1052C7.25421 11.4512 5.68641 12.4704 3.80086 12.4704C1.91531 12.4704 0.350512 11.4512 0.0267604 10.1052Z"
                fill="#00A551"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_columns">
                <Path d="M0 0H19.1853V15.3482H0V0Z" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

const featureData = [
    { icon: <ShieldIcon />, label: 'Escrow' },
    { icon: <SupportIcon />, label: '24/7 Support' },
    { icon: <CheckIcon />, label: 'KYC Verified' },
    { icon: <ColumnIcon />, label: 'Dispute Help' },
]

export const HeroCard = () => (
    <View className="rounded-[20px] px-5 items-center shadow shadow-black/5 space-y-8">
        <View className="items-center space-y-3.5 px-3 pt-8">
            <Text className="text-[34px] font-bold text-center text-gray-900">Start earning with your skills</Text>
            <Text className="text-[17px] leading-[24px] text-center text-[#242424] opacity-60">
                Publish a verified profile, accept projects, and get paid via escrow.
            </Text>
        </View>

        <View className="w-full flex-col justify-center">
            <GradientButton label="Get Started" />

            <TouchableOpacity
                activeOpacity={0.85}
                className="w-full h-12 rounded-[14px] border border-[#00a551] flex-row items-center justify-center space-x-2"
            >
                <PlayIcon />
                <Text className="text-[17px] font-semibold text-[#00a551]">Watch 60-sec Tour</Text>
            </TouchableOpacity>
        </View>

        <View className="flex-row justify-between w-full px-1 pb-8">
            {[0, 1].map((columnIndex) => (
                <View key={`column-${columnIndex}`} className={`space-y-3 ${columnIndex === 0 ? 'justify-start' : 'justify-end'}`}>
                    {featureData.slice(columnIndex * 2, columnIndex * 2 + 2).map((feature) => (
                        <View key={feature.label} className="flex-row items-center space-x-3">
                            {feature.icon}
                            <Text className="text-[17px] text-[#4B5563]">{feature.label}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    </View>
)

