import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Dimensions } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectCabinClasses, type CabinClass } from '@modules/Flight/store';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface TravelersClassModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (travelers: { adults: number; children: number; infants: number }, cabinClass: string) => void;
  initialTravelers?: { adults: number; children: number; infants: number };
  initialCabinClass?: string;
}

export default function TravelersClassModal({
  visible,
  onClose,
  onConfirm,
  initialTravelers = { adults: 1, children: 0, infants: 0 },
  initialCabinClass = 'economy',
}: TravelersClassModalProps) {
  const [cabinClass, setCabinClass] = useState<CabinClass>(
    (initialCabinClass.toLowerCase().replace(' ', '-') as CabinClass) || 'economy'
  );
  const [adults, setAdults] = useState(initialTravelers.adults);
  const [children, setChildren] = useState(initialTravelers.children);
  const [infants, setInfants] = useState(initialTravelers.infants);

  // Reset state when modal opens
  useEffect(() => {
    if (visible) {
      setCabinClass((initialCabinClass.toLowerCase().replace(' ', '-') as CabinClass) || 'economy');
      setAdults(initialTravelers.adults);
      setChildren(initialTravelers.children);
      setInfants(initialTravelers.infants);
    }
  }, [visible, initialTravelers, initialCabinClass]);

  const cabinClasses = useAppSelector(selectCabinClasses);

  const handleIncrement = (type: 'adults' | 'children' | 'infants') => {
    if (type === 'adults') setAdults((prev) => prev + 1);
    else if (type === 'children') setChildren((prev) => prev + 1);
    else setInfants((prev) => prev + 1);
  };

  const handleDecrement = (type: 'adults' | 'children' | 'infants') => {
    if (type === 'adults' && adults > 1) setAdults((prev) => prev - 1);
    else if (type === 'children' && children > 0) setChildren((prev) => prev - 1);
    else if (type === 'infants' && infants > 0) setInfants((prev) => prev - 1);
  };

  const handleClose = () => {
    onConfirm(
      { adults, children, infants },
      cabinClasses.find((c) => c.id === cabinClass)?.name || 'Economy'
    );
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View className="flex-1 justify-end" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <TouchableOpacity className="absolute inset-0" activeOpacity={1} onPress={handleClose} />
        <View
          className="bg-white rounded-t-3xl"
          style={{
            height: SCREEN_HEIGHT * 0.75,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -46 },
            shadowOpacity: 0.1,
            shadowRadius: 102,
            elevation: 20,
          }}
        >

          {/* Header */}
          <View className="px-4 pt-[25px] pb-4 relative">
            <TouchableOpacity onPress={handleClose} className="absolute right-4 top-5 w-10 h-10 items-center justify-center z-10">
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

            <View className='mb-[17px]'>
              <Text className="text-[17px] font-bold text-[#242424] mb-[8px]">Travelers & Class</Text>
              <Text className="text-[14px] text-[#717182]">Select the number of travelers and cabin class for your flight</Text>
            </View>
          </View>

          <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
            {/* Cabin Class Section */}
            <View className="mb-[40px]">
              <Text className="text-[18px] font-semibold text-[#242424] mb-[18px]">Cabin Class</Text>
              <View className="gap-3.5">
                {cabinClasses.map((cls) => {
                  const isSelected = cabinClass === cls.id;
                  return (
                    <TouchableOpacity
                      key={cls.id}
                      onPress={() => setCabinClass(cls.id)}
                      className={`h-[40px] rounded-[8px] flex-row items-center px-[15px] ${
                        isSelected ? 'bg-[#00a551] border-[0.97px] border-black/10' : 'border-[0.97px] border-black/10'
                      }`}
                    >
                      {/* Radio Button */}
                      <View
                        className={`w-[12px] h-[12px] rounded-full mr-[10px] ${
                          isSelected ? 'bg-white' : 'bg-[#ccc]/40'
                        }`}
                      >
                        {isSelected && (
                          <View className="flex-1 items-center justify-center">
                            <Svg width={11} height={7} viewBox="0 0 11 7" fill="none">
                              <G clipPath="url(#clip0_11_5479)">
                                <Path
                                  d="M5.25352 5.7048C6.6854 5.7048 7.84616 4.54404 7.84616 3.11217C7.84616 1.68029 6.6854 0.519531 5.25352 0.519531C3.82165 0.519531 2.66089 1.68029 2.66089 3.11217C2.66089 4.54404 3.82165 5.7048 5.25352 5.7048Z"
                                  fill="#00A551"
                                  stroke="#00A551"
                                  strokeWidth={0.518527}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </G>
                              <Defs>
                                <ClipPath id="clip0_11_5479">
                                  <Rect width={6.22232} height={6.22232} fill="white" transform="translate(2.14233)" />
                                </ClipPath>
                              </Defs>
                            </Svg>
                          </View>
                        )}
                      </View>
                      <View className="flex-row items-center gap-1">
                        <Text className={`text-[14px] font-medium ${isSelected ? 'text-white' : 'text-[#242424]'}`}>
                          {cls.name}
                        </Text>
                        <Text className={`text-[13px] ${isSelected ? 'text-white/80' : 'text-[#666d69]'}`}>
                          {cls.description}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Travelers Section */}
            <View className="mb-6">
              <Text className="text-[18px] font-semibold text-[#242424] mb-2">Travelers</Text>
              <View className="gap-1">
                {/* Adults */}
                <View className="flex-row justify-between items-center h-[53px]">
                  <View className="gap-0.5">
                    <Text className="text-[14px] font-medium text-[#242424]">Adults</Text>
                    <Text className="text-[12px] text-[#666]">12+ years</Text>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <TouchableOpacity
                      onPress={() => handleDecrement('adults')}
                      disabled={adults <= 1}
                      className={`w-[25px] h-[25px] rounded-full border-[0.97px] border-black/10 items-center justify-center ${
                        adults <= 1 ? 'opacity-50' : ''
                      }`}
                    >
                      <Text className="text-[11px] text-[#242424]">-</Text>
                    </TouchableOpacity>
                    <View className="w-[25px] items-center">
                      <Text className="text-[12px] font-semibold text-[#242424]">{adults}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => handleIncrement('adults')}
                      className="w-[25px] h-[25px] rounded-full border-[0.97px] border-black/10 items-center justify-center"
                    >
                      <Text className="text-[11px] text-[#242424]">+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Children */}
                <View className="flex-row justify-between items-center h-[53px]">
                  <View className="gap-0.5">
                    <Text className="text-[14px] font-medium text-[#242424]">Children</Text>
                    <Text className="text-[12px] text-[#666]">2-11 years</Text>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <TouchableOpacity
                      onPress={() => handleDecrement('children')}
                      disabled={children <= 0}
                      className={`w-[25px] h-[25px] rounded-full border-[0.97px] border-black/10 items-center justify-center ${
                        children <= 0 ? 'opacity-50' : ''
                      }`}
                    >
                      <Text className="text-[11px] text-[#242424]">-</Text>
                    </TouchableOpacity>
                    <View className="w-[25px] items-center">
                      <Text className="text-[12px] font-semibold text-[#242424]">{children}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => handleIncrement('children')}
                      className="w-[25px] h-[25px] rounded-full border-[0.97px] border-black/10 items-center justify-center"
                    >
                      <Text className="text-[11px] text-[#242424]">+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Infants */}
                <View className="flex-row justify-between items-center h-[53px]">
                  <View className="gap-0.5">
                    <Text className="text-[14px] font-medium text-[#242424]">Infants</Text>
                    <Text className="text-[12px] text-[#666]">Under 2 years</Text>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <TouchableOpacity
                      onPress={() => handleDecrement('infants')}
                      disabled={infants <= 0}
                      className={`w-[25px] h-[25px] rounded-full border-[0.97px] border-black/10 items-center justify-center ${
                        infants <= 0 ? 'opacity-50' : ''
                      }`}
                    >
                      <Text className="text-[11px] text-[#242424]">-</Text>
                    </TouchableOpacity>
                    <View className="w-[25px] items-center">
                      <Text className="text-[12px] font-semibold text-[#242424]">{infants}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => handleIncrement('infants')}
                      className="w-[25px] h-[25px] rounded-full border-[0.97px] border-black/10 items-center justify-center"
                    >
                      <Text className="text-[11px] text-[#242424]">+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
