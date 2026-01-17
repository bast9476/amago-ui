import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect, G, ClipPath } from 'react-native-svg';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
  selectSelectedFlightId,
  selectFlightDetails,
  FareOption,
  setSelectedFareOption,
} from '@modules/Flight/store';

// Check Icon
const CheckIcon = () => (
  <Svg width={12} height={9} viewBox="0 0 12 9" fill="none">
    <Path
      d="M11.3256 0.666016L3.99715 7.99451L0.666016 4.66338"
      stroke="#00A551"
      strokeWidth={1.33245}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// X Icon
const XIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M11.9923 3.99805L3.99756 11.9928"
      stroke="#D1D5DC"
      strokeWidth={1.33245}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.99756 3.99805L11.9923 11.9928"
      stroke="#D1D5DC"
      strokeWidth={1.33245}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Radio Button Selected
const RadioSelected = () => (
  <View className="w-4 h-4 rounded-full bg-neutral-200/30 border border-neutral-200">
    <Svg width={18} height={18} viewBox="0 1 16 8" fill="none">
      <G clipPath="url(#clip0_radio)">
        <Path
          d="M6.77059 7.32828C8.61032 7.32828 10.1017 5.83688 10.1017 3.99715C10.1017 2.15741 8.61032 0.666016 6.77059 0.666016C4.93085 0.666016 3.43945 2.15741 3.43945 3.99715C3.43945 5.83688 4.93085 7.32828 6.77059 7.32828Z"
          fill="#171717"
          stroke="#171717"
          strokeWidth={0.666227}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_radio">
          <Rect width={7.99472} height={7.99472} fill="white" transform="translate(2.77344)" />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
);

// Radio Button Unselected
const RadioUnselected = () => (
  <View className="w-4 h-4 rounded-full bg-neutral-200/30 border border-neutral-200" />
);

type AmenityWithDetail = FareOption['amenities'][number] & { detail?: string };

interface FareOptionCardProps {
  fareOption: FareOption;
  onSelect: () => void;
}

const FareOptionCard = ({ fareOption, onSelect }: FareOptionCardProps) => {
  const isSelected = fareOption.isSelected;
  const isEconomy = fareOption.id === 'economy';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onSelect}
      className="rounded-2xl border"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        backgroundColor: isSelected ? 'rgba(7, 181, 86, 0.06)' : '#ffffff',
        borderColor: isSelected ? '#d7f3e5' : '#e5e7eb',
      }}
    >
      <View className="p-3.5 gap-3">
        {/* Header */}
        <View className="flex-row justify-between items-start">
          <View className="flex-col gap-0.5">
            <Text className="text-[20px] font-semibold text-[#242424]">{fareOption.name}</Text>
            {isEconomy ? (
              <Text className="text-[15px] mt-[12px] text-[#838383]">Included</Text>
            ) : (
              <Text className="text-[15px] mt-[12px] font-medium text-[#00a551]">
                +{fareOption.priceDelta} {fareOption.currency}
              </Text>
            )}
          </View>
          {isSelected ? <RadioSelected /> : <RadioUnselected />}
        </View>

        {/* Amenities */}
        <View className="flex-col">
          {(fareOption.amenities as AmenityWithDetail[]).map((amenity, index) => (
            <View key={index} className="flex-row items-start gap-2 mt-[7px]">
              <View className="w-4 h-4 items-center justify-center">
                {amenity.included ? <CheckIcon /> : <XIcon />}
              </View>
              <View className="flex-1">
                <Text
                  className={`text-[15px] ${amenity.included ? 'text-[#364153]' : 'text-[#99a1af]'}`}
                >
                  {amenity.label}
                </Text>
                {amenity.detail ? <Text className="text-[13px] mt-[5px] text-[#8b8b8b]">{amenity.detail}</Text> : null}
              </View>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function FareOptionsSection() {
  const dispatch = useAppDispatch();
  const selectedFlightId = useAppSelector(selectSelectedFlightId);
  const flightDetails = useAppSelector(selectFlightDetails(selectedFlightId || ''));

  if (!flightDetails || !selectedFlightId) {
    return null;
  }

  return (
    <View className="px-5 mt-[55px]">
      {/* Section Header */}
      <View className="flex-row justify-between items-center mb-5">
        <Text className="text-[22px] font-semibold text-[#242424]">Confirm Fare Option</Text>
        <TouchableOpacity className="flex-row items-center gap-1.5">
          <Svg width={18} height={18} viewBox="0 0 16 16" fill="none">
            <G clipPath="url(#clip0_info)">
              <Path
                d="M7.99478 14.6566C11.6743 14.6566 14.657 11.6738 14.657 7.9943C14.657 4.31483 11.6743 1.33203 7.99478 1.33203C4.31532 1.33203 1.33252 4.31483 1.33252 7.9943C1.33252 11.6738 4.31532 14.6566 7.99478 14.6566Z"
                stroke="#00A551"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M7.99463 10.659V7.99414"
                stroke="#00A551"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M7.99463 5.33008H8.00129"
                stroke="#00A551"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </G>
            <Defs>
              <ClipPath id="clip0_info">
                <Rect width={15.9894} height={15.9894} fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
          <Text className="text-[13px] font-medium text-[#00a551]">Fare rules</Text>
        </TouchableOpacity>
      </View>

      {/* Fare Options */}
      <View className="gap-[12px] items-center">
        {flightDetails.fareOptions.map((fareOption) => (
          <View key={fareOption.id} className="w-full">
            <FareOptionCard
              fareOption={fareOption}
              onSelect={() =>
                dispatch(setSelectedFareOption({ flightId: selectedFlightId, fareOptionId: fareOption.id }))
              }
            />
          </View>
        ))}
      </View>
    </View>
  );
}
