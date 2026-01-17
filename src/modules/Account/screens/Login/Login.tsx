import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Defs, LinearGradient, Stop, Rect, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
export default function LoginScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: hook up to real auth
  };

  const handleCreateAccount = () => {
    // @ts-ignore navigation typing simplified
    navigation.navigate('RegisterScreen');
  };

  const handleForgotPassword = () => {
    // @ts-ignore navigation typing simplified
    navigation.navigate('ForgetScreen');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >

        {/* Logo & title */}
        <View className="items-center mb-8 space-y-5">
          <Image
            source={require('../../assets/logo.png')}
            className="w-[115px] h-[120px]"
            resizeMode="contain"
          />
          <View className="items-center space-y-1">
            <Text className="text-[28px] font-bold text-center text-[#242424]">
              Welcome to Amaago
            </Text>
            <Text className="opacity-70 text-sm text-center text-[#242424]">
              Please choose your login option below
            </Text>
          </View>
        </View>

        {/* Form */}
        <View className="space-y-5">
          <View className="space-y-1.5">
              <Text className="text-xs font-medium text-black/60">Email</Text>
              <TextInput
              value={email}
              onChangeText={setEmail}
                placeholder="Enter your email address"
              placeholderTextColor="#7a7a7a"
              className="w-full h-[52px] rounded-[15px] border border-black/10 px-4 text-sm text-[#242424]"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

          <View className="space-y-1.5">
              <Text className="text-xs font-medium text-black/60">Password</Text>
            <View className="w-full h-[52px] rounded-[15px] border border-black/10 flex-row items-center px-4">
                <TextInput
                value={password}
                onChangeText={setPassword}
                  placeholder="Enter your password"
                placeholderTextColor="#7a7a7a"
                  className="flex-1 text-sm text-[#242424]"
                secureTextEntry={!showPassword}
                />
              <Pressable
                onPress={() => setShowPassword((prev) => !prev)}
                hitSlop={8}
                className="w-[32px] h-[32px] items-center justify-center"
              >
                <Svg
                  width={19}
                  height={19}
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <Path
                    d="M16.8973 9.58177C15.2968 6.55076 12.1281 4.5 8.5 4.5C4.87185 4.5 1.70235 6.55219 0.102692 9.58206C0.0351768 9.71168 0 9.8549 0 10.0001C0 10.1454 0.0351768 10.2886 0.102692 10.4182C1.70323 13.4492 4.87185 15.5 8.5 15.5C12.1281 15.5 15.2977 13.4478 16.8973 10.4179C16.9648 10.2883 17 10.1451 17 9.99986C17 9.85461 16.9648 9.7114 16.8973 9.58177ZM8.5 14.125C7.65943 14.125 6.83773 13.8831 6.13882 13.4298C5.43991 12.9766 4.89518 12.3323 4.5735 11.5786C4.25183 10.8248 4.16767 9.99542 4.33165 9.19525C4.49564 8.39508 4.90042 7.66008 5.49479 7.08318C6.08916 6.50629 6.84644 6.11343 7.67086 5.95426C8.49529 5.7951 9.34982 5.87679 10.1264 6.189C10.903 6.50121 11.5668 7.02992 12.0338 7.70827C12.5007 8.38663 12.75 9.18415 12.75 10C12.7503 10.5418 12.6405 11.0783 12.427 11.5789C12.2136 12.0795 11.9005 12.5343 11.5058 12.9174C11.1111 13.3005 10.6425 13.6043 10.1267 13.8115C9.61097 14.0187 9.0582 14.1253 8.5 14.125ZM8.5 7.25C8.2471 7.25343 7.99584 7.28995 7.753 7.35857C7.55556 7.70833 7.753 7.35857 7.08333 7.70833C6.84452 7.94012 6.93181 7.90578 6.61111 8.16667C6.27434 8.19139 6.13882 8.625 5.77852 9.27497C5.62362 9.82887 5.65158 10.416 5.85847 10.9536C6.06535 11.4913 6.44075 11.9524 6.93181 12.2722C7.42287 12.5919 8.00488 12.7541 8.59591 12.736C9.18694 12.7179 9.75724 12.5203 10.2265 12.1712C10.6958 11.822 11.0405 11.3387 11.212 10.7895C11.3835 10.2402 11.3732 9.65258 11.1826 9.10928C10.992 8.56598 10.6307 8.09438 10.1494 7.76084C9.6682 7.42731 9.09132 7.24865 8.5 7.25Z"
                    fill={showPassword ? '#07B556' : "url(#paint0_linear_11_18982)"}
                  />
                  <Defs>
                    <LinearGradient
                      id="paint0_linear_11_18982"
                      x1="6.01041"
                      y1="8.38909"
                      x2="13.1056"
                      y2="-2.57624"
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#07B556" />
                      <Stop offset="1" stopColor="#36D97F" />
                    </LinearGradient>
                  </Defs>
                </Svg>
              </Pressable>
            </View>
            <TouchableOpacity className="mt-1" onPress={handleForgotPassword}>
              <Text className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#00a551]">Forgot password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button with gradient */}
          <View className="w-full h-[52px] rounded-[15px] overflow-hidden mt-1">
            <Svg width="100%" height="100%" style={{ position: 'absolute' }}>
              <Defs>
                <LinearGradient id="loginBtn" x1="0%" y1="100%" x2="100%" y2="0%">
                  <Stop offset="57.95%" stopColor="#07B556" />
                  <Stop offset="100%" stopColor="#36D97F" />
                </LinearGradient>
              </Defs>
              <Rect width="100%" height="100%" rx={15} fill="url(#loginBtn)" />
            </Svg>
          <TouchableOpacity
              onPress={handleLogin}
            activeOpacity={0.85}
              className="w-full h-full items-center justify-center"
              style={{ position: 'relative', zIndex: 10 }}
          >
              <Text className="text-sm font-bold text-center text-white">Login</Text>
          </TouchableOpacity>
          </View>
        </View>

        {/* Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-black/10" />
          <Text className="mx-3 text-sm font-medium text-center text-black/60">Or login with</Text>
          <View className="flex-1 h-px bg-black/10" />
        </View>

        {/* Social buttons */}
        <View className="space-y-2.5">
          <View className="flex-row gap-2">
            <TouchableOpacity className="flex-1 flex-row items-center justify-center h-[52px] rounded-[15px] bg-white border border-black/10 px-4">
              <Image
                source={require('../../assets/Facebook.png')}
                className="w-[18px] h-[18px] mr-2"
                resizeMode="contain"
              />
              <Text className="text-xs text-center text-[#242424]">Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 flex-row items-center justify-center h-[52px] rounded-[15px] bg-white border border-black/10 px-4">
              <Image
                source={require('../../assets/google.png')}
                className="w-[18px] h-[18px] mr-2"
                resizeMode="contain"
              />
              <Text className="text-xs text-center text-[#242424]">Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 flex-row items-center justify-center h-[52px] rounded-[15px] bg-white border border-black/10 px-4">
              <Image
                source={require('../../assets/Apple.png')}
                className="w-[18px] h-[18px] mr-2"
                resizeMode="contain"
              />
              <Text className="text-xs text-center text-[#242424]">Apple</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View className="items-center mt-14 mb-6">
          <TouchableOpacity onPress={handleCreateAccount} activeOpacity={0.8}>
            <Text className="text-[12px] text-center">
          <Text className="text-xs font-medium text-black/40">Doesn’t have account on Amago? </Text>
              <Text className="text-xs font-bold text-[#07B556]">Create Account</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}