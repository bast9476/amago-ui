import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { usePaymentReview } from '../hooks';

// Eye slash icon (for delete/backspace)
const EyeSlashIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <G clipPath="url(#clip0_eye)">
      <Path
        d="M8.93823 4.22694C10.8781 3.99576 12.8403 4.40584 14.5253 5.39454C16.2102 6.38325 17.5252 7.89625 18.2696 9.70249C18.339 9.88946 18.339 10.0951 18.2696 10.2821C17.9635 11.0241 17.559 11.7216 17.067 12.3557"
        stroke="#242424"
        strokeWidth={1.66557}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.729 11.7905C11.2578 12.2456 10.6267 12.4974 9.97164 12.4917C9.31658 12.486 8.68996 12.2233 8.22674 11.76C7.76353 11.2968 7.50078 10.6702 7.49509 10.0152C7.4894 9.36009 7.74122 8.72901 8.19631 8.25781"
        stroke="#242424"
        strokeWidth={1.66557}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5562 14.5722C13.4515 15.2266 12.219 15.6357 10.9423 15.7717C9.66551 15.9078 8.37444 15.7676 7.15665 15.3608C5.93885 14.9539 4.82282 14.2898 3.88429 13.4136C2.94576 12.5374 2.20669 11.4696 1.71721 10.2825C1.64781 10.0956 1.64781 9.8899 1.71721 9.70293C2.45559 7.91232 3.75476 6.40947 5.41977 5.41992"
        stroke="#242424"
        strokeWidth={1.66557}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.66553 1.66602L18.3212 18.3217"
        stroke="#242424"
        strokeWidth={1.66557}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_eye">
        <Rect width={19.9868} height={19.9868} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

// X/Close icon
const CloseIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_close)">
      <Path
        d="M20.9862 3.99805H7.99478L0.99939 11.9928L7.99478 19.9875H20.9862C21.5163 19.9875 22.0247 19.7769 22.3995 19.4021C22.7743 19.0273 22.9849 18.5189 22.9849 17.9888V5.99673C22.9849 5.46665 22.7743 4.95827 22.3995 4.58345C22.0247 4.20862 21.5163 3.99805 20.9862 3.99805Z"
        stroke="#242424"
        strokeWidth={1.99868}
      />
      <Path
        d="M17.9881 8.99414L11.9921 14.9902"
        stroke="#242424"
        strokeWidth={1.99868}
      />
      <Path
        d="M11.9921 8.99414L17.9881 14.9902"
        stroke="#242424"
        strokeWidth={1.99868}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_close">
        <Rect width={23.9842} height={23.9842} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default function PinEntrySection() {
  const {
    pinDigits,
    showPin,
    handlePinDigitPress,
    handlePinDelete,
    handleTogglePinVisibility,
    handleForgotPin,
  } = usePaymentReview();

  const row1 = ['1', '2', '3'];
  const row2 = ['4', '5', '6'];
  const row3 = ['7', '8', '9'];

  return (
    <View className="flex-col items-center gap-y-11 mt-4">
      {/* PIN Display Circles */}
      <View className="w-full items-center ml-[60px]">
        <View className="flex-row items-center gap-x-4">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <View
              key={index}
              className={`w-[12px] h-[12px] rounded-full border items-center justify-center ${
                pinDigits[index]
                  ? showPin
                    ? 'border-[#242424]'
                    : 'bg-[#242424] border-[#242424]'
                  : 'border-[#b5b5b5]'
              }`}
            >
              {showPin && pinDigits[index] ? (
                <Text className="text-[8px] font-semibold text-[#242424]">{pinDigits[index]}</Text>
              ) : null}
            </View>
          ))}
        </View>
      </View>

      {/* PIN Pad */}
      <View className="w-full items-center">
        <View
          style={{
            width: 292.17,
            alignSelf: 'center',
          }}
        >
          {/* Row 1: 1, 2, 3 */}
          <View className="flex-row items-center mb-4 gap-x-3">
            {row1.map((num) => (
              <TouchableOpacity
                key={num}
                onPress={() => handlePinDigitPress(num)}
                className="h-[70px] items-center justify-center rounded-[14px] bg-slate-100 w-[35%]"
                activeOpacity={0.7}
              >
                <Text className="text-base font-semibold text-[#242424]">{num}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 2: 4, 5, 6 */}
          <View className="flex-row items-center mb-4 gap-x-3">
            {row2.map((num) => (
              <TouchableOpacity
                key={num}
                onPress={() => handlePinDigitPress(num)}
                className="h-[70px] items-center justify-center rounded-[14px] bg-slate-100 w-[35%]"
                activeOpacity={0.7}
              >
                <Text className="text-base font-semibold text-[#242424]">{num}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 3: 7, 8, 9 */}
          <View className="flex-row items-center mb-4 gap-x-3">
            {row3.map((num) => (
              <TouchableOpacity
                key={num}
                onPress={() => handlePinDigitPress(num)}
                className="h-[70px] items-center justify-center rounded-[14px] bg-slate-100 w-[35%]"
                activeOpacity={0.7}
              >
                <Text className="text-base font-semibold text-[#242424]">{num}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 4: Delete, 0, Clear */}
          <View className="flex-row items-center gap-x-3">
            <TouchableOpacity
              onPress={handleTogglePinVisibility}
              className="h-[70px] items-center justify-center rounded-[14px] bg-slate-100 w-[35%]"
              activeOpacity={0.7}
            >
              <EyeSlashIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePinDigitPress('0')}
              className="h-[70px] items-center justify-center rounded-[14px] bg-slate-100 w-[35%]"
              activeOpacity={0.7}
            >
              <Text className="text-base font-semibold text-[#242424]">0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlePinDelete}
              className="h-[70px] items-center justify-center rounded-[14px] bg-slate-100 w-[35%]"
              activeOpacity={0.7}
            >
              <CloseIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Forgot PIN link */}
      <TouchableOpacity onPress={handleForgotPin}>
        <Text className="w-full text-[15px] font-semibold text-center text-[#00a551] ml-[50px]">Forgot PIN?</Text>
      </TouchableOpacity>
    </View>
  );
}
