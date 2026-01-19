import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function ScanQrButton() {
  return (
    <TouchableOpacity className="w-full rounded-[14px] mt-9 border border-[#cad5e2] px-4 py-4">
      <View className="flex-row items-center justify-center gap-3">
        <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
          <Path d="M6.14138 2.63281H3.50936C3.02482 2.63281 2.63202 3.02561 2.63202 3.51015V6.14217C2.63202 6.62671 3.02482 7.01951 3.50936 7.01951H6.14138C6.62592 7.01951 7.01872 6.62671 7.01872 6.14217V3.51015C7.01872 3.02561 6.62592 2.63281 6.14138 2.63281Z" stroke="#242424" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M17.5468 2.63281H14.9148C14.4302 2.63281 14.0374 3.02561 14.0374 3.51015V6.14217C14.0374 6.62671 14.4302 7.01951 14.9148 7.01951H17.5468C18.0313 7.01951 18.4241 6.62671 18.4241 6.14217V3.51015C18.4241 3.02561 18.0313 2.63281 17.5468 2.63281Z" stroke="#242424" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M6.14138 14.0391H3.50936C3.02482 14.0391 2.63202 14.4319 2.63202 14.9164V17.5484C2.63202 18.033 3.02482 18.4258 3.50936 18.4258H6.14138C6.62592 18.4258 7.01872 18.033 7.01872 17.5484V14.9164C7.01872 14.4319 6.62592 14.0391 6.14138 14.0391Z" stroke="#242424" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M18.4241 14.0391H15.7921C15.3268 14.0391 14.8804 14.2239 14.5514 14.553C14.2223 14.8821 14.0374 15.3284 14.0374 15.7937V18.4258" stroke="#242424" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M18.4241 18.4238V18.4317" stroke="#242424" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M10.5281 6.14453V8.77655C10.5281 9.24192 10.3432 9.68823 10.0142 10.0173C9.68509 10.3464 9.23878 10.5312 8.77341 10.5312H6.14139" stroke="#242424" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M2.63202 10.5293H2.63994" stroke="#242424" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M10.5281 2.63281H10.536" stroke="#242424" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M10.5281 14.0391V14.047" stroke="#242424" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M14.0374 10.5293H14.9148" stroke="#242424" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M18.4241 10.5293V10.5372" stroke="#242424" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M10.5281 18.4242V17.5469" stroke="#242424" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
        <Text className="text-[16px] font-medium text-[#242424]">Scan QR Code</Text>
      </View>
    </TouchableOpacity>
  );
}
