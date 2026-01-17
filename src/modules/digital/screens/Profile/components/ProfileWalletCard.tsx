import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

const WalletIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 17 17" fill="none">
        <Defs>
            <LinearGradient
                id="wallet-stroke-1"
                x1="6.76019"
                y1="5.28734"
                x2="12.7208"
                y2="-3.42434"
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#07B556" />
                <Stop offset={1} stopColor="#36D97F" />
            </LinearGradient>
            <LinearGradient
                id="wallet-stroke-2"
                x1="6.51422"
                y1="7.41585"
                x2="14.3307"
                y2="-1.3777"
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#07B556" />
                <Stop offset={1} stopColor="#36D97F" />
            </LinearGradient>
        </Defs>
        <Path
            d="M13.2179 4.87258V2.78553C13.2179 2.60102 13.1446 2.42407 13.0141 2.2936C12.8836 2.16314 12.7067 2.08984 12.5222 2.08984H3.47828C3.10927 2.08984 2.75537 2.23643 2.49444 2.49737C2.2335 2.7583 2.08691 3.1122 2.08691 3.48121C2.08691 3.85023 2.2335 4.20413 2.49444 4.46506C2.75537 4.72599 3.10927 4.87258 3.47828 4.87258H13.9136C14.0981 4.87258 14.275 4.94588 14.4055 5.07634C14.5359 5.20681 14.6092 5.38376 14.6092 5.56827V8.351"
            stroke="url(#wallet-stroke-1)"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M2.08691 3.48047V13.2201C2.08691 13.5891 2.2335 13.943 2.49444 14.2039C2.75537 14.4648 3.10927 14.6114 3.47828 14.6114H13.9136C14.0981 14.6114 14.275 14.5381 14.4055 14.4077C14.5359 14.2772 14.6092 14.1002 14.6092 13.9157V11.133"
            stroke="url(#wallet-stroke-2)"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const StatsIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 14 14" fill="none">
        <Defs>
            <LinearGradient
                id="stats-stroke-1"
                x1="10.0854"
                y1="5.07515"
                x2="12.4466"
                y2="2.71392"
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#07B556" />
                <Stop offset={1} stopColor="#36D97F" />
            </LinearGradient>
            <LinearGradient
                id="stats-stroke-2"
                x1="5.04867"
                y1="5.86222"
                x2="8.19698"
                y2="-0.434393"
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#07B556" />
                <Stop offset={1} stopColor="#36D97F" />
            </LinearGradient>
        </Defs>
        <Path
            d="M8.90479 3.89453H12.2441V7.23382"
            stroke="url(#stats-stroke-1)"
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12.2442 3.89453L7.51358 8.62519L4.73084 5.84245L1.11328 9.46001"
            stroke="url(#stats-stroke-2)"
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const AddMoneyIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 14 14" fill="none">
        <Path
            d="M2.7832 6.67969H10.5749"
            stroke="#242424"
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M6.67871 2.78125V10.5729"
            stroke="#242424"
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const WithdrawIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 14 14" fill="none">
        <Path
            d="M6.67871 8.35045V1.67188"
            stroke="#242424"
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M11.6878 8.34766V10.5738C11.6878 10.8691 11.5705 11.1522 11.3618 11.3609C11.153 11.5697 10.8699 11.6869 10.5747 11.6869H2.78302C2.48781 11.6869 2.20469 11.5697 1.99594 11.3609C1.78719 11.1522 1.66992 10.8691 1.66992 10.5738V8.34766"
            stroke="#242424"
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M3.896 5.56641L6.67873 8.34914L9.46147 5.56641"
            stroke="#242424"
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const HistoryIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 14 14" fill="none">
        <Path
            d="M6.67871 1.67188V8.35045"
            stroke="#242424"
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M9.46098 4.45461L6.67825 1.67188L3.89551 4.45461"
            stroke="#242424"
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M11.6873 8.34766V10.5738C11.6873 10.8691 11.57 11.1522 11.3613 11.3609C11.1525 11.5697 10.8694 11.6869 10.5742 11.6869H2.78253C2.48732 11.6869 2.2042 11.5697 1.99545 11.3609C1.78671 11.1522 1.66943 10.8691 1.66943 10.5738V8.34766"
            stroke="#242424"
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

type WalletActionButtonProps = {
    icon: React.ReactNode
    label: string
    onPress?: () => void
    isFirst?: boolean
}

const WalletActionButton: React.FC<WalletActionButtonProps> = ({ icon, label, onPress, isFirst }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`flex-1 h-16 rounded-[8.35px] bg-white border border-black/10 items-center justify-center active:opacity-90 ${!isFirst ? 'ml-2' : ''}`}
        >
            {icon}
            <Text className="mt-1 text-xs text-center text-[#242424]">{label}</Text>
        </TouchableOpacity>
    )
}

export const ProfileWalletCard = () => {
    const walletActions = [
        {
            id: 'add-money',
            icon: <AddMoneyIcon />,
            label: 'Add Money',
            onPress: () => {
                // Handle add money
            },
        },
        {
            id: 'withdraw',
            icon: <WithdrawIcon />,
            label: 'Withdraw',
            onPress: () => {
                // Handle withdraw
            },
        },
        {
            id: 'history',
            icon: <HistoryIcon />,
            label: 'History',
            onPress: () => {
                // Handle history
            },
        },
    ]

    return (
        <View className="mx-4 mt-5 rounded-[13px] bg-white border border-black/10">
            <View className="px-4 py-5 space-y-8">
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center space-x-2">
                        <WalletIcon />
                        <Text className="text-sm font-medium text-[#242424]">Wallet Balance</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center space-x-2 active:opacity-80">
                        <StatsIcon />
                        <Text className="text-sm font-medium text-[#07B556]">Stats</Text>
                    </TouchableOpacity>
                </View>

                <View className="items-center">
                    <Text className="text-3xl font-semibold text-[#242424]">৳42,500</Text>
                    <Text className="mt-1 text-sm font-medium text-[#242424] opacity-60">Available balance</Text>
                </View>

                <View className="flex-row">
                    {walletActions.map((action, index) => (
                        <WalletActionButton
                            key={action.id}
                            icon={action.icon}
                            label={action.label}
                            onPress={action.onPress}
                            isFirst={index === 0}
                        />
                    ))}
                </View>
            </View>
        </View>
    )
}


