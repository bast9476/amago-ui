import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectSelectedFlight, selectSearchParameters } from '@modules/Flight/store';

export default function FlightSummaryCard() {
  const selectedFlight = useAppSelector(selectSelectedFlight);
  const searchParameters = useAppSelector(selectSearchParameters);

  if (!selectedFlight) {
    return null;
  }

  // Date is already formatted as "Thu, Oct 9" in Redux, so use it directly
  const route = searchParameters.route || 'DAC → CGP';
  const date = searchParameters.date || 'Thu, Oct 9';
  const pointsGradientId = `pointsGrad_${selectedFlight.id}`;

  return (
    <View
      className="mx-4 mt-[21px] px-[20px] py-[25px] rounded-[15px] bg-white border border-[#efefef]"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      <View className="flex-col">
        {/* Route and Date Header */}
        <View className="flex-row items-center justify-between mb-[25px]">
          <View className="flex-row items-center gap-3 flex-1 min-w-0">
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <Path
                d="M7.71631 1.92773V5.78598"
                stroke="#1B1B1B"
                strokeWidth={1.92912}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M15.4331 1.92773V5.78598"
                stroke="#1B1B1B"
                strokeWidth={1.92912}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M18.3265 3.85742H4.82268C3.75725 3.85742 2.89355 4.72112 2.89355 5.78654V19.2904C2.89355 20.3558 3.75725 21.2195 4.82268 21.2195H18.3265C19.392 21.2195 20.2556 20.3558 20.2556 19.2904V5.78654C20.2556 4.72112 19.392 3.85742 18.3265 3.85742Z"
                stroke="#1B1B1B"
                strokeWidth={1.92912}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M2.89355 9.64453H20.2556"
                stroke="#1B1B1B"
                strokeWidth={1.92912}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <View className='flex-col'>
              <Text className="text-[17px] font-medium text-[#1b1b1b]" numberOfLines={1}>
                {route} •
              </Text>
              <Text className='text-[17px] text-[#1b1b1b] mt-[2px]'>{date}</Text>
            </View>
          </View>
          <View className="px-[10px] py-[5px] rounded-[7px] bg-[#e7f8ef] flex-shrink-0">
            <View className="flex-row items-center gap-1.5">
              <Svg width={11} height={11} viewBox="0 0 11 11" fill="none">
                <Path
                  d="M5.13672 2.56836V5.13673L6.84897 5.99286"
                  stroke="#00A551"
                  strokeWidth={0.856124}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M5.13658 9.41671C7.5007 9.41671 9.4172 7.50021 9.4172 5.13609C9.4172 2.77197 7.5007 0.855469 5.13658 0.855469C2.77246 0.855469 0.855957 2.77197 0.855957 5.13609C0.855957 7.50021 2.77246 9.41671 5.13658 9.41671Z"
                  stroke="#00A551"
                  strokeWidth={0.856124}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text className="text-[10px] text-[#00a551] mt-[2px]">Price locked 7:49</Text>
            </View>
          </View>
        </View>

        {/* Flight Details */}
        <View className="flex-col gap-7">
          {/* Times and Route */}
          <View className="flex-row justify-between items-start mb-[10px]">
            {/* Departure */}
            <View className="flex-col gap-1">
              <Text className="text-[24px] font-medium text-[#242424]">{selectedFlight.departure.time}</Text>
              <Text className="text-[14px] text-[#747474]">{selectedFlight.departure.code}</Text>
              <Text className="text-[13px] text-[#a8a8a8]">Terminal 2</Text>
            </View>

            {/* Center: Duration and Flight Icon */}
            <View className="flex-1 items-center px-2">
              <View className="flex-col items-center relative w-full">
                {/* Dashed lines - positioned behind the icon */}
                <View className="absolute top-10 left-0 right-0 flex-row justify-between px-2">
                  <View className="flex-1 h-px border-t border-dashed border-[#d1d5dc] mr-7" />
                  <View className="flex-1 h-px border-t border-dashed border-[#d1d5dc] ml-7" />
                </View>
                {/* Airplane icon and duration */}
                <View className="relative z-10 items-center">
                  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <Path
                      d="M14.2994 15.4224L12.8534 8.83508L15.6651 6.02342C16.8701 4.81843 17.2718 3.21177 16.8701 2.40844C16.0668 2.00677 14.4601 2.40844 13.2551 3.61343L10.4435 6.42509L3.85615 4.97909C3.45449 4.89876 3.13315 5.05943 2.97249 5.38076L2.73149 5.78242C2.57082 6.18409 2.65116 6.58575 2.97249 6.82675L7.23014 9.63841L5.62348 12.0484H3.21349L2.41016 12.8517L4.82015 14.4584L6.42681 16.8684L7.23014 16.0651V13.6551L9.64013 12.0484L12.4518 16.306C12.6928 16.6274 13.0944 16.7077 13.4961 16.547L13.8978 16.3864C14.2191 16.1454 14.3798 15.8241 14.2994 15.4224Z"
                      stroke="#00A551"
                      strokeWidth={1.60666}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                  <View className="flex-col items-center mt-1">
                    <Text className="text-[13px] text-[#747474]">{selectedFlight.duration}</Text>
                    <Text className="text-[13px] text-[#a8a8a8] mt-1">{selectedFlight.stops}</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Arrival */}
            <View className="flex-col items-end gap-1">
              <Text className="text-[24px] font-medium text-[#242424]">{selectedFlight.arrival.time}</Text>
              <Text className="text-[14px] text-[#747474]">{selectedFlight.arrival.code}</Text>
              <Text className="text-[13px] text-[#a8a8a8]">Terminal 1</Text>
            </View>
          </View>

          {/* Divider */}
          <View className="h-px bg-neutral-200" />

          {/* Airline Info */}
          <View className="flex-col">
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                {selectedFlight.logo && (
                  <Image
                    source={selectedFlight.logo}
                    className="w-[37px] h-[37px] rounded-[8px]"
                    resizeMode="cover"
                  />
                )}
                <View className="flex-col">
                  <Text className="text-[12px] font-medium text-[#242424]">{selectedFlight.airline}</Text>
                  <Text className="text-[11px] text-[#7e7e7e]">
                    Flight {selectedFlight.flightNumber} • Economy
                  </Text>
                </View>
              </View>
              <View className="px-1.5 py-0.5 rounded-[5px] bg-green-50 border border-[#defbeb]">
                <Text className="text-[8px] text-[#00a551]">{selectedFlight.onTimePercent}% on-time</Text>
              </View>
            </View>

            {/* Price and Change Flight */}
            <View className="flex-row items-center gap-3">
              <TouchableOpacity className="flex-1 pr-2">
                <Text className="text-[18px] font-medium text-[#00a551]" numberOfLines={1}>
                  Change flight
                </Text>
              </TouchableOpacity>
              <View className="flex-col items-end gap-1 flex-shrink-0 ml-auto">
                <Text className="text-xl font-medium text-[#242424]">
                  {selectedFlight.price} {selectedFlight.currency}
                </Text>
                <Text className="text-[13px] text-[#999]">per adult</Text>
                <View className="mt-1">
                  <View
                    className="rounded-[7px] overflow-hidden items-center justify-center self-end"
                    style={{
                      position: 'relative',
                      height: 23,
                      width: 83,
                    }}
                  >
                    <Svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}
                      pointerEvents="none"
                    >
                      <Defs>
                        <LinearGradient id={pointsGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                          <Stop offset="0%" stopColor="#07B556" />
                          <Stop offset="100%" stopColor="#36D97F" />
                        </LinearGradient>
                      </Defs>
                    <Rect width={100} height={100} rx={7} fill={`url(#${pointsGradientId})`} />
                    </Svg>
                    <Text
                    className="text-[11px] font-medium text-white text-center"
                      style={{ position: 'relative', zIndex: 10 }}
                      numberOfLines={1}
                    >
                      +{selectedFlight.points} points
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}