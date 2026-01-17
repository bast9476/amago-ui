import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import DateSelectionModal from './DateSelectionModal';
import { useAppSelector } from '@src/store/hooks';
import { selectDayNamesShort, selectMonthNamesShort } from '@modules/Flight/store';

export default function DepartureDate() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const days = useAppSelector(selectDayNamesShort);
  const months = useAppSelector(selectMonthNamesShort);

  const formatDate = (date: Date) => {
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <View className="w-full px-4 mb-[27px]">
      <Text className="text-base font-semibold text-[#242424] mb-3">Departure Date</Text>
      <TouchableOpacity
        className="h-[56px] rounded-lg bg-white border-[1.22px] border-black/10"
        onPress={() => setModalVisible(true)}
      >
        <View className="flex-row items-center h-full px-[13px] gap-3">
          <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
            <Path
              d="M5.32983 1.33203V3.99694"
              stroke="#878787"
              strokeWidth={1.33245}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M10.6596 1.33203V3.99694"
              stroke="#878787"
              strokeWidth={1.33245}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M12.6583 2.66406H3.33111C2.59522 2.66406 1.99866 3.26062 1.99866 3.99652V13.3237C1.99866 14.0596 2.59522 14.6561 3.33111 14.6561H12.6583C13.3942 14.6561 13.9907 14.0596 13.9907 13.3237V3.99652C13.9907 3.26062 13.3942 2.66406 12.6583 2.66406Z"
              stroke="#878787"
              strokeWidth={1.33245}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M1.99866 6.66211H13.9907"
              stroke="#878787"
              strokeWidth={1.33245}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <Text className="text-sm font-medium text-[#242424]">
            {selectedDate ? formatDate(selectedDate) : 'Choose departure date'}
          </Text>
        </View>
      </TouchableOpacity>

      <DateSelectionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleDateSelect}
        initialDate={selectedDate || new Date()}
        title="Select Departure Date"
      />
    </View>
  );
}
