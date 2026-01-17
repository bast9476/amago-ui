import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectSelectedFlight } from '@modules/Flight/store';

interface SelectedFlightFooterProps {
  onContinue?: () => void;
}

export default function SelectedFlightFooter({ onContinue }: SelectedFlightFooterProps) {
  const selectedFlight = useAppSelector(selectSelectedFlight);

  // Don't render if no flight is selected
  if (!selectedFlight) {
    return null;
  }

  // Extract data from selected flight
  const departureTime = selectedFlight.departure.time;
  const arrivalTime = selectedFlight.arrival.time;
  const airline = selectedFlight.airline;
  const price = selectedFlight.price;
  const currency = selectedFlight.currency;

  // Default continue handler
  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    } else {
      // Default behavior: navigate to booking or next step
      console.log('Continue with flight:', selectedFlight);
    }
  };

  return (
    <View
      className="w-full bg-white border-t border-[#f3f4f7] px-4"
      style={{
        minHeight: 65.87,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -8 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 10,
      }}
    >
      <View className="flex-row items-center gap-2.5">
        {/* Selected flight summary */}
        <View className="flex-1 px-2.5 rounded-[13px] bg-gray-50" style={{ height: 45.41 }}>
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-[11.36px] font-medium text-[#242424]">
                {departureTime} → {arrivalTime}
              </Text>
              <Text className="text-[9.74px] text-[#999]">{airline}</Text>
            </View>
            <Text className="text-[12.99px] font-medium text-[#242424]">
              {price} {currency}
            </Text>
          </View>
        </View>

        {/* Continue button */}
        <TouchableOpacity
          onPress={handleContinue}
          className="px-[26px] rounded-full items-center justify-center bg-[#00a551]"
          style={{ height: 45.41 }}
          activeOpacity={0.8}
        >
          <Text className="text-[11.36px] font-semibold text-white">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
