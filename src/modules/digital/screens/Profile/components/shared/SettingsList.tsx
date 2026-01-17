import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { Path, Defs, LinearGradient, ClipPath, Rect, G, Stop } from 'react-native-svg'

type SettingsItemType = 'notifications' | 'privacy' | 'language' | 'portfolio' | 'availability' | 'skills'

export type SettingsItem = {
    id: string
    type: SettingsItemType
    title: string
    subtitle: string
}

type SettingsListProps = {
    items: SettingsItem[]
}

const NotificationsIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 17 17" fill="none">
        <G clipPath="url(#clip_notifications)">
            <Path
                d="M7.14307 14.6094C7.26519 14.8209 7.44083 14.9965 7.65234 15.1186C7.86385 15.2407 8.10377 15.305 8.34799 15.305C8.59222 15.305 8.83214 15.2407 9.04365 15.1186C9.25515 14.9965 9.4308 14.8209 9.55292 14.6094"
                stroke="url(#grad_notifications_1)"
                strokeWidth={1.39}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M2.26916 10.6652C2.17828 10.7648 2.11831 10.8887 2.09653 11.0218C2.07476 11.1548 2.09213 11.2914 2.14652 11.4148C2.20091 11.5381 2.28999 11.643 2.40291 11.7167C2.51584 11.7904 2.64774 11.8297 2.78258 11.8298H13.9135C14.0484 11.8298 14.1803 11.7907 14.2933 11.7172C14.4063 11.6436 14.4955 11.5388 14.55 11.4155C14.6045 11.2922 14.6221 11.1557 14.6005 11.0227C14.5789 10.8896 14.5191 10.7656 14.4283 10.6659C13.5031 9.71213 12.5222 8.69852 12.5222 5.56864C12.5222 4.4616 12.0824 3.3999 11.2996 2.6171C10.5168 1.8343 9.4551 1.39453 8.34805 1.39453C7.24101 1.39453 6.17931 1.8343 5.39652 2.6171C4.61372 3.3999 4.17395 4.4616 4.17395 5.56864C4.17395 8.69852 3.19234 9.71214 2.26916 10.6652Z"
                stroke="url(#grad_notifications_2)"
                strokeWidth={1.39}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <LinearGradient
                id="grad_notifications_1"
                x1="7.99508"
                y1="14.8553"
                x2="8.25721"
                y2="13.9472"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0} stopColor="#07B556" />
                <Stop offset={1} stopColor="#36D97F" />
            </LinearGradient>
            <LinearGradient
                id="grad_notifications_2"
                x1="6.51462"
                y1="5.08396"
                x2="13.7725"
                y2="-3.62536"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0} stopColor="#07B556" />
                <Stop offset={1} stopColor="#36D97F" />
            </LinearGradient>
            <ClipPath id="clip_notifications">
                <Rect width={16.6964} height={16.6964} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

const PrivacyIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 17 17" fill="none">
        <Defs>
            <LinearGradient
                id="grad_privacy_1"
                x1="6.51422"
                y1="10.3579"
                x2="11.3295"
                y2="2.47831"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0} stopColor="#07B556" />
                <Stop offset={1} stopColor="#36D97F" />
            </LinearGradient>
            <LinearGradient
                id="grad_privacy_2"
                x1="7.32925"
                y1="3.60428"
                x2="11.7321"
                y2="-1.28777"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0} stopColor="#07B556" />
                <Stop offset={1} stopColor="#36D97F" />
            </LinearGradient>
        </Defs>
        <Path
            d="M13.2179 7.65234H3.47828C2.70985 7.65234 2.08691 8.27528 2.08691 9.04371V13.9135C2.08691 14.6819 2.70985 15.3049 3.47828 15.3049H13.2179C13.9863 15.3049 14.6092 14.6819 14.6092 13.9135V9.04371C14.6092 8.27528 13.9863 7.65234 13.2179 7.65234Z"
            stroke="url(#grad_privacy_1)"
            strokeWidth={1.39}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M4.86963 7.65179V4.86905C4.86963 3.94651 5.2361 3.06176 5.88844 2.40943C6.54077 1.7571 7.42552 1.39063 8.34805 1.39062C9.27059 1.39062 10.1553 1.7571 10.8077 2.40943C11.46 3.06176 11.8265 3.94651 11.8265 4.86905V7.65179"
            stroke="url(#grad_privacy_2)"
            strokeWidth={1.39}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const LanguageIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 17 17" fill="none">
        <Defs>
            <LinearGradient
                id="grad_lang_1"
                x1="6.31035"
                y1="6.30986"
                x2="16.1488"
                y2="-3.52861"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0} stopColor="#07B556" />
                <Stop offset={1} stopColor="#36D97F" />
            </LinearGradient>
            <LinearGradient
                id="grad_lang_2"
                x1="7.53263"
                y1="6.30986"
                x2="14.3178"
                y2="3.5958"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0} stopColor="#07B556" />
                <Stop offset={1} stopColor="#36D97F" />
            </LinearGradient>
            <LinearGradient
                id="grad_lang_3"
                x1="6.31035"
                y1="8.70121"
                x2="6.41147"
                y2="7.29426"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0} stopColor="#07B556" />
                <Stop offset={1} stopColor="#36D97F" />
            </LinearGradient>
            <ClipPath id="clip_lang">
                <Rect width={16.6964} height={16.6964} fill="white" />
            </ClipPath>
        </Defs>
        <G clipPath="url(#clip_lang)">
            <Path
                d="M8.34796 15.3043C12.1901 15.3043 15.3048 12.1896 15.3048 8.34747C15.3048 4.50531 12.1901 1.39062 8.34796 1.39062C4.5058 1.39062 1.39111 4.50531 1.39111 8.34747C1.39111 12.1896 4.5058 15.3043 8.34796 15.3043Z"
                stroke="url(#grad_lang_1)"
                strokeWidth={1.39}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M8.34768 1.39062C6.56132 3.2663 5.56494 5.75726 5.56494 8.34747C5.56494 10.9377 6.56132 13.4286 8.34768 15.3043C10.134 13.4286 11.1304 10.9377 11.1304 8.34747C11.1304 5.75726 10.134 3.2663 8.34768 1.39062Z"
                stroke="url(#grad_lang_2)"
                strokeWidth={1.39}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M1.39111 8.34766H15.3048"
                stroke="url(#grad_lang_3)"
                strokeWidth={1.39}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
    </Svg>
)

const PortfolioIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 17 17" fill="none">
        <Path
            d="M11.1536 13.9426V2.78876C11.1536 2.41899 11.0067 2.06436 10.7452 1.80289C10.4838 1.54142 10.1291 1.39453 9.75935 1.39453H6.97089C6.60112 1.39453 6.24649 1.54142 5.98502 1.80289C5.72355 2.06436 5.57666 2.41899 5.57666 2.78876V13.9426"
            stroke="#00A551"
            strokeWidth={1.39}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M13.9421 4.17969H2.78827C2.01826 4.17969 1.39404 4.80391 1.39404 5.57392V12.5451C1.39404 13.3151 2.01826 13.9393 2.78827 13.9393H13.9421C14.7121 13.9393 15.3364 13.3151 15.3364 12.5451V5.57392C15.3364 4.80391 14.7121 4.17969 13.9421 4.17969Z"
            stroke="#00A551"
            strokeWidth={1.39}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const AvailabilityIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 17 17" fill="none">
        <G clipPath="url(#clip_availability)">
            <Path
                d="M5.57666 1.39453V4.18299"
                stroke="#00A551"
                strokeWidth={1.39}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M11.1538 1.39453V4.18299"
                stroke="#00A551"
                strokeWidth={1.39}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M13.2452 2.78516H3.48554C2.71553 2.78516 2.09131 3.40937 2.09131 4.17939V13.939C2.09131 14.709 2.71553 15.3332 3.48554 15.3332H13.2452C14.0152 15.3332 14.6394 14.709 14.6394 13.939V4.17939C14.6394 3.40937 14.0152 2.78516 13.2452 2.78516Z"
                stroke="#00A551"
                strokeWidth={1.39}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M2.09131 6.96875H14.6394"
                stroke="#00A551"
                strokeWidth={1.39}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
        <Defs>
            <ClipPath id="clip_availability">
                <Rect width={16.7308} height={16.7308} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

const SkillsIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 17 17" fill="none">
        <Path
            d="M10.7893 8.98828L11.8454 14.9319C11.8572 15.0019 11.8474 15.0738 11.8172 15.1381C11.7871 15.2023 11.738 15.2558 11.6766 15.2915C11.6152 15.3271 11.5444 15.3431 11.4737 15.3374C11.4029 15.3317 11.3356 15.3045 11.2807 15.2595L8.78505 13.3864C8.66457 13.2964 8.51822 13.2477 8.36783 13.2477C8.21744 13.2477 8.07109 13.2964 7.95061 13.3864L5.45075 15.2588C5.3959 15.3038 5.32866 15.3309 5.25799 15.3366C5.18733 15.3423 5.1166 15.3263 5.05525 15.2908C4.9939 15.2553 4.94484 15.2019 4.91461 15.1378C4.88439 15.0736 4.87444 15.0018 4.88609 14.9319L5.94152 8.98828"
            stroke="#00A551"
            strokeWidth={1.39}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M8.36531 9.75992C10.6753 9.75992 12.548 7.88726 12.548 5.57722C12.548 3.26719 10.6753 1.39453 8.36531 1.39453C6.05527 1.39453 4.18262 3.26719 4.18262 5.57722C4.18262 7.88726 6.05527 9.75992 8.36531 9.75992Z"
            stroke="#00A551"
            strokeWidth={1.39}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const ChevronRightIcon = () => (
    <Svg width={17} height={17} viewBox="0 0 17 17" fill="none">
        <Defs>
            <LinearGradient
                id="grad_chevron"
                x1="7.737"
                y1="7.12732"
                x2="12.4595"
                y2="4.76609"
                gradientUnits="userSpaceOnUse"
            >
                <Stop offset={0} stopColor="#07B556" />
                <Stop offset={1} stopColor="#36D97F" />
            </LinearGradient>
        </Defs>
        <Path
            d="M6.26123 12.524L10.4353 8.34989L6.26123 4.17578"
            stroke="url(#grad_chevron)"
            strokeWidth={1.39}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const renderIcon = (type: SettingsItemType) => {
    switch (type) {
        case 'notifications':
            return <NotificationsIcon />
        case 'privacy':
            return <PrivacyIcon />
        case 'language':
            return <LanguageIcon />
        case 'portfolio':
            return <PortfolioIcon />
        case 'availability':
            return <AvailabilityIcon />
        case 'skills':
            return <SkillsIcon />
        default:
            return <NotificationsIcon />
    }
}

export const SettingsList: React.FC<SettingsListProps> = ({ items }) => {
    return (
        <View className="mt-6 space-y-1.5">
            {items.map(item => (
                <TouchableOpacity
                    key={item.id}
                    className="flex-row items-center justify-between rounded-[13px] bg-white border border-black/10 px-4 py-[14px] active:opacity-90"
                >
                    <View className="flex-row items-center space-x-3 flex-1 mr-3">
                        {renderIcon(item.type)}
                        <View className="flex-1">
                            <Text className="text-sm font-semibold text-[#242424]">{item.title}</Text>
                            <Text className="text-xs mt-1 text-[#242424] opacity-60">
                                {item.subtitle}
                            </Text>
                        </View>
                    </View>
                    <ChevronRightIcon />
                </TouchableOpacity>
            ))}
        </View>
    )
}


