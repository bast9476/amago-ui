import React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type TransactionType = 'in' | 'out'

type TransactionItem = {
    id: string
    title: string
    date: string
    amount: string
    type: TransactionType
}

type RecentTransactionsListProps = {
    items: TransactionItem[]
}

const TransactionDownIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 14 14" fill="none">
        <Path
            d="M6.67871 1.66797V8.34654"
            stroke="#E7000B"
            strokeWidth={1.1131}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M9.46147 4.45071L6.67873 1.66797L3.896 4.45071"
            stroke="#E7000B"
            strokeWidth={1.1131}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M11.6878 8.34766V10.5738C11.6878 10.8691 11.5705 11.1522 11.3618 11.3609C11.153 11.5697 10.8699 11.6869 10.5747 11.6869H2.78302C2.48781 11.6869 2.20469 11.5697 1.99594 11.3609C1.78719 11.1522 1.66992 10.8691 1.66992 10.5738V8.34766"
            stroke="#E7000B"
            strokeWidth={1.1131}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const TransactionUpIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 14 14" fill="none">
        <Path
            d="M6.67822 8.34654V1.66797"
            stroke="#009966"
            strokeWidth={1.1131}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M11.6873 8.34766V10.5738C11.6873 10.8691 11.57 11.1522 11.3613 11.3609C11.1525 11.5697 10.8694 11.6869 10.5742 11.6869H2.78253C2.48732 11.6869 2.2042 11.5697 1.99545 11.3609C1.78671 11.1522 1.66943 10.8691 1.66943 10.5738V8.34766"
            stroke="#009966"
            strokeWidth={1.1131}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M3.89551 5.56641L6.67825 8.34914L9.46098 5.56641"
            stroke="#009966"
            strokeWidth={1.1131}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export const RecentTransactionsList: React.FC<RecentTransactionsListProps> = ({ items }) => {
    return (
        <View className="mt-8 rounded-[13px] bg-white border border-black/10 px-4 py-4">
            <Text className="text-base font-semibold text-[#242424]">Recent Transactions</Text>

            <View className="mt-7 space-y-3">
                {items.map(item => {
                    const isOut = item.type === 'out'
                    const amountColor = isOut ? '#E7000B' : '#009966'
                    const circleBg = isOut ? '#FFE2E2' : '#D0FAE5'

                    return (
                        <View key={item.id} className="flex-row items-center justify-between">
                            <View className="flex-row items-center space-x-3 flex-1 mr-3">
                                <View
                                    className="w-9 h-9 rounded-full items-center justify-center"
                                    style={{ backgroundColor: circleBg }}
                                >
                                    {isOut ? <TransactionDownIcon /> : <TransactionUpIcon />}
                                </View>
                                <View className="flex-1">
                                    <Text
                                        className="text-sm font-semibold text-[#242424]"
                                        numberOfLines={1}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text className="text-xs mt-[3px] text-[#242424] opacity-70">{item.date}</Text>
                                </View>
                            </View>
                            <Text className="text-[15px] font-semibold" style={{ color: amountColor }}>
                                {item.amount}
                            </Text>
                        </View>
                    )
                })}
            </View>

            <Text className="mt-9 text-sm font-semibold text-center underline text-[#00A551]">
                View All Transactions
            </Text>
        </View>
    )
}


