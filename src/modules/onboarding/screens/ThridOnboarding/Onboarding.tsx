import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const HEADER_HEIGHT = SCREEN_WIDTH * 0.8;
const CONTENT_OFFSET = SCREEN_WIDTH * 0.78;
const BUTTON_WIDTH = 275;
const BUTTON_HEIGHT = 48;
const BUTTON_BOTTOM = 60;

export default function ThridOnboardingScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const handleNext = () => {
    // After onboarding, go to Account/Login
    // @ts-ignore: navigation typing simplified
    navigation.navigate('Account');
  };

  return (
    <View className="flex-1 bg-white relative">
      <StatusBar style="light" />

      {/* Top gradient background */}
      <View className="absolute top-0 left-0 right-0" style={{ height: HEADER_HEIGHT }}>
        <Svg
          width={SCREEN_WIDTH}
          height={HEADER_HEIGHT}
          viewBox="0 0 428 339"
          preserveAspectRatio="none"
          className="absolute"
        >
          <Defs>
            <LinearGradient id="thirdOnboardingGradient" x1="276.648" y1="112.447" x2="34.9555" y2="-184.857" gradientUnits="userSpaceOnUse">
              <Stop offset="0" stopColor="#07B556" />
              <Stop offset="1" stopColor="#36D97F" />
            </LinearGradient>
          </Defs>
          <Path
            d="M-1.00003 -11H428.498V324.272C409.227 334.155 384.662 340.175 353.711 337.54C261.335 329.497 81.809 186.432 -1.00003 148.832V-11Z"
            fill="url(#thirdOnboardingGradient)"
          />
          {/* Logo overlay (right side) */}
          <Image
            source={require('../../assets/Logo.png')}
            style={{
              width: 191.27,
              height: 216.77,
              position: 'absolute',
              right: 0,
              top: HEADER_HEIGHT * 0.35,
              opacity: 0.4,
            }}
            resizeMode="contain"
          />
          {/* White accent curve (mirrored) */}
          <Path
            opacity={0.2}
            d="M-14 -11H227.178C225.981 37.2727 207.664 83.549 175.496 119.568C143.327 155.587 99.4017 179.003 51.561 185.637C26.4047 170.029 3.83896 156.897 -14 148.741V-11Z"
            fill="white"
          />
        </Svg>
      </View>


      {/* Main Content */}
      <View
        className="flex-col items-center"
        style={{
          marginTop: CONTENT_OFFSET,
          paddingHorizontal: 16,
        }}
      >
        {/* Hero Illustration (replace with onboarding-3.png) */}
        <Image
          source={require('../../assets/onboarding-3.png')}
          style={{
            width: 396.54,
            height: 313,
            marginBottom: 30,
          }}
          resizeMode="contain"
        />

        {/* Text and Button */}
        <View
          className="flex-col items-center"
          style={{
            width: '100%',
            gap: 24,
            paddingHorizontal: 8,
          }}
        >
          <View
            className="flex-col items-center"
            style={{
              width: 315,
              gap: 13,
            }}
          >
            <Text className="text-2xl font-bold text-center text-[#242424]">
              All-in-One Wallet
            </Text>
            <Text
              className="opacity-60 text-sm text-center text-[#242424] leading-5"
              style={{ width: 314 }}
            >
              Send and receive money, pay bills, split costs, and track spending with bank-grade security and real-time alerts.
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
            <LinearGradient id="thirdOnboardingButton" x1="0%" y1="100%" x2="100%" y2="0%">
              <Stop offset="57.95%" stopColor="#07B556" />
              <Stop offset="100%" stopColor="#36D97F" />
            </LinearGradient>
          </Defs>
          <Rect width={BUTTON_WIDTH} height={BUTTON_HEIGHT} rx={15} fill="url(#thirdOnboardingButton)" />
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