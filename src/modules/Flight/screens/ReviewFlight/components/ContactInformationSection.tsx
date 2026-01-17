import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function ContactInformationSection() {
  return (
    <View className="mx-4 mt-[30px]">
      <Text className="text-[22px] font-semibold text-[#242424] mb-[20px]">Contact Information</Text>

      <View
        className="rounded-2xl bg-white p-[18px] border border-neutral-200"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
        }}
      >

        {/* Country Code */}
        <View className="gap-2">
          <View className="flex-row items-center gap-1">
            <Text className="text-[16px] font-medium text-[#242424]">Country Code</Text>
            <Text className="text-sm text-[#fb2c36]">*</Text>
          </View>
          <TouchableOpacity className="h-10 px-3 flex-row justify-between items-center rounded-[16px] bg-neutral-200/30 border border-neutral-200">
            <Text className="text-sm text-[#242424]">🇧🇩 +880</Text>
            <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <Path
                d="M3.99756 5.99609L7.99492 9.99345L11.9923 5.99609"
                stroke="#737373"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.5}
              />
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Phone Number */}
        <View className="gap-2 mt-[5px]">
          <View className="flex-row items-center gap-1">
            <Text className="text-[16px] font-medium text-[#242424]">Phone Number</Text>
            <Text className="text-[13px] text-[#fb2c36]">*</Text>
          </View>
          <TextInput
            className="h-9 px-3 py-1 rounded-[16px] bg-[#465a7e]/40 border border-neutral-200 text-base"
            placeholder="09412824"
            placeholderTextColor="#999"
          />
          <Text className="text-[15.5px] text-[#868686]">For booking updates and flight notifications</Text>
        </View>

        {/* Email Address */}
        <View className="gap-2 mt-[5px] mb-[5px]">
          <View className="flex-row items-center gap-1">
            <Text className="text-[16px] font-medium text-[#242424]">Email Address</Text>
            <Text className="text-[13px] text-[#fb2c36]">*</Text>
          </View>
          <TextInput
            className="h-9 px-3 py-1 rounded-[16px] bg-[#465a7e]/40 border border-neutral-200 text-base"
            placeholder="loremipsum22@gmail.com"
            placeholderTextColor="#999"
          />
          <Text className="text-[15.5px] text-[#868686]">E-ticket will be sent to this address</Text>
        </View>
      </View>

      {/* Special Services */}
      <TouchableOpacity className="flex-row justify-between items-center mt-[25px]">
        <Text className="text-[16px] font-medium text-[#242424]">Special Services & Accessibility</Text>
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
          <Path
            d="M3.99756 5.99609L7.99492 9.99345L11.9923 5.99609"
            stroke="#242424"
            strokeWidth={1.33245}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}
