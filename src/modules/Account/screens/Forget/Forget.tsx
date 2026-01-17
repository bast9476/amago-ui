import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

export default function ForgetScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');

  const handleRequestCode = () => {
    navigation.navigate('ResetPasswordScreen' as never);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 24, paddingTop: 12 }}
        showsVerticalScrollIndicator={false}
      >

        {/* Back button */}
        <View className="mb-6">
          <TouchableOpacity onPress={handleBack} hitSlop={10} className="w-10 h-10 items-center justify-center">
            <Svg width={25} height={46} viewBox="0 0 25 46" fill="none">
              <Path
                d="M7.79785 21.6699L14.4385 15.0293C14.8975 14.5703 15.6397 14.5703 16.0938 15.0293L17.1973 16.1328C17.6563 16.5918 17.6563 17.334 17.1973 17.7881L12.4951 22.5L17.2022 27.207C17.6611 27.666 17.6611 28.4082 17.2022 28.8623L16.0986 29.9707C15.6397 30.4297 14.8975 30.4297 14.4434 29.9707L7.80274 23.3301C7.33887 22.8711 7.33887 22.1289 7.79785 21.6699Z"
                fill="#00A551"
              />
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Logo and text */}
        <View className="mt-6 space-y-4">
          <Image
            source={require('../../assets/logo.png')}
            className="w-[97px] h-[101px]"
            resizeMode="contain"
          />
          <View className="space-y-[5px]" style={{ width: '100%' }}>
            <Text className="text-xl font-semibold text-left text-[#242424]">Forget password</Text>
            <Text className="opacity-90 text-left text-black/60 text-[13px]">
              Enter your email or phone we will send the verification {'\n'}code to reset your password
            </Text>
          </View>
        </View>

        {/* Input */}
        <View className="mt-6 space-y-2.5">
          <View className="w-full h-[52px] rounded-[15px] border border-black/10 flex-row items-center px-4">
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="jonhn.ux@gmail.com"
              placeholderTextColor="rgba(36,36,36,0.4)"
              className="flex-1 text-xs font-medium text-left text-[#242424]"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity>
            <Text className="text-xs font-medium text-left text-[#00a551]">Reset with phone number</Text>
          </TouchableOpacity>
        </View>

        {/* Request code button */}
        <View className="w-full h-[52px] rounded-[15px] overflow-hidden mt-6">
          <Svg width="100%" height="100%" style={{ position: 'absolute' }}>
            <Defs>
              <LinearGradient id="forgetBtn" x1="0%" y1="100%" x2="100%" y2="0%">
                <Stop offset="57.95%" stopColor="#07B556" />
                <Stop offset="100%" stopColor="#36D97F" />
              </LinearGradient>
            </Defs>
            <Rect width="100%" height="100%" rx={15} fill="url(#forgetBtn)" />
          </Svg>
          <TouchableOpacity
            onPress={handleRequestCode}
            activeOpacity={0.85}
            className="w-full h-full items-center justify-center"
            style={{ position: 'relative', zIndex: 10 }}
          >
            <Text className="text-sm font-bold text-center text-white">Request code</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}