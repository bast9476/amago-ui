import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Svg, { Path, Defs, LinearGradient, Stop, Rect, G, ClipPath, Circle } from 'react-native-svg'
import { BillingOption, SquareCheckIcon } from './shared/BillingOption'
import { TypicalDeliveryOption } from './shared/TypicalDeliveryOption'
import { WeeklyCalendarDay } from './shared/WeeklyCalendarDay'
import { CurrencyDropdown } from './shared/CurrencyDropdown'
import { SectionCaret } from './shared/SectionCaret'

const cardShadow = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
}

const SliderThumbIcon = () => (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
        <Circle cx="9" cy="9" r="7.5" fill="url(#paint0_linear_slider)" />
        <Defs>
            <LinearGradient
                id="paint0_linear_slider"
                x1="6.75865"
                y1="6.75669"
                x2="17.2955"
                y2="-3.78014"
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#07B556" />
                <Stop offset="1" stopColor="#36D97F" />
            </LinearGradient>
        </Defs>
    </Svg>
)

const CalendarDayIcon = ({ selected }: { selected: boolean }) => (
    <Svg width={40} height={38} viewBox="0 0 33 32" fill="none">
        <Path
            d="M24.501 0C28.8902 0 32.4482 3.5581 32.4482 7.94727V23.8418C32.4482 28.231 28.8902 31.7891 24.501 31.7891H7.94727C3.5581 31.789 0 28.231 0 23.8418V7.94727C5.36011e-05 3.55814 3.55814 5.54066e-05 7.94727 0H24.501Z"
            fill={selected ? '#00A551' : '#F3F4F7'}
        />
        <Path
            d="M24.501 0C28.8902 0 32.4482 3.5581 32.4482 7.94727V23.8418C32.4482 28.231 28.8902 31.7891 24.501 31.7891H7.94727C3.5581 31.789 0 28.231 0 23.8418V7.94727C5.36011e-05 3.55814 3.55814 5.54066e-05 7.94727 0H24.501Z"
            stroke="#F3F4F7"
        />
        {selected ? (
            <Path
                d="M9.73096 15.8518L10.9188 14.6396L14.001 17.6792L20.5249 11.1797L21.731 12.3919L14.001 20.0914L9.73096 15.8518Z"
                fill="white"
            />
        ) : (
            <Path
                d="M13.4005 19.2926L12.5623 18.4502L17.854 13.1797L18.6964 14.0179L13.4005 19.2926ZM17.854 19.2926L12.5581 14.0179L13.4005 13.1797L18.6922 18.4502L17.854 19.2926Z"
                fill="#6B7280"
            />
        )}
    </Svg>
)

