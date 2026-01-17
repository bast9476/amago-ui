import React, { useEffect, useMemo } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AccountStackParamList } from '@src/navigation/types';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { bootstrapAccount, selectAccountInitialized, selectAccountProfile } from '../../store/exports';

type Nav = NativeStackNavigationProp<AccountStackParamList, 'SuccessScreen'>;

export default function SuccessScreen() {
  const navigation = useNavigation<Nav>();
  const { width, height } = Dimensions.get('window');
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectAccountProfile);
  const initialized = useAppSelector(selectAccountInitialized);

  // Match the Figma spacing: ~150 top/bottom and tighter stack gap
  const topGap = Math.max(height * 0.17, 150);
  const bottomGap = Math.max(height * 0.17, 150);
  const stackGap = 10;

  useEffect(() => {
    if (!initialized) {
      // Cast for thunk compatibility with typed dispatch
      dispatch(bootstrapAccount() as any);
    }
  }, [initialized, dispatch]);

  const helperText = useMemo(() => {
    if (profile?.name) {
      return `After this you can explore any place you want, ${profile.name}!`;
    }
    return 'After this you can explore any place you want enjoy it!';
  }, [profile?.name]);

  const handleExplore = () => {
    navigation.navigate('Home' as never);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#07B556]">
      <StatusBar style="light" />

      <View className="absolute inset-0">
        <Svg width={width} height={height}>
          <Defs>
            <LinearGradient id="successBg" x1="0%" y1="100%" x2="100%" y2="0%">
              <Stop offset="57.95%" stopColor="#07B556" />
              <Stop offset="124.21%" stopColor="#36D97F" />
            </LinearGradient>
          </Defs>
          <Rect width={width} height={height} fill="url(#successBg)" />
        </Svg>
      </View>

      <View className="flex-1 px-10">
        <View style={{ paddingTop: topGap, gap: stackGap }} className="flex-1 items-center">
          <View className="items-center" style={{ gap: stackGap, maxWidth: 295 }}>
            <Image
              source={require('../../assets/logo-2.png')}
              className="w-[114px] h-[119px]"
              resizeMode="contain"
            />
            <View className="items-center space-y-1">
              <Text className="text-[35px] font-bold text-center text-white">Successfully</Text>
              <Text className="text-[32px] font-semibold text-center text-white leading-tight">
                created an account
              </Text>
            </View>
            <Text className="text-[16px] opacity-90 text-center text-white leading-[18px]">
              {helperText}
            </Text>
          </View>
        </View>

        <View style={{ paddingBottom: bottomGap }} className="w-full">
          <View className="w-full h-[60px] rounded-[15px] overflow-hidden">
            <TouchableOpacity
              onPress={handleExplore}
              activeOpacity={0.85}
              className="w-full h-full items-center justify-center bg-white rounded-[15px]"
            >
              <Text className="text-base font-semibold text-center text-[#242424]">Let’s Explore</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
