import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { usePaymentDetails } from '../hooks/usePaymentDetails';

export default function PaymentDetailsFooter() {
  const { total, selectedPaymentMethod, paymentMethods, handleContinue } = usePaymentDetails();

  // Get payment method name from the selected method ID
  const paymentMethodName = useMemo(() => {
    const method = paymentMethods.find((m) => m.id === selectedPaymentMethod);
    return method?.name || 'bKash';
  }, [selectedPaymentMethod, paymentMethods]);
  return (
    <View
      className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#f3f4f7] px-4 py-4 shadow-sm z-50"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 50,
      }}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-1 gap-1">
          <Text className="text-base text-[#656565]">Total</Text>
          <Text className="text-base font-semibold text-[#242424]">
            {total} • {paymentMethodName}
          </Text>
        </View>
        <TouchableOpacity
          className="w-[106px] h-[44px] items-center justify-center rounded-[14px] px-6 py-2 bg-[#07b556]"
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Text className="text-sm font-semibold text-white">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
