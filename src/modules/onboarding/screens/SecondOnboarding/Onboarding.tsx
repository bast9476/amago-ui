import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const HEADER_HEIGHT = SCREEN_WIDTH * 0.38; // maintain aspect from 428x161
const CONTENT_OFFSET = SCREEN_WIDTH * 0.7; // push content below the header curve
const HERO_WIDTH = SCREEN_WIDTH * 0.78;
const HERO_HEIGHT = HERO_WIDTH * 1.02;
const BUTTON_WIDTH = 275;
const BUTTON_HEIGHT = 48;
const BUTTON_BOTTOM = 60;

export default function SecondOnboardingScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const handleNext = () => {
    // @ts-ignore: navigation type not wired for demo
    navigation.navigate('ThridOnboarding');
  };

  return (
    <View className="flex-1 bg-white relative">
      <StatusBar style="light" />

      {/* Top gradient background */}
      <View className="absolute top-0 left-0 right-0" style={{ height: HEADER_HEIGHT }}>
        <Svg
          width={SCREEN_WIDTH}
          height={HEADER_HEIGHT}
          viewBox="0 0 428 161"
          preserveAspectRatio="none"
          className="absolute"
        >
          <Defs>
            <LinearGradient id="secondOnboardingGradient" x1="150.726" y1="48.8546" x2="234.778" y2="-160.88" gradientUnits="userSpaceOnUse">
              <Stop offset="0" stopColor="#07B556" />
              <Stop offset="1" stopColor="#36D97F" />
            </LinearGradient>
          </Defs>
          <Path
            d="M428.374 -12H-1.12402V126.755C21.6007 102.604 81.5714 37.3922 209.898 45.7302C326.908 53.3185 374.812 106.664 428.374 160.123V-12Z"
            fill="url(#secondOnboardingGradient)"
          />
          {/* White accent curve */}
          <Path
            opacity={0.2}
            d="M87 -12H-1V127C12.5 113 33 90 68.6089 71.8339C79.3642 45.4469 85.6041 17.0031 87 -12Z"
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
        {/* Hero Illustration (replace with actual travel asset when available) */}
        <Image
          source={require('../../assets/onboarding-2.png')}
          style={{
            width: 399,
            height: 330,
            marginBottom: 40,
          }}
          resizeMode="contain"
        />

        {/* Text and Button */}
        <View
          className="flex-col items-center"
          style={{
            width: '100%',
            gap: 30,
            paddingHorizontal: 8,
          }}
        >
          <View
            className="flex-col items-center"
            style={{
              width: 315,
              gap: 10,
            }}
          >
            <Text className="text-2xl font-bold text-center text-[#242424]">
              Book Flights, Hotels &amp; Tours
            </Text>
            <Text
              className="opacity-60 text-sm text-center text-[#242424]"
              style={{ width: 314 }}
            >
              Plan complete trips in minutes—live prices, flexible dates, trusted reviews, and instant confirmations
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
            <LinearGradient id="secondOnboardingButton" x1="0%" y1="100%" x2="100%" y2="0%">
              <Stop offset="57.95%" stopColor="#07B556" />
              <Stop offset="100%" stopColor="#36D97F" />
            </LinearGradient>
          </Defs>
          <Rect width={BUTTON_WIDTH} height={BUTTON_HEIGHT} rx={15} fill="url(#secondOnboardingButton)" />
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
