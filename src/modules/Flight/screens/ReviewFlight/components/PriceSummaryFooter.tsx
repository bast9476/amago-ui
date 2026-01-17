import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectSelectedFlight } from '@modules/Flight/store';

export default function PriceSummaryFooter() {
  const selectedFlight = useAppSelector(selectSelectedFlight);

  if (!selectedFlight) {
    return null;
  }

  const baseFare = parseInt(selectedFlight.price.replace(/,/g, '')) || 5000;
  const taxes = 800;
  const total = baseFare + taxes;

  return (
    <View className="px-5 mt-[60px] mb-[40px]">
      {/* Price Summary Card */}
      <View
        className="rounded-2xl bg-white border border-neutral-200 px-[12px] py-[20px] mb-[65px]"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 4,
        }}
      >
        <View>
          <View>
            <View className="flex-row justify-between items-center mb-[12px]">
              <Text className="text-[17px] text-[#656565]">Base fare</Text>
              <Text className="text-[17px] font-medium text-[#242424]">
                {baseFare.toLocaleString()} {selectedFlight.currency}
              </Text>
            </View>
            <View className="flex-row justify-between items-center mb-[12px]">
              <Text className="text-[17px] text-neutral-500">Taxes & fees</Text>
              <Text className="text-[17px] font-medium text-[#242424]">
                {taxes.toLocaleString()} {selectedFlight.currency}
              </Text>
            </View>
          </View>
          <View className="h-px bg-neutral-200 mb-[12px]" />
          <View className="flex-row justify-between items-center">
            <Text className="text-[18px] text-[#242424]">Total</Text>
            <Text className="text-[22px] font-medium text-[#242424]">
              {total.toLocaleString()} {selectedFlight.currency}
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center justify-center mt-[20px]">
            <Text className="text-[17px] text-[#00a551]">View breakdown</Text>
            <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
              <Path
                d="M5.99609 11.9928L9.99345 7.99541L5.99609 3.99805"
                stroke="#00A551"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer with Continue Button */}
      <View
        className="w-full border-t border-neutral-200 px-4 py-4"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          backgroundColor: '#ffffff',
        }}
      >
        <View className="gap-4">
          <View className="flex-row items-center gap-3">
            <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
              <Path
                d="M22.2544 24.0043L20.0039 13.7522L24.3798 9.37624C26.2552 7.50084 26.8804 5.00031 26.2552 3.75005C25.005 3.12492 22.5044 3.75005 20.629 5.62545L16.2531 10.0014L6.00096 7.75089C5.37583 7.62587 4.87573 7.87592 4.62567 8.37603L4.25059 9.00116C4.00054 9.62629 4.12557 10.2514 4.62567 10.6265L11.2521 15.0024L8.75154 18.7532H5.00075L3.75049 20.0035L7.50128 22.504L10.0018 26.2548L11.2521 25.0045V21.2537L15.0029 18.7532L19.3788 25.3796C19.7539 25.8797 20.379 26.0047 21.0041 25.7547L21.6293 25.5046C22.1294 25.1296 22.3794 24.6295 22.2544 24.0043Z"
                stroke="#868686"
                strokeWidth={2.50053}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <View>
              <Text className="text-[14px] font-medium text-[#242424]">
                {selectedFlight.departure.time} → {selectedFlight.arrival.time}
              </Text>
              <Text className="text-[12px] text-[#8e8e8e]">
                {selectedFlight.departure.code} - {selectedFlight.arrival.code}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center self-end gap-3">
            <Text className="text-[20px] font-semibold text-[#242424]">
              {total.toLocaleString()} {selectedFlight.currency}
            </Text>
            <TouchableOpacity
              className="h-[46px] w-[55%] rounded-[6.8px] overflow-hidden items-center justify-center"
              style={{ position: 'relative' }}
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
                  <LinearGradient id="continueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <Stop offset="0%" stopColor="#07B556" />
                    <Stop offset="100%" stopColor="#36D97F" />
                  </LinearGradient>
                </Defs>
                <Rect width="100" height="100" rx={7} fill="url(#continueGrad)" />
              </Svg>
              <View className="flex-row items-center justify-center gap-2 relative z-10">
                <Text className="text-sm font-medium text-white">Continue to Payment</Text>
                <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                  <Path
                    d="M3.33105 7.99414H12.6582"
                    stroke="#FAFAFA"
                    strokeWidth={1.33245}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M7.99463 3.33203L12.6582 7.99562L7.99463 12.6592"
                    stroke="#FAFAFA"
                    strokeWidth={1.33245}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </View>
            </TouchableOpacity>
          </View>

          <Text className="text-sm text-center text-[#e17100]">
            Please accept terms and conditions
          </Text>
        </View>
      </View>
    </View>
  );
}
