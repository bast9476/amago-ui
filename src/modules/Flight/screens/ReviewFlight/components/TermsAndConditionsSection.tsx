import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function TermsAndConditionsSection() {
  const [accepted, setAccepted] = useState(false);

  return (
    <View className="px-5 mt-[50px]">

      <View className="mb-[12px]">
        <Text className="text-[24px] font-semibold text-[#242424] mb-[12px]">Terms & Conditions</Text>
        <View className="flex-row items-center gap-1 flex-wrap">
          <TouchableOpacity>
            <Text className="text-[16px] text-[#00a551]">Fare rules</Text>
          </TouchableOpacity>
          <Text className="text-[16px] text-[#99a1af]">•</Text>
          <TouchableOpacity>
            <Text className="text-[16px] text-[#00a551]">Cancellation & refund</Text>
          </TouchableOpacity>
          <Text className="text-[16px] text-[#99a1af]">•</Text>
          <TouchableOpacity>
            <Text className="text-[16px] text-[#00a551]">Privacy policy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => setAccepted(!accepted)}
        className="rounded-[16px] bg-gray-50 p-5"
      >
        <View className="flex-row gap-3">
          <View
            className={`w-4 h-4 rounded border ${accepted ? 'bg-[#00a551] border-[#00a551]' : 'bg-neutral-200/30 border-neutral-200'
              }`}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 2,
            }}
          >
            {accepted && (
              <View className="flex-1 items-center justify-center">
                <Text className="text-white text-[16px] font-bold">✓</Text>
              </View>
            )}
          </View>
          <Text className="text-[16px] text-[#364153] flex-1" style={{ lineHeight: 22, letterSpacing: 0.2 }}>
            I confirm that all passenger names match their government-issued ID and I agree to the{' '}
            <Text className="font-medium text-[#00a551]">terms of service</Text>, and fare{' '}
            <Text className="font-medium text-[#00a551]">rules</Text>,{' '}
            <Text className="font-medium text-[#00a551]">privacy policy</Text>
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
