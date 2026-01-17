import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import TravelersClassModal from './TravelersClassModal';

export default function TravelersSelector() {
  const [modalVisible, setModalVisible] = useState(false);
  const [travelers, setTravelers] = useState({ adults: 1, children: 0, infants: 0 });
  const [cabinClass, setCabinClass] = useState('Economy');

  const totalTravelers = travelers.adults + travelers.children + travelers.infants;
  const travelerText = totalTravelers === 1 ? '1 Traveler' : `${totalTravelers} Travelers`;

  const handleConfirm = (selectedTravelers: { adults: number; children: number; infants: number }, selectedClass: string) => {
    setTravelers(selectedTravelers);
    setCabinClass(selectedClass);
  };

  return (
    <View className="w-full px-4 mb-4">
      <Text className="text-[18px] font-semibold text-[#242424] mb-[20px]">Travelers & Class</Text>
      <TouchableOpacity
        className="w-full h-[78px] rounded-xl bg-white border border-black/10 flex-row items-center justify-between px-4"
        onPress={() => setModalVisible(true)}
      >
        <View className="flex-row items-center gap-3">
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              d="M15.4394 20.2663V18.3364C15.4394 17.3127 15.0328 16.331 14.3089 15.6071C13.585 14.8832 12.6033 14.4766 11.5796 14.4766H5.78977C4.76608 14.4766 3.78431 14.8832 3.06044 15.6071C2.33658 16.331 1.92992 17.3127 1.92992 18.3364V20.2663"
              stroke="#999999"
              strokeWidth={1.92993}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M15.4394 3.01953C16.2671 3.23411 17.0001 3.71746 17.5234 4.3937C18.0467 5.06995 18.3306 5.90081 18.3306 6.75587C18.3306 7.61094 18.0467 8.4418 17.5234 9.11805C17.0001 9.79429 16.2671 10.2776 15.4394 10.4922"
              stroke="#999999"
              strokeWidth={1.92993}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M21.2292 20.264V18.334C21.2286 17.4788 20.9439 16.648 20.42 15.9721C19.896 15.2962 19.1624 14.8134 18.3343 14.5996"
              stroke="#999999"
              strokeWidth={1.92993}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M8.68467 10.6162C10.8164 10.6162 12.5445 8.88808 12.5445 6.75634C12.5445 4.6246 10.8164 2.89648 8.68467 2.89648C6.55293 2.89648 4.82481 4.6246 4.82481 6.75634C4.82481 8.88808 6.55293 10.6162 8.68467 10.6162Z"
              stroke="#999999"
              strokeWidth={1.92993}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <View>
            <Text className="text-[17px] font-semibold text-[#242424]">{travelerText}</Text>
            <Text className="text-[14px] font-medium text-[#7c7c7c]">{cabinClass}</Text>
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
      </TouchableOpacity>

      <TravelersClassModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirm}
        initialTravelers={travelers}
        initialCabinClass={cabinClass}
      />
    </View>
  );
}
