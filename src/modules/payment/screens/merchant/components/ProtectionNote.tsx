import React from 'react';
import { Text, View } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const ShieldIcon = () => (
  <Svg width={31} height={31} viewBox="0 0 31 31" fill="none">
    <Path
      d="M15.0401 1.25391L3.76003 6.26728V13.7873C3.76003 20.7434 8.57286 27.2482 15.0401 28.8274C21.5073 27.2482 26.3202 20.7434 26.3202 13.7873V6.26728L15.0401 1.25391ZM18.9004 20.054L15.0401 17.7354L11.1923 20.054L12.2076 15.6673L8.81099 12.7345L13.298 12.346L15.0401 8.20996L16.7823 12.3335L21.2692 12.722L17.8727 15.6673L18.9004 20.054Z"
      fill="url(#paint0_linear)"
    />
    <Defs>
      <LinearGradient id="paint0_linear" x1="11.7362" y1="11.0026" x2="30.8476" y2="-4.63393" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#07B556" />
        <Stop offset={1} stopColor="#36D97F" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default function ProtectionNote() {
  return (
    <View className="mt-[50px] flex-row items-center">
      <View className="mr-[10px]">
        <ShieldIcon />
      </View>
      <Text className="text-[15px] font-medium text-[#595959] flex-1">
        Payments to verified merchants are protected.
      </Text>
    </View>
  );
}
