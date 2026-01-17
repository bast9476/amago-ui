import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect, G, ClipPath } from 'react-native-svg';

export default function DiscountsAndOptionsSection() {
  const [promoCode, setPromoCode] = useState('');
  const [holdFare, setHoldFare] = useState(true);

  return (
    <View className="mx-4 mt-[40px]">
      <Text className="text-[24px] font-bold text-[#242424]">Discounts & Options</Text>

      <View className="gap-3 mt-[7px]">
        {/* Promo Code */}
        <View
          className="rounded-2xl bg-white border border-neutral-200 p-3"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 2,
          }}
        >
          <View className="gap-3">
            <View className="flex-row items-center gap-2">
              <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                <G clipPath="url(#clip0_promo)">
                  <Path
                    d="M8.38519 1.72244C8.13537 1.47254 7.79651 1.33211 7.44315 1.33203H2.66497C2.31158 1.33203 1.97267 1.47241 1.72279 1.7223C1.4729 1.97218 1.33252 2.3111 1.33252 2.66448V7.44266C1.33259 7.79602 1.47303 8.13488 1.72293 8.38471L7.52176 14.1835C7.82457 14.4844 8.23412 14.6533 8.66101 14.6533C9.0879 14.6533 9.49745 14.4844 9.80026 14.1835L14.184 9.79977C14.4849 9.49696 14.6538 9.08741 14.6538 8.66052C14.6538 8.23364 14.4849 7.82408 14.184 7.52128L8.38519 1.72244Z"
                    stroke="#242424"
                    strokeWidth={1.33245}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M4.99669 5.33029C5.18066 5.33029 5.3298 5.18115 5.3298 4.99718C5.3298 4.8132 5.18066 4.66406 4.99669 4.66406C4.81271 4.66406 4.66357 4.8132 4.66357 4.99718C4.66357 5.18115 4.81271 5.33029 4.99669 5.33029Z"
                    fill="#242424"
                    stroke="#242424"
                    strokeWidth={1.33245}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_promo">
                    <Rect width={15.9894} height={15.9894} fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
              <Text className="text-[16px] font-medium text-[#242424]">Promo Code</Text>
            </View>
            <View className="flex-row gap-2">
              <TextInput
                className="flex-1 h-9 px-3 py-1 rounded-[16px] bg-neutral-200/30 border border-neutral-200 text-base text-[19px]"
                placeholder="Enter code"
                placeholderTextColor="#848484"
                value={promoCode}
                onChangeText={setPromoCode}
              />
              <TouchableOpacity
                className="w-[65px] h-[36px] rounded-[7px] items-center justify-center"
                style={{ position: 'relative' }}
              >
                <Svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}
                  pointerEvents="none"
                >
                  <Defs>
                    <LinearGradient id="applyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <Stop offset="0%" stopColor="#07B556" />
                      <Stop offset="100%" stopColor="#36D97F" />
                    </LinearGradient>
                  </Defs>
                  <Rect width="100" height="100" rx={7} fill="url(#applyGrad)" />
                </Svg>
                <Text className="text-[16px] font-semibold text-white relative z-10">Apply</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-[16px] text-[#7b7b7b]">Try: SAVE10 or FIRST20</Text>
          </View>
        </View>

        {/* Hold My Fare */}
        <View
          className="rounded-2xl bg-white border border-neutral-200 p-4"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 2,
          }}
        >
          <View>
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center gap-2">
                <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                  <G clipPath="url(#clip0_hold)">
                    <Path
                      d="M7.99463 3.99805V7.99541L10.6595 9.32786"
                      stroke="#242424"
                      strokeWidth={1.33245}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M7.99478 14.6566C11.6743 14.6566 14.657 11.6738 14.657 7.9943C14.657 4.31483 11.6743 1.33203 7.99478 1.33203C4.31532 1.33203 1.33252 4.31483 1.33252 7.9943C1.33252 11.6738 4.31532 14.6566 7.99478 14.6566Z"
                      stroke="#242424"
                      strokeWidth={1.33245}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </G>
                  <Defs>
                    <ClipPath id="clip0_hold">
                      <Rect width={15.9894} height={15.9894} fill="white" />
                    </ClipPath>
                  </Defs>
                </Svg>
                <Text className="text-[16px] font-medium text-[#242424]">Hold My Fare</Text>
              </View>
              <TouchableOpacity
                onPress={() => setHoldFare(!holdFare)}
                className={`w-9 h-5 rounded-full border border-neutral-200 ${
                  holdFare ? 'bg-neutral-200/80' : 'bg-neutral-200/30'
                }`}
              >
                <View
                  className={`w-4 h-4 rounded-full absolute ${
                    holdFare ? 'right-0.5' : 'left-0.5'
                  }`}
                  style={{
                    backgroundColor: holdFare ? '#999' : '#07B556',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                    elevation: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text className="text-[17px] mt-[18px] text-[#7b7b7b]">Lock this price for 24 hours while you decide</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
