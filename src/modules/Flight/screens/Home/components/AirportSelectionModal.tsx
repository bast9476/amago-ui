import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, ScrollView, Dimensions } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectAirports, selectRecentAirports, type Airport } from '@modules/Flight/store';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface AirportSelectionModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  onSelect: (airport: Airport) => void;
}

export default function AirportSelectionModal({ visible, onClose, title, onSelect }: AirportSelectionModalProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const airports = useAppSelector(selectAirports);
  const recentAirports = useAppSelector(selectRecentAirports);

  const filteredAirports = airports.filter(
    (airport) =>
      airport.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      airport.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      airport.airportName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      airport.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectAirport = (airport: Airport) => {
    onSelect(airport);
    onClose();
    setSearchQuery('');
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View className="flex-1 justify-end" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <TouchableOpacity
          className="absolute inset-0"
          
          activeOpacity={1}
          onPress={onClose}
        />
        <View
          className="bg-white rounded-t-3xl"
          style={{
            height: SCREEN_HEIGHT * 0.85,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -46 },
            shadowOpacity: 0.1,
            shadowRadius: 102,
            elevation: 20,
          }}
        >

          {/* Header */}
          <View className="px-4 pt-5">
            <View className="flex-row justify-between items-start mb-[15px]">
              <View className="flex-1 mb-[12px]">
                <Text className="text-[16px] font-bold text-[#242424] mb-1">{title}</Text>
                <Text className="text-[13px] text-[#878787]">Search for airports by city, airport name, or code</Text>
              </View>
              <TouchableOpacity onPress={onClose} className="w-10 h-10 items-center justify-center">
                <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M17.9882 5.99609L5.99609 17.9882"
                    stroke="#242424"
                    strokeWidth={1.99868}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M5.99609 5.99609L17.9882 17.9882"
                    stroke="#242424"
                    strokeWidth={1.99868}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </TouchableOpacity>
            </View>

            {/* Search Input */}
            <View className="relative mb-[17px]">
              <View className="absolute left-[9px] top-[8px] z-10">
                <Svg width={13} height={13} viewBox="0 0 13 13" fill="none">
                  <G clipPath="url(#clip0_11_5215)">
                    <Path
                      d="M10.3707 5.18533C10.3707 7.77433 7.49853 10.4707 6.53407 11.3034C6.44422 11.371 6.33485 11.4075 6.22244 11.4075C6.11002 11.4075 6.00065 11.371 5.9108 11.3034C4.94634 10.4707 2.07422 7.77433 2.07422 5.18533C2.07422 4.08515 2.51126 3.03004 3.2892 2.25209C4.06714 1.47415 5.12226 1.03711 6.22244 1.03711C7.32261 1.03711 8.37773 1.47415 9.15567 2.25209C9.93361 3.03004 10.3707 4.08515 10.3707 5.18533Z"
                      stroke="#99A1AF"
                      strokeWidth={1.03705}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M6.22245 6.74007C7.08158 6.74007 7.77803 6.04361 7.77803 5.18449C7.77803 4.32536 7.08158 3.62891 6.22245 3.62891C5.36333 3.62891 4.66687 4.32536 4.66687 5.18449C4.66687 6.04361 5.36333 6.74007 6.22245 6.74007Z"
                      stroke="#99A1AF"
                      strokeWidth={1.03705}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </G>
                  <Defs>
                    <ClipPath id="clip0_11_5215">
                      <Rect width={12.4447} height={12.4447} fill="white" />
                    </ClipPath>
                  </Defs>
                </Svg>
              </View>
              <TextInput
                className="h-[35px] rounded-[6px] bg-[#f3f3f5] border-[0.97px] border-transparent pl-[31px] pr-[9px] text-[12px] text-[#718278]"
                placeholder="Search airports..."
                placeholderTextColor="#718278"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            {/* Use Current Location */}
            <TouchableOpacity className="h-[25px] rounded-[6px] bg-white border-[0.97px] border-black/10 flex-row items-center px-[9px] mb-[17px]">
              <Svg width={13} height={13} viewBox="0 0 13 13" fill="none">
                <G clipPath="url(#clip0_11_5220)">
                  <Path
                    d="M10.3705 5.18533C10.3705 7.77433 7.49841 10.4707 6.53395 11.3034C6.4441 11.371 6.33473 11.4075 6.22231 11.4075C6.1099 11.4075 6.00053 11.371 5.91068 11.3034C4.94622 10.4707 2.0741 7.77433 2.0741 5.18533C2.0741 4.08515 2.51114 3.03004 3.28908 2.25209C4.06702 1.47415 5.12214 1.03711 6.22231 1.03711C7.32249 1.03711 8.3776 1.47415 9.15555 2.25209C9.93349 3.03004 10.3705 4.08515 10.3705 5.18533Z"
                    stroke="#242424"
                    strokeWidth={1.03705}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M6.22233 6.74007C7.08145 6.74007 7.77791 6.04361 7.77791 5.18449C7.77791 4.32536 7.08145 3.62891 6.22233 3.62891C5.36321 3.62891 4.66675 4.32536 4.66675 5.18449C4.66675 6.04361 5.36321 6.74007 6.22233 6.74007Z"
                    stroke="#242424"
                    strokeWidth={1.03705}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_11_5220">
                    <Rect width={12.4447} height={12.4447} fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
              <Text className="text-[11px] text-[#242424] ml-3">Use current location</Text>
            </TouchableOpacity>

            {/* Recent Section */}
            <View className="mb-[17px]">
              <View className="flex-row items-center mb-[15px]">
                <Svg width={13} height={13} viewBox="0 0 13 13" fill="none" className="mr-[5px]">
                  <G clipPath="url(#clip0_11_5226)">
                    <Path
                      d="M6.22229 3.11133V6.22249L8.2964 7.25954"
                      stroke="#999999"
                      strokeWidth={1.03705}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M6.22226 11.4077C9.086 11.4077 11.4075 9.08613 11.4075 6.22238C11.4075 3.35863 9.086 1.03711 6.22226 1.03711C3.35851 1.03711 1.03699 3.35863 1.03699 6.22238C1.03699 9.08613 3.35851 11.4077 6.22226 11.4077Z"
                      stroke="#999999"
                      strokeWidth={1.03705}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </G>
                  <Defs>
                    <ClipPath id="clip0_11_5226">
                      <Rect width={12.4447} height={12.4447} fill="white" />
                    </ClipPath>
                  </Defs>
                </Svg>
                <Text className="text-[14px] text-[#365341]">Recent</Text>
              </View>
              <View className="flex-row items-center gap-2 flex-wrap">
                {recentAirports.map((recent) => (
                  <TouchableOpacity
                    key={recent.code}
                    className="h-[21px] px-[9px] py-0.5 rounded-[6px] bg-[#eceef2] border-[0.97px] border-transparent"
                    onPress={() => {
                      const airport = airports.find((a) => a.code === recent.code);
                      if (airport) handleSelectAirport(airport);
                    }}
                  >
                    <Text className="text-[9px] text-[#021309]">{`${recent.code} - ${recent.city}`}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Airport List */}
          <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
            <View className="pb-[17px]">
              {filteredAirports.map((airport) => (
                <TouchableOpacity
                  key={airport.code}
                  className="rounded-[8px] border-[1px] border-black/10 p-[11px] pb-[10px] mb-[7px]"
                  onPress={() => handleSelectAirport(airport)}
                >
                  <View className="flex-row justify-between items-center">
                    <View className="flex-1 mr-2">
                      <Text className="text-[16px] font-medium text-[#242424] mb-0.5">
                        {airport.city}, {airport.country}
                      </Text>
                      <Text className="text-[13px] text-[#999]">{airport.airportName}</Text>
                    </View>
                    <View className="w-[32px] h-[23px] rounded-[3px] bg-gray-100 items-center justify-center">
                      <Text className="text-[11px] text-[#242424]">{airport.code}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