const GoogleIcon = () => (
    <Svg width={"100%"} height={"100%"} viewBox="0 0 16 16" fill="none">
        <G clipPath="url(#clip0_google)">
            <Path
                d="M15.1497 8.12907C15.1497 12.5219 12.1415 15.648 7.69901 15.648C3.43972 15.648 0 12.2083 0 7.94901C0 3.68972 3.43972 0.25 7.69901 0.25C9.77278 0.25 11.5175 1.01059 12.8617 2.26478L10.7662 4.27956C8.02498 1.63458 2.92749 3.62142 2.92749 7.94901C2.92749 10.6344 5.07266 12.8106 7.69901 12.8106C10.7476 12.8106 11.89 10.625 12.0701 9.49192H7.69901V6.84383H15.0286C15.1 7.2381 15.1497 7.61684 15.1497 8.12907Z"
                fill="#2563EB"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_google">
                <Path d="M0 0H15.1497V15.8947H0V0Z" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

const InfoIcon = () => (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 12 12" fill="none">
        <G clipPath="url(#clip0_info)">
            <Path
                d="M5.96053 11.9211C7.54136 11.9211 9.05744 11.2931 10.1753 10.1753C11.2931 9.05744 11.9211 7.54136 11.9211 5.96053C11.9211 4.3797 11.2931 2.86361 10.1753 1.7458C9.05744 0.627982 7.54136 0 5.96053 0C4.3797 0 2.86361 0.627982 1.7458 1.7458C0.627982 2.86361 0 4.3797 0 5.96053C0 7.54136 0.627982 9.05744 1.7458 10.1753C2.86361 11.2931 4.3797 11.9211 5.96053 11.9211ZM5.02919 7.82319H5.58799V6.33306H5.02919C4.71953 6.33306 4.4704 6.08393 4.4704 5.77426C4.4704 5.46459 4.71953 5.21546 5.02919 5.21546H6.14679C6.45646 5.21546 6.70559 5.46459 6.70559 5.77426V7.82319H6.89186C7.20153 7.82319 7.45066 8.07232 7.45066 8.38199C7.45066 8.69166 7.20153 8.94079 6.89186 8.94079H5.02919C4.71953 8.94079 4.4704 8.69166 4.4704 8.38199C4.4704 8.07232 4.71953 7.82319 5.02919 7.82319ZM5.96053 2.98026C6.15813 2.98026 6.34764 3.05876 6.48737 3.19849C6.62709 3.33822 6.70559 3.52773 6.70559 3.72533C6.70559 3.92293 6.62709 4.11244 6.48737 4.25217C6.34764 4.3919 6.15813 4.4704 5.96053 4.4704C5.76292 4.4704 5.57341 4.3919 5.43369 4.25217C5.29396 4.11244 5.21546 3.92293 5.21546 3.72533C5.21546 3.52773 5.29396 3.33822 5.43369 3.19849C5.57341 3.05876 5.76292 2.98026 5.96053 2.98026Z"
                fill="#9CA3AF"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_info">
                <Path d="M0 0H11.9211V11.9211H0V0Z" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

export function RatesAvailabilityCard() {
    const [billingType, setBillingType] = useState<'hourly' | 'fixed'>('hourly')
    const [selectedCurrency, setSelectedCurrency] = useState('৳ BDT')
    const [typicalDelivery, setTypicalDelivery] = useState('3-5 days')
    const [minimumPrice, setMinimumPrice] = useState('৳5,000')
    const [showOnlineNow, setShowOnlineNow] = useState(true)
    const [isCollapsed, setIsCollapsed] = useState(false)

    const weekDays = [
        { label: 'M', selected: true },
        { label: 'T', selected: true },
        { label: 'W', selected: true },
        { label: 'T', selected: true },
        { label: 'F', selected: true },
        { label: 'S', selected: false },
        { label: 'S', selected: false },
    ]

    const minimumPriceOptions = [
        { label: '৳5,000', value: '৳5,000' },
        { label: '৳10,000', value: '৳10,000' },
        { label: 'Custom', value: 'Custom' },
    ]

    const deliveryOptions = [
        { label: 'Same-day', value: 'Same-day' },
        { label: '1-2 days', value: '1-2 days' },
        { label: '3-5 days', value: '3-5 days' },
        { label: '7-10 days', value: '7-10 days' },
    ]

    const billingOptions: Array<{ label: string; value: 'hourly' | 'fixed' }> = [
        { label: 'Hourly', value: 'hourly' },
        { label: 'Fixed Price', value: 'fixed' },
    ]

    const currencyOptions = ['৳ BDT', '$ USD', '€ EUR']

    return (
        <View className="rounded-2xl border border-[#F3F4F7] bg-white px-5 py-9 mt-8" style={cardShadow}>
            <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => setIsCollapsed((prev) => !prev)}
                className="flex-row items-center justify-between"
            >
                <Text className="text-[22px] font-semibold text-[#242424]">Rates & Availability</Text>
                <SectionCaret collapsed={isCollapsed} />
            </TouchableOpacity>

            {!isCollapsed && (
                <View className="space-y-5 mt-8">
                    {/* Billing Type */}
                    <View className="space-y-2.5 mb-1">
                        <Text className="text-base font-semibold text-[#242424]">Billing Type</Text>
                        <View className="space-y-2">
                            {billingOptions.map((option, index) => (
                                <BillingOption
                                    index={index}
                                    key={option.value}
                                    label={option.label}
                                    selected={billingType === option.value}
                                    onPress={() => setBillingType(option.value)}
                                />
                            ))}
                        </View>
                    </View>

                    {/* Hourly Rate */}
                    <View className="space-y-2.5 mb-3">
                        <Text className="text-base font-semibold text-[#242424]">Hourly Rate</Text>
                        <View className="flex-row items-center space-x-4">
                            <CurrencyDropdown
                                value={selectedCurrency}
                                options={currencyOptions}
                                onChange={setSelectedCurrency}
                                containerStyle={{ flex: 1, maxWidth: 110 }}
                            />
                            <View className="flex-row items-center gap-2 flex-1">
                                <View className="flex-1 px-4 py-3.5 rounded-xl bg-white border border-gray-300">
                                    <TextInput
                                        placeholder="1500"
                                        placeholderTextColor="#ADAEBC"
                                        className="text-lg text-[#242424]"
                                    />
                                </View>
                                <Text className="text-lg font-medium text-gray-500">/hr</Text>
                            </View>
                        </View>
                    </View>

                    {/* Minimum Project Price */}
                    <View className="space-y-2">
                        <Text className="text-base font-semibold text-[#242424]">Minimum Project Price</Text>
                        <View className="flex-row items-center gap-2 flex-wrap">
                            {minimumPriceOptions.map((option) => (
                                <TouchableOpacity
                                    key={option.value}
                                    activeOpacity={0.8}
                                    onPress={() => setMinimumPrice(option.value)}
                                    className={`py-2 ${option.value === 'Custom' ? 'px-6' : 'px-3'} rounded-lg ${minimumPrice === option.value
                                        ? 'bg-[#00A551]'
                                        : option.value === 'Custom'
                                            ? 'bg-white border border-gray-300'
                                            : 'bg-[#F3F4F7]'
                                        }`}
                                >
                                    <Text
                                        className={`text-base font-medium text-center ${minimumPrice === option.value
                                            ? 'text-white'
                                            : option.value === 'Custom'
                                                ? 'text-[#242424] opacity-40'
                                                : 'text-[#242424] opacity-50'
                                            }`}
                                    >
                                        {option.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Typical Delivery */}
                    <View className='mb-1'>
                        <Text className="text-base font-semibold text-[#242424] mb-2">Typical Delivery</Text>
                        <View className="flex-row flex-wrap gap-2">
                            {deliveryOptions.map((option) => (
                                <TypicalDeliveryOption
                                    key={option.value}
                                    label={option.label}
                                    selected={typicalDelivery === option.value}
                                    onPress={() => setTypicalDelivery(option.value)}
                                />
                            ))}
                        </View>
                    </View>

                    {/* Availability */}
                    <View className="space-y-5 mb-1">
                        <View className="space-y-2">
                            <Text className="text-base font-semibold text-[#242424]">Availability</Text>
                            <View className="space-y-3.5">
                                <Text className="text-base text-gray-600">Hours per week: 30</Text>
                                <View className="relative">
                                    <View className="h-2 rounded-full bg-neutral-200 border-[0.5px] border-[#B7B5B5] overflow-hidden">
                                        <View className="absolute left-0 top-0 h-full rounded-full overflow-hidden" style={{ width: '65%' }}>
                                            <Svg width="100%" height="100%" viewBox="0 0 100 8" preserveAspectRatio="none">
                                                <Defs>
                                                    <LinearGradient id="slider-gradient" x1="0%" y1="100%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                                                        <Stop offset="0.5795" stopColor="#07B556" />
                                                        <Stop offset="1.2421" stopColor="#36D97F" />
                                                    </LinearGradient>
                                                </Defs>
                                                <Rect width="100" height="8" rx="4" fill="url(#slider-gradient)" />
                                            </Svg>
                                        </View>
                                    </View>
                                    <View className="absolute" style={{ left: '65%', marginLeft: -9, top: -5 }}>
                                        <SliderThumbIcon />
                                    </View>
                                </View>
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-sm text-gray-500">10</Text>
                                    <Text className="text-sm text-gray-500">20</Text>
                                    <Text className="text-sm text-gray-500">30</Text>
                                    <Text className="text-sm text-gray-500">40+</Text>
                                </View>
                            </View>
                        </View>

                        {/* Weekly Calendar */}
                        <View className="flex-row items-start">
                            {weekDays.map((day, index) => (
                                <WeeklyCalendarDay
                                    key={index}
                                    index={index}
                                    label={day.label}
                                    selected={day.selected}
                                />
                            ))}
                        </View>
                    </View>

                    {/* Connect Google Calendar */}
                    <View className="space-y-4 mb-2">
                        <TouchableOpacity
                            activeOpacity={0.8}
                            className="flex-row items-center space-x-1 px-3 py-3.5 rounded-xl border border-gray-300"
                        >
                            <View className="w-5 h-5 mr-2">
                                <GoogleIcon />
                            </View>
                            <Text className="text-[17px] text-center text-[#242424] opacity-80">
                                Connect Google Calendar
                            </Text>
                        </TouchableOpacity>

                        {/* Show as Online Now */}
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setShowOnlineNow(!showOnlineNow)}
                            className="flex-row items-center space-x-2 pl-1"
                        >
                            <View className="w-[15px] h-[15px]">
                                {showOnlineNow ? (
                                    <View className="w-[15px] h-[15px] rounded-sm bg-[#00A551] items-center justify-center">
                                        <SquareCheckIcon />
                                    </View>
                                ) : (
                                    <View className="w-[15px] h-[15px] rounded-sm bg-white border-[0.5px] border-[#242424]" />
                                )}
                            </View>
                            <Text className="text-base text-[#242424]">Show as "Online now"</Text>
                            <View className="w-4 h-4">
                                <InfoIcon />
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Earnings Calculator */}
                    <View className="rounded-xl bg-green-50 px-3 pt-3 pb-6 space-y-4">
                        <Text className="text-lg font-semibold text-gray-900">Earnings Calculator</Text>
                        <View className="space-y-2">
                            <View className="flex-row justify-between items-start">
                                <Text className="text-sm text-[#242424] opacity-60">30 hours/week × ৳1,500/hr</Text>
                                <Text className="text-sm font-medium text-[#242424]">৳45,000/week</Text>
                            </View>
                            <View className="flex-row justify-between items-center">
                                <Text className="text-sm text-[#242424] opacity-60">Monthly estimate</Text>
                                <Text className="text-sm font-medium text-[#242424]">৳180,000</Text>
                            </View>
                            <View className="flex-row justify-between items-center">
                                <Text className="text-sm text-[#242424] opacity-60">Platform fee (10%)</Text>
                                <Text className="text-sm font-medium text-[#242424]">-৳18,000</Text>
                            </View>
                            <View className="flex-row justify-between items-center pt-1 border-t border-[#F3F4F7]">
                                <Text className="text-base font-bold text-[#00A551]">Your net earnings</Text>
                                <Text className="text-base font-bold text-[#00A551]">৳162,000</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

