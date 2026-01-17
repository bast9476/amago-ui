import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Svg, { Path, Circle } from 'react-native-svg'
import { CurrencyDropdown } from './shared/CurrencyDropdown'
import * as Localization from 'expo-localization'
import { SectionCaret } from './shared/SectionCaret'

const CameraIcon = () => (
    <Svg width={24} height={24} viewBox="0 0 20 20" fill="none">
        <Path
            d="M5.82422 2.53125L5.41797 3.75H2.5C1.12109 3.75 0 4.87109 0 6.25V16.25C0 17.6289 1.12109 18.75 2.5 18.75H17.5C18.8789 18.75 20 17.6289 20 16.25V6.25C20 4.87109 18.8789 3.75 17.5 3.75H14.582L14.1758 2.53125C13.9219 1.76563 13.207 1.25 12.3984 1.25H7.60156C6.79297 1.25 6.07812 1.76563 5.82422 2.53125ZM10 7.5C10.9946 7.5 11.9484 7.89509 12.6517 8.59835C13.3549 9.30161 13.75 10.2554 13.75 11.25C13.75 12.2446 13.3549 13.1984 12.6517 13.9017C11.9484 14.6049 10.9946 15 10 15C9.00544 15 8.05161 14.6049 7.34835 13.9017C6.64509 13.1984 6.25 12.2446 6.25 11.25C6.25 10.2554 6.64509 9.30161 7.34835 8.59835C8.05161 7.89509 9.00544 7.5 10 7.5Z"
            fill="#999999"
        />
    </Svg>
)

const CheckBadgeIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 14 14" fill="none">
        <Path
            d="M7 14C8.86 14 10.64 13.26 11.95 11.95C13.26 10.64 14 8.86 14 7C14 5.14 13.26 3.36 11.95 2.05C10.64 0.74 8.86 0 7 0C5.14 0 3.36 0.74 2.05 2.05C0.74 3.36 0 5.14 0 7C0 8.86 0.74 10.64 2.05 11.95C3.36 13.26 5.14 14 7 14ZM10.09 5.71L6.59 9.21C6.33 9.47 5.92 9.47 5.66 9.21L3.91 7.46C3.66 7.21 3.66 6.79 3.91 6.54C4.17 6.28 4.59 6.28 4.84 6.54L6.12 7.82L9.16 4.79C9.42 4.53 9.83 4.53 10.09 4.79C10.34 5.04 10.34 5.46 10.09 5.71Z"
            fill="#00A551"
        />
    </Svg>
)


const TIMEZONE_LABEL_MAP: Record<string, string> = {
    'America/Los_Angeles': 'GMT-8 (Pacific Time)',
    'America/Vancouver': 'GMT-8 (Pacific Time)',
    'America/New_York': 'GMT-5 (Eastern Time)',
    'America/Toronto': 'GMT-5 (Eastern Time)',
    'UTC': 'GMT+0 (UTC)',
    'Etc/UTC': 'GMT+0 (UTC)',
    'Europe/Berlin': 'GMT+1 (Central Europe)',
    'Europe/Paris': 'GMT+1 (Central Europe)',
    'Asia/Dhaka': 'GMT+6 (Bangladesh)',
}

const BASE_TIMEZONE_OPTIONS = [
    'GMT-8 (Pacific Time)',
    'GMT-5 (Eastern Time)',
    'GMT+0 (UTC)',
    'GMT+1 (Central Europe)',
    'GMT+6 (Bangladesh)',
]

const formatTimezoneLabel = (iana: string) => {
    if (TIMEZONE_LABEL_MAP[iana]) return TIMEZONE_LABEL_MAP[iana]
    return iana.replace(/_/g, ' ')
}

const cardShadow = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
}

