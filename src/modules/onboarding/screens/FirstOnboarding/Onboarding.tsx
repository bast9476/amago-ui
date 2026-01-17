import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BUTTON_WIDTH = 275;
const BUTTON_HEIGHT = 48;
const BUTTON_BOTTOM = 60;

export default function FirstOnboardingScreen() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    const handleNext = () => {
        // Navigate to the second onboarding screen
        // @ts-ignore - navigation type will be updated
        navigation.navigate('SecondOnboarding');
    };

    return (
        <View className="flex-1 bg-white relative">
            <StatusBar style="light" />

            {/* Gradient Background SVG */}

            <View className="absolute top-0 left-0 right-0" style={{ height: 310 }}>
                <Svg
                    width={SCREEN_WIDTH}
                    height={310}
                    viewBox="0 0 428 321"
                    preserveAspectRatio="none"
                    className="absolute"
                >
                    <Image
                        source={require('../../assets/shap.png')}
                        style={{
                            width: 240,
                            height: 168,
                        }}
                        className='absolute top-0 right-0 w-full h-full'
                    />
                    <Defs>
                        <LinearGradient id="onboardingGradient" x2="392.543" y2="-202.857" gradientUnits="userSpaceOnUse">
                            <Stop offset="0" stopColor="#07B556" />
                            <Stop offset="1" stopColor="#36D97F" />
                        </LinearGradient>
                    </Defs>
                    <Path
                        d="M428.498 -29H-1V306.272C18.2706 316.155 42.8361 322.175 73.7872 319.54C166.163 311.497 345.689 168.432 428.498 130.832V-29Z"
                        fill="url(#onboardingGradient)"
                    />
                </Svg>

                {/* Logo Image - Semi-transparent overlay */}
                <View
                    className="absolute"
                    style={{
                        left: -3.66,
                        top: 117.34,
                        opacity: 0.4,
                    }}
                >
                    <Image
                        source={require('../../assets/Logo.png')}
                        style={{
                            width: 191.27,
                            height: 216.77,
                        }}
                        resizeMode="contain"
                    />
                </View>
            </View>

            {/* Decorative SVG (white wave) */}
            <View className="absolute" style={{ left: SCREEN_WIDTH * 0.44, top: -30, opacity: 0.2 }}>
                <Svg width={240} height={168} viewBox="0 0 240 168" preserveAspectRatio="none">
                    <Path
                        opacity={0.2}
                        d="M241.178 -29H0C1.19652 19.2727 19.514 65.549 51.6825 101.568C83.8509 137.587 127.776 161.003 175.617 167.637C200.773 152.029 223.339 138.897 241.178 130.741V-29Z"
                        fill="white"
                    />
                </Svg>
            </View>

            {/* Main Content */}
            <View
                className="flex-col items-center justify-start"
                style={{
                    marginTop: 283,
                    paddingHorizontal: 13,
                    width: SCREEN_WIDTH - 26, // Account for padding
                }}
            >
                {/* Image */}
                <Image
                    source={require('../../assets/onboarding-1.png')}
                    style={{
                        width: 326,
                        height: 340,
                        marginBottom: 30,
                        marginTop: -10, // gap-10 = 40px between image and text section
                    }}
                />

                {/* Text and Button Section - This is the area marked in red */}
                <View
                    className="flex-col items-center justify-center"
                    style={{
                        width: '100%',
                        gap: 24, // gap-6 = 24px between title/description and button
                    }}
                >
                    {/* Title and Description */}
                    <View
                        className="flex-col items-center"
                        style={{
                            width: 315,
                            gap: 10, // gap-[13px]
                        }}
                    >
                        <Text className="text-2xl font-bold text-center text-[#242424]">
                            Shop Anything, Anywhere
                        </Text>
                        <Text
                            className="opacity-60 text-sm text-center text-[#242424] leading-5"
                            style={{ width: 314 }}
                        >
                            Browse thousands of products, compare prices, and get fast doorstep delivery with secure,
                            one-tap checkout
                        </Text>
                    </View>

                </View>
            </View>

            {/* Global Next button (aligned across onboarding screens) */}
            <View
                style={{
                    position: 'absolute',
                    bottom: BUTTON_BOTTOM + insets.bottom,
                    left: (SCREEN_WIDTH - BUTTON_WIDTH) / 2,
                    width: BUTTON_WIDTH,
                    height: BUTTON_HEIGHT,
                }}
                className="rounded-[15px] overflow-hidden"
            >
                <Svg width={BUTTON_WIDTH} height={BUTTON_HEIGHT} style={{ position: 'absolute' }}>
                    <Defs>
                        <LinearGradient id="buttonGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <Stop offset="57.95%" stopColor="#07B556" />
                            <Stop offset="100%" stopColor="#36D97F" />
                        </LinearGradient>
                    </Defs>
                    <Rect width={BUTTON_WIDTH} height={BUTTON_HEIGHT} rx={15} fill="url(#buttonGradient)" />
                </Svg>
                <TouchableOpacity
                    onPress={handleNext}
                    activeOpacity={0.8}
                    className="w-full h-full items-center justify-center"
                    style={{ position: 'relative', zIndex: 10 }}
                >
                    <Text className="text-base font-semibold text-center text-white">Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
