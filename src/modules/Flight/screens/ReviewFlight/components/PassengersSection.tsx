import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function PassengersSection() {
  const [passengerCount] = useState(1);
  const [gender, setGender] = useState('Male');
  const [nationality, setNationality] = useState('Bangladesh');
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [showNationalityOptions, setShowNationalityOptions] = useState(false);
  const genderOptions = ['Male', 'Female', 'Other'];
  const nationalityOptions = ['Bangladesh', 'India', 'Pakistan', 'Nepal', 'Sri Lanka'];

  return (
    <View className="mx-4 mt-[55px]">
      {/* Section Header */}
      <View className="flex-row justify-between items-center mb-[22px]">
        <View className="flex-row items-center gap-2">
          <Text className="text-[22px] font-semibold text-[#242424]">Passengers</Text>
          <View className="px-2 py-0.5 rounded-[7px] bg-[#00a551] border border-neutral-200">
            <Text className="text-[13px] text-white">{passengerCount}/{passengerCount}</Text>
          </View>
        </View>
        <TouchableOpacity className="flex-row items-center px-8 py-2 rounded-[7px] bg-neutral-200/30 border border-neutral-200">
          <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" className="mr-[5px]">
            <Path
              d="M10.6597 13.9915V12.659C10.6597 11.9523 10.3789 11.2744 9.87916 10.7747C9.37939 10.2749 8.70156 9.99414 7.99478 9.99414H3.99743C3.29065 9.99414 2.61282 10.2749 2.11305 10.7747C1.61329 11.2744 1.33252 11.9523 1.33252 12.659V13.9915"
              stroke="#00A551"
              strokeWidth={1.33245}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M5.99596 7.32786C7.46775 7.32786 8.66087 6.13474 8.66087 4.66295C8.66087 3.19117 7.46775 1.99805 5.99596 1.99805C4.52417 1.99805 3.33105 3.19117 3.33105 4.66295C3.33105 6.13474 4.52417 7.32786 5.99596 7.32786Z"
              stroke="#00A551"
              strokeWidth={1.33245}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M12.6582 5.33008V9.32744"
              stroke="#00A551"
              strokeWidth={1.33245}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M14.657 7.32812H10.6597"
              stroke="#00A551"
              strokeWidth={1.33245}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <Text className="text-[15px] font-medium text-[#00a551]">Add More</Text>
        </TouchableOpacity>
      </View>

      {/* Passenger Form Card */}
      <View
        className="rounded-2xl bg-white border border-neutral-200 p-[15px]"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        {/* Passenger Header */}
        <View className="flex-row justify-between px-[10px] items-center mb-6">
          <Text className="text-[20px] font-medium text-[#242424]">Passenger 1 • Adult</Text>
          <TouchableOpacity className="px-3 py-1.5 rounded-[6px] bg-[#f8f8f8] border border-neutral-200">
            <View className="flex-row items-center gap-1">
              <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
                <Path
                  d="M1.71533 4.00221V2.85853C1.71533 2.5552 1.83583 2.2643 2.05031 2.04982C2.26479 1.83534 2.55569 1.71484 2.85901 1.71484H4.0027"
                  stroke="#00A551"
                  strokeWidth={1.14368}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M9.72119 1.71484H10.8649C11.1682 1.71484 11.4591 1.83534 11.6736 2.04982C11.8881 2.2643 12.0086 2.5552 12.0086 2.85853V4.00221"
                  stroke="#00A551"
                  strokeWidth={1.14368}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M12.0086 9.7207V10.8644C12.0086 11.1677 11.8881 11.4586 11.6736 11.6731C11.4591 11.8876 11.1682 12.0081 10.8649 12.0081H9.72119"
                  stroke="#00A551"
                  strokeWidth={1.14368}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M4.0027 12.0081H2.85901C2.55569 12.0081 2.26479 11.8876 2.05031 11.6731C1.83583 11.4586 1.71533 11.1677 1.71533 10.8644V9.7207"
                  stroke="#00A551"
                  strokeWidth={1.14368}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M4.00293 6.86133H9.72134"
                  stroke="#00A551"
                  strokeWidth={1.14368}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text className="text-[14px] font-medium text-[#00a551]">Scan Passport</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View className="mt-[25px] mb-[15px]">
          {/* First Name */}
          <View className="gap-2">
            <View className="flex-row items-center gap-1">
              <Text className="text-[15px] font-medium text-[#242424]">First Name</Text>
              <Text className="text-[13px] text-[#fb2c36]">*</Text>
            </View>
            <TextInput
              className="h-9 px-3 py-1 rounded-[16px] bg-[#465a7e]/40 border border-neutral-200 text-base"
              placeholder="Lorem"
              placeholderTextColor="#969696"
            />
            <Text className="text-[15px] text-[#979797]">Must match government-issued ID</Text>
          </View>

          {/* Last Name */}
          <View className="gap-2 mt-[10px]">
            <View className="flex-row items-center gap-1">
              <Text className="text-[16px] font-medium text-[#242424]">Last Name</Text>
              <Text className="text-[13px] text-[#fb2c36]">*</Text>
            </View>
            <TextInput
              className="h-9 px-3 py-1 rounded-[16px] bg-[#465a7e]/40 border border-neutral-200 text-base"
              placeholder="impsum"
              placeholderTextColor="#969696"
            />
          </View>

          {/* Date of Birth */}
          <View className="gap-2 mt-[5px]">
            <View className="flex-row items-center gap-1">
              <Text className="text-[16px] font-medium text-[#242424]">Date of Birth</Text>
              <Text className="text-[13px] text-[#fb2c36]">*</Text>
            </View>
            <TouchableOpacity className="h-9 rounded-[16px] bg-neutral-200/30 border border-neutral-200" />
          </View>

          {/* Gender */}
          <View className="gap-2 mt-[5px]">
            <View className="flex-row items-center gap-1">
              <Text className="text-[16px] font-medium text-[#242424]">Gender</Text>
              <Text className="text-[13px] text-[#fb2c36]">*</Text>
            </View>
            <TouchableOpacity
              className="h-9 px-3 flex-row justify-between items-center rounded-[16px] bg-neutral-200/30 border border-neutral-200"
              onPress={() => {
                setShowGenderOptions((prev) => !prev);
                setShowNationalityOptions(false);
              }}
            >
              <Text className="text-[13px] text-[#666]">{gender}</Text>
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
            {showGenderOptions && (
              <View className="rounded-[12px] border border-neutral-200 bg-white overflow-hidden">
                {genderOptions.map((option, index) => (
                  <TouchableOpacity
                    key={option}
                    className={`px-3 py-2 ${index < genderOptions.length - 1 ? 'border-b border-neutral-200' : ''}`}
                    onPress={() => {
                      setGender(option);
                      setShowGenderOptions(false);
                    }}
                  >
                    <Text className="text-[13px] text-[#242424]">{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Nationality */}
          <View className="gap-2 mt-[5px]">
            <View className="flex-row items-center gap-1">
              <Text className="text-[16px] font-medium text-[#242424]">Nationality</Text>
              <Text className="text-[13px] text-[#fb2c36]">*</Text>
            </View>
            <TouchableOpacity
              className="h-9 px-3 flex-row justify-between items-center rounded-[16px] bg-neutral-200/30 border border-neutral-200"
              onPress={() => {
                setShowNationalityOptions((prev) => !prev);
                setShowGenderOptions(false);
              }}
            >
              <Text className="text-[13px] text-[#666]">{nationality}</Text>
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
            {showNationalityOptions && (
              <View className="rounded-[12px] border border-neutral-200 bg-white overflow-hidden">
                {nationalityOptions.map((option, index) => (
                  <TouchableOpacity
                    key={option}
                    className={`px-3 py-2 ${index < nationalityOptions.length - 1 ? 'border-b border-neutral-200' : ''}`}
                    onPress={() => {
                      setNationality(option);
                      setShowNationalityOptions(false);
                    }}
                  >
                    <Text className="text-[13px] text-[#242424]">{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Divider */}
          <View className="h-px mt-[20px] mb-[15px] bg-neutral-200" />

          {/* Passport Number */}
          <View className="gap-2">
            <Text className="text-[16px] font-medium text-[#242424]">Passport Number</Text>
            <TextInput
              className="h-9 px-3 py-1 rounded-[16px] bg-neutral-200/30 border border-neutral-200 text-base"
              placeholder="232222444"
              placeholderTextColor="#666"
            />
            <Text className="text-[15.5px] text-[#979797]">Required for international flights</Text>
          </View>

          {/* Passport Expiry */}
          <View className="gap-2 mt-[5px]">
            <Text className="text-[16px] font-medium text-[#242424]">Passport Expiry</Text>
            <TouchableOpacity className="h-9 rounded-[16px] bg-neutral-200/30 border border-neutral-200" />
          </View>

          {/* Frequent Flyer Number */}
          <View className="gap-2 mt-[10px]">
            <Text className="text-[16px] font-medium text-[#242424]">Frequent Flyer Number (Optional)</Text>
            <TextInput
              className="h-9 px-3 py-1 rounded-[16px] bg-neutral-200/30 border border-neutral-200 text-base"
              placeholder="Enter your loyalty program number"
              placeholderTextColor="#999"
              style={{ fontSize: 17 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
