import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Image, Pressable, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import { selectFilters, selectAirlines, selectDepartureTimeSlots, updateFilters } from '@modules/Flight/store';
import RangeSlider from './RangeSlider';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface FiltersModalProps {
  visible: boolean;
  onClose: () => void;
}

// Close Icon
const CloseIcon = () => (
  <Svg width={23} height={23} viewBox="0 0 23 23" fill="none">
    <Path
      d="M17.25 5.75195L5.75 17.252"
      stroke="#242424"
      strokeWidth={1.91667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.75 5.75195L17.25 17.252"
      stroke="#242424"
      strokeWidth={1.91667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Checkbox Component
const Checkbox = ({ checked, onPress }: { checked: boolean; onPress: () => void }) => (
  <TouchableOpacity
    onPress={onPress}
    className={`w-4 h-4 rounded border ${
      checked ? 'bg-[#00a551] border-[#00a551]' : 'bg-[#f3f3f5] border-black/10'
    }`}
    style={{
      shadowColor: checked ? '#00a551' : '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: checked ? 0.2 : 0.05,
      shadowRadius: 2,
      elevation: checked ? 2 : 1,
    }}
  >
    {checked && (
      <View className="flex-1 items-center justify-center">
        <Svg width={10} height={10} viewBox="0 0 10 10" fill="none">
          <Path
            d="M8.33333 2.5L3.75 7.08333L1.66667 5"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    )}
  </TouchableOpacity>
);

export default function FiltersModal({ visible, onClose }: FiltersModalProps) {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const airlines = useAppSelector(selectAirlines);
  const departureTimeSlots = useAppSelector(selectDepartureTimeSlots);

  // Local state for filters (to allow canceling changes)
  const [localFilters, setLocalFilters] = useState(filters);

  // Update local state when filters change or modal opens
  useEffect(() => {
    if (visible) {
      setLocalFilters(filters);
    }
  }, [visible, filters]);

  // Handle stops
  const handleStopToggle = (stopType: 'nonstop' | 'oneStop' | 'twoPlusStops') => {
    setLocalFilters((prev) => ({
      ...prev,
      stops: {
        ...prev.stops,
        [stopType]: !prev.stops[stopType],
      },
    }));
  };

  // Handle airline selection
  const handleAirlineToggle = (airlineId: string) => {
    setLocalFilters((prev) => {
      const isSelected = prev.selectedAirlines.includes(airlineId);
      return {
        ...prev,
        selectedAirlines: isSelected
          ? prev.selectedAirlines.filter((id) => id !== airlineId)
          : [...prev.selectedAirlines, airlineId],
      };
    });
  };

  // Handle price range - optimized for immediate updates
  const handlePriceRangeChange = React.useCallback((min: number, max: number) => {
    setLocalFilters((prev) => {
      // Only update if values actually changed to prevent unnecessary re-renders
      if (prev.priceRange.min === min && prev.priceRange.max === max) {
        return prev;
      }
      return {
        ...prev,
        priceRange: { min, max },
      };
    });
  }, []);

  // Handle duration - optimized for immediate updates
  const handleDurationChange = React.useCallback((min: number, max: number) => {
    setLocalFilters((prev) => {
      // Only update if value actually changed to prevent unnecessary re-renders
      if (prev.maxDuration === max) {
        return prev;
      }
      return {
        ...prev,
        maxDuration: max,
      };
    });
  }, []);

  // Handle departure time slot
  const handleDepartureTimeToggle = (slotId: string) => {
    setLocalFilters((prev) => {
      const isSelected = prev.departureTimeSlots.includes(slotId);
      return {
        ...prev,
        departureTimeSlots: isSelected
          ? prev.departureTimeSlots.filter((id) => id !== slotId)
          : [...prev.departureTimeSlots, slotId],
      };
    });
  };

  // Handle additional options
  const handleAdditionalOptionToggle = (option: 'baggageIncluded' | 'refundable' | 'noOvernightLayover') => {
    setLocalFilters((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  // Apply filters
  const handleApply = () => {
    dispatch(updateFilters(localFilters));
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View className="flex-1 justify-end" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <Pressable className="absolute inset-0" onPress={onClose} />
        <View
          className="bg-white rounded-t-3xl border-t border-black/10"
          style={{
            height: SCREEN_HEIGHT * 0.9,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -46 },
            shadowOpacity: 0.1,
            shadowRadius: 102,
            elevation: 20,
          }}
        >
          {/* Header */}
          <View className="flex-row justify-between items-center px-4 pt-4 pb-6">
            <Text className="text-xl font-bold text-[#242424]">Filters</Text>
            <TouchableOpacity onPress={onClose} className="w-6 h-6 items-center justify-center">
              <CloseIcon />
            </TouchableOpacity>
          </View>

          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            <View className="px-4 pb-6">
              {/* Stops Section */}
              <View className="mb-6">
                <Text className="text-base font-semibold text-[#242424] mb-3">Stops</Text>
                <View className="gap-2">
                  <TouchableOpacity
                    onPress={() => handleStopToggle('nonstop')}
                    className="flex-row items-center gap-2"
                  >
                    <Checkbox checked={localFilters.stops.nonstop} onPress={() => handleStopToggle('nonstop')} />
                    <Text className="text-sm text-[#242424]">Nonstop</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleStopToggle('oneStop')}
                    className="flex-row items-center gap-2"
                  >
                    <Checkbox checked={localFilters.stops.oneStop} onPress={() => handleStopToggle('oneStop')} />
                    <Text className="text-sm text-[#242424]">1 stop</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleStopToggle('twoPlusStops')}
                    className="flex-row items-center gap-2"
                  >
                    <Checkbox
                      checked={localFilters.stops.twoPlusStops}
                      onPress={() => handleStopToggle('twoPlusStops')}
                    />
                    <Text className="text-sm text-[#242424]">2+ stops</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Divider */}
              <View className="h-px bg-black/10 mb-6" />

              {/* Airlines Section */}
              <View className="mb-6">
                <Text className="text-base font-semibold text-[#242424] mb-3">Airlines</Text>
                <View className="gap-3">
                  {airlines.map((airline) => {
                    const isSelected = localFilters.selectedAirlines.includes(airline.id);
                    return (
                      <TouchableOpacity
                        key={airline.id}
                        onPress={() => handleAirlineToggle(airline.id)}
                        className="flex-row items-center gap-3"
                      >
                        <Checkbox checked={isSelected} onPress={() => handleAirlineToggle(airline.id)} />
                        <View className="w-8 h-8 rounded-lg overflow-hidden bg-gray-100">
                          {airline.logo && (
                            <Image source={airline.logo} className="w-full h-full" resizeMode="cover" />
                          )}
                        </View>
                        <View className="flex-row items-center gap-1.5 flex-1">
                          <Text className="text-sm font-medium text-[#242424]">{airline.name}</Text>
                          <Text className="text-sm text-[#00a551]">{airline.flightCount}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>

              {/* Divider */}
              <View className="h-px bg-black/10 mb-6" />

              {/* Price Range Section */}
              <View className="mb-6">
                <Text className="text-sm font-semibold text-[#242424] mb-3">Price Range (BDT)</Text>
                <RangeSlider
                  min={0}
                  max={10000}
                  minValue={localFilters.priceRange.min}
                  maxValue={localFilters.priceRange.max}
                  onValueChange={handlePriceRangeChange}
                  formatLabel={(val) => `${val} BDT`}
                />
              </View>

              {/* Divider */}
              <View className="h-px bg-black/10 mb-6" />

              {/* Max Duration Section */}
              <View className="mb-6">
                <Text className="text-sm font-semibold text-[#242424] mb-3">Max Duration (hours)</Text>
                <RangeSlider
                  min={0}
                  max={12}
                  minValue={0}
                  maxValue={localFilters.maxDuration}
                  onValueChange={(min, max) => handleDurationChange(min, max)}
                  formatLabel={(val) => `${val}h`}
                />
              </View>

              {/* Divider */}
              <View className="h-px bg-black/10 mb-6" />

              {/* Departure Time Section */}
              <View className="mb-6">
                <Text className="text-sm font-semibold text-[#242424] mb-3">Departure Time</Text>
                <View className="flex-row flex-wrap gap-2">
                  {departureTimeSlots.map((slot) => {
                    const isSelected = localFilters.departureTimeSlots.includes(slot.id);
                    return (
                      <TouchableOpacity
                        key={slot.id}
                        onPress={() => handleDepartureTimeToggle(slot.id)}
                        className={`flex-1 min-w-[45%] p-3 rounded-[13.57px] ${
                          isSelected ? 'bg-[#00a551]/10 border border-[#00a551]' : 'bg-gray-100'
                        }`}
                      >
                        <Text className={`text-[13.57px] font-medium mb-1 ${isSelected ? 'text-[#0d0d0d]' : 'text-[#0d0d0d]'}`}>
                          {slot.label}
                        </Text>
                        <Text className="text-[11.63px] opacity-70 text-[#242424]">{slot.timeRange}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>

              {/* Divider */}
              <View className="h-px bg-black/10 mb-6" />

              {/* Additional Options Section */}
              <View className="mb-6">
                <Text className="text-[13.48px] font-semibold text-[#242424] mb-4">Additional Options</Text>
                <View className="gap-4">
                  <TouchableOpacity
                    onPress={() => handleAdditionalOptionToggle('baggageIncluded')}
                    className="flex-row items-center gap-2"
                  >
                    <Checkbox
                      checked={localFilters.baggageIncluded}
                      onPress={() => handleAdditionalOptionToggle('baggageIncluded')}
                    />
                    <Text className="text-xs text-[#242424]">Baggage included</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleAdditionalOptionToggle('refundable')}
                    className="flex-row items-center gap-2"
                  >
                    <Checkbox
                      checked={localFilters.refundable}
                      onPress={() => handleAdditionalOptionToggle('refundable')}
                    />
                    <Text className="text-xs text-[#242424]">Refundable</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleAdditionalOptionToggle('noOvernightLayover')}
                    className="flex-row items-center gap-2"
                  >
                    <Checkbox
                      checked={localFilters.noOvernightLayover}
                      onPress={() => handleAdditionalOptionToggle('noOvernightLayover')}
                    />
                    <Text className="text-xs text-[#242424]">No overnight layover</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
