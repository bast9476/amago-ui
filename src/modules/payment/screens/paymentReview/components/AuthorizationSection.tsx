import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { usePaymentReview } from '../hooks';
import PinEntrySection from './PinEntrySection';

// Lock Icon
const LockIcon = () => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
    <G clipPath="url(#clip0_lock)">
      <Path
        d="M19.9963 3.33203C17.7866 3.33203 15.6674 4.20984 14.1049 5.77236C12.5423 7.33488 11.6645 9.45411 11.6645 11.6638V14.9966H8.33181C7.44792 14.9966 6.60022 15.3477 5.97522 15.9727C5.35021 16.5977 4.99908 17.4454 4.99908 18.3293V34.9929C4.99908 35.8768 5.35021 36.7245 5.97522 37.3495C6.60022 37.9745 7.44792 38.3256 8.33181 38.3256H31.6609C32.5448 38.3256 33.3925 37.9745 34.0175 37.3495C34.6425 36.7245 34.9936 35.8768 34.9936 34.9929V18.3293C34.9936 17.4454 34.6425 16.5977 34.0175 15.9727C33.3925 15.3477 32.5448 14.9966 31.6609 14.9966H28.3282V11.6638C28.3282 9.45411 27.4503 7.33488 25.8878 5.77236C24.3253 4.20984 22.2061 3.33203 19.9963 3.33203Z"
        stroke="#00A551"
        strokeWidth={3.33273}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_lock">
        <Rect width={39.9927} height={39.9927} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default function AuthorizationSection() {
  const { authType, handleAuthTypeChange, handleUseFaceId } = usePaymentReview();

  return (
    <View className="w-full rounded-2xl bg-white border border-[#f3f4f7] p-5 mt-6">
      <View className="gap-12">
        <View className="gap-[18px]">
          <Text className="text-[17px] font-semibold text-center text-[#242424]">
            Authorize Payment
          </Text>
          <View className="flex-row items-center h-[48px] p-1 rounded-[14px] bg-slate-100">
            <TouchableOpacity
              onPress={() => handleAuthTypeChange('faceId')}
              className={`flex-1 h-[40px] rounded-[10px] items-center justify-center ${
                authType === 'faceId' ? 'bg-white' : ''
              }`}
              style={
                authType === 'faceId'
                  ? {
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.1,
                      shadowRadius: 3,
                      elevation: 2,
                    }
                  : {}
              }
            >
              <Text
                className={`text-base ${authType === 'faceId' ? 'font-medium' : 'font-normal'} text-[#242424]`}
              >
                Face/Touch ID
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleAuthTypeChange('pin')}
              className={`flex-1 h-[40px] rounded-[10px] items-center justify-center ${
                authType === 'pin' ? 'bg-white' : ''
              }`}
              style={
                authType === 'pin'
                  ? {
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.1,
                      shadowRadius: 3,
                      elevation: 2,
                    }
                  : {}
              }
            >
              <Text
                className={`text-base ${authType === 'pin' ? 'font-semibold' : 'font-normal'} text-[#242424]`}
              >
                PIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {authType === 'faceId' ? (
          <View className="items-center">
            <View className="w-20 h-20 items-center justify-center rounded-full bg-green-100">
              <LockIcon />
            </View>
            <TouchableOpacity
              onPress={handleUseFaceId}
              className="w-full h-[50px] mt-6 mb-3 items-center justify-center rounded-[14px] overflow-hidden relative bg-[#00a63e]"
              activeOpacity={0.8}
            >
              <Svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <Defs>
                  <LinearGradient id="faceIdGradient" x1="0%" y1="100%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                    <Stop offset="57.95%" stopColor="#00a63e" />
                    <Stop offset="100%" stopColor="#00c950" />
                  </LinearGradient>
                </Defs>
                <Rect width="100" height="100" rx="14" fill="url(#faceIdGradient)" />
              </Svg>
              <Text className="text-base font-semibold text-white relative z-10">Use Face ID</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <PinEntrySection />
        )}
      </View>
    </View>
  );
}
