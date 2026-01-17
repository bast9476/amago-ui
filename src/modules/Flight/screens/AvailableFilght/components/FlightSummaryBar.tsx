import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import {
  selectFlightCount,
  selectUpdateTime,
  selectPriceDropPercent,
  selectFilters,
  updateFilters,
} from '@modules/Flight/store';

interface FlightSummaryBarProps {
  onRecommendedPress?: () => void;
  onFiltersPress?: () => void;
}

export default function FlightSummaryBar({
  onRecommendedPress,
  onFiltersPress,
}: FlightSummaryBarProps) {
  const dispatch = useAppDispatch();
  
  // Get data from Redux store
  const flightCount = useAppSelector(selectFlightCount);
  const updateTime = useAppSelector(selectUpdateTime);
  const priceDropPercent = useAppSelector(selectPriceDropPercent);
  const filters = useAppSelector(selectFilters);

  // Format update time with fallback
  const formattedUpdateTime = updateTime || 'Updated just now';

  // Handle recommended filter toggle
  const handleRecommendedPress = () => {
    if (onRecommendedPress) {
      onRecommendedPress();
    } else {
      // Default behavior: toggle recommended filter
      dispatch(updateFilters({ recommended: !filters.recommended }));
    }
  };

  // Handle filters button press
  const handleFiltersPress = () => {
    if (onFiltersPress) {
      onFiltersPress();
    } else {
      // Default behavior: could open a filters modal or navigate
      console.log('Filters button pressed');
    }
  };

  return (
    <View className="w-full bg-white border-b border-[#f3f4f7]">
      {/* Main container with responsive padding */}
      <View className="px-4 pt-2.5 pb-3">
        {/* Top row: Flight count and action buttons - responsive flex layout */}
        <View className="flex-row items-center justify-between mb-3">
          {/* Left side: Flight count and update time */}
          <View className="flex-row items-center flex-1" style={{ gap: 6 }}>
            <Text className="text-[15px] font-semibold text-[#202020]">
              {flightCount} flights
            </Text>
            <Text className="text-[14px] text-[#868686]">
              • {formattedUpdateTime}
            </Text>
          </View>

          {/* Right side: Action buttons */}
          <View className="flex-row items-center" style={{ gap: 9 }}>
            <TouchableOpacity
              onPress={handleRecommendedPress}
              className={`px-2 py-1 rounded-full border ${
                filters.recommended 
                  ? 'border-[#00a551] bg-[#00a551]/10' 
                  : 'border-[#d1d5dc]'
              }`}
            >
              <Text className={`text-[13px] ${
                filters.recommended 
                  ? 'text-[#00a551] font-semibold' 
                  : 'text-[#1d1d1d]'
              }`}>
                Recommended
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleFiltersPress}
              className="px-[9px] py-1 rounded-full border border-[#d1d5dc]"
            >
              <Text className="text-[13px] text-[#1d1d1d]">
                Filters
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Price drop alert - responsive positioning */}
        {priceDropPercent > 0 && (
          <Text className="text-[12px] font-medium text-[#00a551] mb-[18px]">
            💡 Price dropped {priceDropPercent}% since yesterday
          </Text>
        )}
      </View>
    </View>
  );
}