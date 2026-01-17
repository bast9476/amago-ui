import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectSelectedFlightId, selectFlightDetails } from '@modules/Flight/store';

export default function BaggageAndCO2Section() {
  const selectedFlightId = useAppSelector(selectSelectedFlightId);
  const flightDetails = useAppSelector(selectFlightDetails(selectedFlightId || ''));

  if (!flightDetails || !selectedFlightId) {
    return null;
  }

  const { baggage, co2Emissions } = flightDetails;

  return (
    <View className="mx-4 mt-6 rounded-2xl border border-neutral-200 bg-white">
      <View className="p-4">
        {/* Baggage */}
        <View className="flex-row items-center gap-2">
          <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
            <G clipPath="url(#clip0_baggage)">
              <Path
                d="M3.99749 13.3252C3.6441 13.3252 3.30519 13.1848 3.05531 12.935C2.80542 12.6851 2.66504 12.3462 2.66504 11.9928V5.3305C2.66504 4.97711 2.80542 4.6382 3.05531 4.38831C3.30519 4.13843 3.6441 3.99805 3.99749 3.99805H11.9922C12.3456 3.99805 12.6845 4.13843 12.9344 4.38831C13.1843 4.6382 13.3247 4.97711 13.3247 5.3305V11.9928C13.3247 12.3462 13.1843 12.6851 12.9344 12.935C12.6845 13.1848 12.3456 13.3252 11.9922 13.3252"
                stroke="#242424"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M5.32959 11.9917V2.66448C5.32959 2.3111 5.46997 1.97218 5.71986 1.7223C5.96974 1.47241 6.30865 1.33203 6.66204 1.33203H9.32695C9.68034 1.33203 10.0193 1.47241 10.2691 1.7223C10.519 1.97218 10.6594 2.3111 10.6594 2.66448V11.9917"
                stroke="#242424"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M6.66211 13.3242H9.32702"
                stroke="#242424"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M10.6596 14.6571C11.3955 14.6571 11.9921 14.0605 11.9921 13.3246C11.9921 12.5887 11.3955 11.9922 10.6596 11.9922C9.92371 11.9922 9.32715 12.5887 9.32715 13.3246C9.32715 14.0605 9.92371 14.6571 10.6596 14.6571Z"
                stroke="#242424"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M5.33001 14.6571C6.06591 14.6571 6.66246 14.0605 6.66246 13.3246C6.66246 12.5887 6.06591 11.9922 5.33001 11.9922C4.59412 11.9922 3.99756 12.5887 3.99756 13.3246C3.99756 14.0605 4.59412 14.6571 5.33001 14.6571Z"
                stroke="#242424"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </G>
            <Defs>
              <ClipPath id="clip0_baggage">
                <Rect width={15.9894} height={15.9894} fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
          <Text className="text-[16px] font-medium text-[#242424]">Baggage:</Text>
          <Text className="text-[13px] text-[#464646] flex-1">{baggage.description}</Text>
        </View>

        {/* CO2 Emissions */}
        <View className="flex-row items-center mt-[15px]">
          <View className="flex-row items-center gap-2">
            <View className="w-px h-4 bg-[#d1d5dc]" />
            <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <G clipPath={`url(#clip0_co2_${selectedFlightId})`}>
                <Path
                  d="M7.3286 13.3241C6.15875 13.3277 5.03029 12.8914 4.16703 12.1019C3.30378 11.3123 2.76879 10.2272 2.66817 9.06166C2.56755 7.89614 2.90865 6.73537 3.62382 5.80957C4.33898 4.88377 5.37598 4.26056 6.52913 4.06356C10.3266 3.33071 11.326 2.98427 12.6584 1.33203C13.3246 2.66448 13.9909 4.11686 13.9909 6.66184C13.9909 10.3261 10.8063 13.3241 7.3286 13.3241Z"
                  stroke="#00A551"
                  strokeWidth={1.33245}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M1.33252 13.9902C1.33252 11.9915 2.56504 10.4192 4.71695 9.99282C6.32922 9.67303 7.99479 8.66037 8.66101 7.99414"
                  stroke="#00A551"
                  strokeWidth={1.33245}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id={`clip0_co2_${selectedFlightId}`}>
                  <Rect width={15.9894} height={15.9894} fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
            <View className="flex-row items-center gap-1">
              <Text className="text-[16px] text-[#242424]">CO₂:</Text>
              <Text className="text-[15px] text-[#464646]">{co2Emissions.amount}</Text>
            </View>
          </View>
          {co2Emissions.isLower && (
            <View className="mt-[5px] ml-[10px] px-2 py-1 rounded-[8px] bg-green-50 border border-[#defbeb]">
              <Text className="text-[10px] font-medium text-[#00a551]">Lower emissions</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
