import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import DateSelectionModal from './DateSelectionModal';
import { useAppSelector } from '@src/store/hooks';
import { selectDayNamesShort, selectMonthNamesShort } from '@modules/Flight/store';

export default function DateSelector() {
  const [departureModalVisible, setDepartureModalVisible] = useState(false);
  const [returnModalVisible, setReturnModalVisible] = useState(false);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const days = useAppSelector(selectDayNamesShort);
  const months = useAppSelector(selectMonthNamesShort);

  const formatDate = (date: Date) => {
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  };

  const handleDepartureDateSelect = (date: Date) => {
    setDepartureDate(date);
  };

  const handleReturnDateSelect = (date: Date) => {
    setReturnDate(date);
  };

  return (
    <View className="w-full px-4 mb-[27px]">
      <Text className="text-[18px] font-semibold text-[#242424] mb-3">Dates</Text>
      <View className="flex-row items-center justify-between gap-3">
        <TouchableOpacity
          className="flex-1 rounded-xl bg-white border border-black/10 p-4"
          onPress={() => setDepartureModalVisible(true)}
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
                <Path
                  d="M7.12587 1.78125V5.3442"
                  stroke="#999999"
                  strokeWidth={1.78147}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M14.2518 1.78125V5.3442"
                  stroke="#999999"
                  strokeWidth={1.78147}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M16.924 3.5625H4.45368C3.4698 3.5625 2.67221 4.36009 2.67221 5.34397V17.8143C2.67221 18.7982 3.4698 19.5958 4.45368 19.5958H16.924C17.9079 19.5958 18.7055 18.7982 18.7055 17.8143V5.34397C18.7055 4.36009 17.9079 3.5625 16.924 3.5625Z"
                  stroke="#999999"
                  strokeWidth={1.78147}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M2.67221 8.90625H18.7055"
                  stroke="#999999"
                  strokeWidth={1.78147}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <View>
                <Text className="text-[14px] text-[#999]">Departure</Text>
                <Text className="text-[15px] font-medium text-[#242424]">
                  {departureDate ? formatDate(departureDate) : 'Thu, Oct 9'}
                </Text>
              </View>
            </View>
            <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
              <Path
                d="M3.55914 5.33789L7.11828 8.89703L10.6774 5.33789"
                stroke="#99A1AF"
                strokeWidth={1.18638}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 rounded-xl bg-white border border-black/10 p-4"
          onPress={() => setReturnModalVisible(true)}
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
                <Path
                  d="M7.12589 1.78125V5.3442"
                  stroke="#999999"
                  strokeWidth={1.78147}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M14.2518 1.78125V5.3442"
                  stroke="#999999"
                  strokeWidth={1.78147}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M16.924 3.5625H4.45368C3.4698 3.5625 2.67221 4.36009 2.67221 5.34397V17.8143C2.67221 18.7982 3.4698 19.5958 4.45368 19.5958H16.924C17.9079 19.5958 18.7055 18.7982 18.7055 17.8143V5.34397C18.7055 4.36009 17.9079 3.5625 16.924 3.5625Z"
                  stroke="#999999"
                  strokeWidth={1.78147}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M2.67221 8.90625H18.7055"
                  stroke="#999999"
                  strokeWidth={1.78147}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <View>
                <Text className="text-[14px] text-[#999]">Return</Text>
                <Text className="text-[15px] font-medium text-[#242424]">
                  {returnDate ? formatDate(returnDate) : 'Thu, Oct 16'}
                </Text>
              </View>
            </View>
            <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
              <Path
                d="M3.55914 5.33789L7.11828 8.89703L10.6774 5.33789"
                stroke="#99A1AF"
                strokeWidth={1.18638}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>

      <DateSelectionModal
        visible={departureModalVisible}
        onClose={() => setDepartureModalVisible(false)}
        onConfirm={handleDepartureDateSelect}
        initialDate={departureDate || new Date()}
        title="Select Departure Date"
      />

      <DateSelectionModal
        visible={returnModalVisible}
        onClose={() => setReturnModalVisible(false)}
        onConfirm={handleReturnDateSelect}
        initialDate={returnDate || departureDate || new Date()}
        title="Select Return Date"
      />
    </View>
  );
}
