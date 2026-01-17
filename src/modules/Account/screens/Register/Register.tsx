import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AccountStackParamList } from '@src/navigation/types';
import { useAppDispatch } from '@src/store/hooks';
import { setProfile } from '@modules/Account/store/exports';

type Nav = NativeStackNavigationProp<AccountStackParamList, 'RegisterScreen'>;

export default function RegisterScreen() {
  const navigation = useNavigation<Nav>();
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneCode] = useState('+880');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleBack = () => navigation.goBack();
  const handleCreateAccount = () => {
    const name = `${firstName} ${lastName}`.trim() || 'New User';
    dispatch(
      setProfile({
        id: `user-${Date.now()}`,
        name,
        email,
        phone: `${phoneCode} ${phoneNumber}`.trim(),
      })
    );
    navigation.navigate('SuccessScreen');
  };
  const handleGoLogin = () => navigation.navigate('LoginScreen');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 28 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Back button */}
        <View className="mb-6 mt-2">
          <TouchableOpacity onPress={handleBack} hitSlop={10} className="w-10 h-10 items-center justify-center">
            <Svg width={25} height={46} viewBox="0 0 25 46" fill="none">
              <Path
                d="M7.79785 21.6699L14.4385 15.0293C14.8975 14.5703 15.6397 14.5703 16.0938 15.0293L17.1973 16.1328C17.6563 16.5918 17.6563 17.334 17.1973 17.7881L12.4951 22.5L17.2022 27.207C17.6611 27.666 17.6611 28.4082 17.2022 28.8623L16.0986 29.9707C15.6397 30.4297 14.8975 30.4297 14.4434 29.9707L7.80274 23.3301C7.33887 22.8711 7.33887 22.1289 7.79785 21.6699Z"
                fill="#00A551"
              />
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View className="mb-8 space-y-1">
          <Text className="text-2xl font-bold text-[#242424]">Create account</Text>
          <Text className="text-xs text-[#242424] opacity-70">
            Get the best out of derleng by creating an account
          </Text>
        </View>

        {/* Form */}
        <View className="space-y-4">
          {/* First name */}
          <View className="space-y-1.5">
            <Text className="text-xs font-medium text-black/80">First name</Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="John"
              placeholderTextColor="#7a7a7a"
              className="w-full h-[52px] rounded-[15px] border border-black/10 px-4 text-xs text-[#242424]"
            />
          </View>

          {/* Last name */}
          <View className="space-y-1.5">
            <Text className="text-xs font-medium text-black/80">Last name</Text>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Doe"
              placeholderTextColor="#7a7a7a"
              className="w-full h-[52px] rounded-[15px] border border-black/10 px-4 text-xs text-[#242424]"
            />
          </View>

          {/* Phone */}
          <View className="space-y-1.5">
            <Text className="text-xs font-medium text-black/80">Phone</Text>
            <View className="flex-row gap-2.5">
              <View className="w-[92px] h-[52px] rounded-[15px] border border-black/10 px-3 flex-row items-center justify-between">
                <Text className="text-sm font-medium text-[#00a551]">{phoneCode}</Text>
                <Svg width={19} height={18} viewBox="0 0 19 18" fill="none">
                  <Path
                    d="M4.72406 6.75H14.2723C14.9328 6.75 15.2631 7.50586 14.7955 7.94883L10.0233 12.4734C9.73382 12.7477 9.26253 12.7477 8.97308 12.4734L4.20081 7.94883C3.73324 7.50586 4.06351 6.75 4.72406 6.75Z"
                    fill="#00A551"
                  />
                </Svg>
              </View>
              <TextInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="123 456 789"
                placeholderTextColor="#7a7a7a"
                keyboardType="phone-pad"
                className="flex-1 h-[52px] rounded-[15px] border border-black/10 px-4 text-xs text-[#242424]"
              />
            </View>
          </View>

          {/* Age */}
          <View className="space-y-1.5">
            <Text className="text-xs font-medium text-black/80">Age</Text>
            <TextInput
              value={age}
              onChangeText={setAge}
              placeholder="30"
              placeholderTextColor="#7a7a7a"
              keyboardType="number-pad"
              className="w-full h-[52px] rounded-[15px] border border-black/10 px-4 text-xs text-[#242424]"
            />
          </View>

          {/* Email */}
          <View className="space-y-1.5">
            <Text className="text-xs font-medium text-black/80">Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="jonhn.ux@gmail.com"
              placeholderTextColor="#7a7a7a"
              keyboardType="email-address"
              autoCapitalize="none"
              className="w-full h-[52px] rounded-[15px] border border-black/10 px-4 text-xs text-[#242424]"
            />
          </View>

          {/* Password */}
          <View className="space-y-1.5">
            <Text className="text-xs font-medium text-black/80">Password</Text>
            <View className="w-full h-[52px] rounded-[15px] border border-black/10 flex-row items-center px-4">
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter password"
                placeholderTextColor="#7a7a7a"
                className="flex-1 text-sm text-[#242424]"
                secureTextEntry={!showPassword}
              />
              <Pressable
                onPress={() => setShowPassword((v) => !v)}
                hitSlop={8}
                className="w-[32px] h-[32px] items-center justify-center"
              >
                <Svg width={17} height={11} viewBox="0 0 17 11" fill="none">
                  <Path
                    d="M16.8973 5.08177C15.2968 2.05076 12.1281 0 8.5 0C4.87185 0 1.70235 2.05219 0.102692 5.08206C0.0351768 5.21168 0 5.3549 0 5.50014C0 5.64539 0.0351768 5.7886 0.102692 5.91823C1.70323 8.94925 4.87185 11 8.5 11C12.1281 11 15.2977 8.94781 16.8973 5.91794C16.9648 5.78832 17 5.6451 17 5.49986C17 5.35461 16.9648 5.2114 16.8973 5.08177ZM8.5 9.625C7.65943 9.625 6.83773 9.38307 6.13882 8.92981C5.43991 8.47655 4.89518 7.83231 4.5735 7.07857C4.25183 6.32482 4.16767 5.49542 4.33165 4.69525C4.49564 3.89508 4.90042 3.16008 5.49479 2.58318C6.08916 2.00629 6.84644 1.61343 7.67086 1.45426C8.49529 1.2951 9.34982 1.37679 10.1264 1.689C10.903 2.00121 11.5668 2.52992 12.0338 3.20827C12.5007 3.88663 12.75 4.68415 12.75 5.5C12.7503 6.04178 12.6405 6.57829 12.427 7.07888C12.2136 7.57947 11.9005 8.03431 11.5058 8.4174C11.1111 8.8005 10.6425 9.10433 10.1267 9.31154C9.61097 9.51875 9.0582 9.62526 8.5 9.625ZM8.5 2.75C8.2471 2.75343 7.99584 2.78995 7.753 2.85857C7.55556 3.20833 7.753 2.85857 7.08333 3.20833C6.84452 3.44012 6.93181 3.40578 6.61111 3.66667C6.27434 3.69139 6.13882 4.125 5.77852 4.77497C5.62362 5.32887 5.65158 5.91596 5.85847 6.45362C6.06535 6.99128 6.44075 7.45244 6.93181 7.77218C7.42287 8.09192 8.00488 8.25414 8.59591 8.23602C9.18694 8.2179 9.75724 8.02034 10.2265 7.67116C10.6958 7.32197 11.0405 6.83874 11.212 6.28948C11.3835 5.74021 11.3732 5.15258 11.1826 4.60928C10.992 4.06598 10.6307 3.59438 10.1494 3.26084C9.6682 2.92731 9.09132 2.74865 8.5 2.75Z"
                    fill={showPassword ? '#07B556' : '#242424'}
                  />
                </Svg>
              </Pressable>
            </View>
          </View>

          {/* Confirm password */}
          <View className="space-y-1.5">
            <Text className="text-xs font-medium text-black/80">Confirm password</Text>
            <View className="w-full h-[52px] rounded-[15px] border border-black/10 flex-row items-center px-4">
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm password"
                placeholderTextColor="#7a7a7a"
                className="flex-1 text-sm text-[#242424]"
                secureTextEntry={!showConfirm}
              />
              <Pressable
                onPress={() => setShowConfirm((v) => !v)}
                hitSlop={8}
                className="w-[32px] h-[32px] items-center justify-center"
              >
                <Svg width={17} height={11} viewBox="0 0 17 11" fill="none">
                  <Path
                    d="M16.8973 5.08177C15.2968 2.05076 12.1281 0 8.5 0C4.87185 0 1.70235 2.05219 0.102692 5.08206C0.0351768 5.21168 0 5.3549 0 5.50014C0 5.64539 0.0351768 5.7886 0.102692 5.91823C1.70323 8.94925 4.87185 11 8.5 11C12.1281 11 15.2977 8.94781 16.8973 5.91794C16.9648 5.78832 17 5.6451 17 5.49986C17 5.35461 16.9648 5.2114 16.8973 5.08177ZM8.5 9.625C7.65943 9.625 6.83773 9.38307 6.13882 8.92981C5.43991 8.47655 4.89518 7.83231 4.5735 7.07857C4.25183 6.32482 4.16767 5.49542 4.33165 4.69525C4.49564 3.89508 4.90042 3.16008 5.49479 2.58318C6.08916 2.00629 6.84644 1.61343 7.67086 1.45426C8.49529 1.2951 9.34982 1.37679 10.1264 1.689C10.903 2.00121 11.5668 2.52992 12.0338 3.20827C12.5007 3.88663 12.75 4.68415 12.75 5.5C12.7503 6.04178 12.6405 6.57829 12.427 7.07888C12.2136 7.57947 11.9005 8.03431 11.5058 8.4174C11.1111 8.8005 10.6425 9.10433 10.1267 9.31154C9.61097 9.51875 9.0582 9.62526 8.5 9.625ZM8.5 2.75C8.2471 2.75343 7.99584 2.78995 7.753 2.85857C7.55556 3.20833 7.753 2.85857 7.08333 3.20833C6.84452 3.44012 6.93181 3.40578 6.61111 3.66667C6.27434 3.69139 6.13882 4.125 5.77852 4.77497C5.62362 5.32887 5.65158 5.91596 5.85847 6.45362C6.06535 6.99128 6.44075 7.45244 6.93181 7.77218C7.42287 8.09192 8.00488 8.25414 8.59591 8.23602C9.18694 8.2179 9.75724 8.02034 10.2265 7.67116C10.6958 7.32197 11.0405 6.83874 11.212 6.28948C11.3835 5.74021 11.3732 5.15258 11.1826 4.60928C10.992 4.06598 10.6307 3.59438 10.1494 3.26084C9.6682 2.92731 9.09132 2.74865 8.5 2.75Z"
                    fill={showConfirm ? '#07B556' : '#242424'}
                  />
                </Svg>
              </Pressable>
            </View>
          </View>

          {/* Terms */}
          <Pressable
            onPress={() => setAcceptedTerms((v) => !v)}
            className="flex-row items-center gap-2.5 pt-2"
          >
            <View
              className={`w-[18px] h-[18px] rounded-[3px] border border-black/30 items-center justify-center ${
                acceptedTerms ? 'bg-[#07B556]' : 'bg-white'
              }`}
            >
              {acceptedTerms && (
                <Svg width={11} height={8} viewBox="0 0 11 8" fill="none">
                  <Path
                    d="M3.73609 7.84288L0.161085 4.35628C-0.0536949 4.14681 -0.0536949 3.80718 0.161085 3.59769L0.938884 2.8391C1.15366 2.62961 1.50193 2.62961 1.71671 2.8391L4.125 5.18782L9.28329 0.157101C9.49807 -0.0523671 9.84634 -0.0523671 10.0611 0.157101L10.8389 0.915689C11.0537 1.12516 11.0537 1.46479 10.8389 1.67428L4.51391 7.8429C4.29911 8.05237 3.95087 8.05237 3.73609 7.84288Z"
                    fill="white"
                  />
                </Svg>
              )}
            </View>
            <Text className="text-xs font-medium text-[#242424]">I accept term and condition</Text>
          </Pressable>
        </View>

        {/* Create account button */}
        <View className="w-full h-[52px] rounded-[15px] overflow-hidden mt-8">
          <Svg width="100%" height="100%" style={{ position: 'absolute' }}>
            <Defs>
              <LinearGradient id="registerBtn" x1="0%" y1="100%" x2="100%" y2="0%">
                <Stop offset="57.95%" stopColor="#07B556" />
                <Stop offset="100%" stopColor="#36D97F" />
              </LinearGradient>
            </Defs>
            <Rect width="100%" height="100%" rx={15} fill="url(#registerBtn)" />
          </Svg>
          <TouchableOpacity
            onPress={handleCreateAccount}
            activeOpacity={0.85}
            className="w-full h-full items-center justify-center"
            style={{ position: 'relative', zIndex: 10 }}
          >
            <Text className="text-sm font-bold text-center text-white">Create Account</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="items-center mt-6 mb-4">
          <TouchableOpacity onPress={handleGoLogin} activeOpacity={0.8}>
            <Text className="text-xs text-center text-black/60">
              Already have an account? <Text className="text-sm font-bold text-[#00a551]">Go back</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
