import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlightStackParamList } from '@src/navigation/types';
import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import { selectFlightDetails, setSelectedFlight } from '@modules/Flight/store';

type NavigationProp = NativeStackNavigationProp<FlightStackParamList>;

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface FlightDetailsProps {
  flightId: string;
}

export default function FlightDetails({ flightId }: FlightDetailsProps) {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();
  const flightDetails = useAppSelector(selectFlightDetails(flightId));

  if (!flightDetails) {
    return null;
  }

  const { fareOptions, baggage, co2Emissions } = flightDetails;

  const handleDetailsPress = () => {
    // Set the selected flight before navigating
    dispatch(setSelectedFlight(flightId));
    // Navigate to ReviewFlight screen
    navigation.navigate('ReviewFlight');
  };

  // Render amenity icon (check or cross)
  const renderAmenityIcon = (included: boolean, uniqueId: string) => (
    <Svg width={8} height={8} viewBox="0 0 9 9" fill="none">
      {included ? (
        <G clipPath={`url(#clip0_check_${uniqueId})`}>
          <Path
            d="M4.04636 7.41791C5.90868 7.41791 7.41839 5.90819 7.41839 4.04587C7.41839 2.18354 5.90868 0.673828 4.04636 0.673828C2.18403 0.673828 0.674316 2.18354 0.674316 4.04587C0.674316 5.90819 2.18403 7.41791 4.04636 7.41791Z"
            stroke="#00A551"
            strokeWidth={0.674408}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M3.03491 4.04745L3.70932 4.72186L5.05814 3.37305"
            stroke="#00A551"
            strokeWidth={0.674408}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      ) : (
        <G clipPath={`url(#clip0_cross_${uniqueId})`}>
          <Path
            d="M4.0466 7.41986C5.90893 7.41986 7.41864 5.91015 7.41864 4.04782C7.41864 2.18549 5.90893 0.675781 4.0466 0.675781C2.18427 0.675781 0.674561 2.18549 0.674561 4.04782C0.674561 5.91015 2.18427 7.41986 4.0466 7.41986Z"
            stroke="#99A1AF"
            strokeWidth={0.674408}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M5.05814 3.03516L3.03491 5.05838"
            stroke="#99A1AF"
            strokeWidth={0.674408}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M3.03491 3.03516L5.05814 5.05838"
            stroke="#99A1AF"
            strokeWidth={0.674408}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      )}
      <Defs>
        <ClipPath id={`clip0_check_${uniqueId}`}>
          <Rect width={8.09289} height={8.09289} fill="white" />
        </ClipPath>
        <ClipPath id={`clip0_cross_${uniqueId}`}>
          <Rect width={8.09289} height={8.09289} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );

  // Calculate fare option card width (responsive)
  const cardWidth = Math.min((SCREEN_WIDTH - 64) / 3, 120); // Max 120px, min based on screen width

  return (
    <View className="pt-3 pb-12">
      {/* Fare Options Section */}
      <View className="mb-4">
        <Text className="text-base font-semibold text-[#242424] mb-4 px-4">Fare Options</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
        >
          {fareOptions.map((fareOption) => (
            <View
              key={fareOption.id}
              style={{ width: cardWidth }}
              className={`py-4 px-3 rounded-xl border ${
                fareOption.id === 'premium-economy'
                  ? 'bg-[#f3fbf7] border-[#00a551]'
                  : 'bg-white border-[#f3f4f7]'
              }`}
            >
              <View className="items-center gap-2">
                <Text
                  className={`text-center ${
                    fareOption.id === 'premium-economy' ? 'text-xs' : 'text-sm'
                  } font-semibold text-[#242424]`}
                >
                  {fareOption.name}
                </Text>
                <View className="items-start gap-1.5 w-full">
                  {fareOption.amenities.map((amenity, index) => (
                    <View key={index} className="flex-row items-center gap-1.5">
                      <View className="w-2 h-2 items-center justify-center">
                        {renderAmenityIcon(amenity.included, `${flightId}_${fareOption.id}_${index}`)}
                      </View>
                      <Text className="text-[10px] font-medium text-[#999] flex-1" numberOfLines={2}>
                        {amenity.label}
                      </Text>
                    </View>
                  ))}
                </View>
                <Text className="text-xs font-medium text-[#00a551] mt-1">
                  +{fareOption.priceDelta} {fareOption.currency}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Baggage and CO2 Section */}
      <View className="gap-3 mb-4 px-4">
        {/* Baggage */}
        <View className="flex-row items-center gap-3">
          <View className="w-4 h-4">
            <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <Path
                d="M3.97443 13.2461C3.62308 13.2461 3.28612 13.1065 3.03768 12.8581C2.78923 12.6096 2.64966 12.2726 2.64966 11.9213V5.29743C2.64966 4.94608 2.78923 4.60912 3.03768 4.36067C3.28612 4.11223 3.62308 3.97266 3.97443 3.97266H11.9231C12.2744 3.97266 12.6114 4.11223 12.8598 4.36067C13.1083 4.60912 13.2478 4.94608 13.2478 5.29743V11.9213C13.2478 12.2726 13.1083 12.6096 12.8598 12.8581C12.6114 13.1065 12.2744 13.2461 11.9231 13.2461"
                stroke="#737373"
                strokeWidth={1.32477}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M5.29907 11.9224V2.64899C5.29907 2.29764 5.43865 1.96068 5.68709 1.71224C5.93553 1.46379 6.27249 1.32422 6.62385 1.32422H9.27339C9.62474 1.32422 9.9617 1.46379 10.2101 1.71224C10.4586 1.96068 10.5982 2.29764 10.5982 2.64899V11.9224"
                stroke="#737373"
                strokeWidth={1.32477}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M6.62378 13.2461H9.27333"
                stroke="#737373"
                strokeWidth={1.32477}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M10.5982 14.5714C11.3299 14.5714 11.923 13.9783 11.923 13.2466C11.923 12.515 11.3299 11.9219 10.5982 11.9219C9.86656 11.9219 9.27344 12.515 9.27344 13.2466C9.27344 13.9783 9.86656 14.5714 10.5982 14.5714Z"
                stroke="#737373"
                strokeWidth={1.32477}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M5.29914 14.5714C6.03079 14.5714 6.62391 13.9783 6.62391 13.2466C6.62391 12.515 6.03079 11.9219 5.29914 11.9219C4.56749 11.9219 3.97437 12.515 3.97437 13.2466C3.97437 13.9783 4.56749 14.5714 5.29914 14.5714Z"
                stroke="#737373"
                strokeWidth={1.32477}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <Text className="text-sm text-neutral-500">Baggage:</Text>
          <Text className="text-sm text-[#242424] flex-1" numberOfLines={1}>
            {baggage.description}
          </Text>
        </View>

        {/* CO2 Emissions */}
        <View className="flex-row items-center gap-3">
          <View className="w-4 h-4">
            <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <G clipPath={`url(#clip0_co2_${flightId})`}>
                <Path
                  d="M7.94857 14.572C11.6068 14.572 14.5724 11.6063 14.5724 7.94808C14.5724 4.28982 11.6068 1.32422 7.94857 1.32422C4.29031 1.32422 1.32471 4.28982 1.32471 7.94808C1.32471 11.6063 4.29031 14.572 7.94857 14.572Z"
                  stroke="#737373"
                  strokeWidth={1.32477}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M7.94873 5.29883V7.94837"
                  stroke="#737373"
                  strokeWidth={1.32477}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M7.94873 10.5977H7.95539"
                  stroke="#737373"
                  strokeWidth={1.32477}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id={`clip0_co2_${flightId}`}>
                  <Rect width={15.8973} height={15.8973} fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          </View>
          <Text className="text-sm text-neutral-500">CO₂:</Text>
          <Text className="text-sm text-[#242424]">{co2Emissions.amount}</Text>
          {co2Emissions.isLower && (
            <View className="ml-2 px-2 py-1 rounded-lg bg-green-50 border border-[#defbeb]">
              <Text className="text-[10px] font-medium text-[#00a551]">Lower emissions</Text>
            </View>
          )}
        </View>
      </View>

      {/* Share and Details Buttons */}
      <View className="flex-row gap-2 px-4 pt-2">
        <TouchableOpacity className="flex-1 flex-row items-center justify-center px-4 py-3 rounded-full bg-white border border-black/10">
          <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
            <G clipPath={`url(#clip0_share_${flightId})`}>
              <Path
                d="M11.923 5.29854C13.0204 5.29854 13.9101 4.40886 13.9101 3.31138C13.9101 2.2139 13.0204 1.32422 11.923 1.32422C10.8255 1.32422 9.93579 2.2139 9.93579 3.31138C9.93579 4.40886 10.8255 5.29854 11.923 5.29854Z"
                stroke="#242424"
                strokeWidth={1.32477}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M3.97422 9.93526C5.0717 9.93526 5.96138 9.04558 5.96138 7.9481C5.96138 6.85062 5.0717 5.96094 3.97422 5.96094C2.87674 5.96094 1.98706 6.85062 1.98706 7.9481C1.98706 9.04558 2.87674 9.93526 3.97422 9.93526Z"
                stroke="#242424"
                strokeWidth={1.32477}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M11.923 14.572C13.0204 14.572 13.9101 13.6823 13.9101 12.5848C13.9101 11.4873 13.0204 10.5977 11.923 10.5977C10.8255 10.5977 9.93579 11.4873 9.93579 12.5848C9.93579 13.6823 10.8255 14.572 11.923 14.572Z"
                stroke="#242424"
                strokeWidth={1.32477}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M5.68994 8.94922L10.214 11.5855"
                stroke="#242424"
                strokeWidth={1.32477}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M10.2074 4.3125L5.68994 6.9488"
                stroke="#242424"
                strokeWidth={1.32477}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </G>
            <Defs>
              <ClipPath id={`clip0_share_${flightId}`}>
                <Rect width={15.8973} height={15.8973} fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
          <Text className="text-sm font-medium text-[#242424] ml-2">Share</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={handleDetailsPress}
          className="flex-1 flex-row items-center justify-center px-4 py-3 rounded-full bg-white border border-black/10"
        >
          <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
            <Path
              d="M1.98706 1.98828V12.5865C1.98706 12.9378 2.12663 13.2748 2.37508 13.5232C2.62352 13.7717 2.96048 13.9112 3.31183 13.9112H13.91"
              stroke="#242424"
              strokeWidth={1.32477}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M11.9229 11.26V5.96094"
              stroke="#242424"
              strokeWidth={1.32477}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M8.61108 11.2611V3.3125"
              stroke="#242424"
              strokeWidth={1.32477}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M5.29907 11.2606V9.27344"
              stroke="#242424"
              strokeWidth={1.32477}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <Text className="text-sm font-medium text-[#242424] ml-2">Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
