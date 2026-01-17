import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectTripTypes } from '@modules/Flight/store';

export type TripType = 'one-way' | 'round-trip' | 'multi-city';

interface TripTypeSelectorProps {
  selected: TripType;
  onSelect: (type: TripType) => void;
}

export default function TripTypeSelector({ selected, onSelect }: TripTypeSelectorProps) {
  const tripTypes = useAppSelector(selectTripTypes) as TripType[];

  return (
    <View className="w-[75%] px-4 mb-[27px]">
      <Text className="text-[18px] font-semibold text-[#242424] mb-3">Trip Type</Text>
      <View className="h-9 rounded-xl bg-[#f3f3f3] p-1 flex-row">
        {tripTypes.map((type) => {
          const isSelected = selected === type;
          const label = type === 'one-way' ? 'One-way' : type === 'round-trip' ? 'Round trip' : 'Multi-city';
          return (
            <TouchableOpacity
              key={type}
              onPress={() => onSelect(type)}
              className="flex-1 items-center justify-center rounded-lg"
              style={{ flex: 1 }}
            >
              {isSelected ? (
                <View className="w-full h-full items-center justify-center rounded-lg overflow-hidden">
                  <Svg width="100%" height="100%" className="absolute inset-0">
                    <Defs>
                      <LinearGradient id="tripTypeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <Stop offset="57.95%" stopColor="#07B556" />
                        <Stop offset="124.21%" stopColor="#36D97F" />
                      </LinearGradient>
                    </Defs>
                    <Rect width="100%" height="100%" rx={12.91} fill="url(#tripTypeGrad)" />
                  </Svg>
                  <Text className="text-[14px] font-semibold text-white">{label}</Text>
                </View>
              ) : (
                <Text className="text-[14px] font-medium text-[#727272]">{label}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}