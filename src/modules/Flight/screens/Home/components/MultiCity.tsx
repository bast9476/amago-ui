import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlightStackParamList } from '@src/navigation/types';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import AirportSelectionModal from './AirportSelectionModal';
import DateSelectionModal from './DateSelectionModal';
import type { Airport } from '@modules/Flight/store';
import { useAppSelector } from '@src/store/hooks';
import { selectDayNamesShort, selectMonthNamesShort } from '@modules/Flight/store';

type NavigationProp = NativeStackNavigationProp<FlightStackParamList>;

export default function MultiCity() {
  const navigation = useNavigation<NavigationProp>();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'from' | 'to'>('from');
  const [fromAirport, setFromAirport] = useState<Airport | null>(null);
  const [toAirport, setToAirport] = useState<Airport | null>(null);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const days = useAppSelector(selectDayNamesShort);
  const months = useAppSelector(selectMonthNamesShort);

  const handleOpenModal = (type: 'from' | 'to') => {
    setModalType(type);
    setModalVisible(true);
  };

  const handleSelectAirport = (airport: Airport) => {
    if (modalType === 'from') {
      setFromAirport(airport);
    } else {
      setToAirport(airport);
    }
  };

  const formatDate = (date: Date) => {
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <View className="w-full px-4 mb-[27px]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Segment Card */}
        <View
          className="rounded-[13.85px] bg-white border-[1.21px] border-black/10 mb-[27px]"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 0.99 },
            shadowOpacity: 0.1,
            shadowRadius: 2.97,
            elevation: 2,
          }}
        >
          <View className="py-[21px] px-[16px]">
            {/* Segment Header */}
            <View className="flex-row justify-between items-center mb-4">
              <View className="flex-row items-center gap-3">
                <View className="w-[28px] h-[28px] items-center justify-center rounded-[4px]">
                  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <Path
                      d="M7.41303 10.7079C7.86793 10.7079 8.2367 10.3391 8.2367 9.88422C8.2367 9.42932 7.86793 9.06055 7.41303 9.06055C6.95813 9.06055 6.58936 9.42932 6.58936 9.88422C6.58936 10.3391 6.95813 10.7079 7.41303 10.7079Z"
                      stroke="#717182"
                      strokeWidth={1.64734}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M7.41303 4.94227C7.86793 4.94227 8.2367 4.5735 8.2367 4.11859C8.2367 3.66369 7.86793 3.29492 7.41303 3.29492C6.95813 3.29492 6.58936 3.66369 6.58936 4.11859C6.58936 4.5735 6.95813 4.94227 7.41303 4.94227Z"
                      stroke="#717182"
                      strokeWidth={1.64734}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M7.41303 16.4735C7.86793 16.4735 8.2367 16.1047 8.2367 15.6498C8.2367 15.1949 7.86793 14.8262 7.41303 14.8262C6.95813 14.8262 6.58936 15.1949 6.58936 15.6498C6.58936 16.1047 6.95813 16.4735 7.41303 16.4735Z"
                      stroke="#717182"
                      strokeWidth={1.64734}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M12.355 10.7079C12.8099 10.7079 13.1787 10.3391 13.1787 9.88422C13.1787 9.42932 12.8099 9.06055 12.355 9.06055C11.9001 9.06055 11.5314 9.42932 11.5314 9.88422C11.5314 10.3391 11.9001 10.7079 12.355 10.7079Z"
                      stroke="#717182"
                      strokeWidth={1.64734}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M12.355 4.94227C12.8099 4.94227 13.1787 4.5735 13.1787 4.11859C13.1787 3.66369 12.8099 3.29492 12.355 3.29492C11.9001 3.29492 11.5314 3.66369 11.5314 4.11859C11.5314 4.5735 11.9001 4.94227 12.355 4.94227Z"
                      stroke="#717182"
                      strokeWidth={1.64734}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M12.355 16.4735C12.8099 16.4735 13.1787 16.1047 13.1787 15.6498C13.1787 15.1949 12.8099 14.8262 12.355 14.8262C11.9001 14.8262 11.5314 15.1949 11.5314 15.6498C11.5314 16.1047 11.9001 16.4735 12.355 16.4735Z"
                      stroke="#717182"
                      strokeWidth={1.64734}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </View>
                <Text className="text-[16px] font-medium text-[#242424]">Segment 1</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <TouchableOpacity className="w-9 h-9 items-center justify-center rounded-[8px]">
                  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                    <G clipPath="url(#clip0_11_4974)">
                      <Path
                        d="M13.1787 5.27148H6.58936C5.86152 5.27148 5.27148 5.86152 5.27148 6.58936V13.1787C5.27148 13.9066 5.86152 14.4966 6.58936 14.4966H13.1787C13.9066 14.4966 14.4966 13.9066 14.4966 13.1787V6.58936C14.4966 5.86152 13.9066 5.27148 13.1787 5.27148Z"
                        stroke="#242424"
                        strokeWidth={1.31787}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <Path
                        d="M2.63575 10.5435C1.91091 10.5435 1.31787 9.95044 1.31787 9.22561V2.63623C1.31787 1.9114 1.91091 1.31836 2.63575 1.31836H9.22512C9.94995 1.31836 10.543 1.9114 10.543 2.63623"
                        stroke="#242424"
                        strokeWidth={1.31787}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </G>
                    <Defs>
                      <ClipPath id="clip0_11_4974">
                        <Rect width={15.8145} height={15.8145} fill="white" />
                      </ClipPath>
                    </Defs>
                  </Svg>
                </TouchableOpacity>
                <TouchableOpacity className="w-9 h-9 items-center justify-center rounded-[8px] opacity-50">
                  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                    <G clipPath="url(#clip0_11_4978)">
                      <Path
                        d="M6.58936 7.24805V11.2017"
                        stroke="#242424"
                        strokeWidth={1.31787}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <Path
                        d="M9.2251 7.24805V11.2017"
                        stroke="#242424"
                        strokeWidth={1.31787}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <Path
                        d="M12.5198 3.95312V13.1782C12.5198 13.5278 12.381 13.863 12.1338 14.1101C11.8867 14.3573 11.5514 14.4961 11.2019 14.4961H4.61255C4.26303 14.4961 3.92782 14.3573 3.68067 14.1101C3.43352 13.863 3.29468 13.5278 3.29468 13.1782V3.95312"
                        stroke="#242424"
                        strokeWidth={1.31787}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <Path
                        d="M1.97681 3.95312H13.8377"
                        stroke="#242424"
                        strokeWidth={1.31787}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <Path
                        d="M5.27148 3.95411V2.63623C5.27148 2.28671 5.41033 1.95151 5.65748 1.70436C5.90463 1.45721 6.23984 1.31836 6.58936 1.31836H9.22511C9.57463 1.31836 9.90984 1.45721 10.157 1.70436C10.4041 1.95151 10.543 2.28671 10.543 2.63623V3.95411"
                        stroke="#242424"
                        strokeWidth={1.31787}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </G>
                    <Defs>
                      <ClipPath id="clip0_11_4978">
                        <Rect width={15.8145} height={15.8145} fill="white" />
                      </ClipPath>
                    </Defs>
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>

            {/* Error Message */}
            <View className="h-[46px] rounded-[10px] bg-[#d4183d]/10 border-[1.21px] border-[#d4183d]/20 items-center justify-center mb-4">
              <View className="flex-row items-center gap-2">
                <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                  <Path
                    d="M7.90724 14.4971C11.5465 14.4971 14.4966 11.5469 14.4966 7.90773C14.4966 4.26852 11.5465 1.31836 7.90724 1.31836C4.26803 1.31836 1.31787 4.26852 1.31787 7.90773C1.31787 11.5469 4.26803 14.4971 7.90724 14.4971Z"
                    stroke="#D4183D"
                    strokeWidth={1.31787}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M7.90723 5.27148V7.90723"
                    stroke="#D4183D"
                    strokeWidth={1.31787}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M7.90723 10.543H7.91389"
                    stroke="#D4183D"
                    strokeWidth={1.31787}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
                <Text className="text-[14px] font-medium text-[#d4183d]">Origin airport is required</Text>
              </View>
            </View>

            {/* Form Fields */}
            <View className="gap-4">
              {/* From Field */}
              <View className="gap-2">
                <Text className="text-[16px] font-medium text-[#242424]">From</Text>
                <TouchableOpacity
                  className="h-[47px] rounded-[10px] bg-[#f3f3f5] px-4 flex-row items-center gap-3"
                  onPress={() => handleOpenModal('from')}
                >
                  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <Path
                      d="M14.6614 15.8143L13.1788 9.06022L16.0617 6.17737C17.2972 4.94186 17.709 3.29452 17.2972 2.47084C16.4735 2.05901 14.8261 2.47084 13.5906 3.70635L10.7078 6.5892L3.95368 5.10659C3.54184 5.02423 3.21237 5.18896 3.04764 5.51843L2.80054 5.93027C2.6358 6.3421 2.71817 6.75394 3.04764 7.00104L7.4131 9.88389L5.76576 12.3549H3.29474L2.47107 13.1786L4.94208 14.8259L6.58943 17.2969L7.4131 16.4733V14.0023L9.88412 12.3549L12.767 16.7204C13.0141 17.0498 13.4259 17.1322 13.8377 16.9675L14.2496 16.8027C14.579 16.5556 14.7438 16.2262 14.6614 15.8143Z"
                      stroke="#717182"
                      strokeWidth={1.64734}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                  <Text className="text-[16px] text-[#717182] flex-1">
                    {fromAirport ? `${fromAirport.code} - ${fromAirport.city}` : 'Origin airport'}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* To Field */}
              <View className="gap-2">
                <Text className="text-[16px] font-medium text-[#242424]">To</Text>
                <TouchableOpacity
                  className="h-[47px] rounded-[10px] bg-[#f3f3f5] px-4 flex-row items-center gap-3"
                  onPress={() => handleOpenModal('to')}
                >
                  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <Path
                      d="M14.6614 15.8143L13.1788 9.06022L16.0617 6.17737C17.2972 4.94186 17.709 3.29452 17.2972 2.47084C16.4735 2.05901 14.8261 2.47084 13.5906 3.70635L10.7078 6.5892L3.95368 5.10659C3.54184 5.02423 3.21237 5.18896 3.04764 5.51843L2.80054 5.93027C2.6358 6.3421 2.71817 6.75394 3.04764 7.00104L7.4131 9.88389L5.76576 12.3549H3.29474L2.47107 13.1786L4.94208 14.8259L6.58943 17.2969L7.4131 16.4733V14.0023L9.88412 12.3549L12.767 16.7204C13.0141 17.0498 13.4259 17.1322 13.8377 16.9675L14.2496 16.8027C14.579 16.5556 14.7438 16.2262 14.6614 15.8143Z"
                      stroke="#717182"
                      strokeWidth={1.64734}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                  <Text className="text-[16px] text-[#717182] flex-1">
                    {toAirport ? `${toAirport.code} - ${toAirport.city}` : 'Destination airport'}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Date Field */}
              <View className="gap-2">
                <Text className="text-[16px] font-medium text-[#242424]">Date</Text>
                <TouchableOpacity
                  className="h-[47px] rounded-[10px] bg-[#f3f3f5] px-4 flex-row items-center gap-3"
                  onPress={() => setDateModalVisible(true)}
                >
                  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <Path
                      d="M6.58936 1.64844V4.94312"
                      stroke="#717182"
                      strokeWidth={1.64734}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M13.1787 1.64844V4.94312"
                      stroke="#717182"
                      strokeWidth={1.64734}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M15.6498 3.29492H4.11841C3.20861 3.29492 2.47107 4.03246 2.47107 4.94227V16.4737C2.47107 17.3835 3.20861 18.121 4.11841 18.121H15.6498C16.5596 18.121 17.2972 17.3835 17.2972 16.4737V4.94227C17.2972 4.03246 16.5596 3.29492 15.6498 3.29492Z"
                      stroke="#717182"
                      strokeWidth={1.64734}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M2.47107 8.23828H17.2972"
                      stroke="#717182"
                      strokeWidth={1.64734}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                  <Text className="text-[16px] text-[#717182]">
                    {selectedDate ? formatDate(selectedDate) : 'Select date'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Add Another Flight Button */}
        <TouchableOpacity
          className="rounded-lg bg-white border-[1.22px] border-black/10 px-[13px] py-[10px] mb-4 w-[50%]"
          onPress={() => navigation.navigate('AvailableFlight')}
          activeOpacity={0.7}
        >
          <View className="flex-row items-center justify-center gap-[2px]">
            <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <Path
                d="M3.33118 7.99414H12.6583"
                stroke="#151515"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M7.99475 3.33203V12.6592"
                stroke="#151515"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text className="text-[16px] text-[#151515]">Add another flight</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Airport Selection Modal */}
      <AirportSelectionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title={modalType === 'from' ? 'From' : 'To'}
        onSelect={handleSelectAirport}
      />

      {/* Date Selection Modal */}
      <DateSelectionModal
        visible={dateModalVisible}
        onClose={() => setDateModalVisible(false)}
        onConfirm={handleDateSelect}
        initialDate={selectedDate || undefined}
        title="Select Date"
      />
    </View>
  );
}