export const BasicInfoCard = () => {
    const [bio, setBio] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('Select country')
    const [selectedTimezone, setSelectedTimezone] = useState('Select timezone')
    const [timezoneOptions, setTimezoneOptions] = useState(BASE_TIMEZONE_OPTIONS)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const BIO_LIMIT = 600

    const countryOptions = [
        'Bangladesh',
        'United States',
        'United Kingdom',
        'Canada',
        'Australia',
        'Germany',
    ]

    useEffect(() => {
        const detectedTimezone = Localization.timezone
        if (!detectedTimezone) {
            return
        }

        const friendlyLabel = formatTimezoneLabel(detectedTimezone)
        setSelectedTimezone(friendlyLabel)
        setTimezoneOptions((prev) =>
            prev.includes(friendlyLabel) ? prev : [friendlyLabel, ...prev],
        )
    }, [])

    return (
        <View className="rounded-2xl mt-4 border border-[#f3f4f7] bg-white px-6 py-7" style={cardShadow}>
            <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => setIsCollapsed((prev) => !prev)}
                className="flex-row justify-between items-center"
            >
                <Text className="text-[22px] font-semibold text-[#242424]">Basic Information</Text>
                <SectionCaret collapsed={isCollapsed} />
            </TouchableOpacity>

            {!isCollapsed && (
                <View className="space-y-6 mt-6">
                    <View className="items-center space-y-3">
                        <TouchableOpacity
                            activeOpacity={0.85}
                            className="w-28 h-28 rounded-full bg-gray-100 items-center justify-center relative"
                        >
                            {/* SVG Dotted Border Overlay */}
                            <View style={StyleSheet.absoluteFill} pointerEvents="none">
                                <Svg width={112} height={112}>
                                    <Circle
                                        cx="56"
                                        cy="56"
                                        r="55"
                                        fill="none"
                                        stroke="#bfbfbf"
                                        strokeWidth="2"
                                        strokeDasharray="2, 2"
                                    />
                                </Svg>
                            </View>
                            <CameraIcon />
                        </TouchableOpacity>
                        <View className="items-center space-y-1">
                            <Text className="text-base font-semibold text-[#00a551]">Upload Profile Photo</Text>
                            <Text className="text-sm text-neutral-500">Min 400×400px required</Text>
                        </View>
                    </View>

                    <View className="space-y-2">
                        <Text className="text-base font-medium text-[#242424]">Full Name *</Text>
                        <TextInput
                            className="w-full h-14 rounded-xl border border-[#bfbfbf] bg-white px-4 text-base text-[#242424]"
                            placeholder="Enter your full name"
                            placeholderTextColor="rgba(36,36,36,0.4)"
                        />
                    </View>

                    <View className="flex-row space-x-3">
                        <View className="flex-1">
                            <Text className="text-base font-medium text-[#242424] mb-2">Country *</Text>
                            <CurrencyDropdown
                                value={selectedCountry}
                                options={countryOptions}
                                onChange={setSelectedCountry}
                                containerStyle={{ width: '100%' }}
                                appearance="compact"
                                textColor={selectedCountry === 'Select country' ? '#bfbfbf' : '#242424'}
                            />
                        </View>
                        <View className="flex-1">
                            <Text className="text-base font-medium text-[#242424] mb-2">Timezone *</Text>
                            <CurrencyDropdown
                                value={selectedTimezone}
                                options={timezoneOptions}
                                onChange={setSelectedTimezone}
                                containerStyle={{ width: '100%' }}
                                appearance="compact"
                                textColor={selectedTimezone === 'Select timezone' ? '#bfbfbf' : '#242424'}
                            />
                        </View>
                    </View>

                    <View className="space-y-2">
                        <Text className="text-base font-medium text-[#242424]">Languages</Text>
                        <TouchableOpacity className="h-14 rounded-xl border border-[#bfbfbf] bg-white px-4 justify-center">
                            <TextInput className="text-base text-[#242424] opacity-40" placeholder="Add language" />
                        </TouchableOpacity>
                    </View>

                    <View className="space-y-2">
                        <Text className="text-base font-medium text-[#242424]">Public Profile Name</Text>
                        <TextInput className="h-14 rounded-xl border border-[#bfbfbf] bg-white px-4 text-base text-[#242424]" />
                        <View className="flex-row items-center space-x-2">
                            <CheckBadgeIcon />
                            <Text className="text-base text-[#00a551]">Available</Text>
                        </View>
                    </View>

                    <View className="space-y-2">
                        <Text className="text-base font-medium text-[#242424]">Professional Bio</Text>
                        <TextInput
                            className="h-24 rounded-xl border border-[#bfbfbf] bg-white px-6 py-3 text-lg text-[#242424]"
                            multiline
                            maxLength={BIO_LIMIT}
                            placeholder="Tell clients about your expertise and what makes you unique..."
                            placeholderTextColor="rgba(36,36,36,0.3)"
                            value={bio}
                            onChangeText={setBio}
                        />
                        <View className="flex-row justify-between">
                            <Text className="text-sm text-[#242424] opacity-50">300-600 characters recommended</Text>
                            <Text className="text-sm text-[#242424] opacity-50">
                                {bio.length}/{BIO_LIMIT}
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

